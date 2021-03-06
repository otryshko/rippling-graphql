---
id: schema
slug: /partners/truework/flows
title: Flows
sidebar_position: 1
---

# Flows

## Email flow

Sandbox graphql playground is available at https://sandbox.rippling.com/api/apps/external/truework/graphql. For authentication, see [Authentication in playground](../../intro#authentication-in-playground)

Truework calls [`employeesBySsn`](/docs/partners/truework/queries/employees-by-ssn) passing in the SSN and the fields it is interested in. The function will return an array of employees with matching SSN (single person will have multiple employee records if they register with different personal email addresses)

```
query{
  employeesBySsn(ssn: "238-72-5505"){
    id
    ssn
    fullName
    firstName
    lastName
    email
    phone
    employmentHistory{
      company{
        ...companyFields
      }
      roles{
        ...roleFields
      }
    }
    homeAddress{
      streetLine1
      streetLine2
      zip
      city
      state
      country
    }
    consent{
      state
      isAllowed
      pendingStartedAt
    }
    dob
    roles{
      ...roleFields
      company{
        ...companyFields
      }
    }
  }
}
fragment companyFields on Company {
  id
  name
  status
  taxInfos{
    ein
  }
  address{
  	streetLine1
  	streetLine2
  	zip
  	city
  	state
  	country
  }
}
fragment roleFields on Role {
  startDate
  endDate
  state
  job{
    employmentType{
      isSalaried
    }
  	exemptionType
    title
    salaryUnit
    salaryPerUnit
  }
  payroll{
    last3Years{
      year
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
      payPeriodStartDate
      payPeriodEndDate
      gross
      bonus
      overtime
      commission
      other
      payPeriodHours
    }
  }
}
```


If API responds with ```{
  "data": {
    "employeeBySsn": []
  }
}``` it means the employee is not registered with Rippling.

If Rippling knows about the employee, it will respond with basic employee info (ID, firstName, lastName and such) and will try to populate consent field.

If consent field is empty, it means that employee has never consented to any data sharing requests.

`isAllowed` is a current effective state of the consent 

For consent state values, see [`ConsentState`](/docs/partners/truework/enums/consent-state) enum.

To initiate data sharing, Truework should call 
[`requestEmployeeConsentByThirdParty`](/docs/partners/truework/mutations/request-employee-consent-by-third-party) mutation passing employee ID obtained from `employeeBySsn` call. It will keep employee's consent state as `ASK` but it will reset `pendingStartedAt` to the current timestamp.
```
mutation {
  requestEmployeeConsentByThirdParty(employeeId: "RW1wbG95ZWU6NTgzZmQ4OTZlMTVkN2Q5OTI3YTcwNDdl", requestorName: "Loan provider company"){
    state
    isAllowed
    pendingStartedAt
  }
}
```

Employee then will get an email with links to approve or deny data sharing request. After 12 hours of no response, the request will be autoapproved (`state` will stay  `ASK` but `isAllowed` would become `true`). After another 24 hours, the request will be un-approved (`isAllowed` would be false).


Each company in turn has control over exposing its employees data. If the company enabled Truework integration, it will show up in `roles` array.

