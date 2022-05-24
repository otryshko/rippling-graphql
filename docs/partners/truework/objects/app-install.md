---
id: app-install
title: AppInstall
---

No description

```graphql
type AppInstall implements Node {
  id: ID!
  spokeOwner: SpokeOwner
  installState: AppInstallState
  installStartedBy: Role
  installFinishedBy: Role
}
```

### Fields

#### `id` ([`ID!`](docs/partners/truework/scalars/id.md))

#### `spokeOwner` ([`SpokeOwner`](docs/partners/truework/objects/spoke-owner.md))

#### `installState` ([`AppInstallState`](docs/partners/truework/enums/app-install-state.md))

#### `installStartedBy` ([`Role`](docs/partners/truework/objects/role.md))

#### `installFinishedBy` ([`Role`](docs/partners/truework/objects/role.md))

### Interfaces

#### [`Node`](docs/partners/truework/interfaces/node.md)
