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
  taxInfo: TaxInfo
}
```

### Fields

#### `id` ([`ID!`](docs/partners/truework/scalars/id.md))

Relay role id

#### `dbId` ([`String`](docs/partners/truework/scalars/string.md))

#### `company` ([`Company`](docs/partners/truework/objects/company.md))

Employment at this company

#### `employee` ([`Employee`](docs/partners/truework/objects/employee.md))

#### `payroll` ([`RolePayroll`](docs/partners/truework/objects/role-payroll.md))

Payroll info related to this company and this employee

#### `startDate` ([`Date`](docs/partners/truework/scalars/date.md))

#### `endDate` ([`Date`](docs/partners/truework/scalars/date.md))

#### `state` ([`RoleState`](docs/partners/truework/enums/role-state.md))

Is employee still active, see RoleState enum for reference

#### `job` ([`Job`](docs/partners/truework/objects/job.md))

Job held in this role

#### `taxInfo` ([`TaxInfo`](docs/partners/truework/objects/tax-info.md))

sub-company role belongs to or the main company entry

### Interfaces

#### [`NotifySubject`](docs/partners/truework/interfaces/notify-subject.md)

#### [`Node`](docs/partners/truework/interfaces/node.md)
