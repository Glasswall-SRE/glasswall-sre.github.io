(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),i=(a(0),a(87)),o={title:"Data Management",description:"How Rebuild for Email's Data is managed."},c={unversionedId:"products/rebuild-email/security-policy/data-management",id:"products/rebuild-email/security-policy/data-management",isDocsHomePage:!1,title:"Data Management",description:"How Rebuild for Email's Data is managed.",source:"@site/docs/products/rebuild-email/security-policy/data-management.md",slug:"/products/rebuild-email/security-policy/data-management",permalink:"/docs/products/rebuild-email/security-policy/data-management",editUrl:"https://github.com/glasswall-sre/glasswall-sre.github.io/docs/products/rebuild-email/security-policy/data-management.md",version:"current",sidebar:"docs",previous:{title:"Incident Events",permalink:"/docs/products/rebuild-email/incident-events"},next:{title:"PRR",permalink:"/docs/products/rebuild-api/PRR"}},s=[{value:"Azure SQL",id:"azure-sql",children:[{value:"Redundancy",id:"redundancy",children:[]},{value:"Security",id:"security",children:[]},{value:"Resource management",id:"resource-management",children:[]}]},{value:"Blob Storage",id:"blob-storage",children:[{value:"Redundancy",id:"redundancy-1",children:[]},{value:"Security",id:"security-1",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"This section contains key information on how we manage data within Rebuild for Email."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Keywords"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"DTU: Database Throughput Unit. Describes the performance capability of a database. It is a grouping of CPU, I/O, and memory. Increase the DTU increases performance."),Object(i.b)("li",{parentName:"ul"},"Elastic pool: This is a technology within Azure SQL that allows the generation of a single pool of DTU resources that multiple databases can use. This is designed to reduce costs by being more efficient in resource usage.")),Object(i.b)("h2",{id:"azure-sql"},"Azure SQL"),Object(i.b)("p",null,"We use Azure SQL to store relational data within the FileTrust email. The following databases are used within the product:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Policy"),": This stores the policy configuration of a tenant."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Tenman"),": This stores the tenant's details including who the admins are and who the tenant is."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Reports"),": This stores the transactional reports of the tenants. Transactional reports are defined as emails that flow through the system."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"CAS"),": This stores the user's login details and manages sign up and login authentication.")),Object(i.b)("h3",{id:"redundancy"},"Redundancy"),Object(i.b)("p",null,"All live customer production SQL databases have automatic Geo-replication set to create a geo-redundancy."),Object(i.b)("p",null,"UKSouth Geo-Replicates to UKWest"),Object(i.b)("p",null,"USEast Geo-Replicates to USWest"),Object(i.b)("h3",{id:"security"},"Security"),Object(i.b)("p",null,"The following security measure has been taken to protect our customer's data:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each database is encrypted at rest with AES 256 symmetric encryption."),Object(i.b)("li",{parentName:"ul"},"Each production database can only be accessed via a specific set of IPs."),Object(i.b)("li",{parentName:"ul"},"Only accessible by SRE team and key database developers.")),Object(i.b)("h3",{id:"resource-management"},"Resource management"),Object(i.b)("p",null,"Each of the key databases except Reports has a single Azure SQL server with a single Azure SQL database."),Object(i.b)("p",null,"Reports have a separate database per live tenant because transactional data ingest and egress can vary dramatically per tenant.  Having a separate database can be costly"),Object(i.b)("p",null,"Each database current resource configuration is:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"- Policy, Tenman, and CAS:\n    - S0 10 DTUs\n        - Geo-Replication\n\n- Reports:\n     - PoC Customers:\n        - Single 200 DTU Database\n                - No Geo-Replication\n     - Live Customers:\n        - Elasticpools of 200 eDTUs:\n            - 10 databases per pool.\n            - 0 - 20 eDTUs set per database.\n        - Geo-Replication\n")),Object(i.b)("h2",{id:"blob-storage"},"Blob Storage"),Object(i.b)("p",null,"We use Blob storage to store customers' transactional data such as emails, analysis reports, and protected files."),Object(i.b)("h3",{id:"redundancy-1"},"Redundancy"),Object(i.b)("p",null,"All live customer production blob storages have automatic Geo-replication set to create a geo-redundancy."),Object(i.b)("p",null,"UKSouth Geo-Replicates to UKWest"),Object(i.b)("p",null,"USEast Geo-Replicates to USWest"),Object(i.b)("h3",{id:"security-1"},"Security"),Object(i.b)("p",null,"The following security measure has been taken to protect our customer's data:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each blob storage is encrypted at rest with AES 256 symmetric encryption."),Object(i.b)("li",{parentName:"ul"},"Only accessible by SRE team and key database developers.")))}u.isMDXComponent=!0},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(a),p=n,m=b["".concat(o,".").concat(p)]||b[p]||d[p]||i;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);