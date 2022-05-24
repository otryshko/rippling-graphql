---
id: request-employee-consent-by-third-party
title: requestEmployeeConsentByThirdParty
---

To be called by Truework to request employee consent to share their payroll/employment info for loan approval purpose

```graphql
requestEmployeeConsentByThirdParty(
  employeeId: ID!
  requestorName: String
): EmployeeConsent!

```

### Arguments

#### `employeeId` ([`ID!`](docs/partners/truework/scalars/id.md))

#### `requestorName` ([`String`](docs/partners/truework/scalars/string.md))

### Type

#### [`EmployeeConsent`](docs/partners/truework/objects/employee-consent.md)

State of employee consent to share information with Truework
