---
title: Production Readiness Review
description: PRR - Onboarding a new product with SRE.
---

The PRR - Production Readiness Review is a key part of the SRE process of onboarding a new product to production. This checklist and process make sure that any new product is in the best position it needs to be supported by SRE and in turn the best experience for our customers.

Each of the following sections will be completed by a designated SRE team member, product owner and any technical members of the team. Once the readiness review has been completed and every section is signed off then SRE can support the product in production.

### SLIs, SLOs and SLAs

SLIs and SLOs allow SRE to monitor a platform from an objective way. They are directly tied to a customer's experience with the platform.

* Each customer-facing service of the product will require:
    - Fully defined Service Level Objectives i.e. 99.9% of requests are 200s
    - Fully defined Service Level indicators i.e. HTTP request statuses.
    - More information can be found here: [SLIs and SLOs](https://cloud.google.com/blog/products/gcp/sre-fundamentals-slis-slas-and-slos) from the Product Owner

### Monitoring

To make sure the SRE team knows when the platform is healthy or becoming degraded it's of the utmost importance that we can monitor the platform via DataDog.

* Monitoring is setup for at least:
    - [4 Golden Signals](https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems)
        - Latency
        - Traffic
        - Errors
        - Saturation
    - Alerting on anomalies to the 4 golden signals.

* PagerDuty
    - Can the product be broken into different technical services to be monitored, for example, is there an API component and a UI, these would count as separate services. [Services](https://glasswall-solutions-ltd.pagerduty.com/service-directory)
    - Does the product break down into different business services? Does it provide different services to clients? [Business service](https://glasswall-solutions-ltd.pagerduty.com/business-services)
    - Does the product require a unique escalation policy? Do devs or external teams need to be notified during a PagerDuty incident? [Escalation policy](https://glasswall-solutions-ltd.pagerduty.com/escalation_policies) (including additional [teams](https://glasswall-solutions-ltd.pagerduty.com/teams), if required)

* Out of hours versus in hours support:
    - What key events within the product require an out of hours call?
    - What key events within the product require just business hours on call.

### Security

* Security:
    - Data backups follow our backup policy [Backup Policy](https://github.com/filetrust/Glasswall-Security-Policies/blob/master/policies/backup.md)
    - Data during transport uses TLS 1.3
    - Data during rest is encrypted using AES 256 symmetric encryption.

### Capacity management

* Scaling:
    - What is the planned usage for the next 6 months?
    - Confirm the system can handle the planned usage for 6 months.
    - How the system automatically scales to customer demands.

### Customer support and success

* Fully automated customer onboarding process.
* First line customer support is aware of the new product, common requests they might receive and know when to contact SRE.
* Customer success understands the product, limitations, and capabilities.

### Technical understanding

* SRE have access to technical documentation to help with debugging and understanding of the product [Technical documentation](https://dev.azure.com/glasswall/Glasswall%20Cloud/_wiki/wikis/Service%20Reliability%20Engineering%20Wiki/278/Guides)
* Handover session, to include:
    - Full architecture breakdown
    - Design overviews
    - Description of the production setup
    - Deep dives on various request flow in the system
    - Hands-on exercises/demo for various aspects of system operations
* [Playbooks](https://dev.azure.com/glasswall/Glasswall%20Cloud/_wiki/wikis/Service%20Reliability%20Engineering%20Wiki/347/Playbooks) for known issues that are **NOT** bugs
* Change management:
    - Process for pushing to production, if different from [standard SRE process](https://dev.azure.com/glasswall/Glasswall%20Cloud/_wiki/wikis/Service%20Reliability%20Engineering%20Wiki/477/Releasing-To-Production)
* The SRE team member performing the PRR does a full handover to the rest of the team so the rest of SRE are comfortable supporting the product in production.

### System quality

* The code has at least 80% code coverage.
* Unit and integration tests are fully automated.
* The product's infrastructure can be deployed with Pulumi.
* The product's infrastructure can be re-deployed in under 5 minutes.
* The product has a QA environment before to validate it works before going to production.

