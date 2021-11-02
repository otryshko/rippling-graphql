---
id: role-payroll
title: RolePayroll
---

Payroll-related section of a role

```graphql
type RolePayroll {
  last3Years: [YearlyCompensation]
  paystubs: [Paystub]
}
```

### Fields

#### `last3Years` ([`[YearlyCompensation]`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/yearly-compensation.md))

Yearly compensation for the last 3 years

#### `paystubs` ([`[Paystub]`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/paystub.md))

Paystubs for the year-to-date
