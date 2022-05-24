---
id: role-state
title: RoleState
---

No description

```graphql
enum RoleState {
  INIT
  HIRED
  ACCEPTED
  ACTIVE
  TERMINATED
}
```

### Values

#### `INIT`

Need more information from the admin to add this employee to the company.

#### `HIRED`

Admin has entered all the required details for an employee to be added to the company/offer sent.

#### `ACCEPTED`

Employee has accepted the offer but start date is in future

#### `ACTIVE`

Employee's start date is in the past and offer has been sent or accepted.

#### `TERMINATED`

Employee's role has been terminated
