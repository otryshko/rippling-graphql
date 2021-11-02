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

#### `ssn` ([`String!`](/docs/partners/truework/scalars/string))

### Type

#### [`Employee`](/docs/partners/truework/objects/employee)

Employee record, logically matches a person
