---
title: Incident Events
description: What events within a platform raise an incident?
---

For each product at Glasswall there needs to be different levels of incident classification for each product based on the product owners expectations. The following document describes the different scenarios in which an incident would be declared.

## Priority 1 (P1)

**These incidents are covered by out of hours support.**

* A key mailflow microservice has stopped processing from a queue.
* No mail is able to be relayed to external mail services across multiple tenants.
* No mail is able to be relayed into FileTrust Email.

## Priority 2 (P1)

**These incidents are covered by out of hours support.**

* A single tenant is having mailflow issues due to either external mail system configuration.
* Capacity limits have been hit and queue sizes exceed acceptable limits.
* Process time is above accepted SLOs.
* The infrastructure has become unhealthy and unstable.

## Priority 3 (P1)

**These incidents are covered by in UK business hours.**

* A single mail has been bounced due to malformed MIME or out of acceptable configured boundaries for the tenant i.e mailsize.
* A non-essential mail service is not running.

