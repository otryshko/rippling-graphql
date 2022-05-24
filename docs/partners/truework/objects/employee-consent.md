---
id: employee-consent
title: EmployeeConsent
---

State of employee consent to share information with Truework

```graphql
type EmployeeConsent {
  state: ConsentState
  isAllowed: Boolean
  pendingStartedAt: DateTime
}
```

### Fields

#### `state` ([`ConsentState`](docs/partners/truework/enums/consent-state.md))

state - see type definition for value

#### `isAllowed` ([`Boolean`](docs/partners/truework/scalars/boolean.md))

is receiving information allowed

#### `pendingStartedAt` ([`DateTime`](docs/partners/truework/scalars/date-time.md))

Used for autoapproval (+12 hours after the pending request)
