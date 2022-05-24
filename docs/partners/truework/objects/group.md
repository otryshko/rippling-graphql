---
id: group
title: Group
---

describes a group of roles

```graphql
type Group implements NotifySubject, Node {
  id: ID!
  dbId: String
}
```

### Fields

#### `id` ([`ID!`](docs/partners/truework/scalars/id.md))

relay group id

#### `dbId` ([`String`](docs/partners/truework/scalars/string.md))

internal db id

### Interfaces

#### [`NotifySubject`](docs/partners/truework/interfaces/notify-subject.md)

#### [`Node`](docs/partners/truework/interfaces/node.md)