(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{160:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),i=r(9),o=(r(0),r(163)),a={title:"What is SRE",description:"Site Reliability Engineering"},c={id:"sre/what-is-sre",title:"What is SRE",description:"Site Reliability Engineering",source:"@site/docs/sre/what-is-sre.md",permalink:"/docs/sre/what-is-sre",editUrl:"https://github.com/glasswall-sre/glasswall-sre.github.io/docs/sre/what-is-sre.md",sidebar:"docs",next:{title:"SLO and SLIs",permalink:"/docs/sre/slo-slis"}},l=[{value:"Service Reliability Engineering?",id:"service-reliability-engineering",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"service-reliability-engineering"},"Service Reliability Engineering?"),Object(o.b)("p",null,"What is Service Reliability Engineering?"),Object(o.b)("p",null,"Thankfully, Google\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://landing.google.com/sre/sre-book/chapters/introduction/"}),"has us covered"),"\non this one."),Object(o.b)("p",null,"Google's 'Site Reliability Engineering' book is essentially our bible. We'll\nbe basing most of our processes on it going forward."))}u.isMDXComponent=!0},163:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return g}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,g=p["".concat(a,".").concat(f)]||p[f]||b[f]||o;return r?i.a.createElement(g,c(c({ref:t},s),{},{components:r})):i.a.createElement(g,c({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);