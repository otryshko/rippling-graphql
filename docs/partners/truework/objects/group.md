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

#### `id` ([`ID!`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/id.md))

relay group id

#### `dbId` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

internal db id

### Interfaces

#### [`NotifySubject`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/interfaces/notify-subject.md)

#### [`Node`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/interfaces/node.md)
