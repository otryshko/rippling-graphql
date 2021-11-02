---
id: request-employee-consent-by-third-party
title: requestEmployeeConsentByThirdParty
---

To be called by Truework to request employee consent to share their payroll/employment info for
loan approval purpose

```graphql
requestEmployeeConsentByThirdParty(
  employeeId: ID!
  requestorName: String
): ConsentState!

```

### Arguments

#### `employeeId` ([`ID!`](/docs/partners/truework/scalars/id))

#### `requestorName` ([`String`](/docs/partners/truework/scalars/string))

### Type

#### [`ConsentState`](/docs/partners/truework/enums/consent-state)