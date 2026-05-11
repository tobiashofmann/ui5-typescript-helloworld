# Use OData V4

* Status: accepted
* Deciders: Tobias Hofmann
* Date: 2026-04-06

Technical Story: https://ui5.sap.com/#/topic/cb441534f5c74ca7934c45edcfd3b490

## Context and Problem Statement

Use OData v4 as OData protocol.

## Decision Drivers

* SAP Standard
* Best Practices

## Considered Options

* OData v2
* OData v4

## Decision Outcome

Chosen option: "OData v4", because OData v4 is recommended by SAP for communication with an external data source.

### Positive Consequences

* Close to standard
* OData v4 is very well supported by SAP: CAP and RAP
* Allows to use Fiori Elements with FPM and Building Blocks

### Negative Consequences

* Not all SAP systems allow OData v4
