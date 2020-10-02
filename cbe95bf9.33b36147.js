(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return b}));var a=r(2),n=r(6),l=(r(0),r(87)),i={title:"Releases",description:"Rebuild for Email Release notes"},c={unversionedId:"products/rebuild-email/releases",id:"products/rebuild-email/releases",isDocsHomePage:!1,title:"Releases",description:"Rebuild for Email Release notes",source:"@site/docs/products/rebuild-email/releases.md",slug:"/products/rebuild-email/releases",permalink:"/docs/products/rebuild-email/releases",editUrl:"https://github.com/glasswall-sre/glasswall-sre.github.io/docs/products/rebuild-email/releases.md",version:"current",sidebar:"docs",previous:{title:"SLOs and SLIs",permalink:"/docs/products/rebuild-email/slos"},next:{title:"Logging Retention",permalink:"/docs/products/rebuild-email/logging-retention"}},o=[{value:"v1.1",id:"v11",children:[{value:"Software",id:"software",children:[]},{value:"Services",id:"services",children:[]}]},{value:"v1.0",id:"v10",children:[{value:"Software",id:"software-1",children:[]},{value:"Service",id:"service",children:[]}]}],s={rightToc:o};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"v11"},"[v1.1]"),Object(l.b)("p",null,"2020-03-20"),Object(l.b)("h3",{id:"software"},"Software"),Object(l.b)("h4",{id:"features"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"File ByPass: New service that drastically drops held file rate and improves safety to our customers: ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://medium.com/glasswall-engineering/saas-file-bypass-e8c11c25def8"}),"Read More"))),Object(l.b)("h4",{id:"bug-fixes"},"Bug Fixes"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Portal T&Cs correctly displayed."),Object(l.b)("li",{parentName:"ul"},"Policy sender domains enforced."),Object(l.b)("li",{parentName:"ul"},"General resilience improvements.")),Object(l.b)("h3",{id:"services"},"Services"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Monitoring via DataDog."),Object(l.b)("li",{parentName:"ul"},"Improved business service mapping in PagerDuty."),Object(l.b)("li",{parentName:"ul"},"High availability cache is now live.")),Object(l.b)("h2",{id:"v10"},"[v1.0]"),Object(l.b)("p",null,"2019-11-27"),Object(l.b)("h3",{id:"software-1"},"Software"),Object(l.b)("h4",{id:"smtp-email-protection"},"SMTP Email Protection"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Transactional Log for all emails that go through Rebuild for Email."),Object(l.b)("li",{parentName:"ul"},"User File Release Request. Able to request a held file to be released as a user."),Object(l.b)("li",{parentName:"ul"},"SMTP Resilience and Recovery. High resilience for receiving, processing and relaying SMTP mail."),Object(l.b)("li",{parentName:"ul"},"Data retention of email data.")),Object(l.b)("h4",{id:"policy-management"},"Policy Management"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Fully configurable Content Management actions and policy for attachments."),Object(l.b)("li",{parentName:"ul"},"Further analysis of files using ThreatCensor"),Object(l.b)("li",{parentName:"ul"},"Able to control mail flow and attachment policy with Sender and Receiver Groups")),Object(l.b)("h4",{id:"analysis-and-protect-for-attachments"},"Analysis and Protect for attachments"),Object(l.b)("p",null,"The following file formats are supported:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Office(Excel, Powerpoint, Word)"),Object(l.b)("li",{parentName:"ul"},"PDF"),Object(l.b)("li",{parentName:"ul"},"Images(jpeg, png, gif, bmp)")),Object(l.b)("h3",{id:"service"},"Service"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"24/7 365 Multi-layered support")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Full incident management process")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Capacity of 4000 users and growing!")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Monitoring and alerting for:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Mail loss"),Object(l.b)("li",{parentName:"ul"},"Endpoint Checks for Portal and SMTP"),Object(l.b)("li",{parentName:"ul"},"Latency"),Object(l.b)("li",{parentName:"ul"},"Service degradation"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Cross region data store redundancy.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"SQL Data failover groups.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Multiple SaaS Clusters for resilience.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Live backups on all customer data."))))}b.isMDXComponent=!0},87:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=b(r),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return r?n.a.createElement(m,c(c({ref:t},s),{},{components:r})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<l;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);