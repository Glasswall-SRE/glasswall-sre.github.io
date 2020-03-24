---
title: SLOs and SLIs
description: FileTrust Email's Service Levels
---

# SLI and SLOs

## Portal

### Availability

The proportion of successful requests as measured by the FileTrust-Portal Metrics.

#### 99% of requests are successful.

### Latency

The proportion of sufficiently fast requests as measured by the FileTrust-Portal Metrics.

#### 90% of requests < 800ms

#### 99% of request < 1500ms

### Reachability

Proportion of requests successfully reach SAAS as measured by DataDog synthetic tests.

#### 99.9%

## Mail

### Reachability

Proportion of requests successfully reach SAAS as measured by DataDog synthetic tests.

#### 99.9%

### Availability

Proportion of successful requests as measured by the SMTP-Receiver Metrics.

#### 99% of requests are success.

### Latency

Proportion of mails are delivered sufficiently fast as measured by DataDog metrics.

#### 90% of mail relayed < 30 seconds

#### 99% of mail relayed < 5 minutes

### Process

Proportion of mails is successfully delivered as measured by DataDog metrics.

#### 99.9% of mails successfully relayed

