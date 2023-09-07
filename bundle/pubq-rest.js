!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["PUBQ JavaScript SDK"]=t():e["PUBQ JavaScript SDK"]=t()}(this,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e,t){return function(){return e.apply(t,arguments)}}e.r(t),e.d(t,{REST:()=>Le});const{toString:r}=Object.prototype,{getPrototypeOf:o}=Object,i=(s=Object.create(null),e=>{const t=r.call(e);return s[t]||(s[t]=t.slice(8,-1).toLowerCase())});var s;const a=e=>(e=e.toLowerCase(),t=>i(t)===e),c=e=>t=>typeof t===e,{isArray:u}=Array,l=c("undefined"),f=a("ArrayBuffer"),d=c("string"),p=c("function"),h=c("number"),m=e=>null!==e&&"object"==typeof e,y=e=>{if("object"!==i(e))return!1;const t=o(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},g=a("Date"),b=a("File"),w=a("Blob"),E=a("FileList"),O=a("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),u(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function R(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,T=e=>!l(e)&&e!==A,v=(j="undefined"!=typeof Uint8Array&&o(Uint8Array),e=>j&&e instanceof j);var j;const N=a("HTMLFormElement"),P=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),x=a("RegExp"),C=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};S(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},U="abcdefghijklmnopqrstuvwxyz",_="0123456789",B={DIGIT:_,ALPHA:U,ALPHA_DIGIT:U+U.toUpperCase()+_},F=a("AsyncFunction"),D={isArray:u,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&p(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||p(e.append)&&("formdata"===(t=i(e))||"object"===t&&p(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t},isString:d,isNumber:h,isBoolean:e=>!0===e||!1===e,isObject:m,isPlainObject:y,isUndefined:l,isDate:g,isFile:b,isBlob:w,isRegExp:x,isFunction:p,isStream:e=>m(e)&&p(e.pipe),isURLSearchParams:O,isTypedArray:v,isFileList:E,forEach:S,merge:function e(){const{caseless:t}=T(this)&&this||{},n={},r=(r,o)=>{const i=t&&R(n,o)||o;y(n[i])&&y(r)?n[i]=e(n[i],r):y(r)?n[i]=e({},r):u(r)?n[i]=r.slice():n[i]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],r);return n},extend:(e,t,r,{allOwnKeys:o}={})=>(S(t,((t,o)=>{r&&p(t)?e[o]=n(t,r):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,a;const c={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)a=i[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:a,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!h(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:N,hasOwnProperty:P,hasOwnProp:P,reduceDescriptors:C,freezeMethods:e=>{C(e,((t,n)=>{if(p(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];p(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:R,global:A,isContextDefined:T,ALPHABET:B,generateString:(e=16,t=B.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&p(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(m(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=u(e)?[]:{};return S(e,((e,t)=>{const i=n(e,r+1);!l(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:F,isThenable:e=>e&&(m(e)||p(e))&&p(e.then)&&p(e.catch)};function L(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}D.inherits(L,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const k=L.prototype,q={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{q[e]={value:e}})),Object.defineProperties(L,q),Object.defineProperty(k,"isAxiosError",{value:!0}),L.from=(e,t,n,r,o,i)=>{const s=Object.create(k);return D.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),L.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const I=L;function M(e){return D.isPlainObject(e)||D.isArray(e)}function z(e){return D.endsWith(e,"[]")?e.slice(0,-2):e}function H(e,t,n){return e?e.concat(t).map((function(e,t){return e=z(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const J=D.toFlatObject(D,{},null,(function(e){return/^is[A-Z]/.test(e)})),K=function(e,t,n){if(!D.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!D.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,i=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&D.isSpecCompliantForm(t);if(!D.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(D.isDate(e))return e.toISOString();if(!a&&D.isBlob(e))throw new I("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(e)||D.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(D.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(D.isArray(e)&&function(e){return D.isArray(e)&&!e.some(M)}(e)||(D.isFileList(e)||D.endsWith(n,"[]"))&&(a=D.toArray(e)))return n=z(n),a.forEach((function(e,r){!D.isUndefined(e)&&null!==e&&t.append(!0===s?H([n],r,i):null===s?n:n+"[]",c(e))})),!1;return!!M(e)||(t.append(H(o,n,i),c(e)),!1)}const l=[],f=Object.assign(J,{defaultVisitor:u,convertValue:c,isVisitable:M});if(!D.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!D.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),D.forEach(n,(function(n,i){!0===(!(D.isUndefined(n)||null===n)&&o.call(t,n,D.isString(i)?i.trim():i,r,f))&&e(n,r?r.concat(i):[i])})),l.pop()}}(e),t};function W(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function V(e,t){this._pairs=[],e&&K(e,this,t)}const $=V.prototype;$.append=function(e,t){this._pairs.push([e,t])},$.toString=function(e){const t=e?function(t){return e.call(this,t,W)}:W;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const G=V;function Q(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function X(e,t,n){if(!t)return e;const r=n&&n.encode||Q,o=n&&n.serialize;let i;if(i=o?o(t,n):D.isURLSearchParams(t)?t.toString():new G(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const Z=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Y={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ee={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:G,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]},te=function(e){function t(e,n,r,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;return i=!i&&D.isArray(r)?r.length:i,a?(D.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s):(r[i]&&D.isObject(r[i])||(r[i]=[]),t(e,n,r[i],o)&&D.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!s)}if(D.isFormData(e)&&D.isFunction(e.entries)){const n={};return D.forEachEntry(e,((e,r)=>{t(function(e){return D.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null},ne={transitional:Y,adapter:ee.isNode?"http":"xhr",transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=D.isObject(e);if(o&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return r&&r?JSON.stringify(te(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return K(e,new ee.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return ee.isNode&&D.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=D.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return K(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(D.isString(e))try{return(0,JSON.parse)(e),D.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ne.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&D.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw I.from(e,I.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ee.classes.FormData,Blob:ee.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],(e=>{ne.headers[e]={}}));const re=ne,oe=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ie=Symbol("internals");function se(e){return e&&String(e).trim().toLowerCase()}function ae(e){return!1===e||null==e?e:D.isArray(e)?e.map(ae):String(e)}function ce(e,t,n,r,o){return D.isFunction(r)?r.call(this,t,n):(o&&(t=n),D.isString(t)?D.isString(r)?-1!==t.indexOf(r):D.isRegExp(r)?r.test(t):void 0:void 0)}class ue{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=se(t);if(!o)throw new Error("header name must be a non-empty string");const i=D.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=ae(e))}const i=(e,t)=>D.forEach(e,((e,n)=>o(e,n,t)));return D.isPlainObject(e)||e instanceof this.constructor?i(e,t):D.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&oe[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=se(e)){const n=D.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(D.isFunction(t))return t.call(this,e,n);if(D.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=se(e)){const n=D.findKey(this,e);return!(!n||void 0===this[n]||t&&!ce(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=se(e)){const o=D.findKey(n,e);!o||t&&!ce(0,n[o],o,t)||(delete n[o],r=!0)}}return D.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!ce(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return D.forEach(this,((r,o)=>{const i=D.findKey(n,o);if(i)return t[i]=ae(r),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete t[o],t[s]=ae(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return D.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&D.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[ie]=this[ie]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=se(e);t[r]||(function(e,t){const n=D.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return D.isArray(e)?e.forEach(r):r(e),this}}ue.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),D.reduceDescriptors(ue.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),D.freezeMethods(ue);const le=ue;function fe(e,t){const n=this||re,r=t||n,o=le.from(r.headers);let i=r.data;return D.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function de(e){return!(!e||!e.__CANCEL__)}function pe(e,t,n){I.call(this,null==e?"canceled":e,I.ERR_CANCELED,t,n),this.name="CanceledError"}D.inherits(pe,I,{__CANCEL__:!0});const he=pe,me=ee.isStandardBrowserEnv?{write:function(e,t,n,r,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),D.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),D.isString(r)&&s.push("path="+r),D.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function ye(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const ge=ee.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=D.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function be(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,f=0;for(;l!==i;)f+=n[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a);n=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const we={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=le.from(e.headers).normalize(),i=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}D.isFormData(r)&&(ee.isStandardBrowserEnv||ee.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=ye(e.baseURL,e.url);function l(){if(!c)return;const r=le.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new I("Request failed with status code "+n.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),X(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new I("Request aborted",I.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new I("Network Error",I.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Y;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new I(t,r.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,e,c)),c=null},ee.isStandardBrowserEnv){const t=(e.withCredentials||ge(u))&&e.xsrfCookieName&&me.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&D.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),D.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",be(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",be(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new he(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===ee.protocols.indexOf(f)?n(new I("Unsupported protocol "+f+":",I.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};D.forEach(we,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const Ee={getAdapter:e=>{e=D.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=D.isString(n)?we[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new I(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(D.hasOwnProp(we,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!D.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:we};function Oe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new he(null,e)}function Se(e){return Oe(e),e.headers=le.from(e.headers),e.data=fe.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ee.getAdapter(e.adapter||re.adapter)(e).then((function(t){return Oe(e),t.data=fe.call(e,e.transformResponse,t),t.headers=le.from(t.headers),t}),(function(t){return de(t)||(Oe(e),t&&t.response&&(t.response.data=fe.call(e,e.transformResponse,t.response),t.response.headers=le.from(t.response.headers))),Promise.reject(t)}))}const Re=e=>e instanceof le?e.toJSON():e;function Ae(e,t){t=t||{};const n={};function r(e,t,n){return D.isPlainObject(e)&&D.isPlainObject(t)?D.merge.call({caseless:n},e,t):D.isPlainObject(t)?D.merge({},t):D.isArray(t)?t.slice():t}function o(e,t,n){return D.isUndefined(t)?D.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!D.isUndefined(t))return r(void 0,t)}function s(e,t){return D.isUndefined(t)?D.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(Re(e),Re(t),!0)};return D.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);D.isUndefined(s)&&i!==a||(n[r]=s)})),n}const Te={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Te[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const ve={};Te.transitional=function(e,t,n){function r(e,t){return"[Axios v1.5.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new I(r(o," has been removed"+(t?" in "+t:"")),I.ERR_DEPRECATED);return t&&!ve[o]&&(ve[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};const je={assertOptions:function(e,t,n){if("object"!=typeof e)throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new I("option "+i+" must be "+n,I.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new I("Unknown option "+i,I.ERR_BAD_OPTION)}},validators:Te},Ne=je.validators;class Pe{constructor(e){this.defaults=e,this.interceptors={request:new Z,response:new Z}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ae(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&je.assertOptions(n,{silentJSONParsing:Ne.transitional(Ne.boolean),forcedJSONParsing:Ne.transitional(Ne.boolean),clarifyTimeoutError:Ne.transitional(Ne.boolean)},!1),null!=r&&(D.isFunction(r)?t.paramsSerializer={serialize:r}:je.assertOptions(r,{encode:Ne.function,serialize:Ne.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&D.merge(o.common,o[t.method]);o&&D.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=le.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Se.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=s.length;let d=t;for(f=0;f<l;){const e=s[f++],t=s[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=Se.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return X(ye((e=Ae(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}D.forEach(["delete","get","head","options"],(function(e){Pe.prototype[e]=function(t,n){return this.request(Ae(n||{},{method:e,url:t,data:(n||{}).data}))}})),D.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ae(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Pe.prototype[e]=t(),Pe.prototype[e+"Form"]=t(!0)}));const xe=Pe;class Ce{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new he(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ce((function(t){e=t})),cancel:e}}}const Ue=Ce,_e={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(_e).forEach((([e,t])=>{_e[t]=e}));const Be=_e,Fe=function e(t){const r=new xe(t),o=n(xe.prototype.request,r);return D.extend(o,xe.prototype,r,{allOwnKeys:!0}),D.extend(o,r,null,{allOwnKeys:!0}),o.create=function(n){return e(Ae(t,n))},o}(re);Fe.Axios=xe,Fe.CanceledError=he,Fe.CancelToken=Ue,Fe.isCancel=de,Fe.VERSION="1.5.0",Fe.toFormData=K,Fe.AxiosError=I,Fe.Cancel=Fe.CanceledError,Fe.all=function(e){return Promise.all(e)},Fe.spread=function(e){return function(t){return e.apply(null,t)}},Fe.isAxiosError=function(e){return D.isObject(e)&&!0===e.isAxiosError},Fe.mergeConfig=Ae,Fe.AxiosHeaders=le,Fe.formToJSON=e=>te(D.isHTMLForm(e)?new FormData(e):e),Fe.getAdapter=Ee.getAdapter,Fe.HttpStatusCode=Be,Fe.default=Fe;const De=Fe;class Le{constructor(e){this.applicationKey=e,this.httpClient=De.create({baseURL:"https://rest.pubq.io"})}publish(e,t){return n=this,r=void 0,i=function*(){return(yield this.httpClient.post("/v1/channels/messages",{channel:e,data:t},{headers:{Authorization:`Basic ${Buffer.from(this.applicationKey).toString("base64")}`}})).data},new((o=void 0)||(o=Promise))((function(e,t){function s(e){try{c(i.next(e))}catch(e){t(e)}}function a(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,a)}c((i=i.apply(n,r||[])).next())}));var n,r,o,i}}return t})()));