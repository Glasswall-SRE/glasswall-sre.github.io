(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var o=r(2),i=r(6),n=(r(0),r(87)),a={title:"Error Budget Policy",description:"Error Budget Policy"},s={unversionedId:"sre/error-budget-policy",id:"sre/error-budget-policy",isDocsHomePage:!1,title:"Error Budget Policy",description:"Error Budget Policy",source:"@site/docs/sre/error-budget-policy.md",slug:"/sre/error-budget-policy",permalink:"/docs/sre/error-budget-policy",editUrl:"https://github.com/glasswall-sre/glasswall-sre.github.io/docs/sre/error-budget-policy.md",version:"current",sidebar:"docs",previous:{title:"SLO and SLIs",permalink:"/docs/sre/slo-slis"},next:{title:"Failure Friday",permalink:"/docs/sre/failure-friday"}},l=[{value:"Service Overview",id:"service-overview",children:[]},{value:"Goals",id:"goals",children:[]},{value:"SLO Miss Policy",id:"slo-miss-policy",children:[]},{value:"Escalation Policy",id:"escalation-policy",children:[]},{value:"Background",id:"background",children:[]}],c={rightToc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"service-overview"},"Service Overview"),Object(n.b)("p",null,"The SAAS service performs the process of using the Glasswall Core Engine to analyse, sanitise and reconstruct tenant's email. New releases of the code are pushed daily. This policy applies to all releases to production."),Object(n.b)("h2",{id:"goals"},"Goals"),Object(n.b)("p",null,"The goals of this policy are to:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Protect customers from repeated SLO degradation"),Object(n.b)("li",{parentName:"ul"},"Provide an incentive to balance reliability with other features"),Object(n.b)("li",{parentName:"ul"},"This policy is not intended to serve as a punishment for missing SLOs. Halting change is undesirable; this policy gives teams permission to focus exclusively on reliability when data indicates that reliability is more important than other product features.")),Object(n.b)("h2",{id:"slo-miss-policy"},"SLO Miss Policy"),Object(n.b)("p",null,"If the service is performing at or above its SLO, then releases (including data changes) will proceed according to the release policy."),Object(n.b)("p",null,"The error budget calculation is based on the past 4 weeks of SAAS statistics. An error budget is 1 minus the SLO of the service. A 99.9% SLO service has a 0.1% error budget. If our service receives 1, 000, 000 requests in four weeks, a 99.9% availability SLO gives us a budget of 1, 000 errors over that period. If the service has exceeded its error budget for the preceding month's window, we will halt all changes and releases other than P1 issues, security fixes and bug fixes until the following has been completed:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Postmortem has been completed."),Object(n.b)("li",{parentName:"ul"},"Bugs from the postmortem have been fixed in production."),Object(n.b)("li",{parentName:"ul"},"Other actions from the postmortem such as process change have been enacted."),Object(n.b)("li",{parentName:"ul"},"Service is back within its SLO. This can be overridden by the SRE manager if the time to recover is too long ",Object(n.b)("strong",{parentName:"li"},"OR")," 2 days from the above actions being completed and there has been no further degradation to the SLO.")),Object(n.b)("p",null,"Depending upon the cause of the SLO miss, the team may devote additional resources to working on reliability instead of feature work."),Object(n.b)("p",null,"The team must work on reliability if:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A code bug or procedural error caused the service itself to exceed the error budget."),Object(n.b)("li",{parentName:"ul"},"A postmortem reveals an opportunity to soften a hard dependency."),Object(n.b)("li",{parentName:"ul"},"Miscategorized errors fail to consume budget that would have caused the service to miss its SLO.")),Object(n.b)("p",null,"The team may continue to work on non-reliability features if:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The outage was caused by a company-wide networking problem."),Object(n.b)("li",{parentName:"ul"},"The outage was caused by a service maintained by another team, who have themselves frozen releases to address their reliability issues."),Object(n.b)("li",{parentName:"ul"},"The error budget was consumed by users out of scope for the SLO (e.g., load tests or penetration testers)."),Object(n.b)("li",{parentName:"ul"},"Miscategorized errors consume budget even though no users were impacted.")),Object(n.b)("h2",{id:"escalation-policy"},"Escalation Policy"),Object(n.b)("p",null,"In the event of a disagreement between parties regarding the calculation of the error budget or the specific actions it defines, the issue should be escalated to the VP of Engineering to make a decision."),Object(n.b)("h2",{id:"background"},"Background"),Object(n.b)("p",null,"Error budgets are the tool SRE uses to balance service reliability with the pace of innovation. Changes are a major source of instability, representing roughly 70% of Googles outages, and development work for features competes with development work for stability. The error budget forms a control mechanism for diverting attention to stability as needed."),Object(n.b)("p",null,"A P1 is the highest priority of bug: all hands on deck; drop everything else until this is fixed."),Object(n.b)("p",null,Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"/Policy/SLI-and-SLO"}),"Our current SLI and SLOs")))}u.isMDXComponent=!0},87:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var o=r(0),i=r.n(o);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=o,h=d["".concat(a,".").concat(p)]||d[p]||b[p]||n;return r?i.a.createElement(h,s(s({ref:t},c),{},{components:r})):i.a.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<n;c++)a[c]=r[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);