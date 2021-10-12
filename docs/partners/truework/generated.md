---
id: schema
slug: /partners/truework
title: Truework flows
sidebar_position: 1
---

# Flows

## Email flow

Truework calls `getEmployeeBySsn` passing in the SSN and the fields it is interested in.


If API responds with `{getEmployeeBySsn: null}` meanging that the employee is not registered with Rippling.

If Rippling knows about the employee, it will respond with basic employee info and a will populate consent field.

If consent field is empty, it means that employee has never concented to any data sharing requests.

For consent::state values, see `ConsentState`.

To initiate data sharing, Truework should call `requestEmployeeConsentByThirdParty` passing employee ID obtained from `getEmployeeBySsn` call. It will move employee's consent to `PENDING`.

Employee then will get an email with links to approve or deny data sharing request. After 12 hours of no response, the request will be autoapproved.

