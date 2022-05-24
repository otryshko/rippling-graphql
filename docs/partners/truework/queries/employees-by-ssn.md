---
id: employees-by-ssn
title: employeesBySsn
---

Truework: return information about an employee for loan validation
An array might contain multiple records, but with the same SSN

```graphql
employeesBySsn(
  ssn: String!
): [Employee]

```

### Arguments

#### `ssn` ([`String!`](docs/partners/truework/scalars/string.md))

### Type

#### [`Employee`](docs/partners/truework/objects/employee.md)

Employee record, logically matches a person
