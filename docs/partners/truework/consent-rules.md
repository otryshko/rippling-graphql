---
id: consent-rules
slug: /partners/truework/consent-rules
title: Consent Rules
sidebar_position: 2
---

# Consent rules

Both an employee or client can choose to participate in Truework integration or not.

## Company consent

If company declined to participate, a placeholder company object with id='`Q29tcGFueTowMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=`' and name='`NoConsentCompany`' will be returned instead. The list of roles with the company will be excluded from the employee list of roles as well.

## Employee consent

Employee can explicitly allow or deny their participation in Truework. If denied, only basic information will be returned (first name, last name and list of roles with company info but without position name or compensation). If allowed, all that information will be exposed to Truework.