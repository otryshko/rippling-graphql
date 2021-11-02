---
id: consent-state
title: ConsentState
---

No description

```graphql
enum ConsentState {
  ASK
  PENDING
  APPROVED
  DENIED
}
```

### Values

#### `ASK`

Initial state, Truework can move it to PENDING by calling requestEmployeeConsentByThirdParty

#### `PENDING`

Not yet appoved - either will get autoapproved after 12 hours to APPROVED, or manually changed by the employee to APPROVED or DENIED

#### `APPROVED`

Employment info will be shared with Truework

#### `DENIED`

Employment info WILL NOT be shared with Truework