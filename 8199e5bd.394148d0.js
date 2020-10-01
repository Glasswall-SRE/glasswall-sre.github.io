(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(9),o=(a(0),a(163)),i={title:"Data Management",description:"How Rebuild for Email's Data is managed."},c={id:"products/rebuild-email/security-policy/data-management",title:"Data Management",description:"How Rebuild for Email's Data is managed.",source:"@site/docs/products/rebuild-email/security-policy/data-management.md",permalink:"/docs/products/rebuild-email/security-policy/data-management",editUrl:"https://github.com/glasswall-sre/glasswall-sre.github.io/docs/products/rebuild-email/security-policy/data-management.md",sidebar:"docs",previous:{title:"Incident Events",permalink:"/docs/products/rebuild-email/incident-events"},next:{title:"SRE Software Standards",permalink:"/docs/standards/software"}},s=[{value:"Azure SQL",id:"azure-sql",children:[{value:"Redundancy",id:"redundancy",children:[]},{value:"Security",id:"security",children:[]},{value:"Resource management",id:"resource-management",children:[]}]},{value:"Blob Storage",id:"blob-storage",children:[{value:"Redundancy",id:"redundancy-1",children:[]},{value:"Security",id:"security-1",children:[]}]}],l={rightToc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"This section contains key information on how we manage data within Rebuild for Email."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Keywords"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"DTU: Database Throughput Unit. Describes the performance capability of a database. It is a grouping of CPU, I/O, and memory. Increase the DTU increases performance."),Object(o.b)("li",{parentName:"ul"},"Elastic pool: This is a technology within Azure SQL that allows the generation of a single pool of DTU resources that multiple databases can use. This is designed to reduce costs by being more efficient in resource usage.")),Object(o.b)("h2",{id:"azure-sql"},"Azure SQL"),Object(o.b)("p",null,"We use Azure SQL to store relational data within the FileTrust email. The following databases are used within the product:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Policy"),": This stores the policy configuration of a tenant."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Tenman"),": This stores the tenant's details including who the admins are and who the tenant is."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Reports"),": This stores the transactional reports of the tenants. Transactional reports are defined as emails that flow through the system."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"CAS"),": This stores the user's login details and manages sign up and login authentication.")),Object(o.b)("h3",{id:"redundancy"},"Redundancy"),Object(o.b)("p",null,"All live customer production SQL databases have automatic Geo-replication set to create a geo-redundancy."),Object(o.b)("p",null,"UKSouth Geo-Replicates to UKWest"),Object(o.b)("p",null,"USEast Geo-Replicates to USWest"),Object(o.b)("h3",{id:"security"},"Security"),Object(o.b)("p",null,"The following security measure has been taken to protect our customer's data:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each database is encrypted at rest with AES 256 symmetric encryption."),Object(o.b)("li",{parentName:"ul"},"Each production database can only be accessed via a specific set of IPs."),Object(o.b)("li",{parentName:"ul"},"Only accessible by SRE team and key database developers.")),Object(o.b)("h3",{id:"resource-management"},"Resource management"),Object(o.b)("p",null,"Each of the key databases except Reports has a single Azure SQL server with a single Azure SQL database."),Object(o.b)("p",null,"Reports have a separate database per live tenant because transactional data ingest and egress can vary dramatically per tenant.  Having a separate database can be costly"),Object(o.b)("p",null,"Each database current resource configuration is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"- Policy, Tenman, and CAS:\n    - S0 10 DTUs\n        - Geo-Replication\n\n- Reports:\n     - PoC Customers:\n        - Single 200 DTU Database\n                - No Geo-Replication\n     - Live Customers:\n        - Elasticpools of 200 eDTUs:\n            - 10 databases per pool.\n            - 0 - 20 eDTUs set per database.\n        - Geo-Replication\n")),Object(o.b)("h2",{id:"blob-storage"},"Blob Storage"),Object(o.b)("p",null,"We use Blob storage to store customers' transactional data such as emails, analysis reports, and protected files."),Object(o.b)("h3",{id:"redundancy-1"},"Redundancy"),Object(o.b)("p",null,"All live customer production blob storages have automatic Geo-replication set to create a geo-redundancy."),Object(o.b)("p",null,"UKSouth Geo-Replicates to UKWest"),Object(o.b)("p",null,"USEast Geo-Replicates to USWest"),Object(o.b)("h3",{id:"security-1"},"Security"),Object(o.b)("p",null,"The following security measure has been taken to protect our customer's data:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each blob storage is encrypted at rest with AES 256 symmetric encryption."),Object(o.b)("li",{parentName:"ul"},"Only accessible by SRE team and key database developers.")))}u.isMDXComponent=!0},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(a),p=n,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);