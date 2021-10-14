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

### Authentication in playground

The token must be added to HTTP HEADER window of the playground:
![Docusaurus](/img/authinplayground.png)


### Authentication in code

The token must be passed as a part of bearer authentication schema:
`Authorization: Bearer OzQSAbpW5fsCbA0eKf2Ynr4u8ILCFV20bgRCAZPo5wOrQxnTn80yVDrsEdfwee`
where `OzQSAbpW5fsCbA0eKf2Ynr4u8ILCFV20bgRCAZPo5wOrQxnTn80yVDrsEdfwee` is a sample token, to be replaced with the one you obtained from Rippling

``` 
GET /api/apps/external/samplepartner/graphql HTTP/1.1
Host: rippling.com
Authorization: Bearer OzQSAbpW5fsCbA0eKf2Ynr4u8ILCFV20bgRCAZPo5wOrQxnTn80yVDrsEdfwee
Content-Type: application/json
```


