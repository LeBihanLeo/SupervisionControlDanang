# ECoMaS : Final presentation

Presented by BILLEQUIN Thomas, GAUDET Benoit, LATAPIE Florian, LE BIHAN Léo

---

## Presentation of the team

- Polytech Nice Sophia students :
  - BILLEQUIN Thomas
  - GAUDET Benoit
  - LATAPIE Florian
  - LE BIHAN Léo

- Vietnamese supervisors
  - Lê Quốc Huy
  - Van Lic : Helped us to provide the hardware of the project and set up the server

---

## Purpose of the project

- Monitoring of the building S (khu S) of the DUT
- Alert the users in case of problems
- Provide statistics to the administrators
- Help saving energy

---

## System composition

![System composition](../schemas/Software%20architecture-HRES%20software%20architecture.drawio.svg)

---

## Implemented features - ### General

General features are usable by everyone on pc and mobile.

- Homepage

#### Grafana

- Dashboard for each storey
- General dashboard

#### Alert system via Slack

The users can sign in to the Slack workspace of the project to receive alerts and informations about the building.

---
## Implemented features - ### Admin tools

Admin tools are provided to the administrators of the system, they are only usable on pc.

- Documentation including
  - BR plan (BR = Business Resumption) in case of system failure or any part of the system
  - FAQ

#### Sensors

- Web portal to import the sensors

---

## Demo

---

## Conclusion - New features to implement

- More alerts with more sensors
- Respect the JSON schema we provided. It will be easier to add new sensors.
- Get a pro Zalo account to send alert via Zalo

---

## Conclusion - Investment requirements

- Human effort
  - 1 month of work for 1 engineer

- Hardware cost
  - TODO
