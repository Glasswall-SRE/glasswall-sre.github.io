---
title: Failure Friday
description: How Glasswall SRE's perform Failure Friday
---


## Aim

The aim of a regular Failure Friday is to prepare the SRE for all eventualities. It allows us to test our systems to the extreme finding any holes in resilience, monitoring and procedures.

## Business communication

* Before every failure Friday, someone needs to be appointed as a business contact.
* This person is to receive communication during the incident, relay back 'fake' business feedback, and then after it's over provide feedback on what went well and not well.

## Scenarios

To perform a Failure Friday SRE need a set of scenarios to initiate to cause a failure. The following points provide guidance on what a scenario can be.

* Don't be ridiculous (all 4 clusters are gone!)
* Should be categorised under the following:
  + Security breaches
  + Human error
  + Service failures
  + Network issues
  + Data issues
* Where to store scenarios?
  + Git repository for the SRE website
* How to peer review?
  + Pull Requests on the SRE website Git repo
* Anyone within the company can propose a scenario that SRE can perform

## Priority

How do we prioritise what scenario we are going to do?

* Base Failure Fridays on particular scenarios
  + Things that scare us the most
  + Things we've read about in recent articles or other company scenarios
  + Be experimental, think outside the box
* Assign incident priority based on effects of the scenario
* Build up a list of scenarios, pick randomly or specific based on worry

## Monitoring

How do we monitor/alert on Failure Fridays?

* A Scripted solution to add/remove monitors based from production to a test environment. 

## Resource selection

* Three roles
  + DM, (disaster master) implements the scenario
  + Primary, on call
  + Secondary, on call
* Selection
  + Primary, whoever is on primary*
  + Secondary, whoever is on secondary*
  + DM, random selection from whoever left
* *: if someone is missing out on FF by chance, this can be overridden
* Primary responds to the incident, can page secondary if needed
* These roles are selected from the pool of people eligible for on-call
* People not eligible on-call can observe the response as 'flies on the wall'
* DM is not allowed to divulge information about the scenario during the response

## Scheduling

* Failure friday starts on a Friday between 9 and 12, a specific time will be chosen by the DM and not communicated to anyone else
* Failure friday can be veto'd last minute/canceled midway if there is an actual incident
* No releases to prod (for SRE products) on Friday, unless critical/security patch

## Failure Friday Setup

* DM keeps a timestamped log of every action taken to induce the failure
* This log is added to the postmortem for further context, and so responders can calculate lead time on responses to different steps

## Where to record results of failure Fridays?

* Postmortem produced as FF artifact, as if there was a real incident (standard procedures)
* Additional sections:
  + Steps to induce the incident from DM
* Everyone comes together to plan postmortem, no longer than 48 hours after incident (no later than Tuesday lunchtime)
* Primary writes postmortem, peer-reviewed when complete before circulation
* Completed postmortem is circulated to stakeholders, action items for improvement backlogged


## Suggested Scenarios

### To Do

* Delete a set of nodes from a cluster. To simulate a node failing.


### Completed
 
* Delete a table in a database. To simulate corrupted or missing data.

