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

#### `employmentType` ([`CompanyEmploymentType`](/docs/partners/truework/objects/company-employment-type))

is full time/contractor/etc

#### `exemptionType` ([`ExemptionType`](/docs/partners/truework/enums/exemption-type))

#### `title` ([`String`](/docs/partners/truework/scalars/string))

Job title

#### `salaryUnit` ([`JobSalaryUnit`](/docs/partners/truework/enums/job-salary-unit))

#### `salaryPerUnit` ([`Decimal`](/docs/partners/truework/scalars/decimal))
