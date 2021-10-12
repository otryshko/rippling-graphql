---
id: schema
slug: /partners/truework
title: Flows
sidebar_position: 1
---

# Flows

## Email flow

Truework calls [`employeeBySsn`](/docs/partners/truework/queries/employee-by-ssn) passing in the SSN and the fields it is interested in.


If API responds with `{employeeBySsn: null}` meanging that the employee is not registered with Rippling.

If Rippling knows about the employee, it will respond with basic employee info (ID, firstName, lastName and such) and will try to populate consent field.

If consent field is empty, it means that employee has never consented to any data sharing requests.

For consent state values, see [`ConsentState`](/docs/partners/truework/enums/consent-state) enum.

To initiate data sharing, Truework should call 
[`requestEmployeeConsentByThirdParty`](/docs/partners/truework/mutations/request-employee-consent-by-third-party) mutation passing employee ID obtained from `employeeBySsn` call. It will change employee's consent to `PENDING`.

Employee then will get an email with links to approve or deny data sharing request. After 12 hours of no response, the request will be autoapproved.


Each company in turn has control over exposing its employees data. If the company enabled Truework integration, it will show up in `roles` array.

