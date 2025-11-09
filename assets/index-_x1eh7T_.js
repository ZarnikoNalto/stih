(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ar(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Q={},Pt=[],ze=()=>{},Cs=()=>!1,Hn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Tr=e=>e.startsWith("onUpdate:"),de=Object.assign,xr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Yo=Object.prototype.hasOwnProperty,Z=(e,t)=>Yo.call(e,t),D=Array.isArray,Ot=e=>Rn(e)==="[object Map]",ks=e=>Rn(e)==="[object Set]",V=e=>typeof e=="function",ce=e=>typeof e=="string",ot=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Is=e=>(le(e)||V(e))&&V(e.then)&&V(e.catch),Es=Object.prototype.toString,Rn=e=>Es.call(e),Xo=e=>Rn(e).slice(8,-1),$s=e=>Rn(e)==="[object Object]",Sr=e=>ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qt=Ar(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dn=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},zo=/-\w/g,nt=Dn(e=>e.replace(zo,t=>t.slice(1).toUpperCase())),Jo=/\B([A-Z])/g,ht=Dn(e=>e.replace(Jo,"-$1").toLowerCase()),Ms=Dn(e=>e.charAt(0).toUpperCase()+e.slice(1)),zn=Dn(e=>e?`on${Ms(e)}`:""),Ie=(e,t)=>!Object.is(e,t),Jn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ps=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Zo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Qo=e=>{const t=ce(e)?Number(e):NaN;return isNaN(t)?e:t};let Wr;const Nn=()=>Wr||(Wr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function kt(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=ce(s)?ri(s):kt(s);if(o)for(const l in o)t[l]=o[l]}return t}else if(ce(e)||le(e))return e}const ei=/;(?![^(]*\))/g,ti=/:([^]+)/,ni=/\/\*[^]*?\*\//g;function ri(e){const t={};return e.replace(ni,"").split(ei).forEach(n=>{if(n){const s=n.split(ti);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function tt(e){let t="";if(ce(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const s=tt(e[n]);s&&(t+=s+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const si="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oi=Ar(si);function Os(e){return!!e||e===""}const Fs=e=>!!(e&&e.__v_isRef===!0),xn=e=>ce(e)?e:e==null?"":D(e)||le(e)&&(e.toString===Es||!V(e.toString))?Fs(e)?xn(e.value):JSON.stringify(e,Bs,2):String(e),Bs=(e,t)=>Fs(t)?Bs(e,t.value):Ot(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],l)=>(n[Zn(s,l)+" =>"]=o,n),{})}:ks(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Zn(n))}:ot(t)?Zn(t):le(t)&&!D(t)&&!$s(t)?String(t):t,Zn=(e,t="")=>{var n;return ot(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ke;class ii{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ke,!t&&ke&&(this.index=(ke.scopes||(ke.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ke;try{return ke=this,t()}finally{ke=n}}}on(){++this._on===1&&(this.prevScope=ke,ke=this)}off(){this._on>0&&--this._on===0&&(ke=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function li(){return ke}let se;const Qn=new WeakSet;class Ls{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ke&&ke.active&&ke.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qn.has(this)&&(Qn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kr(this),Ds(this);const t=se,n=De;se=this,De=!0;try{return this.fn()}finally{Ns(this),se=t,De=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ir(t);this.deps=this.depsTail=void 0,Kr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ur(this)&&this.run()}get dirty(){return ur(this)}}let Hs=0,Yt,Xt;function Rs(e,t=!1){if(e.flags|=8,t){e.next=Xt,Xt=e;return}e.next=Yt,Yt=e}function Cr(){Hs++}function kr(){if(--Hs>0)return;if(Xt){let t=Xt;for(Xt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Yt;){let t=Yt;for(Yt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Ds(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ns(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Ir(s),ai(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function ur(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(js(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function js(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===en)||(e.globalVersion=en,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ur(e))))return;e.flags|=2;const t=e.dep,n=se,s=De;se=e,De=!0;try{Ds(e);const o=e.fn(e._value);(t.version===0||Ie(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{se=n,De=s,Ns(e),e.flags&=-3}}function Ir(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)Ir(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ai(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let De=!0;const Vs=[];function rt(){Vs.push(De),De=!1}function st(){const e=Vs.pop();De=e===void 0?!0:e}function Kr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=se;se=void 0;try{t()}finally{se=n}}}let en=0;class ui{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!se||!De||se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==se)n=this.activeLink=new ui(se,this),se.deps?(n.prevDep=se.depsTail,se.depsTail.nextDep=n,se.depsTail=n):se.deps=se.depsTail=n,Gs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=se.depsTail,n.nextDep=void 0,se.depsTail.nextDep=n,se.depsTail=n,se.deps===n&&(se.deps=s)}return n}trigger(t){this.version++,en++,this.notify(t)}notify(t){Cr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{kr()}}}function Gs(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Gs(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const cr=new WeakMap,St=Symbol(""),fr=Symbol(""),tn=Symbol("");function ve(e,t,n){if(De&&se){let s=cr.get(e);s||cr.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new jn),o.map=s,o.key=n),o.track()}}function et(e,t,n,s,o,l){const a=cr.get(e);if(!a){en++;return}const c=f=>{f&&f.trigger()};if(Cr(),t==="clear")a.forEach(c);else{const f=D(e),_=f&&Sr(n);if(f&&n==="length"){const p=Number(s);a.forEach((r,i)=>{(i==="length"||i===tn||!ot(i)&&i>=p)&&c(r)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),_&&c(a.get(tn)),t){case"add":f?_&&c(a.get("length")):(c(a.get(St)),Ot(e)&&c(a.get(fr)));break;case"delete":f||(c(a.get(St)),Ot(e)&&c(a.get(fr)));break;case"set":Ot(e)&&c(a.get(St));break}}kr()}function Et(e){const t=z(e);return t===e?t:(ve(t,"iterate",tn),Be(e)?t:t.map(ge))}function Vn(e){return ve(e=z(e),"iterate",tn),e}const ci={__proto__:null,[Symbol.iterator](){return er(this,Symbol.iterator,ge)},concat(...e){return Et(this).concat(...e.map(t=>D(t)?Et(t):t))},entries(){return er(this,"entries",e=>(e[1]=ge(e[1]),e))},every(e,t){return Je(this,"every",e,t,void 0,arguments)},filter(e,t){return Je(this,"filter",e,t,n=>n.map(ge),arguments)},find(e,t){return Je(this,"find",e,t,ge,arguments)},findIndex(e,t){return Je(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Je(this,"findLast",e,t,ge,arguments)},findLastIndex(e,t){return Je(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Je(this,"forEach",e,t,void 0,arguments)},includes(...e){return tr(this,"includes",e)},indexOf(...e){return tr(this,"indexOf",e)},join(e){return Et(this).join(e)},lastIndexOf(...e){return tr(this,"lastIndexOf",e)},map(e,t){return Je(this,"map",e,t,void 0,arguments)},pop(){return Gt(this,"pop")},push(...e){return Gt(this,"push",e)},reduce(e,...t){return Ur(this,"reduce",e,t)},reduceRight(e,...t){return Ur(this,"reduceRight",e,t)},shift(){return Gt(this,"shift")},some(e,t){return Je(this,"some",e,t,void 0,arguments)},splice(...e){return Gt(this,"splice",e)},toReversed(){return Et(this).toReversed()},toSorted(e){return Et(this).toSorted(e)},toSpliced(...e){return Et(this).toSpliced(...e)},unshift(...e){return Gt(this,"unshift",e)},values(){return er(this,"values",ge)}};function er(e,t,n){const s=Vn(e),o=s[t]();return s!==e&&!Be(e)&&(o._next=o.next,o.next=()=>{const l=o._next();return l.value&&(l.value=n(l.value)),l}),o}const fi=Array.prototype;function Je(e,t,n,s,o,l){const a=Vn(e),c=a!==e&&!Be(e),f=a[t];if(f!==fi[t]){const r=f.apply(e,l);return c?ge(r):r}let _=n;a!==e&&(c?_=function(r,i){return n.call(this,ge(r),i,e)}:n.length>2&&(_=function(r,i){return n.call(this,r,i,e)}));const p=f.call(a,_,s);return c&&o?o(p):p}function Ur(e,t,n,s){const o=Vn(e);let l=n;return o!==e&&(Be(e)?n.length>3&&(l=function(a,c,f){return n.call(this,a,c,f,e)}):l=function(a,c,f){return n.call(this,a,ge(c),f,e)}),o[t](l,...s)}function tr(e,t,n){const s=z(e);ve(s,"iterate",tn);const o=s[t](...n);return(o===-1||o===!1)&&Mr(n[0])?(n[0]=z(n[0]),s[t](...n)):o}function Gt(e,t,n=[]){rt(),Cr();const s=z(e)[t].apply(e,n);return kr(),st(),s}const di=Ar("__proto__,__v_isRef,__isVue"),Ws=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ot));function pi(e){ot(e)||(e=String(e));const t=z(this);return ve(t,"has",e),t.hasOwnProperty(e)}class Ks{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return l;if(n==="__v_raw")return s===(o?l?Ti:Xs:l?Ys:qs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const a=D(t);if(!o){let f;if(a&&(f=ci[n]))return f;if(n==="hasOwnProperty")return pi}const c=Reflect.get(t,n,ye(t)?t:s);return(ot(n)?Ws.has(n):di(n))||(o||ve(t,"get",n),l)?c:ye(c)?a&&Sr(n)?c:c.value:le(c)?o?zs(c):Tt(c):c}}class Us extends Ks{constructor(t=!1){super(!1,t)}set(t,n,s,o){let l=t[n];if(!this._isShallow){const f=pt(l);if(!Be(s)&&!pt(s)&&(l=z(l),s=z(s)),!D(t)&&ye(l)&&!ye(s))return f||(l.value=s),!0}const a=D(t)&&Sr(n)?Number(n)<t.length:Z(t,n),c=Reflect.set(t,n,s,ye(t)?t:o);return t===z(o)&&(a?Ie(s,l)&&et(t,"set",n,s):et(t,"add",n,s)),c}deleteProperty(t,n){const s=Z(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&et(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!ot(n)||!Ws.has(n))&&ve(t,"has",n),s}ownKeys(t){return ve(t,"iterate",D(t)?"length":St),Reflect.ownKeys(t)}}class _i extends Ks{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const hi=new Us,mi=new _i,gi=new Us(!0);const dr=e=>e,_n=e=>Reflect.getPrototypeOf(e);function vi(e,t,n){return function(...s){const o=this.__v_raw,l=z(o),a=Ot(l),c=e==="entries"||e===Symbol.iterator&&a,f=e==="keys"&&a,_=o[e](...s),p=n?dr:t?Sn:ge;return!t&&ve(l,"iterate",f?fr:St),{next(){const{value:r,done:i}=_.next();return i?{value:r,done:i}:{value:c?[p(r[0]),p(r[1])]:p(r),done:i}},[Symbol.iterator](){return this}}}}function hn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function bi(e,t){const n={get(o){const l=this.__v_raw,a=z(l),c=z(o);e||(Ie(o,c)&&ve(a,"get",o),ve(a,"get",c));const{has:f}=_n(a),_=t?dr:e?Sn:ge;if(f.call(a,o))return _(l.get(o));if(f.call(a,c))return _(l.get(c));l!==a&&l.get(o)},get size(){const o=this.__v_raw;return!e&&ve(z(o),"iterate",St),o.size},has(o){const l=this.__v_raw,a=z(l),c=z(o);return e||(Ie(o,c)&&ve(a,"has",o),ve(a,"has",c)),o===c?l.has(o):l.has(o)||l.has(c)},forEach(o,l){const a=this,c=a.__v_raw,f=z(c),_=t?dr:e?Sn:ge;return!e&&ve(f,"iterate",St),c.forEach((p,r)=>o.call(l,_(p),_(r),a))}};return de(n,e?{add:hn("add"),set:hn("set"),delete:hn("delete"),clear:hn("clear")}:{add(o){!t&&!Be(o)&&!pt(o)&&(o=z(o));const l=z(this);return _n(l).has.call(l,o)||(l.add(o),et(l,"add",o,o)),this},set(o,l){!t&&!Be(l)&&!pt(l)&&(l=z(l));const a=z(this),{has:c,get:f}=_n(a);let _=c.call(a,o);_||(o=z(o),_=c.call(a,o));const p=f.call(a,o);return a.set(o,l),_?Ie(l,p)&&et(a,"set",o,l):et(a,"add",o,l),this},delete(o){const l=z(this),{has:a,get:c}=_n(l);let f=a.call(l,o);f||(o=z(o),f=a.call(l,o)),c&&c.call(l,o);const _=l.delete(o);return f&&et(l,"delete",o,void 0),_},clear(){const o=z(this),l=o.size!==0,a=o.clear();return l&&et(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=vi(o,e,t)}),n}function Er(e,t){const n=bi(e,t);return(s,o,l)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(Z(n,o)&&o in s?n:s,o,l)}const yi={get:Er(!1,!1)},wi={get:Er(!1,!0)},Ai={get:Er(!0,!1)};const qs=new WeakMap,Ys=new WeakMap,Xs=new WeakMap,Ti=new WeakMap;function xi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Si(e){return e.__v_skip||!Object.isExtensible(e)?0:xi(Xo(e))}function Tt(e){return pt(e)?e:$r(e,!1,hi,yi,qs)}function Ci(e){return $r(e,!1,gi,wi,Ys)}function zs(e){return $r(e,!0,mi,Ai,Xs)}function $r(e,t,n,s,o){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=Si(e);if(l===0)return e;const a=o.get(e);if(a)return a;const c=new Proxy(e,l===2?s:n);return o.set(e,c),c}function Ft(e){return pt(e)?Ft(e.__v_raw):!!(e&&e.__v_isReactive)}function pt(e){return!!(e&&e.__v_isReadonly)}function Be(e){return!!(e&&e.__v_isShallow)}function Mr(e){return e?!!e.__v_raw:!1}function z(e){const t=e&&e.__v_raw;return t?z(t):e}function ki(e){return!Z(e,"__v_skip")&&Object.isExtensible(e)&&Ps(e,"__v_skip",!0),e}const ge=e=>le(e)?Tt(e):e,Sn=e=>le(e)?zs(e):e;function ye(e){return e?e.__v_isRef===!0:!1}function he(e){return Ii(e,!1)}function Ii(e,t){return ye(e)?e:new Ei(e,t)}class Ei{constructor(t,n){this.dep=new jn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:z(t),this._value=n?t:ge(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Be(t)||pt(t);t=s?t:z(t),Ie(t,n)&&(this._rawValue=t,this._value=s?t:ge(t),this.dep.trigger())}}function He(e){return ye(e)?e.value:e}const $i={get:(e,t,n)=>t==="__v_raw"?e:He(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return ye(o)&&!ye(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Js(e){return Ft(e)?e:new Proxy(e,$i)}class Mi{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new jn,{get:s,set:o}=t(n.track.bind(n),n.trigger.bind(n));this._get=s,this._set=o}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Pi(e){return new Mi(e)}class Oi{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new jn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=en-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&se!==this)return Rs(this,!0),!0}get value(){const t=this.dep.track();return js(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Fi(e,t,n=!1){let s,o;return V(e)?s=e:(s=e.get,o=e.set),new Oi(s,o,n)}const mn={},Cn=new WeakMap;let wt;function Bi(e,t=!1,n=wt){if(n){let s=Cn.get(n);s||Cn.set(n,s=[]),s.push(e)}}function Li(e,t,n=Q){const{immediate:s,deep:o,once:l,scheduler:a,augmentJob:c,call:f}=n,_=M=>o?M:Be(M)||o===!1||o===0?dt(M,1):dt(M);let p,r,i,u,d=!1,g=!1;if(ye(e)?(r=()=>e.value,d=Be(e)):Ft(e)?(r=()=>_(e),d=!0):D(e)?(g=!0,d=e.some(M=>Ft(M)||Be(M)),r=()=>e.map(M=>{if(ye(M))return M.value;if(Ft(M))return _(M);if(V(M))return f?f(M,2):M()})):V(e)?t?r=f?()=>f(e,2):e:r=()=>{if(i){rt();try{i()}finally{st()}}const M=wt;wt=p;try{return f?f(e,3,[u]):e(u)}finally{wt=M}}:r=ze,t&&o){const M=r,W=o===!0?1/0:o;r=()=>dt(M(),W)}const b=li(),v=()=>{p.stop(),b&&b.active&&xr(b.effects,p)};if(l&&t){const M=t;t=(...W)=>{M(...W),v()}}let T=g?new Array(e.length).fill(mn):mn;const F=M=>{if(!(!(p.flags&1)||!p.dirty&&!M))if(t){const W=p.run();if(o||d||(g?W.some((ne,ue)=>Ie(ne,T[ue])):Ie(W,T))){i&&i();const ne=wt;wt=p;try{const ue=[W,T===mn?void 0:g&&T[0]===mn?[]:T,u];T=W,f?f(t,3,ue):t(...ue)}finally{wt=ne}}}else p.run()};return c&&c(F),p=new Ls(r),p.scheduler=a?()=>a(F,!1):F,u=M=>Bi(M,!1,p),i=p.onStop=()=>{const M=Cn.get(p);if(M){if(f)f(M,4);else for(const W of M)W();Cn.delete(p)}},t?s?F(!0):T=p.run():a?a(F.bind(null,!0),!0):p.run(),v.pause=p.pause.bind(p),v.resume=p.resume.bind(p),v.stop=v,v}function dt(e,t=1/0,n){if(t<=0||!le(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ye(e))dt(e.value,t,n);else if(D(e))for(let s=0;s<e.length;s++)dt(e[s],t,n);else if(ks(e)||Ot(e))e.forEach(s=>{dt(s,t,n)});else if($s(e)){for(const s in e)dt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&dt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function an(e,t,n,s){try{return s?e(...s):e()}catch(o){Gn(o,t,n)}}function Ne(e,t,n,s){if(V(e)){const o=an(e,t,n,s);return o&&Is(o)&&o.catch(l=>{Gn(l,t,n)}),o}if(D(e)){const o=[];for(let l=0;l<e.length;l++)o.push(Ne(e[l],t,n,s));return o}}function Gn(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Q;if(t){let c=t.parent;const f=t.proxy,_=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const p=c.ec;if(p){for(let r=0;r<p.length;r++)if(p[r](e,f,_)===!1)return}c=c.parent}if(l){rt(),an(l,null,10,[e,f,_]),st();return}}Hi(e,n,o,s,a)}function Hi(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const Te=[];let Ye=-1;const Bt=[];let ut=null,$t=0;const Zs=Promise.resolve();let kn=null;function Mt(e){const t=kn||Zs;return e?t.then(this?e.bind(this):e):t}function Ri(e){let t=Ye+1,n=Te.length;for(;t<n;){const s=t+n>>>1,o=Te[s],l=nn(o);l<e||l===e&&o.flags&2?t=s+1:n=s}return t}function Pr(e){if(!(e.flags&1)){const t=nn(e),n=Te[Te.length-1];!n||!(e.flags&2)&&t>=nn(n)?Te.push(e):Te.splice(Ri(t),0,e),e.flags|=1,Qs()}}function Qs(){kn||(kn=Zs.then(to))}function Di(e){D(e)?Bt.push(...e):ut&&e.id===-1?ut.splice($t+1,0,e):e.flags&1||(Bt.push(e),e.flags|=1),Qs()}function qr(e,t,n=Ye+1){for(;n<Te.length;n++){const s=Te[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Te.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function eo(e){if(Bt.length){const t=[...new Set(Bt)].sort((n,s)=>nn(n)-nn(s));if(Bt.length=0,ut){ut.push(...t);return}for(ut=t,$t=0;$t<ut.length;$t++){const n=ut[$t];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ut=null,$t=0}}const nn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function to(e){try{for(Ye=0;Ye<Te.length;Ye++){const t=Te[Ye];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),an(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ye<Te.length;Ye++){const t=Te[Ye];t&&(t.flags&=-2)}Ye=-1,Te.length=0,eo(),kn=null,(Te.length||Bt.length)&&to()}}let Ee=null,no=null;function In(e){const t=Ee;return Ee=e,no=e&&e.type.__scopeId||null,t}function ct(e,t=Ee,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&On(-1);const l=In(t);let a;try{a=e(...o)}finally{In(l),s._d&&On(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function gt(e,t,n,s){const o=e.dirs,l=t&&t.dirs;for(let a=0;a<o.length;a++){const c=o[a];l&&(c.oldValue=l[a].value);let f=c.dir[s];f&&(rt(),Ne(f,n,8,[e.el,c,e,t]),st())}}const Ni=Symbol("_vte"),ro=e=>e.__isTeleport,Qe=Symbol("_leaveCb"),gn=Symbol("_enterCb");function so(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return un(()=>{e.isMounted=!0}),po(()=>{e.isUnmounting=!0}),e}const Fe=[Function,Array],oo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},io=e=>{const t=e.subTree;return t.component?io(t.component):t},ji={name:"BaseTransition",props:oo,setup(e,{slots:t}){const n=Yn(),s=so();return()=>{const o=t.default&&Or(t.default(),!0);if(!o||!o.length)return;const l=lo(o),a=z(e),{mode:c}=a;if(s.isLeaving)return nr(l);const f=Yr(l);if(!f)return nr(l);let _=rn(f,a,s,n,r=>_=r);f.type!==be&&Ct(f,_);let p=n.subTree&&Yr(n.subTree);if(p&&p.type!==be&&!At(p,f)&&io(n).type!==be){let r=rn(p,a,s,n);if(Ct(p,r),c==="out-in"&&f.type!==be)return s.isLeaving=!0,r.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete r.afterLeave,p=void 0},nr(l);c==="in-out"&&f.type!==be?r.delayLeave=(i,u,d)=>{const g=ao(s,p);g[String(p.key)]=p,i[Qe]=()=>{u(),i[Qe]=void 0,delete _.delayedLeave,p=void 0},_.delayedLeave=()=>{d(),delete _.delayedLeave,p=void 0}}:p=void 0}else p&&(p=void 0);return l}}};function lo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==be){t=n;break}}return t}const Vi=ji;function ao(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function rn(e,t,n,s,o){const{appear:l,mode:a,persisted:c=!1,onBeforeEnter:f,onEnter:_,onAfterEnter:p,onEnterCancelled:r,onBeforeLeave:i,onLeave:u,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:b,onAppear:v,onAfterAppear:T,onAppearCancelled:F}=t,M=String(e.key),W=ao(n,e),ne=(B,q)=>{B&&Ne(B,s,9,q)},ue=(B,q)=>{const L=q[1];ne(B,q),D(B)?B.every(k=>k.length<=1)&&L():B.length<=1&&L()},fe={mode:a,persisted:c,beforeEnter(B){let q=f;if(!n.isMounted)if(l)q=b||f;else return;B[Qe]&&B[Qe](!0);const L=W[M];L&&At(e,L)&&L.el[Qe]&&L.el[Qe](),ne(q,[B])},enter(B){let q=_,L=p,k=r;if(!n.isMounted)if(l)q=v||_,L=T||p,k=F||r;else return;let N=!1;const G=B[gn]=_e=>{N||(N=!0,_e?ne(k,[B]):ne(L,[B]),fe.delayedLeave&&fe.delayedLeave(),B[gn]=void 0)};q?ue(q,[B,G]):G()},leave(B,q){const L=String(e.key);if(B[gn]&&B[gn](!0),n.isUnmounting)return q();ne(i,[B]);let k=!1;const N=B[Qe]=G=>{k||(k=!0,q(),G?ne(g,[B]):ne(d,[B]),B[Qe]=void 0,W[L]===e&&delete W[L])};W[L]=e,u?ue(u,[B,N]):N()},clone(B){const q=rn(B,t,n,s,o);return o&&o(q),q}};return fe}function nr(e){if(Wn(e))return e=_t(e),e.children=null,e}function Yr(e){if(!Wn(e))return ro(e.type)&&e.children?lo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&V(n.default))return n.default()}}function Ct(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ct(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Or(e,t=!1,n){let s=[],o=0;for(let l=0;l<e.length;l++){let a=e[l];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:l);a.type===me?(a.patchFlag&128&&o++,s=s.concat(Or(a.children,t,c))):(t||a.type!==be)&&s.push(c!=null?_t(a,{key:c}):a)}if(o>1)for(let l=0;l<s.length;l++)s[l].patchFlag=-2;return s}function $e(e,t){return V(e)?de({name:e.name},t,{setup:e}):e}function uo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const En=new WeakMap;function zt(e,t,n,s,o=!1){if(D(e)){e.forEach((d,g)=>zt(d,t&&(D(t)?t[g]:t),n,s,o));return}if(Lt(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&zt(e,t,n,s.component.subTree);return}const l=s.shapeFlag&4?Rr(s.component):s.el,a=o?null:l,{i:c,r:f}=e,_=t&&t.r,p=c.refs===Q?c.refs={}:c.refs,r=c.setupState,i=z(r),u=r===Q?Cs:d=>Z(i,d);if(_!=null&&_!==f){if(Xr(t),ce(_))p[_]=null,u(_)&&(r[_]=null);else if(ye(_)){_.value=null;const d=t;d.k&&(p[d.k]=null)}}if(V(f))an(f,c,12,[a,p]);else{const d=ce(f),g=ye(f);if(d||g){const b=()=>{if(e.f){const v=d?u(f)?r[f]:p[f]:f.value;if(o)D(v)&&xr(v,l);else if(D(v))v.includes(l)||v.push(l);else if(d)p[f]=[l],u(f)&&(r[f]=p[f]);else{const T=[l];f.value=T,e.k&&(p[e.k]=T)}}else d?(p[f]=a,u(f)&&(r[f]=a)):g&&(f.value=a,e.k&&(p[e.k]=a))};if(a){const v=()=>{b(),En.delete(e)};v.id=-1,En.set(e,v),Pe(v,n)}else Xr(e),b()}}}function Xr(e){const t=En.get(e);t&&(t.flags|=8,En.delete(e))}Nn().requestIdleCallback;Nn().cancelIdleCallback;const Lt=e=>!!e.type.__asyncLoader,Wn=e=>e.type.__isKeepAlive;function Gi(e,t){co(e,"a",t)}function Wi(e,t){co(e,"da",t)}function co(e,t,n=xe){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Kn(t,s,n),n){let o=n.parent;for(;o&&o.parent;)Wn(o.parent.vnode)&&Ki(s,t,n,o),o=o.parent}}function Ki(e,t,n,s){const o=Kn(t,e,s,!0);cn(()=>{xr(s[t],o)},n)}function Kn(e,t,n=xe,s=!1){if(n){const o=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...a)=>{rt();const c=fn(n),f=Ne(t,n,e,a);return c(),st(),f});return s?o.unshift(l):o.push(l),l}}const it=e=>(t,n=xe)=>{(!ln||e==="sp")&&Kn(e,(...s)=>t(...s),n)},Ui=it("bm"),un=it("m"),qi=it("bu"),fo=it("u"),po=it("bum"),cn=it("um"),Yi=it("sp"),Xi=it("rtg"),zi=it("rtc");function Ji(e,t=xe){Kn("ec",e,t)}const Zi=Symbol.for("v-ndc");function $n(e,t,n,s){let o;const l=n,a=D(e);if(a||ce(e)){const c=a&&Ft(e);let f=!1,_=!1;c&&(f=!Be(e),_=pt(e),e=Vn(e)),o=new Array(e.length);for(let p=0,r=e.length;p<r;p++)o[p]=t(f?_?Sn(ge(e[p])):ge(e[p]):e[p],p,void 0,l)}else if(typeof e=="number"){o=new Array(e);for(let c=0;c<e;c++)o[c]=t(c+1,c,void 0,l)}else if(le(e))if(e[Symbol.iterator])o=Array.from(e,(c,f)=>t(c,f,void 0,l));else{const c=Object.keys(e);o=new Array(c.length);for(let f=0,_=c.length;f<_;f++){const p=c[f];o[f]=t(e[p],p,f,l)}}else o=[];return o}function Qi(e,t,n={},s,o){if(Ee.ce||Ee.parent&&Lt(Ee.parent)&&Ee.parent.ce)return K(),Re(me,null,[ie("slot",n,s&&s())],64);let l=e[t];l&&l._c&&(l._d=!1),K();const a=l&&_o(l(n)),c=n.key||a&&a.key,f=Re(me,{key:(c&&!ot(c)?c:`_${t}`)+(!a&&s?"_fb":"")},a||(s?s():[]),a&&e._===1?64:-2);return l&&l._c&&(l._d=!0),f}function _o(e){return e.some(t=>on(t)?!(t.type===be||t.type===me&&!_o(t.children)):!0)?e:null}const pr=e=>e?Fo(e)?Rr(e):pr(e.parent):null,Jt=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pr(e.parent),$root:e=>pr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>mo(e),$forceUpdate:e=>e.f||(e.f=()=>{Pr(e.update)}),$nextTick:e=>e.n||(e.n=Mt.bind(e.proxy)),$watch:e=>Tl.bind(e)}),rr=(e,t)=>e!==Q&&!e.__isScriptSetup&&Z(e,t),el={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:l,accessCache:a,type:c,appContext:f}=e;let _;if(t[0]!=="$"){const u=a[t];if(u!==void 0)switch(u){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return l[t]}else{if(rr(s,t))return a[t]=1,s[t];if(o!==Q&&Z(o,t))return a[t]=2,o[t];if((_=e.propsOptions[0])&&Z(_,t))return a[t]=3,l[t];if(n!==Q&&Z(n,t))return a[t]=4,n[t];_r&&(a[t]=0)}}const p=Jt[t];let r,i;if(p)return t==="$attrs"&&ve(e.attrs,"get",""),p(e);if((r=c.__cssModules)&&(r=r[t]))return r;if(n!==Q&&Z(n,t))return a[t]=4,n[t];if(i=f.config.globalProperties,Z(i,t))return i[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:l}=e;return rr(o,t)?(o[t]=n,!0):s!==Q&&Z(s,t)?(s[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:l,type:a}},c){let f,_;return!!(n[c]||e!==Q&&c[0]!=="$"&&Z(e,c)||rr(t,c)||(f=l[0])&&Z(f,c)||Z(s,c)||Z(Jt,c)||Z(o.config.globalProperties,c)||(_=a.__cssModules)&&_[c])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Mn(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function tl(e,t){return!e||!t?e||t:D(e)&&D(t)?e.concat(t):de({},Mn(e),Mn(t))}let _r=!0;function nl(e){const t=mo(e),n=e.proxy,s=e.ctx;_r=!1,t.beforeCreate&&zr(t.beforeCreate,e,"bc");const{data:o,computed:l,methods:a,watch:c,provide:f,inject:_,created:p,beforeMount:r,mounted:i,beforeUpdate:u,updated:d,activated:g,deactivated:b,beforeDestroy:v,beforeUnmount:T,destroyed:F,unmounted:M,render:W,renderTracked:ne,renderTriggered:ue,errorCaptured:fe,serverPrefetch:B,expose:q,inheritAttrs:L,components:k,directives:N,filters:G}=t;if(_&&rl(_,s,null),a)for(const J in a){const Y=a[J];V(Y)&&(s[J]=Y.bind(n))}if(o){const J=o.call(n,n);le(J)&&(e.data=Tt(J))}if(_r=!0,l)for(const J in l){const Y=l[J],we=V(Y)?Y.bind(n,n):V(Y.get)?Y.get.bind(n,n):ze,dn=!V(Y)&&V(Y.set)?Y.set.bind(n):ze,mt=Lo({get:we,set:dn});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>mt.value,set:Ve=>mt.value=Ve})}if(c)for(const J in c)ho(c[J],s,n,J);if(f){const J=V(f)?f.call(n):f;Reflect.ownKeys(J).forEach(Y=>{ul(Y,J[Y])})}p&&zr(p,e,"c");function ee(J,Y){D(Y)?Y.forEach(we=>J(we.bind(n))):Y&&J(Y.bind(n))}if(ee(Ui,r),ee(un,i),ee(qi,u),ee(fo,d),ee(Gi,g),ee(Wi,b),ee(Ji,fe),ee(zi,ne),ee(Xi,ue),ee(po,T),ee(cn,M),ee(Yi,B),D(q))if(q.length){const J=e.exposed||(e.exposed={});q.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:we=>n[Y]=we,enumerable:!0})})}else e.exposed||(e.exposed={});W&&e.render===ze&&(e.render=W),L!=null&&(e.inheritAttrs=L),k&&(e.components=k),N&&(e.directives=N),B&&uo(e)}function rl(e,t,n=ze){D(e)&&(e=hr(e));for(const s in e){const o=e[s];let l;le(o)?"default"in o?l=bn(o.from||s,o.default,!0):l=bn(o.from||s):l=bn(o),ye(l)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:a=>l.value=a}):t[s]=l}}function zr(e,t,n){Ne(D(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function ho(e,t,n,s){let o=s.includes(".")?Io(n,s):()=>n[s];if(ce(e)){const l=t[e];V(l)&&Rt(o,l)}else if(V(e))Rt(o,e.bind(n));else if(le(e))if(D(e))e.forEach(l=>ho(l,t,n,s));else{const l=V(e.handler)?e.handler.bind(n):t[e.handler];V(l)&&Rt(o,l,e)}}function mo(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:l,config:{optionMergeStrategies:a}}=e.appContext,c=l.get(t);let f;return c?f=c:!o.length&&!n&&!s?f=t:(f={},o.length&&o.forEach(_=>Pn(f,_,a,!0)),Pn(f,t,a)),le(t)&&l.set(t,f),f}function Pn(e,t,n,s=!1){const{mixins:o,extends:l}=t;l&&Pn(e,l,n,!0),o&&o.forEach(a=>Pn(e,a,n,!0));for(const a in t)if(!(s&&a==="expose")){const c=sl[a]||n&&n[a];e[a]=c?c(e[a],t[a]):t[a]}return e}const sl={data:Jr,props:Zr,emits:Zr,methods:Ut,computed:Ut,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Ut,directives:Ut,watch:il,provide:Jr,inject:ol};function Jr(e,t){return t?e?function(){return de(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function ol(e,t){return Ut(hr(e),hr(t))}function hr(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Ut(e,t){return e?de(Object.create(null),e,t):t}function Zr(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:de(Object.create(null),Mn(e),Mn(t??{})):t}function il(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const s in t)n[s]=Ae(e[s],t[s]);return n}function go(){return{app:null,config:{isNativeTag:Cs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ll=0;function al(e,t){return function(s,o=null){V(s)||(s=de({},s)),o!=null&&!le(o)&&(o=null);const l=go(),a=new WeakSet,c=[];let f=!1;const _=l.app={_uid:ll++,_component:s,_props:o,_container:null,_context:l,_instance:null,version:Ul,get config(){return l.config},set config(p){},use(p,...r){return a.has(p)||(p&&V(p.install)?(a.add(p),p.install(_,...r)):V(p)&&(a.add(p),p(_,...r))),_},mixin(p){return l.mixins.includes(p)||l.mixins.push(p),_},component(p,r){return r?(l.components[p]=r,_):l.components[p]},directive(p,r){return r?(l.directives[p]=r,_):l.directives[p]},mount(p,r,i){if(!f){const u=_._ceVNode||ie(s,o);return u.appContext=l,i===!0?i="svg":i===!1&&(i=void 0),e(u,p,i),f=!0,_._container=p,p.__vue_app__=_,Rr(u.component)}},onUnmount(p){c.push(p)},unmount(){f&&(Ne(c,_._instance,16),e(null,_._container),delete _._container.__vue_app__)},provide(p,r){return l.provides[p]=r,_},runWithContext(p){const r=Ht;Ht=_;try{return p()}finally{Ht=r}}};return _}}let Ht=null;function ul(e,t){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[e]=t}}function bn(e,t,n=!1){const s=Yn();if(s||Ht){let o=Ht?Ht._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&V(t)?t.call(s&&s.proxy):t}}const vo={},bo=()=>Object.create(vo),yo=e=>Object.getPrototypeOf(e)===vo;function cl(e,t,n,s=!1){const o={},l=bo();e.propsDefaults=Object.create(null),wo(e,t,o,l);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);n?e.props=s?o:Ci(o):e.type.props?e.props=o:e.props=l,e.attrs=l}function fl(e,t,n,s){const{props:o,attrs:l,vnode:{patchFlag:a}}=e,c=z(o),[f]=e.propsOptions;let _=!1;if((s||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let r=0;r<p.length;r++){let i=p[r];if(Un(e.emitsOptions,i))continue;const u=t[i];if(f)if(Z(l,i))u!==l[i]&&(l[i]=u,_=!0);else{const d=nt(i);o[d]=mr(f,c,d,u,e,!1)}else u!==l[i]&&(l[i]=u,_=!0)}}}else{wo(e,t,o,l)&&(_=!0);let p;for(const r in c)(!t||!Z(t,r)&&((p=ht(r))===r||!Z(t,p)))&&(f?n&&(n[r]!==void 0||n[p]!==void 0)&&(o[r]=mr(f,c,r,void 0,e,!0)):delete o[r]);if(l!==c)for(const r in l)(!t||!Z(t,r))&&(delete l[r],_=!0)}_&&et(e.attrs,"set","")}function wo(e,t,n,s){const[o,l]=e.propsOptions;let a=!1,c;if(t)for(let f in t){if(qt(f))continue;const _=t[f];let p;o&&Z(o,p=nt(f))?!l||!l.includes(p)?n[p]=_:(c||(c={}))[p]=_:Un(e.emitsOptions,f)||(!(f in s)||_!==s[f])&&(s[f]=_,a=!0)}if(l){const f=z(n),_=c||Q;for(let p=0;p<l.length;p++){const r=l[p];n[r]=mr(o,f,r,_[r],e,!Z(_,r))}}return a}function mr(e,t,n,s,o,l){const a=e[n];if(a!=null){const c=Z(a,"default");if(c&&s===void 0){const f=a.default;if(a.type!==Function&&!a.skipFactory&&V(f)){const{propsDefaults:_}=o;if(n in _)s=_[n];else{const p=fn(o);s=_[n]=f.call(null,t),p()}}else s=f;o.ce&&o.ce._setProp(n,s)}a[0]&&(l&&!c?s=!1:a[1]&&(s===""||s===ht(n))&&(s=!0))}return s}const dl=new WeakMap;function Ao(e,t,n=!1){const s=n?dl:t.propsCache,o=s.get(e);if(o)return o;const l=e.props,a={},c=[];let f=!1;if(!V(e)){const p=r=>{f=!0;const[i,u]=Ao(r,t,!0);de(a,i),u&&c.push(...u)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!l&&!f)return le(e)&&s.set(e,Pt),Pt;if(D(l))for(let p=0;p<l.length;p++){const r=nt(l[p]);Qr(r)&&(a[r]=Q)}else if(l)for(const p in l){const r=nt(p);if(Qr(r)){const i=l[p],u=a[r]=D(i)||V(i)?{type:i}:de({},i),d=u.type;let g=!1,b=!0;if(D(d))for(let v=0;v<d.length;++v){const T=d[v],F=V(T)&&T.name;if(F==="Boolean"){g=!0;break}else F==="String"&&(b=!1)}else g=V(d)&&d.name==="Boolean";u[0]=g,u[1]=b,(g||Z(u,"default"))&&c.push(r)}}const _=[a,c];return le(e)&&s.set(e,_),_}function Qr(e){return e[0]!=="$"&&!qt(e)}const Fr=e=>e==="_"||e==="_ctx"||e==="$stable",Br=e=>D(e)?e.map(Xe):[Xe(e)],pl=(e,t,n)=>{if(t._n)return t;const s=ct((...o)=>Br(t(...o)),n);return s._c=!1,s},To=(e,t,n)=>{const s=e._ctx;for(const o in e){if(Fr(o))continue;const l=e[o];if(V(l))t[o]=pl(o,l,s);else if(l!=null){const a=Br(l);t[o]=()=>a}}},xo=(e,t)=>{const n=Br(t);e.slots.default=()=>n},So=(e,t,n)=>{for(const s in t)(n||!Fr(s))&&(e[s]=t[s])},_l=(e,t,n)=>{const s=e.slots=bo();if(e.vnode.shapeFlag&32){const o=t._;o?(So(s,t,n),n&&Ps(s,"_",o,!0)):To(t,s)}else t&&xo(e,t)},hl=(e,t,n)=>{const{vnode:s,slots:o}=e;let l=!0,a=Q;if(s.shapeFlag&32){const c=t._;c?n&&c===1?l=!1:So(o,t,n):(l=!t.$stable,To(t,o)),a=t}else t&&(xo(e,t),a={default:1});if(l)for(const c in o)!Fr(c)&&a[c]==null&&delete o[c]},Pe=Ml;function ml(e){return gl(e)}function gl(e,t){const n=Nn();n.__VUE__=!0;const{insert:s,remove:o,patchProp:l,createElement:a,createText:c,createComment:f,setText:_,setElementText:p,parentNode:r,nextSibling:i,setScopeId:u=ze,insertStaticContent:d}=e,g=(h,m,y,x=null,w=null,A=null,P=void 0,$=null,E=!!m.dynamicChildren)=>{if(h===m)return;h&&!At(h,m)&&(x=pn(h),Ve(h,w,A,!0),h=null),m.patchFlag===-2&&(E=!1,m.dynamicChildren=null);const{type:S,ref:R,shapeFlag:O}=m;switch(S){case qn:b(h,m,y,x);break;case be:v(h,m,y,x);break;case yn:h==null&&T(m,y,x,P);break;case me:k(h,m,y,x,w,A,P,$,E);break;default:O&1?W(h,m,y,x,w,A,P,$,E):O&6?N(h,m,y,x,w,A,P,$,E):(O&64||O&128)&&S.process(h,m,y,x,w,A,P,$,E,jt)}R!=null&&w?zt(R,h&&h.ref,A,m||h,!m):R==null&&h&&h.ref!=null&&zt(h.ref,null,A,h,!0)},b=(h,m,y,x)=>{if(h==null)s(m.el=c(m.children),y,x);else{const w=m.el=h.el;m.children!==h.children&&_(w,m.children)}},v=(h,m,y,x)=>{h==null?s(m.el=f(m.children||""),y,x):m.el=h.el},T=(h,m,y,x)=>{[h.el,h.anchor]=d(h.children,m,y,x,h.el,h.anchor)},F=({el:h,anchor:m},y,x)=>{let w;for(;h&&h!==m;)w=i(h),s(h,y,x),h=w;s(m,y,x)},M=({el:h,anchor:m})=>{let y;for(;h&&h!==m;)y=i(h),o(h),h=y;o(m)},W=(h,m,y,x,w,A,P,$,E)=>{m.type==="svg"?P="svg":m.type==="math"&&(P="mathml"),h==null?ne(m,y,x,w,A,P,$,E):B(h,m,w,A,P,$,E)},ne=(h,m,y,x,w,A,P,$)=>{let E,S;const{props:R,shapeFlag:O,transition:H,dirs:j}=h;if(E=h.el=a(h.type,A,R&&R.is,R),O&8?p(E,h.children):O&16&&fe(h.children,E,null,x,w,sr(h,A),P,$),j&&gt(h,null,x,"created"),ue(E,h,h.scopeId,P,x),R){for(const re in R)re!=="value"&&!qt(re)&&l(E,re,null,R[re],A,x);"value"in R&&l(E,"value",null,R.value,A),(S=R.onVnodeBeforeMount)&&Ue(S,x,h)}j&&gt(h,null,x,"beforeMount");const X=vl(w,H);X&&H.beforeEnter(E),s(E,m,y),((S=R&&R.onVnodeMounted)||X||j)&&Pe(()=>{S&&Ue(S,x,h),X&&H.enter(E),j&&gt(h,null,x,"mounted")},w)},ue=(h,m,y,x,w)=>{if(y&&u(h,y),x)for(let A=0;A<x.length;A++)u(h,x[A]);if(w){let A=w.subTree;if(m===A||Mo(A.type)&&(A.ssContent===m||A.ssFallback===m)){const P=w.vnode;ue(h,P,P.scopeId,P.slotScopeIds,w.parent)}}},fe=(h,m,y,x,w,A,P,$,E=0)=>{for(let S=E;S<h.length;S++){const R=h[S]=$?ft(h[S]):Xe(h[S]);g(null,R,m,y,x,w,A,P,$)}},B=(h,m,y,x,w,A,P)=>{const $=m.el=h.el;let{patchFlag:E,dynamicChildren:S,dirs:R}=m;E|=h.patchFlag&16;const O=h.props||Q,H=m.props||Q;let j;if(y&&vt(y,!1),(j=H.onVnodeBeforeUpdate)&&Ue(j,y,m,h),R&&gt(m,h,y,"beforeUpdate"),y&&vt(y,!0),(O.innerHTML&&H.innerHTML==null||O.textContent&&H.textContent==null)&&p($,""),S?q(h.dynamicChildren,S,$,y,x,sr(m,w),A):P||Y(h,m,$,null,y,x,sr(m,w),A,!1),E>0){if(E&16)L($,O,H,y,w);else if(E&2&&O.class!==H.class&&l($,"class",null,H.class,w),E&4&&l($,"style",O.style,H.style,w),E&8){const X=m.dynamicProps;for(let re=0;re<X.length;re++){const te=X[re],Se=O[te],Ce=H[te];(Ce!==Se||te==="value")&&l($,te,Se,Ce,w,y)}}E&1&&h.children!==m.children&&p($,m.children)}else!P&&S==null&&L($,O,H,y,w);((j=H.onVnodeUpdated)||R)&&Pe(()=>{j&&Ue(j,y,m,h),R&&gt(m,h,y,"updated")},x)},q=(h,m,y,x,w,A,P)=>{for(let $=0;$<m.length;$++){const E=h[$],S=m[$],R=E.el&&(E.type===me||!At(E,S)||E.shapeFlag&198)?r(E.el):y;g(E,S,R,null,x,w,A,P,!0)}},L=(h,m,y,x,w)=>{if(m!==y){if(m!==Q)for(const A in m)!qt(A)&&!(A in y)&&l(h,A,m[A],null,w,x);for(const A in y){if(qt(A))continue;const P=y[A],$=m[A];P!==$&&A!=="value"&&l(h,A,$,P,w,x)}"value"in y&&l(h,"value",m.value,y.value,w)}},k=(h,m,y,x,w,A,P,$,E)=>{const S=m.el=h?h.el:c(""),R=m.anchor=h?h.anchor:c("");let{patchFlag:O,dynamicChildren:H,slotScopeIds:j}=m;j&&($=$?$.concat(j):j),h==null?(s(S,y,x),s(R,y,x),fe(m.children||[],y,R,w,A,P,$,E)):O>0&&O&64&&H&&h.dynamicChildren?(q(h.dynamicChildren,H,y,w,A,P,$),(m.key!=null||w&&m===w.subTree)&&Co(h,m,!0)):Y(h,m,y,R,w,A,P,$,E)},N=(h,m,y,x,w,A,P,$,E)=>{m.slotScopeIds=$,h==null?m.shapeFlag&512?w.ctx.activate(m,y,x,P,E):G(m,y,x,w,A,P,E):_e(h,m,E)},G=(h,m,y,x,w,A,P)=>{const $=h.component=Dl(h,x,w);if(Wn(h)&&($.ctx.renderer=jt),Nl($,!1,P),$.asyncDep){if(w&&w.registerDep($,ee,P),!h.el){const E=$.subTree=ie(be);v(null,E,m,y),h.placeholder=E.el}}else ee($,h,m,y,w,A,P)},_e=(h,m,y)=>{const x=m.component=h.component;if(El(h,m,y))if(x.asyncDep&&!x.asyncResolved){J(x,m,y);return}else x.next=m,x.update();else m.el=h.el,x.vnode=m},ee=(h,m,y,x,w,A,P)=>{const $=()=>{if(h.isMounted){let{next:O,bu:H,u:j,parent:X,vnode:re}=h;{const We=ko(h);if(We){O&&(O.el=re.el,J(h,O,P)),We.asyncDep.then(()=>{h.isUnmounted||$()});return}}let te=O,Se;vt(h,!1),O?(O.el=re.el,J(h,O,P)):O=re,H&&Jn(H),(Se=O.props&&O.props.onVnodeBeforeUpdate)&&Ue(Se,X,O,re),vt(h,!0);const Ce=ts(h),Ge=h.subTree;h.subTree=Ce,g(Ge,Ce,r(Ge.el),pn(Ge),h,w,A),O.el=Ce.el,te===null&&$l(h,Ce.el),j&&Pe(j,w),(Se=O.props&&O.props.onVnodeUpdated)&&Pe(()=>Ue(Se,X,O,re),w)}else{let O;const{el:H,props:j}=m,{bm:X,m:re,parent:te,root:Se,type:Ce}=h,Ge=Lt(m);vt(h,!1),X&&Jn(X),!Ge&&(O=j&&j.onVnodeBeforeMount)&&Ue(O,te,m),vt(h,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(Ce);const We=h.subTree=ts(h);g(null,We,y,x,h,w,A),m.el=We.el}if(re&&Pe(re,w),!Ge&&(O=j&&j.onVnodeMounted)){const We=m;Pe(()=>Ue(O,te,We),w)}(m.shapeFlag&256||te&&Lt(te.vnode)&&te.vnode.shapeFlag&256)&&h.a&&Pe(h.a,w),h.isMounted=!0,m=y=x=null}};h.scope.on();const E=h.effect=new Ls($);h.scope.off();const S=h.update=E.run.bind(E),R=h.job=E.runIfDirty.bind(E);R.i=h,R.id=h.uid,E.scheduler=()=>Pr(R),vt(h,!0),S()},J=(h,m,y)=>{m.component=h;const x=h.vnode.props;h.vnode=m,h.next=null,fl(h,m.props,x,y),hl(h,m.children,y),rt(),qr(h),st()},Y=(h,m,y,x,w,A,P,$,E=!1)=>{const S=h&&h.children,R=h?h.shapeFlag:0,O=m.children,{patchFlag:H,shapeFlag:j}=m;if(H>0){if(H&128){dn(S,O,y,x,w,A,P,$,E);return}else if(H&256){we(S,O,y,x,w,A,P,$,E);return}}j&8?(R&16&&Nt(S,w,A),O!==S&&p(y,O)):R&16?j&16?dn(S,O,y,x,w,A,P,$,E):Nt(S,w,A,!0):(R&8&&p(y,""),j&16&&fe(O,y,x,w,A,P,$,E))},we=(h,m,y,x,w,A,P,$,E)=>{h=h||Pt,m=m||Pt;const S=h.length,R=m.length,O=Math.min(S,R);let H;for(H=0;H<O;H++){const j=m[H]=E?ft(m[H]):Xe(m[H]);g(h[H],j,y,null,w,A,P,$,E)}S>R?Nt(h,w,A,!0,!1,O):fe(m,y,x,w,A,P,$,E,O)},dn=(h,m,y,x,w,A,P,$,E)=>{let S=0;const R=m.length;let O=h.length-1,H=R-1;for(;S<=O&&S<=H;){const j=h[S],X=m[S]=E?ft(m[S]):Xe(m[S]);if(At(j,X))g(j,X,y,null,w,A,P,$,E);else break;S++}for(;S<=O&&S<=H;){const j=h[O],X=m[H]=E?ft(m[H]):Xe(m[H]);if(At(j,X))g(j,X,y,null,w,A,P,$,E);else break;O--,H--}if(S>O){if(S<=H){const j=H+1,X=j<R?m[j].el:x;for(;S<=H;)g(null,m[S]=E?ft(m[S]):Xe(m[S]),y,X,w,A,P,$,E),S++}}else if(S>H)for(;S<=O;)Ve(h[S],w,A,!0),S++;else{const j=S,X=S,re=new Map;for(S=X;S<=H;S++){const Me=m[S]=E?ft(m[S]):Xe(m[S]);Me.key!=null&&re.set(Me.key,S)}let te,Se=0;const Ce=H-X+1;let Ge=!1,We=0;const Vt=new Array(Ce);for(S=0;S<Ce;S++)Vt[S]=0;for(S=j;S<=O;S++){const Me=h[S];if(Se>=Ce){Ve(Me,w,A,!0);continue}let Ke;if(Me.key!=null)Ke=re.get(Me.key);else for(te=X;te<=H;te++)if(Vt[te-X]===0&&At(Me,m[te])){Ke=te;break}Ke===void 0?Ve(Me,w,A,!0):(Vt[Ke-X]=S+1,Ke>=We?We=Ke:Ge=!0,g(Me,m[Ke],y,null,w,A,P,$,E),Se++)}const jr=Ge?bl(Vt):Pt;for(te=jr.length-1,S=Ce-1;S>=0;S--){const Me=X+S,Ke=m[Me],Vr=m[Me+1],Gr=Me+1<R?Vr.el||Vr.placeholder:x;Vt[S]===0?g(null,Ke,y,Gr,w,A,P,$,E):Ge&&(te<0||S!==jr[te]?mt(Ke,y,Gr,2):te--)}}},mt=(h,m,y,x,w=null)=>{const{el:A,type:P,transition:$,children:E,shapeFlag:S}=h;if(S&6){mt(h.component.subTree,m,y,x);return}if(S&128){h.suspense.move(m,y,x);return}if(S&64){P.move(h,m,y,jt);return}if(P===me){s(A,m,y);for(let O=0;O<E.length;O++)mt(E[O],m,y,x);s(h.anchor,m,y);return}if(P===yn){F(h,m,y);return}if(x!==2&&S&1&&$)if(x===0)$.beforeEnter(A),s(A,m,y),Pe(()=>$.enter(A),w);else{const{leave:O,delayLeave:H,afterLeave:j}=$,X=()=>{h.ctx.isUnmounted?o(A):s(A,m,y)},re=()=>{A._isLeaving&&A[Qe](!0),O(A,()=>{X(),j&&j()})};H?H(A,X,re):re()}else s(A,m,y)},Ve=(h,m,y,x=!1,w=!1)=>{const{type:A,props:P,ref:$,children:E,dynamicChildren:S,shapeFlag:R,patchFlag:O,dirs:H,cacheIndex:j}=h;if(O===-2&&(w=!1),$!=null&&(rt(),zt($,null,y,h,!0),st()),j!=null&&(m.renderCache[j]=void 0),R&256){m.ctx.deactivate(h);return}const X=R&1&&H,re=!Lt(h);let te;if(re&&(te=P&&P.onVnodeBeforeUnmount)&&Ue(te,m,h),R&6)qo(h.component,y,x);else{if(R&128){h.suspense.unmount(y,x);return}X&&gt(h,null,m,"beforeUnmount"),R&64?h.type.remove(h,m,y,jt,x):S&&!S.hasOnce&&(A!==me||O>0&&O&64)?Nt(S,m,y,!1,!0):(A===me&&O&384||!w&&R&16)&&Nt(E,m,y),x&&Dr(h)}(re&&(te=P&&P.onVnodeUnmounted)||X)&&Pe(()=>{te&&Ue(te,m,h),X&&gt(h,null,m,"unmounted")},y)},Dr=h=>{const{type:m,el:y,anchor:x,transition:w}=h;if(m===me){Uo(y,x);return}if(m===yn){M(h);return}const A=()=>{o(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:$}=w,E=()=>P(y,A);$?$(h.el,A,E):E()}else A()},Uo=(h,m)=>{let y;for(;h!==m;)y=i(h),o(h),h=y;o(m)},qo=(h,m,y)=>{const{bum:x,scope:w,job:A,subTree:P,um:$,m:E,a:S}=h;es(E),es(S),x&&Jn(x),w.stop(),A&&(A.flags|=8,Ve(P,h,m,y)),$&&Pe($,m),Pe(()=>{h.isUnmounted=!0},m)},Nt=(h,m,y,x=!1,w=!1,A=0)=>{for(let P=A;P<h.length;P++)Ve(h[P],m,y,x,w)},pn=h=>{if(h.shapeFlag&6)return pn(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const m=i(h.anchor||h.el),y=m&&m[Ni];return y?i(y):m};let Xn=!1;const Nr=(h,m,y)=>{h==null?m._vnode&&Ve(m._vnode,null,null,!0):g(m._vnode||null,h,m,null,null,null,y),m._vnode=h,Xn||(Xn=!0,qr(),eo(),Xn=!1)},jt={p:g,um:Ve,m:mt,r:Dr,mt:G,mc:fe,pc:Y,pbc:q,n:pn,o:e};return{render:Nr,hydrate:void 0,createApp:al(Nr)}}function sr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function vt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function vl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Co(e,t,n=!1){const s=e.children,o=t.children;if(D(s)&&D(o))for(let l=0;l<s.length;l++){const a=s[l];let c=o[l];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[l]=ft(o[l]),c.el=a.el),!n&&c.patchFlag!==-2&&Co(a,c)),c.type===qn&&c.patchFlag!==-1&&(c.el=a.el),c.type===be&&!c.el&&(c.el=a.el)}}function bl(e){const t=e.slice(),n=[0];let s,o,l,a,c;const f=e.length;for(s=0;s<f;s++){const _=e[s];if(_!==0){if(o=n[n.length-1],e[o]<_){t[s]=o,n.push(s);continue}for(l=0,a=n.length-1;l<a;)c=l+a>>1,e[n[c]]<_?l=c+1:a=c;_<e[n[l]]&&(l>0&&(t[s]=n[l-1]),n[l]=s)}}for(l=n.length,a=n[l-1];l-- >0;)n[l]=a,a=t[a];return n}function ko(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ko(t)}function es(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const yl=Symbol.for("v-scx"),wl=()=>bn(yl);function Al(e,t){return Lr(e,null,{flush:"sync"})}function Rt(e,t,n){return Lr(e,t,n)}function Lr(e,t,n=Q){const{immediate:s,deep:o,flush:l,once:a}=n,c=de({},n),f=t&&s||!t&&l!=="post";let _;if(ln){if(l==="sync"){const u=wl();_=u.__watcherHandles||(u.__watcherHandles=[])}else if(!f){const u=()=>{};return u.stop=ze,u.resume=ze,u.pause=ze,u}}const p=xe;c.call=(u,d,g)=>Ne(u,p,d,g);let r=!1;l==="post"?c.scheduler=u=>{Pe(u,p&&p.suspense)}:l!=="sync"&&(r=!0,c.scheduler=(u,d)=>{d?u():Pr(u)}),c.augmentJob=u=>{t&&(u.flags|=4),r&&(u.flags|=2,p&&(u.id=p.uid,u.i=p))};const i=Li(e,t,c);return ln&&(_?_.push(i):f&&i()),i}function Tl(e,t,n){const s=this.proxy,o=ce(e)?e.includes(".")?Io(s,e):()=>s[e]:e.bind(s,s);let l;V(t)?l=t:(l=t.handler,n=t);const a=fn(this),c=Lr(o,l.bind(s),n);return a(),c}function Io(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function xl(e,t,n=Q){const s=Yn(),o=nt(t),l=ht(t),a=Eo(e,o),c=Pi((f,_)=>{let p,r=Q,i;return Al(()=>{const u=e[o];Ie(p,u)&&(p=u,_())}),{get(){return f(),n.get?n.get(p):p},set(u){const d=n.set?n.set(u):u;if(!Ie(d,p)&&!(r!==Q&&Ie(u,r)))return;const g=s.vnode.props;g&&(t in g||o in g||l in g)&&(`onUpdate:${t}`in g||`onUpdate:${o}`in g||`onUpdate:${l}`in g)||(p=u,_()),s.emit(`update:${t}`,d),Ie(u,d)&&Ie(u,r)&&!Ie(d,i)&&_(),r=u,i=d}}});return c[Symbol.iterator]=()=>{let f=0;return{next(){return f<2?{value:f++?a||Q:c,done:!1}:{done:!0}}}},c}const Eo=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${nt(t)}Modifiers`]||e[`${ht(t)}Modifiers`];function Sl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Q;let o=n;const l=t.startsWith("update:"),a=l&&Eo(s,t.slice(7));a&&(a.trim&&(o=n.map(p=>ce(p)?p.trim():p)),a.number&&(o=n.map(Zo)));let c,f=s[c=zn(t)]||s[c=zn(nt(t))];!f&&l&&(f=s[c=zn(ht(t))]),f&&Ne(f,e,6,o);const _=s[c+"Once"];if(_){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ne(_,e,6,o)}}const Cl=new WeakMap;function $o(e,t,n=!1){const s=n?Cl:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const l=e.emits;let a={},c=!1;if(!V(e)){const f=_=>{const p=$o(_,t,!0);p&&(c=!0,de(a,p))};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}return!l&&!c?(le(e)&&s.set(e,null),null):(D(l)?l.forEach(f=>a[f]=null):de(a,l),le(e)&&s.set(e,a),a)}function Un(e,t){return!e||!Hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,ht(t))||Z(e,t))}function ts(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[l],slots:a,attrs:c,emit:f,render:_,renderCache:p,props:r,data:i,setupState:u,ctx:d,inheritAttrs:g}=e,b=In(e);let v,T;try{if(n.shapeFlag&4){const M=o||s,W=M;v=Xe(_.call(W,M,p,r,u,i,d)),T=c}else{const M=t;v=Xe(M.length>1?M(r,{attrs:c,slots:a,emit:f}):M(r,null)),T=t.props?c:kl(c)}}catch(M){Zt.length=0,Gn(M,e,1),v=ie(be)}let F=v;if(T&&g!==!1){const M=Object.keys(T),{shapeFlag:W}=F;M.length&&W&7&&(l&&M.some(Tr)&&(T=Il(T,l)),F=_t(F,T,!1,!0))}return n.dirs&&(F=_t(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&Ct(F,n.transition),v=F,In(b),v}const kl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hn(n))&&((t||(t={}))[n]=e[n]);return t},Il=(e,t)=>{const n={};for(const s in e)(!Tr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function El(e,t,n){const{props:s,children:o,component:l}=e,{props:a,children:c,patchFlag:f}=t,_=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&f>=0){if(f&1024)return!0;if(f&16)return s?ns(s,a,_):!!a;if(f&8){const p=t.dynamicProps;for(let r=0;r<p.length;r++){const i=p[r];if(a[i]!==s[i]&&!Un(_,i))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?ns(s,a,_):!0:!!a;return!1}function ns(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const l=s[o];if(t[l]!==e[l]&&!Un(n,l))return!0}return!1}function $l({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Mo=e=>e.__isSuspense;function Ml(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):Di(e)}const me=Symbol.for("v-fgt"),qn=Symbol.for("v-txt"),be=Symbol.for("v-cmt"),yn=Symbol.for("v-stc"),Zt=[];let Oe=null;function K(e=!1){Zt.push(Oe=e?null:[])}function Pl(){Zt.pop(),Oe=Zt[Zt.length-1]||null}let sn=1;function On(e,t=!1){sn+=e,e<0&&Oe&&t&&(Oe.hasOnce=!0)}function Po(e){return e.dynamicChildren=sn>0?Oe||Pt:null,Pl(),sn>0&&Oe&&Oe.push(e),e}function oe(e,t,n,s,o,l){return Po(ae(e,t,n,s,o,l,!0))}function Re(e,t,n,s,o){return Po(ie(e,t,n,s,o,!0))}function on(e){return e?e.__v_isVNode===!0:!1}function At(e,t){return e.type===t.type&&e.key===t.key}const Oo=({key:e})=>e??null,wn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ce(e)||ye(e)||V(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function ae(e,t=null,n=null,s=0,o=null,l=e===me?0:1,a=!1,c=!1){const f={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Oo(t),ref:t&&wn(t),scopeId:no,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Ee};return c?(Hr(f,n),l&128&&e.normalize(f)):n&&(f.shapeFlag|=ce(n)?8:16),sn>0&&!a&&Oe&&(f.patchFlag>0||l&6)&&f.patchFlag!==32&&Oe.push(f),f}const ie=Ol;function Ol(e,t=null,n=null,s=0,o=null,l=!1){if((!e||e===Zi)&&(e=be),on(e)){const c=_t(e,t,!0);return n&&Hr(c,n),sn>0&&!l&&Oe&&(c.shapeFlag&6?Oe[Oe.indexOf(e)]=c:Oe.push(c)),c.patchFlag=-2,c}if(Wl(e)&&(e=e.__vccOpts),t){t=Fl(t);let{class:c,style:f}=t;c&&!ce(c)&&(t.class=tt(c)),le(f)&&(Mr(f)&&!D(f)&&(f=de({},f)),t.style=kt(f))}const a=ce(e)?1:Mo(e)?128:ro(e)?64:le(e)?4:V(e)?2:0;return ae(e,t,n,s,o,a,l,!0)}function Fl(e){return e?Mr(e)||yo(e)?de({},e):e:null}function _t(e,t,n=!1,s=!1){const{props:o,ref:l,patchFlag:a,children:c,transition:f}=e,_=t?Ll(o||{},t):o,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:_,key:_&&Oo(_),ref:t&&t.ref?n&&l?D(l)?l.concat(wn(t)):[l,wn(t)]:wn(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:f,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return f&&s&&Ct(p,f.clone(p)),p}function Fn(e=" ",t=0){return ie(qn,null,e,t)}function Bl(e,t){const n=ie(yn,null,e);return n.staticCount=t,n}function xt(e="",t=!1){return t?(K(),Re(be,null,e)):ie(be,null,e)}function Xe(e){return e==null||typeof e=="boolean"?ie(be):D(e)?ie(me,null,e.slice()):on(e)?ft(e):ie(qn,null,String(e))}function ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:_t(e)}function Hr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Hr(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!yo(t)?t._ctx=Ee:o===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),s&64?(n=16,t=[Fn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ll(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=tt([t.class,s.class]));else if(o==="style")t.style=kt([t.style,s.style]);else if(Hn(o)){const l=t[o],a=s[o];a&&l!==a&&!(D(l)&&l.includes(a))&&(t[o]=l?[].concat(l,a):a)}else o!==""&&(t[o]=s[o])}return t}function Ue(e,t,n,s=null){Ne(e,t,7,[n,s])}const Hl=go();let Rl=0;function Dl(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Hl,l={uid:Rl++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ii(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ao(s,o),emitsOptions:$o(s,o),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:s.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Sl.bind(null,l),e.ce&&e.ce(l),l}let xe=null;const Yn=()=>xe||Ee;let Bn,gr;{const e=Nn(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),l=>{o.length>1?o.forEach(a=>a(l)):o[0](l)}};Bn=t("__VUE_INSTANCE_SETTERS__",n=>xe=n),gr=t("__VUE_SSR_SETTERS__",n=>ln=n)}const fn=e=>{const t=xe;return Bn(e),e.scope.on(),()=>{e.scope.off(),Bn(t)}},rs=()=>{xe&&xe.scope.off(),Bn(null)};function Fo(e){return e.vnode.shapeFlag&4}let ln=!1;function Nl(e,t=!1,n=!1){t&&gr(t);const{props:s,children:o}=e.vnode,l=Fo(e);cl(e,s,l,t),_l(e,o,n||t);const a=l?jl(e,t):void 0;return t&&gr(!1),a}function jl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,el);const{setup:s}=n;if(s){rt();const o=e.setupContext=s.length>1?Gl(e):null,l=fn(e),a=an(s,e,0,[e.props,o]),c=Is(a);if(st(),l(),(c||e.sp)&&!Lt(e)&&uo(e),c){if(a.then(rs,rs),t)return a.then(f=>{ss(e,f)}).catch(f=>{Gn(f,e,0)});e.asyncDep=a}else ss(e,a)}else Bo(e)}function ss(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=Js(t)),Bo(e)}function Bo(e,t,n){const s=e.type;e.render||(e.render=s.render||ze);{const o=fn(e);rt();try{nl(e)}finally{st(),o()}}}const Vl={get(e,t){return ve(e,"get",""),e[t]}};function Gl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Vl),slots:e.slots,emit:e.emit,expose:t}}function Rr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Js(ki(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jt)return Jt[n](e)},has(t,n){return n in t||n in Jt}})):e.proxy}function Wl(e){return V(e)&&"__vccOpts"in e}const Lo=(e,t)=>Fi(e,t,ln);function Kl(e,t,n){const s=(l,a,c)=>{On(-1);try{return ie(l,a,c)}finally{On(1)}},o=arguments.length;return o===2?le(t)&&!D(t)?on(t)?s(e,null,[t]):s(e,t):s(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&on(n)&&(n=[n]),s(e,t,n))}const Ul="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vr;const os=typeof window<"u"&&window.trustedTypes;if(os)try{vr=os.createPolicy("vue",{createHTML:e=>e})}catch{}const Ho=vr?e=>vr.createHTML(e):e=>e,ql="http://www.w3.org/2000/svg",Yl="http://www.w3.org/1998/Math/MathML",Ze=typeof document<"u"?document:null,is=Ze&&Ze.createElement("template"),Xl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?Ze.createElementNS(ql,e):t==="mathml"?Ze.createElementNS(Yl,e):n?Ze.createElement(e,{is:n}):Ze.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>Ze.createTextNode(e),createComment:e=>Ze.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ze.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,l){const a=n?n.previousSibling:t.lastChild;if(o&&(o===l||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===l||!(o=o.nextSibling)););else{is.innerHTML=Ho(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const c=is.content;if(s==="svg"||s==="mathml"){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}t.insertBefore(c,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},lt="transition",Wt="animation",Dt=Symbol("_vtc"),Ro={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Do=de({},oo,Ro),zl=e=>(e.displayName="Transition",e.props=Do,e),An=zl((e,{slots:t})=>Kl(Vi,No(e),t)),bt=(e,t=[])=>{D(e)?e.forEach(n=>n(...t)):e&&e(...t)},ls=e=>e?D(e)?e.some(t=>t.length>1):e.length>1:!1;function No(e){const t={};for(const k in e)k in Ro||(t[k]=e[k]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:l=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:f=l,appearActiveClass:_=a,appearToClass:p=c,leaveFromClass:r=`${n}-leave-from`,leaveActiveClass:i=`${n}-leave-active`,leaveToClass:u=`${n}-leave-to`}=e,d=Jl(o),g=d&&d[0],b=d&&d[1],{onBeforeEnter:v,onEnter:T,onEnterCancelled:F,onLeave:M,onLeaveCancelled:W,onBeforeAppear:ne=v,onAppear:ue=T,onAppearCancelled:fe=F}=t,B=(k,N,G,_e)=>{k._enterCancelled=_e,at(k,N?p:c),at(k,N?_:a),G&&G()},q=(k,N)=>{k._isLeaving=!1,at(k,r),at(k,u),at(k,i),N&&N()},L=k=>(N,G)=>{const _e=k?ue:T,ee=()=>B(N,k,G);bt(_e,[N,ee]),as(()=>{at(N,k?f:l),qe(N,k?p:c),ls(_e)||us(N,s,g,ee)})};return de(t,{onBeforeEnter(k){bt(v,[k]),qe(k,l),qe(k,a)},onBeforeAppear(k){bt(ne,[k]),qe(k,f),qe(k,_)},onEnter:L(!1),onAppear:L(!0),onLeave(k,N){k._isLeaving=!0;const G=()=>q(k,N);qe(k,r),k._enterCancelled?(qe(k,i),br()):(br(),qe(k,i)),as(()=>{k._isLeaving&&(at(k,r),qe(k,u),ls(M)||us(k,s,b,G))}),bt(M,[k,G])},onEnterCancelled(k){B(k,!1,void 0,!0),bt(F,[k])},onAppearCancelled(k){B(k,!0,void 0,!0),bt(fe,[k])},onLeaveCancelled(k){q(k),bt(W,[k])}})}function Jl(e){if(e==null)return null;if(le(e))return[or(e.enter),or(e.leave)];{const t=or(e);return[t,t]}}function or(e){return Qo(e)}function qe(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Dt]||(e[Dt]=new Set)).add(t)}function at(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Dt];n&&(n.delete(t),n.size||(e[Dt]=void 0))}function as(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Zl=0;function us(e,t,n,s){const o=e._endId=++Zl,l=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(l,n);const{type:a,timeout:c,propCount:f}=jo(e,t);if(!a)return s();const _=a+"end";let p=0;const r=()=>{e.removeEventListener(_,i),l()},i=u=>{u.target===e&&++p>=f&&r()};setTimeout(()=>{p<f&&r()},c+1),e.addEventListener(_,i)}function jo(e,t){const n=window.getComputedStyle(e),s=d=>(n[d]||"").split(", "),o=s(`${lt}Delay`),l=s(`${lt}Duration`),a=cs(o,l),c=s(`${Wt}Delay`),f=s(`${Wt}Duration`),_=cs(c,f);let p=null,r=0,i=0;t===lt?a>0&&(p=lt,r=a,i=l.length):t===Wt?_>0&&(p=Wt,r=_,i=f.length):(r=Math.max(a,_),p=r>0?a>_?lt:Wt:null,i=p?p===lt?l.length:f.length:0);const u=p===lt&&/\b(?:transform|all)(?:,|$)/.test(s(`${lt}Property`).toString());return{type:p,timeout:r,propCount:i,hasTransform:u}}function cs(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>fs(n)+fs(e[s])))}function fs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function br(){return document.body.offsetHeight}function Ql(e,t,n){const s=e[Dt];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ds=Symbol("_vod"),ea=Symbol("_vsh"),ta=Symbol(""),na=/(?:^|;)\s*display\s*:/;function ra(e,t,n){const s=e.style,o=ce(n);let l=!1;if(n&&!o){if(t)if(ce(t))for(const a of t.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Tn(s,c,"")}else for(const a in t)n[a]==null&&Tn(s,a,"");for(const a in n)a==="display"&&(l=!0),Tn(s,a,n[a])}else if(o){if(t!==n){const a=s[ta];a&&(n+=";"+a),s.cssText=n,l=na.test(n)}}else t&&e.removeAttribute("style");ds in e&&(e[ds]=l?s.display:"",e[ea]&&(s.display="none"))}const ps=/\s*!important$/;function Tn(e,t,n){if(D(n))n.forEach(s=>Tn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=sa(e,t);ps.test(n)?e.setProperty(ht(s),n.replace(ps,""),"important"):e[s]=n}}const _s=["Webkit","Moz","ms"],ir={};function sa(e,t){const n=ir[t];if(n)return n;let s=nt(t);if(s!=="filter"&&s in e)return ir[t]=s;s=Ms(s);for(let o=0;o<_s.length;o++){const l=_s[o]+s;if(l in e)return ir[t]=l}return t}const hs="http://www.w3.org/1999/xlink";function ms(e,t,n,s,o,l=oi(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(hs,t.slice(6,t.length)):e.setAttributeNS(hs,t,n):n==null||l&&!Os(n)?e.removeAttribute(t):e.setAttribute(t,l?"":ot(n)?String(n):n)}function gs(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ho(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const c=l==="OPTION"?e.getAttribute("value")||"":e.value,f=n==null?e.type==="checkbox"?"on":"":String(n);(c!==f||!("_value"in e))&&(e.value=f),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Os(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(o||t)}function oa(e,t,n,s){e.addEventListener(t,n,s)}function ia(e,t,n,s){e.removeEventListener(t,n,s)}const vs=Symbol("_vei");function la(e,t,n,s,o=null){const l=e[vs]||(e[vs]={}),a=l[t];if(s&&a)a.value=s;else{const[c,f]=aa(t);if(s){const _=l[t]=fa(s,o);oa(e,c,_,f)}else a&&(ia(e,c,a,f),l[t]=void 0)}}const bs=/(?:Once|Passive|Capture)$/;function aa(e){let t;if(bs.test(e)){t={};let s;for(;s=e.match(bs);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ht(e.slice(2)),t]}let lr=0;const ua=Promise.resolve(),ca=()=>lr||(ua.then(()=>lr=0),lr=Date.now());function fa(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ne(da(s,n.value),t,5,[s])};return n.value=e,n.attached=ca(),n}function da(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const ys=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,pa=(e,t,n,s,o,l)=>{const a=o==="svg";t==="class"?Ql(e,s,a):t==="style"?ra(e,n,s):Hn(t)?Tr(t)||la(e,t,n,s,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_a(e,t,s,a))?(gs(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ms(e,t,s,a,l,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ce(s))?gs(e,nt(t),s,l,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ms(e,t,s,a))};function _a(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ys(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return ys(t)&&ce(n)?!1:t in e}const Vo=new WeakMap,Go=new WeakMap,Ln=Symbol("_moveCb"),ws=Symbol("_enterCb"),ha=e=>(delete e.props.mode,e),ma=ha({name:"TransitionGroup",props:de({},Do,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Yn(),s=so();let o,l;return fo(()=>{if(!o.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!wa(o[0].el,n.vnode.el,a)){o=[];return}o.forEach(va),o.forEach(ba);const c=o.filter(ya);br(),c.forEach(f=>{const _=f.el,p=_.style;qe(_,a),p.transform=p.webkitTransform=p.transitionDuration="";const r=_[Ln]=i=>{i&&i.target!==_||(!i||i.propertyName.endsWith("transform"))&&(_.removeEventListener("transitionend",r),_[Ln]=null,at(_,a))};_.addEventListener("transitionend",r)}),o=[]}),()=>{const a=z(e),c=No(a);let f=a.tag||me;if(o=[],l)for(let _=0;_<l.length;_++){const p=l[_];p.el&&p.el instanceof Element&&(o.push(p),Ct(p,rn(p,c,s,n)),Vo.set(p,p.el.getBoundingClientRect()))}l=t.default?Or(t.default()):[];for(let _=0;_<l.length;_++){const p=l[_];p.key!=null&&Ct(p,rn(p,c,s,n))}return ie(f,null,l)}}}),ga=ma;function va(e){const t=e.el;t[Ln]&&t[Ln](),t[ws]&&t[ws]()}function ba(e){Go.set(e,e.el.getBoundingClientRect())}function ya(e){const t=Vo.get(e),n=Go.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${s}px,${o}px)`,l.transitionDuration="0s",e}}function wa(e,t,n){const s=e.cloneNode(),o=e[Dt];o&&o.forEach(c=>{c.split(/\s+/).forEach(f=>f&&s.classList.remove(f))}),n.split(/\s+/).forEach(c=>c&&s.classList.add(c)),s.style.display="none";const l=t.nodeType===1?t:t.parentNode;l.appendChild(s);const{hasTransform:a}=jo(s);return l.removeChild(s),a}const Aa=de({patchProp:pa},Xl);let As;function Ta(){return As||(As=ml(Aa))}const xa=((...e)=>{const t=Ta().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Ca(s);if(!o)return;const l=t._component;!V(l)&&!l.render&&!l.template&&(l.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=n(o,!1,Sa(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t});function Sa(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ca(e){return ce(e)?document.querySelector(e):e}var Kt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ar={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var Ts;function ka(){return Ts||(Ts=1,(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var r=this||n;return r._counter=1e3,r._html5AudioPool=[],r.html5PoolSize=10,r._codecs={},r._howls=[],r._muted=!1,r._volume=1,r._canPlayEvent="canplaythrough",r._navigator=typeof window<"u"&&window.navigator?window.navigator:null,r.masterGain=null,r.noAudio=!1,r.usingWebAudio=!0,r.autoSuspend=!0,r.ctx=null,r.autoUnlock=!0,r._setup(),r},volume:function(r){var i=this||n;if(r=parseFloat(r),i.ctx||p(),typeof r<"u"&&r>=0&&r<=1){if(i._volume=r,i._muted)return i;i.usingWebAudio&&i.masterGain.gain.setValueAtTime(r,n.ctx.currentTime);for(var u=0;u<i._howls.length;u++)if(!i._howls[u]._webAudio)for(var d=i._howls[u]._getSoundIds(),g=0;g<d.length;g++){var b=i._howls[u]._soundById(d[g]);b&&b._node&&(b._node.volume=b._volume*r)}return i}return i._volume},mute:function(r){var i=this||n;i.ctx||p(),i._muted=r,i.usingWebAudio&&i.masterGain.gain.setValueAtTime(r?0:i._volume,n.ctx.currentTime);for(var u=0;u<i._howls.length;u++)if(!i._howls[u]._webAudio)for(var d=i._howls[u]._getSoundIds(),g=0;g<d.length;g++){var b=i._howls[u]._soundById(d[g]);b&&b._node&&(b._node.muted=r?!0:b._muted)}return i},stop:function(){for(var r=this||n,i=0;i<r._howls.length;i++)r._howls[i].stop();return r},unload:function(){for(var r=this||n,i=r._howls.length-1;i>=0;i--)r._howls[i].unload();return r.usingWebAudio&&r.ctx&&typeof r.ctx.close<"u"&&(r.ctx.close(),r.ctx=null,p()),r},codecs:function(r){return(this||n)._codecs[r.replace(/^x-/,"")]},_setup:function(){var r=this||n;if(r.state=r.ctx&&r.ctx.state||"suspended",r._autoSuspend(),!r.usingWebAudio)if(typeof Audio<"u")try{var i=new Audio;typeof i.oncanplaythrough>"u"&&(r._canPlayEvent="canplay")}catch{r.noAudio=!0}else r.noAudio=!0;try{var i=new Audio;i.muted&&(r.noAudio=!0)}catch{}return r.noAudio||r._setupCodecs(),r},_setupCodecs:function(){var r=this||n,i=null;try{i=typeof Audio<"u"?new Audio:null}catch{return r}if(!i||typeof i.canPlayType!="function")return r;var u=i.canPlayType("audio/mpeg;").replace(/^no$/,""),d=r._navigator?r._navigator.userAgent:"",g=d.match(/OPR\/(\d+)/g),b=g&&parseInt(g[0].split("/")[1],10)<33,v=d.indexOf("Safari")!==-1&&d.indexOf("Chrome")===-1,T=d.match(/Version\/(.*?) /),F=v&&T&&parseInt(T[1],10)<15;return r._codecs={mp3:!!(!b&&(u||i.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!u,opus:!!i.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(i.canPlayType('audio/wav; codecs="1"')||i.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!i.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!i.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(i.canPlayType("audio/x-m4a;")||i.canPlayType("audio/m4a;")||i.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(i.canPlayType("audio/x-m4b;")||i.canPlayType("audio/m4b;")||i.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(i.canPlayType("audio/x-mp4;")||i.canPlayType("audio/mp4;")||i.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!F&&i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!F&&i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!i.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(i.canPlayType("audio/x-flac;")||i.canPlayType("audio/flac;")).replace(/^no$/,"")},r},_unlockAudio:function(){var r=this||n;if(!(r._audioUnlocked||!r.ctx)){r._audioUnlocked=!1,r.autoUnlock=!1,!r._mobileUnloaded&&r.ctx.sampleRate!==44100&&(r._mobileUnloaded=!0,r.unload()),r._scratchBuffer=r.ctx.createBuffer(1,1,22050);var i=function(u){for(;r._html5AudioPool.length<r.html5PoolSize;)try{var d=new Audio;d._unlocked=!0,r._releaseHtml5Audio(d)}catch{r.noAudio=!0;break}for(var g=0;g<r._howls.length;g++)if(!r._howls[g]._webAudio)for(var b=r._howls[g]._getSoundIds(),v=0;v<b.length;v++){var T=r._howls[g]._soundById(b[v]);T&&T._node&&!T._node._unlocked&&(T._node._unlocked=!0,T._node.load())}r._autoResume();var F=r.ctx.createBufferSource();F.buffer=r._scratchBuffer,F.connect(r.ctx.destination),typeof F.start>"u"?F.noteOn(0):F.start(0),typeof r.ctx.resume=="function"&&r.ctx.resume(),F.onended=function(){F.disconnect(0),r._audioUnlocked=!0,document.removeEventListener("touchstart",i,!0),document.removeEventListener("touchend",i,!0),document.removeEventListener("click",i,!0),document.removeEventListener("keydown",i,!0);for(var M=0;M<r._howls.length;M++)r._howls[M]._emit("unlock")}};return document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",i,!0),document.addEventListener("click",i,!0),document.addEventListener("keydown",i,!0),r}},_obtainHtml5Audio:function(){var r=this||n;if(r._html5AudioPool.length)return r._html5AudioPool.pop();var i=new Audio().play();return i&&typeof Promise<"u"&&(i instanceof Promise||typeof i.then=="function")&&i.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(r){var i=this||n;return r._unlocked&&i._html5AudioPool.push(r),i},_autoSuspend:function(){var r=this;if(!(!r.autoSuspend||!r.ctx||typeof r.ctx.suspend>"u"||!n.usingWebAudio)){for(var i=0;i<r._howls.length;i++)if(r._howls[i]._webAudio){for(var u=0;u<r._howls[i]._sounds.length;u++)if(!r._howls[i]._sounds[u]._paused)return r}return r._suspendTimer&&clearTimeout(r._suspendTimer),r._suspendTimer=setTimeout(function(){if(r.autoSuspend){r._suspendTimer=null,r.state="suspending";var d=function(){r.state="suspended",r._resumeAfterSuspend&&(delete r._resumeAfterSuspend,r._autoResume())};r.ctx.suspend().then(d,d)}},3e4),r}},_autoResume:function(){var r=this;if(!(!r.ctx||typeof r.ctx.resume>"u"||!n.usingWebAudio))return r.state==="running"&&r.ctx.state!=="interrupted"&&r._suspendTimer?(clearTimeout(r._suspendTimer),r._suspendTimer=null):r.state==="suspended"||r.state==="running"&&r.ctx.state==="interrupted"?(r.ctx.resume().then(function(){r.state="running";for(var i=0;i<r._howls.length;i++)r._howls[i]._emit("resume")}),r._suspendTimer&&(clearTimeout(r._suspendTimer),r._suspendTimer=null)):r.state==="suspending"&&(r._resumeAfterSuspend=!0),r}};var n=new t,s=function(r){var i=this;if(!r.src||r.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}i.init(r)};s.prototype={init:function(r){var i=this;return n.ctx||p(),i._autoplay=r.autoplay||!1,i._format=typeof r.format!="string"?r.format:[r.format],i._html5=r.html5||!1,i._muted=r.mute||!1,i._loop=r.loop||!1,i._pool=r.pool||5,i._preload=typeof r.preload=="boolean"||r.preload==="metadata"?r.preload:!0,i._rate=r.rate||1,i._sprite=r.sprite||{},i._src=typeof r.src!="string"?r.src:[r.src],i._volume=r.volume!==void 0?r.volume:1,i._xhr={method:r.xhr&&r.xhr.method?r.xhr.method:"GET",headers:r.xhr&&r.xhr.headers?r.xhr.headers:null,withCredentials:r.xhr&&r.xhr.withCredentials?r.xhr.withCredentials:!1},i._duration=0,i._state="unloaded",i._sounds=[],i._endTimers={},i._queue=[],i._playLock=!1,i._onend=r.onend?[{fn:r.onend}]:[],i._onfade=r.onfade?[{fn:r.onfade}]:[],i._onload=r.onload?[{fn:r.onload}]:[],i._onloaderror=r.onloaderror?[{fn:r.onloaderror}]:[],i._onplayerror=r.onplayerror?[{fn:r.onplayerror}]:[],i._onpause=r.onpause?[{fn:r.onpause}]:[],i._onplay=r.onplay?[{fn:r.onplay}]:[],i._onstop=r.onstop?[{fn:r.onstop}]:[],i._onmute=r.onmute?[{fn:r.onmute}]:[],i._onvolume=r.onvolume?[{fn:r.onvolume}]:[],i._onrate=r.onrate?[{fn:r.onrate}]:[],i._onseek=r.onseek?[{fn:r.onseek}]:[],i._onunlock=r.onunlock?[{fn:r.onunlock}]:[],i._onresume=[],i._webAudio=n.usingWebAudio&&!i._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(i),i._autoplay&&i._queue.push({event:"play",action:function(){i.play()}}),i._preload&&i._preload!=="none"&&i.load(),i},load:function(){var r=this,i=null;if(n.noAudio){r._emit("loaderror",null,"No audio support.");return}typeof r._src=="string"&&(r._src=[r._src]);for(var u=0;u<r._src.length;u++){var d,g;if(r._format&&r._format[u])d=r._format[u];else{if(g=r._src[u],typeof g!="string"){r._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}d=/^data:audio\/([^;,]+);/i.exec(g),d||(d=/\.([^.]+)$/.exec(g.split("?",1)[0])),d&&(d=d[1].toLowerCase())}if(d||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),d&&n.codecs(d)){i=r._src[u];break}}if(!i){r._emit("loaderror",null,"No codec support for selected audio sources.");return}return r._src=i,r._state="loading",window.location.protocol==="https:"&&i.slice(0,5)==="http:"&&(r._html5=!0,r._webAudio=!1),new o(r),r._webAudio&&a(r),r},play:function(r,i){var u=this,d=null;if(typeof r=="number")d=r,r=null;else{if(typeof r=="string"&&u._state==="loaded"&&!u._sprite[r])return null;if(typeof r>"u"&&(r="__default",!u._playLock)){for(var g=0,b=0;b<u._sounds.length;b++)u._sounds[b]._paused&&!u._sounds[b]._ended&&(g++,d=u._sounds[b]._id);g===1?r=null:d=null}}var v=d?u._soundById(d):u._inactiveSound();if(!v)return null;if(d&&!r&&(r=v._sprite||"__default"),u._state!=="loaded"){v._sprite=r,v._ended=!1;var T=v._id;return u._queue.push({event:"play",action:function(){u.play(T)}}),T}if(d&&!v._paused)return i||u._loadQueue("play"),v._id;u._webAudio&&n._autoResume();var F=Math.max(0,v._seek>0?v._seek:u._sprite[r][0]/1e3),M=Math.max(0,(u._sprite[r][0]+u._sprite[r][1])/1e3-F),W=M*1e3/Math.abs(v._rate),ne=u._sprite[r][0]/1e3,ue=(u._sprite[r][0]+u._sprite[r][1])/1e3;v._sprite=r,v._ended=!1;var fe=function(){v._paused=!1,v._seek=F,v._start=ne,v._stop=ue,v._loop=!!(v._loop||u._sprite[r][2])};if(F>=ue){u._ended(v);return}var B=v._node;if(u._webAudio){var q=function(){u._playLock=!1,fe(),u._refreshBuffer(v);var G=v._muted||u._muted?0:v._volume;B.gain.setValueAtTime(G,n.ctx.currentTime),v._playStart=n.ctx.currentTime,typeof B.bufferSource.start>"u"?v._loop?B.bufferSource.noteGrainOn(0,F,86400):B.bufferSource.noteGrainOn(0,F,M):v._loop?B.bufferSource.start(0,F,86400):B.bufferSource.start(0,F,M),W!==1/0&&(u._endTimers[v._id]=setTimeout(u._ended.bind(u,v),W)),i||setTimeout(function(){u._emit("play",v._id),u._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?q():(u._playLock=!0,u.once("resume",q),u._clearTimer(v._id))}else{var L=function(){B.currentTime=F,B.muted=v._muted||u._muted||n._muted||B.muted,B.volume=v._volume*n.volume(),B.playbackRate=v._rate;try{var G=B.play();if(G&&typeof Promise<"u"&&(G instanceof Promise||typeof G.then=="function")?(u._playLock=!0,fe(),G.then(function(){u._playLock=!1,B._unlocked=!0,i?u._loadQueue():u._emit("play",v._id)}).catch(function(){u._playLock=!1,u._emit("playerror",v._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),v._ended=!0,v._paused=!0})):i||(u._playLock=!1,fe(),u._emit("play",v._id)),B.playbackRate=v._rate,B.paused){u._emit("playerror",v._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}r!=="__default"||v._loop?u._endTimers[v._id]=setTimeout(u._ended.bind(u,v),W):(u._endTimers[v._id]=function(){u._ended(v),B.removeEventListener("ended",u._endTimers[v._id],!1)},B.addEventListener("ended",u._endTimers[v._id],!1))}catch(_e){u._emit("playerror",v._id,_e)}};B.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(B.src=u._src,B.load());var k=window&&window.ejecta||!B.readyState&&n._navigator.isCocoonJS;if(B.readyState>=3||k)L();else{u._playLock=!0,u._state="loading";var N=function(){u._state="loaded",L(),B.removeEventListener(n._canPlayEvent,N,!1)};B.addEventListener(n._canPlayEvent,N,!1),u._clearTimer(v._id)}}return v._id},pause:function(r){var i=this;if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"pause",action:function(){i.pause(r)}}),i;for(var u=i._getSoundIds(r),d=0;d<u.length;d++){i._clearTimer(u[d]);var g=i._soundById(u[d]);if(g&&!g._paused&&(g._seek=i.seek(u[d]),g._rateSeek=0,g._paused=!0,i._stopFade(u[d]),g._node))if(i._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),i._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||i._emit("pause",g?g._id:null)}return i},stop:function(r,i){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"stop",action:function(){u.stop(r)}}),u;for(var d=u._getSoundIds(r),g=0;g<d.length;g++){u._clearTimer(d[g]);var b=u._soundById(d[g]);b&&(b._seek=b._start||0,b._rateSeek=0,b._paused=!0,b._ended=!0,u._stopFade(d[g]),b._node&&(u._webAudio?b._node.bufferSource&&(typeof b._node.bufferSource.stop>"u"?b._node.bufferSource.noteOff(0):b._node.bufferSource.stop(0),u._cleanBuffer(b._node)):(!isNaN(b._node.duration)||b._node.duration===1/0)&&(b._node.currentTime=b._start||0,b._node.pause(),b._node.duration===1/0&&u._clearSound(b._node))),i||u._emit("stop",b._id))}return u},mute:function(r,i){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"mute",action:function(){u.mute(r,i)}}),u;if(typeof i>"u")if(typeof r=="boolean")u._muted=r;else return u._muted;for(var d=u._getSoundIds(i),g=0;g<d.length;g++){var b=u._soundById(d[g]);b&&(b._muted=r,b._interval&&u._stopFade(b._id),u._webAudio&&b._node?b._node.gain.setValueAtTime(r?0:b._volume,n.ctx.currentTime):b._node&&(b._node.muted=n._muted?!0:r),u._emit("mute",b._id))}return u},volume:function(){var r=this,i=arguments,u,d;if(i.length===0)return r._volume;if(i.length===1||i.length===2&&typeof i[1]>"u"){var g=r._getSoundIds(),b=g.indexOf(i[0]);b>=0?d=parseInt(i[0],10):u=parseFloat(i[0])}else i.length>=2&&(u=parseFloat(i[0]),d=parseInt(i[1],10));var v;if(typeof u<"u"&&u>=0&&u<=1){if(r._state!=="loaded"||r._playLock)return r._queue.push({event:"volume",action:function(){r.volume.apply(r,i)}}),r;typeof d>"u"&&(r._volume=u),d=r._getSoundIds(d);for(var T=0;T<d.length;T++)v=r._soundById(d[T]),v&&(v._volume=u,i[2]||r._stopFade(d[T]),r._webAudio&&v._node&&!v._muted?v._node.gain.setValueAtTime(u,n.ctx.currentTime):v._node&&!v._muted&&(v._node.volume=u*n.volume()),r._emit("volume",v._id))}else return v=d?r._soundById(d):r._sounds[0],v?v._volume:0;return r},fade:function(r,i,u,d){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(r,i,u,d)}}),g;r=Math.min(Math.max(0,parseFloat(r)),1),i=Math.min(Math.max(0,parseFloat(i)),1),u=parseFloat(u),g.volume(r,d);for(var b=g._getSoundIds(d),v=0;v<b.length;v++){var T=g._soundById(b[v]);if(T){if(d||g._stopFade(b[v]),g._webAudio&&!T._muted){var F=n.ctx.currentTime,M=F+u/1e3;T._volume=r,T._node.gain.setValueAtTime(r,F),T._node.gain.linearRampToValueAtTime(i,M)}g._startFadeInterval(T,r,i,u,b[v],typeof d>"u")}}return g},_startFadeInterval:function(r,i,u,d,g,b){var v=this,T=i,F=u-i,M=Math.abs(F/.01),W=Math.max(4,M>0?d/M:d),ne=Date.now();r._fadeTo=u,r._interval=setInterval(function(){var ue=(Date.now()-ne)/d;ne=Date.now(),T+=F*ue,T=Math.round(T*100)/100,F<0?T=Math.max(u,T):T=Math.min(u,T),v._webAudio?r._volume=T:v.volume(T,r._id,!0),b&&(v._volume=T),(u<i&&T<=u||u>i&&T>=u)&&(clearInterval(r._interval),r._interval=null,r._fadeTo=null,v.volume(u,r._id),v._emit("fade",r._id))},W)},_stopFade:function(r){var i=this,u=i._soundById(r);return u&&u._interval&&(i._webAudio&&u._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(u._interval),u._interval=null,i.volume(u._fadeTo,r),u._fadeTo=null,i._emit("fade",r)),i},loop:function(){var r=this,i=arguments,u,d,g;if(i.length===0)return r._loop;if(i.length===1)if(typeof i[0]=="boolean")u=i[0],r._loop=u;else return g=r._soundById(parseInt(i[0],10)),g?g._loop:!1;else i.length===2&&(u=i[0],d=parseInt(i[1],10));for(var b=r._getSoundIds(d),v=0;v<b.length;v++)g=r._soundById(b[v]),g&&(g._loop=u,r._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=u,u&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,r.playing(b[v])&&(r.pause(b[v],!0),r.play(b[v],!0)))));return r},rate:function(){var r=this,i=arguments,u,d;if(i.length===0)d=r._sounds[0]._id;else if(i.length===1){var g=r._getSoundIds(),b=g.indexOf(i[0]);b>=0?d=parseInt(i[0],10):u=parseFloat(i[0])}else i.length===2&&(u=parseFloat(i[0]),d=parseInt(i[1],10));var v;if(typeof u=="number"){if(r._state!=="loaded"||r._playLock)return r._queue.push({event:"rate",action:function(){r.rate.apply(r,i)}}),r;typeof d>"u"&&(r._rate=u),d=r._getSoundIds(d);for(var T=0;T<d.length;T++)if(v=r._soundById(d[T]),v){r.playing(d[T])&&(v._rateSeek=r.seek(d[T]),v._playStart=r._webAudio?n.ctx.currentTime:v._playStart),v._rate=u,r._webAudio&&v._node&&v._node.bufferSource?v._node.bufferSource.playbackRate.setValueAtTime(u,n.ctx.currentTime):v._node&&(v._node.playbackRate=u);var F=r.seek(d[T]),M=(r._sprite[v._sprite][0]+r._sprite[v._sprite][1])/1e3-F,W=M*1e3/Math.abs(v._rate);(r._endTimers[d[T]]||!v._paused)&&(r._clearTimer(d[T]),r._endTimers[d[T]]=setTimeout(r._ended.bind(r,v),W)),r._emit("rate",v._id)}}else return v=r._soundById(d),v?v._rate:r._rate;return r},seek:function(){var r=this,i=arguments,u,d;if(i.length===0)r._sounds.length&&(d=r._sounds[0]._id);else if(i.length===1){var g=r._getSoundIds(),b=g.indexOf(i[0]);b>=0?d=parseInt(i[0],10):r._sounds.length&&(d=r._sounds[0]._id,u=parseFloat(i[0]))}else i.length===2&&(u=parseFloat(i[0]),d=parseInt(i[1],10));if(typeof d>"u")return 0;if(typeof u=="number"&&(r._state!=="loaded"||r._playLock))return r._queue.push({event:"seek",action:function(){r.seek.apply(r,i)}}),r;var v=r._soundById(d);if(v)if(typeof u=="number"&&u>=0){var T=r.playing(d);T&&r.pause(d,!0),v._seek=u,v._ended=!1,r._clearTimer(d),!r._webAudio&&v._node&&!isNaN(v._node.duration)&&(v._node.currentTime=u);var F=function(){T&&r.play(d,!0),r._emit("seek",d)};if(T&&!r._webAudio){var M=function(){r._playLock?setTimeout(M,0):F()};setTimeout(M,0)}else F()}else if(r._webAudio){var W=r.playing(d)?n.ctx.currentTime-v._playStart:0,ne=v._rateSeek?v._rateSeek-v._seek:0;return v._seek+(ne+W*Math.abs(v._rate))}else return v._node.currentTime;return r},playing:function(r){var i=this;if(typeof r=="number"){var u=i._soundById(r);return u?!u._paused:!1}for(var d=0;d<i._sounds.length;d++)if(!i._sounds[d]._paused)return!0;return!1},duration:function(r){var i=this,u=i._duration,d=i._soundById(r);return d&&(u=i._sprite[d._sprite][1]/1e3),u},state:function(){return this._state},unload:function(){for(var r=this,i=r._sounds,u=0;u<i.length;u++)i[u]._paused||r.stop(i[u]._id),r._webAudio||(r._clearSound(i[u]._node),i[u]._node.removeEventListener("error",i[u]._errorFn,!1),i[u]._node.removeEventListener(n._canPlayEvent,i[u]._loadFn,!1),i[u]._node.removeEventListener("ended",i[u]._endFn,!1),n._releaseHtml5Audio(i[u]._node)),delete i[u]._node,r._clearTimer(i[u]._id);var d=n._howls.indexOf(r);d>=0&&n._howls.splice(d,1);var g=!0;for(u=0;u<n._howls.length;u++)if(n._howls[u]._src===r._src||r._src.indexOf(n._howls[u]._src)>=0){g=!1;break}return l&&g&&delete l[r._src],n.noAudio=!1,r._state="unloaded",r._sounds=[],r=null,null},on:function(r,i,u,d){var g=this,b=g["_on"+r];return typeof i=="function"&&b.push(d?{id:u,fn:i,once:d}:{id:u,fn:i}),g},off:function(r,i,u){var d=this,g=d["_on"+r],b=0;if(typeof i=="number"&&(u=i,i=null),i||u)for(b=0;b<g.length;b++){var v=u===g[b].id;if(i===g[b].fn&&v||!i&&v){g.splice(b,1);break}}else if(r)d["_on"+r]=[];else{var T=Object.keys(d);for(b=0;b<T.length;b++)T[b].indexOf("_on")===0&&Array.isArray(d[T[b]])&&(d[T[b]]=[])}return d},once:function(r,i,u){var d=this;return d.on(r,i,u,1),d},_emit:function(r,i,u){for(var d=this,g=d["_on"+r],b=g.length-1;b>=0;b--)(!g[b].id||g[b].id===i||r==="load")&&(setTimeout((function(v){v.call(this,i,u)}).bind(d,g[b].fn),0),g[b].once&&d.off(r,g[b].fn,g[b].id));return d._loadQueue(r),d},_loadQueue:function(r){var i=this;if(i._queue.length>0){var u=i._queue[0];u.event===r&&(i._queue.shift(),i._loadQueue()),r||u.action()}return i},_ended:function(r){var i=this,u=r._sprite;if(!i._webAudio&&r._node&&!r._node.paused&&!r._node.ended&&r._node.currentTime<r._stop)return setTimeout(i._ended.bind(i,r),100),i;var d=!!(r._loop||i._sprite[u][2]);if(i._emit("end",r._id),!i._webAudio&&d&&i.stop(r._id,!0).play(r._id),i._webAudio&&d){i._emit("play",r._id),r._seek=r._start||0,r._rateSeek=0,r._playStart=n.ctx.currentTime;var g=(r._stop-r._start)*1e3/Math.abs(r._rate);i._endTimers[r._id]=setTimeout(i._ended.bind(i,r),g)}return i._webAudio&&!d&&(r._paused=!0,r._ended=!0,r._seek=r._start||0,r._rateSeek=0,i._clearTimer(r._id),i._cleanBuffer(r._node),n._autoSuspend()),!i._webAudio&&!d&&i.stop(r._id,!0),i},_clearTimer:function(r){var i=this;if(i._endTimers[r]){if(typeof i._endTimers[r]!="function")clearTimeout(i._endTimers[r]);else{var u=i._soundById(r);u&&u._node&&u._node.removeEventListener("ended",i._endTimers[r],!1)}delete i._endTimers[r]}return i},_soundById:function(r){for(var i=this,u=0;u<i._sounds.length;u++)if(r===i._sounds[u]._id)return i._sounds[u];return null},_inactiveSound:function(){var r=this;r._drain();for(var i=0;i<r._sounds.length;i++)if(r._sounds[i]._ended)return r._sounds[i].reset();return new o(r)},_drain:function(){var r=this,i=r._pool,u=0,d=0;if(!(r._sounds.length<i)){for(d=0;d<r._sounds.length;d++)r._sounds[d]._ended&&u++;for(d=r._sounds.length-1;d>=0;d--){if(u<=i)return;r._sounds[d]._ended&&(r._webAudio&&r._sounds[d]._node&&r._sounds[d]._node.disconnect(0),r._sounds.splice(d,1),u--)}}},_getSoundIds:function(r){var i=this;if(typeof r>"u"){for(var u=[],d=0;d<i._sounds.length;d++)u.push(i._sounds[d]._id);return u}else return[r]},_refreshBuffer:function(r){var i=this;return r._node.bufferSource=n.ctx.createBufferSource(),r._node.bufferSource.buffer=l[i._src],r._panner?r._node.bufferSource.connect(r._panner):r._node.bufferSource.connect(r._node),r._node.bufferSource.loop=r._loop,r._loop&&(r._node.bufferSource.loopStart=r._start||0,r._node.bufferSource.loopEnd=r._stop||0),r._node.bufferSource.playbackRate.setValueAtTime(r._rate,n.ctx.currentTime),i},_cleanBuffer:function(r){var i=this,u=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!r.bufferSource)return i;if(n._scratchBuffer&&r.bufferSource&&(r.bufferSource.onended=null,r.bufferSource.disconnect(0),u))try{r.bufferSource.buffer=n._scratchBuffer}catch{}return r.bufferSource=null,i},_clearSound:function(r){var i=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);i||(r.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var o=function(r){this._parent=r,this.init()};o.prototype={init:function(){var r=this,i=r._parent;return r._muted=i._muted,r._loop=i._loop,r._volume=i._volume,r._rate=i._rate,r._seek=0,r._paused=!0,r._ended=!0,r._sprite="__default",r._id=++n._counter,i._sounds.push(r),r.create(),r},create:function(){var r=this,i=r._parent,u=n._muted||r._muted||r._parent._muted?0:r._volume;return i._webAudio?(r._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),r._node.gain.setValueAtTime(u,n.ctx.currentTime),r._node.paused=!0,r._node.connect(n.masterGain)):n.noAudio||(r._node=n._obtainHtml5Audio(),r._errorFn=r._errorListener.bind(r),r._node.addEventListener("error",r._errorFn,!1),r._loadFn=r._loadListener.bind(r),r._node.addEventListener(n._canPlayEvent,r._loadFn,!1),r._endFn=r._endListener.bind(r),r._node.addEventListener("ended",r._endFn,!1),r._node.src=i._src,r._node.preload=i._preload===!0?"auto":i._preload,r._node.volume=u*n.volume(),r._node.load()),r},reset:function(){var r=this,i=r._parent;return r._muted=i._muted,r._loop=i._loop,r._volume=i._volume,r._rate=i._rate,r._seek=0,r._rateSeek=0,r._paused=!0,r._ended=!0,r._sprite="__default",r._id=++n._counter,r},_errorListener:function(){var r=this;r._parent._emit("loaderror",r._id,r._node.error?r._node.error.code:0),r._node.removeEventListener("error",r._errorFn,!1)},_loadListener:function(){var r=this,i=r._parent;i._duration=Math.ceil(r._node.duration*10)/10,Object.keys(i._sprite).length===0&&(i._sprite={__default:[0,i._duration*1e3]}),i._state!=="loaded"&&(i._state="loaded",i._emit("load"),i._loadQueue()),r._node.removeEventListener(n._canPlayEvent,r._loadFn,!1)},_endListener:function(){var r=this,i=r._parent;i._duration===1/0&&(i._duration=Math.ceil(r._node.duration*10)/10,i._sprite.__default[1]===1/0&&(i._sprite.__default[1]=i._duration*1e3),i._ended(r)),r._node.removeEventListener("ended",r._endFn,!1)}};var l={},a=function(r){var i=r._src;if(l[i]){r._duration=l[i].duration,_(r);return}if(/^data:[^;]+;base64,/.test(i)){for(var u=atob(i.split(",")[1]),d=new Uint8Array(u.length),g=0;g<u.length;++g)d[g]=u.charCodeAt(g);f(d.buffer,r)}else{var b=new XMLHttpRequest;b.open(r._xhr.method,i,!0),b.withCredentials=r._xhr.withCredentials,b.responseType="arraybuffer",r._xhr.headers&&Object.keys(r._xhr.headers).forEach(function(v){b.setRequestHeader(v,r._xhr.headers[v])}),b.onload=function(){var v=(b.status+"")[0];if(v!=="0"&&v!=="2"&&v!=="3"){r._emit("loaderror",null,"Failed loading audio file with status: "+b.status+".");return}f(b.response,r)},b.onerror=function(){r._webAudio&&(r._html5=!0,r._webAudio=!1,r._sounds=[],delete l[i],r.load())},c(b)}},c=function(r){try{r.send()}catch{r.onerror()}},f=function(r,i){var u=function(){i._emit("loaderror",null,"Decoding audio data failed.")},d=function(g){g&&i._sounds.length>0?(l[i._src]=g,_(i,g)):u()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(r).then(d).catch(u):n.ctx.decodeAudioData(r,d,u)},_=function(r,i){i&&!r._duration&&(r._duration=i.duration),Object.keys(r._sprite).length===0&&(r._sprite={__default:[0,r._duration*1e3]}),r._state!=="loaded"&&(r._state="loaded",r._emit("load"),r._loadQueue())},p=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var r=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),i=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),u=i?parseInt(i[1],10):null;if(r&&u&&u<9){var d=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!d&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=s,typeof Kt<"u"?(Kt.HowlerGlobal=t,Kt.Howler=n,Kt.Howl=s,Kt.Sound=o):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=s,window.Sound=o)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var s=this;if(!s.ctx||!s.ctx.listener)return s;for(var o=s._howls.length-1;o>=0;o--)s._howls[o].stereo(n);return s},HowlerGlobal.prototype.pos=function(n,s,o){var l=this;if(!l.ctx||!l.ctx.listener)return l;if(s=typeof s!="number"?l._pos[1]:s,o=typeof o!="number"?l._pos[2]:o,typeof n=="number")l._pos=[n,s,o],typeof l.ctx.listener.positionX<"u"?(l.ctx.listener.positionX.setTargetAtTime(l._pos[0],Howler.ctx.currentTime,.1),l.ctx.listener.positionY.setTargetAtTime(l._pos[1],Howler.ctx.currentTime,.1),l.ctx.listener.positionZ.setTargetAtTime(l._pos[2],Howler.ctx.currentTime,.1)):l.ctx.listener.setPosition(l._pos[0],l._pos[1],l._pos[2]);else return l._pos;return l},HowlerGlobal.prototype.orientation=function(n,s,o,l,a,c){var f=this;if(!f.ctx||!f.ctx.listener)return f;var _=f._orientation;if(s=typeof s!="number"?_[1]:s,o=typeof o!="number"?_[2]:o,l=typeof l!="number"?_[3]:l,a=typeof a!="number"?_[4]:a,c=typeof c!="number"?_[5]:c,typeof n=="number")f._orientation=[n,s,o,l,a,c],typeof f.ctx.listener.forwardX<"u"?(f.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),f.ctx.listener.forwardY.setTargetAtTime(s,Howler.ctx.currentTime,.1),f.ctx.listener.forwardZ.setTargetAtTime(o,Howler.ctx.currentTime,.1),f.ctx.listener.upX.setTargetAtTime(l,Howler.ctx.currentTime,.1),f.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),f.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):f.ctx.listener.setOrientation(n,s,o,l,a,c);else return _;return f},Howl.prototype.init=(function(n){return function(s){var o=this;return o._orientation=s.orientation||[1,0,0],o._stereo=s.stereo||null,o._pos=s.pos||null,o._pannerAttr={coneInnerAngle:typeof s.coneInnerAngle<"u"?s.coneInnerAngle:360,coneOuterAngle:typeof s.coneOuterAngle<"u"?s.coneOuterAngle:360,coneOuterGain:typeof s.coneOuterGain<"u"?s.coneOuterGain:0,distanceModel:typeof s.distanceModel<"u"?s.distanceModel:"inverse",maxDistance:typeof s.maxDistance<"u"?s.maxDistance:1e4,panningModel:typeof s.panningModel<"u"?s.panningModel:"HRTF",refDistance:typeof s.refDistance<"u"?s.refDistance:1,rolloffFactor:typeof s.rolloffFactor<"u"?s.rolloffFactor:1},o._onstereo=s.onstereo?[{fn:s.onstereo}]:[],o._onpos=s.onpos?[{fn:s.onpos}]:[],o._onorientation=s.onorientation?[{fn:s.onorientation}]:[],n.call(this,s)}})(Howl.prototype.init),Howl.prototype.stereo=function(n,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"stereo",action:function(){o.stereo(n,s)}}),o;var l=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof s>"u")if(typeof n=="number")o._stereo=n,o._pos=[n,0,0];else return o._stereo;for(var a=o._getSoundIds(s),c=0;c<a.length;c++){var f=o._soundById(a[c]);if(f)if(typeof n=="number")f._stereo=n,f._pos=[n,0,0],f._node&&(f._pannerAttr.panningModel="equalpower",(!f._panner||!f._panner.pan)&&t(f,l),l==="spatial"?typeof f._panner.positionX<"u"?(f._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),f._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),f._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):f._panner.setPosition(n,0,0):f._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),o._emit("stereo",f._id);else return f._stereo}return o},Howl.prototype.pos=function(n,s,o,l){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(n,s,o,l)}}),a;if(s=typeof s!="number"?0:s,o=typeof o!="number"?-.5:o,typeof l>"u")if(typeof n=="number")a._pos=[n,s,o];else return a._pos;for(var c=a._getSoundIds(l),f=0;f<c.length;f++){var _=a._soundById(c[f]);if(_)if(typeof n=="number")_._pos=[n,s,o],_._node&&((!_._panner||_._panner.pan)&&t(_,"spatial"),typeof _._panner.positionX<"u"?(_._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),_._panner.positionY.setValueAtTime(s,Howler.ctx.currentTime),_._panner.positionZ.setValueAtTime(o,Howler.ctx.currentTime)):_._panner.setPosition(n,s,o)),a._emit("pos",_._id);else return _._pos}return a},Howl.prototype.orientation=function(n,s,o,l){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(n,s,o,l)}}),a;if(s=typeof s!="number"?a._orientation[1]:s,o=typeof o!="number"?a._orientation[2]:o,typeof l>"u")if(typeof n=="number")a._orientation=[n,s,o];else return a._orientation;for(var c=a._getSoundIds(l),f=0;f<c.length;f++){var _=a._soundById(c[f]);if(_)if(typeof n=="number")_._orientation=[n,s,o],_._node&&(_._panner||(_._pos||(_._pos=a._pos||[0,0,-.5]),t(_,"spatial")),typeof _._panner.orientationX<"u"?(_._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),_._panner.orientationY.setValueAtTime(s,Howler.ctx.currentTime),_._panner.orientationZ.setValueAtTime(o,Howler.ctx.currentTime)):_._panner.setOrientation(n,s,o)),a._emit("orientation",_._id);else return _._orientation}return a},Howl.prototype.pannerAttr=function(){var n=this,s=arguments,o,l,a;if(!n._webAudio)return n;if(s.length===0)return n._pannerAttr;if(s.length===1)if(typeof s[0]=="object")o=s[0],typeof l>"u"&&(o.pannerAttr||(o.pannerAttr={coneInnerAngle:o.coneInnerAngle,coneOuterAngle:o.coneOuterAngle,coneOuterGain:o.coneOuterGain,distanceModel:o.distanceModel,maxDistance:o.maxDistance,refDistance:o.refDistance,rolloffFactor:o.rolloffFactor,panningModel:o.panningModel}),n._pannerAttr={coneInnerAngle:typeof o.pannerAttr.coneInnerAngle<"u"?o.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof o.pannerAttr.coneOuterAngle<"u"?o.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof o.pannerAttr.coneOuterGain<"u"?o.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof o.pannerAttr.distanceModel<"u"?o.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof o.pannerAttr.maxDistance<"u"?o.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof o.pannerAttr.refDistance<"u"?o.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof o.pannerAttr.rolloffFactor<"u"?o.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof o.pannerAttr.panningModel<"u"?o.pannerAttr.panningModel:n._panningModel});else return a=n._soundById(parseInt(s[0],10)),a?a._pannerAttr:n._pannerAttr;else s.length===2&&(o=s[0],l=parseInt(s[1],10));for(var c=n._getSoundIds(l),f=0;f<c.length;f++)if(a=n._soundById(c[f]),a){var _=a._pannerAttr;_={coneInnerAngle:typeof o.coneInnerAngle<"u"?o.coneInnerAngle:_.coneInnerAngle,coneOuterAngle:typeof o.coneOuterAngle<"u"?o.coneOuterAngle:_.coneOuterAngle,coneOuterGain:typeof o.coneOuterGain<"u"?o.coneOuterGain:_.coneOuterGain,distanceModel:typeof o.distanceModel<"u"?o.distanceModel:_.distanceModel,maxDistance:typeof o.maxDistance<"u"?o.maxDistance:_.maxDistance,refDistance:typeof o.refDistance<"u"?o.refDistance:_.refDistance,rolloffFactor:typeof o.rolloffFactor<"u"?o.rolloffFactor:_.rolloffFactor,panningModel:typeof o.panningModel<"u"?o.panningModel:_.panningModel};var p=a._panner;p||(a._pos||(a._pos=n._pos||[0,0,-.5]),t(a,"spatial"),p=a._panner),p.coneInnerAngle=_.coneInnerAngle,p.coneOuterAngle=_.coneOuterAngle,p.coneOuterGain=_.coneOuterGain,p.distanceModel=_.distanceModel,p.maxDistance=_.maxDistance,p.refDistance=_.refDistance,p.rolloffFactor=_.rolloffFactor,p.panningModel=_.panningModel}return n},Sound.prototype.init=(function(n){return function(){var s=this,o=s._parent;s._orientation=o._orientation,s._stereo=o._stereo,s._pos=o._pos,s._pannerAttr=o._pannerAttr,n.call(this),s._stereo?o.stereo(s._stereo):s._pos&&o.pos(s._pos[0],s._pos[1],s._pos[2],s._id)}})(Sound.prototype.init),Sound.prototype.reset=(function(n){return function(){var s=this,o=s._parent;return s._orientation=o._orientation,s._stereo=o._stereo,s._pos=o._pos,s._pannerAttr=o._pannerAttr,s._stereo?o.stereo(s._stereo):s._pos?o.pos(s._pos[0],s._pos[1],s._pos[2],s._id):s._panner&&(s._panner.disconnect(0),s._panner=void 0,o._refreshBuffer(s)),n.call(this)}})(Sound.prototype.reset);var t=function(n,s){s=s||"spatial",s==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(ar)),ar}var Ia=ka();const Ea=["width","height","viewBox","stroke","stroke-width"],$a=["d"],Ma=$e({__name:"ChevronDownIcon",props:{width:{default:128},height:{default:32},strokeWidth:{default:3},inverted:{type:Boolean,default:!1}},setup(e){return(t,n)=>(K(),oe("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:`0 0 ${t.width} ${t.height}`,fill:"none",stroke:t.inverted?"#c9bfb5":"black","stroke-width":t.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-chevron-down-icon lucide-chevron-down"},[ae("path",{d:`m${t.strokeWidth/2} ${t.strokeWidth/2} ${(t.width-t.strokeWidth)/2} ${t.height-t.strokeWidth} ${(t.width-t.strokeWidth)/2}-${t.height-t.strokeWidth}`},null,8,$a)],8,Ea))}}),Pa=["width","height"],Oa=$e({__name:"HeadphonesIcon",props:{size:{default:24}},setup(e){return(t,n)=>(K(),oe("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-headphones-icon lucide-headphones"},[...n[0]||(n[0]=[ae("path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"},null,-1)])],8,Pa))}}),Fa=["width","height","viewBox","fill"],Ba=$e({__name:"PauseBtn",props:{fillColor:{},size:{}},emits:["click"],setup(e){return(t,n)=>(K(),oe("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size??24,height:t.size??24,viewBox:`0 0 ${t.size??24} ${t.size??24}`,fill:t.fillColor??"white",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-pause-icon lucide-pause cursor-pointer",onClick:n[0]||(n[0]=s=>t.$emit("click"))},[...n[1]||(n[1]=[ae("rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"},null,-1),ae("rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"},null,-1)])],8,Fa))}}),La=["width","height","viewBox","fill"],Ha=$e({__name:"PlayBtn",props:{fillColor:{},size:{}},emits:["click"],setup(e){return(t,n)=>(K(),oe("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size??24,height:t.size??24,viewBox:`0 0 ${t.size??24} ${t.size??24}`,fill:t.fillColor??"white",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-play-icon lucide-play cursor-pointer",onClick:n[0]||(n[0]=s=>t.$emit("click"))},[...n[1]||(n[1]=[ae("path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"},null,-1)])],8,La))}}),Ra=["width","height","viewBox","fill"],Da=$e({__name:"VolumeIcon",props:{fillColor:{},size:{}},emits:["click"],setup(e){return(t,n)=>(K(),oe("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size??24,height:t.size??24,viewBox:`0 0 ${t.size??24} ${t.size??24}`,fill:t.fillColor??"none",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-volume2-icon lucide-volume-2"},[...n[0]||(n[0]=[ae("path",{fill:"white",d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"},null,-1),ae("path",{d:"M16 9a5 5 0 0 1 0 6"},null,-1),ae("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"},null,-1)])],8,Ra))}}),Na=["width","height","viewBox","fill"],ja=$e({__name:"VolumeMuteIcon",props:{fillColor:{},size:{}},emits:["click"],setup(e){return(t,n)=>(K(),oe("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size??24,height:t.size??24,viewBox:`0 0 ${t.size??24} ${t.size??24}`,fill:t.fillColor??"white",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-volume-off-icon lucide-volume-off"},[...n[0]||(n[0]=[Bl('<path d="M16 9a5 5 0 0 1 .95 2.293"></path><path d="M19.364 5.636a9 9 0 0 1 1.889 9.96"></path><path d="m2 2 20 20"></path><path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"></path><path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686"></path>',5)])],8,Na))}}),Va={class:"flex h-full flex-row items-center justify-center gap-x-4"},Ga={class:"triangle-css"},Wa={key:0,class:"absolute ml-5 flex h-full max-w-[100px] flex-col justify-center"},Ka=["value"],Ua=$e({__name:"AudioPlayer",props:{src:{}},setup(e,{expose:t}){const n=e,s=he(.05),o=he(!1),l=he(!1);let a=null,c=null;const f=u=>new Ia.Howl({src:[u],loop:!0,volume:s.value,html5:!0}),_=()=>{a&&(a.play(),l.value=!0)},p=()=>{a&&a.pause(),l.value=!1},r=u=>{const d=Number(u.target.value);s.value=d,a&&a.volume(d)},i=(u,d,g=1e3)=>{const v=g/60;let T=0;const F=()=>{T++;const M=T/60;u.volume(s.value*(1-M)),d.volume(s.value*M),T<60?setTimeout(F,v):(u.stop(),u.unload())};F()};return t({play:_,pause:p}),Rt(()=>n.src,(u,d)=>{if(!u)return;const g=f(u),b=l.value;a&&d?(c=a,a=g,b&&(g.volume(0),g.play(),i(c,g,2e3),l.value=!0)):(a=g,b&&_())},{immediate:!0}),Rt(s,u=>{a&&!c&&a.volume(u)}),cn(()=>{a&&a.unload(),c&&c.unload()}),(u,d)=>(K(),oe("div",Va,[ae("div",Ga,[l.value?(K(),Re(He(Ba),{key:1,onClick:p})):(K(),Re(He(Ha),{key:0,onClick:_}))]),ae("div",{class:"flex h-full flex-row items-center",onMouseover:d[0]||(d[0]=g=>o.value=!0),onMouseleave:d[1]||(d[1]=g=>o.value=!1)},[s.value>0?(K(),Re(He(Da),{key:0})):(K(),Re(He(ja),{key:1})),ie(An,{name:"volume"},{default:ct(()=>[o.value?(K(),oe("div",Wa,[ae("input",{type:"range",min:"0",max:"1",step:"0.01",value:s.value,onInput:r},null,40,Ka)])):xt("",!0)]),_:1})],32)]))}}),It=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},qa=It(Ua,[["__scopeId","data-v-3e683d19"]]),Ya={class:"animated-button-container"},Xa=.05,za=300,Ja=$e({__name:"Button",props:{shrink:{type:Boolean,default:!1},inverted:{type:Boolean}},emits:["click"],setup(e){const t=he(),n=he("translate(0px, 0px)");let s=0,o=0,l=null;function a(){if(!t.value){n.value="translate(0px, 0px)";return}const f=t.value.getBoundingClientRect(),_=f.left+f.width/2,p=f.top+f.height/2,r=s-_,i=o-p,u=Math.sqrt(r*r+i*i),d=Xa/(1+Math.pow(u/za,2)),g=r*d,b=i*d;n.value=`translate(${g.toFixed(2)}px, ${b.toFixed(2)}px)`}function c(f){s=f.clientX,o=f.clientY,l===null&&(l=requestAnimationFrame(()=>{a(),l=null}))}return un(()=>{window.addEventListener("mousemove",c,{passive:!0})}),cn(()=>{window.removeEventListener("mousemove",c),l!==null&&cancelAnimationFrame(l)}),(f,_)=>(K(),oe("div",Ya,[ae("button",{ref_key:"buttonRef",ref:t,class:tt([{shrink:f.shrink,"border-white text-white!":f.inverted},"animated-button rounded-2xl border-2 border-solid border-[#1a1612] px-8 py-4 text-2xl font-medium"]),style:kt({transform:n.value}),onClick:_[0]||(_[0]=p=>f.$emit("click"))},[Qi(f.$slots,"default",{},()=>[_[1]||(_[1]=Fn("Начать",-1))])],6)]))}}),xs=It(Ja,[["__scopeId","data-v-b2e0575f"]]),Za=["id"],Qa=$e({__name:"ChooseBtn",props:{id:{}},emits:["click"],setup(e){return(t,n)=>(K(),oe("button",{id:t.id,class:"bg-none text-center text-white select-none",onClick:n[0]||(n[0]=s=>t.$emit("click",t.id))},[ie(He(Ma))],8,Za))}}),vn=["1.1.1 - Сомнения","1.1.2.1 - Память","1.1.2.2.1 - Любовь","1.1.2.2.2 - Обида","1.2.1 - Забвение","1.2.2 - Время","2.2.1 - Боль","2.2.2 - Меланхолия","2.1.1 - Надежда","2.1.2 - Отчаяние"],Wo="ENDINGS";function yr(){const e=localStorage.getItem(Wo);if(!e)return[];const t=JSON.parse(e);return[...new Set(t)]}function eu(e){localStorage.setItem(Wo,JSON.stringify(e))}function tu(e){const t=yr();t.push(e),eu(t)}const nu=["checked","disabled"],ru=$e({__name:"Bubble",props:tl({size:{default:void 0},locked:{type:Boolean,default:!1}},{checked:{type:Boolean,default:!1},checkedModifiers:{}}),emits:["update:checked"],setup(e){const t=xl(e,"checked");return(n,s)=>(K(),oe("label",null,[ae("input",{value:"on",name:"dummy",type:"checkbox",class:tt(["bubble",n.size]),checked:t.value,disabled:n.locked},null,10,nu)]))}}),Ss=It(ru,[["__scopeId","data-v-2c5c2db1"]]),su={class:"fixed top-12 flex w-full flex-row justify-between px-2"},ou={class:"flex flex-col items-center justify-center gap-y-1"},iu={key:0,class:"description cursor-default"},lu={class:"flex flex-col items-center justify-center gap-y-1"},au={key:0,class:"description cursor-default"},uu=$e({__name:"EndingIndicator",setup(e,{expose:t}){const n=he(yr());t({update:()=>n.value=yr()}),Rt(n,o=>console.log(o));const s=o=>o.split("-").at(-1)?.trim();return(o,l)=>(K(),oe("div",su,[ae("div",ou,[(K(!0),oe(me,null,$n(He(vn).slice(0,He(vn).length/2),a=>(K(),oe("div",{key:a,class:"goal flex w-full flex-row items-center justify-start gap-x-2"},[ie(Ss,{class:"bubble-wrapper",checked:n.value.includes(a),locked:"",size:"smaller"},null,8,["checked"]),n.value.includes(a)?(K(),oe("p",iu,xn(s(a)),1)):xt("",!0)]))),128))]),ae("div",lu,[(K(!0),oe(me,null,$n(He(vn).slice(He(vn).length/2),a=>(K(),oe("div",{key:a,class:"goal flex w-full flex-row items-center justify-end gap-x-2"},[n.value.includes(a)?(K(),oe("p",au,xn(s(a)),1)):xt("",!0),ie(Ss,{class:"bubble-wrapper",checked:n.value.includes(a),locked:"",size:"smaller"},null,8,["checked"])]))),128))])]))}}),cu=It(uu,[["__scopeId","data-v-edfa884c"]]),fu=["innerHTML"],du=$e({__name:"PoemCard",props:{content:{},justify:{default:"justify"},meta:{default:void 0}},setup(e){const t=n=>n.split(`
`).join("<br>");return(n,s)=>(K(),oe("div",{class:tt(["poem-card flex w-full flex-col gap-2",{disappearing:n.meta?.disappearing}])},[ae("p",{class:"h-[20%] rounded-2xl bg-transparent font-semibold",style:kt({"text-align-last":n.justify}),innerHTML:t(n.content)},null,12,fu)],2))}}),pu=It(du,[["__scopeId","data-v-0bf9880b"]]),_u=$e({__name:"ScrollProgress",setup(e){const t=he(0),n=()=>{const s=document.documentElement.scrollTop,o=document.documentElement.scrollHeight-document.documentElement.clientHeight;t.value=o>0?s/o*100:0};return un(()=>{window.addEventListener("scroll",n),n();const s=new MutationObserver(()=>{Mt(()=>{n()})});s.observe(document.body,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),window.__scrollProgressObserver=s}),cn(()=>{window.removeEventListener("scroll",n),window.__scrollProgressObserver&&(window.__scrollProgressObserver.disconnect(),delete window.__scrollProgressObserver)}),(s,o)=>(K(),oe("div",{class:"scroll-progress",style:kt({height:t.value+"%"})},null,4))}}),hu=It(_u,[["__scopeId","data-v-e4928b34"]]),pe={"(0)Fate":"./mus/(0)Fate.opus","(1)Voyage":"./mus/(1)Voyage.opus","(1_1)Home":"./mus/(1_1)Home.opus","(1_2)Rachel":"./mus/(1_2)Rachel.opus","(1_3)Amberley":"./mus/(1_3)Amberley.opus","(1_4)Promenade":"./mus/(1_4)Promenade.opus","(1_5)Letters":"./mus/(1_5)Letters.opus","(1_6)When the Love Falls":"./mus/(1_6)When the Love Falls.opus","(1_9)Starry Night":"./mus/(1_9)Starry Night.opus","(1_11)Break":"./mus/(1_11)Break.opus","(1_12)Last Choise":"./mus/(1_12)Last Choise.opus","(1_13)Secret":"./mus/(1_13)Secret.opus","(1_14)Hold Me Please":"./mus/(1_14)Hold Me Please.opus","(1_15)Coward":"./mus/(1_15)Coward.opus","(1_16)Malfaiteur":"./mus/(1_16)Malfaiteur.opus","(1_17)Mistake":"./mus/(1_17)Mistake.opus","(1_18)Fatal Mistake":"./mus/(1_18)Fatal Mistake.opus","(1_19)Empathy":"./mus/(1_19)Empathy.opus","(1_20)Décadence":"./mus/(1_20)Décadence.opus","(1_21)Hopefulness":"./mus/(1_21)Hopefulness.opus"};function C(e){return{text:e[0],justify:"left"}}function I(e){return{text:e[0],justify:"right"}}function Qt(e){return{text:e[0],meta:{disappearing:!0}}}function Le(e){return typeof e=="string"?e:e.text}function Ko(e){return typeof e=="string"?void 0:e.meta}function je(e){return typeof e=="string"?void 0:e.justify}const U=(e=void 0,t="center",n={})=>(s,o,l)=>{const a=Le(s),c=je(s)??(typeof t=="function"?t(s,o,l):t??"center"),f=Ko(s)??(typeof n=="function"?n(s,o,l):n??void 0);return{text:a,visible:!1,hasButton:o==l.length-1,justify:c,newSong:e,meta:f}},mu=[{id:"beginning",next:"neutral-0",text:`Вчера студент, сегодня – безработный доктор,
      амбициями отличный от других. В руках диплом –
      его идеальный контур стал антиподом радостей мирских.
      Я думал, город всё изменит – меня, работу, страсти…
      Но увы – сложнее было не найти призвание, а осознать,
      что все вокруг меня давно мертвы. Мертвы не люди,
      но их personáe. «Туманный Альбион» взрастил в себе
      разврат и горечь, желчно насмехаясь, плюя в лицо
      красавице Судьбе. Опять она… О ней я думал чаще, чем
      думал о науке естества. И понял только то, что этой даме
      нет дела до такого существа. Я волен делать то что захочу!
      И первым делом приобрету-ка я билет к себе домой.`,visible:!1,hasButton:!0,justify:"justify"}],wr=[`Как сильно это восхищает…
  Вокзал, великий исполин,
  Он уважение внушает –
  Он как герой седых былин.`,`Я долго думал, стоит ли?
  Там нет давно моих родных.
  В деревне этой, Эмберли,
  Полным-полно людей чужих.`,`Чуть меньше думал, что в багаж
  С собой в деревню погрузить,
  И выбрал старый саквояж,
  Что развалиться норовит.`,`Моих вещей там крайне мало –
  Я взял с собой не тряпок горсть,
  А медицинские лекала:
  Шить чью-то кожу, пилить кость.`,`И мне так нервно – я не знаю,
  Встречают там таких как я?
  Тяну шатлен… И выдыхаю.
  Отбытие через полчаса.`,`Я постарался мыслить шире –
  А помнят ли меня вообще?
  Во всём широком Глостершире
  Нуждаются ли во враче?`,`Отнюдь, я еду не с затеей
  Соседей старых исцелить,
  А лишь с сомнительной идеей
  Их уважение заслужить.`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,id:`neutral-${t}`,justify:"center",next:`neutral-${t+1}`})),gu=[`А тик в ноге никак не хочет
  Замолкнуть к матери святой.
  И что бы я себе не прочил
  Для них я всё ещё чужой.`,`Я брошу всё не ради цели,
  Я брошу всё не для любви, –
  Я прослежу, как Лондон тлеет,
  Я вновь останусь на мели…`,`А мать ведь точно говорила:
  «Живи не пыткой, а мечтой».
  Но вряд ли бы она хвалила
  Моё стремление домой.`,`Я слышу поезд – его рокот,
  Созвучный с чисткою горла́,
  Перерастает в звонкий клёкот,
  Звенящий, словно визг орла.`,`И поздно, поздно сомневаться,
  Я выбрал счастье в тишине.
  Пора вставать и собираться
  В мой долгий путь наедине.`,`Платформа – шумная поляна,
  Где в центре лёг железный змей.
  А я, цветок среди бурьяна,
  Старался выглядеть скромней.`,`Он дышит паром и ликует,
  Он знает – я его боюсь.
  Он неуверенность смакует –
  Сегодня я с ней поборюсь… `].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,id:`neutral-${t+wr.length}`,justify:"center",next:t==n.length-1?[{id:"brave-0",label:"Храбрец",song:pe["(1)Voyage"],brigtness:1.2},{id:"fear-0",label:"Страх",song:pe["(1_15)Coward"],brigtness:.8}]:`neutral-${t+wr.length+1}`})),vu=[`…Страх победил. Я снова испугался.
  Я испугался осознания перемен,
  И с городом насилия и измен,
  Выходит, слишком рано попрощался.`,`Глотая подступивший к горлу шарик,
  Я утираю слёзы рукавом своим,
  А поезд тронулся, представившись глухим,
  И вскоре скрылся в паровых вуалях.`,`Я вновь разбит своим ударом.
  И на пути к себе домой,
  Пока злой рок трубит в фанфары,
  Я есть их слушатель немой.`,`Как можно было так в себя поверить?
  Когда казалось, будто способ есть
  Открыть в иную жизнь спокойно двери –
  На поезд другой жизни пересесть.`,`Мне тошно думать о своей кончине
  Средь грязных улиц города грехов.
  Не Лондон должен стать моей могилой,
  А тихий холм, обитель пастухов.`,`Чем дольше думаю я о своём решении,
  Тем мне труднее сдерживать себя.
  Пусть и иду я в стойком отрешении –
  В груди моей хладнее января.`,`И я стараюсь двигаться прямее,
  Не проявлять чужим мирам свою тоску,
  Но с каждым взглядом мысли всё дурнее
  И чувство, будто вот-вот закричу.`].map(U()),bu=[`Сверну с Флит-Стрит, пока ещё не поздно –
  Средь улиц от людей спасения нет.
  Там быстро и достаточно скабрёзно
  И на невинного напишут злой памфлет.`,`Контраст стал чётче – смрад влаги и мочи
  Бил в чувства как ударом грома.
  А настроение закоулка – будто я в ночи
  Ищу себе ночлежные хоромы.`,`Здесь кроется всей жизни простота –
  Артерии улиц, тромбы площадей…
  Соседствуют им мрак и нищета,
  Где люди не похожи на людей.`,`Шум позади заметно поутих, –
  Ему заменой разразился кашлем
  Один из алкоголиков седых,
  Не прячущийся от других за фальшью.`,`Я уважал его? Отнюдь, он просто есть.
  Но невозможно не заметить вот что –
  Над ним уже сплетала сети смерть,
  Чтоб их забросить дней так через сорок.`,`Я встал пред ним. Он поднял взгляд и замер,
  Пусть замереть он полностью не мог.
  Он был столь жалок и убог, –
  Я тут же вместе с ним невольно замер.`,`Он не просил ни денег, ни ночлега.
  Я знал, к чему прикован этот взгляд –
  Его глаза моё пальто сверлят,
  А он надеялся спастись, дурной калека.`].map(U()),yu=[...vu,...bu].map((e,t,n)=>({...e,id:`fear-${t}`,next:t==n.length-1?[{id:"fear-ignore-0",label:"Плевать",song:pe["(1_16)Malfaiteur"],brigtness:.6},{id:"fear-help-0",label:"Помочь",song:pe["(1_19)Empathy"],brigtness:1}]:`fear-${t+1}`})),wu=[`Но я плевать хотел. Его проблемы – мусор.
  Мне не до тех, кто свою жизнь уже сломал.
  Я на него так слышимо ругнулся,
  Что он со мной ещё полмира проклинал.`,`Весь мир же будто превратился в серый,
  Я ненависть свою в груди копил.
  Чтоб окончательно проститься с верой,
  Мне захотелось это всё запить.`,`Я клятву дал – и сразу же нарушил.
  Я не помог хоть чем-то бедняку.
  Я столько лет все эти лекции слушал…
  Я самый настоящий malfaitéur.`,`Его не ждёт чудесное спасение –
  Я знаю, он умрёт, не ровен час.
  И сердце прекратит своё биение,
  Чему помог и я, и злой миазм.`,`Я не достоин звать себя dottore,
  Пока не искуплю сей горький грех.
  Мне б самому не пасть от этой хвори,
  И может быть тогда придёт успех…`,`И вот я здесь – без целей и работы,
  Желающий влачиться целый год,
  Но обречённый выживать на льготы,
  Что скоро королевство отберёт.`].map(U()),Au=["<…>",`Каким ты был человеком, таким и остался.
Слабым, беспомощным, способным лишь ныть,
И жить иждивениями государства,
Пока оно не устанет кормить.`,`И это случилось – кончились деньги,
Мне нечем теперь прокормиться зимой.
Я продал практически все свои вещи,
Но вновь обнищал и питаюсь слюной.`,`Я вздрогнул от мысли, что есть ещё деньги –
Набит инструментами мой саквояж.
Какие сейчас на сребришко расценки?
Я помню, здесь жил за углом свой торгаш…`,`Я лезу в шкафы, вынимаю тот кейс,
Что был мне когда-то подарен семьёю.
Вскрываю замок, вынимаю компресс,
И в совестных муках вот-вот я изною.`,`Так пасть – преступление, но лучше ли смерть?
Меня б не судили за это…
Открою пошире, чтоб глубже залезть, –
Вдруг где-то на дне есть монета?`].map(U()),Tu=[`«Твою ж!…» - я срываюсь на жалобный крик,
  На коже глумится лик крови.
  Я вытащил скальпель, мой верный старик, –
  Он-то меня и озлобил.`,`Я так и не тронул всё это со дня,
  Когда не помог человеку.
  Так может продать и забыть острия -
  И лучше исхода тут нету?`,`Я вновь оглядел свои вещи, но трезво,
  И сразу заметить не смог,
  Как остёр инструмент, как тонко он режет,
  Сколько жизней на смерть он обрёк…`,`Обрёк не специально, а томным бездействием,
  Которому я потакал.
  Так может пора перейти к точным действиям,
  Раз честью я пренебрегал?`,`Оставить? Продать? Я не знал, что с ним делать,
  Но точно не врачевать.
  Я сжал скальпель крепче, рука загудела…
  Способен ли я убивать?`].map(U()),xu=[...wu,...Au,...Tu].map((e,t,n)=>({...e,id:`fear-ignore-${t}`,next:t==n.length-1?[{id:"fear-ignore-keep-0",label:"Оставлю",song:pe["(1_17)Mistake"],brigtness:.4},{id:"fear-ignore-sell-0",label:"Продам",brigtness:.6}]:`fear-ignore-${t+1}`})),Su=[`Оставлю себе.
  Пусть будет негласной защитой,
  С которой смогу ощущать
  Себя я немножко смелее.
  Теперь лишь остатки продать…`].map(U()),Cu=["<…>",`Мир – отвратительное место
  И отвратительно в нём жить.
  «Его красоты повсеместны, –
  все отзываются нелестно, –
  и нечего здесь ворошить».`,`Я долго думал над судьбою,
  Старался мысли отрицать.
  И не гордилась бы мать мною,
  Взглянув в рубцы моих побоев,
  Которых «тьма» – не сосчитать.`,`Я встал на узкую дорожку,
  Завёл «знакомых» и «друзей»,
  Чтоб выбить на обед хоть крошку.
  Вот только метод мой немножко
  Вредителен для душ людей.`,`Я не калечу и не режу –
  Мой скальпель лишь пугает их.
  Я накопить немного грежу,
  Чтоб прочь отсюда переехать
  И перестать страшить больных.`,`А между тем средь наших улиц
  Витает слух о маньяке.
  «Джек-Потрошитель», страх распутниц,
  Кромсатель девушек-разлучниц,
  След алой крови на платке.`].map(U()),ku=[`Его страшатся – я питаюсь,
  Ведь тут не каждый человек
  Подумает: «бандит иль "Джек"?»
  А я, садистски усмехаясь,
  Беру кошель и прочь бросаюсь.`,`Сегодня – новая попытка
  Лишить кого-то кошелька.
  Гроза и дождь – сплошная пытка.
  Хватаю скальпель и накидку,
  Ищу глазами дурака…
  …Ловлю студента-дохляка.`,`Слежу за ним минут пятнадцать,
  Пока он с улицы уйдёт.
  Я не люблю уединяться,
  Но больше некогда метаться,
  Иначе он домой зайдёт.`,`Я попытался шаг ускорить,
  Но чуть не врезался… В кого?
  Передо мной возник, о горе,
  Сброд с «Кривоногого Танцора».
  Должно быть это баловство…`,`Я был отвратно удивлён,
  Когда услышал: «Деньги, сволочь!»
  И это их "в покрытии помощь"?
  Я сразу влез за кошельком -
  Он был пустым. Я так умён!`].map(U(pe["(1_18)Fatal Mistake"])),Iu=["И вдруг я подпрыгнул.","Болью пронзило","где-то в спине. Горячо…","Мысль запоздала – блик-провокатор","дал им сигнал",'"бей в плечо".',"Быстрых шагов пелена","рассосалась.","Пуст и карман, и кошель…","Скальпель упал,","поганец блестящий,","я вслед за ним улетел.","Вот так ирония -","место вокруг","больно знакомое. Точно…","Здесь год назад","бездомный сидел,","а я отказался помочь.","Я постарался подняться","и рухнул.","В мокрой земле обречён","Промокнуть, остаться,","уснуть и затухнуть,","Всевышним я был ли прощён?","И в чём виноват","тот злосчастный вокзал?…","Во всём виноват только я.",Qt`И если б мне кто-то`,Qt`тогда подсказал,`,Qt`я б в поезд спешил, как дитя…`].map(U(void 0,(e,t)=>{if(t%3==0)return"left";if(t%3==1)return"center";if(t%3==2)return"right"})),Eu=[...Su,...Cu,...ku,...Iu].map((e,t,n)=>({...e,id:`fear-ignore-keep-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"2.2.1 - Боль"}]:`fear-ignore-keep-${t+1}`})),$u=[`Продам поскорей.
  Забыть – так лучше с концами,
  Чтоб больше себя не корить
  И милым девчонкам с юнцами
  Другие блага подарить.`,"<…>",`Опять кричат. Я просто протираю стойку,
  Заблёванную после трёх попоек.
  И мне за это даже не доплатят,
  А коль не справлюсь – по горбу закатят.`,`Я проработал здесь шесть месяцев, семь дней,
  И насмотрелся стольких мразей и людей…
  Что с сожалением для себя осознаю -
  Последних есть обилие лишь в раю.`,`Я дни считаю, будто что-то стрельнет,
  А моя жизнь расколется и треснет.
  Но с каждым днём я вижу лишь одно -
  Людские души. Ну а в них… Лишь дно.`].map(U()).map((e,t,n)=>({...e,id:`fear-ignore-sell-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"2.2.2 - Меланхолия"}]:`fear-ignore-sell-${t+1}`})),Mu=[`Помочь ему я мог? Не знаю, я не ангел.
  Я не спасал людей ни словом, ни крылом…
  Мой взгляд упал на саквояж на лямке,
  Способный стать на день чудным ларцом.

  Пока в его глазах рождалось осознание,
  Я приклонился и навис над ним,
  А в воздухе копилось ожидание,
  Пока он лицезрел над мною нимб.

  Я оглядел его достаточно дотошно.
  Понадобилось время, чтоб понять,
  Что состояние его крайне безнадёжно,
  А сети смерти я не в силах развязать.

  И всё ж, я врач. А значит моя клятва,
  Что дал я в обучении ремеслу,
  Мне не позволит бросить бедолагу –
  Пускай я только время потяну.

  Из саквояжа я извлёк микстуру –
  Стандартный анальгетик без прикрас.
  Бездомный осмотрел её понуро…
  И выразил лицом своим отказ.`].map(U()),Pu=[I`«Возьмите. Боль уйдёт на время», —`,`стараясь тише говорить,
  Я сбить пытался его бремя
  И фармацевтику внушить.`,C`«Простите, добрый господин, –
  он просипел в ответ на просьбу, –
  но вы из этих из трясин
  меня не вытащите точно.»`,`Пока я мялся в заблуждениях,
  Пытаясь подобрать слова,
  Мужчина поборол хрипение
  И посмотрел в мои глаза.`,`Я разглядеть в них попытался
  Чужой судьбы тугую нить,
  А видел немощного старца,
  Которого не убедить.`,I`«Я вам оставлю всё равно
  Микстуру. Просто попытайтесь.»`,C`«Я просто слабое звено.
  Уйдите и не возвращайтесь!»`].map(U()),Ou=[`Вся искренность его желания
  Прогнать меня сошла на нет,
  Когда я сам, шепча литания,
  Просил Его: «Избавь от бед».`,`Не смея более якшаться,
  Я быстрым шагом удалился,
  Оставив бедному микстуру
  И за здоровье помолившись.`,`Мой путь домой прошёл яснее –
  Я думал, мог ли я помочь
  Иначе. Небо помрачнело,
  Готовился к разразу дождь.`,`Дверной хлопок… И я в могиле,
  "Квартирой" прозванной людьми.
  Здесь так темно, пустó и сыро,
  Что снова хочется уйти.`,`Я сделал выбор… Пусть неверный,
  Но не последний для меня.
  Швырнул на стол к другим газету –
  Искать работу буду я.`].map(U(pe["(1_20)Décadence"])),Fu=["<…>","Полки вновь испещряет","Пыль","А пальто вновь проела","Моль","Разъедает обои","Сырь","На груди лишь одна","Боль.","Я не помню как делать","Вдох","На окне толстым слоем","Смог","И романтик во мне","Сдох","И работу найти не","Смог.","Алкоголем наполнен","Рот","И рассудок мутнеет","Вновь","Календарных не вижу","Дат","Как бы сильно не хмурил","Бровь.","Я в долгах и займах","Утоп","Мне не хочется более","Жить","Из квартиры сколочен","Гроб","Мне приказано в нём","Остыть.","Руки тянутся пойло","Пить","Но я падаю прямо","Вниз","В голове лишь желание","Выть","Но уста издают лишь","Писк."].map(U(void 0,(e,t)=>t>0?t%2==0?"right":"left":"center",{halfWidth:!0})),Bu=["Я тянусь и пытаюсь","	Встать","Но скольжу на бумаге.","	Чёрт…","И на помощь мне надо бы","	Звать","Если б не был я так","	Упёрт.","Вдруг рука ощутила","	Письмо","Средь бумаг и подгнивших","	Газет","Оно выглядит так","	Свежо","И следов распаковки","	Нет.","Я пытаюсь наладить","	Взгляд","Поскорее сломать","	Сургуч","«Лунный пансионат,","	Бат.","Для здоровья клиентов","	Ключ.»","Я пытался понять","	Зачем","И всего лишь одно -","	Кому","Назначается этот","	Плен","Оказалось не мне.","	Сглотнул.","Это было письмо","	Другим","Ведь не могут же звать","	Меня","Поработать у них ","	Благим","Ассистирующим ","	Врача."].map(U(void 0,(e,t)=>t%2==1?"right":"left",{halfWidth:!0})),Lu=[...Mu,...Pu,...Ou,...Fu,...Bu].map((e,t,n)=>({...e,id:`fear-help-${t}`,next:t==n.length-1?[{id:"fear-help-hope-0",label:"Надежда",song:pe["(1_21)Hopefulness"],brigtness:1.2},{id:"fear-help-despair-0",label:"Отчаяние",brigtness:.5}]:`fear-help-${t+1}`})),Hu=[`Надежды луч пробил окошко, проник в мои глаза,
  Я изогнулся словно кошка с силой в телесах.
  Пусть опоздаю я немножко, – к чёрту, не гроза,
  Мне нужно лишь пошить скорее жизни паруса.`,`Мне не до новых приключений, не до поездов,
  Пусть как и раньше я балбес и к жизни не готов…
  Мне дали шанс – Всевышний или случай,
  Судьба-злодейка или доставщик сучий,
  Пора свой мир «в умате» резко поменять,
  А вместе с ним и саквояж из-под полы достать.`,`Я забегаю в поезд, чуть не рухнув,
  Прибрав с собой лишь саквояж с письмом.
  В полупустой вагон отчаянно юркнул,
  Присел к окну и прислонился лбом…`,`И я заснул. Тревожных мыслей полон,
  Мне их глушил соседский гомон.
  Я так разбит… Но всё ещё способен,
  Нести спасение и лечить ознобы.`,"И надо лишь немного подождать…"].map(U()),Ru=["<…>",`…Свой уголок, свой кабинет, кровать.
  Я о таком и помечтать не мог,
  Но вот я здесь. Готов судьбу ковать,
  И, вытравив свою дурную спесь,
  Я снова хочу людям помогать.`,`Я закреплён за этим местом больше года –
  И это ль не она? Здесь разве не свобода?
  Здесь свежий воздух, пожилые люди,
  Что брошены своими же детьми.
  А я для них лишь тот, кто трепетно разбудит,
  Поможет скоротать глухие дни.`,`Думал ли я о том, что это можно
  путём свободы воли изменить?
  И да, и нет. Ведь толком невозможно
  ход времени и жизни обратить…`].map(U()),Du=[...Hu,...Ru].map((e,t,n)=>({...e,id:`fear-help-hope-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"2.1.1 - Надежда"}]:`fear-help-hope-${t+1}`})),Nu=["Отчаяние поглощало,","как прежде, так и сейчас","Должно быть письмо опоздало,","а я лишь сильнее увяз","Проклятое крепкое пойло","тянуло меня за собой","С трудом покачнувшись, я понял,","что выбор сейчас небольшой","А выбор стоит между шнапсом","и сидром, и пивом опять","И в мыслях о сим декадансе","стараюсь письмо разорвать","Не вышло – сминаю, бросаю","и плюхаюсь в кресло скорей","Хватаю бутыль, открываю","и телу заметно теплей","Оставлю в бутылке амбиции,","себя перестану жалеть","Продам саквояж медицинский,","чтоб чаще от пойла хмелеть","А раньше хотел я уехать","в надежде хоть что-то найти","И надо ж, какая потеха!","Себя я не смог превзойти.",Qt`И в Эмберли скоро билеты`,Qt`смогу я приобрести…`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,id:`fear-help-despair-${t}`,justify:t%2==1?"right":"left",meta:Ko(e),next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"2.1.2 - Отчаяние"}]:`fear-help-despair-${t+1}`})),ju=[`Храбрец? Отнюдь, я смелый лишь с собою,
  Но я не враг себе. И с девкою-судьбою
  Я выйду на решающий чардаш. Что ж… В путь!
  Меня ждёт мой вояж.`,"<…>",`Моё купе? Да в нём весьма просторно!
  Я еду в нём один?
  Ну что ж… Весьма задорно.
  Сначала разложусь, там поглядим.`,`И вот оно – окно в другую жизнь.
  Я вид за ним не видел столько лет…
  Он мне из-за стекла кричит: «Взбодрись!»
  И я не смею пропустить совет.`,`Колёса стучат, бегут в неизвестность,
  Я в змее железном стараюсь заснуть,
  Но взгляд оторвать не могу. Эта вечность
  Раскинула передо мною свой путь.`,`А там, за окном, простилается поле -
  Шотландских широт неземная краса.
  Змей мчится вперёд, рассекая просторы,
  А я поднимаю свой взор в небеса.`,`В моих же глазах отражается море –
  В нём тонут увесистых туч колтуны.
  Пусть выглядят серыми, полными горя,
  Лишь им открывается грация земли.`,`Змей рвёт воздух воем, гудит виадук,
  Что был возведён не природы рукою.
  Теперь он – спасение от долгих разлук,
  Встал между горами чертою.`,`И вот гора… Вокруг – тоннеля тьма.
  Я в страхе трепетно сжимаюсь…
  И вновь бьёт свет, под ним – луга,
  А я их видом наслаждаюсь.`,`Когда озёра и поляны
  Пропали где-то позади,
  Припал я лбом к стеклу и замер –
  Вдали увидел Эмберли…`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,newSong:pe["(1_1)Home"],justify:"center"})),Vu=["<…>",`Я помню улицу… Я помню этот дом.
  Прошло немного времени… И тут
  Стою один. А дом пустой –
  Лишь только у меня есть ключ.
  Ключ к новой жизни с новым ремеслом,
  Протянутыми нитью через старый дом.`,`Скрип половиц, вдох пыли, громкий чих.
  Мне предстоит заметно попотеть…
  И нарубить бы брёвнышек сухих,
  Чтоб хладными ночами не болеть.`,`Часы спустя я оглядел работу –
  Теперь здесь можно было жить.
  Я проявил к семейному гнезду заботу,
  Вместо того чтоб злобу волочить.`,`Я на крыльце – здесь так же, как и прежде.
  Из пасмурного неба морось льёт,
  А позади, в горах, цветут надежды,
  Что меня Эмберли и примет, и спасёт.`,`Пора пройтись. Я двигаюсь неспешно,
  Стараюсь проходить все те дома,
  Которые когда-то видел в детстве.
  Которые не помнили меня…`,`Тут жили Спенсеры – должно быть, пожилых
  уж нет давно на этом белом свете
  И в этом доме нет вообще живых…
  А здесь жил Дойл – мужчина-одиночка,
  Растивший сына трепетно, как мог.
  Должно быть, сын давно уехал,
  И пожилой родитель занемог.
  А здесь… Здесь мистер Блэк жил со своею внучкой.
  Я помню их – я с ней давно дружил,
  И точно знал, коль я слегка соскучусь,
  Мог их в любое время навестить.`,`Я сделал шаг… И сразу же опешил.
  Что, если дом давно другой семьи?
  Я появлюсь там далеко не к месту…
  Хоть познакомлюсь с новыми людьми.`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,newSong:pe["(1_2)Rachel"],justify:"center"})),Gu=[`Стучусь… И с замиранием сердца жду ответа.
  Сначала тишина, затем шаги. И вот
  Мне открывает дверь… Огня соцветие?
  Я вновь смутился, но наоборот.`,`Передо мной предстала незнакомка,
  Чьи волосы похожи на огонь.
  Их рыжая, как пламя, окаёмка,
  Могла бы растопить заснеженный холм.`,`Я встал прямее и почти промолвил,
  Но утонул в её напористых глазах.
  Они, оттенка грозового неба,
  Будто сковали свою суть на небесах.`,C`«А Вы к кому?» – промолвил голос нежный.`,I`«Я к Вам… Вы Блэк?» – я вопрошал прилежно.`,`И я разрез её зубов увидел белоснежный,
  Протянутый в улыбке безмятежной.`,`Я замолчал. Она молчала,
  Глядела долго, изучала…
  Чтобы в конце толкнуть в плечо
  И разразиться горячо:`,C`«Так это ж ты! Ты что, забылся?
  Мы вместе здесь давно росли…
  А ты чего краснóй покрылся?
  Увидел что-то? Не молчи!»`,`А я молчал. Я был в смятении…
  Неужто правда Рейчел Блэк?
  Она, по скромным ощущениям,
  Не тот же самый человек.`,I`«Привет… Сюрприз! Что ж, неудачно…» –
  я попытался возразить.`,C`«Сюрприз? А выглядишь ты мрачно.
  Неужто Лондон тяготит?»`].map(U()),Wu=[`Она меня читала, будто книгу
  Мои эмоции, движения, слова.
  Я улыбнулся, руки ей раскинул…
  Как тишину разбила хрипотца:`,`«Рей, кто пришёл? Там кто-то из соседей?»
  Я понял сразу – то был мистер Блэк.`,C`«Уже иду, дедуль, нас старый друг заметил!»`,"Могла бы объясниться и прямей…",`И пока я пытался разобраться,
  Она понизила свой юный глас.`,C`«Прости, сейчас не время обниматься,
  Мой дедушка проснулся. В другой раз…»`,`Я на крыльце чужом один остался,
  В непонимании холодном я застыл.
  Я не рассчитывал на праздник и фанфары,
  Но встреча с Рейчел поумерила мой пыл.`,`Пусть так – не буду я навязчив,
  К тому же, мистер Блэк – старик.
  И, дом соседей за спиной оставив,
  Я двинулся туда, где жил мясник.`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,newSong:pe["(1_3)Amberley"],justify:je(e)??"center"})),Ku=[`В деревне центр свой – не городская площадь,
  А небольшой пустой квартал.
  Когда-то здесь давно гуляла лошадь,
  Меня на ней ещё отец катал.`,`Все эти улицы пустые
  Не вызывали ничего –
  Соседи будто зауныли,
  Не замечали никого.`,`Что в детстве было бы прекрасным,
  Сейчас казалось никаким.
  Неужто ехал я напрасно
  И страстно прошлым одержим?`,C`«Кого я вижу! Ты вернулся?!
  А как же Лондон? Как семья?»`,`Я только-только обернулся
  И понял – это было зря.`,I`«Ну здравствуй, Том, –
  тяну улыбку, –
  я здесь на время. По делам.»`,`И парень с мерзкою мне миной
  Поймал нить лжи в моих словах.`,C`«Ну что ж… Понятно. Ты надолго?»`,I`«Не знаю точно. Ну а что?»`,C`«У нас еды тут нету толком…»`,"И я забыл, куда я шёл.",I`«Как так? А хлеб? А мясо, птица?»`,C`«А ты не в курсе? Во дурак!
  У нас как год гниёт пшеница,
  А у животных… Вроде рак.»`,`Не мягко Эмберли встречает
  Заблудших сыновей своих.
  Одно лишь радует – у Тома
  С рождения мыслей никаких.`,I`«Понятно… Рак. А миссис Бьянка?»`,C`«А что она? Она ж не врач.
  Чужую помощь, грубиянка,
  Шлёт к чёрту. Ей не до подач!»`,`То верно… Наша скотоводка –
  Упёртей дамы не найти.
  И это, как-никак, находка,
  Вдруг я смогу "еду" спасти?`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:je(e)??"center"})),Uu=["<…>",C`«Ай, больно надо! Сам-то знаешь
  Как мою Беллочку лечить?»`,I`«Но миссис Бьянка…»`,C`«Прочь! И хватит
  Свои услуги мне лепить.»`,`И дверь захлопнулась. Ну вот…
  Во всяком случае, я пытался.
  Так долго, что весь небосвод
  К оттенку синего склонялся.`,`Вечерний лик моей деревни
  Всегда тоску мне нагонял.
  А флёр романтики осенней
  Все эти чувства укреплял.`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,newSong:pe["(1_4)Promenade"],justify:je(e)??"center"})),qu=[`И вдруг… Толчок! Опять в плечо,
  На этот раз пришёлся сзади…`,C`«Ты чего хмурый, дурачок?
  Ходил до Бьянки? Чего ради?»`,`Я сразу в голосе узнал
  Девчонку с взглядом озорницы.`,I`«Я просто как-то… Заскучал», –
  cлегка приврал в лицо девице.`,C`«Понятно. Ты прости меня,
  За то что я тогда сбежала.
  Но дедушке день ото дня
  Всё хуже. Память пострадала…»`,`Я поглядел в зеницы Рейчел –
  В них всё ещё играл задор,
  Пусть он уже был менее весел,
  Чем когда мы гуляли в бор.`,I`«Не хочешь в гости? Я один
  Сегодня прибирал свой дом.
  Ну а ещё купил еды…» –
  я пошуршал своим мешком.`,C`«Пытаешься завлечь на ужин?»`,"Я взгляд отвёл и покраснел.",I`«Подумал, что захочешь кушать,
  Да и увидеться хотел.»`,`Весь путь до дома прошёл тихо –
  Она глядела на кусты,
  А я глядел на её лико, –
  Бледнее лунной красоты.`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:je(e)??"center"})),Yu=[C`«Подумать только… Как же долго
  Я здесь с тобою не была», –
  сказала Рейчел и умолкла.`,I`«А ты здесь что, была одна?»`,`Она же лишь главой качнула
  И поспешила в зал пройти.
  Я вслед прошёл, но полный думы:
  Зачем ей было приходить?`,`Она решила мне помочь,
  Пусть я её и не просил.
  Меня касается рукой –
  И вскоре скромный стол накрыт.`,C`«Ну и зачем ты меня звал?» –
  она глядела мне в глаза.`,"Недолго думая, сказал:",I`«Я по тебе весьма скучал.»`,`С её тончайших нежных губ
  Сорвался маленький смешок.`,C`«Всё также ты на правду скуп…
  Скучал и написать не мог?»`,`Я протянул бокал с вином,
  Которое в шкафу нашёл.`,I`«Я думал только об одном –
  Чтоб твой ответ скорей пришёл.»`,`Её улыбка исказилась,
  А брови резко изумились.`,C`«Ответ? Ты сам не отвечал,
  И сам писать бы мне не стал!»`,`Я в замешательстве опешил.
  О чём она мне говорит?
  Я точно помню, как депешей
  Все письма слал чуть не в кредит!`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:je(e)??"center"})),Xu=[I`«Постой… Куда ты их носила?»`,C`«К твоим родителям… А там,
  Когда я деньги получила,
  То относила прям в почтамт.»`,`И в миг мне стало дело ясно –
  Сейчас уж некого винить…
  Моя семья, народ потрясный,
  Срезала связи с Рейчел нить.`,I`«Зачем они-… Послушай, Рейчел,
  Я ничего не получал.»`,C`«Но почему?»`,I`«Чтоб не отвлечься,
  Пока я лекции изучал.»`,`В тот миг и ей всё стало ясно.
  У нас в деревне все свои,
  И не доставить письма – грязно,
  Но помешать нам всё ж смогли.`,"Тогда и мы заулыбались.",C`«Я думала, что ты забыл…»`,I`«Да как я мог? А вдруг остались
  Все письма где-то тут вблизи?»`,`Тут поняли друг друга сразу
  И, проглотив своё вино,
  По комнатам мы разбежались,
  Чтобы найти что суждено.`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:je(e)??"center"})),zu=[`Пока Рей шастала в кладовке,
Я вверх по лестнице взбежал.
И лучше мест для маскировки
Я в этом доме и не знал.`,`Их спальня – воздух сильно спёрт,
Я здесь ещё не убирался.
Весь улетучился комфорт –
Лишь холод смерти их остался…`,`Я аккуратно шёл к кровати, –
Будто меня вела рука.
Пусть здесь углы и мрачноваты,
Но тут мой дом. Моя семья…`,I`«Эх, вот вы где…» – я молвил тихо,
Открывший тумбочку отца.`,`В ней толстым слоем были письма,
И половина их – моя.`,I`«Рей, помоги! Их слишком много!» –
    я на весь дом заголосил.`,`И быстрый топот лёгких ножек
Стремительно за мной возник.`,`Но вместо похвалы иль смеха
Она, лишь взглядом потупив,
Пробормотала: «Вот потеха…
Ты правда их не получил.»`,`Я мог гадать, что в её мыслях, –
Винит во всём она меня?
Или родительские смыслы,
Что часто любят усложнять?`,`Она взяла часть писем в руки
И поглядела на меня.`,C`«Возьми вино, будь так услужлив,
Ну а затем держись меня.»`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,newSong:pe["(1_5)Letters"],justify:je(e)??"center"})),Ju=["<…>",`Затеи Рейчел мне всегда казались чудом.
    Там, где другой не видел толком ничего,
    Она, в своих манерах тонких, чутких,
    Творила чудеса и волшебство.`,`Вот и сейчас вместо простой ограды,
    Она увидела тот самый редкий шанс,
    Что разорвёт меж нами все преграды
    И писем не дошедших декаданс.`,`Мы провели на каменном заборе
    Часа четыре – крайне поздний час.
    И содержимое всех писем вскоре
    Открылось испытанием для нас.`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,justify:"center"})),Zu=[C`«"У нас тут сыро" — ты серьёзно? –
  она старалась сдерживать свой звонкий смех, –
  зачем описывать погоду так детально?
  Тем более, Солнце в Лондоне – есть грех.»`,I`«Я думал, тебе будет это интересно…
  Ты знаешь, там, как наши говорят,
  Нет ничего, что было бы чудесным», —
  я удержал на ней свой робкий взгляд.`,`Она постукала по кирпичам пустой бутылкой,
  Но я сквозь этот звук другой поймал –
  Она тряслась от холода. Вот придурь!
  Совсем забыл, что за окном не май…`,I`«Возьми пальто, – я поспешил накинуть её плечи, –
  мне следовало раньше предложить.»`,C`«Так ты же врач… Возьмёшь, да и залечишь.
  Тебя вообще учили там лечить?…»`,`Я усмехнулся и взглянул на время.
  Как я хотел ещё с ней посидеть…
  Но Рей права – на мне теперь есть бремя, –
  Я не позволю ей здесь заболеть.`,`И в миг, когда она глядела на Луну,
  А отражение я ловил в её глазах,
  Мне диалог наш мысль дал одну…`,I`«Ты ведь с животными в приятельских речах?»`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:je(e)??"center"})),Qu=["<…>",`Весь новый день провёл я в предвкушении –
    Мы снова встретиться собрались у меня.
    Я посвятил день очищению помещений,
    А также чистке своего инвентаря.`,`Я также думал о произошедшем ночью –
    Я помню каждую строку её письма.
    И пусть меня отец испытывал юдолью,
    а эту ночь я благодарен, и весьма.`,`Каков мой план? Признаться, я слукавил,
    И Рейчел думает, что мы пойдём гулять.
    И мы пойдём… Но не к пруду, а к миссис Бьянке,
    Под тенью ночи Беллу врачевать.`,`Я с замиранием трепетным взглянул в окошко –
    На улице октябрь, рыжий лес.
    И для себя подметил – Рейчел, словно кошка,
    Могла с ним слиться, ей лишь захотеть…`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,newSong:pe["(1_6)When the Love Falls"],justify:"center"})),ec=["<…>",`Стук в дверь – и я, как окрылённый ворон,
  Бегу скорее Рейчел открывать.
  А там она – с моим пальто, и строго
  Пыталась в руки мне его отдать.`,I`«Оставь себе. Я же вчера ответил,
  Что пока денег ты на куртку соберёшь,
  То в этой тонкой кофте скоченеешь
  И в зиму эту ты не проживёшь.»`,`Я видел, как её уста дрожали,
  То ли от холода, то ль от желания возразить,
  Но мои речи её знатно напужали, –
  Пришлось пальто на плечи ей грузить.`,I`«Ты как-то рано, – я взглянул на время, –
  но не беда. Пройдёмся до Луны.»`,C`«Ты так и не сказал, что за дилемма,
  B которой мои навыки нужны…»`,`Я ей в ответ лишь улыбнулся
  И, дверь закрыв, сошёл с крыльца.
  Слегка помялся, развернулся…`,I`«Возьмёшь меня под руку, а?»`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:je(e)??"center"})),tc=[`Она же тихо ухмыльнулась,
  Подняла брови, мол, хвастня,
  Пальто поправив, застегнулась,
  И взяла под руку меня.`,`Мы шли вдвоём среди аллеи –
  Она молчала, я молчал.
  И все на эту ночь затеи
  Я потихоньку забывал.`,`Я помнил Рей ещё девчонкой,
  Сейчас же – девушку веду,
  Что в своей тоненькой кофтёнке
  Всё источала теплоту.`,`Как много между нами было,
  Как много время унесло.
  И сердце лишь сильней забилось,
  И пуще прежнего тепло…`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,justify:"center"})),nc=[`Я для себя пытался чувства
    Все эти срочно описать.
    Когда в груди творится буйство,
    А телу хочется плясать?`,C`«Гляди-ка, белка! Вот милашка!» –
  воскликнула одна из них.`,`В душе всё та же обаяшка,
  Чей смысл в радостях мирских.`,I`«Ты знаешь, Рей, мне так приятно
  С тобою снова погулять.
  Когда теперь мы не ребята,
  Вольны с тобой весь мир объять…»`,C`«Весь мир… Со мной? Ты так забавен.»`,I`«Я помню детскую мечту,
  Которой ты делилась ранее.»`,C`«Да я всю жизнь здесь проведу…»`,`Я опустил взгляд и заметил
  В её лице отчаянный жест.`,I`«Всё из-за дедушки?»`,C`«Конечно. И мне ведь это надоест…»`,`Я помню всё – она желала
  Весь мир увидеть, покорить,
  И в небесах она мечтала
  Звезду ярчайшую открыть.`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:je(e)??"center"})),rc=[I`«Это не вечно…»`,C`«Знаю, знаю. Не говори мне о смертях…»`,I`«Я ни на что не намекаю,
  Лишь обсуждаем бытия…»`,C`«Я долго думала о ночи.
  Зачем ты снова тут, скажи?»`,"Она меня смутила очень.",I`«Не знаю. Для меня тут жизнь?»`,C`«Скажи мне честно… Ты не доктор,
  И от занятий ты сбежал?»`,I`«Спокойно, Рейчел, что за говор?
  Я так-то профессионал.»`,`Она в ответ лишь улыбнулась
  И взгляд спешила отвести.
  А я, шагая не сутулясь,
  Продолжил в сад её вести.`,`А что за "сад"? Мы так назвали
  Опушку леса возле гор.
  Мы в детстве часто там гуляли
  Родителям наперекор.`,`Пусть мы весь путь почти молчали,
  Мне было страстно хорошо.
  Как в детстве мы с ней не смеялись,
  Но так слова мы сбережём.`].map(U()),sc=[`Земля сменилася травою,
  Когда мы дальше отошли.
  Трава же сменится листвою –
  И вот мы к клёну подошли.`,C`«Он так огромен, как и раньше.»`,I`«Тебе напомнить, как расти?»`,C`«Ты, дылда, помнишь о реванше?»`,I`«Да я шучу, прости-прости…»`,`Она отвесила мне по лбу
  И отпустила мой рукав.
  Взбежала к клёну вверх по холму,
  Остановилась на корнях.`,C`«Секунд двенадцать было, помнишь?»`,I`«Может не надо?»`,C`«Не труси! Иначе этот клён запомнит,
  Как ты боялся. Засеки!»`,`Я томно выдохнул с часами,
  Поймал глазами её взгляд…
  И она резкими рывками
  Перемахнула веток ряд.`,`Мне стоило не волноваться,
  Но я же врач, а она – Рей,
  Всё норовившая сорваться –
  Не сосчитать потом костей.`,C`«Лови меня!»`,I`«Чего?!»`,C`«Я прыгну!»`,`Я только время подсчитал,
  Как Рейчел с грациею тигра
  Вдруг полетела на меня.`,`Мы рухнули в листвы пожары –
  Я всей спиной мгновенно взмок.
  Я ухватил её за талию,
  Сцепившись пальцами в замок.`,`Я чувствовал её дыхание,
  Биение сердца ощущал.
  Игривых глаз переливание
  Меня сбивало наповал.`,`Она меня в ответ схватила,
  Мы покатились по холму.
  Я будто заново учился
  С душой открытой ко всему.`,`Она смеялась. Я смеялся.
  Трава в карманах, волосах…
  Когда же гомон подунялся,
  Мы к клёну сели впопыхах.`].map(U()),oc=["<…>",C`«Что, если мы когда-то сможем
  Все эти звёзды посетить?»`,I`«Тогда, науку приумножив,
  Придётся знания торопить.»`,`Мы просидели так часами –
  Она, прижавшися к плечу,
  Гуляла по небу глазами:`,C`«Как я узнать там всё хочу…»`,I`«И ты узнаешь. Ты же гений, –
  я гладил нежное плечо, –
  и к звёздам через дебри терний,
  все испытания мы пройдём.»`,C`«Мы?»`,I`«Ну конечно. Вспомни детство –
  Что мне тогда сказала ты?»`,C`«"Мы неразлучные соседи,
  Судьбой общей сплетены."»`,`Тогда она заулыбалась.
  Глаза прикрыв, произнесла:`,C`«Тогда всё так легко казалось,
  И вот я здесь. Чего смогла?»`,I`«Ты – вольной птицы проявление,
  Тебе всего лишь захотеть –
  И даже сложное умение
  Освоить сможешь хоть за день.»`,`Я тут же понял, что ей нужно,
  И в мыслях это закрепил.
  Мы посидели у опушки,
  Теперь пора и в хлев сходить.`].map(U()),ic=["<…>",C`«Ты правда думаешь, что сможешь?»`,I`«Ну я хотя бы посмотрю!»`,C`«Звучит всё как-то, ну, не очень.
  Хотя, кому я говорю…»`,`Мы двигаться старались тише –
  Пусть миссис Бьянка дальше спит.
  К хлеву мы подобрались ближе…`,C`«Один вопрос… А как зайти?»`,`Я знал, что Бьянка будет строгой,
  Но на воротах тут замок!
  Пусть для кого-то и морока,
  Но я в таких вещах знаток.`,I`«Я подсажу тебя в окошко,
  А ты мне руку там подашь.»`,C`«Ты что, сдурел? Нам Бьянка бошки
  Открутит, коль хоть звук издашь.»`,`И мы условились на этом.
  Я Рей поднял и подсадил,
  И вскоре мы своим дуэтом
  Попали внутрь.`,C`«Как детьми…»`,"Я сразу дело заприметил:",I`«Так вот, кто Белла… Поглядим.»`,`Сопротивления не встретив,
  Мы с Рей к корове подошли.`].map(U()),lc=[C`«Она… Большая.»`,I`«Я заметил.»`,C`«Это нормально?»`,I`«Не совсем.
  Всё выглядит как тимпани́я, –
  Не худшая из всех проблем.»`,`Я Рей кивнул – не будем медлить.
  Пока я Беллу обойду,
  Она поможет ту утешить, –
  Я скоро к делу перейду.`,I`«Скорми ей это, успокоит.» –
  я протянул Рей мяты горсть.`,C`«Нас тётя Бьянка точно взмоет…
  Ты не забыл ли её злость?»`,`Я не ответил ей и думал,
  Где же лежит мой троака́р.
  И в этих томных, важных думах,
  Я ворошил свой инвентарь.`,I`«Нашёл. Готовься. Будет больно.»`,C`«Не мне?»`,I`«Конечно не тебе.»`,`И длинной, толстою иглою,
  Пронзил я Беллочке рубец.`].map(U()),ac=[`Мы ждали жалкие минуты,
  Но даже так хватило их,
  Чтобы живот скота надутый
  Стал в разы меньше и утих.`,`И когда мне осталось только
  На рану спирта наложить,
  Замок с ворот упал тихонько…
  Нам больше нечего таить.`,C`«Вы что творите?! Негодяи!»`,I`«Хоть наложите ей бинты!»`,C`«Злодеи! Бесы! Разгильдяи!» –`,"крик Бьянки был аж за версты.",`Мы с Рейчел долго так бежали,
  Пока крик позади не стих.
  За эту ночь мы так устали…
  Но были счастливы в сей миг.`].map(U()),uc=[C`«Ты плохо на меня влияешь.»`,I`«Серьёзно? Первый раз ведь ты
  Мои хотелки выполняешь.
  Я яблоки тебе тащил!»`,`Мы средь аллеи становились,
  Пока над нами пела ночь.
  Я только что всерьёз влюбился,
  Мне вздохнуть, не превозмочь…`,I`«Спасибо, Рей. Ты просто чудо.»`,C`«Тебе спасибо. Пусть и так,
  Но миссис Бьянка будет рада.
  Ты ведь для нас и не чужак…»`,`Тут я позволил себе только
  Её украдкою обнять.
  Но был шокирован легонько:`,C`«Давай так чаще мы гулять?»`,I`«Давай.»`,`Она прижалась крепче
  Пальто помятым… Мне плевать.
  Я так был счастлив этой встрече,
  Пусть ничего не мог сказать.`,C`«Тогда до встречи?»`,I`«Да, до встречи.»`,C`«Увидимся ещё раз, да?»`,`Я понимал по-человечьи
  Её желания и слова.`,I`«Мой дом – твой дом.»`,C`«Охотно верю.»`,I`«Теперь прощай… Не навсегда.»`,C`«Я завтра ночью…»`,I`«Рейчел, верю.»`,C`«Ну хорошо. Тогда… Пока?»`,`Мы разминулись, попрощавшись,
  И я пошёл один домой.
  В кровати быстро распластался
  И я заснул, как на убой.`].map(U()),cc=["<…>",`Мне каждый день казался первым,
  А каждый первый – был как день.
  И Бьянка больше мне не стерва, –
  Я вновь спешу любить людей.`,`Мы виделись как можно чаще,
  Но я признать себе не мог,
  Что в этих дебрях, в этой чаще,
  Меня держал лишь огонёк.`,`Что Белла? Рей была права –
  Корове лучше становилось,
  А слух о наших с ней делах
  По всей деревне прокатился.`,`Когда же все теперь узнали,
  Что в округе явился врач,
  Ко мне домой являться стали,
  Мол, нам лечение назначь.`,`А я не против – мне же лучше, –
  Я стал хоть деньги получать.
  И, днём одним с людьми отмучась,
  Мечтаю с Рейчел погулять.`,`А что до звёзд? Я ей подарок
  Хотел от сердца подарить.
  Мне накопить на него надо,
  Чтобы мечту осуществить.`].map(U()),fc=["<…>",`И я копил. Я знал, он не дешёвый,
  Ведь его трудно в городе найти,
  А ушлые и жадные торговцы
  Всегда пытались цену заломить.`,`А мы всё ближе – Рейчел, будто ангел,
  Мне стала музой, стала как родной.
  Пусть виделись мы редко, на полянке,
  Кончалась ночь – я вёл её домой.`,`Её глазами я тушил пожары
  В душе моей бущующих страстей.
  В груди цветущих лепестков разгары
  Влачили меня думать лишь о ней.`,`Но я не знал, что думает она.
  Не знал, что чувствует она, желает,
  Была бы хоть подсказочка одна…
  А вдруг её мои стремления напугают?`].map(U()),dc=[...ju,...Vu,...Gu,...Wu,...Ku,...Uu,...qu,...Yu,...Xu,...zu,...Ju,...Zu,...Qu,...ec,...tc,...nc,...rc,...sc,...oc,...ic,...lc,...ac,...uc,...cc,...fc].map((e,t,n)=>({...e,id:`brave-${t}`,next:t==n.length-1?[{id:"brave-tell-0",label:"Сказать",song:pe["(1_9)Starry Night"],brigtness:1.4},{id:"brave-keep-0",label:"Хранить",song:pe["(1_13)Secret"],brigtness:1}]:`brave-${t+1}`})),pc=[`И пусть. Сказать, как есть – не страшно,
  А страшно будет в зеркало смотреть,
  Коль сам всё это не скажу отважно, –
  Остаток жизни буду я жалеть.`,"<…>",I`«Гляди, – я вынул из кармана
  коробку с лентой, – это вот тебе.»`,C`«Подарок? Как-то это странно.
  Мой день рождения же не в ноябре…»`,I`«Рей, ты…»`,C`«Постой. Серьёзно, что ли?»`,I`«Тебе понравилось?»`,C`«Дурак!
  Ты знаешь, сколько это стоит?»`,I`«Это подарок, как-никак.
  Пусть я не очень-то и смыслю
  Во всех космических вещах, –
  Отделаться не мог от мысли,
  Что в этих странных мелочах
  Ты обретёшь мечты начало.»`,C`«С такою вещью? Мечты мало!»`,`И она принялась крутить,
  Вертеть, глядеть и теребить.`,C`«С такою точной астролябией,
  Подвластны всяки расстояния.»`,I`«С такою точной астро-… Что?»`,C`«Неважно. Это хорошо.»`,`И прежде чем вновь погрузиться
  В мир изученья, Рей смягчилась.`,C`«Ты что-то мне хотел сказать.»`,I`«Теперь не знаю, как сказать…»`,C`«Попробуй прямо.»`,I`«Ты прекрасна,
  Великолепна. И напрасно
  Я думал, будто не смогу.
  Я полюбил. Тебя люблю.»`].map(U()),_c=[`Она же тут же замолчала,
  Металл ногтями ковыряя.
  Её лик мягко исказился…
  И вдруг улыбкою расплылся.`,C`«Ты правда думал, будто я,
  И не замечу ни черта?»`,I`«Так очевидно?»`,C`«Очень, глупый.
  А теперь двинься и послушай…»`,`Послушно сдвинувшись к девице,
  Я на ограде стал к ней ближе.
  И наши красные с ней лица
  Застыли рядом неподвижно.`,`Вдруг – поцелуй. Теплее света,
  По телу дрожью пробежал.
  И если счастье было где-то,
  Его я только что поймал.`,`Мы провели остаток ночи
  Под небосводом и Луной.
  Теперь мы с ней не одиноки,
  Она – мой свет. Я с ней живой.`].map(U()),hc=["<…>",`Проходит время. И с зимою
  На Рей свалились боль и горе.
  Пришлось ей деда хоронить,
  А я старался рядом быть.`,`И с каждый днём мне всё казалось,
  Будто она мне "так", "никто"…
  Она мне реже улыбалась,
  А я не знал, как ей помочь.`,`Мне в один день пришло видение –
  А может дело всё во мне?
  И это едкое мышление
  Меня сжигало и во сне.`].map(U()),mc=[...pc,..._c,...hc].map((e,t,n)=>({...e,id:`brave-tell-${t}`,next:t==n.length-1?[{id:"brave-tell-doubt-0",label:"Сомневаться",brigtness:.8},{id:"brave-tell-talk-0",label:"Разговор",song:pe["(1_11)Break"],brigtness:1.6}]:`brave-tell-${t+1}`})),gc=[`Сомнения гложут. Мне не победить их.
  Она ко мне остыла, спору нет.
  На дне бутылок коньяков испитых
  Ищу когда-то будораживший мой свет.`,`Когда я понял, что искать там тщетно,
  Мне передал один знакомый мой сосед,
  Что Рей уехала из дома незаметно.
  Теперь её со мною больше нет.`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-tell-doubt-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.1.1 - Сомнения"}]:`brave-tell-doubt-${t+1}`})),vc=[`Нам нужен разговор. Расставить точки нужно –
  В делах романтики я пусть и новичок,
  Но я не дам дурному равнодушью
  Травить святого чувства мой глоток.`,"<…>",I`«Рейчел, постой…»`,C`«Чего тебе вновь нужно?»`,I`«Не будь такой строптивой.»`,C`«Почему?»`,I`«Нам следует поговорить…»`,C`«И правда нужно.»`,I`«Что происходит? Я ведь не пойму.»`,`Мы встретились буквально средь аллеи –
  Она была угрюма и брела.
  На холоде её глаза будто синели
  И становились злобными слегка.`,`Её глаза забегали, забылись,
  Но я в душе всё знал. Сей диалог
  Она вынашивала долго. Страхи сбылись –
  На сердце остаётся лишь ожог.`].map(U()),bc=[C`«Мне кажется, что мы поторопились.»`,I`«Пусть так… И что теперь с того?»`,C`«В моей душе ведь столько накопилось…
  А ты всё молвишь: "Как же ей легко!"»`,I`«Я так не делал.»`,C`«Ну и пусть… Мне больно.
  Я деда потеряла, ну а ты?
  Ты думаешь, что мне хоть чуть помогут
  Красивые, но поздние цветы?»`,I`«И что ты хочешь?»`,C`«Я хочу спокойствия.
  Мне нужно одиночество…»`,I`«Сейчас? Ты будто хочешь показать геройство,
  Забыв про всё, что было бы у нас.»`,C`«Да будет так.» – сказала она строго
  И двинулась к своему дому прочь.`,`Я постоял один ещё немного,
  Стараясь бурный импульс превозмочь.`,`И что теперь? Я думал, будто можно
  Своему чувству приказать молчать.
  Ну а на деле это просто невозможно –
  Хотелось то ли выть, то ли кричать.`].map(U()),yc=[...vc,...bc].map((e,t,n)=>({...e,id:`brave-tell-talk-${t}`,next:t==n.length-1?[{id:"brave-tell-talk-leave-0",label:"Уеду",brigtness:.8},{id:"brave-tell-talk-stay-0",label:"Останусь",song:pe["(1_12)Last Choise"],brigtness:1.6}]:`brave-tell-talk-${t+1}`})),wc=[`Уеду в город. Не смогу я больше
  Любить её, но только воздыхать.
  Всё происходит, будто рок нарочный,
  Где о любви мне светит лишь мечтать.`,`Теперь, когда я заимел здесь опыт,
  Мне будет проще там себя найти.
  И, может, меня примет к себе крупный город, –
  Удержит мои чувства взаперти.`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-tell-talk-leave-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.1.2.1 - Память"}]:`brave-tell-talk-leave-${t+1}`})),Ac=[`И пусть мне счастья с Рей не светит –
  Я был бы рад попробовать опять
  И разделить её потери горькой бремя,
  Не обращая временной лик вспять.`,`Я здесь останусь – мне так будет лучше.
  Я не могу оставить бедных и больных –
  Они во мне нуждаются. И лучше,
  Если их кто-то будет здесь лечить.`,"<…>",`Идёт весна. Растения пускают терпкий флёр.
  Я приобрёл в народе репутацию, –
  Не надо ни больниц, ни медсестёр,
  Когда за каждый чих будешь хвататься`,`И я хватался. Чаще, чем лекарства,
  Я приходил к больным в чужих домах.
  Зачем же усложнять им всем мытарства?
  Пусть выздоравливают на своих местах.`,`Лишь в один день я странное услышал:
  «Из дома Рейчел кашель громыхал…»`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-tell-talk-stay-${t}`,next:t==n.length-1?[{id:"brave-tell-talk-stay-visit-0",label:"Сходить",brigtness:1.8},{id:"brave-tell-talk-stay-ignore-0",label:"Пройти",brigtness:1.2}]:`brave-tell-talk-stay-${t+1}`})),Tc=[`Я взял лекарства, саквояж… И вышел,
  Пока она сама там не слегла.`,`Я постучался, пусть сначала мялся –
  Пересекались реже мы, как никогда.
  И дверь открылась.`,I`«Я тебя заждался.
  Позволь пройти? Твой кашель – не беда.»`,`Она была болезненной, но бодрой –
  Старалась выглядеть отважно, точно ведь.
  Без лишних слов, она от медосмотра
  Решила не отказываться впредь.`].map(U()),xc=[I`«Открой свой рот, – командовал я мягко,
  пока она не слушалась меня, –
  чего сама не шла?»`,`Она молчала.
  Тогда же с ней начал молчать и я.`,`Поношенный веками тёплый свитер,
  Растрёпанные локоны огня.
  Я с её щёк одну слезинку вытер,
  Сбежать хотевшую скорее от меня.`,I`«И что молчишь?» – я вопрошаю робко,
  Пусть понимая, что мне ни к чему
  Общаться с ней, красой розовощёкой,
  Но сердце снова тянет. Не могу…`,`Она молчит. И что-то тихо шепчет,
  Что я пытался тщетно разузнать.
  Тогда же руку мою она схватит крепко,
  А там притянет, чтоб поцеловать.`,`Я ведь дурак – я сразу было понял,
  Что она хочет, чтобы я с ней заболел.
  Но я уже сам как-то и не против…
  На улице скворец засвиристел.`].map(U()),Sc=[...Tc,...xc].map((e,t,n)=>({...e,id:`brave-tell-talk-stay-visit-${t}`,next:t==n.length-1?[{id:"THE_END",label:"Конец",ending:"1.1.2.2.1 - Любовь"}]:`brave-tell-talk-stay-visit-${t+1}`})),Cc=[`И пусть. Не хочет ведь мириться?
  Тогда и мне ей нечего сказать.`,`Домой зайдя, я инструменты вымыл,
  Лекарства подготовил. Новый день,
  Когда я занят бедами чужими,
  Когда я буду вновь лечить людей.`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-tell-talk-stay-ignore-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.1.2.2.2 - Обида"}]:`brave-tell-talk-stay-ignore-${t+1}`})),kc=[`Хранить. Хранить, не проливая,
  Свою любовь я обречён.
  Меж нами пропасть временная –
  А я лишь временно влюблён.`,`Я понимал, что ей, наверное,
  Как-то захочется уйти,
  И мне тогда будет прескверно,
  Чему не дам произойти.`,"<…>",`Клён больше толком и не рыжий,
  Седой и бледный теперь лес –
  На улице ноябрь ныне,
  В траве играет инея блеск.`,`Я помню, Рей мне сообщала,
  Как её дедушка увял.
  И неизбежность удручала,
  Пусть я ему и помогал.`,`Мы стали видеться чуть реже,
  Обычно только по делам.
  Я ей – лекарств под сердца скрежет,
  Она мне – добрые слова.`,`Всё чаще стали обращаться…
  А что поделаешь? Зима.`,C`«Нам следует бы попрощаться…»`,"Я обернулся.",I`«Ты куда?»`,`Когда я отпустил соседа,
  Напомнив ему чаще пить,
  Передо мной предстала Рейчел.`,C`«Я еду в город. Еду жить.»`].map(U()),Ic=[`И вот она, стоит пред мною –
  В своём пальто. И хмурый взгляд
  Всё так же красен синевою,
  Пусть горем он теперь объят.`,I`«Тебе не стоит…»`,C`«Может хватит?
  Прекрати сдерживать меня.
  Дедуля умер. Что за взгляды?
  Мне больше нечего терять.»`,`Я потупил глазами в шкафчик –
  Там, где-то в недрах у него
  Лежал подарок, что когда-то
  Был смыслом слова одного.
  Я понимал – уже ведь поздно
  И сомневаться, и просить.
  Она же так амбициозна…
  И мне за ней не уследить.`,"«Ну что ж… Прощай.»",`И мы простились.
  Без сентиментов и без слёз,
  Два взгляда в воздухе сомкнулись –
  Я принял это не всерьёз.

  Если б я знал, что в её думах,
  И что ей хочется сказать,
  То не играл б на её струнах,
  И встал, стремясь поцеловать.

  Она ушла. Теперь я сам с собою,
  С деревней, полною людей.
  Была ль она моей судьбою?
  На улице всё холодней.`].map(U()),Ec=[...kc,...Ic].map((e,t,n)=>({...e,id:`brave-keep-${t}`,next:t==n.length-1?[{id:"brave-keep-leave-0",label:"Уеду",brigtness:.8},{id:"brave-keep-stay-0",label:"Останусь",song:pe["(1_14)Hold Me Please"],brigtness:1.2}]:`brave-keep-${t+1}`})),$c=[`Уеду прочь. Но не за ней, а дальше,
  Неужто она правда думала, что я
  Останусь здесь лечить больных и дальше?
  Я не такой, как Рейчел. Хуже я…`,`Я в импульсе предательском и гадком
  Вскочил со стула, к шкафу подошёл,
  И Рейчел неподаренный подарок
  Швырнул от злости прямо в твёрдый пол.`,`Железка разлетелась на детали,
  А вместе с ней – до боли жмёт в груди.
  Все мои чувства к Рейчел вдруг пропали,
  И на душе теперь всё время льют дожди.`,`Зима пришла – её лютейший холод
  Разбил моё трусливое нутро.
  Уеду я. Уеду в другой город.
  Может хоть там мне счастье суждено?`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-keep-leave-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.2.1 - Забвение"}]:`brave-keep-leave-${t+1}`})),Mc=[`Останусь здесь. Пусть ей ещё, быть может,
Захочется сюда вернуться. Ну и что?
Я врач. Вдруг кто-то занеможет?
Мне Богом дан талант лечить народ.`,`И я остался. Мне мои проблемы
Куда привычней делом заменить.
Пусть милую и рыженькую деву
Я не смогу так быстро позабыть.`,`Мой дом со временем стал чуть обжитым –
К зиме я подготовил много дров.
Оконца испещряет иней витый,
У стен снаружи копится сугроб.`,`Гор склоны превратились в льдины,
Леса, укрывшись шубой, пали в сон.
Как в шёлке – иглы, так в полях – осины,
Сплетается со снегом небосклон.`,`И день за днём, неделя за неделей,
За месяцами – месяц. Вот весна,
Что красит снег цветами из пастели,
Что пробуждает лес и горы ото сна.`,`На ветках мокрых льются краской почки,
Что праздник Пасхи предвещают за собой.
Больных всё меньше – меньше заморочки, –
Пора впитать мне улицы покой.`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,justify:"center"})),Pc=[`Я выхожу, мороз вдыхаю кожей –
  Он обжигает ласково, заботливой рукой.
  Я укрепляюсь потеплей своей одёжей
  И начинаю свой недолгий выходной.`,`Гуляю долго – прохожу аллеи,
  Дома соседей, дом, где Рейчел Блэк
  Жила когда-то. Ухожу скорее.
  Иду к опушке, там, где мокрый снег.`,`А здесь наш клён стоит, всё так же, как и прежде.
  Его внушительный, но уязвимый вид
  Мне говорил о тщетности надежды,
  Которую душа моя хранит.`,`Домой вернулся я не слишком поздно,
  Пройдя к нему опушкой, сдалека.
  Тогда мой взгляд, привычно скрупулёзный,
  Метнулся на фигуру у крыльца`,`В ней видел я пальто с осиной талией,
  Движенья робкие, но дерзкие чуть-чуть.
  И волосы, горящие, как пламя,
  Заставят нимфалид в груди вспорхнуть.`,`Как только я попал к ней в поле зрения,
  Она рванула с места, как змея,
  Но вместо злых укусов – удушение,
  Что от объятий плавило меня.`,I`«Ты здесь?…»`,C`«Молчи. И дай мне насладиться
  Минутами спокойствия в глуши.»`,I`«Пошли домой? Там проще находиться.»`,C`«Я же сказала – просто помолчи.»`,`Я чувствовал, она заплачет скоро,
  Поэтому в ответ её обнял.`,I`«В шкафу подарок. Всё ещё не хочешь?»`,C`«И это так по мне ты заскучал?»`,`Я усмехнулся и погладил Рейчел.
  Я ничего не понял… Ну и пусть.`,I`«Я проведу с тобой хоть всю вечность,
  Чтоб развести собою твою грусть.»`].map(U()),Oc=[...Mc,...Pc].map((e,t,n)=>({...e,id:`brave-keep-stay-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.2.2 - Время"}]:`brave-keep-stay-${t+1}`})),Fc=[...mu,...wr,...gu,...yu,...xu,...Eu,...Du,...Nu,...$u,...Lu,...dc,...mc,...gc,...yc,...wc,...Ac,...Sc,...Cc,...Ec,...$c,...Oc],Bc=Object.fromEntries(Fc.map(e=>[e.id,e]));function yt(e){return new Promise(t=>setTimeout(t,e))}const Lc={class:"fixed top-0 left-0 z-1 h-10 w-full bg-[image:var(--secondary-gradient)]"},Hc={class:"flex flex-col items-center p-2"},Rc={class:"absolute top-[50%] translate-y-[-50%]"},Dc={key:0,class:"absolute top-[50%] flex h-[50vh] w-[50%] -translate-y-1/2 flex-col items-center justify-center"},Nc=["id"],jc=$e({__name:"App",setup(e){const t=he(void 0),n=he(Bc),s=Tt([]),o=he(),l=he(),a=he(),c=Tt([]),f=Tt(new Set),_=Tt(new Set),p=he(!1),r=he(!1),i=he(!1),u=he(),d=he(),g=he(1),b=Lo(()=>`brightness(${g.value})`),T={prod:{showNext:900}}.prod,F=async L=>{const k=n.value[L];k.visible=!0,s.push(k),"hasButton"in k&&!k.hasButton?(clearTimeout(t.value),t.value=setTimeout(()=>F(k.next),T.showNext)):t.value=void 0},M=L=>{console.log("handling end"),tu(L),d.value?.update()},W=async()=>{g.value=1;const L=["brave-0","fear-0"],k=u.value?.findIndex(ee=>L.map(J=>`block-${J}`).includes(ee.id)),N=s.findIndex(ee=>L.includes(ee.id)),G=c.findIndex(ee=>L.includes(ee));if(console.log(u.value?.map(ee=>ee.id)),console.log(k),!k||k==-1)throw new Error("For some reason i can't find Brave or Fear block");if(N==-1)throw new Error("For some reason i can't find Brave or Fear block");if(G==-1)throw new Error("For some reason i can't find Brave or Fear choose");c.splice(G),f.clear(),_.clear(),await Mt();const _e=u.value?.[k-1];console.log(_e),_e?.scrollIntoView({behavior:"smooth",block:"end"}),await yt(300),s.splice(N),l.value="./mus/(0)Fate.opus"},ne=async(L,k,N="single",G=void 0,_e=void 0,ee=void 0)=>{if(console.log(L),(L=="THE_END"||L=="TRY_AGAIN")&&_e!=null){console.log(_e),M(_e),L=="TRY_AGAIN"&&W();return}if(ee&&(g.value=ee),!c.includes(L))if(c.push(L),G&&(l.value=G),N=="multiple"){const J=`btn-${L}`;console.log("Multiple choice - Looking for button:",J),console.log("Available buttons:",a.value?.map(we=>we.$el.id));const Y=a.value?.find(we=>we.$el.id===J);console.log("Found button:",Y),Y?(await yt(150),console.log("Scrolling to button"),Y.$el.scrollIntoView({behavior:"smooth",block:"center"})):console.warn("Button not found for scrolling!"),await yt(500),_.add(k),await yt(1e3),f.add(L),F(L),await Mt()}else{F(L),await Mt();const J=`btn-${L}`;console.log("Single choice - Looking for button:",J),console.log("Available buttons:",a.value?.map(we=>we.$el.id));const Y=a.value?.find(we=>we.$el.id===J);console.log("Found button:",Y),Y?(await yt(150),console.log("Scrolling to button"),Y.$el.scrollIntoView({behavior:"smooth",block:"start"})):console.warn("Button not found for scrolling!")}},ue=async()=>{r.value=!0,await yt(2e3),r.value=!1,await yt(500),l.value=pe["(0)Fate"],n.value.beginning.visible=!0,s.push(n.value.beginning),p.value=!0,await Mt(),o.value?.play()},fe=L=>c?.includes(L),B=L=>!L.hasButton||!L.visible?!1:L.next instanceof Array?!L.next.some(k=>f.has(k.id)):!f.has(L.next),q=()=>g.value<=.6;return un(()=>{window.scrollTo({top:0})}),(L,k)=>(K(),oe("div",{ref:"body",class:tt(["body hide-scrollbar pt-10",{inverted:q()}])},[ae("header",Lc,[ie(An,{name:"fade"},{default:ct(()=>[p.value?(K(),Re(qa,{key:0,ref_key:"audioPlayer",ref:o,src:l.value},null,8,["src"])):xt("",!0)]),_:1})]),ae("main",Hc,[ae("div",Rc,[ie(An,{name:"fade",onAfterLeave:ue},{default:ct(()=>[i.value?xt("",!0):(K(),Re(xs,{key:0,class:"",onClick:k[0]||(k[0]=N=>i.value=!0)},{default:ct(()=>[...k[1]||(k[1]=[Fn(" Начать ",-1)])]),_:1}))]),_:1})]),ie(An,{name:"fade"},{default:ct(()=>[r.value?(K(),oe("div",Dc,[k[2]||(k[2]=ae("h2",{class:"p-8"}," Этот сайт активно использует звук для создания подходящей атмосферы. Пожалуйста, используйте наушники. ",-1)),ie(He(Oa),{size:40})])):xt("",!0)]),_:1}),ie(ga,{name:"fade",tag:"div",class:"content-wrapper"},{default:ct(()=>[(K(!0),oe(me,null,$n(s,N=>(K(),oe("div",{id:`block-${N.id}`,key:N.id,ref_for:!0,ref_key:"blockElements",ref:u,class:"block-container flex flex-col items-center justify-center"},[ie(pu,{content:N.text,justify:N.justify,meta:N.meta,class:"p-2"},null,8,["content","justify","meta"]),B(N)?(K(),oe("div",{key:0,class:tt(["choose-holder flex flex-row items-center justify-center gap-x-48 p-8",{collapsing:_.has(N.id)}])},[N.next instanceof Array?(K(!0),oe(me,{key:1},$n(N.next,G=>(K(),Re(xs,{key:G.id,id:`btn-${G.id}`,ref_for:!0,ref_key:"buttons",ref:a,class:tt(["anim-btn",{selected:fe(G.id)}]),inverted:q(),onClick:_e=>ne(G.id,N.id,"multiple",G.song,G.ending,G.brigtness)},{default:ct(()=>[Fn(xn(G.label),1)]),_:2},1032,["id","class","inverted","onClick"]))),128)):(K(),Re(Qa,{key:0,id:`btn-${N.next}`,ref_for:!0,ref_key:"buttons",ref:a,onClick:G=>ne(N.next,N.id,"single",N.newSong)},null,8,["id","onClick"]))],2)):xt("",!0)],8,Nc))),128))]),_:1}),k[3]||(k[3]=ae("div",{class:"scroll-spacer"},null,-1))]),ie(cu,{ref_key:"endingIndicator",ref:d},null,512),ae("div",{class:"background",style:kt({filter:b.value})},null,4),ie(hu)],2))}}),Vc=It(jc,[["__scopeId","data-v-1b707373"]]);xa(Vc).mount("#app");
