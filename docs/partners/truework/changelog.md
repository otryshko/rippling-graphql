---
id: changelog
slug: /partners/truework/changelog
title: Changelog
sidebar_position: 4
---


# Changelog

## 2021-11-08

1. `requestEmployeeConsentByThirdParty` now returs an consent object, not a value.
2. `isAllowed` on the consent object is the effective consent permission state, while `state` is the current user choice.
3. Added auto-unapprove after 24-hour window.

## 2021-10-29

1. Added [`hasHris`](/docs/partners/truework/objects/company#hashris-boolean) and [`hasPayroll`](/docs/partners/truework/objects/company#haspayroll-boolean) properties to [`Company`](/docs/partners/truework/objects/company)
2. If company has not consented, it will be represented by a placeholder company object with id='Q29tcGFueTowMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=' and name='NoConsentCompany'. Updated Consent Rules page to reflect it.

## 2021-10-28

1. Changed `employeeBySsn` to `employeesBySsn` to reflect possible multiple employee records.
2. Added [`employmentHistory`](/docs/partners/truework/objects/employee#employmenthistory-employmenthistoryrecord) to `Employee` with companies and list of roles in each company and updated sample doc at the [`Flow`](/docs/partners/truework/flows)
3. ~~Made companies which consented out of Truework integration invisible~~. See 2021-10-29 changelog.
4. Added [`webhook`](/docs/partners/truework/webhook) to call Truework on employee consent change. 
5. Changed the type of [`employmentType`](/docs/partners/truework/objects/job#employmenttype-companyemploymenttype) of `Job` object to reflect backend changes.
6. Added [`requestorName`](/docs/partners/truework/mutations/request-employee-consent-by-third-party#requestorname-string) argument to `requestEmployeeConsentByThirdParty` mutation to indicate who is asking for consent.

