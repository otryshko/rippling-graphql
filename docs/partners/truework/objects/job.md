---
id: job
title: Job
---

Employee's job definition

```graphql
type Job {
  employmentType: CompanyEmploymentType
  exemptionType: ExemptionType
  title: String
  salaryUnit: JobSalaryUnit
  salaryPerUnit: Decimal
}
```

### Fields

#### `employmentType` ([`CompanyEmploymentType`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/company-employment-type.md))

is full time/contractor/etc

#### `exemptionType` ([`ExemptionType`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/enums/exemption-type.md))

#### `title` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

Job title

#### `salaryUnit` ([`JobSalaryUnit`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/enums/job-salary-unit.md))

#### `salaryPerUnit` ([`Decimal`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/decimal.md))
