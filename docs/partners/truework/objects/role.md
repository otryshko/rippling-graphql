---
id: role
title: Role
---

Employment position

```graphql
type Role implements NotifySubject, Node {
  id: ID!
  dbId: String
  company: Company
  employee: Employee
  payroll: RolePayroll
  startDate: Date
  endDate: Date
  state: RoleState
  job: Job
}
```

### Fields

#### `id` ([`ID!`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/id.md))

Relay role id

#### `dbId` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

#### `company` ([`Company`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/company.md))

Employment at this company

#### `employee` ([`Employee`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/employee.md))

#### `payroll` ([`RolePayroll`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/role-payroll.md))

Payroll info related to this company and this employee

#### `startDate` ([`Date`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/date.md))

#### `endDate` ([`Date`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/date.md))

#### `state` ([`RoleState`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/enums/role-state.md))

Is employee still active, see RoleState enum for reference

#### `job` ([`Job`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/job.md))

Job held in this role

### Interfaces

#### [`NotifySubject`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/interfaces/notify-subject.md)

#### [`Node`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/interfaces/node.md)
