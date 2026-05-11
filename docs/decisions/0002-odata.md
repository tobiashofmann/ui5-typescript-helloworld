# OData

* Status: accepted
* Deciders: Tobias Hofmann
* Date: 2026-04-13

Technical Story: https://ui5.sap.com/#/topic/e1b625940c104b558e52f47afe5ddb4f

## Context and Problem Statement

The recommendation for UI5 based apps for loading data from an SAP backend is to use OData.

## Decision Drivers

* UI5 apps are SAP focused.
* Driver is to stay close to SAP recommendations

## Considered Options

* SOAP
* Graph
* OData

## Decision Outcome

Chosen option: "OData", because recommended by SAP for exposing SAP backend data to UI5 apps

### Positive Consequences

* Staying close to SAP recommendations
* Good support by UI5 tooling
* Getting OData protocol feature out of the box like sorting, counting, etc.

### Negative Consequences

* Onboarding for non-SAP frontend developers will be harder.
* OData mostly supported only by SAP
* Harder to exchagne the data layer access
