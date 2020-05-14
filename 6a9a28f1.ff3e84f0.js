(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{109:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(2),i=r(6),n=(r(0),r(127)),o={title:"Failure Friday",description:"How Glasswall SRE's perform Failure Friday"},l={id:"sre/failure-friday",title:"Failure Friday",description:"How Glasswall SRE's perform Failure Friday",source:"@site/docs\\sre\\failure-friday.md",permalink:"/docs/sre/failure-friday",editUrl:"https://dev.azure.com/glasswall/Glasswall%20Cloud/_git/Glasswall.SRE.Documentation?path=%2F/docs/sre/failure-friday.md",sidebar:"docs",previous:{title:"Error Budget Policy",permalink:"/docs/sre/error-budget-policy"},next:{title:"Journey to Production",permalink:"/docs/production/journey-to-production"}},c=[{value:"Aim",id:"aim",children:[]},{value:"Business communication",id:"business-communication",children:[]},{value:"Scenarios",id:"scenarios",children:[]},{value:"Priority",id:"priority",children:[]},{value:"Monitoring",id:"monitoring",children:[]},{value:"Resource selection",id:"resource-selection",children:[]},{value:"Scheduling",id:"scheduling",children:[]},{value:"Failure Friday Setup",id:"failure-friday-setup",children:[]},{value:"Where to record results of failure Fridays?",id:"where-to-record-results-of-failure-fridays",children:[]},{value:"Suggested Scenarios",id:"suggested-scenarios",children:[{value:"To Do",id:"to-do",children:[]},{value:"Completed",id:"completed",children:[]}]}],s={rightToc:c};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"aim"},"Aim"),Object(n.b)("p",null,"The aim of a regular Failure Friday is to prepare the SRE for all eventualities. It allows us to test our systems to the extreme finding any holes in resilience, monitoring and procedures."),Object(n.b)("h2",{id:"business-communication"},"Business communication"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Before every failure Friday, someone needs to be appointed as a business contact."),Object(n.b)("li",{parentName:"ul"},"This person is to receive communication during the incident, relay back 'fake' business feedback, and then after it's over provide feedback on what went well and not well.")),Object(n.b)("h2",{id:"scenarios"},"Scenarios"),Object(n.b)("p",null,"To perform a Failure Friday SRE need a set of scenarios to initiate to cause a failure. The following points provide guidance on what a scenario can be."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Don't be ridiculous (all 4 clusters are gone!)"),Object(n.b)("li",{parentName:"ul"},"Should be categorised under the following:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Security breaches"),Object(n.b)("li",{parentName:"ul"},"Human error"),Object(n.b)("li",{parentName:"ul"},"Service failures"),Object(n.b)("li",{parentName:"ul"},"Network issues"),Object(n.b)("li",{parentName:"ul"},"Data issues"))),Object(n.b)("li",{parentName:"ul"},"Where to store scenarios?",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Git repository for the SRE website"))),Object(n.b)("li",{parentName:"ul"},"How to peer review?",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Pull Requests on the SRE website Git repo"))),Object(n.b)("li",{parentName:"ul"},"Anyone within the company can propose a scenario that SRE can perform")),Object(n.b)("h2",{id:"priority"},"Priority"),Object(n.b)("p",null,"How do we prioritise what scenario we are going to do?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Base Failure Fridays on particular scenarios",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Things that scare us the most"),Object(n.b)("li",{parentName:"ul"},"Things we've read about in recent articles or other company scenarios"),Object(n.b)("li",{parentName:"ul"},"Be experimental, think outside the box"))),Object(n.b)("li",{parentName:"ul"},"Assign incident priority based on effects of the scenario"),Object(n.b)("li",{parentName:"ul"},"Build up a list of scenarios, pick randomly or specific based on worry")),Object(n.b)("h2",{id:"monitoring"},"Monitoring"),Object(n.b)("p",null,"How do we monitor/alert on Failure Fridays?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A Scripted solution to add/remove monitors based from production to a test environment. ")),Object(n.b)("h2",{id:"resource-selection"},"Resource selection"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Three roles",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"DM, (disaster master) implements the scenario"),Object(n.b)("li",{parentName:"ul"},"Primary, on call"),Object(n.b)("li",{parentName:"ul"},"Secondary, on call"))),Object(n.b)("li",{parentName:"ul"},"Selection",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Primary, whoever is on primary*"),Object(n.b)("li",{parentName:"ul"},"Secondary, whoever is on secondary*"),Object(n.b)("li",{parentName:"ul"},"DM, random selection from whoever left"))),Object(n.b)("li",{parentName:"ul"},"*: if someone is missing out on FF by chance, this can be overridden"),Object(n.b)("li",{parentName:"ul"},"Primary responds to the incident, can page secondary if needed"),Object(n.b)("li",{parentName:"ul"},"These roles are selected from the pool of people eligible for on-call"),Object(n.b)("li",{parentName:"ul"},"People not eligible on-call can observe the response as 'flies on the wall'"),Object(n.b)("li",{parentName:"ul"},"DM is not allowed to divulge information about the scenario during the response")),Object(n.b)("h2",{id:"scheduling"},"Scheduling"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Failure friday starts on a Friday between 9 and 12, a specific time will be chosen by the DM and not communicated to anyone else"),Object(n.b)("li",{parentName:"ul"},"Failure friday can be veto'd last minute/canceled midway if there is an actual incident"),Object(n.b)("li",{parentName:"ul"},"No releases to prod (for SRE products) on Friday, unless critical/security patch")),Object(n.b)("h2",{id:"failure-friday-setup"},"Failure Friday Setup"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"DM keeps a timestamped log of every action taken to induce the failure"),Object(n.b)("li",{parentName:"ul"},"This log is added to the postmortem for further context, and so responders can calculate lead time on responses to different steps")),Object(n.b)("h2",{id:"where-to-record-results-of-failure-fridays"},"Where to record results of failure Fridays?"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Postmortem produced as FF artifact, as if there was a real incident (standard procedures)"),Object(n.b)("li",{parentName:"ul"},"Additional sections:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Steps to induce the incident from DM"))),Object(n.b)("li",{parentName:"ul"},"Everyone comes together to plan postmortem, no longer than 48 hours after incident (no later than Tuesday lunchtime)"),Object(n.b)("li",{parentName:"ul"},"Primary writes postmortem, peer-reviewed when complete before circulation"),Object(n.b)("li",{parentName:"ul"},"Completed postmortem is circulated to stakeholders, action items for improvement backlogged")),Object(n.b)("h2",{id:"suggested-scenarios"},"Suggested Scenarios"),Object(n.b)("h3",{id:"to-do"},"To Do"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Delete a set of nodes from a cluster. To simulate a node failing.")),Object(n.b)("h3",{id:"completed"},"Completed"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Delete a table in a database. To simulate corrupted or missing data.")))}u.isMDXComponent=!0},127:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(r),p=a,m=b["".concat(o,".").concat(p)]||b[p]||d[p]||n;return r?i.a.createElement(m,l({ref:t},s,{components:r})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<n;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);