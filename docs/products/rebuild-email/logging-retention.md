---
title: Logging Retention
description: Logging Retention for Rebuild for Email
---

# Policies

Different types of log data are held with different retention policies, citing different lengths of time to be retained and different locations for the data. Below is a table stating the current policies.

The current policies are provisioned on a platform region basis but there are future plans to break some of these down into a per-tenant basis.

| Application Logs (DataDog) | Transaction Logs (Azure SQL) | Transaction Data  (Azure Blob Storage) |
|----------------------------|------------------------------|----------------------------------------|
| 7 days                     | Indefinite                   | 90 days                                |
| 7 days                     | Indefinite                   | 90 days                                |

## Definition: Application Logs

Each FileTrust microservice has the ability to write application logs, these logs contain information regarding the interactions this microservice has with other microservice as well as any internal processes. Additionally, it will also write out any errors or warnings that may occur in order to help diagnose and resolve any issues that arise on the platform. These logs are considered secure and restricted to only authorised users such as the SRE team.

## Definition: Transaction Logs

Within the FileTrust portal is a section called the Transaction Log. This enables end-users to easily see what emails have been processed through the FileTrust platform, what sort of attachments have been processed and if the attachments have been held/sanitised. These logs are considered secure on a per-tenant basis and are accessed by end-users through the FileTrust portal.

## Definition: Transaction Data

When processing emails around the platform, the raw message, attachments and other parts of the emails are stored in Azure Blob storage. This is to enable different services to efficiently interact with the sections of the email as well to help with the triage of any issues if they occur. This data is considered secure and is restricted to only authorised users such as the SRE team.

