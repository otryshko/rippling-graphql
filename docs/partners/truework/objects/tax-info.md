---
id: tax-info
title: TaxInfo
---

container for sub-companies information

```graphql
type TaxInfo {
  id: ID!
  ein: String
  nameWithIrs: String
  doingBusinessAsName: String
  address: Address
}
```

### Fields

#### `id` ([`ID!`](docs/partners/truework/scalars/id.md))

#### `ein` ([`String`](docs/partners/truework/scalars/string.md))

#### `nameWithIrs` ([`String`](docs/partners/truework/scalars/string.md))

#### `doingBusinessAsName` ([`String`](docs/partners/truework/scalars/string.md))

#### `address` ([`Address`](docs/partners/truework/objects/address.md))
