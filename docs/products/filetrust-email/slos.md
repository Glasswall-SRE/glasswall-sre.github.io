---
title: SLOs and SLIs
description: FileTrust Email's Service Levels
---


# Definition

**Service Level Objectives (SLO)** are designed to provide a certain level of service, defined using SLIs.

**Service Level Indicators (SLI)** are ways for us to communicate quantitative data about systems. To agree that an SLO is met.

**Error Budget** is a way of using an SLO to define the capacity of error. For example, if we have an SLO stating: "95% of emails will successfully pass through FileTrust" then every 100 emails we have an error budget of 5 emails. You can use an error budget to control the velocity of releases. For example, if the success rate is 99% and you have a 4% budget left so you could increase releases that could increase the risk of the budget shrinking. In inverse, if the success rate is 80% due to increased releases that are breaking the system then you slow down releases till you have the budget.

This table defines the team's current SLOs and SLIs. These will adapt and change.

Examples can be found on the [SRE workbook](https://landing.google.com/sre/workbook/chapters/slo-document/ "Example SLO Document")

# SLI and SLOs



## Portal
### Availability

The proportion of successful requests as measured by the FileTrust-Portal Metrics.
```
sum without(action, controller, instance, method, pod, code)(http_requests_received_total{job="filetrust-portal", code=~"(5.*)"})
/
sum without(action, code, controller, instance, method, pod)(http_requests_received_total{job="filetrust-portal"})
```
**SLO 99%** of requests are success.

### Latency
The proportion of sufficiently fast requests as measured by the FileTrust-Portal Metrics.

```
histogram_quantile(0.90, sum without(instance, controller, pod, code, action, method)(rate(http_request_duration_seconds_bucket{job="filetrust-portal"}[5m])))

histogram_quantile(0.99, sum without(instance, controller, pod, code, action, method)(rate(http_request_duration_seconds_bucket{job="filetrust-portal"}[5m])))
```
**SLO**
90% of requests < 800ms
99% of request < 1500ms


### Reachability

Proportion of requests successfully reach SAAS as measured by BlackBox Metrics.
```
avg_over_time(probe_success{instance=~"http.+"}[7d]) *100
```
**SLO** 99.9%

## Mail
### Reachability

Proportion of requests successfully reach SAAS as measured by BlackBox Metrics.
```
avg_over_time(probe_success{instance=~"smtp.+"}[7d]) *100
```
**SLO** 99.9%

### Availability

Proportion of successful requests as measured by the SMTP-Receiver Metrics.

```
sum without(instance, pod, command, status) (smtprx_error_transaction_total{status!~"501"})
/
sum without(instance, pod, command)(smtprx_start_transaction_total)
```

**SLO** 99% of requests are success.



### Latency

Proportion of mails are delivered sufficiently fast as measured by Azure Log analytics.
```
fluentbit_CL
	| where TimeGenerated > ago(1h)
	| where time_t > ago(1h)
	| where kubernetes_labels_app_s == 'filetrust-smtpreceiver'
	| where log_s contains "Session Created"
	| project filetrust_transid_g, EmailInTime = time_t
	| join kind= inner (
	fluentbit_CL
	| where kubernetes_labels_app_s == 'filetrust-smtptransmitter'
	| where log_s contains "successfully relayed"
	| project filetrust_transid_g, EmailOutTime = time_t
	) on filetrust_transid_g
	| extend Duration = EmailOutTime - EmailInTime
	| project Duration = toint(Duration) / 10000000
	| order by Duration asc
	| where Duration >= 0
	| summarize percentiles(Duration, 90, 99)
```
**SLO** 90% of mail relayed < 30 seconds
99% of mail relayed < 5 minutes


### Process
Proportion of mails is successfully delivered as measured by Azure Log analytics.
```
fluentbit_CL
	| where TimeGenerated > ago(3d)
	| where time_t > ago(3d)
	| where kubernetes_labels_app_s == 'filetrust-smtpreceiver'
	| where log_s contains "[info] The Tenant ID header value is"
	| project filetrust_transid_g
	| join kind= leftouter (
	fluentbit_CL
	| where kubernetes_labels_app_s == 'filetrust-smtptransmitter'
	| where log_s contains "successfully relayed"
	| project filetrust_transid_g
	) on filetrust_transid_g
	| summarize MailsIn = dcount(filetrust_transid_g), MailsOut = dcount(filetrust_transid_g1)
	| project (todouble(MailsOut) / todouble(MailsIn)) *100
```
**SLO** 99.9% of mails successfully relayed









