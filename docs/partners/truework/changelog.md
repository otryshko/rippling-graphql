---
id: changelog
slug: /partners/truework/changelog
title: Changelog
sidebar_position: 4
---


# Changelog

## 2021-10-29

1. Added [`hasHris`](docs/partners/truework/objects/company.md#hashris-boolean) and [`hasPayroll`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/company.md#haspayroll-boolean) properties to [`Company`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/company.md)
2. If company has not consented, it will be represented by a placeholder company object with id='Q29tcGFueTowMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=' and name='NoConsentCompany'. Updated Consent Rules page to reflect it.

## 2021-10-28

1. Changed `employeeBySsn` to `employeesBySsn` to reflect possible multiple employee records.
2. Added [`employmentHistory`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/employee.md#employmenthistory-employmenthistoryrecord) to `Employee` with companies and list of roles in each company and updated sample doc at the [`Flow`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/flows.md)
3. ~~Made companies which consented out of Truework integration invisible~~. See 2021-10-29 changelog.
4. Added [`webhook`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/webhook.md) to call Truework on employee consent change. 
5. Changed the type of [`employmentType`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/objects/job.md#employmenttype-companyemploymenttype) of `Job` object to reflect backend changes.
6. Added [`requestorName`](https://developer.rippling.com/docs/rippling-graphql/docs/partners/truework/mutations/request-employee-consent-by-third-party.md#requestorname-string) argument to `requestEmployeeConsentByThirdParty` mutation to indicate who is asking for consent.

