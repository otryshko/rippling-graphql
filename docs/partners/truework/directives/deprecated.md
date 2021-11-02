---
id: deprecated
title: deprecated
---

Marks an element of a GraphQL schema as no longer supported.

```graphql
directive @deprecated(
  reason: String = "No longer supported"
)
```

### Arguments

#### `reason` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).
