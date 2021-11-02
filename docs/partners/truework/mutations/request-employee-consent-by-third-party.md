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

#### `employeeId` ([`ID!`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/id.md))

#### `requestorName` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

### Type

#### [`ConsentState`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/enums/consent-state.md)
