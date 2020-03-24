---
title: Incident Management
description: Incident Management
---

Incident management is required managing a major incident where more than one tenant on any product is interrupted or there is imminent threat of interruption. Major incidents are worked continuously until resolution. An incident commander will run the incident response task force, assigning responsibilities according to need and priority.

Note; the commander holds all responsibilities that they have not delegated.

When a major incident is identified, immediately call the SRE On-call Engineer (xxxxxxxxxxxx) to begin the Major Incident process. If it is after hours, the call will still be answered and the process will continue as normal.

## Roles

### Incident Commander responsibilities

* Running a conference call (if required)
* Keeping the incident ticket up to date
* Communicating with the affected tenants (if appropriate)
* Communicating with management
* Engaging internal and external escalation points as needed

### Incident Response Task Force members responsibilities:

* Be ready to work within 15 minutes of being notified of the incident
* Keep the other team members updated on the work you are doing
* If on a conference call, keep your phone on mute unless speaking
* Stay on the conference call while working – don’t hang up and then call back in without permission of the Incident Manager
* Remember that the only goal is to restore service – only collect diagnostic information if it will not interfere with the resolution time, this can be done postmortem
* Do not make any changes or restart any services without informing the Incident Commander
* Update the incident ticket with as much information as possible while you are working.

## Postmortems

**The SRE team firmly believes in a blameless postmortem culture**

A postmortem is a written record of an incident, its impact, the actions taken to mitigate or resolve it, the root cause(s), and the follow-up actions to prevent the incident from recurring.

### Triggers of a Postmortem

* Client-visible downtime or degradation beyond a certain threshold
* Data loss of any kind
* On-call engineer intervention (release rollback, rerouting of traffic, etc.)
* A resolution time above some threshold
* A monitoring failure (which usually implies manual incident discovery)
* A stakeholder may request a postmortem for an event

