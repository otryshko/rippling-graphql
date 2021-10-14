---
id: schema
slug: /partners/truework
title: Flows
sidebar_position: 1
---

# Flows

## Email flow

Sandbox graphql playground is available at https://sandbox.rippling.com/api/apps/external/truework/graphql. For authentication, see [Authentication in playground](../intro#authentication-in-playground)

Truework calls [`employeeBySsn`](/docs/partners/truework/queries/employee-by-ssn) passing in the SSN and the fields it is interested in.

```
query{
  employeeBySsn(ssn: "238729188"){
    id
    ssn
    consent{
      state
    }
    fullName
    firstName
    lastName
    dob
    email
    phone
    homeAddress{
      streetLine1
      streetLine2
      zip
      city
      state
      country
    }
    payroll{
      last3Years{
        year,
        compensation{
          gross
          net
          base
          bonus
          commission
          overtime
          other
        }
      }
      paystubs{
        payDate
        payPeriodStartDate
        payPeriodEndDate
        grossEarnings
        netEarnings
        baseAmount
        bonusAmount
        overtimeAmount
        commissionAmount
        otherAmount
        payPeriodHours
        
      }
    }
    roles{
      company{
        name
      }
    }
  }
}
```


If API responds with ```{
  "data": {
    "employeeBySsn": null
  }
}``` it means the employee is not registered with Rippling.

If Rippling knows about the employee, it will respond with basic employee info (ID, firstName, lastName and such) and will try to populate consent field.

If consent field is empty, it means that employee has never consented to any data sharing requests.

For consent state values, see [`ConsentState`](/docs/partners/truework/enums/consent-state) enum.

To initiate data sharing, Truework should call 
[`requestEmployeeConsentByThirdParty`](/docs/partners/truework/mutations/request-employee-consent-by-third-party) mutation passing employee ID obtained from `employeeBySsn` call. It will change employee's consent to `PENDING`.
```
mutation {
  requestEmployeeConsentByThirdParty(employeeId: "RW1wbG95ZWU6NTgzZmQ4OTZlMTVkN2Q5OTI3YTcwNDdl")
}
```

Employee then will get an email with links to approve or deny data sharing request. After 12 hours of no response, the request will be autoapproved.


Each company in turn has control over exposing its employees data. If the company enabled Truework integration, it will show up in `roles` array.

