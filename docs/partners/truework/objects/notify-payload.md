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

#### `instanceType` ([`String!`](/docs/partners/truework/scalars/string))

type of the object the notification is about, only Employee is supported at the moment

#### `instance` ([`NotifySubject!`](/docs/partners/truework/interfaces/notify-subject))

The object the notification is about

#### `action` ([`NotifyAction`](/docs/partners/truework/enums/notify-action))

what has happened to that object

#### `subAction` ([`String`](/docs/partners/truework/scalars/string))

free-formed string with more details about notification action
