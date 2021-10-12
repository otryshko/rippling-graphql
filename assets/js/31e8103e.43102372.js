"use strict";(self.webpackChunkrippling_graphql=self.webpackChunkrippling_graphql||[]).push([[5048],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},362:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={id:"employee-consent",title:"EmployeeConsent"},s=void 0,p={unversionedId:"partners/truework/objects/employee-consent",id:"partners/truework/objects/employee-consent",isDocsHomePage:!1,title:"EmployeeConsent",description:"Container for employee consent state",source:"@site/docs/partners/truework/objects/employee-consent.mdx",sourceDirName:"partners/truework/objects",slug:"/partners/truework/objects/employee-consent",permalink:"/docs/partners/truework/objects/employee-consent",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/partners/truework/objects/employee-consent.mdx",tags:[],version:"current",frontMatter:{id:"employee-consent",title:"EmployeeConsent"},sidebar:"tutorialSidebar",previous:{title:"Company",permalink:"/docs/partners/truework/objects/company"},next:{title:"EmployeePayroll",permalink:"/docs/partners/truework/objects/employee-payroll"}},l=[{value:"Fields",id:"fields",children:[]}],u={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Container for employee consent state"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type EmployeeConsent {\n  state: ConsentState\n  stateChangedAt: DateTime\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"state-consentstate"},(0,a.kt)("inlineCode",{parentName:"h4"},"state")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/partners/truework/enums/consent-state"},(0,a.kt)("inlineCode",{parentName:"a"},"ConsentState")),")"),(0,a.kt)("h4",{id:"statechangedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"stateChangedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"))}m.isMDXComponent=!0}}]);