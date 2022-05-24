---
id: skip
title: skip
---

Directs the executor to skip this field or fragment when the `if` argument is true.

```graphql
directive @skip(
  if: Boolean!
)
```

### Arguments

#### `if` ([`Boolean!`](docs/partners/truework/scalars/boolean.md))

Skipped when true.