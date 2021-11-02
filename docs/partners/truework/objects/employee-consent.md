---
id: employee-consent
title: EmployeeConsent
---

State of employee consent to share information with Truework

```graphql
type EmployeeConsent {
  state: ConsentState
  pendingStartedAt: DateTime
  allowCode: String
  denyCode: String
}
```

### Fields

#### `state` ([`ConsentState`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/enums/consent-state.md))

state - see type definition for value

#### `pendingStartedAt` ([`DateTime`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/date-time.md))

Used for autoapproval (+12 hours after the pending request)

#### `allowCode` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

#### `denyCode` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))
