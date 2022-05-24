---
id: company
title: Company
---

Client company representation

```graphql
type Company implements NotifySubject, Node {
  id: ID!
  dbId: String
  name: String
  legalName: String
  doingBusinessAsName: String
  taxInfos: [TaxInfo!]!
  status: CompanyStatus
  consent: ConsentState
  address: Address
  hasHris: Boolean
  hasPayroll: Boolean
}
```

### Fields

#### `id` ([`ID!`](docs/partners/truework/scalars/id.md))

Relay company id

#### `dbId` ([`String`](docs/partners/truework/scalars/string.md))

#### `name` ([`String`](docs/partners/truework/scalars/string.md))

Public company name

#### `legalName` ([`String`](docs/partners/truework/scalars/string.md))

Legal company name

#### `doingBusinessAsName` ([`String`](docs/partners/truework/scalars/string.md))

Doing-business-as name

#### `taxInfos` ([`[TaxInfo!]!`](docs/partners/truework/objects/tax-info.md))

A list of sub-companies differentiated by EIN

#### `status` ([`CompanyStatus`](docs/partners/truework/enums/company-status.md))

#### `consent` ([`ConsentState`](docs/partners/truework/enums/consent-state.md))

if DENIED, company info will not be exposed to Truework

#### `address` ([`Address`](docs/partners/truework/objects/address.md))

Company work address

#### `hasHris` ([`Boolean`](docs/partners/truework/scalars/boolean.md))

#### `hasPayroll` ([`Boolean`](docs/partners/truework/scalars/boolean.md))

### Interfaces

#### [`NotifySubject`](docs/partners/truework/interfaces/notify-subject.md)

#### [`Node`](docs/partners/truework/interfaces/node.md)
