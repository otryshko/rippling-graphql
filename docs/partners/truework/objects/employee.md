---
id: employee
title: Employee
---

Employee record, logically matches a person

```graphql
type Employee implements NotifySubject, Node {
  id: ID!
  dbId: String
  ssn: String
  fullName: String
  firstName: String
  lastName: String
  dob: String
  email: String
  phone: String
  homeAddress: Address
  roles: [Role!]
  consent: EmployeeConsent
  employmentHistory: [EmploymentHistoryRecord]
}
```

### Fields

#### `id` ([`ID!`](docs/partners/truework/scalars/id.md))

Relay employee id

#### `dbId` ([`String`](docs/partners/truework/scalars/string.md))

#### `ssn` ([`String`](docs/partners/truework/scalars/string.md))

Goverment ID of the person

#### `fullName` ([`String`](docs/partners/truework/scalars/string.md))

#### `firstName` ([`String`](docs/partners/truework/scalars/string.md))

#### `lastName` ([`String`](docs/partners/truework/scalars/string.md))

#### `dob` ([`String`](docs/partners/truework/scalars/string.md))

Date of birth

#### `email` ([`String`](docs/partners/truework/scalars/string.md))

#### `phone` ([`String`](docs/partners/truework/scalars/string.md))

#### `homeAddress` ([`Address`](docs/partners/truework/objects/address.md))

#### `roles` ([`[Role!]`](docs/partners/truework/objects/role.md))

An array of employment positions

#### `consent` ([`EmployeeConsent`](docs/partners/truework/objects/employee-consent.md))

Has an employee consented to share employment history with Truework

#### `employmentHistory` ([`[EmploymentHistoryRecord]`](docs/partners/truework/objects/employment-history-record.md))

List of companies and roles employee is/was employed at

### Interfaces

#### [`NotifySubject`](docs/partners/truework/interfaces/notify-subject.md)

#### [`Node`](docs/partners/truework/interfaces/node.md)
