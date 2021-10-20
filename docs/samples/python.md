---
id: schema
slug: /samples/python
title: Python
sidebar_position: 1
---

To call Rippling Graphql API, import 
```
import requests
```

then define your query

```
get_by_ssn_query = """
    query q($ssn: String!){
      employeeBySsn(ssn:$ssn){
        id
      }
    }
"""
```

and then call it

```
headers = {"Authorization": "Bearer YOUR API KEY"}
url = 'https://sandbox.rippling.com/api/apps/external/truework/graphql'
request = requests.post(
    url, 
    json={'query': get_by_ssn_query, "variables": {"ssn": "123"}},
    headers=headers)
if request.status_code == 200:
    print(request.json()["data"]["employeeBySsn"]["id"])

```
