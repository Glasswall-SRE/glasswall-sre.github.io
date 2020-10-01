---
title: SLO and SLIs
description: SLO and SLIs
---

## SLI and SLOs

SLOs and SLIs are the core concepts of any SRE team. They allow us to keep the velocity of change high while balancing a platforms reliability. They are similar to SLAs but fit better in an engineering context

### Service Level Objectives (SLO)

SLOs are designed to provide a certain level of service, defined using SLIs.

### Service Level Indicators (SLI)

SLIs are ways for us to communicate quantitative data about systems. To agree that an SLO is met.

### Error Budget

Is a way of using an SLO to define the capacity of error. For example, if we have an SLO stating: "95% of emails will successfully pass through FileTrust" then every 100 emails we have an error budget of 5 emails. You can use an error budget to control the velocity of releases. For example, if the success rate is 99% and you have a 4% budget left so you could increase releases that could increase the risk of the budget shrinking. In inverse, if the success rate is 80% due to increased releases that are breaking the system then you slow down releases till you have the budget.

Examples can be found on the [SRE workbook](https://landing.google.com/sre/workbook/chapters/slo-document/ "Example SLO Document")

