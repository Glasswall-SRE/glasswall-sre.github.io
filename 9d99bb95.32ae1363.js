(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(9),a=(n(0),n(162)),o={title:"Incident Events",description:"What events within a platform raise an incident?"},c={id:"products/rebuild-email/incident-events",title:"Incident Events",description:"What events within a platform raise an incident?",source:"@site/docs/products/rebuild-email/incident-events.md",permalink:"/docs/products/rebuild-email/incident-events",editUrl:"https://github.com/glasswall-sre/glasswall-sre.github.io/docs/products/rebuild-email/incident-events.md",sidebar:"docs",previous:{title:"Logging Retention",permalink:"/docs/products/rebuild-email/logging-retention"},next:{title:"Data Management",permalink:"/docs/products/rebuild-email/security-policy/data-management"}},l=[{value:"Priority 1 (P1)",id:"priority-1-p1",children:[]},{value:"Priority 2 (P1)",id:"priority-2-p1",children:[]},{value:"Priority 3 (P1)",id:"priority-3-p1",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For each product at Glasswall there needs to be different levels of incident classification for each product based on the product owners expectations. The following document describes the different scenarios in which an incident would be declared."),Object(a.b)("h2",{id:"priority-1-p1"},"Priority 1 (P1)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"These incidents are covered by out of hours support.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A key mailflow microservice has stopped processing from a queue."),Object(a.b)("li",{parentName:"ul"},"No mail is able to be relayed to external mail services across multiple tenants."),Object(a.b)("li",{parentName:"ul"},"No mail is able to be relayed into Rebuild for Email.")),Object(a.b)("h2",{id:"priority-2-p1"},"Priority 2 (P1)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"These incidents are covered by out of hours support.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A single tenant is having mailflow issues due to either external mail system configuration."),Object(a.b)("li",{parentName:"ul"},"Capacity limits have been hit and queue sizes exceed acceptable limits."),Object(a.b)("li",{parentName:"ul"},"Process time is above accepted SLOs."),Object(a.b)("li",{parentName:"ul"},"The infrastructure has become unhealthy and unstable.")),Object(a.b)("h2",{id:"priority-3-p1"},"Priority 3 (P1)"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"These incidents are covered by in UK business hours.")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A single mail has been bounced due to malformed MIME or out of acceptable configured boundaries for the tenant i.e mailsize."),Object(a.b)("li",{parentName:"ul"},"A non-essential mail service is not running.")))}u.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);