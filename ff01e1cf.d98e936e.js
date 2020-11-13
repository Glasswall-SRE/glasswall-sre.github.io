(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(88)),c={title:"Incident Classification",description:"Incident Classification"},o={unversionedId:"incident-monitoring/incident-classification",id:"incident-monitoring/incident-classification",isDocsHomePage:!1,title:"Incident Classification",description:"Incident Classification",source:"@site/docs/incident-monitoring/incident-classification.md",slug:"/incident-monitoring/incident-classification",permalink:"/docs/incident-monitoring/incident-classification",editUrl:"https://github.com/glasswall-sre/glasswall-sre.github.io/docs/incident-monitoring/incident-classification.md",version:"current",sidebar:"docs",previous:{title:"Production Release Process",permalink:"/docs/production/production-release-process"},next:{title:"Incident Management",permalink:"/docs/incident-monitoring/incident-management"}},l=[],b={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Incidents\xa0can be grouped into one of three classifications"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Classification"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Out of Hours Support"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Time to First Response"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Time to Resolution"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Priority 1 (P1)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Total outage of services. ALl customers are directly impacted."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"15 minutes"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4 hours")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Priority 2 (P2)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial outage of key services. Minority of customers impacted."),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"15 minutes"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"8 hours")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Priority 3 (P3)"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All over incident types"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4 hours"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2 days")))))}s.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||i;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);