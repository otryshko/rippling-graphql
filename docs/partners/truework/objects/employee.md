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

#### `id` ([`ID!`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/id.md))

Relay employee id

#### `dbId` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

#### `ssn` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

Goverment ID of the person

#### `fullName` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

#### `firstName` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

#### `lastName` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

#### `dob` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

Date of birth

#### `email` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

#### `phone` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

#### `homeAddress` ([`Address`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/address.md))

#### `roles` ([`[Role!]`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/role.md))

An array of employment positions

#### `consent` ([`EmployeeConsent`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/employee-consent.md))

Has an employee consented to share employment history with Truework

#### `employmentHistory` ([`[EmploymentHistoryRecord]`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/employment-history-record.md))

List of companies and roles employee is/was employed at

### Interfaces

#### [`NotifySubject`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/interfaces/notify-subject.md)

#### [`Node`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/interfaces/node.md)
