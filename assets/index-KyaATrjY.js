(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Es(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function qh(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var _d={exports:{}},qi={},Pd={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do=Symbol.for("react.element"),em=Symbol.for("react.portal"),tm=Symbol.for("react.fragment"),nm=Symbol.for("react.strict_mode"),rm=Symbol.for("react.profiler"),om=Symbol.for("react.provider"),im=Symbol.for("react.context"),lm=Symbol.for("react.forward_ref"),am=Symbol.for("react.suspense"),sm=Symbol.for("react.memo"),um=Symbol.for("react.lazy"),Hu=Symbol.iterator;function cm(e){return e===null||typeof e!="object"?null:(e=Hu&&e[Hu]||e["@@iterator"],typeof e=="function"?e:null)}var Rd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Od=Object.assign,jd={};function _r(e,t,n){this.props=e,this.context=t,this.refs=jd,this.updater=n||Rd}_r.prototype.isReactComponent={};_r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Md(){}Md.prototype=_r.prototype;function Cs(e,t,n){this.props=e,this.context=t,this.refs=jd,this.updater=n||Rd}var $s=Cs.prototype=new Md;$s.constructor=Cs;Od($s,_r.prototype);$s.isPureReactComponent=!0;var Yu=Array.isArray,Ld=Object.prototype.hasOwnProperty,Ts={current:null},Bd={key:!0,ref:!0,__self:!0,__source:!0};function zd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ld.call(t,r)&&!Bd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Do,type:e,key:i,ref:l,props:o,_owner:Ts.current}}function dm(e,t){return{$$typeof:Do,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Is(e){return typeof e=="object"&&e!==null&&e.$$typeof===Do}function fm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gu=/\/+/g;function Il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fm(""+e.key):t.toString(36)}function ii(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Do:case em:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Il(l,0):r,Yu(o)?(n="",e!=null&&(n=e.replace(Gu,"$&/")+"/"),ii(o,t,n,"",function(c){return c})):o!=null&&(Is(o)&&(o=dm(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Gu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Yu(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Il(i,a);l+=ii(i,t,n,s,o)}else if(s=cm(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Il(i,a++),l+=ii(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function jo(e,t,n){if(e==null)return e;var r=[],o=0;return ii(e,r,"","",function(i){return t.call(n,i,o++)}),r}function pm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},li={transition:null},hm={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:li,ReactCurrentOwner:Ts};Y.Children={map:jo,forEach:function(e,t,n){jo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jo(e,function(){t++}),t},toArray:function(e){return jo(e,function(t){return t})||[]},only:function(e){if(!Is(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=_r;Y.Fragment=tm;Y.Profiler=rm;Y.PureComponent=Cs;Y.StrictMode=nm;Y.Suspense=am;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hm;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Od({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ts.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Ld.call(t,s)&&!Bd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Do,type:e.type,key:o,ref:i,props:r,_owner:l}};Y.createContext=function(e){return e={$$typeof:im,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:om,_context:e},e.Consumer=e};Y.createElement=zd;Y.createFactory=function(e){var t=zd.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:lm,render:e}};Y.isValidElement=Is;Y.lazy=function(e){return{$$typeof:um,_payload:{_status:-1,_result:e},_init:pm}};Y.memo=function(e,t){return{$$typeof:sm,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=li.transition;li.transition={};try{e()}finally{li.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Ve.current.useCallback(e,t)};Y.useContext=function(e){return Ve.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ve.current.useEffect(e,t)};Y.useId=function(){return Ve.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ve.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};Y.useRef=function(e){return Ve.current.useRef(e)};Y.useState=function(e){return Ve.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ve.current.useTransition()};Y.version="18.2.0";Pd.exports=Y;var v=Pd.exports;const w=Es(v);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm=v,gm=Symbol.for("react.element"),vm=Symbol.for("react.fragment"),ym=Object.prototype.hasOwnProperty,wm=mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xm={key:!0,ref:!0,__self:!0,__source:!0};function Fd(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)ym.call(t,r)&&!xm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:gm,type:e,key:i,ref:l,props:o,_owner:wm.current}}qi.Fragment=vm;qi.jsx=Fd;qi.jsxs=Fd;_d.exports=qi;var E=_d.exports,ca={},Ud={exports:{}},it={},Vd={exports:{}},Wd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,P){var O=$.length;$.push(P);e:for(;0<O;){var Q=O-1>>>1,K=$[Q];if(0<o(K,P))$[Q]=P,$[O]=K,O=Q;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var P=$[0],O=$.pop();if(O!==P){$[0]=O;e:for(var Q=0,K=$.length,L=K>>>1;Q<L;){var B=2*(Q+1)-1,H=$[B],z=B+1,V=$[z];if(0>o(H,O))z<K&&0>o(V,H)?($[Q]=V,$[z]=O,Q=z):($[Q]=H,$[B]=O,Q=B);else if(z<K&&0>o(V,O))$[Q]=V,$[z]=O,Q=z;else break e}}return P}function o($,P){var O=$.sortIndex-P.sortIndex;return O!==0?O:$.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],h=1,p=null,m=3,A=!1,S=!1,C=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d($){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=$)r(c),P.sortIndex=P.expirationTime,t(s,P);else break;P=n(c)}}function g($){if(C=!1,d($),!S)if(n(s)!==null)S=!0,we(y);else{var P=n(c);P!==null&&pe(g,P.startTime-$)}}function y($,P){S=!1,C&&(C=!1,f(D),D=-1),A=!0;var O=m;try{for(d(P),p=n(s);p!==null&&(!(p.expirationTime>P)||$&&!G());){var Q=p.callback;if(typeof Q=="function"){p.callback=null,m=p.priorityLevel;var K=Q(p.expirationTime<=P);P=e.unstable_now(),typeof K=="function"?p.callback=K:p===n(s)&&r(s),d(P)}else r(s);p=n(s)}if(p!==null)var L=!0;else{var B=n(c);B!==null&&pe(g,B.startTime-P),L=!1}return L}finally{p=null,m=O,A=!1}}var b=!1,k=null,D=-1,M=5,j=-1;function G(){return!(e.unstable_now()-j<M)}function Z(){if(k!==null){var $=e.unstable_now();j=$;var P=!0;try{P=k(!0,$)}finally{P?le():(b=!1,k=null)}}else b=!1}var le;if(typeof u=="function")le=function(){u(Z)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ee=ne.port2;ne.port1.onmessage=Z,le=function(){ee.postMessage(null)}}else le=function(){I(Z,0)};function we($){k=$,b||(b=!0,le())}function pe($,P){D=I(function(){$(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){S||A||(S=!0,we(y))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function($){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var O=m;m=P;try{return $()}finally{m=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,P){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var O=m;m=$;try{return P()}finally{m=O}},e.unstable_scheduleCallback=function($,P,O){var Q=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?Q+O:Q):O=Q,$){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=O+K,$={id:h++,callback:P,priorityLevel:$,startTime:O,expirationTime:K,sortIndex:-1},O>Q?($.sortIndex=O,t(c,$),n(s)===null&&$===n(c)&&(C?(f(D),D=-1):C=!0,pe(g,O-Q))):($.sortIndex=K,t(s,$),S||A||(S=!0,we(y))),$},e.unstable_shouldYield=G,e.unstable_wrapCallback=function($){var P=m;return function(){var O=m;m=P;try{return $.apply(this,arguments)}finally{m=O}}}})(Wd);Vd.exports=Wd;var Am=Vd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd=v,ot=Am;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hd=new Set,uo={};function Qn(e,t){xr(e,t),xr(e+"Capture",t)}function xr(e,t){for(uo[e]=t,e=0;e<t.length;e++)Hd.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),da=Object.prototype.hasOwnProperty,km=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ku={},Ju={};function Sm(e){return da.call(Ju,e)?!0:da.call(Ku,e)?!1:km.test(e)?Ju[e]=!0:(Ku[e]=!0,!1)}function bm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Em(e,t,n,r){if(t===null||typeof t>"u"||bm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ds=/[\-:]([a-z])/g;function Ns(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ds,Ns);Re[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ds,Ns);Re[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ds,Ns);Re[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function _s(e,t,n,r){var o=Re.hasOwnProperty(t)?Re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Em(t,n,o,r)&&(n=null),r||o===null?Sm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mo=Symbol.for("react.element"),qn=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),Ps=Symbol.for("react.strict_mode"),fa=Symbol.for("react.profiler"),Yd=Symbol.for("react.provider"),Gd=Symbol.for("react.context"),Rs=Symbol.for("react.forward_ref"),pa=Symbol.for("react.suspense"),ha=Symbol.for("react.suspense_list"),Os=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),Kd=Symbol.for("react.offscreen"),Zu=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=Zu&&e[Zu]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Dl;function Gr(e){if(Dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dl=t&&t[1]||""}return`
`+Dl+e}var Nl=!1;function _l(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gr(e):""}function Cm(e){switch(e.tag){case 5:return Gr(e.type);case 16:return Gr("Lazy");case 13:return Gr("Suspense");case 19:return Gr("SuspenseList");case 0:case 2:case 15:return e=_l(e.type,!1),e;case 11:return e=_l(e.type.render,!1),e;case 1:return e=_l(e.type,!0),e;default:return""}}function ma(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case qn:return"Portal";case fa:return"Profiler";case Ps:return"StrictMode";case pa:return"Suspense";case ha:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gd:return(e.displayName||"Context")+".Consumer";case Yd:return(e._context.displayName||"Context")+".Provider";case Rs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Os:return t=e.displayName||null,t!==null?t:ma(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return ma(e(t))}catch{}}return null}function $m(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ma(t);case 8:return t===Ps?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tm(e){var t=Jd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lo(e){e._valueTracker||(e._valueTracker=Tm(e))}function Zd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Jd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ga(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Xu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xd(e,t){t=t.checked,t!=null&&_s(e,"checked",t,!1)}function va(e,t){Xd(e,t);var n=vn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&ya(e,t.type,vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ya(e,t,n){(t!=="number"||ki(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Kr=Array.isArray;function hr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function wa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ec(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Kr(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vn(n)}}function qd(e,t){var n=vn(t.value),r=vn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ef(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ef(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bo,tf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bo=Bo||document.createElement("div"),Bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function co(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Im=["Webkit","ms","Moz","O"];Object.keys(qr).forEach(function(e){Im.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qr[t]=qr[e]})});function nf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qr.hasOwnProperty(e)&&qr[e]?(""+t).trim():t+"px"}function rf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=nf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Dm=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Aa(e,t){if(t){if(Dm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function ka(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sa=null;function js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ba=null,mr=null,gr=null;function nc(e){if(e=Po(e)){if(typeof ba!="function")throw Error(T(280));var t=e.stateNode;t&&(t=ol(t),ba(e.stateNode,e.type,t))}}function of(e){mr?gr?gr.push(e):gr=[e]:mr=e}function lf(){if(mr){var e=mr,t=gr;if(gr=mr=null,nc(e),t)for(e=0;e<t.length;e++)nc(t[e])}}function af(e,t){return e(t)}function sf(){}var Pl=!1;function uf(e,t,n){if(Pl)return e(t,n);Pl=!0;try{return af(e,t,n)}finally{Pl=!1,(mr!==null||gr!==null)&&(sf(),lf())}}function fo(e,t){var n=e.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var Ea=!1;if(Wt)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){Ea=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{Ea=!1}function Nm(e,t,n,r,o,i,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var eo=!1,Si=null,bi=!1,Ca=null,_m={onError:function(e){eo=!0,Si=e}};function Pm(e,t,n,r,o,i,l,a,s){eo=!1,Si=null,Nm.apply(_m,arguments)}function Rm(e,t,n,r,o,i,l,a,s){if(Pm.apply(this,arguments),eo){if(eo){var c=Si;eo=!1,Si=null}else throw Error(T(198));bi||(bi=!0,Ca=c)}}function Hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rc(e){if(Hn(e)!==e)throw Error(T(188))}function Om(e){var t=e.alternate;if(!t){if(t=Hn(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return rc(o),e;if(i===r)return rc(o),t;i=i.sibling}throw Error(T(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function df(e){return e=Om(e),e!==null?ff(e):null}function ff(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ff(e);if(t!==null)return t;e=e.sibling}return null}var pf=ot.unstable_scheduleCallback,oc=ot.unstable_cancelCallback,jm=ot.unstable_shouldYield,Mm=ot.unstable_requestPaint,ye=ot.unstable_now,Lm=ot.unstable_getCurrentPriorityLevel,Ms=ot.unstable_ImmediatePriority,hf=ot.unstable_UserBlockingPriority,Ei=ot.unstable_NormalPriority,Bm=ot.unstable_LowPriority,mf=ot.unstable_IdlePriority,el=null,Dt=null;function zm(e){if(Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(el,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Vm,Fm=Math.log,Um=Math.LN2;function Vm(e){return e>>>=0,e===0?32:31-(Fm(e)/Um|0)|0}var zo=64,Fo=4194304;function Jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ci(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Jr(a):(i&=l,i!==0&&(r=Jr(i)))}else l=n&~o,l!==0?r=Jr(l):i!==0&&(r=Jr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),o=1<<n,r|=e[n],t&=~o;return r}function Wm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-xt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Wm(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function $a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gf(){var e=zo;return zo<<=1,!(zo&4194240)&&(zo=64),e}function Rl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function No(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function Hm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-xt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ls(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var q=0;function vf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yf,Bs,wf,xf,Af,Ta=!1,Uo=[],sn=null,un=null,cn=null,po=new Map,ho=new Map,rn=[],Ym="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ic(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":po.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(t.pointerId)}}function zr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Po(t),t!==null&&Bs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Gm(e,t,n,r,o){switch(t){case"focusin":return sn=zr(sn,e,t,n,r,o),!0;case"dragenter":return un=zr(un,e,t,n,r,o),!0;case"mouseover":return cn=zr(cn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return po.set(i,zr(po.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ho.set(i,zr(ho.get(i)||null,e,t,n,r,o)),!0}return!1}function kf(e){var t=In(e.target);if(t!==null){var n=Hn(t);if(n!==null){if(t=n.tag,t===13){if(t=cf(n),t!==null){e.blockedOn=t,Af(e.priority,function(){wf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ia(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sa=r,n.target.dispatchEvent(r),Sa=null}else return t=Po(n),t!==null&&Bs(t),e.blockedOn=n,!1;t.shift()}return!0}function lc(e,t,n){ai(e)&&n.delete(t)}function Km(){Ta=!1,sn!==null&&ai(sn)&&(sn=null),un!==null&&ai(un)&&(un=null),cn!==null&&ai(cn)&&(cn=null),po.forEach(lc),ho.forEach(lc)}function Fr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ta||(Ta=!0,ot.unstable_scheduleCallback(ot.unstable_NormalPriority,Km)))}function mo(e){function t(o){return Fr(o,e)}if(0<Uo.length){Fr(Uo[0],e);for(var n=1;n<Uo.length;n++){var r=Uo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Fr(sn,e),un!==null&&Fr(un,e),cn!==null&&Fr(cn,e),po.forEach(t),ho.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)kf(n),n.blockedOn===null&&rn.shift()}var vr=Gt.ReactCurrentBatchConfig,$i=!0;function Jm(e,t,n,r){var o=q,i=vr.transition;vr.transition=null;try{q=1,zs(e,t,n,r)}finally{q=o,vr.transition=i}}function Zm(e,t,n,r){var o=q,i=vr.transition;vr.transition=null;try{q=4,zs(e,t,n,r)}finally{q=o,vr.transition=i}}function zs(e,t,n,r){if($i){var o=Ia(e,t,n,r);if(o===null)Wl(e,t,r,Ti,n),ic(e,r);else if(Gm(o,e,t,n,r))r.stopPropagation();else if(ic(e,r),t&4&&-1<Ym.indexOf(e)){for(;o!==null;){var i=Po(o);if(i!==null&&yf(i),i=Ia(e,t,n,r),i===null&&Wl(e,t,r,Ti,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Wl(e,t,r,null,n)}}var Ti=null;function Ia(e,t,n,r){if(Ti=null,e=js(r),e=In(e),e!==null)if(t=Hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ti=e,null}function Sf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lm()){case Ms:return 1;case hf:return 4;case Ei:case Bm:return 16;case mf:return 536870912;default:return 16}default:return 16}}var ln=null,Fs=null,si=null;function bf(){if(si)return si;var e,t=Fs,n=t.length,r,o="value"in ln?ln.value:ln.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return si=o.slice(e,1<r?1-r:void 0)}function ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vo(){return!0}function ac(){return!1}function lt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vo:ac,this.isPropagationStopped=ac,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),t}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=lt(Pr),_o=fe({},Pr,{view:0,detail:0}),Xm=lt(_o),Ol,jl,Ur,tl=fe({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(Ol=e.screenX-Ur.screenX,jl=e.screenY-Ur.screenY):jl=Ol=0,Ur=e),Ol)},movementY:function(e){return"movementY"in e?e.movementY:jl}}),sc=lt(tl),qm=fe({},tl,{dataTransfer:0}),eg=lt(qm),tg=fe({},_o,{relatedTarget:0}),Ml=lt(tg),ng=fe({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),rg=lt(ng),og=fe({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ig=lt(og),lg=fe({},Pr,{data:0}),uc=lt(lg),ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ug[e])?!!t[e]:!1}function Vs(){return cg}var dg=fe({},_o,{key:function(e){if(e.key){var t=ag[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vs,charCode:function(e){return e.type==="keypress"?ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fg=lt(dg),pg=fe({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cc=lt(pg),hg=fe({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vs}),mg=lt(hg),gg=fe({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vg=lt(gg),yg=fe({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wg=lt(yg),xg=[9,13,27,32],Ws=Wt&&"CompositionEvent"in window,to=null;Wt&&"documentMode"in document&&(to=document.documentMode);var Ag=Wt&&"TextEvent"in window&&!to,Ef=Wt&&(!Ws||to&&8<to&&11>=to),dc=" ",fc=!1;function Cf(e,t){switch(e){case"keyup":return xg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $f(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function kg(e,t){switch(e){case"compositionend":return $f(t);case"keypress":return t.which!==32?null:(fc=!0,dc);case"textInput":return e=t.data,e===dc&&fc?null:e;default:return null}}function Sg(e,t){if(tr)return e==="compositionend"||!Ws&&Cf(e,t)?(e=bf(),si=Fs=ln=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ef&&t.locale!=="ko"?null:t.data;default:return null}}var bg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bg[e.type]:t==="textarea"}function Tf(e,t,n,r){of(r),t=Ii(t,"onChange"),0<t.length&&(n=new Us("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var no=null,go=null;function Eg(e){Bf(e,0)}function nl(e){var t=or(e);if(Zd(t))return e}function Cg(e,t){if(e==="change")return t}var If=!1;if(Wt){var Ll;if(Wt){var Bl="oninput"in document;if(!Bl){var hc=document.createElement("div");hc.setAttribute("oninput","return;"),Bl=typeof hc.oninput=="function"}Ll=Bl}else Ll=!1;If=Ll&&(!document.documentMode||9<document.documentMode)}function mc(){no&&(no.detachEvent("onpropertychange",Df),go=no=null)}function Df(e){if(e.propertyName==="value"&&nl(go)){var t=[];Tf(t,go,e,js(e)),uf(Eg,t)}}function $g(e,t,n){e==="focusin"?(mc(),no=t,go=n,no.attachEvent("onpropertychange",Df)):e==="focusout"&&mc()}function Tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(go)}function Ig(e,t){if(e==="click")return nl(t)}function Dg(e,t){if(e==="input"||e==="change")return nl(t)}function Ng(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:Ng;function vo(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!da.call(t,o)||!St(e[o],t[o]))return!1}return!0}function gc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vc(e,t){var n=gc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gc(n)}}function Nf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _f(){for(var e=window,t=ki();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ki(e.document)}return t}function Qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _g(e){var t=_f(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nf(n.ownerDocument.documentElement,n)){if(r!==null&&Qs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=vc(n,i);var l=vc(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pg=Wt&&"documentMode"in document&&11>=document.documentMode,nr=null,Da=null,ro=null,Na=!1;function yc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Na||nr==null||nr!==ki(r)||(r=nr,"selectionStart"in r&&Qs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&vo(ro,r)||(ro=r,r=Ii(Da,"onSelect"),0<r.length&&(t=new Us("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nr)))}function Wo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rr={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},zl={},Pf={};Wt&&(Pf=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function rl(e){if(zl[e])return zl[e];if(!rr[e])return e;var t=rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Pf)return zl[e]=t[n];return e}var Rf=rl("animationend"),Of=rl("animationiteration"),jf=rl("animationstart"),Mf=rl("transitionend"),Lf=new Map,wc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,t){Lf.set(e,t),Qn(t,[e])}for(var Fl=0;Fl<wc.length;Fl++){var Ul=wc[Fl],Rg=Ul.toLowerCase(),Og=Ul[0].toUpperCase()+Ul.slice(1);kn(Rg,"on"+Og)}kn(Rf,"onAnimationEnd");kn(Of,"onAnimationIteration");kn(jf,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(Mf,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zr));function xc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Rm(r,t,void 0,e),e.currentTarget=null}function Bf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;xc(o,a,c),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;xc(o,a,c),i=s}}}if(bi)throw e=Ca,bi=!1,Ca=null,e}function re(e,t){var n=t[ja];n===void 0&&(n=t[ja]=new Set);var r=e+"__bubble";n.has(r)||(zf(t,e,2,!1),n.add(r))}function Vl(e,t,n){var r=0;t&&(r|=4),zf(n,e,r,t)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function yo(e){if(!e[Qo]){e[Qo]=!0,Hd.forEach(function(n){n!=="selectionchange"&&(jg.has(n)||Vl(n,!1,e),Vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qo]||(t[Qo]=!0,Vl("selectionchange",!1,t))}}function zf(e,t,n,r){switch(Sf(t)){case 1:var o=Jm;break;case 4:o=Zm;break;default:o=zs}n=o.bind(null,t,n,e),o=void 0,!Ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Wl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=In(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}uf(function(){var c=i,h=js(n),p=[];e:{var m=Lf.get(e);if(m!==void 0){var A=Us,S=e;switch(e){case"keypress":if(ui(n)===0)break e;case"keydown":case"keyup":A=fg;break;case"focusin":S="focus",A=Ml;break;case"focusout":S="blur",A=Ml;break;case"beforeblur":case"afterblur":A=Ml;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=eg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=mg;break;case Rf:case Of:case jf:A=rg;break;case Mf:A=vg;break;case"scroll":A=Xm;break;case"wheel":A=wg;break;case"copy":case"cut":case"paste":A=ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=cc}var C=(t&4)!==0,I=!C&&e==="scroll",f=C?m!==null?m+"Capture":null:m;C=[];for(var u=c,d;u!==null;){d=u;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=fo(u,f),g!=null&&C.push(wo(u,g,d)))),I)break;u=u.return}0<C.length&&(m=new A(m,S,null,n,h),p.push({event:m,listeners:C}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",m&&n!==Sa&&(S=n.relatedTarget||n.fromElement)&&(In(S)||S[Qt]))break e;if((A||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,A?(S=n.relatedTarget||n.toElement,A=c,S=S?In(S):null,S!==null&&(I=Hn(S),S!==I||S.tag!==5&&S.tag!==6)&&(S=null)):(A=null,S=c),A!==S)){if(C=sc,g="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(C=cc,g="onPointerLeave",f="onPointerEnter",u="pointer"),I=A==null?m:or(A),d=S==null?m:or(S),m=new C(g,u+"leave",A,n,h),m.target=I,m.relatedTarget=d,g=null,In(h)===c&&(C=new C(f,u+"enter",S,n,h),C.target=d,C.relatedTarget=I,g=C),I=g,A&&S)t:{for(C=A,f=S,u=0,d=C;d;d=Jn(d))u++;for(d=0,g=f;g;g=Jn(g))d++;for(;0<u-d;)C=Jn(C),u--;for(;0<d-u;)f=Jn(f),d--;for(;u--;){if(C===f||f!==null&&C===f.alternate)break t;C=Jn(C),f=Jn(f)}C=null}else C=null;A!==null&&Ac(p,m,A,C,!1),S!==null&&I!==null&&Ac(p,I,S,C,!0)}}e:{if(m=c?or(c):window,A=m.nodeName&&m.nodeName.toLowerCase(),A==="select"||A==="input"&&m.type==="file")var y=Cg;else if(pc(m))if(If)y=Dg;else{y=Tg;var b=$g}else(A=m.nodeName)&&A.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(y=Ig);if(y&&(y=y(e,c))){Tf(p,y,n,h);break e}b&&b(e,m,c),e==="focusout"&&(b=m._wrapperState)&&b.controlled&&m.type==="number"&&ya(m,"number",m.value)}switch(b=c?or(c):window,e){case"focusin":(pc(b)||b.contentEditable==="true")&&(nr=b,Da=c,ro=null);break;case"focusout":ro=Da=nr=null;break;case"mousedown":Na=!0;break;case"contextmenu":case"mouseup":case"dragend":Na=!1,yc(p,n,h);break;case"selectionchange":if(Pg)break;case"keydown":case"keyup":yc(p,n,h)}var k;if(Ws)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else tr?Cf(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Ef&&n.locale!=="ko"&&(tr||D!=="onCompositionStart"?D==="onCompositionEnd"&&tr&&(k=bf()):(ln=h,Fs="value"in ln?ln.value:ln.textContent,tr=!0)),b=Ii(c,D),0<b.length&&(D=new uc(D,e,null,n,h),p.push({event:D,listeners:b}),k?D.data=k:(k=$f(n),k!==null&&(D.data=k)))),(k=Ag?kg(e,n):Sg(e,n))&&(c=Ii(c,"onBeforeInput"),0<c.length&&(h=new uc("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=k))}Bf(p,t)})}function wo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ii(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=fo(e,n),i!=null&&r.unshift(wo(e,i,o)),i=fo(e,t),i!=null&&r.push(wo(e,i,o))),e=e.return}return r}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ac(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=fo(n,i),s!=null&&l.unshift(wo(n,s,a))):o||(s=fo(n,i),s!=null&&l.push(wo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Mg=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function kc(e){return(typeof e=="string"?e:""+e).replace(Mg,`
`).replace(Lg,"")}function Ho(e,t,n){if(t=kc(t),kc(e)!==t&&n)throw Error(T(425))}function Di(){}var _a=null,Pa=null;function Ra(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Oa=typeof setTimeout=="function"?setTimeout:void 0,Bg=typeof clearTimeout=="function"?clearTimeout:void 0,Sc=typeof Promise=="function"?Promise:void 0,zg=typeof queueMicrotask=="function"?queueMicrotask:typeof Sc<"u"?function(e){return Sc.resolve(null).then(e).catch(Fg)}:Oa;function Fg(e){setTimeout(function(){throw e})}function Ql(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),mo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);mo(t)}function dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),It="__reactFiber$"+Rr,xo="__reactProps$"+Rr,Qt="__reactContainer$"+Rr,ja="__reactEvents$"+Rr,Ug="__reactListeners$"+Rr,Vg="__reactHandles$"+Rr;function In(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bc(e);e!==null;){if(n=e[It])return n;e=bc(e)}return t}e=n,n=e.parentNode}return null}function Po(e){return e=e[It]||e[Qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function ol(e){return e[xo]||null}var Ma=[],ir=-1;function Sn(e){return{current:e}}function ie(e){0>ir||(e.current=Ma[ir],Ma[ir]=null,ir--)}function te(e,t){ir++,Ma[ir]=e.current,e.current=t}var yn={},Be=Sn(yn),Ke=Sn(!1),Mn=yn;function Ar(e,t){var n=e.type.contextTypes;if(!n)return yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Je(e){return e=e.childContextTypes,e!=null}function Ni(){ie(Ke),ie(Be)}function Ec(e,t,n){if(Be.current!==yn)throw Error(T(168));te(Be,t),te(Ke,n)}function Ff(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(T(108,$m(e)||"Unknown",o));return fe({},n,r)}function _i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yn,Mn=Be.current,te(Be,e),te(Ke,Ke.current),!0}function Cc(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=Ff(e,t,Mn),r.__reactInternalMemoizedMergedChildContext=e,ie(Ke),ie(Be),te(Be,e)):ie(Ke),te(Ke,n)}var zt=null,il=!1,Hl=!1;function Uf(e){zt===null?zt=[e]:zt.push(e)}function Wg(e){il=!0,Uf(e)}function bn(){if(!Hl&&zt!==null){Hl=!0;var e=0,t=q;try{var n=zt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,il=!1}catch(o){throw zt!==null&&(zt=zt.slice(e+1)),pf(Ms,bn),o}finally{q=t,Hl=!1}}return null}var lr=[],ar=0,Pi=null,Ri=0,st=[],ut=0,Ln=null,Ft=1,Ut="";function $n(e,t){lr[ar++]=Ri,lr[ar++]=Pi,Pi=e,Ri=t}function Vf(e,t,n){st[ut++]=Ft,st[ut++]=Ut,st[ut++]=Ln,Ln=e;var r=Ft;e=Ut;var o=32-xt(r)-1;r&=~(1<<o),n+=1;var i=32-xt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ft=1<<32-xt(t)+o|n<<o|r,Ut=i+e}else Ft=1<<i|n<<o|r,Ut=e}function Hs(e){e.return!==null&&($n(e,1),Vf(e,1,0))}function Ys(e){for(;e===Pi;)Pi=lr[--ar],lr[ar]=null,Ri=lr[--ar],lr[ar]=null;for(;e===Ln;)Ln=st[--ut],st[ut]=null,Ut=st[--ut],st[ut]=null,Ft=st[--ut],st[ut]=null}var nt=null,tt=null,se=!1,wt=null;function Wf(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $c(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nt=e,tt=dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nt=e,tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ln!==null?{id:Ft,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nt=e,tt=null,!0):!1;default:return!1}}function La(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ba(e){if(se){var t=tt;if(t){var n=t;if(!$c(e,t)){if(La(e))throw Error(T(418));t=dn(n.nextSibling);var r=nt;t&&$c(e,t)?Wf(r,n):(e.flags=e.flags&-4097|2,se=!1,nt=e)}}else{if(La(e))throw Error(T(418));e.flags=e.flags&-4097|2,se=!1,nt=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nt=e}function Yo(e){if(e!==nt)return!1;if(!se)return Tc(e),se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ra(e.type,e.memoizedProps)),t&&(t=tt)){if(La(e))throw Qf(),Error(T(418));for(;t;)Wf(e,t),t=dn(t.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tt=dn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tt=null}}else tt=nt?dn(e.stateNode.nextSibling):null;return!0}function Qf(){for(var e=tt;e;)e=dn(e.nextSibling)}function kr(){tt=nt=null,se=!1}function Gs(e){wt===null?wt=[e]:wt.push(e)}var Qg=Gt.ReactCurrentBatchConfig;function vt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Oi=Sn(null),ji=null,sr=null,Ks=null;function Js(){Ks=sr=ji=null}function Zs(e){var t=Oi.current;ie(Oi),e._currentValue=t}function za(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yr(e,t){ji=e,Ks=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function ft(e){var t=e._currentValue;if(Ks!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(ji===null)throw Error(T(308));sr=e,ji.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var Dn=null;function Xs(e){Dn===null?Dn=[e]:Dn.push(e)}function Hf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Xs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Ht(e,r)}function Ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function qs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ht(e,n)}return o=r.interleaved,o===null?(t.next=t,Xs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ht(e,n)}function ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ls(e,n)}}function Ic(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Mi(e,t,n,r){var o=e.updateQueue;nn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?i=c:l.next=c,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,h=c=s=null,a=i;do{var m=a.lane,A=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:A,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,C=a;switch(m=t,A=n,C.tag){case 1:if(S=C.payload,typeof S=="function"){p=S.call(A,p,m);break e}p=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=C.payload,m=typeof S=="function"?S.call(A,p,m):S,m==null)break e;p=fe({},p,m);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else A={eventTime:A,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=A,s=p):h=h.next=A,l|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(h===null&&(s=p),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);zn|=l,e.lanes=l,e.memoizedState=p}}function Dc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(T(191,o));o.call(r)}}}var Gf=new Qd.Component().refs;function Fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ll={isMounted:function(e){return(e=e._reactInternals)?Hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),o=hn(e),i=Vt(r,o);i.payload=t,n!=null&&(i.callback=n),t=fn(e,i,o),t!==null&&(At(t,e,o,r),ci(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),o=hn(e),i=Vt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=fn(e,i,o),t!==null&&(At(t,e,o,r),ci(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=hn(e),o=Vt(n,r);o.tag=2,t!=null&&(o.callback=t),t=fn(e,o,r),t!==null&&(At(t,e,r,n),ci(t,e,r))}};function Nc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!vo(n,r)||!vo(o,i):!0}function Kf(e,t,n){var r=!1,o=yn,i=t.contextType;return typeof i=="object"&&i!==null?i=ft(i):(o=Je(t)?Mn:Be.current,r=t.contextTypes,i=(r=r!=null)?Ar(e,o):yn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ll,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function _c(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ll.enqueueReplaceState(t,t.state,null)}function Ua(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Gf,qs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ft(i):(i=Je(t)?Mn:Be.current,o.context=Ar(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Fa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ll.enqueueReplaceState(o,o.state,null),Mi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Gf&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function Go(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pc(e){var t=e._init;return t(e._payload)}function Jf(e){function t(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function n(f,u){if(!e)return null;for(;u!==null;)t(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=mn(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,u,d,g){return u===null||u.tag!==6?(u=ql(d,f.mode,g),u.return=f,u):(u=o(u,d),u.return=f,u)}function s(f,u,d,g){var y=d.type;return y===er?h(f,u,d.props.children,g,d.key):u!==null&&(u.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===tn&&Pc(y)===u.type)?(g=o(u,d.props),g.ref=Vr(f,u,d),g.return=f,g):(g=gi(d.type,d.key,d.props,null,f.mode,g),g.ref=Vr(f,u,d),g.return=f,g)}function c(f,u,d,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=ea(d,f.mode,g),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function h(f,u,d,g,y){return u===null||u.tag!==7?(u=On(d,f.mode,g,y),u.return=f,u):(u=o(u,d),u.return=f,u)}function p(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ql(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Mo:return d=gi(u.type,u.key,u.props,null,f.mode,d),d.ref=Vr(f,null,u),d.return=f,d;case qn:return u=ea(u,f.mode,d),u.return=f,u;case tn:var g=u._init;return p(f,g(u._payload),d)}if(Kr(u)||Lr(u))return u=On(u,f.mode,d,null),u.return=f,u;Go(f,u)}return null}function m(f,u,d,g){var y=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return y!==null?null:a(f,u,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Mo:return d.key===y?s(f,u,d,g):null;case qn:return d.key===y?c(f,u,d,g):null;case tn:return y=d._init,m(f,u,y(d._payload),g)}if(Kr(d)||Lr(d))return y!==null?null:h(f,u,d,g,null);Go(f,d)}return null}function A(f,u,d,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,a(u,f,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Mo:return f=f.get(g.key===null?d:g.key)||null,s(u,f,g,y);case qn:return f=f.get(g.key===null?d:g.key)||null,c(u,f,g,y);case tn:var b=g._init;return A(f,u,d,b(g._payload),y)}if(Kr(g)||Lr(g))return f=f.get(d)||null,h(u,f,g,y,null);Go(u,g)}return null}function S(f,u,d,g){for(var y=null,b=null,k=u,D=u=0,M=null;k!==null&&D<d.length;D++){k.index>D?(M=k,k=null):M=k.sibling;var j=m(f,k,d[D],g);if(j===null){k===null&&(k=M);break}e&&k&&j.alternate===null&&t(f,k),u=i(j,u,D),b===null?y=j:b.sibling=j,b=j,k=M}if(D===d.length)return n(f,k),se&&$n(f,D),y;if(k===null){for(;D<d.length;D++)k=p(f,d[D],g),k!==null&&(u=i(k,u,D),b===null?y=k:b.sibling=k,b=k);return se&&$n(f,D),y}for(k=r(f,k);D<d.length;D++)M=A(k,f,D,d[D],g),M!==null&&(e&&M.alternate!==null&&k.delete(M.key===null?D:M.key),u=i(M,u,D),b===null?y=M:b.sibling=M,b=M);return e&&k.forEach(function(G){return t(f,G)}),se&&$n(f,D),y}function C(f,u,d,g){var y=Lr(d);if(typeof y!="function")throw Error(T(150));if(d=y.call(d),d==null)throw Error(T(151));for(var b=y=null,k=u,D=u=0,M=null,j=d.next();k!==null&&!j.done;D++,j=d.next()){k.index>D?(M=k,k=null):M=k.sibling;var G=m(f,k,j.value,g);if(G===null){k===null&&(k=M);break}e&&k&&G.alternate===null&&t(f,k),u=i(G,u,D),b===null?y=G:b.sibling=G,b=G,k=M}if(j.done)return n(f,k),se&&$n(f,D),y;if(k===null){for(;!j.done;D++,j=d.next())j=p(f,j.value,g),j!==null&&(u=i(j,u,D),b===null?y=j:b.sibling=j,b=j);return se&&$n(f,D),y}for(k=r(f,k);!j.done;D++,j=d.next())j=A(k,f,D,j.value,g),j!==null&&(e&&j.alternate!==null&&k.delete(j.key===null?D:j.key),u=i(j,u,D),b===null?y=j:b.sibling=j,b=j);return e&&k.forEach(function(Z){return t(f,Z)}),se&&$n(f,D),y}function I(f,u,d,g){if(typeof d=="object"&&d!==null&&d.type===er&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Mo:e:{for(var y=d.key,b=u;b!==null;){if(b.key===y){if(y=d.type,y===er){if(b.tag===7){n(f,b.sibling),u=o(b,d.props.children),u.return=f,f=u;break e}}else if(b.elementType===y||typeof y=="object"&&y!==null&&y.$$typeof===tn&&Pc(y)===b.type){n(f,b.sibling),u=o(b,d.props),u.ref=Vr(f,b,d),u.return=f,f=u;break e}n(f,b);break}else t(f,b);b=b.sibling}d.type===er?(u=On(d.props.children,f.mode,g,d.key),u.return=f,f=u):(g=gi(d.type,d.key,d.props,null,f.mode,g),g.ref=Vr(f,u,d),g.return=f,f=g)}return l(f);case qn:e:{for(b=d.key;u!==null;){if(u.key===b)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{n(f,u);break}else t(f,u);u=u.sibling}u=ea(d,f.mode,g),u.return=f,f=u}return l(f);case tn:return b=d._init,I(f,u,b(d._payload),g)}if(Kr(d))return S(f,u,d,g);if(Lr(d))return C(f,u,d,g);Go(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(f,u.sibling),u=o(u,d),u.return=f,f=u):(n(f,u),u=ql(d,f.mode,g),u.return=f,f=u),l(f)):n(f,u)}return I}var Sr=Jf(!0),Zf=Jf(!1),Ro={},Nt=Sn(Ro),Ao=Sn(Ro),ko=Sn(Ro);function Nn(e){if(e===Ro)throw Error(T(174));return e}function eu(e,t){switch(te(ko,t),te(Ao,e),te(Nt,Ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xa(t,e)}ie(Nt),te(Nt,t)}function br(){ie(Nt),ie(Ao),ie(ko)}function Xf(e){Nn(ko.current);var t=Nn(Nt.current),n=xa(t,e.type);t!==n&&(te(Ao,e),te(Nt,n))}function tu(e){Ao.current===e&&(ie(Nt),ie(Ao))}var ce=Sn(0);function Li(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function nu(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var di=Gt.ReactCurrentDispatcher,Gl=Gt.ReactCurrentBatchConfig,Bn=0,de=null,be=null,Ce=null,Bi=!1,oo=!1,So=0,Hg=0;function Oe(){throw Error(T(321))}function ru(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function ou(e,t,n,r,o,i){if(Bn=i,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,di.current=e===null||e.memoizedState===null?Jg:Zg,e=n(r,o),oo){i=0;do{if(oo=!1,So=0,25<=i)throw Error(T(301));i+=1,Ce=be=null,t.updateQueue=null,di.current=Xg,e=n(r,o)}while(oo)}if(di.current=zi,t=be!==null&&be.next!==null,Bn=0,Ce=be=de=null,Bi=!1,t)throw Error(T(300));return e}function iu(){var e=So!==0;return So=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?de.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function pt(){if(be===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=Ce===null?de.memoizedState:Ce.next;if(t!==null)Ce=t,be=e;else{if(e===null)throw Error(T(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},Ce===null?de.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function bo(e,t){return typeof t=="function"?t(e):t}function Kl(e){var t=pt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=be,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,c=i;do{var h=c.lane;if((Bn&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,de.lanes|=h,zn|=h}c=c.next}while(c!==null&&c!==i);s===null?l=r:s.next=a,St(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,de.lanes|=i,zn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Jl(e){var t=pt(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);St(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function qf(){}function ep(e,t){var n=de,r=pt(),o=t(),i=!St(r.memoizedState,o);if(i&&(r.memoizedState=o,Ge=!0),r=r.queue,lu(rp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,Eo(9,np.bind(null,n,r,o,t),void 0,null),Ie===null)throw Error(T(349));Bn&30||tp(n,t,o)}return o}function tp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function np(e,t,n,r){t.value=n,t.getSnapshot=r,op(t)&&ip(e)}function rp(e,t,n){return n(function(){op(t)&&ip(e)})}function op(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function ip(e){var t=Ht(e,1);t!==null&&At(t,e,1,-1)}function Rc(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bo,lastRenderedState:e},t.queue=e,e=e.dispatch=Kg.bind(null,de,e),[t.memoizedState,e]}function Eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lp(){return pt().memoizedState}function fi(e,t,n,r){var o=$t();de.flags|=e,o.memoizedState=Eo(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var o=pt();r=r===void 0?null:r;var i=void 0;if(be!==null){var l=be.memoizedState;if(i=l.destroy,r!==null&&ru(r,l.deps)){o.memoizedState=Eo(t,n,i,r);return}}de.flags|=e,o.memoizedState=Eo(1|t,n,i,r)}function Oc(e,t){return fi(8390656,8,e,t)}function lu(e,t){return al(2048,8,e,t)}function ap(e,t){return al(4,2,e,t)}function sp(e,t){return al(4,4,e,t)}function up(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cp(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,up.bind(null,t,e),n)}function au(){}function dp(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ru(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fp(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ru(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pp(e,t,n){return Bn&21?(St(n,t)||(n=gf(),de.lanes|=n,zn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function Yg(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),t()}finally{q=n,Gl.transition=r}}function hp(){return pt().memoizedState}function Gg(e,t,n){var r=hn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},mp(e))gp(t,n);else if(n=Hf(e,t,n,r),n!==null){var o=Ue();At(n,e,r,o),vp(n,t,r)}}function Kg(e,t,n){var r=hn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(mp(e))gp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,St(a,l)){var s=t.interleaved;s===null?(o.next=o,Xs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Hf(e,t,o,r),n!==null&&(o=Ue(),At(n,e,r,o),vp(n,t,r))}}function mp(e){var t=e.alternate;return e===de||t!==null&&t===de}function gp(e,t){oo=Bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ls(e,n)}}var zi={readContext:ft,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},Jg={readContext:ft,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:ft,useEffect:Oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fi(4194308,4,up.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fi(4194308,4,e,t)},useInsertionEffect:function(e,t){return fi(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gg.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:Rc,useDebugValue:au,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=Rc(!1),t=e[0];return e=Yg.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,o=$t();if(se){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),Ie===null)throw Error(T(349));Bn&30||tp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Oc(rp.bind(null,r,i,e),[e]),r.flags|=2048,Eo(9,np.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=$t(),t=Ie.identifierPrefix;if(se){var n=Ut,r=Ft;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=So++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zg={readContext:ft,useCallback:dp,useContext:ft,useEffect:lu,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:sp,useMemo:fp,useReducer:Kl,useRef:lp,useState:function(){return Kl(bo)},useDebugValue:au,useDeferredValue:function(e){var t=pt();return pp(t,be.memoizedState,e)},useTransition:function(){var e=Kl(bo)[0],t=pt().memoizedState;return[e,t]},useMutableSource:qf,useSyncExternalStore:ep,useId:hp,unstable_isNewReconciler:!1},Xg={readContext:ft,useCallback:dp,useContext:ft,useEffect:lu,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:sp,useMemo:fp,useReducer:Jl,useRef:lp,useState:function(){return Jl(bo)},useDebugValue:au,useDeferredValue:function(e){var t=pt();return be===null?t.memoizedState=e:pp(t,be.memoizedState,e)},useTransition:function(){var e=Jl(bo)[0],t=pt().memoizedState;return[e,t]},useMutableSource:qf,useSyncExternalStore:ep,useId:hp,unstable_isNewReconciler:!1};function Er(e,t){try{var n="",r=t;do n+=Cm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Va(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qg=typeof WeakMap=="function"?WeakMap:Map;function yp(e,t,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ui||(Ui=!0,qa=r),Va(e,t)},n}function wp(e,t,n){n=Vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Va(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Va(e,t),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function jc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=p0.bind(null,e,t,n),t.then(e,e))}function Mc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vt(-1,1),t.tag=2,fn(n,t,1))),n.lanes|=1),e)}var e0=Gt.ReactCurrentOwner,Ge=!1;function Fe(e,t,n,r){t.child=e===null?Zf(t,null,n,r):Sr(t,e.child,n,r)}function Bc(e,t,n,r,o){n=n.render;var i=t.ref;return yr(t,o),r=ou(e,t,n,r,i,o),n=iu(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(se&&n&&Hs(t),t.flags|=1,Fe(e,t,r,o),t.child)}function zc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!mu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,xp(e,t,i,r,o)):(e=gi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:vo,n(l,r)&&e.ref===t.ref)return Yt(e,t,o)}return t.flags|=1,e=mn(i,r),e.ref=t.ref,e.return=t,t.child=e}function xp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(vo(i,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Yt(e,t,o)}return Wa(e,t,n,r,o)}function Ap(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(cr,et),et|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(cr,et),et|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(cr,et),et|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,te(cr,et),et|=r;return Fe(e,t,o,n),t.child}function kp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wa(e,t,n,r,o){var i=Je(n)?Mn:Be.current;return i=Ar(t,i),yr(t,o),n=ou(e,t,n,r,i,o),r=iu(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(se&&r&&Hs(t),t.flags|=1,Fe(e,t,n,o),t.child)}function Fc(e,t,n,r,o){if(Je(n)){var i=!0;_i(t)}else i=!1;if(yr(t,o),t.stateNode===null)pi(e,t),Kf(t,n,r),Ua(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=ft(c):(c=Je(n)?Mn:Be.current,c=Ar(t,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&_c(t,l,r,c),nn=!1;var m=t.memoizedState;l.state=m,Mi(t,r,l,o),s=t.memoizedState,a!==r||m!==s||Ke.current||nn?(typeof h=="function"&&(Fa(t,n,h,r),s=t.memoizedState),(a=nn||Nc(t,n,a,r,m,s,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Yf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:vt(t.type,a),l.props=c,p=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=ft(s):(s=Je(n)?Mn:Be.current,s=Ar(t,s));var A=n.getDerivedStateFromProps;(h=typeof A=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||m!==s)&&_c(t,l,r,s),nn=!1,m=t.memoizedState,l.state=m,Mi(t,r,l,o);var S=t.memoizedState;a!==p||m!==S||Ke.current||nn?(typeof A=="function"&&(Fa(t,n,A,r),S=t.memoizedState),(c=nn||Nc(t,n,c,r,m,S,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Qa(e,t,n,r,i,o)}function Qa(e,t,n,r,o,i){kp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Cc(t,n,!1),Yt(e,t,i);r=t.stateNode,e0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Sr(t,e.child,null,i),t.child=Sr(t,null,a,i)):Fe(e,t,a,i),t.memoizedState=r.state,o&&Cc(t,n,!0),t.child}function Sp(e){var t=e.stateNode;t.pendingContext?Ec(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ec(e,t.context,!1),eu(e,t.containerInfo)}function Uc(e,t,n,r,o){return kr(),Gs(o),t.flags|=256,Fe(e,t,n,r),t.child}var Ha={dehydrated:null,treeContext:null,retryLane:0};function Ya(e){return{baseLanes:e,cachePool:null,transitions:null}}function bp(e,t,n){var r=t.pendingProps,o=ce.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(ce,o&1),e===null)return Ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=cl(l,r,0,null),e=On(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ya(n),t.memoizedState=Ha,e):su(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return t0(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=mn(a,i):(i=On(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ya(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ha,r}return i=e.child,e=i.sibling,r=mn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function su(e,t){return t=cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ko(e,t,n,r){return r!==null&&Gs(r),Sr(t,e.child,null,n),e=su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function t0(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Zl(Error(T(422))),Ko(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=cl({mode:"visible",children:r.children},o,0,null),i=On(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Sr(t,e.child,null,l),t.child.memoizedState=Ya(l),t.memoizedState=Ha,i);if(!(t.mode&1))return Ko(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(T(419)),r=Zl(i,r,void 0),Ko(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ge||a){if(r=Ie,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ht(e,o),At(r,e,o,-1))}return hu(),r=Zl(Error(T(421))),Ko(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=h0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,tt=dn(o.nextSibling),nt=t,se=!0,wt=null,e!==null&&(st[ut++]=Ft,st[ut++]=Ut,st[ut++]=Ln,Ft=e.id,Ut=e.overflow,Ln=t),t=su(t,r.children),t.flags|=4096,t)}function Vc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),za(e.return,t,n)}function Xl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ep(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Fe(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vc(e,n,t);else if(e.tag===19)Vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ce,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Li(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Xl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Li(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Xl(t,!0,n,null,i);break;case"together":Xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function n0(e,t,n){switch(t.tag){case 3:Sp(t),kr();break;case 5:Xf(t);break;case 1:Je(t.type)&&_i(t);break;case 4:eu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;te(Oi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?bp(e,t,n):(te(ce,ce.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);te(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ep(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,Ap(e,t,n)}return Yt(e,t,n)}var Cp,Ga,$p,Tp;Cp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ga=function(){};$p=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Nn(Nt.current);var i=null;switch(n){case"input":o=ga(e,o),r=ga(e,r),i=[];break;case"select":o=fe({},o,{value:void 0}),r=fe({},r,{value:void 0}),i=[];break;case"textarea":o=wa(e,o),r=wa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Di)}Aa(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(uo.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(uo.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&re("scroll",e),i||a===s||(i=[])):(i=i||[]).push(c,s))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Tp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Wr(e,t){if(!se)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function r0(e,t,n){var r=t.pendingProps;switch(Ys(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return Je(t.type)&&Ni(),je(t),null;case 3:return r=t.stateNode,br(),ie(Ke),ie(Be),nu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wt!==null&&(ns(wt),wt=null))),Ga(e,t),je(t),null;case 5:tu(t);var o=Nn(ko.current);if(n=t.type,e!==null&&t.stateNode!=null)$p(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return je(t),null}if(e=Nn(Nt.current),Yo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[It]=t,r[xo]=i,e=(t.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(o=0;o<Zr.length;o++)re(Zr[o],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Xu(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":ec(r,i),re("invalid",r)}Aa(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ho(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ho(r.textContent,a,e),o=["children",""+a]):uo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&re("scroll",r)}switch(n){case"input":Lo(r),qu(r,i,!0);break;case"textarea":Lo(r),tc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Di)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ef(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[It]=t,e[xo]=r,Cp(e,t,!1,!1),t.stateNode=e;e:{switch(l=ka(n,r),n){case"dialog":re("cancel",e),re("close",e),o=r;break;case"iframe":case"object":case"embed":re("load",e),o=r;break;case"video":case"audio":for(o=0;o<Zr.length;o++)re(Zr[o],e);o=r;break;case"source":re("error",e),o=r;break;case"img":case"image":case"link":re("error",e),re("load",e),o=r;break;case"details":re("toggle",e),o=r;break;case"input":Xu(e,r),o=ga(e,r),re("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=fe({},r,{value:void 0}),re("invalid",e);break;case"textarea":ec(e,r),o=wa(e,r),re("invalid",e);break;default:o=r}Aa(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?rf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&tf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&co(e,s):typeof s=="number"&&co(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(uo.hasOwnProperty(i)?s!=null&&i==="onScroll"&&re("scroll",e):s!=null&&_s(e,i,s,l))}switch(n){case"input":Lo(e),qu(e,r,!1);break;case"textarea":Lo(e),tc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?hr(e,!!r.multiple,i,!1):r.defaultValue!=null&&hr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Di)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)Tp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Nn(ko.current),Nn(Nt.current),Yo(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(i=r.nodeValue!==n)&&(e=nt,e!==null))switch(e.tag){case 3:Ho(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ho(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return je(t),null;case 13:if(ie(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(se&&tt!==null&&t.mode&1&&!(t.flags&128))Qf(),kr(),t.flags|=98560,i=!1;else if(i=Yo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[It]=t}else kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;je(t),i=!1}else wt!==null&&(ns(wt),wt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?Ee===0&&(Ee=3):hu())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return br(),Ga(e,t),e===null&&yo(t.stateNode.containerInfo),je(t),null;case 10:return Zs(t.type._context),je(t),null;case 17:return Je(t.type)&&Ni(),je(t),null;case 19:if(ie(ce),i=t.memoizedState,i===null)return je(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Wr(i,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Li(e),l!==null){for(t.flags|=128,Wr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ce,ce.current&1|2),t.child}e=e.sibling}i.tail!==null&&ye()>Cr&&(t.flags|=128,r=!0,Wr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Li(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!se)return je(t),null}else 2*ye()-i.renderingStartTime>Cr&&n!==1073741824&&(t.flags|=128,r=!0,Wr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ye(),t.sibling=null,n=ce.current,te(ce,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return pu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?et&1073741824&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function o0(e,t){switch(Ys(t),t.tag){case 1:return Je(t.type)&&Ni(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return br(),ie(Ke),ie(Be),nu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return tu(t),null;case 13:if(ie(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ce),null;case 4:return br(),null;case 10:return Zs(t.type._context),null;case 22:case 23:return pu(),null;case 24:return null;default:return null}}var Jo=!1,Le=!1,i0=typeof WeakSet=="function"?WeakSet:Set,R=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function Ka(e,t,n){try{n()}catch(r){he(e,t,r)}}var Wc=!1;function l0(e,t){if(_a=$i,e=_f(),Qs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,h=0,p=e,m=null;t:for(;;){for(var A;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(A=p.firstChild)!==null;)m=p,p=A;for(;;){if(p===e)break t;if(m===n&&++c===o&&(a=l),m===i&&++h===r&&(s=l),(A=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=A}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pa={focusedElem:e,selectionRange:n},$i=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var C=S.memoizedProps,I=S.memoizedState,f=t.stateNode,u=f.getSnapshotBeforeUpdate(t.elementType===t.type?C:vt(t.type,C),I);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(g){he(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return S=Wc,Wc=!1,S}function io(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ka(t,n,i)}o=o.next}while(o!==r)}}function sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ja(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ip(e){var t=e.alternate;t!==null&&(e.alternate=null,Ip(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[xo],delete t[ja],delete t[Ug],delete t[Vg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dp(e){return e.tag===5||e.tag===3||e.tag===4}function Qc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(Za(e,t,n),e=e.sibling;e!==null;)Za(e,t,n),e=e.sibling}function Xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Xa(e,t,n),e=e.sibling;e!==null;)Xa(e,t,n),e=e.sibling}var Ne=null,yt=!1;function Jt(e,t,n){for(n=n.child;n!==null;)Np(e,t,n),n=n.sibling}function Np(e,t,n){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(el,n)}catch{}switch(n.tag){case 5:Le||ur(n,t);case 6:var r=Ne,o=yt;Ne=null,Jt(e,t,n),Ne=r,yt=o,Ne!==null&&(yt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(yt?(e=Ne,n=n.stateNode,e.nodeType===8?Ql(e.parentNode,n):e.nodeType===1&&Ql(e,n),mo(e)):Ql(Ne,n.stateNode));break;case 4:r=Ne,o=yt,Ne=n.stateNode.containerInfo,yt=!0,Jt(e,t,n),Ne=r,yt=o;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Ka(n,t,l),o=o.next}while(o!==r)}Jt(e,t,n);break;case 1:if(!Le&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,t,a)}Jt(e,t,n);break;case 21:Jt(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Jt(e,t,n),Le=r):Jt(e,t,n);break;default:Jt(e,t,n)}}function Hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new i0),t.forEach(function(r){var o=m0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,yt=!1;break e;case 3:Ne=a.stateNode.containerInfo,yt=!0;break e;case 4:Ne=a.stateNode.containerInfo,yt=!0;break e}a=a.return}if(Ne===null)throw Error(T(160));Np(i,l,o),Ne=null,yt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){he(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_p(t,e),t=t.sibling}function _p(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mt(t,e),Ct(e),r&4){try{io(3,e,e.return),sl(3,e)}catch(C){he(e,e.return,C)}try{io(5,e,e.return)}catch(C){he(e,e.return,C)}}break;case 1:mt(t,e),Ct(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(mt(t,e),Ct(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var o=e.stateNode;try{co(o,"")}catch(C){he(e,e.return,C)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Xd(o,i),ka(a,l);var c=ka(a,i);for(l=0;l<s.length;l+=2){var h=s[l],p=s[l+1];h==="style"?rf(o,p):h==="dangerouslySetInnerHTML"?tf(o,p):h==="children"?co(o,p):_s(o,h,p,c)}switch(a){case"input":va(o,i);break;case"textarea":qd(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?hr(o,!!i.multiple,A,!1):m!==!!i.multiple&&(i.defaultValue!=null?hr(o,!!i.multiple,i.defaultValue,!0):hr(o,!!i.multiple,i.multiple?[]:"",!1))}o[xo]=i}catch(C){he(e,e.return,C)}}break;case 6:if(mt(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(T(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(C){he(e,e.return,C)}}break;case 3:if(mt(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{mo(t.containerInfo)}catch(C){he(e,e.return,C)}break;case 4:mt(t,e),Ct(e);break;case 13:mt(t,e),Ct(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(du=ye())),r&4&&Hc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(c=Le)||h,mt(t,e),Le=c):mt(t,e),Ct(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(R=e,h=e.child;h!==null;){for(p=R=h;R!==null;){switch(m=R,A=m.child,m.tag){case 0:case 11:case 14:case 15:io(4,m,m.return);break;case 1:ur(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(C){he(r,n,C)}}break;case 5:ur(m,m.return);break;case 22:if(m.memoizedState!==null){Gc(p);continue}}A!==null?(A.return=m,R=A):Gc(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=nf("display",l))}catch(C){he(e,e.return,C)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(C){he(e,e.return,C)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:mt(t,e),Ct(e),r&4&&Hc(e);break;case 21:break;default:mt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dp(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(co(o,""),r.flags&=-33);var i=Qc(e);Xa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Qc(e);Za(e,a,l);break;default:throw Error(T(161))}}catch(s){he(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function a0(e,t,n){R=e,Pp(e)}function Pp(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Jo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Le;a=Jo;var c=Le;if(Jo=l,(Le=s)&&!c)for(R=o;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?Kc(o):s!==null?(s.return=l,R=s):Kc(o);for(;i!==null;)R=i,Pp(i),i=i.sibling;R=o,Jo=a,Le=c}Yc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):Yc(e)}}function Yc(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:vt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Dc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Dc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&mo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Le||t.flags&512&&Ja(t)}catch(m){he(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Gc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Kc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sl(4,t)}catch(s){he(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){he(t,o,s)}}var i=t.return;try{Ja(t)}catch(s){he(t,i,s)}break;case 5:var l=t.return;try{Ja(t)}catch(s){he(t,l,s)}}}catch(s){he(t,t.return,s)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var s0=Math.ceil,Fi=Gt.ReactCurrentDispatcher,uu=Gt.ReactCurrentOwner,dt=Gt.ReactCurrentBatchConfig,J=0,Ie=null,ke=null,_e=0,et=0,cr=Sn(0),Ee=0,Co=null,zn=0,ul=0,cu=0,lo=null,Ye=null,du=0,Cr=1/0,Lt=null,Ui=!1,qa=null,pn=null,Zo=!1,an=null,Vi=0,ao=0,es=null,hi=-1,mi=0;function Ue(){return J&6?ye():hi!==-1?hi:hi=ye()}function hn(e){return e.mode&1?J&2&&_e!==0?_e&-_e:Qg.transition!==null?(mi===0&&(mi=gf()),mi):(e=q,e!==0||(e=window.event,e=e===void 0?16:Sf(e.type)),e):1}function At(e,t,n,r){if(50<ao)throw ao=0,es=null,Error(T(185));No(e,n,r),(!(J&2)||e!==Ie)&&(e===Ie&&(!(J&2)&&(ul|=n),Ee===4&&on(e,_e)),Ze(e,r),n===1&&J===0&&!(t.mode&1)&&(Cr=ye()+500,il&&bn()))}function Ze(e,t){var n=e.callbackNode;Qm(e,t);var r=Ci(e,e===Ie?_e:0);if(r===0)n!==null&&oc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&oc(n),t===1)e.tag===0?Wg(Jc.bind(null,e)):Uf(Jc.bind(null,e)),zg(function(){!(J&6)&&bn()}),n=null;else{switch(vf(r)){case 1:n=Ms;break;case 4:n=hf;break;case 16:n=Ei;break;case 536870912:n=mf;break;default:n=Ei}n=Fp(n,Rp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Rp(e,t){if(hi=-1,mi=0,J&6)throw Error(T(327));var n=e.callbackNode;if(wr()&&e.callbackNode!==n)return null;var r=Ci(e,e===Ie?_e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Wi(e,r);else{t=r;var o=J;J|=2;var i=jp();(Ie!==e||_e!==t)&&(Lt=null,Cr=ye()+500,Rn(e,t));do try{d0();break}catch(a){Op(e,a)}while(!0);Js(),Fi.current=i,J=o,ke!==null?t=0:(Ie=null,_e=0,t=Ee)}if(t!==0){if(t===2&&(o=$a(e),o!==0&&(r=o,t=ts(e,o))),t===1)throw n=Co,Rn(e,0),on(e,r),Ze(e,ye()),n;if(t===6)on(e,r);else{if(o=e.current.alternate,!(r&30)&&!u0(o)&&(t=Wi(e,r),t===2&&(i=$a(e),i!==0&&(r=i,t=ts(e,i))),t===1))throw n=Co,Rn(e,0),on(e,r),Ze(e,ye()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:Tn(e,Ye,Lt);break;case 3:if(on(e,r),(r&130023424)===r&&(t=du+500-ye(),10<t)){if(Ci(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Oa(Tn.bind(null,e,Ye,Lt),t);break}Tn(e,Ye,Lt);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-xt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*s0(r/1960))-r,10<r){e.timeoutHandle=Oa(Tn.bind(null,e,Ye,Lt),r);break}Tn(e,Ye,Lt);break;case 5:Tn(e,Ye,Lt);break;default:throw Error(T(329))}}}return Ze(e,ye()),e.callbackNode===n?Rp.bind(null,e):null}function ts(e,t){var n=lo;return e.current.memoizedState.isDehydrated&&(Rn(e,t).flags|=256),e=Wi(e,t),e!==2&&(t=Ye,Ye=n,t!==null&&ns(t)),e}function ns(e){Ye===null?Ye=e:Ye.push.apply(Ye,e)}function u0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!St(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~cu,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function Jc(e){if(J&6)throw Error(T(327));wr();var t=Ci(e,0);if(!(t&1))return Ze(e,ye()),null;var n=Wi(e,t);if(e.tag!==0&&n===2){var r=$a(e);r!==0&&(t=r,n=ts(e,r))}if(n===1)throw n=Co,Rn(e,0),on(e,t),Ze(e,ye()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Tn(e,Ye,Lt),Ze(e,ye()),null}function fu(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Cr=ye()+500,il&&bn())}}function Fn(e){an!==null&&an.tag===0&&!(J&6)&&wr();var t=J;J|=1;var n=dt.transition,r=q;try{if(dt.transition=null,q=1,e)return e()}finally{q=r,dt.transition=n,J=t,!(J&6)&&bn()}}function pu(){et=cr.current,ie(cr)}function Rn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bg(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Ys(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ni();break;case 3:br(),ie(Ke),ie(Be),nu();break;case 5:tu(r);break;case 4:br();break;case 13:ie(ce);break;case 19:ie(ce);break;case 10:Zs(r.type._context);break;case 22:case 23:pu()}n=n.return}if(Ie=e,ke=e=mn(e.current,null),_e=et=t,Ee=0,Co=null,cu=ul=zn=0,Ye=lo=null,Dn!==null){for(t=0;t<Dn.length;t++)if(n=Dn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Dn=null}return e}function Op(e,t){do{var n=ke;try{if(Js(),di.current=zi,Bi){for(var r=de.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Bi=!1}if(Bn=0,Ce=be=de=null,oo=!1,So=0,uu.current=null,n===null||n.return===null){Ee=1,Co=t,ke=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=_e,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var A=Mc(l);if(A!==null){A.flags&=-257,Lc(A,l,a,i,t),A.mode&1&&jc(i,c,t),t=A,s=c;var S=t.updateQueue;if(S===null){var C=new Set;C.add(s),t.updateQueue=C}else S.add(s);break e}else{if(!(t&1)){jc(i,c,t),hu();break e}s=Error(T(426))}}else if(se&&a.mode&1){var I=Mc(l);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Lc(I,l,a,i,t),Gs(Er(s,a));break e}}i=s=Er(s,a),Ee!==4&&(Ee=2),lo===null?lo=[i]:lo.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=yp(i,s,t);Ic(i,f);break e;case 1:a=s;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(pn===null||!pn.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=wp(i,a,t);Ic(i,g);break e}}i=i.return}while(i!==null)}Lp(n)}catch(y){t=y,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function jp(){var e=Fi.current;return Fi.current=zi,e===null?zi:e}function hu(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Ie===null||!(zn&268435455)&&!(ul&268435455)||on(Ie,_e)}function Wi(e,t){var n=J;J|=2;var r=jp();(Ie!==e||_e!==t)&&(Lt=null,Rn(e,t));do try{c0();break}catch(o){Op(e,o)}while(!0);if(Js(),J=n,Fi.current=r,ke!==null)throw Error(T(261));return Ie=null,_e=0,Ee}function c0(){for(;ke!==null;)Mp(ke)}function d0(){for(;ke!==null&&!jm();)Mp(ke)}function Mp(e){var t=zp(e.alternate,e,et);e.memoizedProps=e.pendingProps,t===null?Lp(e):ke=t,uu.current=null}function Lp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=o0(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,ke=null;return}}else if(n=r0(n,t,et),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ee===0&&(Ee=5)}function Tn(e,t,n){var r=q,o=dt.transition;try{dt.transition=null,q=1,f0(e,t,n,r)}finally{dt.transition=o,q=r}return null}function f0(e,t,n,r){do wr();while(an!==null);if(J&6)throw Error(T(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Hm(e,i),e===Ie&&(ke=Ie=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zo||(Zo=!0,Fp(Ei,function(){return wr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=dt.transition,dt.transition=null;var l=q;q=1;var a=J;J|=4,uu.current=null,l0(e,n),_p(n,e),_g(Pa),$i=!!_a,Pa=_a=null,e.current=n,a0(n),Mm(),J=a,q=l,dt.transition=i}else e.current=n;if(Zo&&(Zo=!1,an=e,Vi=o),i=e.pendingLanes,i===0&&(pn=null),zm(n.stateNode),Ze(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ui)throw Ui=!1,e=qa,qa=null,e;return Vi&1&&e.tag!==0&&wr(),i=e.pendingLanes,i&1?e===es?ao++:(ao=0,es=e):ao=0,bn(),null}function wr(){if(an!==null){var e=vf(Vi),t=dt.transition,n=q;try{if(dt.transition=null,q=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,Vi=0,J&6)throw Error(T(331));var o=J;for(J|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(R=c;R!==null;){var h=R;switch(h.tag){case 0:case 11:case 15:io(8,h,i)}var p=h.child;if(p!==null)p.return=h,R=p;else for(;R!==null;){h=R;var m=h.sibling,A=h.return;if(Ip(h),h===c){R=null;break}if(m!==null){m.return=A,R=m;break}R=A}}}var S=i.alternate;if(S!==null){var C=S.child;if(C!==null){S.child=null;do{var I=C.sibling;C.sibling=null,C=I}while(C!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:io(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,R=f;break e}R=i.return}}var u=e.current;for(R=u;R!==null;){l=R;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,R=d;else e:for(l=u;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:sl(9,a)}}catch(y){he(a,a.return,y)}if(a===l){R=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,R=g;break e}R=a.return}}if(J=o,bn(),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(el,e)}catch{}r=!0}return r}finally{q=n,dt.transition=t}}return!1}function Zc(e,t,n){t=Er(n,t),t=yp(e,t,1),e=fn(e,t,1),t=Ue(),e!==null&&(No(e,1,t),Ze(e,t))}function he(e,t,n){if(e.tag===3)Zc(e,e,n);else for(;t!==null;){if(t.tag===3){Zc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){e=Er(n,e),e=wp(t,e,1),t=fn(t,e,1),e=Ue(),t!==null&&(No(t,1,e),Ze(t,e));break}}t=t.return}}function p0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(_e&n)===n&&(Ee===4||Ee===3&&(_e&130023424)===_e&&500>ye()-du?Rn(e,0):cu|=n),Ze(e,t)}function Bp(e,t){t===0&&(e.mode&1?(t=Fo,Fo<<=1,!(Fo&130023424)&&(Fo=4194304)):t=1);var n=Ue();e=Ht(e,t),e!==null&&(No(e,t,n),Ze(e,n))}function h0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bp(e,n)}function m0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),Bp(e,n)}var zp;zp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,n0(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,se&&t.flags&1048576&&Vf(t,Ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;pi(e,t),e=t.pendingProps;var o=Ar(t,Be.current);yr(t,n),o=ou(null,t,r,e,o,n);var i=iu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(i=!0,_i(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,qs(t),o.updater=ll,t.stateNode=o,o._reactInternals=t,Ua(t,r,e,n),t=Qa(null,t,r,!0,i,n)):(t.tag=0,se&&i&&Hs(t),Fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(pi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=v0(r),e=vt(r,e),o){case 0:t=Wa(null,t,r,e,n);break e;case 1:t=Fc(null,t,r,e,n);break e;case 11:t=Bc(null,t,r,e,n);break e;case 14:t=zc(null,t,r,vt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Wa(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Fc(e,t,r,o,n);case 3:e:{if(Sp(t),e===null)throw Error(T(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Yf(e,t),Mi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Er(Error(T(423)),t),t=Uc(e,t,r,n,o);break e}else if(r!==o){o=Er(Error(T(424)),t),t=Uc(e,t,r,n,o);break e}else for(tt=dn(t.stateNode.containerInfo.firstChild),nt=t,se=!0,wt=null,n=Zf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kr(),r===o){t=Yt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return Xf(t),e===null&&Ba(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ra(r,o)?l=null:i!==null&&Ra(r,i)&&(t.flags|=32),kp(e,t),Fe(e,t,l,n),t.child;case 6:return e===null&&Ba(t),null;case 13:return bp(e,t,n);case 4:return eu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sr(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),Bc(e,t,r,o,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,te(Oi,r._currentValue),r._currentValue=l,i!==null)if(St(i.value,l)){if(i.children===o.children&&!Ke.current){t=Yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Vt(-1,n&-n),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),za(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(T(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),za(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,yr(t,n),o=ft(o),r=r(o),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,o=vt(r,t.pendingProps),o=vt(r.type,o),zc(e,t,r,o,n);case 15:return xp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),pi(e,t),t.tag=1,Je(r)?(e=!0,_i(t)):e=!1,yr(t,n),Kf(t,r,o),Ua(t,r,o,n),Qa(null,t,r,!0,e,n);case 19:return Ep(e,t,n);case 22:return Ap(e,t,n)}throw Error(T(156,t.tag))};function Fp(e,t){return pf(e,t)}function g0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new g0(e,t,n,r)}function mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function v0(e){if(typeof e=="function")return mu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Rs)return 11;if(e===Os)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function gi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")mu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case er:return On(n.children,o,i,t);case Ps:l=8,o|=8;break;case fa:return e=ct(12,n,t,o|2),e.elementType=fa,e.lanes=i,e;case pa:return e=ct(13,n,t,o),e.elementType=pa,e.lanes=i,e;case ha:return e=ct(19,n,t,o),e.elementType=ha,e.lanes=i,e;case Kd:return cl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yd:l=10;break e;case Gd:l=9;break e;case Rs:l=11;break e;case Os:l=14;break e;case tn:l=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=ct(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function On(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function cl(e,t,n,r){return e=ct(22,e,r,t),e.elementType=Kd,e.lanes=n,e.stateNode={isHidden:!1},e}function ql(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function ea(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function y0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rl(0),this.expirationTimes=Rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function gu(e,t,n,r,o,i,l,a,s){return e=new y0(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ct(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qs(i),e}function w0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Up(e){if(!e)return yn;e=e._reactInternals;e:{if(Hn(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Je(n))return Ff(e,n,t)}return t}function Vp(e,t,n,r,o,i,l,a,s){return e=gu(n,r,!0,e,o,i,l,a,s),e.context=Up(null),n=e.current,r=Ue(),o=hn(n),i=Vt(r,o),i.callback=t??null,fn(n,i,o),e.current.lanes=o,No(e,o,r),Ze(e,r),e}function dl(e,t,n,r){var o=t.current,i=Ue(),l=hn(o);return n=Up(n),t.context===null?t.context=n:t.pendingContext=n,t=Vt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=fn(o,t,l),e!==null&&(At(e,o,l,i),ci(e,o,l)),l}function Qi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vu(e,t){Xc(e,t),(e=e.alternate)&&Xc(e,t)}function x0(){return null}var Wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function yu(e){this._internalRoot=e}fl.prototype.render=yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));dl(e,t,null,null)};fl.prototype.unmount=yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){dl(null,e,null,null)}),t[Qt]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=xf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&kf(e)}};function wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qc(){}function A0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Qi(l);i.call(c)}}var l=Vp(t,r,e,0,null,!1,!1,"",qc);return e._reactRootContainer=l,e[Qt]=l.current,yo(e.nodeType===8?e.parentNode:e),Fn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Qi(s);a.call(c)}}var s=gu(e,0,!1,null,null,!1,!1,"",qc);return e._reactRootContainer=s,e[Qt]=s.current,yo(e.nodeType===8?e.parentNode:e),Fn(function(){dl(t,s,n,r)}),s}function hl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Qi(l);a.call(s)}}dl(t,l,e,o)}else l=A0(n,t,e,o,r);return Qi(l)}yf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Jr(t.pendingLanes);n!==0&&(Ls(t,n|1),Ze(t,ye()),!(J&6)&&(Cr=ye()+500,bn()))}break;case 13:Fn(function(){var r=Ht(e,1);if(r!==null){var o=Ue();At(r,e,1,o)}}),vu(e,1)}};Bs=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var n=Ue();At(t,e,134217728,n)}vu(e,134217728)}};wf=function(e){if(e.tag===13){var t=hn(e),n=Ht(e,t);if(n!==null){var r=Ue();At(n,e,t,r)}vu(e,t)}};xf=function(){return q};Af=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};ba=function(e,t,n){switch(t){case"input":if(va(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ol(r);if(!o)throw Error(T(90));Zd(r),va(r,o)}}}break;case"textarea":qd(e,n);break;case"select":t=n.value,t!=null&&hr(e,!!n.multiple,t,!1)}};af=fu;sf=Fn;var k0={usingClientEntryPoint:!1,Events:[Po,or,ol,of,lf,fu]},Qr={findFiberByHostInstance:In,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},S0={bundleType:Qr.bundleType,version:Qr.version,rendererPackageName:Qr.rendererPackageName,rendererConfig:Qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=df(e),e===null?null:e.stateNode},findFiberByHostInstance:Qr.findFiberByHostInstance||x0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{el=Xo.inject(S0),Dt=Xo}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k0;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(t))throw Error(T(200));return w0(e,t,null,n)};it.createRoot=function(e,t){if(!wu(e))throw Error(T(299));var n=!1,r="",o=Wp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=gu(e,1,!1,null,null,n,!1,r,o),e[Qt]=t.current,yo(e.nodeType===8?e.parentNode:e),new yu(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=df(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return Fn(e)};it.hydrate=function(e,t,n){if(!pl(t))throw Error(T(200));return hl(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!wu(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Wp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Vp(t,null,e,1,n??null,o,!1,i,l),e[Qt]=t.current,yo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new fl(t)};it.render=function(e,t,n){if(!pl(t))throw Error(T(200));return hl(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!pl(e))throw Error(T(40));return e._reactRootContainer?(Fn(function(){hl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qt]=null})}),!0):!1};it.unstable_batchedUpdates=fu;it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!pl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return hl(e,t,n,!1,r)};it.version="18.2.0-next-9e3b772b8-20220608";function Qp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qp)}catch(e){console.error(e)}}Qp(),Ud.exports=it;var ml=Ud.exports,ed=ml;ca.createRoot=ed.createRoot,ca.hydrateRoot=ed.hydrateRoot;var Te=function(){return Te=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Te.apply(this,arguments)};function $o(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var oe="-ms-",so="-moz-",X="-webkit-",Hp="comm",gl="rule",xu="decl",b0="@import",Yp="@keyframes",E0="@layer",C0=Math.abs,Au=String.fromCharCode,rs=Object.assign;function $0(e,t){return $e(e,0)^45?(((t<<2^$e(e,0))<<2^$e(e,1))<<2^$e(e,2))<<2^$e(e,3):0}function Gp(e){return e.trim()}function Bt(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function vi(e,t){return e.indexOf(t)}function $e(e,t){return e.charCodeAt(t)|0}function $r(e,t,n){return e.slice(t,n)}function Tt(e){return e.length}function Kp(e){return e.length}function Xr(e,t){return t.push(e),e}function T0(e,t){return e.map(t).join("")}function td(e,t){return e.filter(function(n){return!Bt(n,t)})}var vl=1,Tr=1,Jp=0,ht=0,Ae=0,Or="";function yl(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:vl,column:Tr,length:l,return:"",siblings:a}}function en(e,t){return rs(yl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Zn(e){for(;e.root;)e=en(e.root,{children:[e]});Xr(e,e.siblings)}function I0(){return Ae}function D0(){return Ae=ht>0?$e(Or,--ht):0,Tr--,Ae===10&&(Tr=1,vl--),Ae}function kt(){return Ae=ht<Jp?$e(Or,ht++):0,Tr++,Ae===10&&(Tr=1,vl++),Ae}function jn(){return $e(Or,ht)}function yi(){return ht}function wl(e,t){return $r(Or,e,t)}function os(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function N0(e){return vl=Tr=1,Jp=Tt(Or=e),ht=0,[]}function _0(e){return Or="",e}function ta(e){return Gp(wl(ht-1,is(e===91?e+2:e===40?e+1:e)))}function P0(e){for(;(Ae=jn())&&Ae<33;)kt();return os(e)>2||os(Ae)>3?"":" "}function R0(e,t){for(;--t&&kt()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return wl(e,yi()+(t<6&&jn()==32&&kt()==32))}function is(e){for(;kt();)switch(Ae){case e:return ht;case 34:case 39:e!==34&&e!==39&&is(Ae);break;case 40:e===41&&is(e);break;case 92:kt();break}return ht}function O0(e,t){for(;kt()&&e+Ae!==57;)if(e+Ae===84&&jn()===47)break;return"/*"+wl(t,ht-1)+"*"+Au(e===47?e:kt())}function j0(e){for(;!os(jn());)kt();return wl(e,ht)}function M0(e){return _0(wi("",null,null,null,[""],e=N0(e),0,[0],e))}function wi(e,t,n,r,o,i,l,a,s){for(var c=0,h=0,p=l,m=0,A=0,S=0,C=1,I=1,f=1,u=0,d="",g=o,y=i,b=r,k=d;I;)switch(S=u,u=kt()){case 40:if(S!=108&&$e(k,p-1)==58){vi(k+=W(ta(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:k+=ta(u);break;case 9:case 10:case 13:case 32:k+=P0(S);break;case 92:k+=R0(yi()-1,7);continue;case 47:switch(jn()){case 42:case 47:Xr(L0(O0(kt(),yi()),t,n,s),s);break;default:k+="/"}break;case 123*C:a[c++]=Tt(k)*f;case 125*C:case 59:case 0:switch(u){case 0:case 125:I=0;case 59+h:f==-1&&(k=W(k,/\f/g,"")),A>0&&Tt(k)-p&&Xr(A>32?rd(k+";",r,n,p-1,s):rd(W(k," ","")+";",r,n,p-2,s),s);break;case 59:k+=";";default:if(Xr(b=nd(k,t,n,c,h,o,a,d,g=[],y=[],p,i),i),u===123)if(h===0)wi(k,t,b,b,g,i,p,a,y);else switch(m===99&&$e(k,3)===110?100:m){case 100:case 108:case 109:case 115:wi(e,b,b,r&&Xr(nd(e,b,b,0,0,o,a,d,o,g=[],p,y),y),o,y,p,a,r?g:y);break;default:wi(k,b,b,b,[""],y,0,a,y)}}c=h=A=0,C=f=1,d=k="",p=l;break;case 58:p=1+Tt(k),A=S;default:if(C<1){if(u==123)--C;else if(u==125&&C++==0&&D0()==125)continue}switch(k+=Au(u),u*C){case 38:f=h>0?1:(k+="\f",-1);break;case 44:a[c++]=(Tt(k)-1)*f,f=1;break;case 64:jn()===45&&(k+=ta(kt())),m=jn(),h=p=Tt(d=k+=j0(yi())),u++;break;case 45:S===45&&Tt(k)==2&&(C=0)}}return i}function nd(e,t,n,r,o,i,l,a,s,c,h,p){for(var m=o-1,A=o===0?i:[""],S=Kp(A),C=0,I=0,f=0;C<r;++C)for(var u=0,d=$r(e,m+1,m=C0(I=l[C])),g=e;u<S;++u)(g=Gp(I>0?A[u]+" "+d:W(d,/&\f/g,A[u])))&&(s[f++]=g);return yl(e,t,n,o===0?gl:a,s,c,h,p)}function L0(e,t,n,r){return yl(e,t,n,Hp,Au(I0()),$r(e,2,-2),0,r)}function rd(e,t,n,r,o){return yl(e,t,n,xu,$r(e,0,r),$r(e,r+1,-1),r,o)}function Zp(e,t,n){switch($0(e,t)){case 5103:return X+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+e+e;case 4789:return so+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return X+e+so+e+oe+e+e;case 5936:switch($e(e,t+11)){case 114:return X+e+oe+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return X+e+oe+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return X+e+oe+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return X+e+oe+e+e;case 6165:return X+e+oe+"flex-"+e+e;case 5187:return X+e+W(e,/(\w+).+(:[^]+)/,X+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return X+e+oe+"flex-item-"+W(e,/flex-|-self/g,"")+(Bt(e,/flex-|baseline/)?"":oe+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return X+e+oe+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return X+e+oe+W(e,"shrink","negative")+e;case 5292:return X+e+oe+W(e,"basis","preferred-size")+e;case 6060:return X+"box-"+W(e,"-grow","")+X+e+oe+W(e,"grow","positive")+e;case 4554:return X+W(e,/([^-])(transform)/g,"$1"+X+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+e+e;case 4200:if(!Bt(e,/flex-|baseline/))return oe+"grid-column-align"+$r(e,t)+e;break;case 2592:case 3360:return oe+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Bt(r.props,/grid-\w+-end/)})?~vi(e+(n=n[t].value),"span")?e:oe+W(e,"-start","")+e+oe+"grid-row-span:"+(~vi(n,"span")?Bt(n,/\d+/):+Bt(n,/\d+/)-+Bt(e,/\d+/))+";":oe+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Bt(r.props,/grid-\w+-start/)})?e:oe+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,X+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tt(e)-1-t>6)switch($e(e,t+1)){case 109:if($e(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+so+($e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~vi(e,"stretch")?Zp(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,c){return oe+o+":"+i+c+(l?oe+o+"-span:"+(a?s:+s-+i)+c:"")+e});case 4949:if($e(e,t+6)===121)return W(e,":",":"+X)+e;break;case 6444:switch($e(e,$e(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+X+($e(e,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+oe+"$2box$3")+e;case 100:return W(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function Hi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function B0(e,t,n,r){switch(e.type){case E0:if(e.children.length)break;case b0:case xu:return e.return=e.return||e.value;case Hp:return"";case Yp:return e.return=e.value+"{"+Hi(e.children,r)+"}";case gl:if(!Tt(e.value=e.props.join(",")))return""}return Tt(n=Hi(e.children,r))?e.return=e.value+"{"+n+"}":""}function z0(e){var t=Kp(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function F0(e){return function(t){t.root||(t=t.return)&&e(t)}}function U0(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case xu:e.return=Zp(e.value,e.length,n);return;case Yp:return Hi([en(e,{value:W(e.value,"@","@"+X)})],r);case gl:if(e.length)return T0(n=e.props,function(o){switch(Bt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zn(en(e,{props:[W(o,/:(read-\w+)/,":"+so+"$1")]})),Zn(en(e,{props:[o]})),rs(e,{props:td(n,r)});break;case"::placeholder":Zn(en(e,{props:[W(o,/:(plac\w+)/,":"+X+"input-$1")]})),Zn(en(e,{props:[W(o,/:(plac\w+)/,":"+so+"$1")]})),Zn(en(e,{props:[W(o,/:(plac\w+)/,oe+"input-$1")]})),Zn(en(e,{props:[o]})),rs(e,{props:td(n,r)});break}return""})}}var V0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qe={},Ir=typeof process<"u"&&qe!==void 0&&(qe.REACT_APP_SC_ATTR||qe.SC_ATTR)||"data-styled",ku=typeof window<"u"&&"HTMLElement"in window,W0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&qe.REACT_APP_SC_DISABLE_SPEEDY!==""?qe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&qe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&qe!==void 0&&qe.SC_DISABLE_SPEEDY!==void 0&&qe.SC_DISABLE_SPEEDY!==""&&qe.SC_DISABLE_SPEEDY!=="false"&&qe.SC_DISABLE_SPEEDY),Q0={},xl=Object.freeze([]),Dr=Object.freeze({});function Xp(e,t,n){return n===void 0&&(n=Dr),e.theme!==n.theme&&e.theme||t||n.theme}var qp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),H0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Y0=/(^-|-$)/g;function od(e){return e.replace(H0,"-").replace(Y0,"")}var G0=/(a)(d)/gi,id=function(e){return String.fromCharCode(e+(e>25?39:97))};function ls(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=id(t%52)+n;return(id(t%52)+n).replace(G0,"$1-$2")}var na,dr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},eh=function(e){return dr(5381,e)};function th(e){return ls(eh(e)>>>0)}function K0(e){return e.displayName||e.name||"Component"}function ra(e){return typeof e=="string"&&!0}var nh=typeof Symbol=="function"&&Symbol.for,rh=nh?Symbol.for("react.memo"):60115,J0=nh?Symbol.for("react.forward_ref"):60112,Z0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},X0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},oh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},q0=((na={})[J0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},na[rh]=oh,na);function ld(e){return("type"in(t=e)&&t.type.$$typeof)===rh?oh:"$$typeof"in e?q0[e.$$typeof]:Z0;var t}var ev=Object.defineProperty,tv=Object.getOwnPropertyNames,ad=Object.getOwnPropertySymbols,nv=Object.getOwnPropertyDescriptor,rv=Object.getPrototypeOf,sd=Object.prototype;function ih(e,t,n){if(typeof t!="string"){if(sd){var r=rv(t);r&&r!==sd&&ih(e,r,n)}var o=tv(t);ad&&(o=o.concat(ad(t)));for(var i=ld(e),l=ld(t),a=0;a<o.length;++a){var s=o[a];if(!(s in X0||n&&n[s]||l&&s in l||i&&s in i)){var c=nv(t,s);try{ev(e,s,c)}catch{}}}}return e}function Un(e){return typeof e=="function"}function Su(e){return typeof e=="object"&&"styledComponentId"in e}function _n(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function as(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function To(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ss(e,t,n){if(n===void 0&&(n=!1),!n&&!To(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ss(e[r],t[r]);else if(To(t))for(var r in t)e[r]=ss(e[r],t[r]);return e}function bu(e,t){Object.defineProperty(e,"toString",{value:t})}function Vn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ov=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Vn(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),xi=new Map,Yi=new Map,Ai=1,qo=function(e){if(xi.has(e))return xi.get(e);for(;Yi.has(Ai);)Ai++;var t=Ai++;return xi.set(e,t),Yi.set(t,e),t},iv=function(e,t){Ai=t+1,xi.set(e,t),Yi.set(t,e)},lv="style[".concat(Ir,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),av=new RegExp("^".concat(Ir,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sv=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},uv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(av);if(s){var c=0|parseInt(s[1],10),h=s[2];c!==0&&(iv(h,c),sv(e,h,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(a)}}};function cv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var lh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Ir,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Ir,"active"),r.setAttribute("data-styled-version","6.1.1");var l=cv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},dv=function(){function e(t){this.element=lh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw Vn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),fv=function(){function e(t){this.element=lh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),pv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ud=ku,hv={isServer:!ku,useCSSOMInjection:!W0},Gi=function(){function e(t,n,r){t===void 0&&(t=Dr),n===void 0&&(n={});var o=this;this.options=Te(Te({},hv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ku&&ud&&(ud=!1,function(i){for(var l=document.querySelectorAll(lv),a=0,s=l.length;a<s;a++){var c=l[a];c&&c.getAttribute(Ir)!=="active"&&(uv(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),bu(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",c=function(p){var m=function(f){return Yi.get(f)}(p);if(m===void 0)return"continue";var A=i.names.get(m),S=l.getGroup(p);if(A===void 0||S.length===0)return"continue";var C="".concat(Ir,".g").concat(p,'[id="').concat(m,'"]'),I="";A!==void 0&&A.forEach(function(f){f.length>0&&(I+="".concat(f,","))}),s+="".concat(S).concat(C,'{content:"').concat(I,'"}').concat(`/*!sc*/
`)},h=0;h<a;h++)c(h);return s}(o)})}return e.registerId=function(t){return qo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Te(Te({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new pv(o):r?new dv(o):new fv(o)}(this.options),new ov(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(qo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(qo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(qo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),mv=/&/g,gv=/^\s*\/\/.*$/gm;function ah(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ah(n.children,t)),n})}function vv(e){var t,n,r,o=e===void 0?Dr:e,i=o.options,l=i===void 0?Dr:i,a=o.plugins,s=a===void 0?xl:a,c=function(m,A,S){return S===n||S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):m},h=s.slice();h.push(function(m){m.type===gl&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(mv,n).replace(r,c))}),l.prefix&&h.push(U0),h.push(B0);var p=function(m,A,S,C){A===void 0&&(A=""),S===void 0&&(S=""),C===void 0&&(C="&"),t=C,n=A,r=new RegExp("\\".concat(n,"\\b"),"g");var I=m.replace(gv,""),f=M0(S||A?"".concat(S," ").concat(A," { ").concat(I," }"):I);l.namespace&&(f=ah(f,l.namespace));var u=[];return Hi(f,z0(h.concat(F0(function(d){return u.push(d)})))),u};return p.hash=s.length?s.reduce(function(m,A){return A.name||Vn(15),dr(m,A.name)},5381).toString():"",p}var yv=new Gi,us=vv(),sh=w.createContext({shouldForwardProp:void 0,styleSheet:yv,stylis:us});sh.Consumer;w.createContext(void 0);function cs(){return v.useContext(sh)}var wv=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=us);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,bu(this,function(){throw Vn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=us),this.name+t.hash},e}(),xv=function(e){return e>="A"&&e<="Z"};function cd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;xv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var uh=function(e){return e==null||e===!1||e===""},ch=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!uh(i)&&(Array.isArray(i)&&i.isCss||Un(i)?r.push("".concat(cd(o),":"),i,";"):To(i)?r.push.apply(r,$o($o(["".concat(o," {")],ch(i),!1),["}"],!1)):r.push("".concat(cd(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in V0||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function gn(e,t,n,r){if(uh(e))return[];if(Su(e))return[".".concat(e.styledComponentId)];if(Un(e)){if(!Un(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return gn(o,t,n,r)}var i;return e instanceof wv?n?(e.inject(n,r),[e.getName(r)]):[e]:To(e)?ch(e):Array.isArray(e)?Array.prototype.concat.apply(xl,e.map(function(l){return gn(l,t,n,r)})):[e.toString()]}function dh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Un(n)&&!Su(n))return!1}return!0}var Av=eh("6.1.1"),kv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&dh(t),this.componentId=n,this.baseHash=dr(Av,n),this.baseStyle=r,Gi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=_n(o,this.staticRulesId);else{var i=as(gn(this.rules,t,n,r)),l=ls(dr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=_n(o,l),this.staticRulesId=l}else{for(var s=dr(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var p=this.rules[h];if(typeof p=="string")c+=p;else if(p){var m=as(gn(p,t,n,r));s=dr(s,m+h),c+=m}}if(c){var A=ls(s>>>0);n.hasNameForId(this.componentId,A)||n.insertRules(this.componentId,A,r(c,".".concat(A),void 0,this.componentId)),o=_n(o,A)}}return o},e}(),Io=w.createContext(void 0);Io.Consumer;function Sv(e){var t=w.useContext(Io),n=v.useMemo(function(){return function(r,o){if(!r)throw Vn(14);if(Un(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw Vn(8);return o?Te(Te({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?w.createElement(Io.Provider,{value:n},e.children):null}var oa={};function bv(e,t,n){var r=Su(e),o=e,i=!ra(e),l=t.attrs,a=l===void 0?xl:l,s=t.componentId,c=s===void 0?function(g,y){var b=typeof g!="string"?"sc":od(g);oa[b]=(oa[b]||0)+1;var k="".concat(b,"-").concat(th("6.1.1"+b+oa[b]));return y?"".concat(y,"-").concat(k):k}(t.displayName,t.parentComponentId):s,h=t.displayName,p=h===void 0?function(g){return ra(g)?"styled.".concat(g):"Styled(".concat(K0(g),")")}(e):h,m=t.displayName&&t.componentId?"".concat(od(t.displayName),"-").concat(t.componentId):t.componentId||c,A=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,S=t.shouldForwardProp;if(r&&o.shouldForwardProp){var C=o.shouldForwardProp;if(t.shouldForwardProp){var I=t.shouldForwardProp;S=function(g,y){return C(g,y)&&I(g,y)}}else S=C}var f=new kv(n,m,r?o.componentStyle:void 0);function u(g,y){return function(b,k,D){var M=b.attrs,j=b.componentStyle,G=b.defaultProps,Z=b.foldedComponentIds,le=b.styledComponentId,ne=b.target,ee=w.useContext(Io),we=cs(),pe=b.shouldForwardProp||we.shouldForwardProp,$=function(B,H,z){for(var V,xe=Te(Te({},H),{className:void 0,theme:z}),N=0;N<B.length;N+=1){var F=Un(V=B[N])?V(xe):V;for(var U in F)xe[U]=U==="className"?_n(xe[U],F[U]):U==="style"?Te(Te({},xe[U]),F[U]):F[U]}return H.className&&(xe.className=_n(xe.className,H.className)),xe}(M,k,Xp(k,ee,G)||Dr),P=$.as||ne,O={};for(var Q in $)$[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"||(Q==="forwardedAs"?O.as=$.forwardedAs:pe&&!pe(Q,P)||(O[Q]=$[Q]));var K=function(B,H){var z=cs(),V=B.generateAndInjectStyles(H,z.styleSheet,z.stylis);return V}(j,$),L=_n(Z,le);return K&&(L+=" "+K),$.className&&(L+=" "+$.className),O[ra(P)&&!qp.has(P)?"class":"className"]=L,O.ref=D,v.createElement(P,O)}(d,g,y)}u.displayName=p;var d=w.forwardRef(u);return d.attrs=A,d.componentStyle=f,d.displayName=p,d.shouldForwardProp=S,d.foldedComponentIds=r?_n(o.foldedComponentIds,o.styledComponentId):"",d.styledComponentId=m,d.target=r?o.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(y){for(var b=[],k=1;k<arguments.length;k++)b[k-1]=arguments[k];for(var D=0,M=b;D<M.length;D++)ss(y,M[D],!0);return y}({},o.defaultProps,g):g}}),bu(d,function(){return".".concat(d.styledComponentId)}),i&&ih(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function dd(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var fd=function(e){return Object.assign(e,{isCss:!0})};function _(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Un(e)||To(e)){var r=e;return fd(gn(dd(xl,$o([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?gn(o):fd(gn(dd(o,t)))}function ds(e,t,n){if(n===void 0&&(n=Dr),!t)throw Vn(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,_.apply(void 0,$o([o],i,!1)))};return r.attrs=function(o){return ds(e,t,Te(Te({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ds(e,t,Te(Te({},n),o))},r}var fh=function(e){return ds(bv,e)},x=fh;qp.forEach(function(e){x[e]=fh(e)});var Ev=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=dh(t),Gi.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(as(gn(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Gi.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Cv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=_.apply(void 0,$o([e],t,!1)),o="sc-global-".concat(th(JSON.stringify(r))),i=new Ev(r,o),l=function(s){var c=cs(),h=w.useContext(Io),p=w.useRef(c.styleSheet.allocateGSInstance(o)).current;return c.styleSheet.server&&a(p,s,c.styleSheet,h,c.stylis),w.useLayoutEffect(function(){if(!c.styleSheet.server)return a(p,s,c.styleSheet,h,c.stylis),function(){return i.removeStyles(p,c.styleSheet)}},[p,s,c.styleSheet,h,c.stylis]),null};function a(s,c,h,p,m){if(i.isStatic)i.renderStyles(s,Q0,h,m);else{var A=Te(Te({},c),{theme:Xp(c,p,l.defaultProps)});i.renderStyles(s,A,h,m)}}return w.memo(l)}const $v={white:"#ffffff",darkgray:"#101010",windows95teal:"#008080",windows95gray:"#c0c0c0"},Tv={colors:$v};var Iv=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const Eu="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Cu="inset 2px 2px 3px rgba(0,0,0,0.2)",bt=()=>_`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Et=({background:e="material",color:t="materialText"}={})=>_`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:n})=>n[e]};
  color: ${({theme:n})=>n[t]};
`,Oo=({mainColor:e="black",secondaryColor:t="transparent",pixelSize:n=2})=>_`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${t};
  background-size: ${`${n*2}px ${n*2}px`};
  background-position: 0 0, ${`${n}px ${n}px`};
`,Wn=()=>_`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Xn={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Dv=({theme:e,topLeftInner:t,bottomRightInner:n,hasShadow:r=!1,hasInsetShadow:o=!1})=>[r?Eu:!1,o?Cu:!1,t!==null?`inset 1px 1px 0px 1px ${e[t]}`:!1,n!==null?`inset -1px -1px 0 1px ${e[n]}`:!1].filter(Boolean).join(", "),ge=({invert:e=!1,style:t="button"}={})=>{const n={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return _`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:r})=>r[Xn[t][n.topLeftOuter]]};
    border-top-color: ${({theme:r})=>r[Xn[t][n.topLeftOuter]]};
    border-right-color: ${({theme:r})=>r[Xn[t][n.bottomRightOuter]]};
    border-bottom-color: ${({theme:r})=>r[Xn[t][n.bottomRightOuter]]};
    box-shadow: ${({theme:r,shadow:o})=>Dv({theme:r,topLeftInner:Xn[t][n.topLeftInner],bottomRightInner:Xn[t][n.bottomRightInner],hasShadow:o})};
  `},Nr=()=>_`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,Nv=e=>Buffer.from(e).toString("base64"),_v=typeof btoa<"u"?btoa:Nv,ei=(e,t=0)=>{const n=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${t} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${_v(n)})`},$u=(e="default")=>_`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:t})=>Oo({mainColor:e==="flat"?t.flatLight:t.material,secondaryColor:e==="flat"?t.canvas:t.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Et()}
    ${e==="flat"?Wn():ge({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:t})=>t.material};
  }
  ::-webkit-scrollbar-button {
    ${Et()}
    ${e==="flat"?Wn():ge({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?ge({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:t})=>ei(t.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:t})=>ei(t.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:t})=>ei(t.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:t})=>ei(t.materialText,0)};
  }
`,Pv=x.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,Rv=v.forwardRef(({children:e,underline:t=!0,...n},r)=>w.createElement(Pv,{ref:r,underline:t,...n},e));Rv.displayName="Anchor";const Ov=x.header`
  ${ge()};
  ${Et()};

  position: ${e=>{var t;return(t=e.position)!==null&&t!==void 0?t:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,ph=v.forwardRef(({children:e,fixed:t=!0,position:n="fixed",...r},o)=>w.createElement(Ov,{fixed:t,position:t!==!1?n:void 0,ref:o,...r},e));ph.displayName="AppBar";const Yn=()=>{};function Pn(e,t,n){return n!==null&&e>n?n:t!==null&&e<t?t:e}function jv(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),r=n[0].split(".")[1];return(r?r.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function pd(e,t,n){const r=Math.round((e-n)/t)*t+n;return Number(r.toFixed(jv(t)))}function wn(e){return typeof e=="number"?`${e}px`:e}const Mv=x.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:t})=>!e&&`
    border-top: 2px solid ${t.borderDark};
    border-left: 2px solid ${t.borderDark};
    border-bottom: 2px solid ${t.borderLightest};
    border-right: 2px solid ${t.borderLightest};
    background: ${t.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Lv=x.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Bv=v.forwardRef(({alt:e="",children:t,noBorder:n=!1,size:r=35,square:o=!1,src:i,...l},a)=>w.createElement(Mv,{noBorder:n,ref:a,size:wn(r),square:o,src:i,...l},i?w.createElement(Lv,{src:i,alt:e}):t));Bv.displayName="Avatar";const Pe={sm:"28px",md:"36px",lg:"44px"},zv=_`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Pe[e]};
  width: ${({fullWidth:e,size:t="md",square:n})=>e?"100%":n?Pe[t]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:t})=>e&&!t&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,Al=x.button`
  ${({active:e,disabled:t,primary:n,theme:r,variant:o})=>o==="flat"?_`
          ${Wn()}
          ${n?`
          border: 2px solid ${r.checkmark};
            outline: 2px solid ${r.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${r.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!t&&Nr}
            outline-offset: -4px;
          }
        `:o==="menu"||o==="thin"?_`
          ${Et()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!t&&!e&&ge({style:"buttonThin"})}
          }
          &:active {
            ${!t&&ge({style:"buttonThinPressed"})}
          }
          ${e&&ge({style:"buttonThinPressed"})}
          ${t&&bt()}
        `:_`
          ${Et()};
          border: none;
          ${t&&bt()}
          ${e?Oo({mainColor:r.material,secondaryColor:r.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${n?_`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${r.borderDarkest};
                `:_`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${ge(e?{style:o==="raised"?"window":"button",invert:!0}:{style:o==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!t&&ge({style:o==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!t&&Nr}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${zv}
`,xn=v.forwardRef(({onClick:e,disabled:t=!1,children:n,type:r="button",fullWidth:o=!1,size:i="md",square:l=!1,active:a=!1,onTouchStart:s=Yn,primary:c=!1,variant:h="default",...p},m)=>w.createElement(Al,{active:a,disabled:t,$disabled:t,fullWidth:o,onClick:t?void 0:e,onTouchStart:s,primary:c,ref:m,size:i,square:l,type:r,variant:h,...p},n));xn.displayName="Button";function An({defaultValue:e,onChange:t,onChangePropName:n="onChange",readOnly:r,value:o,valuePropName:i="value"}){const l=o!==void 0,[a,s]=v.useState(e),c=v.useCallback(h=>{l||s(h)},[l]);if(l&&typeof t!="function"&&!r){const h=`Warning: You provided a \`${i}\` prop to a component without an \`${n}\` handler.${i==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${n}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${n}\` function that updates \`${i}\`.`}`;console.warn(h)}return[l?o:a,c]}const fs=x.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Pe[e.size]};
  width: ${e=>e.square?Pe[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Pe[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:t})=>!t&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&bt()}
`,hh=v.forwardRef(({size:e="lg",disabled:t,square:n,children:r,onClick:o,primary:i,...l},a)=>w.createElement(fs,{$disabled:t,size:e,square:n,onClick:t?void 0:o,primary:i,role:"menuitem",ref:a,"aria-disabled":t,...l},r));hh.displayName="MenuListItem";const mh=x.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${ge({style:"window"})}
  ${Et()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;mh.displayName="MenuList";const _t=20,Ki=x.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${_t}px;
  height: ${_t}px;
  opacity: 0;
  z-index: -1;
`,Tu=x.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&bt()}

  ${fs} & {
    margin: 0;
    height: 100%;
  }
  ${fs}:hover & {
    ${({$disabled:e,theme:t})=>!e&&_`
        color: ${t.materialTextInvert};
      `};
  }
`,Iu=x.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Ki}:focus ~ & {
    ${Nr}
  }
  ${Ki}:not(:disabled) ~ &:active {
    ${Nr}
  }
`,Pt=x.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${Cu};`}
  }
`,Fv=x.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${$u()}
`,gh=v.forwardRef(({children:e,shadow:t=!0,...n},r)=>w.createElement(Pt,{ref:r,shadow:t,...n},w.createElement(Fv,null,e)));gh.displayName="ScrollView";const vh=_`
  width: ${_t}px;
  height: ${_t}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Uv=x(Pt)`
  ${vh}
  width: ${_t}px;
  height: ${_t}px;
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
  &:before {
    box-shadow: none;
  }
`,Vv=x.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  ${vh}
  width: ${_t-4}px;
  height: ${_t-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
`,Wv=x.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:t})=>e?t.checkmarkDisabled:t.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,Qv=x.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:t})=>Oo({mainColor:e?t.checkmarkDisabled:t.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Hv={flat:Vv,default:Uv},Yv=v.forwardRef(({checked:e,className:t="",defaultChecked:n=!1,disabled:r=!1,indeterminate:o=!1,label:i="",onChange:l=Yn,style:a={},value:s,variant:c="default",...h},p)=>{var m;const[A,S]=An({defaultValue:n,onChange:l,readOnly:(m=h.readOnly)!==null&&m!==void 0?m:r,value:e}),C=v.useCallback(u=>{const d=u.target.checked;S(d),l(u)},[l,S]),I=Hv[c];let f=null;return o?f=Qv:A&&(f=Wv),w.createElement(Tu,{$disabled:r,className:t,style:a},w.createElement(Ki,{disabled:r,onChange:r?void 0:C,readOnly:r,type:"checkbox",value:s,checked:A,"data-indeterminate":o,ref:p,...h}),w.createElement(I,{$disabled:r,role:"presentation"},f&&w.createElement(f,{$disabled:r,variant:c})),i&&w.createElement(Iu,null,i))});Yv.displayName="Checkbox";const Ji=x.div`
  ${({orientation:e,theme:t,size:n="100%"})=>e==="vertical"?`
    height: ${wn(n)};
    border-left: 2px solid ${t.borderDark};
    border-right: 2px solid ${t.borderLightest};
    margin: 0;
    `:`
    width: ${wn(n)};
    border-bottom: 2px solid ${t.borderLightest};
    border-top: 2px solid ${t.borderDark};
    margin: 0;
    `}
`;Ji.displayName="Separator";const Gv=x(Al)`
  padding-left: 8px;
`,Kv=x(Ji)`
  height: 21px;
  position: relative;
  top: 0;
`,yh=x.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,Jv=x.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?_`
          border: 2px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:_`
          border: 2px solid ${({theme:t})=>t.materialText};
        `}
  ${yh}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Nr}
    outline-offset: -8px;
  }
`,Zv=x.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?_`
          border-top: 6px solid ${({theme:t})=>t.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
          );
        `:_`
          border-top: 6px solid ${({theme:t})=>t.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Xv=v.forwardRef(({value:e,defaultValue:t,onChange:n=Yn,disabled:r=!1,variant:o="default",...i},l)=>{var a;const[s,c]=An({defaultValue:t,onChange:n,readOnly:(a=i.readOnly)!==null&&a!==void 0?a:r,value:e}),h=p=>{const m=p.target.value;c(m),n(p)};return w.createElement(Gv,{disabled:r,as:"div",variant:o,size:"md"},w.createElement(yh,{onChange:h,readOnly:r,disabled:r,value:s??"#008080",type:"color",ref:l,...i}),w.createElement(Jv,{$disabled:r,color:s??"#008080",role:"presentation"}),o==="default"&&w.createElement(Kv,{orientation:"vertical"}),w.createElement(Zv,{$disabled:r,variant:o}))});Xv.displayName="ColorInput";const qv=x.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>_`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Oo({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,hd=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],ey=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function ty({digit:e=0,pixelSize:t=2,...n}){const r=ey[Number(e)].map((o,i)=>o?`${hd[i]} active`:hd[i]);return w.createElement(qv,{pixelSize:t,...n},r.map((o,i)=>w.createElement("span",{className:o,key:i})))}const ny=x.div`
  ${ge({style:"status"})}
  display: inline-flex;
  background: #000000;
`,ry={sm:1,md:2,lg:3,xl:4},oy=v.forwardRef(({value:e=0,minLength:t=3,size:n="md",...r},o)=>{const i=v.useMemo(()=>e.toString().padStart(t,"0").split(""),[t,e]);return w.createElement(ny,{ref:o,...r},i.map((l,a)=>w.createElement(ty,{digit:l,pixelSize:ry[n],key:a})))});oy.displayName="Counter";const wh=_`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Pe.md};
`,iy=x(Pt).attrs({"data-testid":"variant-default"})`
  ${wh}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};
`,ly=x.div.attrs({"data-testid":"variant-flat"})`
  ${Wn()}
  ${wh}
  position: relative;
`,xh=_`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:t})=>t!=="flat"&&e&&bt()}
`,ay=x.input`
  ${xh}
  padding: 0 8px;
`,sy=x.textarea`
  ${xh}
  padding: 8px;
  resize: none;
  ${({variant:e})=>$u(e)}
`,Zi=v.forwardRef(({className:e,disabled:t=!1,fullWidth:n,onChange:r=Yn,shadow:o=!0,style:i,variant:l="default",...a},s)=>{const c=l==="flat"?ly:iy,h=v.useMemo(()=>{var p;return a.multiline?w.createElement(sy,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,variant:l,...a}):w.createElement(ay,{disabled:t,onChange:t?void 0:r,readOnly:t,ref:s,type:(p=a.type)!==null&&p!==void 0?p:"text",variant:l,...a})},[t,r,a,s,l]);return w.createElement(c,{className:e,fullWidth:n,$disabled:t,shadow:o,style:i},h)});Zi.displayName="TextInput";const uy=x.div`
  display: inline-flex;
  align-items: center;
`,ps=x(xn)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?_`
          height: calc(50% - 1px);
        `:_`
          height: 50%;
        `}
`,cy=x.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?_`
          height: calc(${Pe.md} - 4px);
        `:_`
          height: ${Pe.md};
          margin-left: 2px;
        `}
`,md=x.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?_`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:t})=>t.materialText};
        `:_`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:t})=>t.materialText};
        `}
  ${ps}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?_`
            border-bottom-color: ${({theme:t})=>t.materialTextDisabled};
          `:_`
            border-top-color: ${({theme:t})=>t.materialTextDisabled};
          `}
  }
`,Ah=v.forwardRef(({className:e,defaultValue:t,disabled:n=!1,max:r,min:o,onChange:i,readOnly:l,step:a=1,style:s,value:c,variant:h="default",width:p,...m},A)=>{const[S,C]=An({defaultValue:t,onChange:i,readOnly:l,value:c}),I=v.useCallback(b=>{const k=parseFloat(b.target.value);C(k)},[C]),f=v.useCallback(b=>{const k=Pn(parseFloat(((S??0)+b).toFixed(2)),o??null,r??null);C(k),i==null||i(k)},[r,o,i,C,S]),u=v.useCallback(()=>{S!==void 0&&(i==null||i(S))},[i,S]),d=v.useCallback(()=>{f(a)},[f,a]),g=v.useCallback(()=>{f(-a)},[f,a]),y=h==="flat"?"flat":"raised";return w.createElement(uy,{className:e,style:{...s,width:p!==void 0?wn(p):"auto"},...m},w.createElement(Zi,{value:S,variant:h,onChange:I,disabled:n,type:"number",readOnly:l,ref:A,fullWidth:!0,onBlur:u}),w.createElement(cy,{variant:h},w.createElement(ps,{"data-testid":"increment",variant:y,disabled:n||l,onClick:d},w.createElement(md,{invert:!0})),w.createElement(ps,{"data-testid":"decrement",variant:y,disabled:n||l,onClick:g},w.createElement(md,null))))});Ah.displayName="NumberInput";function dy(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let t="";for(let n=0;n<10;n+=1)t+=e[Math.floor(Math.random()*e.length)];return t}const kh=e=>v.useMemo(()=>e??dy(),[e]),Sh=_`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,bh=_`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,Du=x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,fy=x.div`
  ${Sh}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Du}:focus & {
    ${bh}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,Eh=_`
  height: ${Pe.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:t})=>e?bt():t.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,py=x(Pt)`
  ${Eh}
  background: ${({$disabled:e=!1,theme:t})=>e?t.material:t.canvas};
  &:focus {
    outline: 0;
  }
`,hy=x.div`
  ${Wn()}
  ${Eh}
  background: ${({$disabled:e=!1,theme:t})=>e?t.flatLight:t.canvas};
`,my=x.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Sh}
  cursor: pointer;
  &:disabled {
    ${bt()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Ch=x(Al).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?_`
          height: 100%;
          margin-right: 0;
        `:_`
          height: 100%;
        `}
  ${({native:e=!1,variant:t="default"})=>e&&(t==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:t=!1})=>e||t?"none":"auto"}
`,gy=x.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:t})=>e?t.materialTextDisabled:t.materialText};
  ${({$disabled:e=!1,theme:t})=>e&&`
    filter: drop-shadow(1px 1px 0px ${t.materialTextDisabledShadow});
    border-top-color: ${t.materialTextDisabled};
    `}
  ${Ch}:active & {
    margin-top: 2px;
  }
`,vy=x.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${Eu};
  ${({variant:e="default"})=>e==="flat"?_`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:t})=>t.flatDark};
        `:_`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:t})=>t.borderDarkest};
        `}
  ${({variant:e="default"})=>$u(e)}
`,yy=x.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Pe.md} - 4px);
  line-height: calc(${Pe.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?bh:""}
  user-select: none;
`,wy=[],$h=({className:e,defaultValue:t,disabled:n,native:r,onChange:o,options:i=wy,readOnly:l,style:a,value:s,variant:c,width:h})=>{var p;const m=v.useMemo(()=>i.filter(Boolean),[i]),[A,S]=An({defaultValue:t??((p=m==null?void 0:m[0])===null||p===void 0?void 0:p.value),onChange:o,readOnly:l,value:s}),C=!(n||l),I=v.useMemo(()=>({className:e,style:{...a,width:h}}),[e,a,h]),f=v.useMemo(()=>w.createElement(Ch,{as:"div","data-testid":"select-button",$disabled:n,native:r,tabIndex:-1,variant:c==="flat"?"flat":"raised"},w.createElement(gy,{"data-testid":"select-icon",$disabled:n})),[n,r,c]),u=v.useMemo(()=>c==="flat"?hy:py,[c]);return v.useMemo(()=>({isEnabled:C,options:m,value:A,setValue:S,wrapperProps:I,DropdownButton:f,Wrapper:u}),[f,u,C,m,S,A,I])},xy={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Ay=1e3,ky=({onBlur:e,onChange:t,onClose:n,onFocus:r,onKeyDown:o,onMouseDown:i,onOpen:l,open:a,options:s,readOnly:c,value:h,selectRef:p,setValue:m,wrapperRef:A})=>{const S=v.useRef(null),C=v.useRef([]),I=v.useRef(0),f=v.useRef(0),u=v.useRef(),d=v.useRef("search"),g=v.useRef(""),y=v.useRef(),[b,k]=An({defaultValue:!1,onChange:l,onChangePropName:"onOpen",readOnly:c,value:a,valuePropName:"open"}),D=v.useMemo(()=>{const N=s.findIndex(F=>F.value===h);return I.current=Pn(N,0,null),s[N]},[s,h]),[M,j]=v.useState(s[0]),G=v.useCallback(N=>{const F=S.current,U=C.current[N];if(!U||!F){u.current=N;return}u.current=void 0;const ue=F.clientHeight,ae=F.scrollTop,De=F.scrollTop+ue,Se=U.offsetTop,at=U.offsetHeight,jt=U.offsetTop+U.offsetHeight;Se<ae&&F.scrollTo(0,Se),jt>De&&F.scrollTo(0,Se-ue+at),U.focus({preventScroll:!0})},[S]),Z=v.useCallback((N,{scroll:F}={})=>{var U;const ue=s.length-1;let ae;switch(N){case"first":{ae=0;break}case"last":{ae=ue;break}case"next":{ae=Pn(f.current+1,0,ue);break}case"previous":{ae=Pn(f.current-1,0,ue);break}case"selected":{ae=Pn((U=I.current)!==null&&U!==void 0?U:0,0,ue);break}default:ae=N}f.current=ae,j(s[ae]),F&&G(ae)},[f,s,G]),le=v.useCallback(({fromEvent:N})=>{k(!0),Z("selected",{scroll:!0}),l==null||l({fromEvent:N})},[Z,l,k]),ne=v.useCallback(()=>{d.current="search",g.current="",clearTimeout(y.current)},[]),ee=v.useCallback(({focusSelect:N,fromEvent:F})=>{var U;n==null||n({fromEvent:F}),k(!1),j(s[0]),ne(),u.current=void 0,N&&((U=p.current)===null||U===void 0||U.focus())},[ne,n,s,p,k]),we=v.useCallback(({fromEvent:N})=>{b?ee({focusSelect:!1,fromEvent:N}):le({fromEvent:N})},[ee,le,b]),pe=v.useCallback((N,{fromEvent:F})=>{I.current!==N&&(I.current=N,m(s[N].value),t==null||t(s[N],{fromEvent:F}))},[t,s,m]),$=v.useCallback(({focusSelect:N,fromEvent:F})=>{pe(f.current,{fromEvent:F}),ee({focusSelect:N,fromEvent:F})},[ee,pe]),P=v.useCallback((N,{fromEvent:F,select:U})=>{var ue;switch(d.current==="cycleFirstLetter"&&N!==g.current&&(d.current="search"),N===g.current?d.current="cycleFirstLetter":g.current+=N,d.current){case"search":{let ae=s.findIndex(De=>{var Se;return((Se=De.label)===null||Se===void 0?void 0:Se.toLocaleUpperCase().indexOf(g.current))===0});ae<0&&(ae=s.findIndex(De=>{var Se;return((Se=De.label)===null||Se===void 0?void 0:Se.toLocaleUpperCase().indexOf(N))===0}),g.current=N),ae>=0&&(U?pe(ae,{fromEvent:F}):Z(ae,{scroll:!0}));break}case"cycleFirstLetter":{const ae=U?(ue=I.current)!==null&&ue!==void 0?ue:-1:f.current;let De=s.findIndex((Se,at)=>{var jt;return at>ae&&((jt=Se.label)===null||jt===void 0?void 0:jt.toLocaleUpperCase().indexOf(N))===0});De<0&&(De=s.findIndex(Se=>{var at;return((at=Se.label)===null||at===void 0?void 0:at.toLocaleUpperCase().indexOf(N))===0})),De>=0&&(U?pe(De,{fromEvent:F}):Z(De,{scroll:!0}));break}}clearTimeout(y.current),y.current=setTimeout(()=>{d.current==="search"&&(g.current="")},Ay)},[Z,s,pe]),O=v.useCallback(N=>{var F;N.button===0&&(N.preventDefault(),(F=p.current)===null||F===void 0||F.focus(),we({fromEvent:N}),i==null||i(N))},[i,p,we]),Q=v.useCallback(N=>{$({focusSelect:!0,fromEvent:N})},[$]),K=v.useCallback(N=>{const{altKey:F,code:U,ctrlKey:ue,metaKey:ae,shiftKey:De}=N,{ARROW_DOWN:Se,ARROW_UP:at,END:jt,ENTER:En,ESC:Kt,HOME:$l,SPACE:Tl,TAB:Mr}=xy,Qu=F||ue||ae||De;if(!(U===Mr&&(F||ue||ae)||U!==Mr&&Qu))switch(U){case Se:{if(N.preventDefault(),!b){le({fromEvent:N});return}Z("next",{scroll:!0});break}case at:{if(N.preventDefault(),!b){le({fromEvent:N});return}Z("previous",{scroll:!0});break}case jt:{if(N.preventDefault(),!b){le({fromEvent:N});return}Z("last",{scroll:!0});break}case En:{if(!b)return;N.preventDefault(),$({focusSelect:!0,fromEvent:N});break}case Kt:{if(!b)return;N.preventDefault(),ee({focusSelect:!0,fromEvent:N});break}case $l:{if(N.preventDefault(),!b){le({fromEvent:N});return}Z("first",{scroll:!0});break}case Tl:{N.preventDefault(),b?$({focusSelect:!0,fromEvent:N}):le({fromEvent:N});break}case Mr:{if(!b)return;De||N.preventDefault(),$({focusSelect:!De,fromEvent:N});break}default:!Qu&&U.match(/^Key/)&&(N.preventDefault(),N.stopPropagation(),P(U.replace(/^Key/,""),{select:!b,fromEvent:N}))}},[Z,ee,b,le,P,$]),L=v.useCallback(N=>{K(N),o==null||o(N)},[K,o]),B=v.useCallback(N=>{Z(N)},[Z]),H=v.useCallback(N=>{b||(ne(),e==null||e(N))},[ne,e,b]),z=v.useCallback(N=>{ne(),r==null||r(N)},[ne,r]),V=v.useCallback(N=>{S.current=N,u.current!==void 0&&G(u.current)},[G]),xe=v.useCallback((N,F)=>{C.current[F]=N,u.current===F&&G(u.current)},[G]);return v.useEffect(()=>{if(!b)return()=>{};const N=F=>{var U;const ue=F.target;!((U=A.current)===null||U===void 0)&&U.contains(ue)||(F.preventDefault(),ee({focusSelect:!1,fromEvent:F}))};return document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[ee,b,A]),v.useMemo(()=>({activeOption:M,handleActivateOptionIndex:B,handleBlur:H,handleButtonKeyDown:L,handleDropdownKeyDown:K,handleFocus:z,handleMouseDown:O,handleOptionClick:Q,handleSetDropdownRef:V,handleSetOptionRef:xe,open:b,selectedOption:D}),[M,B,H,L,z,K,O,Q,V,xe,b,D])},Sy=v.forwardRef(({className:e,defaultValue:t,disabled:n,onChange:r,options:o,readOnly:i,style:l,value:a,variant:s,width:c,...h},p)=>{const{isEnabled:m,options:A,setValue:S,value:C,DropdownButton:I,Wrapper:f}=$h({defaultValue:t,disabled:n,native:!0,onChange:r,options:o,readOnly:i,value:a,variant:s}),u=v.useCallback(d=>{const g=A.find(y=>y.value===d.target.value);g&&(S(g.value),r==null||r(g,{fromEvent:d}))},[r,A,S]);return w.createElement(f,{className:e,style:{...l,width:c}},w.createElement(Du,null,w.createElement(my,{...h,disabled:n,onChange:m?u:Yn,ref:p,value:C},A.map((d,g)=>{var y;return w.createElement("option",{key:`${d.value}-${g}`,value:d.value},(y=d.label)!==null&&y!==void 0?y:d.value)})),I))});Sy.displayName="SelectNative";function by({activateOptionIndex:e,active:t,index:n,onClick:r,option:o,selected:i,setRef:l}){const a=v.useCallback(()=>{e(n)},[e,n]),s=v.useCallback(h=>{l(h,n)},[n,l]),c=kh();return w.createElement(yy,{active:t,"aria-selected":i?"true":void 0,"data-value":o.value,id:c,onClick:r,onMouseEnter:a,ref:s,role:"option",tabIndex:0},o.label)}function Ey({"aria-label":e,"aria-labelledby":t,className:n,defaultValue:r,disabled:o=!1,formatDisplay:i,inputProps:l,labelId:a,menuMaxHeight:s,name:c,onBlur:h,onChange:p,onClose:m,onFocus:A,onKeyDown:S,onMouseDown:C,onOpen:I,open:f,options:u,readOnly:d,shadow:g=!0,style:y,variant:b="default",value:k,width:D="auto",...M},j){const{isEnabled:G,options:Z,setValue:le,value:ne,wrapperProps:ee,DropdownButton:we,Wrapper:pe}=$h({className:n,defaultValue:r,disabled:o,native:!1,onChange:p,options:u,style:y,readOnly:d,value:k,variant:b,width:D}),$=v.useRef(null),P=v.useRef(null),O=v.useRef(null),{activeOption:Q,handleActivateOptionIndex:K,handleBlur:L,handleButtonKeyDown:B,handleDropdownKeyDown:H,handleFocus:z,handleMouseDown:V,handleOptionClick:xe,handleSetDropdownRef:N,handleSetOptionRef:F,open:U,selectedOption:ue}=ky({onBlur:h,onChange:p,onClose:m,onFocus:A,onKeyDown:S,onMouseDown:C,onOpen:I,open:f,options:Z,value:ne,selectRef:P,setValue:le,wrapperRef:O});v.useImperativeHandle(j,()=>({focus:En=>{var Kt;(Kt=P.current)===null||Kt===void 0||Kt.focus(En)},node:$.current,value:String(ne)}),[ne]);const ae=v.useMemo(()=>ue?typeof i=="function"?i(ue):ue.label:"",[i,ue]),De=G?1:void 0,Se=v.useMemo(()=>s?{overflow:"auto",maxHeight:s}:void 0,[s]),at=kh(),jt=v.useMemo(()=>Z.map((En,Kt)=>{const $l=`${ne}-${Kt}`,Tl=En===Q,Mr=En===ue;return w.createElement(by,{activateOptionIndex:K,active:Tl,index:Kt,key:$l,onClick:xe,option:En,selected:Mr,setRef:F})}),[Q,K,xe,F,Z,ue,ne]);return w.createElement(pe,{...ee,$disabled:o,ref:O,shadow:g,style:{...y,width:D}},w.createElement("input",{name:c,ref:$,type:"hidden",value:String(ne),...l}),w.createElement(Du,{"aria-disabled":o,"aria-expanded":U,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":t??a,"aria-owns":G&&U?at:void 0,onBlur:L,onFocus:z,onKeyDown:B,onMouseDown:G?V:C,ref:P,role:"button",tabIndex:De,...M},w.createElement(fy,null,ae),we),G&&U&&w.createElement(vy,{id:at,onKeyDown:H,ref:N,role:"listbox",style:Se,tabIndex:0,variant:b},jt))}const Th=v.forwardRef(Ey);Th.displayName="Select";const Cy=x.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,Xi=v.forwardRef(function({children:t,noPadding:n=!1,...r},o){return w.createElement(Cy,{noPadding:n,ref:o,...r},t)});Xi.displayName="Toolbar";const $y=x.div`
  padding: 16px;
`,Nu=v.forwardRef(function({children:t,...n},r){return w.createElement($y,{ref:r,...n},t)});Nu.displayName="WindowContent";const Ty=x.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?_`
          background: ${({theme:t})=>t.headerNotActiveBackground};
          color: ${({theme:t})=>t.headerNotActiveText};
        `:_`
          background: ${({theme:t})=>t.headerBackground};
          color: ${({theme:t})=>t.headerText};
        `}

  ${Al} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,_u=v.forwardRef(function({active:t=!0,children:n,...r},o){return w.createElement(Ty,{active:t,ref:o,...r},n)});_u.displayName="WindowHeader";const Iy=x.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${ge({style:"window"})}
  ${Et()}
`,Dy=x.span`
  ${({theme:e})=>_`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Pu=v.forwardRef(({children:e,resizable:t=!1,resizeRef:n,shadow:r=!0,...o},i)=>w.createElement(Iy,{ref:i,shadow:r,...o},e,t&&w.createElement(Dy,{"data-testid":"resizeHandle",ref:n})));Pu.displayName="Window";const Ny=x(gh)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,_y=x.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,Py=x.div`
  display: flex;
  flex-wrap: wrap;
`,Mt=x.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Ry=x.span`
  cursor: pointer;

  background: ${({active:e,theme:t})=>e?t.hoverBackground:"transparent"};
  color: ${({active:e,theme:t})=>e?t.canvasTextInvert:t.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:t})=>t?"none":e.materialDark};
  }
`,Oy=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function jy(e,t){return new Date(e,t+1,0).getDate()}function My(e,t,n){return new Date(e,t,n).getDay()}function Ly(e){const t=new Date(Date.parse(e)),n=t.getUTCDate(),r=t.getUTCMonth(),o=t.getUTCFullYear();return{day:n,month:r,year:o}}const By=v.forwardRef(({className:e,date:t=new Date().toISOString(),onAccept:n,onCancel:r,shadow:o=!0},i)=>{const[l,a]=v.useState(()=>Ly(t)),{year:s,month:c,day:h}=l,p=v.useCallback(({value:I})=>{a(f=>({...f,month:I}))},[]),m=v.useCallback(I=>{a(f=>({...f,year:I}))},[]),A=v.useCallback(I=>{a(f=>({...f,day:I}))},[]),S=v.useCallback(()=>{const I=[l.year,l.month+1,l.day].map(f=>String(f).padStart(2,"0")).join("-");n==null||n(I)},[l.day,l.month,l.year,n]),C=v.useMemo(()=>{const I=Array.from({length:42}),f=My(s,c,1);let u=h;const d=jy(s,c);return u=u<d?u:d,I.forEach((g,y)=>{if(y>=f&&y<d+f){const b=y-f+1;I[y]=w.createElement(Mt,{key:y,onClick:()=>{A(b)}},w.createElement(Ry,{active:b===u},b))}else I[y]=w.createElement(Mt,{key:y})}),I},[h,A,c,s]);return w.createElement(Pu,{className:e,ref:i,shadow:o,style:{margin:20}},w.createElement(_u,null,w.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),w.createElement(Nu,null,w.createElement(Xi,{noPadding:!0,style:{justifyContent:"space-between"}},w.createElement(Th,{options:Oy,value:c,onChange:p,width:128,menuMaxHeight:200}),w.createElement(Ah,{value:s,onChange:m,width:100})),w.createElement(Ny,null,w.createElement(_y,null,w.createElement(Mt,null,"S"),w.createElement(Mt,null,"M"),w.createElement(Mt,null,"T"),w.createElement(Mt,null,"W"),w.createElement(Mt,null,"T"),w.createElement(Mt,null,"F"),w.createElement(Mt,null,"S")),w.createElement(Py,null,C)),w.createElement(Xi,{noPadding:!0,style:{justifyContent:"space-between"}},w.createElement(xn,{fullWidth:!0,onClick:r,disabled:!r},"Cancel"),w.createElement(xn,{fullWidth:!0,onClick:n?S:void 0,disabled:!n},"OK"))))});By.displayName="DatePicker";const zy=e=>{switch(e){case"status":case"well":return _`
        ${ge({style:"status"})}
      `;case"window":case"outside":return _`
        ${ge({style:"window"})}
      `;case"field":return _`
        ${ge({style:"field"})}
      `;default:return _`
        ${ge()}
      `}},Fy=x.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>zy(e)}
  ${({variant:e})=>Et(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Ru=v.forwardRef(({children:e,shadow:t=!1,variant:n="window",...r},o)=>w.createElement(Fy,{ref:o,shadow:t,variant:n,...r},e));Ru.displayName="Frame";const Uy=x.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:t})=>t==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&_`
      box-shadow: -1px -1px 0 1px ${({theme:t})=>t.borderDark},
        inset -1px -1px 0 1px ${({theme:t})=>t.borderDark};
    `}
  ${e=>e.$disabled&&bt()}
`,Vy=x.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:t})=>t==="flat"?e.canvas:e.material};
`,Wy=v.forwardRef(({label:e,disabled:t=!1,variant:n="default",children:r,...o},i)=>w.createElement(Uy,{"aria-disabled":t,$disabled:t,variant:n,ref:i,...o},e&&w.createElement(Vy,{variant:n},e),r));Wy.displayName="GroupBox";const Qy=x.div`
  ${({theme:e,size:t="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${wn(t)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;Qy.displayName="Handle";const Hy="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Yy=x.div`
  display: inline-block;
  height: ${({size:e})=>wn(e)};
  width: ${({size:e})=>wn(e)};
`,Gy=x.span`
  display: block;
  background: ${Hy};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Ou=v.forwardRef(({size:e=30,...t},n)=>w.createElement(Yy,{size:e,ref:n,...t},w.createElement(Gy,null)));Ou.displayName="Hourglass";const Ky=x.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Jy=x.div`
  position: relative;
`,Zy=x.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Xy=x(Pt).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,qy=x.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,e1=v.forwardRef(({backgroundStyles:e,children:t,...n},r)=>w.createElement(Ky,{ref:r,...n},w.createElement(Jy,null,w.createElement(Zy,null,w.createElement(Xy,{style:e},t)),w.createElement(qy,null))));e1.displayName="Monitor";const t1=x.div`
  display: inline-block;
  height: ${Pe.md};
  width: 100%;
`,n1=x(Pt)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Ih=_`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,r1=x.div`
  position: relative;
  top: 4px;
  ${Ih}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,o1=x.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Ih}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,i1=x.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Dh=17,l1=x.span`
  display: inline-block;
  width: ${Dh}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Nh=v.forwardRef(({hideValue:e=!1,shadow:t=!0,value:n,variant:r="default",...o},i)=>{const l=e?null:`${n}%`,a=v.useRef(null),[s,c]=v.useState([]),h=v.useCallback(()=>{if(!a.current||n===void 0)return;const p=a.current.getBoundingClientRect().width,m=Math.round(n/100*p/Dh);c(Array.from({length:m}))},[n]);return v.useEffect(()=>(h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)),[h]),w.createElement(t1,{"aria-valuenow":n!==void 0?Math.round(n):void 0,ref:i,role:"progressbar",variant:r,...o},w.createElement(n1,{variant:r,shadow:t},r==="default"?w.createElement(w.Fragment,null,w.createElement(r1,{"data-testid":"defaultProgress1"},l),w.createElement(o1,{"data-testid":"defaultProgress2",value:n},l)):w.createElement(i1,{ref:a,"data-testid":"tileProgress"},s.map((p,m)=>w.createElement(l1,{key:m})))))});Nh.displayName="ProgressBar";const _h=_`
  width: ${_t}px;
  height: ${_t}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,a1=x(Pt)`
  ${_h}
  background: ${({$disabled:e,theme:t})=>e?t.material:t.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,s1=x.div`
  ${Wn()}
  ${_h}
  outline: none;
  background: ${({$disabled:e,theme:t})=>e?t.flatLight:t.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,u1=x.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,c1={flat:s1,default:a1},d1=v.forwardRef(({checked:e,className:t="",disabled:n=!1,label:r="",onChange:o,style:i={},variant:l="default",...a},s)=>{const c=c1[l];return w.createElement(Tu,{$disabled:n,className:t,style:i},w.createElement(c,{$disabled:n,role:"presentation"},e&&w.createElement(u1,{$disabled:n,variant:l})),w.createElement(Ki,{disabled:n,onChange:n?void 0:o,readOnly:n,type:"radio",checked:e,ref:s,...a}),r&&w.createElement(Iu,null,r))});d1.displayName="Radio";const f1=typeof window<"u"?v.useLayoutEffect:v.useEffect;function Cn(e){const t=v.useRef(e);return f1(()=>{t.current=e}),v.useCallback((...n)=>(0,t.current)(...n),[])}function gd(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function vd(e,t){return v.useMemo(()=>e==null&&t==null?null:n=>{gd(e,n),gd(t,n)},[e,t])}let kl=!0,hs=!1,yd;const p1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function h1(e){if("type"in e){const{type:t,tagName:n}=e;if(n==="INPUT"&&p1[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function m1(e){e.metaKey||e.altKey||e.ctrlKey||(kl=!0)}function ia(){kl=!1}function g1(){this.visibilityState==="hidden"&&hs&&(kl=!0)}function v1(e){e.addEventListener("keydown",m1,!0),e.addEventListener("mousedown",ia,!0),e.addEventListener("pointerdown",ia,!0),e.addEventListener("touchstart",ia,!0),e.addEventListener("visibilitychange",g1,!0)}function y1(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return kl||h1(t)}function w1(){hs=!0,window.clearTimeout(yd),yd=window.setTimeout(()=>{hs=!1},100)}function x1(){const e=v.useCallback(t=>{const n=ml.findDOMNode(t);n!=null&&v1(n.ownerDocument)},[]);return{isFocusVisible:y1,onBlurVisible:w1,ref:e}}function A1(e,t,n){return(n-t)*e+t}function ti(e,t){if(t!==void 0&&"changedTouches"in e){for(let n=0;n<e.changedTouches.length;n+=1){const r=e.changedTouches[n];if(r.identifier===t)return{x:r.clientX,y:r.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function ni(e){return e&&e.ownerDocument||document}function k1(e,t){var n;const{index:r}=(n=e.reduce((o,i,l)=>{const a=Math.abs(t-i);return o===null||a<o.distance||a===o.distance?{distance:a,index:l}:o},null))!==null&&n!==void 0?n:{};return r??-1}const S1=x.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:t})=>e&&`
        outline: 2px dotted ${t.materialText};
        `}
  }

  ${({orientation:e,size:t})=>e==="vertical"?_`
          height: ${t};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `:_`
          width: ${t};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:n})=>n?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,Ph=()=>_`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?_`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:_`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,b1=x(Pt)`
  ${Ph()}
`,E1=x(Pt)`
  ${Ph()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,C1=x.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?_`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:_`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?_`
          ${Wn()}
          outline: 2px solid ${({theme:t})=>t.flatDark};
          background: ${({theme:t})=>t.flatLight};
        `:_`
          ${Et()}
          ${ge()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:t})=>e&&Oo({mainColor:t.material,secondaryColor:t.borderLightest})}
`,fr=6,$1=x.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?_`
          right: ${-fr-2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${fr}px;
          border-bottom: 2px solid ${({theme:t})=>t.materialText};
        `:_`
          bottom: ${-fr}px;
          height: ${fr}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:t})=>t.materialText};
          border-right: 1px solid ${({theme:t})=>t.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:t})=>e&&_`
      ${bt()}
      box-shadow: 1px 1px 0px ${t.materialTextDisabledShadow};
      border-color: ${t.materialTextDisabled};
    `}
`,T1=x.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?_`
          transform: translate(${fr+2}px, ${fr+1}px);
        `:_`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,I1=v.forwardRef(({defaultValue:e,disabled:t=!1,marks:n=!1,max:r=100,min:o=0,name:i,onChange:l,onChangeCommitted:a,onMouseDown:s,orientation:c="horizontal",size:h="100%",step:p=1,value:m,variant:A="default",...S},C)=>{const I=A==="flat"?E1:b1,f=c==="vertical",[u=o,d]=An({defaultValue:e,onChange:l??a,value:m}),{isFocusVisible:g,onBlurVisible:y,ref:b}=x1(),[k,D]=v.useState(!1),M=v.useRef(),j=v.useRef(null),G=vd(b,M),Z=vd(C,G),le=Cn(L=>{g(L)&&D(!0)}),ne=Cn(()=>{k!==!1&&(D(!1),y())}),ee=v.useRef(),we=v.useMemo(()=>n===!0&&Number.isFinite(p)?[...Array(Math.round((r-o)/p)+1)].map((L,B)=>({label:void 0,value:o+p*B})):Array.isArray(n)?n:[],[n,r,o,p]),pe=Cn(L=>{const B=(r-o)/10,H=we.map(xe=>xe.value),z=H.indexOf(u);let V=0;switch(L.key){case"Home":V=o;break;case"End":V=r;break;case"PageUp":p&&(V=u+B);break;case"PageDown":p&&(V=u-B);break;case"ArrowRight":case"ArrowUp":p?V=u+p:V=H[z+1]||H[H.length-1];break;case"ArrowLeft":case"ArrowDown":p?V=u-p:V=H[z-1]||H[0];break;default:return}L.preventDefault(),p&&(V=pd(V,p,o)),V=Pn(V,o,r),d(V),D(!0),l==null||l(V),a==null||a(V)}),$=v.useCallback(L=>{if(!M.current)return 0;const B=M.current.getBoundingClientRect();let H;f?H=(B.bottom-L.y)/B.height:H=(L.x-B.left)/B.width;let z;if(z=A1(H,o,r),p)z=pd(z,p,o);else{const V=we.map(N=>N.value),xe=k1(V,z);z=V[xe]}return z=Pn(z,o,r),z},[we,r,o,p,f]),P=Cn(L=>{var B;const H=ti(L,ee.current);if(!H)return;const z=$(H);(B=j.current)===null||B===void 0||B.focus(),d(z),D(!0),l==null||l(z)}),O=Cn(L=>{const B=ti(L,ee.current);if(!B)return;const H=$(B);a==null||a(H),ee.current=void 0;const z=ni(M.current);z.removeEventListener("mousemove",P),z.removeEventListener("mouseup",O),z.removeEventListener("touchmove",P),z.removeEventListener("touchend",O)}),Q=Cn(L=>{var B;s==null||s(L),L.preventDefault(),(B=j.current)===null||B===void 0||B.focus(),D(!0);const H=ti(L,ee.current);if(H){const V=$(H);d(V),l==null||l(V)}const z=ni(M.current);z.addEventListener("mousemove",P),z.addEventListener("mouseup",O)}),K=Cn(L=>{var B;L.preventDefault();const H=L.changedTouches[0];H!=null&&(ee.current=H.identifier),(B=j.current)===null||B===void 0||B.focus(),D(!0);const z=ti(L,ee.current);if(z){const xe=$(z);d(xe),l==null||l(xe)}const V=ni(M.current);V.addEventListener("touchmove",P),V.addEventListener("touchend",O)});return v.useEffect(()=>{const{current:L}=M;L==null||L.addEventListener("touchstart",K);const B=ni(L);return()=>{L==null||L.removeEventListener("touchstart",K),B.removeEventListener("mousemove",P),B.removeEventListener("mouseup",O),B.removeEventListener("touchmove",P),B.removeEventListener("touchend",O)}},[O,P,K]),w.createElement(S1,{$disabled:t,hasMarks:!!we.length,isFocused:k,onMouseDown:Q,orientation:c,ref:Z,size:wn(h),...S},w.createElement("input",{disabled:t,name:i,type:"hidden",value:u??0}),we&&we.map(L=>w.createElement($1,{$disabled:t,"data-testid":"tick",key:L.value/(r-o)*100,orientation:c,style:{[f?"bottom":"left"]:`${(L.value-o)/(r-o)*100}%`}},L.label&&w.createElement(T1,{"aria-hidden":!0,"data-testid":"mark",orientation:c},L.label))),w.createElement(I,{orientation:c,variant:A}),w.createElement(C1,{$disabled:t,"aria-disabled":t?!0:void 0,"aria-orientation":c,"aria-valuemax":r,"aria-valuemin":o,"aria-valuenow":u,onBlur:ne,onFocus:le,onKeyDown:pe,orientation:c,ref:j,role:"slider",style:{[f?"bottom":"left"]:`${(f?-100:0)+100*(u-o)/(r-o)}%`},tabIndex:t?void 0:0,variant:A}))});I1.displayName="Slider";const D1=x.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${Cu};
  overflow-y: auto;
`,N1=v.forwardRef(function({children:t,...n},r){return w.createElement(D1,{ref:r,...n},t)});N1.displayName="TableBody";const _1=x.td`
  padding: 0 8px;
`,P1=v.forwardRef(function({children:t,...n},r){return w.createElement(_1,{ref:r,...n},t)});P1.displayName="TableDataCell";const R1=x.thead`
  display: table-header-group;
`,O1=v.forwardRef(function({children:t,...n},r){return w.createElement(R1,{ref:r,...n},t)});O1.displayName="TableHead";const j1=x.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${ge()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&_`
      &:active {
        &:before {
          ${ge({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&bt()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&bt()}
  }
`,M1=v.forwardRef(function({disabled:t=!1,children:n,onClick:r,onTouchStart:o=Yn,sort:i,...l},a){const s=i==="asc"?"ascending":i==="desc"?"descending":void 0;return w.createElement(j1,{$disabled:t,"aria-disabled":t,"aria-sort":s,onClick:t?void 0:r,onTouchStart:t?void 0:o,ref:a,...l},w.createElement("div",null,n))});M1.displayName="TableHeadCell";const L1=x.tr`
  color: inherit;
  display: table-row;
  height: calc(${Pe.md} - 2px);
  line-height: calc(${Pe.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,B1=v.forwardRef(function({children:t,...n},r){return w.createElement(L1,{ref:r,...n},t)});B1.displayName="TableRow";const z1=x.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,F1=x(Pt)`
  &:before {
    box-shadow: none;
  }
`,U1=v.forwardRef(({children:e,...t},n)=>w.createElement(F1,null,w.createElement(z1,{ref:n,...t},e)));U1.displayName="Table";const V1=x.button`
  ${Et()}
  ${ge()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Pe.md};
  line-height: ${Pe.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Nr}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${Pe.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,Rh=v.forwardRef(({value:e,onClick:t,selected:n=!1,children:r,...o},i)=>w.createElement(V1,{"aria-selected":n,selected:n,onClick:l=>t==null?void 0:t(e,l),ref:i,role:"tab",...o},r));Rh.displayName="Tab";const W1=x.div`
  ${Et()}
  ${ge()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Oh=v.forwardRef(({children:e,...t},n)=>w.createElement(W1,{ref:n,...t},e));Oh.displayName="TabBody";const Q1=x.div`
  position: relative;
  ${({isMultiRow:e,theme:t})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${t.borderDark};
  }
  `}
`,H1=x.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function Y1(e,t){const n=[];for(let r=t;r>0;r-=1)n.push(e.splice(0,Math.ceil(e.length/r)));return n}const jh=v.forwardRef(({value:e,onChange:t=Yn,children:n,rows:r=1,...o},i)=>{const l=v.useMemo(()=>{var a;const s=(a=w.Children.map(n,p=>{if(!w.isValidElement(p))return null;const m={selected:p.props.value===e,onClick:t};return w.cloneElement(p,m)}))!==null&&a!==void 0?a:[],c=Y1(s,r).map((p,m)=>({key:m,tabs:p})),h=c.findIndex(p=>p.tabs.some(m=>m.props.selected));return c.push(c.splice(h,1)[0]),c},[n,t,r,e]);return w.createElement(Q1,{...o,isMultiRow:r>1,role:"tablist",ref:i},l.map(a=>w.createElement(H1,{key:a.key},a.tabs)))});jh.displayName="Tabs";const G1=["blur","focus"],K1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function wd(e){return"nativeEvent"in e&&G1.includes(e.type)}function xd(e){return"nativeEvent"in e&&K1.includes(e.type)}const J1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Z1=x.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${Eu};
  text-align: center;
  font-size: 1rem;
  ${e=>J1[e.position]}
`,X1=x.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,q1=v.forwardRef(({className:e,children:t,disableFocusListener:n=!1,disableMouseListener:r=!1,enterDelay:o=1e3,leaveDelay:i=0,onBlur:l,onClose:a,onFocus:s,onMouseEnter:c,onMouseLeave:h,onOpen:p,style:m,text:A,position:S="top",...C},I)=>{const[f,u]=v.useState(!1),[d,g]=v.useState(),[y,b]=v.useState(),k=!n,D=!r,M=$=>{window.clearTimeout(d),window.clearTimeout(y);const P=window.setTimeout(()=>{u(!0),p==null||p($)},o);g(P)},j=$=>{$.persist(),wd($)?s==null||s($):xd($)&&(c==null||c($)),M($)},G=$=>{window.clearTimeout(d),window.clearTimeout(y);const P=window.setTimeout(()=>{u(!1),a==null||a($)},i);b(P)},Z=$=>{$.persist(),wd($)?l==null||l($):xd($)&&(h==null||h($)),G($)},le=k?Z:void 0,ne=k?j:void 0,ee=D?j:void 0,we=D?Z:void 0,pe=k?0:void 0;return w.createElement(X1,{"data-testid":"tooltip-wrapper",onBlur:le,onFocus:ne,onMouseEnter:ee,onMouseLeave:we,tabIndex:pe},w.createElement(Z1,{className:e,"data-testid":"tooltip",position:S,ref:I,show:f,style:m,...C},A),t)});q1.displayName="Tooltip";const ms=x(Iu)`
  white-space: nowrap;
`,Mh=_`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":_`
          cursor: pointer;

          :focus {
            ${ms} {
              background: ${({theme:t})=>t.hoverBackground};
              color: ${({theme:t})=>t.materialTextInvert};
              outline: 2px dotted ${({theme:t})=>t.focusSecondary};
            }
          }
        `}
`,ew=x.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&_`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:t})=>t.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,tw=x.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?_`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `:_`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:t})=>t.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,nw=x.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,rw=x.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${Mh};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Ad=x(Tu)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Mh};
`,ow=x.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function kd(e,t){return e.includes(t)?e.filter(n=>n!==t):[...e,t]}function Sd(e){e.preventDefault()}function Lh({className:e,disabled:t,expanded:n,innerRef:r,level:o,select:i,selected:l,style:a,tree:s=[]}){const c=o===0,h=v.useCallback(p=>{var m,A;const S=!!(p.items&&p.items.length>0),C=n.includes(p.id),I=(m=t||p.disabled)!==null&&m!==void 0?m:!1,f=I?Sd:y=>i(y,p),u=I?Sd:y=>i(y,p),d=l===p.id,g=w.createElement(ow,{"aria-hidden":!0},p.icon);return w.createElement(tw,{key:p.label,isRootLevel:c,role:"treeitem","aria-expanded":C,"aria-selected":d,hasItems:S},S?w.createElement(nw,{open:C},w.createElement(rw,{onClick:f,$disabled:I},w.createElement(Ad,{$disabled:I},g,w.createElement(ms,null,p.label))),C&&w.createElement(Lh,{className:e,disabled:I,expanded:n,level:o+1,select:i,selected:l,style:a,tree:(A=p.items)!==null&&A!==void 0?A:[]})):w.createElement(Ad,{as:"button",$disabled:I,onClick:u},g,w.createElement(ms,null,p.label)))},[e,t,n,c,o,i,l,a]);return w.createElement(ew,{className:c?e:void 0,style:c?a:void 0,ref:c?r:void 0,role:c?"tree":"group",isRootLevel:c},s.map(h))}function iw({className:e,defaultExpanded:t=[],defaultSelected:n,disabled:r=!1,expanded:o,onNodeSelect:i,onNodeToggle:l,selected:a,style:s,tree:c=[]},h){const[p,m]=An({defaultValue:t,onChange:l,onChangePropName:"onNodeToggle",value:o,valuePropName:"expanded"}),[A,S]=An({defaultValue:n,onChange:i,onChangePropName:"onNodeSelect",value:a,valuePropName:"selected"}),C=v.useCallback((u,d)=>{if(l){const g=kd(p,d);l(u,g)}m(g=>kd(g,d))},[p,l,m]),I=v.useCallback((u,d)=>{S(d),i&&i(u,d)},[i,S]),f=v.useCallback((u,d)=>{u.preventDefault(),I(u,d.id),d.items&&d.items.length&&C(u,d.id)},[I,C]);return w.createElement(Lh,{className:e,disabled:r,expanded:p,level:0,innerRef:h,select:f,selected:A,style:s,tree:c})}const lw=v.forwardRef(iw);lw.displayName="TreeView";var Bh={exports:{}},aw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",sw=aw,uw=sw;function zh(){}function Fh(){}Fh.resetWarningCache=zh;var cw=function(){function e(r,o,i,l,a,s){if(s!==uw){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Fh,resetWarningCache:zh};return n.PropTypes=n,n};Bh.exports=cw();var me=Bh.exports;const jr=v.createContext(),ju=({children:e})=>{const[t,n]=v.useState("off");return E.jsx(jr.Provider,{value:{computerState:t,setComputerState:n},children:e})};ju.defaultProps={children:null};ju.propTypes={children:me.node};const dw="/assets/wallpaper-4APHToW0.jpg",fw="/assets/windowsclouds-7LqDXoVM.jpg",Mu=({children:e})=>{const{computerState:t}=v.useContext(jr);return E.jsx(hw,{children:E.jsx(pw,{$off:t==="off",$bgon:t==="loading"||t==="desktop",$bgimg:t,children:e})})};Mu.defaultProps={children:null};Mu.propTypes={children:me.node};const pw=x.div.withConfig({displayName:"Background__BackgroundDiv",componentId:"sc-1tnrmzw-0"})(["background-color:",";background-image:",';background-repeat:no-repeat;background-size:cover;height:90vh;width:80vw;border-radius:8px;&:before{content:" ";display:block;position:absolute;top:0;left:0;bottom:0;right:0;background:linear-gradient( to bottom,rgba(18,16,16,0) 50%,rgba(0,0,0,0.25) 50% );background-size:100% 2px;z-index:100;pointer-events:none;}'],({theme:e})=>e.colors.darkgray,({$bgon:e,$bgimg:t})=>e&&`url(${t==="loading"?fw:dw})`),hw=x.div.withConfig({displayName:"Background__Container",componentId:"sc-1tnrmzw-1"})(["align-items:center;display:flex;justify-content:center;height:100vh;width:100vw;"]);var mw=["width","height","src"];function gs(){return gs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gs.apply(this,arguments)}function gw(e,t){if(e==null)return{};var n=vw(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function vw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Gn=function(t){var n=t.width,r=t.height,o=t.src,i=gw(t,mw);return w.createElement("img",gs({width:n,height:r},i,{src:o}))};const yw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABFUlEQVR4Ae3BAYqDQBREwddD7m3/k/eCLIOJOmqyISykiq9PExclhA1VzGzEBeKkhHBCFTMbcYI4kBAuqqKzEQNiICE8qYrORuwQOxLCi6robMQGsSEh/JEqOhvxoPFm08RQ40FC2CGBxIoEEodswoPGSRKdRCfRSVzWWEgIbzBNdDZhoXFSQpfQJXQJlzV2SKwkkLCSQMImiaHGhzU+rLEjAYmXSJAw1PiwxkACEk+RIOFQY0FCvEEVnY1YuHEgAYlZwiGJWcIpYkNC2CAxS1iRmCXcqaKzEQ9uXJAwk1hJWKnikNiREF5QxR0bsUEMJIQnVHHHRuwQB2zCr2liqIoVGzEgTrIJF9iIE8RFNmHARnz9Jz95FW0p2SiA1gAAAABJRU5ErkJggg==";var ww=["variant"];function vs(){return vs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vs.apply(this,arguments)}function xw(e,t){if(e==null)return{};var n=Aw(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Aw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var kw={"32x32_4":{imageSrc:yw,width:32,height:32}},bd=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=xw(t,ww),i=kw[r];return w.createElement(Gn,vs({width:i.width,height:i.height,src:i.imageSrc},o))};const Sw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFX0lEQVR4AdXBjXUaYbJF0XORAulM+iMSK5O+lYkzUVUmQyQ13cjIIAP6sd96mr3FP2C7+SLb4i88cltznThju8cYfEVmsmpAfJG4rm1zjW1WYmW7xxjM88xXVBWZiW1W4gvEn9o2tsUVtts2thljMM8zHxUR2GbT3WyqiszENivxSQ9catvYFjdkZgAeY/Djxw8+IiLY7/dkJicRgW2maUIS0zSRmQaCT3jkBpvmDtuAWZbmHkncIonuZp5nNrax3YD4IHGpbQNmWZp7JGGDDd3NNZK4YGABAjCvuptNVZGZ2GYlPuCBSx4jWZYGBAQQQAABBBBAEAHPzyDBfh/Y5lxEkJm8MrDwYgAGgqOIwDbTNCGJaZrITAPBOx44Y+NlaUCckyACIiACIjiyYQyQYL8PbHOy3++5kIC5JCA5ighsM00Tkpimicw0ENzxwC82vSwNiHMS2GaMwRiDMQaZycbmaAyQYL8PbBMRZCYbAwNIVgGYFwGYCxGBbaZpQhLTNJGZBoIbHljZ9LI0IN6KgDEGy7IwxmC/32ObzMTm1RggwX4fZCYbAwswgOCXAASYqyIC20zThCSmaSIzDQRXPLAaA49hIHgrAjKTiCAisM2yLEQENhfGAMlkJpsBDF4YCH5JXtnw/Aw2RHAUEdhmmiYkMU0TmWkgeGPHDVVJVbKxTXfT3SzLwklVUpVcMhsDC5fMJRuWhVfdvJLEZp5nxhjYZtW8seOGeR7M8+CaiGAzz4N5HlxjLgVgLtn8oZtXktjM88wYA9usmjNiZdPL0oA4qUpOxhi8lZmczPPgJAJsXjUvxDkD5qSbVxJ/6G42VUVmYpuVWD1ywzwPTrq5YvARAsw5AwuwAGIjgQ02f+hu7nnkhqrko+Z58FZ3I4mNuaUBsbG50N18xCM3zPPgb3U3kri0cMmAOelurqkqMhPbrMQvD6wyCSk8RgPBuarkcHjicHjicHjicHjicHjicHhimn5yLgJs6G6QCInn52cigt/MpT0n3c01VUVmYpuVOCPO2PSyNCA+KwJs6G6OJI662Ujit+aFOOlurqkqMhPbrMQbO87YKEJA8xkRYEN3g0RVcdTNSXfzm/iIqiIzsc1KXPHAG5mEFB6jgeA9EWBDd3MUwfTzJ3RzIoEUPD8/ExG8CE66m7eqiszENitxw44rbBQhoLklAiJgMXQ3SCBBN9fYC5vu5j1VRWZim5W4Y8cNNooQ0JyrSiI4soFukKCbV91sJKgqNt286m5OuptzVUVmYpuVeMeOO2wUIaDZVCWZAzDLwm/dHHXz1hgz3bySRETQ3bxVVWQmtlmJD9jxl6qKE4kjCSTo5irbbLqbk6oiM7HNSnzQjjtselkaELdkJlXFphsk6OZVN0eSqCo23c25qiIzsc1KfMKOG2x6WRoQ99hWZlJVbLo56uYPYwy6m3NVRWZim5X4pB3/gG1lJlXFiSQ2kpBEd/NWVZGZ2GYlvmDHDTaKEBF8iG1lJlXFpruRRHdz0t2cVBWZiW1W4oseuCOTyMQSjAGHwxP/+c9PYDBGEsEm+CUzY5omS2KaJmyzsc25qiIzsc1K/IUd75PNh9lWZlJVXFNVZCa2WYm/tOMdNs0n2VZmUlWcqyoyE9usxD+w4w6bZtXdfJZtZSZVRVVRVWQmtlmJf+SRG2x6WZoX4itsy3bb5oz4hx55l/gbtsX/oR032ChCQPOd7XhHhIDmu9pxh41YRYjvasc7bGSzar6jHe+waY7Ed/TIHTa9LM2yiO9qx/+4HXfYECG+sx33yYYI/hDBt/DA+yITS/Djx0+qWA3sZCX+n+34GNkQwbcjPqf5TXwD/wX5t+jqwrT3TgAAAABJRU5ErkJggg==";var bw=["variant"];function ys(){return ys=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ys.apply(this,arguments)}function Ew(e,t){if(e==null)return{};var n=Cw(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Cw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var $w={"48x48_4":{imageSrc:Sw,width:48,height:48}},Tw=function(t){var n=t.variant,r=n===void 0?"48x48_4":n,o=Ew(t,bw),i=$w[r];return w.createElement(Gn,ys({width:i.width,height:i.height,src:i.imageSrc},o))};const Iw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEO0lEQVR4AcXB0WFUyQFE0duCQIZIqhSJlMnrjkSzmVRlso6k/QaEGbRCi9cfPof/t8HHNh8b/I8G79uckiCJ97TFNq8G/9An/mqfmHNyuVxoy+XyhfaRy+UL7SOXyxf+9a9nnp+fuVyuJExg8Q888LN9oi0waItk2iCZNkimDZK5OQ6Yk5vNf2dzGvywT7RFMm2QDGPznqZIpg2SWQvm5GbwezanB96QTBsk0wb24D2yWGMimTb8Uw98s5Nw0wbJtEEyjM1H2iAZO8zJzebv7RM3D7ySRFsk0wbJtIE9WCzec3AQhzZI5jftE2MMbh64I5k2SKYNkmnDsSeLxWJxb7G4kUwbjgPm5GbzgTEG333mThsk0wbJtEEybTi2acPy4t6xJ22QTBvAfGDzs/EJ2CfaIpk2WGYtuD5deWyQTBskMx4nTy/PjMfJ08szbZBMGyQzRrhcriRMYPHDPrHW4jSAxemBV5Jpg2VYwAEssMxYIJk2SKYNkmmDZNogmTZIxg5zcrP5Zp8YY3Aa3HngVRskwwIOYAEHsIADxgLJtEEybZBMGyTTBsm0QTJ2mJObfWKMwWnwxmdeSWYs4AAWcAALOIDFV22QTBsk0wbJtOFmLU4mARvm5LQZY/Arn3nVBjAs4AAWcACLr+IgmTZIpg2SacNNYubkjoENDOac3Mw5NzC488ArycThq8U3i6/iIJk2SKYNkmmDZBIzJzcDGHy1gcF3tpmTm82dB161QTJx2AfEYR8QB8m0QTJtkEwbJNOGNzZsYHAanGxzY4c5udm8euCVZNogmTZIpg2yYYBs2iCZNkimDZK5s2EDg9PgjmTe8wmYJ9pHJNMGybRBNvf+uF4Zj0EybZBMG56erowBCafFafDNToJk2iCZMcLlciVhAusTsE7z5eVKGyTTBtm8VeDp5UobJNMGybTh6enKGJBwM4GZBMm0QTJtkEwLCTfrM6/aIJk2SOY9B7AGHNu0QTJtkEwbjsPYQTJtkEwbJNMGybQBzHcPvJJMGyTThsX7DmANkEwbJNMGybRBMm2QTBsk0wbJtEEy9z7xzVqL+fJypQ2SGY/hj+sV88MCChwb2iCZNthircn1euHx8RHJtEEybZBMGyTThj//vJJwsz7zk400aINkSFg23zlBMm2QzBibt2wBk71NGyTTBsm0QTIJ//GJH9Zpzrm5XL7QBsmMx/D0cmU8Bsm0QTJjbH7NrDV4eXmmDZJpg2TW4quEm/XAz8YJ2EimDZJpg2TaIJk2/I42SKYNkmnDzZzcDE4P/NU4ARvJtEEybZBMGyQDi/ctYJEYybRBMm1IzFuDX9tzTo5j0gbJtEEybZDMGJO39p60QTJtkEwbEnMzJzeDV4OPbU5zgh0k0wbJtEEybZBMGyTTBsm0ITHfzcl3gzuDj23emJPfNif3Bu8Y/Nrmm8HPNr9v8Df+DcUVxNOyoGVGAAAAAElFTkSuQmCC";var Dw=["variant"];function ws(){return ws=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ws.apply(this,arguments)}function Nw(e,t){if(e==null)return{};var n=_w(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _w(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Pw={"32x32_4":{imageSrc:Iw,width:32,height:32}},Ed=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Nw(t,Dw),i=Pw[r];return w.createElement(Gn,ws({width:i.width,height:i.height,src:i.imageSrc},o))};const Rw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB10lEQVR4Ab3BAYrbUBTAQMn4/ldW8yEPjLGzSbbtjD2onFVcURkVi8qouKJyVrHzVHGkUjFUloqhslQMlaViqFQcqSw7ByqjQmVULCqjYlEZFYvKqFAZFWPnpEJlqRgqZypnKkvFWYXK0c6JSoXKb6icqZztPFSoVCwq/0LFolKx7DxVqFSMiisqdyquqCwqFWPjQyqvqHxi5wMqS8WZylCpeMfGk0qFyisVVyqWikXlTKVCZWy8SeUdKp/YeFCpUPmJypHKJ1QqVJaND1WoLCoVKirf2PhChUrFUlHxjY2HCpWKKyp/S4VKxbLxCyq/tfGligqV39h4QeVMZVFRqbijsqjcsQeVCpWjCpUrFUPlSoVKhcqoUKnYeUGlQuVM5ScqFSp3Nl6oULlTUXGnQqXizsZDhUrFkUrFTyquqFSojAqVimXjhQqVKxXvUKm4s/FUoVIxVCqOKireVaGyVKhUjI0XKlSOVBaVd6hU3Nl5QeWKyqLyDpU7G08qFUcVf0PFqFAZ9qBSofI/VKhU7JxUqFQcqXyi4kilQuVo50RlqIyKRWVULCqjYlEZFYvK2c5BxVCpGCpLxVBZKobKUjFUKq7sPKkcVRxVLCqjYlEZFWcVKlf+ACsDXHzWTZKcAAAAAElFTkSuQmCC",Ow="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADb0lEQVR4AbXB0UEj2Q4A0ZIfeV2RyYZSRDKEIkWm5bZxGwPDzH68c4Kr4avge8NdcDXcBd8bvorgamZ4EMEW3A1vZjhFcJjhFMFNcDczPIhgiyc+iOA0AxEM72Y4RHCa4RDBaYZDBMO7GYjgNMPpiU9mIILDDKcIDsopgoNyiuAwwxczEMGDJz6JgBmI4IHyhfKFcojggUIEXwR3M8Mhgv+LGQ4RbMGb/3H38vKCCi8vXM1Qz8+8/voFCko9P/P6+opKVaFSVahUFcyAUs/PvP76RT0/888///D6+opCBFvw7sIf5FpUN9XNlplsKpvKpqJCBNXNVt38yRM/qG62XIvqhgi2quKzzERly0yqilyLrbr5nQt3MwMRoJxyLT6qKtZarLVYa7HWYq1FVbHNcKgqqpsbhQiYYRveXfhBrkV1s2Um3+luPooAFZVci+rmJxeuZgYiQDlVN7kWH2UmN91NZtLd3KiobNVNrsWNQgTMsA1vLvxBdVPd3FQVEUF3k5lUFZlJZrKpqPytC//RWouZITOpKtZazAwzw6aiclPd/OTCVUTADChfZCZ/0t1sKirfUZiBCLbgzYW/pPJZZtLdfKSi8rcu/CWVrbvZqoqqIjPZ1lpsKip/68IPciU3Kltm0t1kJpnJzNDddDebisqWK9lyJb8TXM0MRIByUKgqciUEBxWVraq4yUw+UlGpKnIl1UVVsinMQARbPPGDXEl1kSQqKioqmcmNyqaiorLlSqqLXInFty78oLrIlWwqKioqW1VRVXykorJVF7mS6uJ3LlxFBMyAcsqVVBebioqKykeZyY2KikpmUl3kSjaFGYhgC9488YPqIleyqWwq28zwUVWxqaiobLmS6qJIvnPhLiJgBpRDrqS62FS2mWFm+ExlU1FR2aqLXInCDESwBe8u/KC6yExUVFQigu3l5YXPVFRUVFQyk+rid574QVWxqaioqEQEm8qNioqKiorKliv5nQt3M8ODzGRTUVFRUdlUNhUVFRUVFZWturiZYRveBVczAxEcFJQHyn+iPFBQDjMQwRZPfDIDETDDgwgOykk5KCflMMODCJiBCB488UkEpwhOMxwiOM1wiOA0wyGC0wyHCL4IrmaGBxFswd3wZoZTBIcZThHcBHczw4MItgiuhq+C7w13wdVwF3xv+Cr+BRdABSc9tkC9AAAAAElFTkSuQmCC";var jw=["variant"];function xs(){return xs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xs.apply(this,arguments)}function Mw(e,t){if(e==null)return{};var n=Lw(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Lw(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Bw={"32x32_1":{imageSrc:Rw,width:32,height:32},"32x32_4":{imageSrc:Ow,width:32,height:32}},Cd=function(t){var n=t.variant,r=n===void 0?"32x32_1":n,o=Mw(t,jw),i=Bw[r];return w.createElement(Gn,xs({width:i.width,height:i.height,src:i.imageSrc},o))};const zw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB4UlEQVR4Ae3B0XXbOhRE0QPZhdxOeEtRJxx0ktfJoBOoEoRIrPW4FEumY/3Fe/Ptn1c4QNJgR1LhSQoPSBpsMpM920ySCl9UeIekwWZdV1pr3GObeyQVDijckDTWdeVWa417bDNlJle2mSQVHnjljtYae8uyMLXWuJWZTLaZMpPMZJI02EgqvOOFG5mpzORyuZCZRAS9d0opXC4XlmUhIrhcLtyKCCIC2/TeiQgigoggImS7cuOVD0j8Ipm9ZVmYWmvcykymzMQ2tnkzgMLOKx9amaTKJJm9ZVmYWmtc2ebKNo+8ctjKJFUmyewty0Ktlc868RmDzQqsSCCBbabWGn/jxBGDP40VWJH4khNHFGDA4M0ACk9x4ogBFDYFBlB4mhNHFH4pDCg81YmHBFT+MHiaE++otTLZiZ1ABSoUfis8zYl3SMI2tpnsxE6gApW/IYlN4cYLN2xXoNqWbSKC3jsRwfkcnM/Bjx//AQ1IoHE+B1PvnT3bZCaS2BTeUfjYYCOJKTO5yjSTnUy22ZPEm8IdheMGG0lMmckt2+xJYlN44IXjKlBtyzYRQe+diOCq986ebTaVB174vApU27JNRNB7JyLovbNnm03lgcLXDTaSuJLEm8IHCs8z+F/h27eDfgKqnNo2O4t+RAAAAABJRU5ErkJggg==",Fw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABGElEQVR4AaXBgY3iMBRF0WugkN8JvxPSSV46gU6eOzGVeG1t0GYQGiHtOYUDSZ2dpMIXCoOkzpCZvNjmnaTCmyKpZybX65Wp1sqRbabMxDaTpMLunJmKCB6PB7VWbrcbEcHz+WSKCCIC20yZSUQoM2V7u7CTBAjYmNZ1Zaq1MmUmk20yE9sM/cIPK9LGXxvTuq5MtVZsIwlJvFx411coIDFsZFYm23xy4j+dOOpAATrQ+cqFowJ0oPC1EzvbwAZl4xuSGMrZtiKC1hpSsizB/f4AKtOyBFNrjck2thkKwxnYbMs2EUFrDSlZluB+byxLMLXWmGwzFHaFnzqDJKbM5MU2kySGwq7wWWeQxIskdoWDwu86/xQ++ANLz4O3R2zw2gAAAABJRU5ErkJggg==";var Uw=["variant"];function As(){return As=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},As.apply(this,arguments)}function Vw(e,t){if(e==null)return{};var n=Ww(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ww(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Qw={"32x32_4":{imageSrc:zw,width:32,height:32},"16x16_4":{imageSrc:Fw,width:16,height:16}},Hw=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=Vw(t,Uw),i=Qw[r];return w.createElement(Gn,As({width:i.width,height:i.height,src:i.imageSrc},o))};const Yw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABSUlEQVR4Ae3BWW7jRgAFwHqM7q3myeKbvXDUgrXQ8gJwkB9X+fXr/xbHqs/FkzhG/UxcLab6uZrq5+rqZK+IvSKoFwbOpriqacWws5hiqkc11ReKs0+cUTsnezHVa3GQxabUFI/iJqbYlDrA4kmpKW5SalNa6iCLTYhNqTulNqW+YUUQd4Jg9aGTJyE2pV4I8SS+MDDsLKbahLgT4irEJsRUB/jHNLCainVldbWyolhRDNOK4d3AvxhY/dEyBglvb+6tNosppnpUU32pOHvlfKa1c7IXU70WB1lctKZ4FDcxxUXrAIud1hQ3oXXR0jrIyUXiovWgJaH1LSuGe4mLMTif7ZzsJC5aLyV24jNjMIadxVQXiQeJd4mLxFQHONkrQuJdgiKoz8XH6gOLKaZ6VFN9LYjXgnhyshdTvRY38TPxTXVTv379Jf8BYpVofkAO9QEAAAAASUVORK5CYII=",Gw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAA20lEQVR4Ae3BUWLSQAAFwHnrwcmezN7sGVlMSQsq/toZX36Jf1ePxS4o4u/Vn2V4V8/VUjcb6qbY3OtAnNVSS31QXHxwQR1GqSWeixcNN6WWWGJJqReNEHdK7UrtSj0QxE0QTIeB2oV4IsSdeGJz+IYNE8WcTLvJtJtMFBObw4bvmFq2jYS3N1cDcVZLLfVJcfHR5eIwaC3xXLxoOLSWWGIJrRcNEietq9ZV66EgfkpImNNhoK4STyVO4pFtcwiKoIjHiqDO4l3dGYizWmqpz4I4C+I3aqml/gs/ADXIS11U7ywcAAAAAElFTkSuQmCC",Kw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAg0lEQVR4AaXBCW6DQAAEMM+q///ytIENh0AoVWzfis/UWUzxrJ5loO7VVAd11GFXq6KmulGbgdjVP41SqyAI4iAO4mSYSv0pLTXFjdiMEFOpW/XWOgktiata1CpeWovEYti0Fi2tDw0Sm9ateEucBEVc1Qd+7IqgruKsptjVVTyrb/0C6iwvBh7fl5sAAAAASUVORK5CYII=",Jw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAfElEQVR4AZ3BAU7DMAAEMF/4OHn5rbAqbVnRpNk+FRRxr17FZjjUU1HUvdrEoW4UsSliGaWegiB29Uctw67UptRJ7OIidqV28d4XLXNO5mROJr4txdQyp2VYWr9aS521lkFiab2IH4mLoIiremM41FNdBUGcxKGu4n/1qQfT3y4MKbs7RgAAAABJRU5ErkJggg==",Zw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAfElEQVR4AZ3B2VXDUBQEMN1QGZ2NO3udDY6z54QPkPzV+F29GrvxWX02JzRJ7ZIUtasnddPxUFd1Ma6KDeFUmqSYJM42jCfjblyV2o2bYpy1zDicaJN0mC1xUe8Sh3HXOgyK8Swh4QvNbq3vSSZrLWzereUwHurVeFX/8QM6qzUI/5TU2wAAAABJRU5ErkJggg==",Xw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAWUlEQVR4AZXBwRHCQBADMJnKt3NzuQyTAB+Q/Coo4lLfEqe6KWIpYnuUIoilPtQWS6klGIybwfCgDQmxjEMdWowtttYW1ClaW0JQxKkMxssMM8Sp3sWl/vEE5fwfAx6PBMQAAAAASUVORK5CYII=";var qw=["variant"];function ks(){return ks=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ks.apply(this,arguments)}function ex(e,t){if(e==null)return{};var n=tx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function tx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var nx={"32x32_4":{imageSrc:Yw,width:32,height:32},"22x22_4":{imageSrc:Gw,width:22,height:22},"16x16_4":{imageSrc:Kw,width:16,height:16},"14x14_4":{imageSrc:Jw,width:14,height:14},"12x12_4":{imageSrc:Zw,width:12,height:12},"10x10_4":{imageSrc:Xw,width:10,height:10}},rx=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=ex(t,qw),i=nx[r];return w.createElement(Gn,ks({width:i.width,height:i.height,src:i.imageSrc},o))};const ox="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACPklEQVR4AcXBUXKjMBBAwTdb3Iu5mZ5uZp1MK1iccjDGxPnYbv634BfEziAyBB8IPiR2BGQlsgl+IPiA2BGQJyKb4ILgh8SOgJwS2QQngh8QOwJymcgmOBBcJHYE5CMim+BBcIHYEZBnSil8qRVQXhHZBEPwhtgRkCelyys15IzIIjghdgTkSelyVytfSuFLDTkjMvGC2BGQZ8pdDfmmyBUiQ0wcEDsCckypAso3yhUid8GO2BGQa5RSeFJDjoioqAwx8UDsCMh7Sik8qRVQjoioZCZ3ExuxIyDvKaXwpVb+UV4RUclMHk0MYkdArlGqgLJSzoioZCZ7k9hFkJXIKaUUqBVQ3hFRyUyOTGxUFioLkSOlsCoFqrylkpm80P+wyUwyExUVEZG9WlnVyikRhMxkLzMRWUw8mOeZeZ5praGyUFmIrJQqp0RUMpO9zEREZIiJA/M8M88zrTVUFioLkTMiKpnJXmYiIjIEw8SJeZ6Z55nWGioLlYXInohKZrKXmYiIDMEmxM6drEopHGmtcbvdWKgsRBYiKpnJXmYiIjIED4J/OoPISlalFI601rjdbixUFiqZyV5mIiIyBDvBd51BZCWrUgpHWmvcbjcWmcleZiIiMgQHgmOdQWQlq1IKr7TWeJSZiIgMwQvBuc4gspJVKYW91hp3mYmIyBCcCK7pDCIrWZVSuGutschMRESG4I3gZzqDyEpWpRRaa2QmIiJDcEHwmc4gshJURESG4KLgdzqDyEJkCP6DDnQ+8BfgNQ/CBE+dhgAAAABJRU5ErkJggg==",ix="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVR4AZ3B0XXaUBBF0TOGQtyJbycqRUedUMpQ2ctTIiXAsvnI3rwjDmDwRvEDcSAgiByKF8U3xIGAPBE5FIfihTgQkB+JHKp4IA4E5Ld1yGnbAOUkMtUHB3EgIH8o2wZbyW5d+Uvk9MEkDgTkHyVp1iG7rWQnonK6igMBebIO2TboyElEJQmHcQnRlqYJ4XTfAh1OIipJ2H3ePmmaK5PKTmUn8khEJQm7TiMy1ZXDuq6cVHYiIipJ2HUakamYLk2bhKpiWRaSUFUkwRaVJOw6jchUHC7A1t3ebjeqiqpiWRaSUFUkYddpRKbiQfFsMKkk4evri/v9TqcRmYoXxfcGkwqCyFT8hwEM3vgFCkZ8J2TpitsAAAAASUVORK5CYII=";var lx=["variant"];function Ss(){return Ss=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ss.apply(this,arguments)}function ax(e,t){if(e==null)return{};var n=sx(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function sx(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var ux={"32x32_4":{imageSrc:ox,width:32,height:32},"16x16_4":{imageSrc:ix,width:16,height:16}},bs=function(t){var n=t.variant,r=n===void 0?"32x32_4":n,o=ax(t,lx),i=ux[r];return w.createElement(Gn,Ss({width:i.width,height:i.height,src:i.imageSrc},o))};const cx=3e3,dx=4e3,Lu=()=>{const{setComputerState:e}=v.useContext(jr),[t,n]=v.useState(!0),[r,o]=v.useState(!1),i=l=>{l.currentTarget.blur(),o(!0),setTimeout(()=>{n(!1)},cx),setTimeout(()=>{e("loading")},dx)};return E.jsx(fx,{children:t&&E.jsx(px,{children:E.jsxs(la,{children:[E.jsx(hx,{variant:"48x48_4"}),E.jsxs(mx,{children:[E.jsxs(la,{children:[E.jsx($d,{children:"Username"}),E.jsx(Zi,{value:"gatochico"})]}),E.jsxs(la,{children:[E.jsx($d,{children:"Password"}),E.jsx(Zi,{value:"password",type:"password"})]})]}),E.jsx(gx,{onClick:l=>i(l),children:r?E.jsx(Ou,{}):"ENTER"})]})})})};Lu.defaultProps={children:null};Lu.propTypes={children:me.node};const fx=x.div.withConfig({displayName:"StartView__Container",componentId:"sc-f93f8q-0"})(["display:flex;height:100%;"]),px=x.div.withConfig({displayName:"StartView__LoginContainer",componentId:"sc-f93f8q-1"})(["width:500px;margin:auto;"]),la=x.div.withConfig({displayName:"StartView__Row",componentId:"sc-f93f8q-2"})(["align-items:center;display:flex;flex-direction:row;gap:12px;justify-content:space-between;"]),$d=x.span.withConfig({displayName:"StartView__Text",componentId:"sc-f93f8q-3"})(["color:white;font-size:28px;"]),hx=x(Tw).withConfig({displayName:"StartView__LoginIcon",componentId:"sc-f93f8q-4"})([""]),mx=x.div.withConfig({displayName:"StartView__Inputs",componentId:"sc-f93f8q-5"})(["display:flex;flex-direction:column;gap:8px;"]),gx=x(xn).withConfig({displayName:"StartView__StyledButton",componentId:"sc-f93f8q-6"})(["min-width:70px;"]),vx=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,Bu=e=>{window.open(e,"_blank","noreferrer")},yx="/assets/w95Logo-NKy9pzx4.svg",wx=()=>{const{setComputerState:e}=v.useContext(jr),[t,n]=v.useState(0),[r,o]=v.useState(!1);return v.useEffect(()=>{setTimeout(()=>{o(!0)},1e3)},[]),v.useEffect(()=>{if(r){if(t===100){setTimeout(()=>{e("desktop")},500);return}setTimeout(()=>{n(i=>{const l=vx(10,20);return Math.floor(Math.min(i+l,100))})},500)}},[t,r,e]),E.jsx(xx,{children:E.jsxs(Ax,{children:[E.jsx(Sx,{src:yx,alt:"Logo"}),E.jsx(kx,{children:r&&E.jsx(bx,{value:t,variant:"tile"})})]})})},xx=x.div.withConfig({displayName:"LoadingView__Container",componentId:"sc-crpnmw-0"})(["display:flex;height:100%;"]),Ax=x.div.withConfig({displayName:"LoadingView__Content",componentId:"sc-crpnmw-1"})(["margin:auto;width:50%;"]),kx=x.div.withConfig({displayName:"LoadingView__ProgressContainer",componentId:"sc-crpnmw-2"})(["min-height:40px;width:95%;"]),Sx=x.img.withConfig({displayName:"LoadingView__StyledLogo",componentId:"sc-crpnmw-3"})(["margin:60px 0;width:100%;"]),bx=x(Nh).withConfig({displayName:"LoadingView__StyledProgressBar",componentId:"sc-crpnmw-4"})(["height:35px;margin:auto;"]);var Sl={exports:{}},Uh={};function Vh(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Vh(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Td(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Vh(e))&&(r&&(r+=" "),r+=t);return r}const Ex=Object.freeze(Object.defineProperty({__proto__:null,clsx:Td,default:Td},Symbol.toStringTag,{value:"Module"})),Cx=qh(Ex);var ve={},Rt={};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.dontSetMe=Nx;Rt.findInArray=$x;Rt.int=Dx;Rt.isFunction=Tx;Rt.isNum=Ix;function $x(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function Tx(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function Ix(e){return typeof e=="number"&&!isNaN(e)}function Dx(e){return parseInt(e,10)}function Nx(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))}var Kn={};Object.defineProperty(Kn,"__esModule",{value:!0});Kn.browserPrefixToKey=Qh;Kn.browserPrefixToStyle=_x;Kn.default=void 0;Kn.getPrefix=Wh;const aa=["Moz","Webkit","O","ms"];function Wh(){var e;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(e=window.document)===null||e===void 0||(e=e.documentElement)===null||e===void 0?void 0:e.style;if(!n||t in n)return"";for(let r=0;r<aa.length;r++)if(Qh(t,aa[r])in n)return aa[r];return""}function Qh(e,t){return t?"".concat(t).concat(Px(e)):e}function _x(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function Px(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]==="-"?n=!0:t+=e[r];return t}Kn.default=Wh();Object.defineProperty(ve,"__esModule",{value:!0});ve.addClassName=Gh;ve.addEvent=jx;ve.addUserSelectStyles=Yx;ve.createCSSTransform=Vx;ve.createSVGTransform=Wx;ve.getTouch=Qx;ve.getTouchIdentifier=Hx;ve.getTranslation=zu;ve.innerHeight=zx;ve.innerWidth=Fx;ve.matchesSelector=Yh;ve.matchesSelectorAndParentsTo=Ox;ve.offsetXYFromParent=Ux;ve.outerHeight=Lx;ve.outerWidth=Bx;ve.removeClassName=Kh;ve.removeEvent=Mx;ve.removeUserSelectStyles=Gx;var rt=Rt,Id=Rx(Kn);function Hh(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Hh=function(r){return r?n:t})(e)}function Rx(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Hh(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}let ri="";function Yh(e,t){return ri||(ri=(0,rt.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,rt.isFunction)(e[n])})),(0,rt.isFunction)(e[ri])?e[ri](t):!1}function Ox(e,t,n){let r=e;do{if(Yh(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function jx(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,o):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function Mx(e,t,n,r){if(!e)return;const o={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function Lx(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,rt.int)(n.borderTopWidth),t+=(0,rt.int)(n.borderBottomWidth),t}function Bx(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,rt.int)(n.borderLeftWidth),t+=(0,rt.int)(n.borderRightWidth),t}function zx(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,rt.int)(n.paddingTop),t-=(0,rt.int)(n.paddingBottom),t}function Fx(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,rt.int)(n.paddingLeft),t-=(0,rt.int)(n.paddingRight),t}function Ux(e,t,n){const o=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),i=(e.clientX+t.scrollLeft-o.left)/n,l=(e.clientY+t.scrollTop-o.top)/n;return{x:i,y:l}}function Vx(e,t){const n=zu(e,t,"px");return{[(0,Id.browserPrefixToKey)("transform",Id.default)]:n}}function Wx(e,t){return zu(e,t,"")}function zu(e,t,n){let{x:r,y:o}=e,i="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(t){const l="".concat(typeof t.x=="string"?t.x:t.x+n),a="".concat(typeof t.y=="string"?t.y:t.y+n);i="translate(".concat(l,", ").concat(a,")")+i}return i}function Qx(e,t){return e.targetTouches&&(0,rt.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,rt.findInArray)(e.changedTouches,n=>t===n.identifier)}function Hx(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function Yx(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&Gh(e.body,"react-draggable-transparent-selection")}function Gx(e){if(e)try{if(e.body&&Kh(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function Gh(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function Kh(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var Ot={};Object.defineProperty(Ot,"__esModule",{value:!0});Ot.canDragX=Zx;Ot.canDragY=Xx;Ot.createCoreData=eA;Ot.createDraggableData=tA;Ot.getBoundPosition=Kx;Ot.getControlPosition=qx;Ot.snapToGrid=Jx;var Xe=Rt,pr=ve;function Kx(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:r}=e.props;r=typeof r=="string"?r:nA(r);const o=Fu(e);if(typeof r=="string"){const{ownerDocument:i}=o,l=i.defaultView;let a;if(r==="parent"?a=o.parentNode:a=i.querySelector(r),!(a instanceof l.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');const s=a,c=l.getComputedStyle(o),h=l.getComputedStyle(s);r={left:-o.offsetLeft+(0,Xe.int)(h.paddingLeft)+(0,Xe.int)(c.marginLeft),top:-o.offsetTop+(0,Xe.int)(h.paddingTop)+(0,Xe.int)(c.marginTop),right:(0,pr.innerWidth)(s)-(0,pr.outerWidth)(o)-o.offsetLeft+(0,Xe.int)(h.paddingRight)-(0,Xe.int)(c.marginRight),bottom:(0,pr.innerHeight)(s)-(0,pr.outerHeight)(o)-o.offsetTop+(0,Xe.int)(h.paddingBottom)-(0,Xe.int)(c.marginBottom)}}return(0,Xe.isNum)(r.right)&&(t=Math.min(t,r.right)),(0,Xe.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,Xe.isNum)(r.left)&&(t=Math.max(t,r.left)),(0,Xe.isNum)(r.top)&&(n=Math.max(n,r.top)),[t,n]}function Jx(e,t,n){const r=Math.round(t/e[0])*e[0],o=Math.round(n/e[1])*e[1];return[r,o]}function Zx(e){return e.props.axis==="both"||e.props.axis==="x"}function Xx(e){return e.props.axis==="both"||e.props.axis==="y"}function qx(e,t,n){const r=typeof t=="number"?(0,pr.getTouch)(e,t):null;if(typeof t=="number"&&!r)return null;const o=Fu(n),i=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,pr.offsetXYFromParent)(r||e,i,n.props.scale)}function eA(e,t,n){const r=!(0,Xe.isNum)(e.lastX),o=Fu(e);return r?{node:o,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:o,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function tA(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function nA(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Fu(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var bl={},El={};Object.defineProperty(El,"__esModule",{value:!0});El.default=rA;function rA(){}Object.defineProperty(bl,"__esModule",{value:!0});bl.default=void 0;var sa=iA(v),Qe=Uu(me),oA=Uu(ml),Me=ve,Zt=Ot,ua=Rt,Hr=Uu(El);function Uu(e){return e&&e.__esModule?e:{default:e}}function Jh(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Jh=function(r){return r?n:t})(e)}function iA(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Jh(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function ze(e,t,n){return t=lA(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lA(e){var t=aA(e,"string");return typeof t=="symbol"?t:String(t)}function aA(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const gt={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let Xt=gt.mouse,Cl=class extends sa.Component{constructor(){super(...arguments),ze(this,"dragging",!1),ze(this,"lastX",NaN),ze(this,"lastY",NaN),ze(this,"touchIdentifier",null),ze(this,"mounted",!1),ze(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=n;if(this.props.disabled||!(t.target instanceof r.defaultView.Node)||this.props.handle&&!(0,Me.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,Me.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&t.preventDefault();const o=(0,Me.getTouchIdentifier)(t);this.touchIdentifier=o;const i=(0,Zt.getControlPosition)(t,o,this);if(i==null)return;const{x:l,y:a}=i,s=(0,Zt.createCoreData)(this,l,a);(0,Hr.default)("DraggableCore: handleDragStart: %j",s),(0,Hr.default)("calling",this.props.onStart),!(this.props.onStart(t,s)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,Me.addUserSelectStyles)(r),this.dragging=!0,this.lastX=l,this.lastY=a,(0,Me.addEvent)(r,Xt.move,this.handleDrag),(0,Me.addEvent)(r,Xt.stop,this.handleDragStop))}),ze(this,"handleDrag",t=>{const n=(0,Zt.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let a=r-this.lastX,s=o-this.lastY;if([a,s]=(0,Zt.snapToGrid)(this.props.grid,a,s),!a&&!s)return;r=this.lastX+a,o=this.lastY+s}const i=(0,Zt.createCoreData)(this,r,o);if((0,Hr.default)("DraggableCore: handleDrag: %j",i),this.props.onDrag(t,i)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const s=document.createEvent("MouseEvents");s.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(s)}return}this.lastX=r,this.lastY=o}),ze(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,Zt.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let s=r-this.lastX||0,c=o-this.lastY||0;[s,c]=(0,Zt.snapToGrid)(this.props.grid,s,c),r=this.lastX+s,o=this.lastY+c}const i=(0,Zt.createCoreData)(this,r,o);if(this.props.onStop(t,i)===!1||this.mounted===!1)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,Me.removeUserSelectStyles)(a.ownerDocument),(0,Hr.default)("DraggableCore: handleDragStop: %j",i),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,Hr.default)("DraggableCore: Removing handlers"),(0,Me.removeEvent)(a.ownerDocument,Xt.move,this.handleDrag),(0,Me.removeEvent)(a.ownerDocument,Xt.stop,this.handleDragStop))}),ze(this,"onMouseDown",t=>(Xt=gt.mouse,this.handleDragStart(t))),ze(this,"onMouseUp",t=>(Xt=gt.mouse,this.handleDragStop(t))),ze(this,"onTouchStart",t=>(Xt=gt.touch,this.handleDragStart(t))),ze(this,"onTouchEnd",t=>(Xt=gt.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,Me.addEvent)(t,gt.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,Me.removeEvent)(n,gt.mouse.move,this.handleDrag),(0,Me.removeEvent)(n,gt.touch.move,this.handleDrag),(0,Me.removeEvent)(n,gt.mouse.stop,this.handleDragStop),(0,Me.removeEvent)(n,gt.touch.stop,this.handleDragStop),(0,Me.removeEvent)(t,gt.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,Me.removeUserSelectStyles)(n)}}findDOMNode(){var t,n;return(t=this.props)!==null&&t!==void 0&&t.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:oA.default.findDOMNode(this)}render(){return sa.cloneElement(sa.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};bl.default=Cl;ze(Cl,"displayName","DraggableCore");ze(Cl,"propTypes",{allowAnyClick:Qe.default.bool,children:Qe.default.node.isRequired,disabled:Qe.default.bool,enableUserSelectHack:Qe.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:Qe.default.arrayOf(Qe.default.number),handle:Qe.default.string,cancel:Qe.default.string,nodeRef:Qe.default.object,onStart:Qe.default.func,onDrag:Qe.default.func,onStop:Qe.default.func,onMouseDown:Qe.default.func,scale:Qe.default.number,className:ua.dontSetMe,style:ua.dontSetMe,transform:ua.dontSetMe});ze(Cl,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return s.default}}),e.default=void 0;var t=m(v),n=h(me),r=h(ml),o=h(Cx),i=ve,l=Ot,a=Rt,s=h(bl),c=h(El);function h(u){return u&&u.__esModule?u:{default:u}}function p(u){if(typeof WeakMap!="function")return null;var d=new WeakMap,g=new WeakMap;return(p=function(y){return y?g:d})(u)}function m(u,d){if(!d&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var g=p(d);if(g&&g.has(u))return g.get(u);var y={},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var k in u)if(k!=="default"&&Object.prototype.hasOwnProperty.call(u,k)){var D=b?Object.getOwnPropertyDescriptor(u,k):null;D&&(D.get||D.set)?Object.defineProperty(y,k,D):y[k]=u[k]}return y.default=u,g&&g.set(u,y),y}function A(){return A=Object.assign?Object.assign.bind():function(u){for(var d=1;d<arguments.length;d++){var g=arguments[d];for(var y in g)Object.prototype.hasOwnProperty.call(g,y)&&(u[y]=g[y])}return u},A.apply(this,arguments)}function S(u,d,g){return d=C(d),d in u?Object.defineProperty(u,d,{value:g,enumerable:!0,configurable:!0,writable:!0}):u[d]=g,u}function C(u){var d=I(u,"string");return typeof d=="symbol"?d:String(d)}function I(u,d){if(typeof u!="object"||u===null)return u;var g=u[Symbol.toPrimitive];if(g!==void 0){var y=g.call(u,d||"default");if(typeof y!="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(u)}class f extends t.Component{static getDerivedStateFromProps(d,g){let{position:y}=d,{prevPropsPosition:b}=g;return y&&(!b||y.x!==b.x||y.y!==b.y)?((0,c.default)("Draggable: getDerivedStateFromProps %j",{position:y,prevPropsPosition:b}),{x:y.x,y:y.y,prevPropsPosition:{...y}}):null}constructor(d){super(d),S(this,"onDragStart",(g,y)=>{if((0,c.default)("Draggable: onDragStart: %j",y),this.props.onStart(g,(0,l.createDraggableData)(this,y))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),S(this,"onDrag",(g,y)=>{if(!this.state.dragging)return!1;(0,c.default)("Draggable: onDrag: %j",y);const b=(0,l.createDraggableData)(this,y),k={x:b.x,y:b.y,slackX:0,slackY:0};if(this.props.bounds){const{x:M,y:j}=k;k.x+=this.state.slackX,k.y+=this.state.slackY;const[G,Z]=(0,l.getBoundPosition)(this,k.x,k.y);k.x=G,k.y=Z,k.slackX=this.state.slackX+(M-k.x),k.slackY=this.state.slackY+(j-k.y),b.x=k.x,b.y=k.y,b.deltaX=k.x-this.state.x,b.deltaY=k.y-this.state.y}if(this.props.onDrag(g,b)===!1)return!1;this.setState(k)}),S(this,"onDragStop",(g,y)=>{if(!this.state.dragging||this.props.onStop(g,(0,l.createDraggableData)(this,y))===!1)return!1;(0,c.default)("Draggable: onDragStop: %j",y);const k={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:M,y:j}=this.props.position;k.x=M,k.y=j}this.setState(k)}),this.state={dragging:!1,dragged:!1,x:d.position?d.position.x:d.defaultPosition.x,y:d.position?d.position.y:d.defaultPosition.y,prevPropsPosition:{...d.position},slackX:0,slackY:0,isElementSVG:!1},d.position&&!(d.onDrag||d.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var d,g;return(d=(g=this.props)===null||g===void 0||(g=g.nodeRef)===null||g===void 0?void 0:g.current)!==null&&d!==void 0?d:r.default.findDOMNode(this)}render(){const{axis:d,bounds:g,children:y,defaultPosition:b,defaultClassName:k,defaultClassNameDragging:D,defaultClassNameDragged:M,position:j,positionOffset:G,scale:Z,...le}=this.props;let ne={},ee=null;const pe=!!!j||this.state.dragging,$=j||b,P={x:(0,l.canDragX)(this)&&pe?this.state.x:$.x,y:(0,l.canDragY)(this)&&pe?this.state.y:$.y};this.state.isElementSVG?ee=(0,i.createSVGTransform)(P,G):ne=(0,i.createCSSTransform)(P,G);const O=(0,o.default)(y.props.className||"",k,{[D]:this.state.dragging,[M]:this.state.dragged});return t.createElement(s.default,A({},le,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(y),{className:O,style:{...y.props.style,...ne},transform:ee}))}}e.default=f,S(f,"displayName","Draggable"),S(f,"propTypes",{...s.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:a.dontSetMe,style:a.dontSetMe,transform:a.dontSetMe}),S(f,"defaultProps",{...s.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(Uh);const{default:Zh,DraggableCore:sA}=Uh;Sl.exports=Zh;Sl.exports.default=Zh;Sl.exports.DraggableCore=sA;var uA=Sl.exports;const cA=Es(uA),Vu=({content:e,title:t,height:n,width:r,onHide:o,onClose:i,positioning:l})=>{const a=v.useRef(null);return E.jsx(cA,{handle:".handle",bounds:"parent",nodeRef:a,children:E.jsxs(mA,{ref:a,$height:n,$width:r,$positioning:l,children:[E.jsxs(gA,{className:"handle",children:[E.jsx(hA,{children:t}),E.jsxs(dA,{children:[E.jsx(xn,{onClick:o,children:E.jsx(pA,{})}),E.jsx(xn,{onClick:i,children:E.jsx(fA,{})})]})]}),E.jsx(Nu,{children:e})]})})};Vu.defaultProps={content:E.jsx("div",{}),className:!0,onClose:()=>{},onHide:()=>{},title:"",height:"300px",width:"300px",positioning:{}};Vu.propTypes={content:me.node,onClose:me.func,onHide:me.func,title:me.string,height:me.string,width:me.string,positioning:me.shape({top:me.string,right:me.string}).isRequired};const dA=x.div.withConfig({displayName:"CustomWindow__Buttons",componentId:"sc-1y42uis-0"})(["display:flex;gap:2px;"]),fA=x.div.withConfig({displayName:"CustomWindow__CloseIcon",componentId:"sc-1y42uis-1"})(["display:inline-block;width:16px;height:16px;margin-left:-1px;margin-top:-1px;transform:rotateZ(45deg);position:relative;&:before,&:after{content:'';position:absolute;background:",";}&:before{height:100%;width:3px;left:50%;transform:translateX(-50%);}&:after{height:3px;width:100%;left:0px;top:50%;transform:translateY(-50%);}"],({theme:e})=>e.materialText),pA=x.div.withConfig({displayName:"CustomWindow__HideIcon",componentId:"sc-1y42uis-2"})(["display:inline-block;width:16px;height:16px;margin-left:-1px;margin-top:-1px;transform:rotateZ(0deg);position:relative;&:before,&:after{content:'';position:absolute;background:",";}&:after{bottom:0;height:3px;width:100%;left:0px;}"],({theme:e})=>e.materialText),hA=x.span.withConfig({displayName:"CustomWindow__StyledSpan",componentId:"sc-1y42uis-3"})(["cursor:default;"]),mA=x(Pu).withConfig({displayName:"CustomWindow__StyledWindow",componentId:"sc-1y42uis-4"})(["height:",";position:absolute;width:",";top:",";right:",";left:",";bottom:",";"],({$height:e})=>e,({$width:e})=>e,({$positioning:e})=>e==null?void 0:e.top,({$positioning:e})=>e==null?void 0:e.right,({$positioning:e})=>e==null?void 0:e.left,({$positioning:e})=>e==null?void 0:e.bottom),gA=x(_u).withConfig({displayName:"CustomWindow__WindowTitle",componentId:"sc-1y42uis-5"})(["display:flex;align-items:center;justify-content:space-between;"]),Xh=({setDesktopOn:e})=>{const{setComputerState:t}=v.useContext(jr),n=v.useRef(void 0),[r,o]=v.useState(!1),i=s=>{o(s),s?document.addEventListener("mousedown",l):document.removeEventListener("mousedown",l)},l=({target:s})=>{n.current.contains(s)||i(!1)},a=()=>{setTimeout(()=>{e(!1),setTimeout(()=>{t("off")},1e3)},1e3)};return E.jsxs(kA,{ref:n,children:[E.jsx(AA,{$isOpen:r,children:r&&E.jsxs(yA,{children:[E.jsx(EA,{children:E.jsxs(xA,{children:[E.jsx(vA,{children:"Windows"}),E.jsx(wA,{children:"95"})]})}),E.jsx(Ji,{orientation:"vertical",size:"120px"}),E.jsxs(bA,{onClick:()=>i(!1),children:[E.jsxs(Dd,{children:[E.jsx(bs,{variant:"32x32_4",onClick:()=>Bu("https://github.com/gatochico")}),"Github"]}),E.jsx(Ji,{}),E.jsxs(Dd,{onClick:()=>a(),children:[E.jsx(Hw,{variant:"32x32_4"}),"Sh̲ut Down..."]})]})]})}),E.jsxs(SA,{onClick:()=>i(!r),active:r,children:[E.jsx(rx,{variant:"22x22_4"}),"Start"]})]})};Xh.propTypes={setDesktopOn:me.func.isRequired};const vA=x.span.withConfig({displayName:"StartMenu__BoldSpan",componentId:"sc-14vasd-0"})(["color:#bdbdbd;font-size:18px;font-weight:bold;"]),yA=x(mh).withConfig({displayName:"StartMenu__MenuContainer",componentId:"sc-14vasd-1"})(["display:flex;"]),wA=x.span.withConfig({displayName:"StartMenu__NormalSpan",componentId:"sc-14vasd-2"})(["font-size:20px;color:#ffff;"]),xA=x.div.withConfig({displayName:"StartMenu__Rotated",componentId:"sc-14vasd-3"})(["transform:rotate(-90deg);"]),AA=x.div.withConfig({displayName:"StartMenu__SlidingDiv",componentId:"sc-14vasd-4"})(["bottom:36px;max-height:",";overflow:hidden;position:absolute;"],({$isOpen:e})=>e?"200px":0),kA=x.div.withConfig({displayName:"StartMenu__Start",componentId:"sc-14vasd-5"})(["position:relative;width:100%;padding-right:12px;"]),SA=x(xn).withConfig({displayName:"StartMenu__StyledButton",componentId:"sc-14vasd-6"})(["font-weight:bold;gap:4px;height:30px;"]),bA=x.div.withConfig({displayName:"StartMenu__StyledMenuList",componentId:"sc-14vasd-7"})(["display:flex;flex-direction:column;justify-content:flex-end;width:150px;"]),Dd=x(hh).withConfig({displayName:"StartMenu__StyledMenuListItem",componentId:"sc-14vasd-8"})(["cursor:pointer !important;"]),EA=x.div.withConfig({displayName:"StartMenu__WindowsContainer",componentId:"sc-14vasd-9"})(["align-items:center;background-color:#808080;color:white;display:flex;justify-content:center;padding:0px 0px;user-select:none;width:40px;"]),CA=15e3,$A=()=>{const[e,t]=v.useState(new Date);return v.useEffect(()=>{const n=setInterval(()=>{t(new Date)},CA);return()=>{clearInterval(n)}},[]),E.jsx(TA,{variant:"well",children:e.toTimeString().split(" ")[0].slice(0,-3)})},TA=x(Ru).withConfig({displayName:"Time__StyledFrame",componentId:"sc-1imrp1a-0"})(["align-items:center;display:flex;height:30px;justify-content:center;margin-right:2px;padding:0 4px;"]),Wu=({className:e,setDesktopOn:t,activeIcons:n,onToggleIcon:r})=>E.jsx(DA,{className:e,children:E.jsx(_A,{children:E.jsxs(PA,{children:[E.jsxs(IA,{children:[E.jsx(Xh,{setDesktopOn:t}),n.map(o=>E.jsx(NA,{onClick:()=>r(o.id),variant:o.active?"status":"",children:o.icon},o.id))]}),E.jsx($A,{})]})})});Wu.defaultProps={className:"",activeIcons:[]};Wu.propTypes={className:me.string,setDesktopOn:me.func.isRequired,activeIcons:me.arrayOf(me.shape({id:me.string,icon:me.node})),onToggleIcon:me.func.isRequired};const IA=x.div.withConfig({displayName:"NavBar__LeftSide",componentId:"sc-11qa408-0"})(["display:flex;flex-direction:row;"]),DA=x(ph).withConfig({displayName:"NavBar__StyledAppBar",componentId:"sc-11qa408-1"})(["z-index:100;height:40px;justify-content:center;padding-top:2px;"]),NA=x(Ru).withConfig({displayName:"NavBar__StyledFrame",componentId:"sc-11qa408-2"})(["height:30px;width:30px;margin-right:8px;cursor:pointer;"]),_A=x(Xi).withConfig({displayName:"NavBar__StyledToolbar",componentId:"sc-11qa408-3"})(["justify-content:space-between;height:40px;"]),PA=x.div.withConfig({displayName:"NavBar__ToolbarItems",componentId:"sc-11qa408-4"})(["display:flex;justify-content:space-between;position:relative;width:100%;"]),RA="/assets/portrait-da0xl1mq.png",OA=[{value:0,name:"Interests 😎"},{value:1,name:"Stack 💻"},{value:2,name:"Fun facts 🌈"}],jA=()=>{const[e,t]=v.useState(0),n=(r,o)=>{t(r)};return E.jsxs(MA,{children:[E.jsxs(oi,{children:[E.jsx(LA,{src:RA,onClick:()=>Bu("https://picrew.me/en/image_maker/112842")}),E.jsxs(Yr,{children:[E.jsx(BA,{children:E.jsx(qt,{children:"About me"})}),E.jsxs(He,{children:["I'm ",E.jsx(qt,{children:"Fran"})," or gatochico (it means small cat!), a software engineer from ",E.jsx(qt,{children:"Santiago, Chile"}),"."]}),E.jsxs(He,{children:["I have a ",E.jsx(qt,{children:"Bachelor's degree in Computer Science"})," from the Pontifical Catholic University of Chile, and am currently working on getting my ",E.jsx(qt,{children:"Master's"})," on that same field."]}),E.jsxs(He,{children:["I'm also currently working as a ",E.jsx(qt,{children:"full stack web developer"})," and as a ",E.jsx(qt,{children:"teacher"})," for an introductory CS course at the university since this last semester."]})]})]}),E.jsx(jh,{value:e,onChange:n,children:OA.map(r=>E.jsx(Rh,{value:r.value,children:E.jsx(Yr,{children:E.jsx(qt,{children:r.name})})},r.value))}),E.jsxs(Oh,{children:[e===0&&E.jsx(oi,{children:E.jsxs(Yr,{children:[E.jsx(He,{children:"• Data processing and visualization"}),E.jsx(He,{children:"• Web development (especially Frontend)"}),E.jsx(He,{children:"• UX/UI design"}),E.jsx(He,{children:"• Teaching 👩‍🏫"})]})}),e===1&&E.jsx(oi,{children:E.jsxs(Yr,{children:[E.jsx(He,{children:"• Python"}),E.jsx(Nd,{children:"• Assorted Web development and Data science libraries"}),E.jsx(He,{children:"• Javascript"}),E.jsx(Nd,{children:"• Node, React, Vue."}),E.jsx(He,{children:"• Ruby on Rails for web development"})]})}),e===2&&E.jsx("div",{children:E.jsx(oi,{children:E.jsxs(Yr,{children:[E.jsx(He,{children:'• I have a really cute cat (check him out on "My cat")'}),E.jsx(He,{children:"• My hobbies are everything art related (drawing, painting, crafts, etc)🎨"}),E.jsx(He,{children:"• Avid concert goer"}),E.jsx(He,{children:"• Big fan of writing weird reviews on Letterboxd."})]})})})]})]})},Yr=x.div.withConfig({displayName:"About__Text",componentId:"sc-pj2oxi-0"})(["font-size:18px;flex:4;"]),qt=x.span.withConfig({displayName:"About__Bold",componentId:"sc-pj2oxi-1"})(["font-weight:bold;"]),MA=x.div.withConfig({displayName:"About__Container",componentId:"sc-pj2oxi-2"})(["display:flex;height:100%;flex-direction:column;"]),oi=x.div.withConfig({displayName:"About__Row",componentId:"sc-pj2oxi-3"})(["display:flex;flex-direction:row;width:100%;margin-bottom:12px;"]),LA=x.img.withConfig({displayName:"About__StyledImg",componentId:"sc-pj2oxi-4"})(["width:45%;display:flex;cursor:pointer;flex:3;"]),He=x.p.withConfig({displayName:"About__StyledP",componentId:"sc-pj2oxi-5"})(["margin-bottom:4px;"]),Nd=x.p.withConfig({displayName:"About__StyledPaddedP",componentId:"sc-pj2oxi-6"})(["margin-bottom:4px;margin-left:16px;"]),BA=x.span.withConfig({displayName:"About__Title",componentId:"sc-pj2oxi-7"})(["font-size:22px;text-decoration:underline;"]),zA="/assets/cat-RPu76yLU.jpg",FA=()=>E.jsxs(UA,{children:[E.jsx(VA,{src:zA}),E.jsx("div",{children:"His name is Cachirulo."})]}),UA=x.div.withConfig({displayName:"Cat__Container",componentId:"sc-1yeo3ku-0"})(["align-items:center;display:flex;justify-content:center;height:100%;flex-direction:column;font-size:18px;"]),VA=x.img.withConfig({displayName:"Cat__StyledImg",componentId:"sc-1yeo3ku-1"})(["max-width:100%;display:flex;"]),WA=()=>E.jsxs(QA,{children:[E.jsx("div",{children:"Work in progress!"}),E.jsx(Ou,{size:64,style:{margin:20}})]}),QA=x.div.withConfig({displayName:"Projects__Container",componentId:"sc-16qzf1n-0"})(["display:flex;height:100%;font-weight:bold;justify-content:center;align-items:center;flex-direction:column;"]),HA=[{id:"About",title:"Welcome to my page! ✨",open:!0,active:!0,desktopIcon:E.jsx(Cd,{variant:"32x32_4",height:32,width:32}),icon:E.jsx(Cd,{variant:"32x32_4",height:25,width:25}),content:E.jsx(jA,{}),dimensions:{height:"650px",width:"750px"},positioning:{top:"10px",right:"10px"}},{id:"Github",title:"My Github Profile",link:!0,desktopIcon:E.jsx(bs,{variant:"32x32_4",height:32,width:32}),icon:E.jsx(bs,{variant:"32x32_4",height:25,width:25}),onClick:()=>Bu("https://github.com/gatochico")},{id:"Projects",title:"Some of my projects 🔧",open:!1,active:!1,desktopIcon:E.jsx(Ed,{variant:"32x32_4",height:32,width:32}),icon:E.jsx(Ed,{variant:"32x32_4",height:25,width:25}),content:E.jsx(WA,{}),dimensions:{height:"200px",width:"400px"},positioning:{top:"5%",right:"50%"}},{id:"My Cat",title:"Look at my cat! 🐱",open:!1,active:!1,desktopIcon:E.jsx(bd,{variant:"32x32_4",height:32,width:32}),icon:E.jsx(bd,{variant:"32x32_4",height:25,width:25}),content:E.jsx(FA,{}),dimensions:{height:"600",width:"600px"},positioning:{top:"10%",left:"25%"}}],YA=()=>{const[e,t]=v.useState([]),[n,r]=v.useState(!0);v.useEffect(()=>{t(HA)},[]);const o=v.useMemo(()=>e.filter(s=>s.open&&!s.link).map(s=>({id:s.id,icon:s.icon,active:s.active})),[e]),i=s=>{const c=e.map(h=>({...h,open:h.id===s?!1:h.open,active:h.id===s?!1:h.active}));t(c)},l=s=>{const c=e.map(h=>({...h,open:h.id===s?!0:h.open,active:h.id===s?!0:h.active}));t(c)},a=s=>{const c=e.map(h=>({...h,active:h.id===s?!h.active:h.active}));t(c)};return E.jsx(GA,{children:n&&E.jsxs(E.Fragment,{children:[E.jsx(ZA,{setDesktopOn:r,activeIcons:o,onToggleIcon:a}),e.filter(s=>s.open&&s.active&&!s.link).map(s=>E.jsx(Vu,{title:s.title,content:s.content,width:s.dimensions.width,height:s.dimensions.height,positioning:s.positioning,onClose:()=>i(s.id),onHide:()=>a(s.id)},s.id)),E.jsx(XA,{children:e.map(s=>E.jsxs(KA,{onClick:()=>s.link?s.onClick():l(s.id),children:[s.desktopIcon,E.jsx(JA,{children:s.id})]},s.id))})]})})},GA=x.div.withConfig({displayName:"DesktopView__Container",componentId:"sc-18yrs2u-0"})(["display:flex;height:100%;position:relative;"]),KA=x.div.withConfig({displayName:"DesktopView__DesktopIcon",componentId:"sc-18yrs2u-1"})(["display:flex;flex-direction:column;gap:4px;font-size:18px;align-items:center;cursor:pointer;"]),JA=x.div.withConfig({displayName:"DesktopView__IconLabel",componentId:"sc-18yrs2u-2"})(["color:white;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;"]),ZA=x(Wu).withConfig({displayName:"DesktopView__StyledNavBar",componentId:"sc-18yrs2u-3"})(["border-radius:0 0 8px 8px;border-right-style:hidden;bottom:0;position:absolute;top:auto;"]),XA=x.div.withConfig({displayName:"DesktopView__Windows",componentId:"sc-18yrs2u-4"})(["display:flex;height:calc(100% - 40px);padding:12px;box-sizing:border-box;flex-direction:column;gap:12px;flex-wrap:wrap"]),qA=()=>{const{computerState:e}=v.useContext(jr);return E.jsxs(E.Fragment,{children:[e==="off"&&E.jsx(Lu,{}),e==="loading"&&E.jsx(wx,{}),e==="desktop"&&E.jsx(YA,{})]})};var ek={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"},tk=ek;const nk=Es(tk),rk="/assets/ms_sans_serif-7vK4zdaj.woff2",ok="/assets/ms_sans_serif_bold--XaUURxl.woff2",ik=Cv([""," @font-face{font-family:'ms_sans_serif';src:url('","') format('woff2');font-weight:400;font-style:normal}@font-face{font-family:'ms_sans_serif';src:url('","') format('woff2');font-weight:bold;font-style:normal}body,input,select,textarea{font-family:'ms_sans_serif';}html,body{background-color:black;height:100%;margin:0;width:100%;}"],Iv,rk,ok),lk=()=>E.jsxs(E.Fragment,{children:[E.jsx(ik,{}),E.jsx(ju,{children:E.jsx(Sv,{theme:{...nk,...Tv},children:E.jsx(Mu,{children:E.jsx(qA,{})})})})]});ca.createRoot(document.getElementById("root")).render(E.jsx(w.StrictMode,{children:E.jsx(lk,{})}));
