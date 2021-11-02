---
id: company
title: Company
---

Client company representation

```graphql
type Company implements NotifySubject, Node {
  id: ID!
  name: String
  taxInfos: [CompanyTaxInfo!]!
  status: CompanyStatus
  consent: ConsentState
  address: Address
  hasHris: Boolean
  hasPayroll: Boolean
}
```

### Fields

#### `id` ([`ID!`](/docs/partners/truework/scalars/id))

Relay company id

#### `name` ([`String`](/docs/partners/truework/scalars/string))

Public company name

#### `taxInfos` ([`[CompanyTaxInfo!]!`](/docs/partners/truework/objects/company-tax-info))

A list of Employer Identification Numbers registered by the company

#### `status` ([`CompanyStatus`](/docs/partners/truework/enums/company-status))

#### `consent` ([`ConsentState`](/docs/partners/truework/enums/consent-state))

if DENIED, company info will not be exposed to Truework

#### `address` ([`Address`](/docs/partners/truework/objects/address))

Company work address

#### `hasHris` ([`Boolean`](/docs/partners/truework/scalars/boolean))

#### `hasPayroll` ([`Boolean`](/docs/partners/truework/scalars/boolean))

### Interfaces

#### [`NotifySubject`](/docs/partners/truework/interfaces/notify-subject)

#### [`Node`](/docs/partners/truework/interfaces/node)