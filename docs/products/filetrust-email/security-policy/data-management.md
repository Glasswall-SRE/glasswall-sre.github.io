---
title: Data Management
description: How FileTrust Email's Data is managed.
---

# Introduction

This section contains key information on how we manage data within the FileTrust email.


**Keywords**:
   - DTU: Database Throughput Unit. Describes the performance capability of a database. It is a grouping of CPU, I/O, and memory. Increase the DTU increases performance.
   - Elastic pool: This is a technology within Azure SQL that allows the generation of a single pool of DTU resources that multiple databases can use. This is designed to reduce costs by being more efficient in resource usage.


## Azure SQL

We use Azure SQL to store relational data within the FileTrust email. The following databases are used within the product:

- **Policy**: This stores the policy configuration of a tenant.
- **Tenman**: This stores the tenant's details including who the admins are and who the tenant is.
- **Reports**: This stores the transactional reports of the tenants. Transactional reports are defined as emails that flow through the system.
- **CAS**: This stores the user's login details and manages sign up and login authentication.


### Redundancy

All live customer production SQL databases have automatic Geo-replication set to create a geo-redundancy.

UKSouth Geo-Replicates to UKWest

USEast Geo-Replicates to USWest

### Security

The following security measure has been taken to protect our customer's data:
- Each database is encrypted at rest with AES 256 symmetric encryption.
- Each production database can only be accessed via a specific set of IPs.
- Only accessible by SRE team and key database developers.

### Resource management

Each of the key databases except Reports has a single Azure SQL server with a single Azure SQL database.

Reports have a separate database per live tenant because transactional data ingest and egress can vary dramatically per tenant.  Having a separate database can be costly

Each database current resource configuration is:
```
- Policy, Tenman, and CAS:
	- S0 10 DTUs
        - Geo-Replication

- Reports:
     - PoC Customers:
		- Single 200 DTU Database
                - No Geo-Replication
     - Live Customers:
		- Elasticpools of 200 eDTUs:
			- 10 databases per pool.
			- 0 - 20 eDTUs set per database.
		- Geo-Replication
```
## Blob Storage

We use Blob storage to store customers' transactional data such as emails, analysis reports, and protected files.


### Redundancy

All live customer production blob storages have automatic Geo-replication set to create a geo-redundancy.

UKSouth Geo-Replicates to UKWest

USEast Geo-Replicates to USWest

### Security

The following security measure has been taken to protect our customer's data:

- Each blob storage is encrypted at rest with AES 256 symmetric encryption.
- Only accessible by SRE team and key database developers.





