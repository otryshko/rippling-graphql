---
id: webhook
slug: /partners/truework/webhook
title: Webhook
sidebar_position: 3
---


# Webhook

When employee consent state is updated will will POST to the Truework `url` with Authorization header as 'Bearer `TOKEN` ' (both stored in configuration on our side). The payload is described [`here`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/notify-payload.md) 

For Truework specifically, `ssn` will be populated for the employee object in `instance` property (along with the `id`)   