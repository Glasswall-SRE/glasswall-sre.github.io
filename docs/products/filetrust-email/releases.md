---
title: Releases
description: FileTrust Email Release notes
---

## [v1.1]

2020-03-20

### Software

#### Features

* File ByPass: New service that drastically drops held file rate and improves safety to our customers: [Read More](https://medium.com/glasswall-engineering/saas-file-bypass-e8c11c25def8)

#### Bug Fixes

* Portal T & Cs correctly displayed.
* Policy sender domains enforced.
* General resilience improvements.

### Services

* Monitoring via DataDog.
* Improved business service mapping in PagerDuty.
* High availability cache is now live.

## [v1.0]

2019-11-27

### Software

#### SMTP Email Protection

* Transactional Log for all emails that go through FileTrust Email.
* User File Release Request. Able to request a held file to be released as a user.
* SMTP Resilience and Recovery. High resilience for receiving, processing and relaying SMTP mail.
* Data retention of email data.

#### Policy Management

* Fully configurable Content Management actions and policy for attachments.
* Further analysis of files using ThreatCensor
* Able to control mail flow and attachment policy with Sender and Receiver Groups

#### Analysis and Protect for attachments

The following file formats are supported:

* Office(Excel, Powerpoint, Word)
* PDF
* Images(jpeg, png, gif, bmp)

### Service

* 24/7 365 Multi-layered support
* Full incident management process
* Capacity of 4000 users and growing!
* Monitoring and alerting for:

   - Mail loss
   - Endpoint Checks for Portal and SMTP
   - Latency
   - Service degradation

* Cross region data store redundancy.
* SQL Data failover groups.
* Multiple SaaS Clusters for resilience.
* Live backups on all customer data.

