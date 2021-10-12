---
sidebar_position: 1
---

# API Intro

Let's discover **Rippling GraphQL APIs**. As a part of the onboarding, you'll get

1. partner name
2. partner token

# URL structure

URLs are structured as `https://{environment host}/api/apps/external/{partner name}/graphql`

API is available at

| environment  | environment host      |
|--------------|-----------------------|
| sandbox      | sandbox.rippling.com  |
| production   | rippling.com          |
 


## Authentication

All calls to Rippling APIs must be autenticated. Please reach out to your Rippling contact to get a token you will use to connect to Rippling.

The token must be passed as a part of bearer authentication schema:
`Authorization: Bearer mF_9.B5f-4.1JqM`
where `mF_9.B5f-4.1JqM` is a sample token, to be replaced with the one you obtained from Rippling

``` 
GET /api/apps/external/samplepartner/graphql HTTP/1.1
Host: rippling.com
Authorization: Bearer mF_9.B5f-4.1JqM
Content-Type: application/json
```


