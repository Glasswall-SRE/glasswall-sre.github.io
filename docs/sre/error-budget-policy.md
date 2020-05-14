---
title: Error Budget Policy
description: Error Budget Policy
---

## Service Overview

The SAAS service performs the process of using the Glasswall Core Engine to analyse, sanitise and reconstruct tenant's email. New releases of the code are pushed daily. This policy applies to all releases to production.

## Goals

The goals of this policy are to:

* Protect customers from repeated SLO degradation
* Provide an incentive to balance reliability with other features
* This policy is not intended to serve as a punishment for missing SLOs. Halting change is undesirable; this policy gives teams permission to focus exclusively on reliability when data indicates that reliability is more important than other product features.

## SLO Miss Policy

If the service is performing at or above its SLO, then releases (including data changes) will proceed according to the release policy.

The error budget calculation is based on the past 4 weeks of SAAS statistics. An error budget is 1 minus the SLO of the service. A 99.9% SLO service has a 0.1% error budget. If our service receives 1, 000, 000 requests in four weeks, a 99.9% availability SLO gives us a budget of 1, 000 errors over that period. If the service has exceeded its error budget for the preceding month's window, we will halt all changes and releases other than P1 issues, security fixes and bug fixes until the following has been completed:

* Postmortem has been completed.
* Bugs from the postmortem have been fixed in production.
* Other actions from the postmortem such as process change have been enacted.
* Service is back within its SLO. This can be overridden by the SRE manager if the time to recover is too long **OR** 2 days from the above actions being completed and there has been no further degradation to the SLO.

Depending upon the cause of the SLO miss, the team may devote additional resources to working on reliability instead of feature work.

The team must work on reliability if:

* A code bug or procedural error caused the service itself to exceed the error budget.
* A postmortem reveals an opportunity to soften a hard dependency.
* Miscategorized errors fail to consume budget that would have caused the service to miss its SLO.

The team may continue to work on non-reliability features if:

* The outage was caused by a company-wide networking problem.
* The outage was caused by a service maintained by another team, who have themselves frozen releases to address their reliability issues.
* The error budget was consumed by users out of scope for the SLO (e.g., load tests or penetration testers).
* Miscategorized errors consume budget even though no users were impacted.

## Escalation Policy

In the event of a disagreement between parties regarding the calculation of the error budget or the specific actions it defines, the issue should be escalated to the VP of Engineering to make a decision.

## Background

Error budgets are the tool SRE uses to balance service reliability with the pace of innovation. Changes are a major source of instability, representing roughly 70% of Googles outages, and development work for features competes with development work for stability. The error budget forms a control mechanism for diverting attention to stability as needed.

A P1 is the highest priority of bug: all hands on deck; drop everything else until this is fixed.

[Our current SLI and SLOs](/Policy/SLI-and-SLO)

