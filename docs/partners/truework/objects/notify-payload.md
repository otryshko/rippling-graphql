---
id: notify-payload
title: NotifyPayload
---

The payload sent to webhook

```graphql
type NotifyPayload {
  instanceType: String!
  instance: NotifySubject!
  action: NotifyAction
  subAction: String
}
```

### Fields

#### `instanceType` ([`String!`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

type of the object the notification is about, only Employee is supported at the moment

#### `instance` ([`NotifySubject!`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/interfaces/notify-subject.md))

The object the notification is about

#### `action` ([`NotifyAction`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/enums/notify-action.md))

what has happened to that object

#### `subAction` ([`String`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/scalars/string.md))

free-formed string with more details about notification action
