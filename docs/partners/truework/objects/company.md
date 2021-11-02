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

#### `id` ([`ID!`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/id.md))

Relay company id

#### `name` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

Public company name

#### `taxInfos` ([`[CompanyTaxInfo!]!`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/company-tax-info.md))

A list of Employer Identification Numbers registered by the company

#### `status` ([`CompanyStatus`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/enums/company-status.md))

#### `consent` ([`ConsentState`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/enums/consent-state.md))

if DENIED, company info will not be exposed to Truework

#### `address` ([`Address`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/address.md))

Company work address

#### `hasHris` ([`Boolean`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/boolean.md))

#### `hasPayroll` ([`Boolean`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/boolean.md))

### Interfaces

#### [`NotifySubject`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/interfaces/notify-subject.md)

#### [`Node`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/interfaces/node.md)
