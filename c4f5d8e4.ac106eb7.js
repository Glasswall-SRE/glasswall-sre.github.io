(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{82:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(0),r=n.n(o),i=n(116),c=n.n(i),l=n(97),s=n(90),u=(n(7),n(89)),d=n(93),p=n(101),m=n(20);function b(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function f(e,t){return o.useMemo((function(){return null==e&&null==t?null:function(n){b(e,n),b(t,n)}}),[e,t])}var h="undefined"!=typeof window?o.useLayoutEffect:o.useEffect;function v(e){var t=o.useRef(e);return h((function(){t.current=e})),o.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}var g=!0,y=!1,x=null,E={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function w(e){e.metaKey||e.altKey||e.ctrlKey||(g=!0)}function O(){g=!1}function S(){"hidden"===this.visibilityState&&y&&(g=!0)}function k(e){var t,n,a,o=e.target;try{return o.matches(":focus-visible")}catch(r){}return g||(n=(t=o).type,!("INPUT"!==(a=t.tagName)||!E[n]||t.readOnly)||"TEXTAREA"===a&&!t.readOnly||!!t.isContentEditable)}function j(){y=!0,window.clearTimeout(x),x=window.setTimeout((function(){y=!1}),100)}function C(){return{isFocusVisible:k,onBlurVisible:j,ref:o.useCallback((function(e){var t,n=m.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",w,!0),t.addEventListener("mousedown",O,!0),t.addEventListener("pointerdown",O,!0),t.addEventListener("touchstart",O,!0),t.addEventListener("visibilitychange",S,!0))}),[])}}var R=n(109),T=n(6),z=n(129),M=n(3),N=r.a.createContext(null);function V(e,t){var n=Object.create(null);return e&&o.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&Object(o.isValidElement)(e)?t(e):e}(e)})),n}function I(e,t,n){return null!=n[t]?n[t]:e.props[t]}function L(e,t,n){var a=V(e.children),r=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var a,o=Object.create(null),r=[];for(var i in e)i in t?r.length&&(o[i]=r,r=[]):r.push(i);var c={};for(var l in t){if(o[l])for(a=0;a<o[l].length;a++){var s=o[l][a];c[o[l][a]]=n(s)}c[l]=n(l)}for(a=0;a<r.length;a++)c[r[a]]=n(r[a]);return c}(t,a);return Object.keys(r).forEach((function(i){var c=r[i];if(Object(o.isValidElement)(c)){var l=i in t,s=i in a,u=t[i],d=Object(o.isValidElement)(u)&&!u.props.in;!s||l&&!d?s||!l||d?s&&l&&Object(o.isValidElement)(u)&&(r[i]=Object(o.cloneElement)(c,{onExited:n.bind(null,c),in:u.props.in,exit:I(c,"exit",e),enter:I(c,"enter",e)})):r[i]=Object(o.cloneElement)(c,{in:!1}):r[i]=Object(o.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:I(c,"exit",e),enter:I(c,"enter",e)})}})),r}var D=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},F=function(e){function t(t,n){var a,o=(a=e.call(this,t,n)||this).handleExited.bind(Object(z.a)(a));return a.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},a}Object(M.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,a,r=t.children,i=t.handleExited;return{children:t.firstRender?(n=e,a=i,V(n.children,(function(e){return Object(o.cloneElement)(e,{onExited:a.bind(null,e),in:!0,appear:I(e,"appear",n),enter:I(e,"enter",n),exit:I(e,"exit",n)})}))):L(e,r,i),firstRender:!1}},n.handleExited=function(e,t){var n=V(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=Object(a.a)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,a=Object(T.a)(e,["component","childFactory"]),o=this.state.contextValue,i=D(this.state.children).map(n);return delete a.appear,delete a.enter,delete a.exit,null===t?r.a.createElement(N.Provider,{value:o},i):r.a.createElement(N.Provider,{value:o},r.a.createElement(t,a,i))},t}(r.a.Component);F.propTypes={},F.defaultProps={component:"div",childFactory:function(e){return e}};var P=F,$="undefined"==typeof window?o.useEffect:o.useLayoutEffect;var B=function(e){var t=e.classes,n=e.pulsate,a=void 0!==n&&n,r=e.rippleX,i=e.rippleY,c=e.rippleSize,l=e.in,s=e.onExited,d=void 0===s?function(){}:s,p=e.timeout,m=o.useState(!1),b=m[0],f=m[1],h=Object(u.a)(t.ripple,t.rippleVisible,a&&t.ripplePulsate),g={width:c,height:c,top:-c/2+i,left:-c/2+r},y=Object(u.a)(t.child,b&&t.childLeaving,a&&t.childPulsate),x=v(d);return $((function(){if(!l){f(!0);var e=setTimeout(x,p);return function(){clearTimeout(e)}}}),[x,l,p]),o.createElement("span",{className:h,style:g},o.createElement("span",{className:y}))},U=o.forwardRef((function(e,t){var n=e.center,r=void 0!==n&&n,i=e.classes,c=e.className,l=Object(s.a)(e,["center","classes","className"]),d=o.useState([]),p=d[0],m=d[1],b=o.useRef(0),f=o.useRef(null);o.useEffect((function(){f.current&&(f.current(),f.current=null)}),[p]);var h=o.useRef(!1),v=o.useRef(null),g=o.useRef(null),y=o.useRef(null);o.useEffect((function(){return function(){clearTimeout(v.current)}}),[]);var x=o.useCallback((function(e){var t=e.pulsate,n=e.rippleX,a=e.rippleY,r=e.rippleSize,c=e.cb;m((function(e){return[].concat(Object(R.a)(e),[o.createElement(B,{key:b.current,classes:i,timeout:550,pulsate:t,rippleX:n,rippleY:a,rippleSize:r})])})),b.current+=1,f.current=c}),[i]),E=o.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=t.pulsate,o=void 0!==a&&a,i=t.center,c=void 0===i?r||t.pulsate:i,l=t.fakeElement,s=void 0!==l&&l;if("mousedown"===e.type&&h.current)h.current=!1;else{"touchstart"===e.type&&(h.current=!0);var u,d,p,m=s?null:y.current,b=m?m.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(c||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(b.width/2),d=Math.round(b.height/2);else{var f=e.touches?e.touches[0]:e,E=f.clientX,w=f.clientY;u=Math.round(E-b.left),d=Math.round(w-b.top)}if(c)(p=Math.sqrt((2*Math.pow(b.width,2)+Math.pow(b.height,2))/3))%2==0&&(p+=1);else{var O=2*Math.max(Math.abs((m?m.clientWidth:0)-u),u)+2,S=2*Math.max(Math.abs((m?m.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(O,2)+Math.pow(S,2))}e.touches?null===g.current&&(g.current=function(){x({pulsate:o,rippleX:u,rippleY:d,rippleSize:p,cb:n})},v.current=setTimeout((function(){g.current&&(g.current(),g.current=null)}),80)):x({pulsate:o,rippleX:u,rippleY:d,rippleSize:p,cb:n})}}),[r,x]),w=o.useCallback((function(){E({},{pulsate:!0})}),[E]),O=o.useCallback((function(e,t){if(clearTimeout(v.current),"touchend"===e.type&&g.current)return e.persist(),g.current(),g.current=null,void(v.current=setTimeout((function(){O(e,t)})));g.current=null,m((function(e){return e.length>0?e.slice(1):e})),f.current=t}),[]);return o.useImperativeHandle(t,(function(){return{pulsate:w,start:E,stop:O}}),[w,E,O]),o.createElement("span",Object(a.a)({className:Object(u.a)(i.root,c),ref:y},l),o.createElement(P,{component:null,exit:!0},p))})),W=Object(d.a)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(o.memo(U)),K=o.forwardRef((function(e,t){var n=e.action,r=e.buttonRef,i=e.centerRipple,c=void 0!==i&&i,l=e.children,d=e.classes,p=e.className,b=e.component,h=void 0===b?"button":b,g=e.disabled,y=void 0!==g&&g,x=e.disableRipple,E=void 0!==x&&x,w=e.disableTouchRipple,O=void 0!==w&&w,S=e.focusRipple,k=void 0!==S&&S,j=e.focusVisibleClassName,R=e.onBlur,T=e.onClick,z=e.onFocus,M=e.onFocusVisible,N=e.onKeyDown,V=e.onKeyUp,I=e.onMouseDown,L=e.onMouseLeave,D=e.onMouseUp,F=e.onTouchEnd,P=e.onTouchMove,$=e.onTouchStart,B=e.onDragLeave,U=e.tabIndex,K=void 0===U?0:U,X=e.TouchRippleProps,Y=e.type,A=void 0===Y?"button":Y,H=Object(s.a)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),_=o.useRef(null);var G=o.useRef(null),q=o.useState(!1),J=q[0],Q=q[1];y&&J&&Q(!1);var Z=C(),ee=Z.isFocusVisible,te=Z.onBlurVisible,ne=Z.ref;function ae(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:O;return v((function(a){return t&&t(a),!n&&G.current&&G.current[e](a),!0}))}o.useImperativeHandle(n,(function(){return{focusVisible:function(){Q(!0),_.current.focus()}}}),[]),o.useEffect((function(){J&&k&&!E&&G.current.pulsate()}),[E,k,J]);var oe=ae("start",I),re=ae("stop",B),ie=ae("stop",D),ce=ae("stop",(function(e){J&&e.preventDefault(),L&&L(e)})),le=ae("start",$),se=ae("stop",F),ue=ae("stop",P),de=ae("stop",(function(e){J&&(te(e),Q(!1)),R&&R(e)}),!1),pe=v((function(e){_.current||(_.current=e.currentTarget),ee(e)&&(Q(!0),M&&M(e)),z&&z(e)})),me=function(){var e=m.findDOMNode(_.current);return h&&"button"!==h&&!("A"===e.tagName&&e.href)},be=o.useRef(!1),fe=v((function(e){k&&!be.current&&J&&G.current&&" "===e.key&&(be.current=!0,e.persist(),G.current.stop(e,(function(){G.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),N&&N(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!y&&(e.preventDefault(),T&&T(e))})),he=v((function(e){k&&" "===e.key&&G.current&&J&&!e.defaultPrevented&&(be.current=!1,e.persist(),G.current.stop(e,(function(){G.current.pulsate(e)}))),V&&V(e),T&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&T(e)})),ve=h;"button"===ve&&H.href&&(ve="a");var ge={};"button"===ve?(ge.type=A,ge.disabled=y):("a"===ve&&H.href||(ge.role="button"),ge["aria-disabled"]=y);var ye=f(r,t),xe=f(ne,_),Ee=f(ye,xe),we=o.useState(!1),Oe=we[0],Se=we[1];o.useEffect((function(){Se(!0)}),[]);var ke=Oe&&!E&&!y;return o.createElement(ve,Object(a.a)({className:Object(u.a)(d.root,p,J&&[d.focusVisible,j],y&&d.disabled),onBlur:de,onClick:T,onFocus:pe,onKeyDown:fe,onKeyUp:he,onMouseDown:oe,onMouseLeave:ce,onMouseUp:ie,onDragLeave:re,onTouchEnd:se,onTouchMove:ue,onTouchStart:le,ref:Ee,tabIndex:y?-1:K},ge,H),l,ke?o.createElement(W,Object(a.a)({ref:G,center:c},X)):null)})),X=Object(d.a)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(K),Y=n(132),A=o.forwardRef((function(e,t){var n=e.children,r=e.classes,i=e.className,c=e.color,l=void 0===c?"default":c,d=e.component,p=void 0===d?"button":d,m=e.disabled,b=void 0!==m&&m,f=e.disableElevation,h=void 0!==f&&f,v=e.disableFocusRipple,g=void 0!==v&&v,y=e.endIcon,x=e.focusVisibleClassName,E=e.fullWidth,w=void 0!==E&&E,O=e.size,S=void 0===O?"medium":O,k=e.startIcon,j=e.type,C=void 0===j?"button":j,R=e.variant,T=void 0===R?"text":R,z=Object(s.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),M=k&&o.createElement("span",{className:Object(u.a)(r.startIcon,r["iconSize".concat(Object(Y.a)(S))])},k),N=y&&o.createElement("span",{className:Object(u.a)(r.endIcon,r["iconSize".concat(Object(Y.a)(S))])},y);return o.createElement(X,Object(a.a)({className:Object(u.a)(r.root,r[T],i,"inherit"===l?r.colorInherit:"default"!==l&&r["".concat(T).concat(Object(Y.a)(l))],"medium"!==S&&[r["".concat(T,"Size").concat(Object(Y.a)(S))],r["size".concat(Object(Y.a)(S))]],h&&r.disableElevation,b&&r.disabled,w&&r.fullWidth),component:p,disabled:b,focusRipple:!g,focusVisibleClassName:Object(u.a)(r.focusVisible,x),ref:t,type:C},z),o.createElement("span",{className:r.label},M,n,N))})),H=Object(d.a)((function(e){return{root:Object(a.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(p.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(p.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(p.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(p.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(p.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(A),_=n(88),G=n(92),q=n(74),J=n.n(q),Q=[{title:r.a.createElement(r.a.Fragment,null,"Run Production"),imageUrl:"img/production-warehouse.svg",description:r.a.createElement(r.a.Fragment,null,"We run Glasswall's products in Production following Google's SRE practices. Our aim is to make sure all customers experience a high level of availability no matter what product they use.")},{title:r.a.createElement(r.a.Fragment,null,"Consulting and Guidance"),imageUrl:"img/consulting.svg",description:r.a.createElement(r.a.Fragment,null,"We provide consulting and guidance on best practices for creating scalable available products.")},{title:r.a.createElement(r.a.Fragment,null,"Infrastructure"),imageUrl:"img/construction.svg",description:r.a.createElement(r.a.Fragment,null,"We help build infrastructure and provide platforms for you to run your products.")}];function Z(e){var t=e.imageUrl,n=e.title,a=e.description,o=Object(G.a)(t);return r.a.createElement("div",{className:c()("col col--4",J.a.feature)},o&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:J.a.featureImage,src:o,alt:n})),r.a.createElement("h3",null,n),r.a.createElement("p",null,a))}t.default=function(){var e=Object(_.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(l.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},r.a.createElement("header",{className:c()("hero hero--primary",J.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:J.a.buttons},r.a.createElement(H,{variant:"contained",color:"white",href:Object(G.a)("docs/production/journey-to-production")},"Ready for Production?")))),r.a.createElement("main",null,Q&&Q.length&&r.a.createElement("section",{className:J.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},Q.map((function(e,t){return r.a.createElement(Z,Object(a.a)({key:t},e))})))))))}}}]);