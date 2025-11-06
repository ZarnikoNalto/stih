(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ar(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Q={},kt=[],Xe=()=>{},Cs=()=>!1,Bn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Tr=e=>e.startsWith("onUpdate:"),de=Object.assign,xr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Yo=Object.prototype.hasOwnProperty,Z=(e,t)=>Yo.call(e,t),D=Array.isArray,$t=e=>Ln(e)==="[object Map]",Is=e=>Ln(e)==="[object Set]",V=e=>typeof e=="function",fe=e=>typeof e=="string",st=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",Es=e=>(oe(e)||V(e))&&V(e.then)&&V(e.catch),ks=Object.prototype.toString,Ln=e=>ks.call(e),Xo=e=>Ln(e).slice(8,-1),$s=e=>Ln(e)==="[object Object]",Sr=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qt=Ar(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hn=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},zo=/-\w/g,tt=Hn(e=>e.replace(zo,t=>t.slice(1).toUpperCase())),Jo=/\B([A-Z])/g,ht=Hn(e=>e.replace(Jo,"-$1").toLowerCase()),Ms=Hn(e=>e.charAt(0).toUpperCase()+e.slice(1)),zn=Hn(e=>e?`on${Ms(e)}`:""),Ee=(e,t)=>!Object.is(e,t),Jn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ps=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Zo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Qo=e=>{const t=fe(e)?Number(e):NaN;return isNaN(t)?e:t};let Wr;const Rn=()=>Wr||(Wr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ht(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=fe(s)?ri(s):Ht(s);if(o)for(const l in o)t[l]=o[l]}return t}else if(fe(e)||oe(e))return e}const ei=/;(?![^(]*\))/g,ti=/:([^]+)/,ni=/\/\*[^]*?\*\//g;function ri(e){const t={};return e.replace(ni,"").split(ei).forEach(n=>{if(n){const s=n.split(ti);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function et(e){let t="";if(fe(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const s=et(e[n]);s&&(t+=s+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const si="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oi=Ar(si);function Os(e){return!!e||e===""}const Fs=e=>!!(e&&e.__v_isRef===!0),An=e=>fe(e)?e:e==null?"":D(e)||oe(e)&&(e.toString===ks||!V(e.toString))?Fs(e)?An(e.value):JSON.stringify(e,Bs,2):String(e),Bs=(e,t)=>Fs(t)?Bs(e,t.value):$t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],l)=>(n[Zn(s,l)+" =>"]=o,n),{})}:Is(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Zn(n))}:st(t)?Zn(t):oe(t)&&!D(t)&&!$s(t)?String(t):t,Zn=(e,t="")=>{var n;return st(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class ii{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){++this._on===1&&(this.prevScope=Ie,Ie=this)}off(){this._on>0&&--this._on===0&&(Ie=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function li(){return Ie}let se;const Qn=new WeakSet;class Ls{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ie&&Ie.active&&Ie.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qn.has(this)&&(Qn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rs(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kr(this),Ds(this);const t=se,n=Re;se=this,Re=!0;try{return this.fn()}finally{Ns(this),se=t,Re=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Er(t);this.deps=this.depsTail=void 0,Kr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ur(this)&&this.run()}get dirty(){return ur(this)}}let Hs=0,Yt,Xt;function Rs(e,t=!1){if(e.flags|=8,t){e.next=Xt,Xt=e;return}e.next=Yt,Yt=e}function Cr(){Hs++}function Ir(){if(--Hs>0)return;if(Xt){let t=Xt;for(Xt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Yt;){let t=Yt;for(Yt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Ds(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ns(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Er(s),ai(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function ur(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(js(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function js(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===en)||(e.globalVersion=en,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ur(e))))return;e.flags|=2;const t=e.dep,n=se,s=Re;se=e,Re=!0;try{Ds(e);const o=e.fn(e._value);(t.version===0||Ee(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{se=n,Re=s,Ns(e),e.flags&=-3}}function Er(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)Er(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ai(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Re=!0;const Vs=[];function nt(){Vs.push(Re),Re=!1}function rt(){const e=Vs.pop();Re=e===void 0?!0:e}function Kr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=se;se=void 0;try{t()}finally{se=n}}}let en=0;class ui{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!se||!Re||se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==se)n=this.activeLink=new ui(se,this),se.deps?(n.prevDep=se.depsTail,se.depsTail.nextDep=n,se.depsTail=n):se.deps=se.depsTail=n,Gs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=se.depsTail,n.nextDep=void 0,se.depsTail.nextDep=n,se.depsTail=n,se.deps===n&&(se.deps=s)}return n}trigger(t){this.version++,en++,this.notify(t)}notify(t){Cr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ir()}}}function Gs(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Gs(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const fr=new WeakMap,St=Symbol(""),cr=Symbol(""),tn=Symbol("");function ve(e,t,n){if(Re&&se){let s=fr.get(e);s||fr.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new Dn),o.map=s,o.key=n),o.track()}}function Qe(e,t,n,s,o,l){const a=fr.get(e);if(!a){en++;return}const f=c=>{c&&c.trigger()};if(Cr(),t==="clear")a.forEach(f);else{const c=D(e),_=c&&Sr(n);if(c&&n==="length"){const p=Number(s);a.forEach((r,i)=>{(i==="length"||i===tn||!st(i)&&i>=p)&&f(r)})}else switch((n!==void 0||a.has(void 0))&&f(a.get(n)),_&&f(a.get(tn)),t){case"add":c?_&&f(a.get("length")):(f(a.get(St)),$t(e)&&f(a.get(cr)));break;case"delete":c||(f(a.get(St)),$t(e)&&f(a.get(cr)));break;case"set":$t(e)&&f(a.get(St));break}}Ir()}function It(e){const t=z(e);return t===e?t:(ve(t,"iterate",tn),Fe(e)?t:t.map(ge))}function Nn(e){return ve(e=z(e),"iterate",tn),e}const fi={__proto__:null,[Symbol.iterator](){return er(this,Symbol.iterator,ge)},concat(...e){return It(this).concat(...e.map(t=>D(t)?It(t):t))},entries(){return er(this,"entries",e=>(e[1]=ge(e[1]),e))},every(e,t){return ze(this,"every",e,t,void 0,arguments)},filter(e,t){return ze(this,"filter",e,t,n=>n.map(ge),arguments)},find(e,t){return ze(this,"find",e,t,ge,arguments)},findIndex(e,t){return ze(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ze(this,"findLast",e,t,ge,arguments)},findLastIndex(e,t){return ze(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ze(this,"forEach",e,t,void 0,arguments)},includes(...e){return tr(this,"includes",e)},indexOf(...e){return tr(this,"indexOf",e)},join(e){return It(this).join(e)},lastIndexOf(...e){return tr(this,"lastIndexOf",e)},map(e,t){return ze(this,"map",e,t,void 0,arguments)},pop(){return Vt(this,"pop")},push(...e){return Vt(this,"push",e)},reduce(e,...t){return Ur(this,"reduce",e,t)},reduceRight(e,...t){return Ur(this,"reduceRight",e,t)},shift(){return Vt(this,"shift")},some(e,t){return ze(this,"some",e,t,void 0,arguments)},splice(...e){return Vt(this,"splice",e)},toReversed(){return It(this).toReversed()},toSorted(e){return It(this).toSorted(e)},toSpliced(...e){return It(this).toSpliced(...e)},unshift(...e){return Vt(this,"unshift",e)},values(){return er(this,"values",ge)}};function er(e,t,n){const s=Nn(e),o=s[t]();return s!==e&&!Fe(e)&&(o._next=o.next,o.next=()=>{const l=o._next();return l.value&&(l.value=n(l.value)),l}),o}const ci=Array.prototype;function ze(e,t,n,s,o,l){const a=Nn(e),f=a!==e&&!Fe(e),c=a[t];if(c!==ci[t]){const r=c.apply(e,l);return f?ge(r):r}let _=n;a!==e&&(f?_=function(r,i){return n.call(this,ge(r),i,e)}:n.length>2&&(_=function(r,i){return n.call(this,r,i,e)}));const p=c.call(a,_,s);return f&&o?o(p):p}function Ur(e,t,n,s){const o=Nn(e);let l=n;return o!==e&&(Fe(e)?n.length>3&&(l=function(a,f,c){return n.call(this,a,f,c,e)}):l=function(a,f,c){return n.call(this,a,ge(f),c,e)}),o[t](l,...s)}function tr(e,t,n){const s=z(e);ve(s,"iterate",tn);const o=s[t](...n);return(o===-1||o===!1)&&Mr(n[0])?(n[0]=z(n[0]),s[t](...n)):o}function Vt(e,t,n=[]){nt(),Cr();const s=z(e)[t].apply(e,n);return Ir(),rt(),s}const di=Ar("__proto__,__v_isRef,__isVue"),Ws=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(st));function pi(e){st(e)||(e=String(e));const t=z(this);return ve(t,"has",e),t.hasOwnProperty(e)}class Ks{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return l;if(n==="__v_raw")return s===(o?l?Ti:Xs:l?Ys:qs).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const a=D(t);if(!o){let c;if(a&&(c=fi[n]))return c;if(n==="hasOwnProperty")return pi}const f=Reflect.get(t,n,be(t)?t:s);return(st(n)?Ws.has(n):di(n))||(o||ve(t,"get",n),l)?f:be(f)?a&&Sr(n)?f:f.value:oe(f)?o?zs(f):Tt(f):f}}class Us extends Ks{constructor(t=!1){super(!1,t)}set(t,n,s,o){let l=t[n];if(!this._isShallow){const c=pt(l);if(!Fe(s)&&!pt(s)&&(l=z(l),s=z(s)),!D(t)&&be(l)&&!be(s))return c||(l.value=s),!0}const a=D(t)&&Sr(n)?Number(n)<t.length:Z(t,n),f=Reflect.set(t,n,s,be(t)?t:o);return t===z(o)&&(a?Ee(s,l)&&Qe(t,"set",n,s):Qe(t,"add",n,s)),f}deleteProperty(t,n){const s=Z(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&Qe(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!st(n)||!Ws.has(n))&&ve(t,"has",n),s}ownKeys(t){return ve(t,"iterate",D(t)?"length":St),Reflect.ownKeys(t)}}class _i extends Ks{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const hi=new Us,mi=new _i,gi=new Us(!0);const dr=e=>e,dn=e=>Reflect.getPrototypeOf(e);function vi(e,t,n){return function(...s){const o=this.__v_raw,l=z(o),a=$t(l),f=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,_=o[e](...s),p=n?dr:t?Tn:ge;return!t&&ve(l,"iterate",c?cr:St),{next(){const{value:r,done:i}=_.next();return i?{value:r,done:i}:{value:f?[p(r[0]),p(r[1])]:p(r),done:i}},[Symbol.iterator](){return this}}}}function pn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function yi(e,t){const n={get(o){const l=this.__v_raw,a=z(l),f=z(o);e||(Ee(o,f)&&ve(a,"get",o),ve(a,"get",f));const{has:c}=dn(a),_=t?dr:e?Tn:ge;if(c.call(a,o))return _(l.get(o));if(c.call(a,f))return _(l.get(f));l!==a&&l.get(o)},get size(){const o=this.__v_raw;return!e&&ve(z(o),"iterate",St),o.size},has(o){const l=this.__v_raw,a=z(l),f=z(o);return e||(Ee(o,f)&&ve(a,"has",o),ve(a,"has",f)),o===f?l.has(o):l.has(o)||l.has(f)},forEach(o,l){const a=this,f=a.__v_raw,c=z(f),_=t?dr:e?Tn:ge;return!e&&ve(c,"iterate",St),f.forEach((p,r)=>o.call(l,_(p),_(r),a))}};return de(n,e?{add:pn("add"),set:pn("set"),delete:pn("delete"),clear:pn("clear")}:{add(o){!t&&!Fe(o)&&!pt(o)&&(o=z(o));const l=z(this);return dn(l).has.call(l,o)||(l.add(o),Qe(l,"add",o,o)),this},set(o,l){!t&&!Fe(l)&&!pt(l)&&(l=z(l));const a=z(this),{has:f,get:c}=dn(a);let _=f.call(a,o);_||(o=z(o),_=f.call(a,o));const p=c.call(a,o);return a.set(o,l),_?Ee(l,p)&&Qe(a,"set",o,l):Qe(a,"add",o,l),this},delete(o){const l=z(this),{has:a,get:f}=dn(l);let c=a.call(l,o);c||(o=z(o),c=a.call(l,o)),f&&f.call(l,o);const _=l.delete(o);return c&&Qe(l,"delete",o,void 0),_},clear(){const o=z(this),l=o.size!==0,a=o.clear();return l&&Qe(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=vi(o,e,t)}),n}function kr(e,t){const n=yi(e,t);return(s,o,l)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(Z(n,o)&&o in s?n:s,o,l)}const bi={get:kr(!1,!1)},wi={get:kr(!1,!0)},Ai={get:kr(!0,!1)};const qs=new WeakMap,Ys=new WeakMap,Xs=new WeakMap,Ti=new WeakMap;function xi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Si(e){return e.__v_skip||!Object.isExtensible(e)?0:xi(Xo(e))}function Tt(e){return pt(e)?e:$r(e,!1,hi,bi,qs)}function Ci(e){return $r(e,!1,gi,wi,Ys)}function zs(e){return $r(e,!0,mi,Ai,Xs)}function $r(e,t,n,s,o){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=Si(e);if(l===0)return e;const a=o.get(e);if(a)return a;const f=new Proxy(e,l===2?s:n);return o.set(e,f),f}function Mt(e){return pt(e)?Mt(e.__v_raw):!!(e&&e.__v_isReactive)}function pt(e){return!!(e&&e.__v_isReadonly)}function Fe(e){return!!(e&&e.__v_isShallow)}function Mr(e){return e?!!e.__v_raw:!1}function z(e){const t=e&&e.__v_raw;return t?z(t):e}function Ii(e){return!Z(e,"__v_skip")&&Object.isExtensible(e)&&Ps(e,"__v_skip",!0),e}const ge=e=>oe(e)?Tt(e):e,Tn=e=>oe(e)?zs(e):e;function be(e){return e?e.__v_isRef===!0:!1}function me(e){return Ei(e,!1)}function Ei(e,t){return be(e)?e:new ki(e,t)}class ki{constructor(t,n){this.dep=new Dn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:z(t),this._value=n?t:ge(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Fe(t)||pt(t);t=s?t:z(t),Ee(t,n)&&(this._rawValue=t,this._value=s?t:ge(t),this.dep.trigger())}}function dt(e){return be(e)?e.value:e}const $i={get:(e,t,n)=>t==="__v_raw"?e:dt(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return be(o)&&!be(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Js(e){return Mt(e)?e:new Proxy(e,$i)}class Mi{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Dn,{get:s,set:o}=t(n.track.bind(n),n.trigger.bind(n));this._get=s,this._set=o}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Pi(e){return new Mi(e)}class Oi{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Dn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=en-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&se!==this)return Rs(this,!0),!0}get value(){const t=this.dep.track();return js(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Fi(e,t,n=!1){let s,o;return V(e)?s=e:(s=e.get,o=e.set),new Oi(s,o,n)}const _n={},xn=new WeakMap;let wt;function Bi(e,t=!1,n=wt){if(n){let s=xn.get(n);s||xn.set(n,s=[]),s.push(e)}}function Li(e,t,n=Q){const{immediate:s,deep:o,once:l,scheduler:a,augmentJob:f,call:c}=n,_=M=>o?M:Fe(M)||o===!1||o===0?ct(M,1):ct(M);let p,r,i,u,d=!1,g=!1;if(be(e)?(r=()=>e.value,d=Fe(e)):Mt(e)?(r=()=>_(e),d=!0):D(e)?(g=!0,d=e.some(M=>Mt(M)||Fe(M)),r=()=>e.map(M=>{if(be(M))return M.value;if(Mt(M))return _(M);if(V(M))return c?c(M,2):M()})):V(e)?t?r=c?()=>c(e,2):e:r=()=>{if(i){nt();try{i()}finally{rt()}}const M=wt;wt=p;try{return c?c(e,3,[u]):e(u)}finally{wt=M}}:r=Xe,t&&o){const M=r,W=o===!0?1/0:o;r=()=>ct(M(),W)}const y=li(),v=()=>{p.stop(),y&&y.active&&xr(y.effects,p)};if(l&&t){const M=t;t=(...W)=>{M(...W),v()}}let T=g?new Array(e.length).fill(_n):_n;const F=M=>{if(!(!(p.flags&1)||!p.dirty&&!M))if(t){const W=p.run();if(o||d||(g?W.some((ne,ue)=>Ee(ne,T[ue])):Ee(W,T))){i&&i();const ne=wt;wt=p;try{const ue=[W,T===_n?void 0:g&&T[0]===_n?[]:T,u];T=W,c?c(t,3,ue):t(...ue)}finally{wt=ne}}}else p.run()};return f&&f(F),p=new Ls(r),p.scheduler=a?()=>a(F,!1):F,u=M=>Bi(M,!1,p),i=p.onStop=()=>{const M=xn.get(p);if(M){if(c)c(M,4);else for(const W of M)W();xn.delete(p)}},t?s?F(!0):T=p.run():a?a(F.bind(null,!0),!0):p.run(),v.pause=p.pause.bind(p),v.resume=p.resume.bind(p),v.stop=v,v}function ct(e,t=1/0,n){if(t<=0||!oe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,be(e))ct(e.value,t,n);else if(D(e))for(let s=0;s<e.length;s++)ct(e[s],t,n);else if(Is(e)||$t(e))e.forEach(s=>{ct(s,t,n)});else if($s(e)){for(const s in e)ct(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&ct(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function an(e,t,n,s){try{return s?e(...s):e()}catch(o){jn(o,t,n)}}function De(e,t,n,s){if(V(e)){const o=an(e,t,n,s);return o&&Es(o)&&o.catch(l=>{jn(l,t,n)}),o}if(D(e)){const o=[];for(let l=0;l<e.length;l++)o.push(De(e[l],t,n,s));return o}}function jn(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Q;if(t){let f=t.parent;const c=t.proxy,_=`https://vuejs.org/error-reference/#runtime-${n}`;for(;f;){const p=f.ec;if(p){for(let r=0;r<p.length;r++)if(p[r](e,c,_)===!1)return}f=f.parent}if(l){nt(),an(l,null,10,[e,c,_]),rt();return}}Hi(e,n,o,s,a)}function Hi(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const Te=[];let qe=-1;const Pt=[];let at=null,Et=0;const Zs=Promise.resolve();let Sn=null;function Kt(e){const t=Sn||Zs;return e?t.then(this?e.bind(this):e):t}function Ri(e){let t=qe+1,n=Te.length;for(;t<n;){const s=t+n>>>1,o=Te[s],l=nn(o);l<e||l===e&&o.flags&2?t=s+1:n=s}return t}function Pr(e){if(!(e.flags&1)){const t=nn(e),n=Te[Te.length-1];!n||!(e.flags&2)&&t>=nn(n)?Te.push(e):Te.splice(Ri(t),0,e),e.flags|=1,Qs()}}function Qs(){Sn||(Sn=Zs.then(to))}function Di(e){D(e)?Pt.push(...e):at&&e.id===-1?at.splice(Et+1,0,e):e.flags&1||(Pt.push(e),e.flags|=1),Qs()}function qr(e,t,n=qe+1){for(;n<Te.length;n++){const s=Te[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Te.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function eo(e){if(Pt.length){const t=[...new Set(Pt)].sort((n,s)=>nn(n)-nn(s));if(Pt.length=0,at){at.push(...t);return}for(at=t,Et=0;Et<at.length;Et++){const n=at[Et];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}at=null,Et=0}}const nn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function to(e){try{for(qe=0;qe<Te.length;qe++){const t=Te[qe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),an(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;qe<Te.length;qe++){const t=Te[qe];t&&(t.flags&=-2)}qe=-1,Te.length=0,eo(),Sn=null,(Te.length||Pt.length)&&to()}}let ke=null,no=null;function Cn(e){const t=ke;return ke=e,no=e&&e.type.__scopeId||null,t}function ut(e,t=ke,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Mn(-1);const l=Cn(t);let a;try{a=e(...o)}finally{Cn(l),s._d&&Mn(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function gt(e,t,n,s){const o=e.dirs,l=t&&t.dirs;for(let a=0;a<o.length;a++){const f=o[a];l&&(f.oldValue=l[a].value);let c=f.dir[s];c&&(nt(),De(c,n,8,[e.el,f,e,t]),rt())}}const Ni=Symbol("_vte"),ro=e=>e.__isTeleport,Ze=Symbol("_leaveCb"),hn=Symbol("_enterCb");function so(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wn(()=>{e.isMounted=!0}),po(()=>{e.isUnmounting=!0}),e}const Oe=[Function,Array],oo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Oe,onEnter:Oe,onAfterEnter:Oe,onEnterCancelled:Oe,onBeforeLeave:Oe,onLeave:Oe,onAfterLeave:Oe,onLeaveCancelled:Oe,onBeforeAppear:Oe,onAppear:Oe,onAfterAppear:Oe,onAppearCancelled:Oe},io=e=>{const t=e.subTree;return t.component?io(t.component):t},ji={name:"BaseTransition",props:oo,setup(e,{slots:t}){const n=Yn(),s=so();return()=>{const o=t.default&&Or(t.default(),!0);if(!o||!o.length)return;const l=lo(o),a=z(e),{mode:f}=a;if(s.isLeaving)return nr(l);const c=Yr(l);if(!c)return nr(l);let _=rn(c,a,s,n,r=>_=r);c.type!==ye&&Ct(c,_);let p=n.subTree&&Yr(n.subTree);if(p&&p.type!==ye&&!At(p,c)&&io(n).type!==ye){let r=rn(p,a,s,n);if(Ct(p,r),f==="out-in"&&c.type!==ye)return s.isLeaving=!0,r.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete r.afterLeave,p=void 0},nr(l);f==="in-out"&&c.type!==ye?r.delayLeave=(i,u,d)=>{const g=ao(s,p);g[String(p.key)]=p,i[Ze]=()=>{u(),i[Ze]=void 0,delete _.delayedLeave,p=void 0},_.delayedLeave=()=>{d(),delete _.delayedLeave,p=void 0}}:p=void 0}else p&&(p=void 0);return l}}};function lo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==ye){t=n;break}}return t}const Vi=ji;function ao(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function rn(e,t,n,s,o){const{appear:l,mode:a,persisted:f=!1,onBeforeEnter:c,onEnter:_,onAfterEnter:p,onEnterCancelled:r,onBeforeLeave:i,onLeave:u,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:T,onAppearCancelled:F}=t,M=String(e.key),W=ao(n,e),ne=(B,q)=>{B&&De(B,s,9,q)},ue=(B,q)=>{const L=q[1];ne(B,q),D(B)?B.every(I=>I.length<=1)&&L():B.length<=1&&L()},ce={mode:a,persisted:f,beforeEnter(B){let q=c;if(!n.isMounted)if(l)q=y||c;else return;B[Ze]&&B[Ze](!0);const L=W[M];L&&At(e,L)&&L.el[Ze]&&L.el[Ze](),ne(q,[B])},enter(B){let q=_,L=p,I=r;if(!n.isMounted)if(l)q=v||_,L=T||p,I=F||r;else return;let N=!1;const G=B[hn]=_e=>{N||(N=!0,_e?ne(I,[B]):ne(L,[B]),ce.delayedLeave&&ce.delayedLeave(),B[hn]=void 0)};q?ue(q,[B,G]):G()},leave(B,q){const L=String(e.key);if(B[hn]&&B[hn](!0),n.isUnmounting)return q();ne(i,[B]);let I=!1;const N=B[Ze]=G=>{I||(I=!0,q(),G?ne(g,[B]):ne(d,[B]),B[Ze]=void 0,W[L]===e&&delete W[L])};W[L]=e,u?ue(u,[B,N]):N()},clone(B){const q=rn(B,t,n,s,o);return o&&o(q),q}};return ce}function nr(e){if(Vn(e))return e=_t(e),e.children=null,e}function Yr(e){if(!Vn(e))return ro(e.type)&&e.children?lo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&V(n.default))return n.default()}}function Ct(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ct(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Or(e,t=!1,n){let s=[],o=0;for(let l=0;l<e.length;l++){let a=e[l];const f=n==null?a.key:String(n)+String(a.key!=null?a.key:l);a.type===he?(a.patchFlag&128&&o++,s=s.concat(Or(a.children,t,f))):(t||a.type!==ye)&&s.push(f!=null?_t(a,{key:f}):a)}if(o>1)for(let l=0;l<s.length;l++)s[l].patchFlag=-2;return s}function Be(e,t){return V(e)?de({name:e.name},t,{setup:e}):e}function uo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const In=new WeakMap;function zt(e,t,n,s,o=!1){if(D(e)){e.forEach((d,g)=>zt(d,t&&(D(t)?t[g]:t),n,s,o));return}if(Ot(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&zt(e,t,n,s.component.subTree);return}const l=s.shapeFlag&4?Rr(s.component):s.el,a=o?null:l,{i:f,r:c}=e,_=t&&t.r,p=f.refs===Q?f.refs={}:f.refs,r=f.setupState,i=z(r),u=r===Q?Cs:d=>Z(i,d);if(_!=null&&_!==c){if(Xr(t),fe(_))p[_]=null,u(_)&&(r[_]=null);else if(be(_)){_.value=null;const d=t;d.k&&(p[d.k]=null)}}if(V(c))an(c,f,12,[a,p]);else{const d=fe(c),g=be(c);if(d||g){const y=()=>{if(e.f){const v=d?u(c)?r[c]:p[c]:c.value;if(o)D(v)&&xr(v,l);else if(D(v))v.includes(l)||v.push(l);else if(d)p[c]=[l],u(c)&&(r[c]=p[c]);else{const T=[l];c.value=T,e.k&&(p[e.k]=T)}}else d?(p[c]=a,u(c)&&(r[c]=a)):g&&(c.value=a,e.k&&(p[e.k]=a))};if(a){const v=()=>{y(),In.delete(e)};v.id=-1,In.set(e,v),Me(v,n)}else Xr(e),y()}}}function Xr(e){const t=In.get(e);t&&(t.flags|=8,In.delete(e))}Rn().requestIdleCallback;Rn().cancelIdleCallback;const Ot=e=>!!e.type.__asyncLoader,Vn=e=>e.type.__isKeepAlive;function Gi(e,t){fo(e,"a",t)}function Wi(e,t){fo(e,"da",t)}function fo(e,t,n=xe){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Gn(t,s,n),n){let o=n.parent;for(;o&&o.parent;)Vn(o.parent.vnode)&&Ki(s,t,n,o),o=o.parent}}function Ki(e,t,n,s){const o=Gn(t,e,s,!0);Kn(()=>{xr(s[t],o)},n)}function Gn(e,t,n=xe,s=!1){if(n){const o=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...a)=>{nt();const f=un(n),c=De(t,n,e,a);return f(),rt(),c});return s?o.unshift(l):o.push(l),l}}const ot=e=>(t,n=xe)=>{(!ln||e==="sp")&&Gn(e,(...s)=>t(...s),n)},Ui=ot("bm"),Wn=ot("m"),qi=ot("bu"),co=ot("u"),po=ot("bum"),Kn=ot("um"),Yi=ot("sp"),Xi=ot("rtg"),zi=ot("rtc");function Ji(e,t=xe){Gn("ec",e,t)}const Zi=Symbol.for("v-ndc");function En(e,t,n,s){let o;const l=n,a=D(e);if(a||fe(e)){const f=a&&Mt(e);let c=!1,_=!1;f&&(c=!Fe(e),_=pt(e),e=Nn(e)),o=new Array(e.length);for(let p=0,r=e.length;p<r;p++)o[p]=t(c?_?Tn(ge(e[p])):ge(e[p]):e[p],p,void 0,l)}else if(typeof e=="number"){o=new Array(e);for(let f=0;f<e;f++)o[f]=t(f+1,f,void 0,l)}else if(oe(e))if(e[Symbol.iterator])o=Array.from(e,(f,c)=>t(f,c,void 0,l));else{const f=Object.keys(e);o=new Array(f.length);for(let c=0,_=f.length;c<_;c++){const p=f[c];o[c]=t(e[p],p,c,l)}}else o=[];return o}function Qi(e,t,n={},s,o){if(ke.ce||ke.parent&&Ot(ke.parent)&&ke.parent.ce)return U(),He(he,null,[ae("slot",n,s&&s())],64);let l=e[t];l&&l._c&&(l._d=!1),U();const a=l&&_o(l(n)),f=n.key||a&&a.key,c=He(he,{key:(f&&!st(f)?f:`_${t}`)+(!a&&s?"_fb":"")},a||(s?s():[]),a&&e._===1?64:-2);return l&&l._c&&(l._d=!0),c}function _o(e){return e.some(t=>on(t)?!(t.type===ye||t.type===he&&!_o(t.children)):!0)?e:null}const pr=e=>e?Fo(e)?Rr(e):pr(e.parent):null,Jt=de(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pr(e.parent),$root:e=>pr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>mo(e),$forceUpdate:e=>e.f||(e.f=()=>{Pr(e.update)}),$nextTick:e=>e.n||(e.n=Kt.bind(e.proxy)),$watch:e=>Tl.bind(e)}),rr=(e,t)=>e!==Q&&!e.__isScriptSetup&&Z(e,t),el={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:l,accessCache:a,type:f,appContext:c}=e;let _;if(t[0]!=="$"){const u=a[t];if(u!==void 0)switch(u){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return l[t]}else{if(rr(s,t))return a[t]=1,s[t];if(o!==Q&&Z(o,t))return a[t]=2,o[t];if((_=e.propsOptions[0])&&Z(_,t))return a[t]=3,l[t];if(n!==Q&&Z(n,t))return a[t]=4,n[t];_r&&(a[t]=0)}}const p=Jt[t];let r,i;if(p)return t==="$attrs"&&ve(e.attrs,"get",""),p(e);if((r=f.__cssModules)&&(r=r[t]))return r;if(n!==Q&&Z(n,t))return a[t]=4,n[t];if(i=c.config.globalProperties,Z(i,t))return i[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:l}=e;return rr(o,t)?(o[t]=n,!0):s!==Q&&Z(s,t)?(s[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:l,type:a}},f){let c,_;return!!(n[f]||e!==Q&&f[0]!=="$"&&Z(e,f)||rr(t,f)||(c=l[0])&&Z(c,f)||Z(s,f)||Z(Jt,f)||Z(o.config.globalProperties,f)||(_=a.__cssModules)&&_[f])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function kn(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function tl(e,t){return!e||!t?e||t:D(e)&&D(t)?e.concat(t):de({},kn(e),kn(t))}let _r=!0;function nl(e){const t=mo(e),n=e.proxy,s=e.ctx;_r=!1,t.beforeCreate&&zr(t.beforeCreate,e,"bc");const{data:o,computed:l,methods:a,watch:f,provide:c,inject:_,created:p,beforeMount:r,mounted:i,beforeUpdate:u,updated:d,activated:g,deactivated:y,beforeDestroy:v,beforeUnmount:T,destroyed:F,unmounted:M,render:W,renderTracked:ne,renderTriggered:ue,errorCaptured:ce,serverPrefetch:B,expose:q,inheritAttrs:L,components:I,directives:N,filters:G}=t;if(_&&rl(_,s,null),a)for(const J in a){const Y=a[J];V(Y)&&(s[J]=Y.bind(n))}if(o){const J=o.call(n,n);oe(J)&&(e.data=Tt(J))}if(_r=!0,l)for(const J in l){const Y=l[J],we=V(Y)?Y.bind(n,n):V(Y.get)?Y.get.bind(n,n):Xe,fn=!V(Y)&&V(Y.set)?Y.set.bind(n):Xe,mt=Lo({get:we,set:fn});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>mt.value,set:je=>mt.value=je})}if(f)for(const J in f)ho(f[J],s,n,J);if(c){const J=V(c)?c.call(n):c;Reflect.ownKeys(J).forEach(Y=>{ul(Y,J[Y])})}p&&zr(p,e,"c");function ee(J,Y){D(Y)?Y.forEach(we=>J(we.bind(n))):Y&&J(Y.bind(n))}if(ee(Ui,r),ee(Wn,i),ee(qi,u),ee(co,d),ee(Gi,g),ee(Wi,y),ee(Ji,ce),ee(zi,ne),ee(Xi,ue),ee(po,T),ee(Kn,M),ee(Yi,B),D(q))if(q.length){const J=e.exposed||(e.exposed={});q.forEach(Y=>{Object.defineProperty(J,Y,{get:()=>n[Y],set:we=>n[Y]=we,enumerable:!0})})}else e.exposed||(e.exposed={});W&&e.render===Xe&&(e.render=W),L!=null&&(e.inheritAttrs=L),I&&(e.components=I),N&&(e.directives=N),B&&uo(e)}function rl(e,t,n=Xe){D(e)&&(e=hr(e));for(const s in e){const o=e[s];let l;oe(o)?"default"in o?l=gn(o.from||s,o.default,!0):l=gn(o.from||s):l=gn(o),be(l)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>l.value,set:a=>l.value=a}):t[s]=l}}function zr(e,t,n){De(D(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function ho(e,t,n,s){let o=s.includes(".")?Eo(n,s):()=>n[s];if(fe(e)){const l=t[e];V(l)&&Bt(o,l)}else if(V(e))Bt(o,e.bind(n));else if(oe(e))if(D(e))e.forEach(l=>ho(l,t,n,s));else{const l=V(e.handler)?e.handler.bind(n):t[e.handler];V(l)&&Bt(o,l,e)}}function mo(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:l,config:{optionMergeStrategies:a}}=e.appContext,f=l.get(t);let c;return f?c=f:!o.length&&!n&&!s?c=t:(c={},o.length&&o.forEach(_=>$n(c,_,a,!0)),$n(c,t,a)),oe(t)&&l.set(t,c),c}function $n(e,t,n,s=!1){const{mixins:o,extends:l}=t;l&&$n(e,l,n,!0),o&&o.forEach(a=>$n(e,a,n,!0));for(const a in t)if(!(s&&a==="expose")){const f=sl[a]||n&&n[a];e[a]=f?f(e[a],t[a]):t[a]}return e}const sl={data:Jr,props:Zr,emits:Zr,methods:Ut,computed:Ut,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:Ut,directives:Ut,watch:il,provide:Jr,inject:ol};function Jr(e,t){return t?e?function(){return de(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function ol(e,t){return Ut(hr(e),hr(t))}function hr(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Ut(e,t){return e?de(Object.create(null),e,t):t}function Zr(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:de(Object.create(null),kn(e),kn(t??{})):t}function il(e,t){if(!e)return t;if(!t)return e;const n=de(Object.create(null),e);for(const s in t)n[s]=Ae(e[s],t[s]);return n}function go(){return{app:null,config:{isNativeTag:Cs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ll=0;function al(e,t){return function(s,o=null){V(s)||(s=de({},s)),o!=null&&!oe(o)&&(o=null);const l=go(),a=new WeakSet,f=[];let c=!1;const _=l.app={_uid:ll++,_component:s,_props:o,_container:null,_context:l,_instance:null,version:Ul,get config(){return l.config},set config(p){},use(p,...r){return a.has(p)||(p&&V(p.install)?(a.add(p),p.install(_,...r)):V(p)&&(a.add(p),p(_,...r))),_},mixin(p){return l.mixins.includes(p)||l.mixins.push(p),_},component(p,r){return r?(l.components[p]=r,_):l.components[p]},directive(p,r){return r?(l.directives[p]=r,_):l.directives[p]},mount(p,r,i){if(!c){const u=_._ceVNode||ae(s,o);return u.appContext=l,i===!0?i="svg":i===!1&&(i=void 0),e(u,p,i),c=!0,_._container=p,p.__vue_app__=_,Rr(u.component)}},onUnmount(p){f.push(p)},unmount(){c&&(De(f,_._instance,16),e(null,_._container),delete _._container.__vue_app__)},provide(p,r){return l.provides[p]=r,_},runWithContext(p){const r=Ft;Ft=_;try{return p()}finally{Ft=r}}};return _}}let Ft=null;function ul(e,t){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[e]=t}}function gn(e,t,n=!1){const s=Yn();if(s||Ft){let o=Ft?Ft._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&V(t)?t.call(s&&s.proxy):t}}const vo={},yo=()=>Object.create(vo),bo=e=>Object.getPrototypeOf(e)===vo;function fl(e,t,n,s=!1){const o={},l=yo();e.propsDefaults=Object.create(null),wo(e,t,o,l);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);n?e.props=s?o:Ci(o):e.type.props?e.props=o:e.props=l,e.attrs=l}function cl(e,t,n,s){const{props:o,attrs:l,vnode:{patchFlag:a}}=e,f=z(o),[c]=e.propsOptions;let _=!1;if((s||a>0)&&!(a&16)){if(a&8){const p=e.vnode.dynamicProps;for(let r=0;r<p.length;r++){let i=p[r];if(Un(e.emitsOptions,i))continue;const u=t[i];if(c)if(Z(l,i))u!==l[i]&&(l[i]=u,_=!0);else{const d=tt(i);o[d]=mr(c,f,d,u,e,!1)}else u!==l[i]&&(l[i]=u,_=!0)}}}else{wo(e,t,o,l)&&(_=!0);let p;for(const r in f)(!t||!Z(t,r)&&((p=ht(r))===r||!Z(t,p)))&&(c?n&&(n[r]!==void 0||n[p]!==void 0)&&(o[r]=mr(c,f,r,void 0,e,!0)):delete o[r]);if(l!==f)for(const r in l)(!t||!Z(t,r))&&(delete l[r],_=!0)}_&&Qe(e.attrs,"set","")}function wo(e,t,n,s){const[o,l]=e.propsOptions;let a=!1,f;if(t)for(let c in t){if(qt(c))continue;const _=t[c];let p;o&&Z(o,p=tt(c))?!l||!l.includes(p)?n[p]=_:(f||(f={}))[p]=_:Un(e.emitsOptions,c)||(!(c in s)||_!==s[c])&&(s[c]=_,a=!0)}if(l){const c=z(n),_=f||Q;for(let p=0;p<l.length;p++){const r=l[p];n[r]=mr(o,c,r,_[r],e,!Z(_,r))}}return a}function mr(e,t,n,s,o,l){const a=e[n];if(a!=null){const f=Z(a,"default");if(f&&s===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&V(c)){const{propsDefaults:_}=o;if(n in _)s=_[n];else{const p=un(o);s=_[n]=c.call(null,t),p()}}else s=c;o.ce&&o.ce._setProp(n,s)}a[0]&&(l&&!f?s=!1:a[1]&&(s===""||s===ht(n))&&(s=!0))}return s}const dl=new WeakMap;function Ao(e,t,n=!1){const s=n?dl:t.propsCache,o=s.get(e);if(o)return o;const l=e.props,a={},f=[];let c=!1;if(!V(e)){const p=r=>{c=!0;const[i,u]=Ao(r,t,!0);de(a,i),u&&f.push(...u)};!n&&t.mixins.length&&t.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!l&&!c)return oe(e)&&s.set(e,kt),kt;if(D(l))for(let p=0;p<l.length;p++){const r=tt(l[p]);Qr(r)&&(a[r]=Q)}else if(l)for(const p in l){const r=tt(p);if(Qr(r)){const i=l[p],u=a[r]=D(i)||V(i)?{type:i}:de({},i),d=u.type;let g=!1,y=!0;if(D(d))for(let v=0;v<d.length;++v){const T=d[v],F=V(T)&&T.name;if(F==="Boolean"){g=!0;break}else F==="String"&&(y=!1)}else g=V(d)&&d.name==="Boolean";u[0]=g,u[1]=y,(g||Z(u,"default"))&&f.push(r)}}const _=[a,f];return oe(e)&&s.set(e,_),_}function Qr(e){return e[0]!=="$"&&!qt(e)}const Fr=e=>e==="_"||e==="_ctx"||e==="$stable",Br=e=>D(e)?e.map(Ye):[Ye(e)],pl=(e,t,n)=>{if(t._n)return t;const s=ut((...o)=>Br(t(...o)),n);return s._c=!1,s},To=(e,t,n)=>{const s=e._ctx;for(const o in e){if(Fr(o))continue;const l=e[o];if(V(l))t[o]=pl(o,l,s);else if(l!=null){const a=Br(l);t[o]=()=>a}}},xo=(e,t)=>{const n=Br(t);e.slots.default=()=>n},So=(e,t,n)=>{for(const s in t)(n||!Fr(s))&&(e[s]=t[s])},_l=(e,t,n)=>{const s=e.slots=yo();if(e.vnode.shapeFlag&32){const o=t._;o?(So(s,t,n),n&&Ps(s,"_",o,!0)):To(t,s)}else t&&xo(e,t)},hl=(e,t,n)=>{const{vnode:s,slots:o}=e;let l=!0,a=Q;if(s.shapeFlag&32){const f=t._;f?n&&f===1?l=!1:So(o,t,n):(l=!t.$stable,To(t,o)),a=t}else t&&(xo(e,t),a={default:1});if(l)for(const f in o)!Fr(f)&&a[f]==null&&delete o[f]},Me=Ml;function ml(e){return gl(e)}function gl(e,t){const n=Rn();n.__VUE__=!0;const{insert:s,remove:o,patchProp:l,createElement:a,createText:f,createComment:c,setText:_,setElementText:p,parentNode:r,nextSibling:i,setScopeId:u=Xe,insertStaticContent:d}=e,g=(h,m,b,x=null,w=null,A=null,P=void 0,$=null,k=!!m.dynamicChildren)=>{if(h===m)return;h&&!At(h,m)&&(x=cn(h),je(h,w,A,!0),h=null),m.patchFlag===-2&&(k=!1,m.dynamicChildren=null);const{type:S,ref:R,shapeFlag:O}=m;switch(S){case qn:y(h,m,b,x);break;case ye:v(h,m,b,x);break;case vn:h==null&&T(m,b,x,P);break;case he:I(h,m,b,x,w,A,P,$,k);break;default:O&1?W(h,m,b,x,w,A,P,$,k):O&6?N(h,m,b,x,w,A,P,$,k):(O&64||O&128)&&S.process(h,m,b,x,w,A,P,$,k,Nt)}R!=null&&w?zt(R,h&&h.ref,A,m||h,!m):R==null&&h&&h.ref!=null&&zt(h.ref,null,A,h,!0)},y=(h,m,b,x)=>{if(h==null)s(m.el=f(m.children),b,x);else{const w=m.el=h.el;m.children!==h.children&&_(w,m.children)}},v=(h,m,b,x)=>{h==null?s(m.el=c(m.children||""),b,x):m.el=h.el},T=(h,m,b,x)=>{[h.el,h.anchor]=d(h.children,m,b,x,h.el,h.anchor)},F=({el:h,anchor:m},b,x)=>{let w;for(;h&&h!==m;)w=i(h),s(h,b,x),h=w;s(m,b,x)},M=({el:h,anchor:m})=>{let b;for(;h&&h!==m;)b=i(h),o(h),h=b;o(m)},W=(h,m,b,x,w,A,P,$,k)=>{m.type==="svg"?P="svg":m.type==="math"&&(P="mathml"),h==null?ne(m,b,x,w,A,P,$,k):B(h,m,w,A,P,$,k)},ne=(h,m,b,x,w,A,P,$)=>{let k,S;const{props:R,shapeFlag:O,transition:H,dirs:j}=h;if(k=h.el=a(h.type,A,R&&R.is,R),O&8?p(k,h.children):O&16&&ce(h.children,k,null,x,w,sr(h,A),P,$),j&&gt(h,null,x,"created"),ue(k,h,h.scopeId,P,x),R){for(const re in R)re!=="value"&&!qt(re)&&l(k,re,null,R[re],A,x);"value"in R&&l(k,"value",null,R.value,A),(S=R.onVnodeBeforeMount)&&Ke(S,x,h)}j&&gt(h,null,x,"beforeMount");const X=vl(w,H);X&&H.beforeEnter(k),s(k,m,b),((S=R&&R.onVnodeMounted)||X||j)&&Me(()=>{S&&Ke(S,x,h),X&&H.enter(k),j&&gt(h,null,x,"mounted")},w)},ue=(h,m,b,x,w)=>{if(b&&u(h,b),x)for(let A=0;A<x.length;A++)u(h,x[A]);if(w){let A=w.subTree;if(m===A||Mo(A.type)&&(A.ssContent===m||A.ssFallback===m)){const P=w.vnode;ue(h,P,P.scopeId,P.slotScopeIds,w.parent)}}},ce=(h,m,b,x,w,A,P,$,k=0)=>{for(let S=k;S<h.length;S++){const R=h[S]=$?ft(h[S]):Ye(h[S]);g(null,R,m,b,x,w,A,P,$)}},B=(h,m,b,x,w,A,P)=>{const $=m.el=h.el;let{patchFlag:k,dynamicChildren:S,dirs:R}=m;k|=h.patchFlag&16;const O=h.props||Q,H=m.props||Q;let j;if(b&&vt(b,!1),(j=H.onVnodeBeforeUpdate)&&Ke(j,b,m,h),R&&gt(m,h,b,"beforeUpdate"),b&&vt(b,!0),(O.innerHTML&&H.innerHTML==null||O.textContent&&H.textContent==null)&&p($,""),S?q(h.dynamicChildren,S,$,b,x,sr(m,w),A):P||Y(h,m,$,null,b,x,sr(m,w),A,!1),k>0){if(k&16)L($,O,H,b,w);else if(k&2&&O.class!==H.class&&l($,"class",null,H.class,w),k&4&&l($,"style",O.style,H.style,w),k&8){const X=m.dynamicProps;for(let re=0;re<X.length;re++){const te=X[re],Se=O[te],Ce=H[te];(Ce!==Se||te==="value")&&l($,te,Se,Ce,w,b)}}k&1&&h.children!==m.children&&p($,m.children)}else!P&&S==null&&L($,O,H,b,w);((j=H.onVnodeUpdated)||R)&&Me(()=>{j&&Ke(j,b,m,h),R&&gt(m,h,b,"updated")},x)},q=(h,m,b,x,w,A,P)=>{for(let $=0;$<m.length;$++){const k=h[$],S=m[$],R=k.el&&(k.type===he||!At(k,S)||k.shapeFlag&198)?r(k.el):b;g(k,S,R,null,x,w,A,P,!0)}},L=(h,m,b,x,w)=>{if(m!==b){if(m!==Q)for(const A in m)!qt(A)&&!(A in b)&&l(h,A,m[A],null,w,x);for(const A in b){if(qt(A))continue;const P=b[A],$=m[A];P!==$&&A!=="value"&&l(h,A,$,P,w,x)}"value"in b&&l(h,"value",m.value,b.value,w)}},I=(h,m,b,x,w,A,P,$,k)=>{const S=m.el=h?h.el:f(""),R=m.anchor=h?h.anchor:f("");let{patchFlag:O,dynamicChildren:H,slotScopeIds:j}=m;j&&($=$?$.concat(j):j),h==null?(s(S,b,x),s(R,b,x),ce(m.children||[],b,R,w,A,P,$,k)):O>0&&O&64&&H&&h.dynamicChildren?(q(h.dynamicChildren,H,b,w,A,P,$),(m.key!=null||w&&m===w.subTree)&&Co(h,m,!0)):Y(h,m,b,R,w,A,P,$,k)},N=(h,m,b,x,w,A,P,$,k)=>{m.slotScopeIds=$,h==null?m.shapeFlag&512?w.ctx.activate(m,b,x,P,k):G(m,b,x,w,A,P,k):_e(h,m,k)},G=(h,m,b,x,w,A,P)=>{const $=h.component=Dl(h,x,w);if(Vn(h)&&($.ctx.renderer=Nt),Nl($,!1,P),$.asyncDep){if(w&&w.registerDep($,ee,P),!h.el){const k=$.subTree=ae(ye);v(null,k,m,b),h.placeholder=k.el}}else ee($,h,m,b,w,A,P)},_e=(h,m,b)=>{const x=m.component=h.component;if(kl(h,m,b))if(x.asyncDep&&!x.asyncResolved){J(x,m,b);return}else x.next=m,x.update();else m.el=h.el,x.vnode=m},ee=(h,m,b,x,w,A,P)=>{const $=()=>{if(h.isMounted){let{next:O,bu:H,u:j,parent:X,vnode:re}=h;{const Ge=Io(h);if(Ge){O&&(O.el=re.el,J(h,O,P)),Ge.asyncDep.then(()=>{h.isUnmounted||$()});return}}let te=O,Se;vt(h,!1),O?(O.el=re.el,J(h,O,P)):O=re,H&&Jn(H),(Se=O.props&&O.props.onVnodeBeforeUpdate)&&Ke(Se,X,O,re),vt(h,!0);const Ce=ts(h),Ve=h.subTree;h.subTree=Ce,g(Ve,Ce,r(Ve.el),cn(Ve),h,w,A),O.el=Ce.el,te===null&&$l(h,Ce.el),j&&Me(j,w),(Se=O.props&&O.props.onVnodeUpdated)&&Me(()=>Ke(Se,X,O,re),w)}else{let O;const{el:H,props:j}=m,{bm:X,m:re,parent:te,root:Se,type:Ce}=h,Ve=Ot(m);vt(h,!1),X&&Jn(X),!Ve&&(O=j&&j.onVnodeBeforeMount)&&Ke(O,te,m),vt(h,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(Ce);const Ge=h.subTree=ts(h);g(null,Ge,b,x,h,w,A),m.el=Ge.el}if(re&&Me(re,w),!Ve&&(O=j&&j.onVnodeMounted)){const Ge=m;Me(()=>Ke(O,te,Ge),w)}(m.shapeFlag&256||te&&Ot(te.vnode)&&te.vnode.shapeFlag&256)&&h.a&&Me(h.a,w),h.isMounted=!0,m=b=x=null}};h.scope.on();const k=h.effect=new Ls($);h.scope.off();const S=h.update=k.run.bind(k),R=h.job=k.runIfDirty.bind(k);R.i=h,R.id=h.uid,k.scheduler=()=>Pr(R),vt(h,!0),S()},J=(h,m,b)=>{m.component=h;const x=h.vnode.props;h.vnode=m,h.next=null,cl(h,m.props,x,b),hl(h,m.children,b),nt(),qr(h),rt()},Y=(h,m,b,x,w,A,P,$,k=!1)=>{const S=h&&h.children,R=h?h.shapeFlag:0,O=m.children,{patchFlag:H,shapeFlag:j}=m;if(H>0){if(H&128){fn(S,O,b,x,w,A,P,$,k);return}else if(H&256){we(S,O,b,x,w,A,P,$,k);return}}j&8?(R&16&&Dt(S,w,A),O!==S&&p(b,O)):R&16?j&16?fn(S,O,b,x,w,A,P,$,k):Dt(S,w,A,!0):(R&8&&p(b,""),j&16&&ce(O,b,x,w,A,P,$,k))},we=(h,m,b,x,w,A,P,$,k)=>{h=h||kt,m=m||kt;const S=h.length,R=m.length,O=Math.min(S,R);let H;for(H=0;H<O;H++){const j=m[H]=k?ft(m[H]):Ye(m[H]);g(h[H],j,b,null,w,A,P,$,k)}S>R?Dt(h,w,A,!0,!1,O):ce(m,b,x,w,A,P,$,k,O)},fn=(h,m,b,x,w,A,P,$,k)=>{let S=0;const R=m.length;let O=h.length-1,H=R-1;for(;S<=O&&S<=H;){const j=h[S],X=m[S]=k?ft(m[S]):Ye(m[S]);if(At(j,X))g(j,X,b,null,w,A,P,$,k);else break;S++}for(;S<=O&&S<=H;){const j=h[O],X=m[H]=k?ft(m[H]):Ye(m[H]);if(At(j,X))g(j,X,b,null,w,A,P,$,k);else break;O--,H--}if(S>O){if(S<=H){const j=H+1,X=j<R?m[j].el:x;for(;S<=H;)g(null,m[S]=k?ft(m[S]):Ye(m[S]),b,X,w,A,P,$,k),S++}}else if(S>H)for(;S<=O;)je(h[S],w,A,!0),S++;else{const j=S,X=S,re=new Map;for(S=X;S<=H;S++){const $e=m[S]=k?ft(m[S]):Ye(m[S]);$e.key!=null&&re.set($e.key,S)}let te,Se=0;const Ce=H-X+1;let Ve=!1,Ge=0;const jt=new Array(Ce);for(S=0;S<Ce;S++)jt[S]=0;for(S=j;S<=O;S++){const $e=h[S];if(Se>=Ce){je($e,w,A,!0);continue}let We;if($e.key!=null)We=re.get($e.key);else for(te=X;te<=H;te++)if(jt[te-X]===0&&At($e,m[te])){We=te;break}We===void 0?je($e,w,A,!0):(jt[We-X]=S+1,We>=Ge?Ge=We:Ve=!0,g($e,m[We],b,null,w,A,P,$,k),Se++)}const jr=Ve?yl(jt):kt;for(te=jr.length-1,S=Ce-1;S>=0;S--){const $e=X+S,We=m[$e],Vr=m[$e+1],Gr=$e+1<R?Vr.el||Vr.placeholder:x;jt[S]===0?g(null,We,b,Gr,w,A,P,$,k):Ve&&(te<0||S!==jr[te]?mt(We,b,Gr,2):te--)}}},mt=(h,m,b,x,w=null)=>{const{el:A,type:P,transition:$,children:k,shapeFlag:S}=h;if(S&6){mt(h.component.subTree,m,b,x);return}if(S&128){h.suspense.move(m,b,x);return}if(S&64){P.move(h,m,b,Nt);return}if(P===he){s(A,m,b);for(let O=0;O<k.length;O++)mt(k[O],m,b,x);s(h.anchor,m,b);return}if(P===vn){F(h,m,b);return}if(x!==2&&S&1&&$)if(x===0)$.beforeEnter(A),s(A,m,b),Me(()=>$.enter(A),w);else{const{leave:O,delayLeave:H,afterLeave:j}=$,X=()=>{h.ctx.isUnmounted?o(A):s(A,m,b)},re=()=>{A._isLeaving&&A[Ze](!0),O(A,()=>{X(),j&&j()})};H?H(A,X,re):re()}else s(A,m,b)},je=(h,m,b,x=!1,w=!1)=>{const{type:A,props:P,ref:$,children:k,dynamicChildren:S,shapeFlag:R,patchFlag:O,dirs:H,cacheIndex:j}=h;if(O===-2&&(w=!1),$!=null&&(nt(),zt($,null,b,h,!0),rt()),j!=null&&(m.renderCache[j]=void 0),R&256){m.ctx.deactivate(h);return}const X=R&1&&H,re=!Ot(h);let te;if(re&&(te=P&&P.onVnodeBeforeUnmount)&&Ke(te,m,h),R&6)qo(h.component,b,x);else{if(R&128){h.suspense.unmount(b,x);return}X&&gt(h,null,m,"beforeUnmount"),R&64?h.type.remove(h,m,b,Nt,x):S&&!S.hasOnce&&(A!==he||O>0&&O&64)?Dt(S,m,b,!1,!0):(A===he&&O&384||!w&&R&16)&&Dt(k,m,b),x&&Dr(h)}(re&&(te=P&&P.onVnodeUnmounted)||X)&&Me(()=>{te&&Ke(te,m,h),X&&gt(h,null,m,"unmounted")},b)},Dr=h=>{const{type:m,el:b,anchor:x,transition:w}=h;if(m===he){Uo(b,x);return}if(m===vn){M(h);return}const A=()=>{o(b),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:$}=w,k=()=>P(b,A);$?$(h.el,A,k):k()}else A()},Uo=(h,m)=>{let b;for(;h!==m;)b=i(h),o(h),h=b;o(m)},qo=(h,m,b)=>{const{bum:x,scope:w,job:A,subTree:P,um:$,m:k,a:S}=h;es(k),es(S),x&&Jn(x),w.stop(),A&&(A.flags|=8,je(P,h,m,b)),$&&Me($,m),Me(()=>{h.isUnmounted=!0},m)},Dt=(h,m,b,x=!1,w=!1,A=0)=>{for(let P=A;P<h.length;P++)je(h[P],m,b,x,w)},cn=h=>{if(h.shapeFlag&6)return cn(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const m=i(h.anchor||h.el),b=m&&m[Ni];return b?i(b):m};let Xn=!1;const Nr=(h,m,b)=>{h==null?m._vnode&&je(m._vnode,null,null,!0):g(m._vnode||null,h,m,null,null,null,b),m._vnode=h,Xn||(Xn=!0,qr(),eo(),Xn=!1)},Nt={p:g,um:je,m:mt,r:Dr,mt:G,mc:ce,pc:Y,pbc:q,n:cn,o:e};return{render:Nr,hydrate:void 0,createApp:al(Nr)}}function sr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function vt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function vl(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Co(e,t,n=!1){const s=e.children,o=t.children;if(D(s)&&D(o))for(let l=0;l<s.length;l++){const a=s[l];let f=o[l];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=o[l]=ft(o[l]),f.el=a.el),!n&&f.patchFlag!==-2&&Co(a,f)),f.type===qn&&f.patchFlag!==-1&&(f.el=a.el),f.type===ye&&!f.el&&(f.el=a.el)}}function yl(e){const t=e.slice(),n=[0];let s,o,l,a,f;const c=e.length;for(s=0;s<c;s++){const _=e[s];if(_!==0){if(o=n[n.length-1],e[o]<_){t[s]=o,n.push(s);continue}for(l=0,a=n.length-1;l<a;)f=l+a>>1,e[n[f]]<_?l=f+1:a=f;_<e[n[l]]&&(l>0&&(t[s]=n[l-1]),n[l]=s)}}for(l=n.length,a=n[l-1];l-- >0;)n[l]=a,a=t[a];return n}function Io(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Io(t)}function es(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const bl=Symbol.for("v-scx"),wl=()=>gn(bl);function Al(e,t){return Lr(e,null,{flush:"sync"})}function Bt(e,t,n){return Lr(e,t,n)}function Lr(e,t,n=Q){const{immediate:s,deep:o,flush:l,once:a}=n,f=de({},n),c=t&&s||!t&&l!=="post";let _;if(ln){if(l==="sync"){const u=wl();_=u.__watcherHandles||(u.__watcherHandles=[])}else if(!c){const u=()=>{};return u.stop=Xe,u.resume=Xe,u.pause=Xe,u}}const p=xe;f.call=(u,d,g)=>De(u,p,d,g);let r=!1;l==="post"?f.scheduler=u=>{Me(u,p&&p.suspense)}:l!=="sync"&&(r=!0,f.scheduler=(u,d)=>{d?u():Pr(u)}),f.augmentJob=u=>{t&&(u.flags|=4),r&&(u.flags|=2,p&&(u.id=p.uid,u.i=p))};const i=Li(e,t,f);return ln&&(_?_.push(i):c&&i()),i}function Tl(e,t,n){const s=this.proxy,o=fe(e)?e.includes(".")?Eo(s,e):()=>s[e]:e.bind(s,s);let l;V(t)?l=t:(l=t.handler,n=t);const a=un(this),f=Lr(o,l.bind(s),n);return a(),f}function Eo(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function xl(e,t,n=Q){const s=Yn(),o=tt(t),l=ht(t),a=ko(e,o),f=Pi((c,_)=>{let p,r=Q,i;return Al(()=>{const u=e[o];Ee(p,u)&&(p=u,_())}),{get(){return c(),n.get?n.get(p):p},set(u){const d=n.set?n.set(u):u;if(!Ee(d,p)&&!(r!==Q&&Ee(u,r)))return;const g=s.vnode.props;g&&(t in g||o in g||l in g)&&(`onUpdate:${t}`in g||`onUpdate:${o}`in g||`onUpdate:${l}`in g)||(p=u,_()),s.emit(`update:${t}`,d),Ee(u,d)&&Ee(u,r)&&!Ee(d,i)&&_(),r=u,i=d}}});return f[Symbol.iterator]=()=>{let c=0;return{next(){return c<2?{value:c++?a||Q:f,done:!1}:{done:!0}}}},f}const ko=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${ht(t)}Modifiers`];function Sl(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Q;let o=n;const l=t.startsWith("update:"),a=l&&ko(s,t.slice(7));a&&(a.trim&&(o=n.map(p=>fe(p)?p.trim():p)),a.number&&(o=n.map(Zo)));let f,c=s[f=zn(t)]||s[f=zn(tt(t))];!c&&l&&(c=s[f=zn(ht(t))]),c&&De(c,e,6,o);const _=s[f+"Once"];if(_){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,De(_,e,6,o)}}const Cl=new WeakMap;function $o(e,t,n=!1){const s=n?Cl:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const l=e.emits;let a={},f=!1;if(!V(e)){const c=_=>{const p=$o(_,t,!0);p&&(f=!0,de(a,p))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!l&&!f?(oe(e)&&s.set(e,null),null):(D(l)?l.forEach(c=>a[c]=null):de(a,l),oe(e)&&s.set(e,a),a)}function Un(e,t){return!e||!Bn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,ht(t))||Z(e,t))}function ts(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[l],slots:a,attrs:f,emit:c,render:_,renderCache:p,props:r,data:i,setupState:u,ctx:d,inheritAttrs:g}=e,y=Cn(e);let v,T;try{if(n.shapeFlag&4){const M=o||s,W=M;v=Ye(_.call(W,M,p,r,u,i,d)),T=f}else{const M=t;v=Ye(M.length>1?M(r,{attrs:f,slots:a,emit:c}):M(r,null)),T=t.props?f:Il(f)}}catch(M){Zt.length=0,jn(M,e,1),v=ae(ye)}let F=v;if(T&&g!==!1){const M=Object.keys(T),{shapeFlag:W}=F;M.length&&W&7&&(l&&M.some(Tr)&&(T=El(T,l)),F=_t(F,T,!1,!0))}return n.dirs&&(F=_t(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&Ct(F,n.transition),v=F,Cn(y),v}const Il=e=>{let t;for(const n in e)(n==="class"||n==="style"||Bn(n))&&((t||(t={}))[n]=e[n]);return t},El=(e,t)=>{const n={};for(const s in e)(!Tr(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function kl(e,t,n){const{props:s,children:o,component:l}=e,{props:a,children:f,patchFlag:c}=t,_=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ns(s,a,_):!!a;if(c&8){const p=t.dynamicProps;for(let r=0;r<p.length;r++){const i=p[r];if(a[i]!==s[i]&&!Un(_,i))return!0}}}else return(o||f)&&(!f||!f.$stable)?!0:s===a?!1:s?a?ns(s,a,_):!0:!!a;return!1}function ns(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const l=s[o];if(t[l]!==e[l]&&!Un(n,l))return!0}return!1}function $l({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Mo=e=>e.__isSuspense;function Ml(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):Di(e)}const he=Symbol.for("v-fgt"),qn=Symbol.for("v-txt"),ye=Symbol.for("v-cmt"),vn=Symbol.for("v-stc"),Zt=[];let Pe=null;function U(e=!1){Zt.push(Pe=e?null:[])}function Pl(){Zt.pop(),Pe=Zt[Zt.length-1]||null}let sn=1;function Mn(e,t=!1){sn+=e,e<0&&Pe&&t&&(Pe.hasOnce=!0)}function Po(e){return e.dynamicChildren=sn>0?Pe||kt:null,Pl(),sn>0&&Pe&&Pe.push(e),e}function ie(e,t,n,s,o,l){return Po(le(e,t,n,s,o,l,!0))}function He(e,t,n,s,o){return Po(ae(e,t,n,s,o,!0))}function on(e){return e?e.__v_isVNode===!0:!1}function At(e,t){return e.type===t.type&&e.key===t.key}const Oo=({key:e})=>e??null,yn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?fe(e)||be(e)||V(e)?{i:ke,r:e,k:t,f:!!n}:e:null);function le(e,t=null,n=null,s=0,o=null,l=e===he?0:1,a=!1,f=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Oo(t),ref:t&&yn(t),scopeId:no,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ke};return f?(Hr(c,n),l&128&&e.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),sn>0&&!a&&Pe&&(c.patchFlag>0||l&6)&&c.patchFlag!==32&&Pe.push(c),c}const ae=Ol;function Ol(e,t=null,n=null,s=0,o=null,l=!1){if((!e||e===Zi)&&(e=ye),on(e)){const f=_t(e,t,!0);return n&&Hr(f,n),sn>0&&!l&&Pe&&(f.shapeFlag&6?Pe[Pe.indexOf(e)]=f:Pe.push(f)),f.patchFlag=-2,f}if(Wl(e)&&(e=e.__vccOpts),t){t=Fl(t);let{class:f,style:c}=t;f&&!fe(f)&&(t.class=et(f)),oe(c)&&(Mr(c)&&!D(c)&&(c=de({},c)),t.style=Ht(c))}const a=fe(e)?1:Mo(e)?128:ro(e)?64:oe(e)?4:V(e)?2:0;return le(e,t,n,s,o,a,l,!0)}function Fl(e){return e?Mr(e)||bo(e)?de({},e):e:null}function _t(e,t,n=!1,s=!1){const{props:o,ref:l,patchFlag:a,children:f,transition:c}=e,_=t?Ll(o||{},t):o,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:_,key:_&&Oo(_),ref:t&&t.ref?n&&l?D(l)?l.concat(yn(t)):[l,yn(t)]:yn(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:f,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==he?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&Ct(p,c.clone(p)),p}function Pn(e=" ",t=0){return ae(qn,null,e,t)}function Bl(e,t){const n=ae(vn,null,e);return n.staticCount=t,n}function xt(e="",t=!1){return t?(U(),He(ye,null,e)):ae(ye,null,e)}function Ye(e){return e==null||typeof e=="boolean"?ae(ye):D(e)?ae(he,null,e.slice()):on(e)?ft(e):ae(qn,null,String(e))}function ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:_t(e)}function Hr(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Hr(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!bo(t)?t._ctx=ke:o===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),s&64?(n=16,t=[Pn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ll(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=et([t.class,s.class]));else if(o==="style")t.style=Ht([t.style,s.style]);else if(Bn(o)){const l=t[o],a=s[o];a&&l!==a&&!(D(l)&&l.includes(a))&&(t[o]=l?[].concat(l,a):a)}else o!==""&&(t[o]=s[o])}return t}function Ke(e,t,n,s=null){De(e,t,7,[n,s])}const Hl=go();let Rl=0;function Dl(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Hl,l={uid:Rl++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ii(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ao(s,o),emitsOptions:$o(s,o),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:s.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Sl.bind(null,l),e.ce&&e.ce(l),l}let xe=null;const Yn=()=>xe||ke;let On,gr;{const e=Rn(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),l=>{o.length>1?o.forEach(a=>a(l)):o[0](l)}};On=t("__VUE_INSTANCE_SETTERS__",n=>xe=n),gr=t("__VUE_SSR_SETTERS__",n=>ln=n)}const un=e=>{const t=xe;return On(e),e.scope.on(),()=>{e.scope.off(),On(t)}},rs=()=>{xe&&xe.scope.off(),On(null)};function Fo(e){return e.vnode.shapeFlag&4}let ln=!1;function Nl(e,t=!1,n=!1){t&&gr(t);const{props:s,children:o}=e.vnode,l=Fo(e);fl(e,s,l,t),_l(e,o,n||t);const a=l?jl(e,t):void 0;return t&&gr(!1),a}function jl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,el);const{setup:s}=n;if(s){nt();const o=e.setupContext=s.length>1?Gl(e):null,l=un(e),a=an(s,e,0,[e.props,o]),f=Es(a);if(rt(),l(),(f||e.sp)&&!Ot(e)&&uo(e),f){if(a.then(rs,rs),t)return a.then(c=>{ss(e,c)}).catch(c=>{jn(c,e,0)});e.asyncDep=a}else ss(e,a)}else Bo(e)}function ss(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=Js(t)),Bo(e)}function Bo(e,t,n){const s=e.type;e.render||(e.render=s.render||Xe);{const o=un(e);nt();try{nl(e)}finally{rt(),o()}}}const Vl={get(e,t){return ve(e,"get",""),e[t]}};function Gl(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Vl),slots:e.slots,emit:e.emit,expose:t}}function Rr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Js(Ii(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jt)return Jt[n](e)},has(t,n){return n in t||n in Jt}})):e.proxy}function Wl(e){return V(e)&&"__vccOpts"in e}const Lo=(e,t)=>Fi(e,t,ln);function Kl(e,t,n){const s=(l,a,f)=>{Mn(-1);try{return ae(l,a,f)}finally{Mn(1)}},o=arguments.length;return o===2?oe(t)&&!D(t)?on(t)?s(e,null,[t]):s(e,t):s(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&on(n)&&(n=[n]),s(e,t,n))}const Ul="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vr;const os=typeof window<"u"&&window.trustedTypes;if(os)try{vr=os.createPolicy("vue",{createHTML:e=>e})}catch{}const Ho=vr?e=>vr.createHTML(e):e=>e,ql="http://www.w3.org/2000/svg",Yl="http://www.w3.org/1998/Math/MathML",Je=typeof document<"u"?document:null,is=Je&&Je.createElement("template"),Xl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?Je.createElementNS(ql,e):t==="mathml"?Je.createElementNS(Yl,e):n?Je.createElement(e,{is:n}):Je.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>Je.createTextNode(e),createComment:e=>Je.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Je.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,l){const a=n?n.previousSibling:t.lastChild;if(o&&(o===l||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===l||!(o=o.nextSibling)););else{is.innerHTML=Ho(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const f=is.content;if(s==="svg"||s==="mathml"){const c=f.firstChild;for(;c.firstChild;)f.appendChild(c.firstChild);f.removeChild(c)}t.insertBefore(f,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},it="transition",Gt="animation",Lt=Symbol("_vtc"),Ro={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Do=de({},oo,Ro),zl=e=>(e.displayName="Transition",e.props=Do,e),bn=zl((e,{slots:t})=>Kl(Vi,No(e),t)),yt=(e,t=[])=>{D(e)?e.forEach(n=>n(...t)):e&&e(...t)},ls=e=>e?D(e)?e.some(t=>t.length>1):e.length>1:!1;function No(e){const t={};for(const I in e)I in Ro||(t[I]=e[I]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:l=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:f=`${n}-enter-to`,appearFromClass:c=l,appearActiveClass:_=a,appearToClass:p=f,leaveFromClass:r=`${n}-leave-from`,leaveActiveClass:i=`${n}-leave-active`,leaveToClass:u=`${n}-leave-to`}=e,d=Jl(o),g=d&&d[0],y=d&&d[1],{onBeforeEnter:v,onEnter:T,onEnterCancelled:F,onLeave:M,onLeaveCancelled:W,onBeforeAppear:ne=v,onAppear:ue=T,onAppearCancelled:ce=F}=t,B=(I,N,G,_e)=>{I._enterCancelled=_e,lt(I,N?p:f),lt(I,N?_:a),G&&G()},q=(I,N)=>{I._isLeaving=!1,lt(I,r),lt(I,u),lt(I,i),N&&N()},L=I=>(N,G)=>{const _e=I?ue:T,ee=()=>B(N,I,G);yt(_e,[N,ee]),as(()=>{lt(N,I?c:l),Ue(N,I?p:f),ls(_e)||us(N,s,g,ee)})};return de(t,{onBeforeEnter(I){yt(v,[I]),Ue(I,l),Ue(I,a)},onBeforeAppear(I){yt(ne,[I]),Ue(I,c),Ue(I,_)},onEnter:L(!1),onAppear:L(!0),onLeave(I,N){I._isLeaving=!0;const G=()=>q(I,N);Ue(I,r),I._enterCancelled?(Ue(I,i),yr()):(yr(),Ue(I,i)),as(()=>{I._isLeaving&&(lt(I,r),Ue(I,u),ls(M)||us(I,s,y,G))}),yt(M,[I,G])},onEnterCancelled(I){B(I,!1,void 0,!0),yt(F,[I])},onAppearCancelled(I){B(I,!0,void 0,!0),yt(ce,[I])},onLeaveCancelled(I){q(I),yt(W,[I])}})}function Jl(e){if(e==null)return null;if(oe(e))return[or(e.enter),or(e.leave)];{const t=or(e);return[t,t]}}function or(e){return Qo(e)}function Ue(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Lt]||(e[Lt]=new Set)).add(t)}function lt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Lt];n&&(n.delete(t),n.size||(e[Lt]=void 0))}function as(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Zl=0;function us(e,t,n,s){const o=e._endId=++Zl,l=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(l,n);const{type:a,timeout:f,propCount:c}=jo(e,t);if(!a)return s();const _=a+"end";let p=0;const r=()=>{e.removeEventListener(_,i),l()},i=u=>{u.target===e&&++p>=c&&r()};setTimeout(()=>{p<c&&r()},f+1),e.addEventListener(_,i)}function jo(e,t){const n=window.getComputedStyle(e),s=d=>(n[d]||"").split(", "),o=s(`${it}Delay`),l=s(`${it}Duration`),a=fs(o,l),f=s(`${Gt}Delay`),c=s(`${Gt}Duration`),_=fs(f,c);let p=null,r=0,i=0;t===it?a>0&&(p=it,r=a,i=l.length):t===Gt?_>0&&(p=Gt,r=_,i=c.length):(r=Math.max(a,_),p=r>0?a>_?it:Gt:null,i=p?p===it?l.length:c.length:0);const u=p===it&&/\b(?:transform|all)(?:,|$)/.test(s(`${it}Property`).toString());return{type:p,timeout:r,propCount:i,hasTransform:u}}function fs(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>cs(n)+cs(e[s])))}function cs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function yr(){return document.body.offsetHeight}function Ql(e,t,n){const s=e[Lt];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ds=Symbol("_vod"),ea=Symbol("_vsh"),ta=Symbol(""),na=/(?:^|;)\s*display\s*:/;function ra(e,t,n){const s=e.style,o=fe(n);let l=!1;if(n&&!o){if(t)if(fe(t))for(const a of t.split(";")){const f=a.slice(0,a.indexOf(":")).trim();n[f]==null&&wn(s,f,"")}else for(const a in t)n[a]==null&&wn(s,a,"");for(const a in n)a==="display"&&(l=!0),wn(s,a,n[a])}else if(o){if(t!==n){const a=s[ta];a&&(n+=";"+a),s.cssText=n,l=na.test(n)}}else t&&e.removeAttribute("style");ds in e&&(e[ds]=l?s.display:"",e[ea]&&(s.display="none"))}const ps=/\s*!important$/;function wn(e,t,n){if(D(n))n.forEach(s=>wn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=sa(e,t);ps.test(n)?e.setProperty(ht(s),n.replace(ps,""),"important"):e[s]=n}}const _s=["Webkit","Moz","ms"],ir={};function sa(e,t){const n=ir[t];if(n)return n;let s=tt(t);if(s!=="filter"&&s in e)return ir[t]=s;s=Ms(s);for(let o=0;o<_s.length;o++){const l=_s[o]+s;if(l in e)return ir[t]=l}return t}const hs="http://www.w3.org/1999/xlink";function ms(e,t,n,s,o,l=oi(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(hs,t.slice(6,t.length)):e.setAttributeNS(hs,t,n):n==null||l&&!Os(n)?e.removeAttribute(t):e.setAttribute(t,l?"":st(n)?String(n):n)}function gs(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ho(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const f=l==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(f!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const f=typeof e[t];f==="boolean"?n=Os(n):n==null&&f==="string"?(n="",a=!0):f==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(o||t)}function oa(e,t,n,s){e.addEventListener(t,n,s)}function ia(e,t,n,s){e.removeEventListener(t,n,s)}const vs=Symbol("_vei");function la(e,t,n,s,o=null){const l=e[vs]||(e[vs]={}),a=l[t];if(s&&a)a.value=s;else{const[f,c]=aa(t);if(s){const _=l[t]=ca(s,o);oa(e,f,_,c)}else a&&(ia(e,f,a,c),l[t]=void 0)}}const ys=/(?:Once|Passive|Capture)$/;function aa(e){let t;if(ys.test(e)){t={};let s;for(;s=e.match(ys);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ht(e.slice(2)),t]}let lr=0;const ua=Promise.resolve(),fa=()=>lr||(ua.then(()=>lr=0),lr=Date.now());function ca(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;De(da(s,n.value),t,5,[s])};return n.value=e,n.attached=fa(),n}function da(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const bs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,pa=(e,t,n,s,o,l)=>{const a=o==="svg";t==="class"?Ql(e,s,a):t==="style"?ra(e,n,s):Bn(t)?Tr(t)||la(e,t,n,s,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_a(e,t,s,a))?(gs(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ms(e,t,s,a,l,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!fe(s))?gs(e,tt(t),s,l,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ms(e,t,s,a))};function _a(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&bs(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return bs(t)&&fe(n)?!1:t in e}const Vo=new WeakMap,Go=new WeakMap,Fn=Symbol("_moveCb"),ws=Symbol("_enterCb"),ha=e=>(delete e.props.mode,e),ma=ha({name:"TransitionGroup",props:de({},Do,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Yn(),s=so();let o,l;return co(()=>{if(!o.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!wa(o[0].el,n.vnode.el,a)){o=[];return}o.forEach(va),o.forEach(ya);const f=o.filter(ba);yr(),f.forEach(c=>{const _=c.el,p=_.style;Ue(_,a),p.transform=p.webkitTransform=p.transitionDuration="";const r=_[Fn]=i=>{i&&i.target!==_||(!i||i.propertyName.endsWith("transform"))&&(_.removeEventListener("transitionend",r),_[Fn]=null,lt(_,a))};_.addEventListener("transitionend",r)}),o=[]}),()=>{const a=z(e),f=No(a);let c=a.tag||he;if(o=[],l)for(let _=0;_<l.length;_++){const p=l[_];p.el&&p.el instanceof Element&&(o.push(p),Ct(p,rn(p,f,s,n)),Vo.set(p,p.el.getBoundingClientRect()))}l=t.default?Or(t.default()):[];for(let _=0;_<l.length;_++){const p=l[_];p.key!=null&&Ct(p,rn(p,f,s,n))}return ae(c,null,l)}}}),ga=ma;function va(e){const t=e.el;t[Fn]&&t[Fn](),t[ws]&&t[ws]()}function ya(e){Go.set(e,e.el.getBoundingClientRect())}function ba(e){const t=Vo.get(e),n=Go.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${s}px,${o}px)`,l.transitionDuration="0s",e}}function wa(e,t,n){const s=e.cloneNode(),o=e[Lt];o&&o.forEach(f=>{f.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(f=>f&&s.classList.add(f)),s.style.display="none";const l=t.nodeType===1?t:t.parentNode;l.appendChild(s);const{hasTransform:a}=jo(s);return l.removeChild(s),a}const Aa=de({patchProp:pa},Xl);let As;function Ta(){return As||(As=ml(Aa))}const xa=((...e)=>{const t=Ta().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Ca(s);if(!o)return;const l=t._component;!V(l)&&!l.render&&!l.template&&(l.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=n(o,!1,Sa(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t});function Sa(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ca(e){return fe(e)?document.querySelector(e):e}var Wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ar={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var Ts;function Ia(){return Ts||(Ts=1,(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var r=this||n;return r._counter=1e3,r._html5AudioPool=[],r.html5PoolSize=10,r._codecs={},r._howls=[],r._muted=!1,r._volume=1,r._canPlayEvent="canplaythrough",r._navigator=typeof window<"u"&&window.navigator?window.navigator:null,r.masterGain=null,r.noAudio=!1,r.usingWebAudio=!0,r.autoSuspend=!0,r.ctx=null,r.autoUnlock=!0,r._setup(),r},volume:function(r){var i=this||n;if(r=parseFloat(r),i.ctx||p(),typeof r<"u"&&r>=0&&r<=1){if(i._volume=r,i._muted)return i;i.usingWebAudio&&i.masterGain.gain.setValueAtTime(r,n.ctx.currentTime);for(var u=0;u<i._howls.length;u++)if(!i._howls[u]._webAudio)for(var d=i._howls[u]._getSoundIds(),g=0;g<d.length;g++){var y=i._howls[u]._soundById(d[g]);y&&y._node&&(y._node.volume=y._volume*r)}return i}return i._volume},mute:function(r){var i=this||n;i.ctx||p(),i._muted=r,i.usingWebAudio&&i.masterGain.gain.setValueAtTime(r?0:i._volume,n.ctx.currentTime);for(var u=0;u<i._howls.length;u++)if(!i._howls[u]._webAudio)for(var d=i._howls[u]._getSoundIds(),g=0;g<d.length;g++){var y=i._howls[u]._soundById(d[g]);y&&y._node&&(y._node.muted=r?!0:y._muted)}return i},stop:function(){for(var r=this||n,i=0;i<r._howls.length;i++)r._howls[i].stop();return r},unload:function(){for(var r=this||n,i=r._howls.length-1;i>=0;i--)r._howls[i].unload();return r.usingWebAudio&&r.ctx&&typeof r.ctx.close<"u"&&(r.ctx.close(),r.ctx=null,p()),r},codecs:function(r){return(this||n)._codecs[r.replace(/^x-/,"")]},_setup:function(){var r=this||n;if(r.state=r.ctx&&r.ctx.state||"suspended",r._autoSuspend(),!r.usingWebAudio)if(typeof Audio<"u")try{var i=new Audio;typeof i.oncanplaythrough>"u"&&(r._canPlayEvent="canplay")}catch{r.noAudio=!0}else r.noAudio=!0;try{var i=new Audio;i.muted&&(r.noAudio=!0)}catch{}return r.noAudio||r._setupCodecs(),r},_setupCodecs:function(){var r=this||n,i=null;try{i=typeof Audio<"u"?new Audio:null}catch{return r}if(!i||typeof i.canPlayType!="function")return r;var u=i.canPlayType("audio/mpeg;").replace(/^no$/,""),d=r._navigator?r._navigator.userAgent:"",g=d.match(/OPR\/(\d+)/g),y=g&&parseInt(g[0].split("/")[1],10)<33,v=d.indexOf("Safari")!==-1&&d.indexOf("Chrome")===-1,T=d.match(/Version\/(.*?) /),F=v&&T&&parseInt(T[1],10)<15;return r._codecs={mp3:!!(!y&&(u||i.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!u,opus:!!i.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(i.canPlayType('audio/wav; codecs="1"')||i.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!i.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!i.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(i.canPlayType("audio/x-m4a;")||i.canPlayType("audio/m4a;")||i.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(i.canPlayType("audio/x-m4b;")||i.canPlayType("audio/m4b;")||i.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(i.canPlayType("audio/x-mp4;")||i.canPlayType("audio/mp4;")||i.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!F&&i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!F&&i.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!i.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(i.canPlayType("audio/x-flac;")||i.canPlayType("audio/flac;")).replace(/^no$/,"")},r},_unlockAudio:function(){var r=this||n;if(!(r._audioUnlocked||!r.ctx)){r._audioUnlocked=!1,r.autoUnlock=!1,!r._mobileUnloaded&&r.ctx.sampleRate!==44100&&(r._mobileUnloaded=!0,r.unload()),r._scratchBuffer=r.ctx.createBuffer(1,1,22050);var i=function(u){for(;r._html5AudioPool.length<r.html5PoolSize;)try{var d=new Audio;d._unlocked=!0,r._releaseHtml5Audio(d)}catch{r.noAudio=!0;break}for(var g=0;g<r._howls.length;g++)if(!r._howls[g]._webAudio)for(var y=r._howls[g]._getSoundIds(),v=0;v<y.length;v++){var T=r._howls[g]._soundById(y[v]);T&&T._node&&!T._node._unlocked&&(T._node._unlocked=!0,T._node.load())}r._autoResume();var F=r.ctx.createBufferSource();F.buffer=r._scratchBuffer,F.connect(r.ctx.destination),typeof F.start>"u"?F.noteOn(0):F.start(0),typeof r.ctx.resume=="function"&&r.ctx.resume(),F.onended=function(){F.disconnect(0),r._audioUnlocked=!0,document.removeEventListener("touchstart",i,!0),document.removeEventListener("touchend",i,!0),document.removeEventListener("click",i,!0),document.removeEventListener("keydown",i,!0);for(var M=0;M<r._howls.length;M++)r._howls[M]._emit("unlock")}};return document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",i,!0),document.addEventListener("click",i,!0),document.addEventListener("keydown",i,!0),r}},_obtainHtml5Audio:function(){var r=this||n;if(r._html5AudioPool.length)return r._html5AudioPool.pop();var i=new Audio().play();return i&&typeof Promise<"u"&&(i instanceof Promise||typeof i.then=="function")&&i.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(r){var i=this||n;return r._unlocked&&i._html5AudioPool.push(r),i},_autoSuspend:function(){var r=this;if(!(!r.autoSuspend||!r.ctx||typeof r.ctx.suspend>"u"||!n.usingWebAudio)){for(var i=0;i<r._howls.length;i++)if(r._howls[i]._webAudio){for(var u=0;u<r._howls[i]._sounds.length;u++)if(!r._howls[i]._sounds[u]._paused)return r}return r._suspendTimer&&clearTimeout(r._suspendTimer),r._suspendTimer=setTimeout(function(){if(r.autoSuspend){r._suspendTimer=null,r.state="suspending";var d=function(){r.state="suspended",r._resumeAfterSuspend&&(delete r._resumeAfterSuspend,r._autoResume())};r.ctx.suspend().then(d,d)}},3e4),r}},_autoResume:function(){var r=this;if(!(!r.ctx||typeof r.ctx.resume>"u"||!n.usingWebAudio))return r.state==="running"&&r.ctx.state!=="interrupted"&&r._suspendTimer?(clearTimeout(r._suspendTimer),r._suspendTimer=null):r.state==="suspended"||r.state==="running"&&r.ctx.state==="interrupted"?(r.ctx.resume().then(function(){r.state="running";for(var i=0;i<r._howls.length;i++)r._howls[i]._emit("resume")}),r._suspendTimer&&(clearTimeout(r._suspendTimer),r._suspendTimer=null)):r.state==="suspending"&&(r._resumeAfterSuspend=!0),r}};var n=new t,s=function(r){var i=this;if(!r.src||r.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}i.init(r)};s.prototype={init:function(r){var i=this;return n.ctx||p(),i._autoplay=r.autoplay||!1,i._format=typeof r.format!="string"?r.format:[r.format],i._html5=r.html5||!1,i._muted=r.mute||!1,i._loop=r.loop||!1,i._pool=r.pool||5,i._preload=typeof r.preload=="boolean"||r.preload==="metadata"?r.preload:!0,i._rate=r.rate||1,i._sprite=r.sprite||{},i._src=typeof r.src!="string"?r.src:[r.src],i._volume=r.volume!==void 0?r.volume:1,i._xhr={method:r.xhr&&r.xhr.method?r.xhr.method:"GET",headers:r.xhr&&r.xhr.headers?r.xhr.headers:null,withCredentials:r.xhr&&r.xhr.withCredentials?r.xhr.withCredentials:!1},i._duration=0,i._state="unloaded",i._sounds=[],i._endTimers={},i._queue=[],i._playLock=!1,i._onend=r.onend?[{fn:r.onend}]:[],i._onfade=r.onfade?[{fn:r.onfade}]:[],i._onload=r.onload?[{fn:r.onload}]:[],i._onloaderror=r.onloaderror?[{fn:r.onloaderror}]:[],i._onplayerror=r.onplayerror?[{fn:r.onplayerror}]:[],i._onpause=r.onpause?[{fn:r.onpause}]:[],i._onplay=r.onplay?[{fn:r.onplay}]:[],i._onstop=r.onstop?[{fn:r.onstop}]:[],i._onmute=r.onmute?[{fn:r.onmute}]:[],i._onvolume=r.onvolume?[{fn:r.onvolume}]:[],i._onrate=r.onrate?[{fn:r.onrate}]:[],i._onseek=r.onseek?[{fn:r.onseek}]:[],i._onunlock=r.onunlock?[{fn:r.onunlock}]:[],i._onresume=[],i._webAudio=n.usingWebAudio&&!i._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(i),i._autoplay&&i._queue.push({event:"play",action:function(){i.play()}}),i._preload&&i._preload!=="none"&&i.load(),i},load:function(){var r=this,i=null;if(n.noAudio){r._emit("loaderror",null,"No audio support.");return}typeof r._src=="string"&&(r._src=[r._src]);for(var u=0;u<r._src.length;u++){var d,g;if(r._format&&r._format[u])d=r._format[u];else{if(g=r._src[u],typeof g!="string"){r._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}d=/^data:audio\/([^;,]+);/i.exec(g),d||(d=/\.([^.]+)$/.exec(g.split("?",1)[0])),d&&(d=d[1].toLowerCase())}if(d||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),d&&n.codecs(d)){i=r._src[u];break}}if(!i){r._emit("loaderror",null,"No codec support for selected audio sources.");return}return r._src=i,r._state="loading",window.location.protocol==="https:"&&i.slice(0,5)==="http:"&&(r._html5=!0,r._webAudio=!1),new o(r),r._webAudio&&a(r),r},play:function(r,i){var u=this,d=null;if(typeof r=="number")d=r,r=null;else{if(typeof r=="string"&&u._state==="loaded"&&!u._sprite[r])return null;if(typeof r>"u"&&(r="__default",!u._playLock)){for(var g=0,y=0;y<u._sounds.length;y++)u._sounds[y]._paused&&!u._sounds[y]._ended&&(g++,d=u._sounds[y]._id);g===1?r=null:d=null}}var v=d?u._soundById(d):u._inactiveSound();if(!v)return null;if(d&&!r&&(r=v._sprite||"__default"),u._state!=="loaded"){v._sprite=r,v._ended=!1;var T=v._id;return u._queue.push({event:"play",action:function(){u.play(T)}}),T}if(d&&!v._paused)return i||u._loadQueue("play"),v._id;u._webAudio&&n._autoResume();var F=Math.max(0,v._seek>0?v._seek:u._sprite[r][0]/1e3),M=Math.max(0,(u._sprite[r][0]+u._sprite[r][1])/1e3-F),W=M*1e3/Math.abs(v._rate),ne=u._sprite[r][0]/1e3,ue=(u._sprite[r][0]+u._sprite[r][1])/1e3;v._sprite=r,v._ended=!1;var ce=function(){v._paused=!1,v._seek=F,v._start=ne,v._stop=ue,v._loop=!!(v._loop||u._sprite[r][2])};if(F>=ue){u._ended(v);return}var B=v._node;if(u._webAudio){var q=function(){u._playLock=!1,ce(),u._refreshBuffer(v);var G=v._muted||u._muted?0:v._volume;B.gain.setValueAtTime(G,n.ctx.currentTime),v._playStart=n.ctx.currentTime,typeof B.bufferSource.start>"u"?v._loop?B.bufferSource.noteGrainOn(0,F,86400):B.bufferSource.noteGrainOn(0,F,M):v._loop?B.bufferSource.start(0,F,86400):B.bufferSource.start(0,F,M),W!==1/0&&(u._endTimers[v._id]=setTimeout(u._ended.bind(u,v),W)),i||setTimeout(function(){u._emit("play",v._id),u._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?q():(u._playLock=!0,u.once("resume",q),u._clearTimer(v._id))}else{var L=function(){B.currentTime=F,B.muted=v._muted||u._muted||n._muted||B.muted,B.volume=v._volume*n.volume(),B.playbackRate=v._rate;try{var G=B.play();if(G&&typeof Promise<"u"&&(G instanceof Promise||typeof G.then=="function")?(u._playLock=!0,ce(),G.then(function(){u._playLock=!1,B._unlocked=!0,i?u._loadQueue():u._emit("play",v._id)}).catch(function(){u._playLock=!1,u._emit("playerror",v._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),v._ended=!0,v._paused=!0})):i||(u._playLock=!1,ce(),u._emit("play",v._id)),B.playbackRate=v._rate,B.paused){u._emit("playerror",v._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}r!=="__default"||v._loop?u._endTimers[v._id]=setTimeout(u._ended.bind(u,v),W):(u._endTimers[v._id]=function(){u._ended(v),B.removeEventListener("ended",u._endTimers[v._id],!1)},B.addEventListener("ended",u._endTimers[v._id],!1))}catch(_e){u._emit("playerror",v._id,_e)}};B.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(B.src=u._src,B.load());var I=window&&window.ejecta||!B.readyState&&n._navigator.isCocoonJS;if(B.readyState>=3||I)L();else{u._playLock=!0,u._state="loading";var N=function(){u._state="loaded",L(),B.removeEventListener(n._canPlayEvent,N,!1)};B.addEventListener(n._canPlayEvent,N,!1),u._clearTimer(v._id)}}return v._id},pause:function(r){var i=this;if(i._state!=="loaded"||i._playLock)return i._queue.push({event:"pause",action:function(){i.pause(r)}}),i;for(var u=i._getSoundIds(r),d=0;d<u.length;d++){i._clearTimer(u[d]);var g=i._soundById(u[d]);if(g&&!g._paused&&(g._seek=i.seek(u[d]),g._rateSeek=0,g._paused=!0,i._stopFade(u[d]),g._node))if(i._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),i._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||i._emit("pause",g?g._id:null)}return i},stop:function(r,i){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"stop",action:function(){u.stop(r)}}),u;for(var d=u._getSoundIds(r),g=0;g<d.length;g++){u._clearTimer(d[g]);var y=u._soundById(d[g]);y&&(y._seek=y._start||0,y._rateSeek=0,y._paused=!0,y._ended=!0,u._stopFade(d[g]),y._node&&(u._webAudio?y._node.bufferSource&&(typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),u._cleanBuffer(y._node)):(!isNaN(y._node.duration)||y._node.duration===1/0)&&(y._node.currentTime=y._start||0,y._node.pause(),y._node.duration===1/0&&u._clearSound(y._node))),i||u._emit("stop",y._id))}return u},mute:function(r,i){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"mute",action:function(){u.mute(r,i)}}),u;if(typeof i>"u")if(typeof r=="boolean")u._muted=r;else return u._muted;for(var d=u._getSoundIds(i),g=0;g<d.length;g++){var y=u._soundById(d[g]);y&&(y._muted=r,y._interval&&u._stopFade(y._id),u._webAudio&&y._node?y._node.gain.setValueAtTime(r?0:y._volume,n.ctx.currentTime):y._node&&(y._node.muted=n._muted?!0:r),u._emit("mute",y._id))}return u},volume:function(){var r=this,i=arguments,u,d;if(i.length===0)return r._volume;if(i.length===1||i.length===2&&typeof i[1]>"u"){var g=r._getSoundIds(),y=g.indexOf(i[0]);y>=0?d=parseInt(i[0],10):u=parseFloat(i[0])}else i.length>=2&&(u=parseFloat(i[0]),d=parseInt(i[1],10));var v;if(typeof u<"u"&&u>=0&&u<=1){if(r._state!=="loaded"||r._playLock)return r._queue.push({event:"volume",action:function(){r.volume.apply(r,i)}}),r;typeof d>"u"&&(r._volume=u),d=r._getSoundIds(d);for(var T=0;T<d.length;T++)v=r._soundById(d[T]),v&&(v._volume=u,i[2]||r._stopFade(d[T]),r._webAudio&&v._node&&!v._muted?v._node.gain.setValueAtTime(u,n.ctx.currentTime):v._node&&!v._muted&&(v._node.volume=u*n.volume()),r._emit("volume",v._id))}else return v=d?r._soundById(d):r._sounds[0],v?v._volume:0;return r},fade:function(r,i,u,d){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(r,i,u,d)}}),g;r=Math.min(Math.max(0,parseFloat(r)),1),i=Math.min(Math.max(0,parseFloat(i)),1),u=parseFloat(u),g.volume(r,d);for(var y=g._getSoundIds(d),v=0;v<y.length;v++){var T=g._soundById(y[v]);if(T){if(d||g._stopFade(y[v]),g._webAudio&&!T._muted){var F=n.ctx.currentTime,M=F+u/1e3;T._volume=r,T._node.gain.setValueAtTime(r,F),T._node.gain.linearRampToValueAtTime(i,M)}g._startFadeInterval(T,r,i,u,y[v],typeof d>"u")}}return g},_startFadeInterval:function(r,i,u,d,g,y){var v=this,T=i,F=u-i,M=Math.abs(F/.01),W=Math.max(4,M>0?d/M:d),ne=Date.now();r._fadeTo=u,r._interval=setInterval(function(){var ue=(Date.now()-ne)/d;ne=Date.now(),T+=F*ue,T=Math.round(T*100)/100,F<0?T=Math.max(u,T):T=Math.min(u,T),v._webAudio?r._volume=T:v.volume(T,r._id,!0),y&&(v._volume=T),(u<i&&T<=u||u>i&&T>=u)&&(clearInterval(r._interval),r._interval=null,r._fadeTo=null,v.volume(u,r._id),v._emit("fade",r._id))},W)},_stopFade:function(r){var i=this,u=i._soundById(r);return u&&u._interval&&(i._webAudio&&u._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(u._interval),u._interval=null,i.volume(u._fadeTo,r),u._fadeTo=null,i._emit("fade",r)),i},loop:function(){var r=this,i=arguments,u,d,g;if(i.length===0)return r._loop;if(i.length===1)if(typeof i[0]=="boolean")u=i[0],r._loop=u;else return g=r._soundById(parseInt(i[0],10)),g?g._loop:!1;else i.length===2&&(u=i[0],d=parseInt(i[1],10));for(var y=r._getSoundIds(d),v=0;v<y.length;v++)g=r._soundById(y[v]),g&&(g._loop=u,r._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=u,u&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,r.playing(y[v])&&(r.pause(y[v],!0),r.play(y[v],!0)))));return r},rate:function(){var r=this,i=arguments,u,d;if(i.length===0)d=r._sounds[0]._id;else if(i.length===1){var g=r._getSoundIds(),y=g.indexOf(i[0]);y>=0?d=parseInt(i[0],10):u=parseFloat(i[0])}else i.length===2&&(u=parseFloat(i[0]),d=parseInt(i[1],10));var v;if(typeof u=="number"){if(r._state!=="loaded"||r._playLock)return r._queue.push({event:"rate",action:function(){r.rate.apply(r,i)}}),r;typeof d>"u"&&(r._rate=u),d=r._getSoundIds(d);for(var T=0;T<d.length;T++)if(v=r._soundById(d[T]),v){r.playing(d[T])&&(v._rateSeek=r.seek(d[T]),v._playStart=r._webAudio?n.ctx.currentTime:v._playStart),v._rate=u,r._webAudio&&v._node&&v._node.bufferSource?v._node.bufferSource.playbackRate.setValueAtTime(u,n.ctx.currentTime):v._node&&(v._node.playbackRate=u);var F=r.seek(d[T]),M=(r._sprite[v._sprite][0]+r._sprite[v._sprite][1])/1e3-F,W=M*1e3/Math.abs(v._rate);(r._endTimers[d[T]]||!v._paused)&&(r._clearTimer(d[T]),r._endTimers[d[T]]=setTimeout(r._ended.bind(r,v),W)),r._emit("rate",v._id)}}else return v=r._soundById(d),v?v._rate:r._rate;return r},seek:function(){var r=this,i=arguments,u,d;if(i.length===0)r._sounds.length&&(d=r._sounds[0]._id);else if(i.length===1){var g=r._getSoundIds(),y=g.indexOf(i[0]);y>=0?d=parseInt(i[0],10):r._sounds.length&&(d=r._sounds[0]._id,u=parseFloat(i[0]))}else i.length===2&&(u=parseFloat(i[0]),d=parseInt(i[1],10));if(typeof d>"u")return 0;if(typeof u=="number"&&(r._state!=="loaded"||r._playLock))return r._queue.push({event:"seek",action:function(){r.seek.apply(r,i)}}),r;var v=r._soundById(d);if(v)if(typeof u=="number"&&u>=0){var T=r.playing(d);T&&r.pause(d,!0),v._seek=u,v._ended=!1,r._clearTimer(d),!r._webAudio&&v._node&&!isNaN(v._node.duration)&&(v._node.currentTime=u);var F=function(){T&&r.play(d,!0),r._emit("seek",d)};if(T&&!r._webAudio){var M=function(){r._playLock?setTimeout(M,0):F()};setTimeout(M,0)}else F()}else if(r._webAudio){var W=r.playing(d)?n.ctx.currentTime-v._playStart:0,ne=v._rateSeek?v._rateSeek-v._seek:0;return v._seek+(ne+W*Math.abs(v._rate))}else return v._node.currentTime;return r},playing:function(r){var i=this;if(typeof r=="number"){var u=i._soundById(r);return u?!u._paused:!1}for(var d=0;d<i._sounds.length;d++)if(!i._sounds[d]._paused)return!0;return!1},duration:function(r){var i=this,u=i._duration,d=i._soundById(r);return d&&(u=i._sprite[d._sprite][1]/1e3),u},state:function(){return this._state},unload:function(){for(var r=this,i=r._sounds,u=0;u<i.length;u++)i[u]._paused||r.stop(i[u]._id),r._webAudio||(r._clearSound(i[u]._node),i[u]._node.removeEventListener("error",i[u]._errorFn,!1),i[u]._node.removeEventListener(n._canPlayEvent,i[u]._loadFn,!1),i[u]._node.removeEventListener("ended",i[u]._endFn,!1),n._releaseHtml5Audio(i[u]._node)),delete i[u]._node,r._clearTimer(i[u]._id);var d=n._howls.indexOf(r);d>=0&&n._howls.splice(d,1);var g=!0;for(u=0;u<n._howls.length;u++)if(n._howls[u]._src===r._src||r._src.indexOf(n._howls[u]._src)>=0){g=!1;break}return l&&g&&delete l[r._src],n.noAudio=!1,r._state="unloaded",r._sounds=[],r=null,null},on:function(r,i,u,d){var g=this,y=g["_on"+r];return typeof i=="function"&&y.push(d?{id:u,fn:i,once:d}:{id:u,fn:i}),g},off:function(r,i,u){var d=this,g=d["_on"+r],y=0;if(typeof i=="number"&&(u=i,i=null),i||u)for(y=0;y<g.length;y++){var v=u===g[y].id;if(i===g[y].fn&&v||!i&&v){g.splice(y,1);break}}else if(r)d["_on"+r]=[];else{var T=Object.keys(d);for(y=0;y<T.length;y++)T[y].indexOf("_on")===0&&Array.isArray(d[T[y]])&&(d[T[y]]=[])}return d},once:function(r,i,u){var d=this;return d.on(r,i,u,1),d},_emit:function(r,i,u){for(var d=this,g=d["_on"+r],y=g.length-1;y>=0;y--)(!g[y].id||g[y].id===i||r==="load")&&(setTimeout((function(v){v.call(this,i,u)}).bind(d,g[y].fn),0),g[y].once&&d.off(r,g[y].fn,g[y].id));return d._loadQueue(r),d},_loadQueue:function(r){var i=this;if(i._queue.length>0){var u=i._queue[0];u.event===r&&(i._queue.shift(),i._loadQueue()),r||u.action()}return i},_ended:function(r){var i=this,u=r._sprite;if(!i._webAudio&&r._node&&!r._node.paused&&!r._node.ended&&r._node.currentTime<r._stop)return setTimeout(i._ended.bind(i,r),100),i;var d=!!(r._loop||i._sprite[u][2]);if(i._emit("end",r._id),!i._webAudio&&d&&i.stop(r._id,!0).play(r._id),i._webAudio&&d){i._emit("play",r._id),r._seek=r._start||0,r._rateSeek=0,r._playStart=n.ctx.currentTime;var g=(r._stop-r._start)*1e3/Math.abs(r._rate);i._endTimers[r._id]=setTimeout(i._ended.bind(i,r),g)}return i._webAudio&&!d&&(r._paused=!0,r._ended=!0,r._seek=r._start||0,r._rateSeek=0,i._clearTimer(r._id),i._cleanBuffer(r._node),n._autoSuspend()),!i._webAudio&&!d&&i.stop(r._id,!0),i},_clearTimer:function(r){var i=this;if(i._endTimers[r]){if(typeof i._endTimers[r]!="function")clearTimeout(i._endTimers[r]);else{var u=i._soundById(r);u&&u._node&&u._node.removeEventListener("ended",i._endTimers[r],!1)}delete i._endTimers[r]}return i},_soundById:function(r){for(var i=this,u=0;u<i._sounds.length;u++)if(r===i._sounds[u]._id)return i._sounds[u];return null},_inactiveSound:function(){var r=this;r._drain();for(var i=0;i<r._sounds.length;i++)if(r._sounds[i]._ended)return r._sounds[i].reset();return new o(r)},_drain:function(){var r=this,i=r._pool,u=0,d=0;if(!(r._sounds.length<i)){for(d=0;d<r._sounds.length;d++)r._sounds[d]._ended&&u++;for(d=r._sounds.length-1;d>=0;d--){if(u<=i)return;r._sounds[d]._ended&&(r._webAudio&&r._sounds[d]._node&&r._sounds[d]._node.disconnect(0),r._sounds.splice(d,1),u--)}}},_getSoundIds:function(r){var i=this;if(typeof r>"u"){for(var u=[],d=0;d<i._sounds.length;d++)u.push(i._sounds[d]._id);return u}else return[r]},_refreshBuffer:function(r){var i=this;return r._node.bufferSource=n.ctx.createBufferSource(),r._node.bufferSource.buffer=l[i._src],r._panner?r._node.bufferSource.connect(r._panner):r._node.bufferSource.connect(r._node),r._node.bufferSource.loop=r._loop,r._loop&&(r._node.bufferSource.loopStart=r._start||0,r._node.bufferSource.loopEnd=r._stop||0),r._node.bufferSource.playbackRate.setValueAtTime(r._rate,n.ctx.currentTime),i},_cleanBuffer:function(r){var i=this,u=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!r.bufferSource)return i;if(n._scratchBuffer&&r.bufferSource&&(r.bufferSource.onended=null,r.bufferSource.disconnect(0),u))try{r.bufferSource.buffer=n._scratchBuffer}catch{}return r.bufferSource=null,i},_clearSound:function(r){var i=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);i||(r.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var o=function(r){this._parent=r,this.init()};o.prototype={init:function(){var r=this,i=r._parent;return r._muted=i._muted,r._loop=i._loop,r._volume=i._volume,r._rate=i._rate,r._seek=0,r._paused=!0,r._ended=!0,r._sprite="__default",r._id=++n._counter,i._sounds.push(r),r.create(),r},create:function(){var r=this,i=r._parent,u=n._muted||r._muted||r._parent._muted?0:r._volume;return i._webAudio?(r._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),r._node.gain.setValueAtTime(u,n.ctx.currentTime),r._node.paused=!0,r._node.connect(n.masterGain)):n.noAudio||(r._node=n._obtainHtml5Audio(),r._errorFn=r._errorListener.bind(r),r._node.addEventListener("error",r._errorFn,!1),r._loadFn=r._loadListener.bind(r),r._node.addEventListener(n._canPlayEvent,r._loadFn,!1),r._endFn=r._endListener.bind(r),r._node.addEventListener("ended",r._endFn,!1),r._node.src=i._src,r._node.preload=i._preload===!0?"auto":i._preload,r._node.volume=u*n.volume(),r._node.load()),r},reset:function(){var r=this,i=r._parent;return r._muted=i._muted,r._loop=i._loop,r._volume=i._volume,r._rate=i._rate,r._seek=0,r._rateSeek=0,r._paused=!0,r._ended=!0,r._sprite="__default",r._id=++n._counter,r},_errorListener:function(){var r=this;r._parent._emit("loaderror",r._id,r._node.error?r._node.error.code:0),r._node.removeEventListener("error",r._errorFn,!1)},_loadListener:function(){var r=this,i=r._parent;i._duration=Math.ceil(r._node.duration*10)/10,Object.keys(i._sprite).length===0&&(i._sprite={__default:[0,i._duration*1e3]}),i._state!=="loaded"&&(i._state="loaded",i._emit("load"),i._loadQueue()),r._node.removeEventListener(n._canPlayEvent,r._loadFn,!1)},_endListener:function(){var r=this,i=r._parent;i._duration===1/0&&(i._duration=Math.ceil(r._node.duration*10)/10,i._sprite.__default[1]===1/0&&(i._sprite.__default[1]=i._duration*1e3),i._ended(r)),r._node.removeEventListener("ended",r._endFn,!1)}};var l={},a=function(r){var i=r._src;if(l[i]){r._duration=l[i].duration,_(r);return}if(/^data:[^;]+;base64,/.test(i)){for(var u=atob(i.split(",")[1]),d=new Uint8Array(u.length),g=0;g<u.length;++g)d[g]=u.charCodeAt(g);c(d.buffer,r)}else{var y=new XMLHttpRequest;y.open(r._xhr.method,i,!0),y.withCredentials=r._xhr.withCredentials,y.responseType="arraybuffer",r._xhr.headers&&Object.keys(r._xhr.headers).forEach(function(v){y.setRequestHeader(v,r._xhr.headers[v])}),y.onload=function(){var v=(y.status+"")[0];if(v!=="0"&&v!=="2"&&v!=="3"){r._emit("loaderror",null,"Failed loading audio file with status: "+y.status+".");return}c(y.response,r)},y.onerror=function(){r._webAudio&&(r._html5=!0,r._webAudio=!1,r._sounds=[],delete l[i],r.load())},f(y)}},f=function(r){try{r.send()}catch{r.onerror()}},c=function(r,i){var u=function(){i._emit("loaderror",null,"Decoding audio data failed.")},d=function(g){g&&i._sounds.length>0?(l[i._src]=g,_(i,g)):u()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(r).then(d).catch(u):n.ctx.decodeAudioData(r,d,u)},_=function(r,i){i&&!r._duration&&(r._duration=i.duration),Object.keys(r._sprite).length===0&&(r._sprite={__default:[0,r._duration*1e3]}),r._state!=="loaded"&&(r._state="loaded",r._emit("load"),r._loadQueue())},p=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var r=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),i=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),u=i?parseInt(i[1],10):null;if(r&&u&&u<9){var d=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!d&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=s,typeof Wt<"u"?(Wt.HowlerGlobal=t,Wt.Howler=n,Wt.Howl=s,Wt.Sound=o):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=s,window.Sound=o)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var s=this;if(!s.ctx||!s.ctx.listener)return s;for(var o=s._howls.length-1;o>=0;o--)s._howls[o].stereo(n);return s},HowlerGlobal.prototype.pos=function(n,s,o){var l=this;if(!l.ctx||!l.ctx.listener)return l;if(s=typeof s!="number"?l._pos[1]:s,o=typeof o!="number"?l._pos[2]:o,typeof n=="number")l._pos=[n,s,o],typeof l.ctx.listener.positionX<"u"?(l.ctx.listener.positionX.setTargetAtTime(l._pos[0],Howler.ctx.currentTime,.1),l.ctx.listener.positionY.setTargetAtTime(l._pos[1],Howler.ctx.currentTime,.1),l.ctx.listener.positionZ.setTargetAtTime(l._pos[2],Howler.ctx.currentTime,.1)):l.ctx.listener.setPosition(l._pos[0],l._pos[1],l._pos[2]);else return l._pos;return l},HowlerGlobal.prototype.orientation=function(n,s,o,l,a,f){var c=this;if(!c.ctx||!c.ctx.listener)return c;var _=c._orientation;if(s=typeof s!="number"?_[1]:s,o=typeof o!="number"?_[2]:o,l=typeof l!="number"?_[3]:l,a=typeof a!="number"?_[4]:a,f=typeof f!="number"?_[5]:f,typeof n=="number")c._orientation=[n,s,o,l,a,f],typeof c.ctx.listener.forwardX<"u"?(c.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),c.ctx.listener.forwardY.setTargetAtTime(s,Howler.ctx.currentTime,.1),c.ctx.listener.forwardZ.setTargetAtTime(o,Howler.ctx.currentTime,.1),c.ctx.listener.upX.setTargetAtTime(l,Howler.ctx.currentTime,.1),c.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),c.ctx.listener.upZ.setTargetAtTime(f,Howler.ctx.currentTime,.1)):c.ctx.listener.setOrientation(n,s,o,l,a,f);else return _;return c},Howl.prototype.init=(function(n){return function(s){var o=this;return o._orientation=s.orientation||[1,0,0],o._stereo=s.stereo||null,o._pos=s.pos||null,o._pannerAttr={coneInnerAngle:typeof s.coneInnerAngle<"u"?s.coneInnerAngle:360,coneOuterAngle:typeof s.coneOuterAngle<"u"?s.coneOuterAngle:360,coneOuterGain:typeof s.coneOuterGain<"u"?s.coneOuterGain:0,distanceModel:typeof s.distanceModel<"u"?s.distanceModel:"inverse",maxDistance:typeof s.maxDistance<"u"?s.maxDistance:1e4,panningModel:typeof s.panningModel<"u"?s.panningModel:"HRTF",refDistance:typeof s.refDistance<"u"?s.refDistance:1,rolloffFactor:typeof s.rolloffFactor<"u"?s.rolloffFactor:1},o._onstereo=s.onstereo?[{fn:s.onstereo}]:[],o._onpos=s.onpos?[{fn:s.onpos}]:[],o._onorientation=s.onorientation?[{fn:s.onorientation}]:[],n.call(this,s)}})(Howl.prototype.init),Howl.prototype.stereo=function(n,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"stereo",action:function(){o.stereo(n,s)}}),o;var l=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof s>"u")if(typeof n=="number")o._stereo=n,o._pos=[n,0,0];else return o._stereo;for(var a=o._getSoundIds(s),f=0;f<a.length;f++){var c=o._soundById(a[f]);if(c)if(typeof n=="number")c._stereo=n,c._pos=[n,0,0],c._node&&(c._pannerAttr.panningModel="equalpower",(!c._panner||!c._panner.pan)&&t(c,l),l==="spatial"?typeof c._panner.positionX<"u"?(c._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),c._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),c._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):c._panner.setPosition(n,0,0):c._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),o._emit("stereo",c._id);else return c._stereo}return o},Howl.prototype.pos=function(n,s,o,l){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(n,s,o,l)}}),a;if(s=typeof s!="number"?0:s,o=typeof o!="number"?-.5:o,typeof l>"u")if(typeof n=="number")a._pos=[n,s,o];else return a._pos;for(var f=a._getSoundIds(l),c=0;c<f.length;c++){var _=a._soundById(f[c]);if(_)if(typeof n=="number")_._pos=[n,s,o],_._node&&((!_._panner||_._panner.pan)&&t(_,"spatial"),typeof _._panner.positionX<"u"?(_._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),_._panner.positionY.setValueAtTime(s,Howler.ctx.currentTime),_._panner.positionZ.setValueAtTime(o,Howler.ctx.currentTime)):_._panner.setPosition(n,s,o)),a._emit("pos",_._id);else return _._pos}return a},Howl.prototype.orientation=function(n,s,o,l){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(n,s,o,l)}}),a;if(s=typeof s!="number"?a._orientation[1]:s,o=typeof o!="number"?a._orientation[2]:o,typeof l>"u")if(typeof n=="number")a._orientation=[n,s,o];else return a._orientation;for(var f=a._getSoundIds(l),c=0;c<f.length;c++){var _=a._soundById(f[c]);if(_)if(typeof n=="number")_._orientation=[n,s,o],_._node&&(_._panner||(_._pos||(_._pos=a._pos||[0,0,-.5]),t(_,"spatial")),typeof _._panner.orientationX<"u"?(_._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),_._panner.orientationY.setValueAtTime(s,Howler.ctx.currentTime),_._panner.orientationZ.setValueAtTime(o,Howler.ctx.currentTime)):_._panner.setOrientation(n,s,o)),a._emit("orientation",_._id);else return _._orientation}return a},Howl.prototype.pannerAttr=function(){var n=this,s=arguments,o,l,a;if(!n._webAudio)return n;if(s.length===0)return n._pannerAttr;if(s.length===1)if(typeof s[0]=="object")o=s[0],typeof l>"u"&&(o.pannerAttr||(o.pannerAttr={coneInnerAngle:o.coneInnerAngle,coneOuterAngle:o.coneOuterAngle,coneOuterGain:o.coneOuterGain,distanceModel:o.distanceModel,maxDistance:o.maxDistance,refDistance:o.refDistance,rolloffFactor:o.rolloffFactor,panningModel:o.panningModel}),n._pannerAttr={coneInnerAngle:typeof o.pannerAttr.coneInnerAngle<"u"?o.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof o.pannerAttr.coneOuterAngle<"u"?o.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof o.pannerAttr.coneOuterGain<"u"?o.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof o.pannerAttr.distanceModel<"u"?o.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof o.pannerAttr.maxDistance<"u"?o.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof o.pannerAttr.refDistance<"u"?o.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof o.pannerAttr.rolloffFactor<"u"?o.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof o.pannerAttr.panningModel<"u"?o.pannerAttr.panningModel:n._panningModel});else return a=n._soundById(parseInt(s[0],10)),a?a._pannerAttr:n._pannerAttr;else s.length===2&&(o=s[0],l=parseInt(s[1],10));for(var f=n._getSoundIds(l),c=0;c<f.length;c++)if(a=n._soundById(f[c]),a){var _=a._pannerAttr;_={coneInnerAngle:typeof o.coneInnerAngle<"u"?o.coneInnerAngle:_.coneInnerAngle,coneOuterAngle:typeof o.coneOuterAngle<"u"?o.coneOuterAngle:_.coneOuterAngle,coneOuterGain:typeof o.coneOuterGain<"u"?o.coneOuterGain:_.coneOuterGain,distanceModel:typeof o.distanceModel<"u"?o.distanceModel:_.distanceModel,maxDistance:typeof o.maxDistance<"u"?o.maxDistance:_.maxDistance,refDistance:typeof o.refDistance<"u"?o.refDistance:_.refDistance,rolloffFactor:typeof o.rolloffFactor<"u"?o.rolloffFactor:_.rolloffFactor,panningModel:typeof o.panningModel<"u"?o.panningModel:_.panningModel};var p=a._panner;p||(a._pos||(a._pos=n._pos||[0,0,-.5]),t(a,"spatial"),p=a._panner),p.coneInnerAngle=_.coneInnerAngle,p.coneOuterAngle=_.coneOuterAngle,p.coneOuterGain=_.coneOuterGain,p.distanceModel=_.distanceModel,p.maxDistance=_.maxDistance,p.refDistance=_.refDistance,p.rolloffFactor=_.rolloffFactor,p.panningModel=_.panningModel}return n},Sound.prototype.init=(function(n){return function(){var s=this,o=s._parent;s._orientation=o._orientation,s._stereo=o._stereo,s._pos=o._pos,s._pannerAttr=o._pannerAttr,n.call(this),s._stereo?o.stereo(s._stereo):s._pos&&o.pos(s._pos[0],s._pos[1],s._pos[2],s._id)}})(Sound.prototype.init),Sound.prototype.reset=(function(n){return function(){var s=this,o=s._parent;return s._orientation=o._orientation,s._stereo=o._stereo,s._pos=o._pos,s._pannerAttr=o._pannerAttr,s._stereo?o.stereo(s._stereo):s._pos?o.pos(s._pos[0],s._pos[1],s._pos[2],s._id):s._panner&&(s._panner.disconnect(0),s._panner=void 0,o._refreshBuffer(s)),n.call(this)}})(Sound.prototype.reset);var t=function(n,s){s=s||"spatial",s==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(ar)),ar}var Ea=Ia();const ka=["width","height"],$a=Be({__name:"HeadphonesIcon",props:{size:{default:24}},setup(e){return(t,n)=>(U(),ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-headphones-icon lucide-headphones"},[...n[0]||(n[0]=[le("path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"},null,-1)])],8,ka))}}),Ma=["width","height","viewBox","fill"],Pa=Be({__name:"VolumeIcon",props:{fillColor:{},size:{}},emits:["click"],setup(e){return(t,n)=>(U(),ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size??24,height:t.size??24,viewBox:`0 0 ${t.size??24} ${t.size??24}`,fill:t.fillColor??"none",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-volume2-icon lucide-volume-2"},[...n[0]||(n[0]=[le("path",{fill:"white",d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"},null,-1),le("path",{d:"M16 9a5 5 0 0 1 0 6"},null,-1),le("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"},null,-1)])],8,Ma))}}),Oa=["width","height","viewBox","fill"],Fa=Be({__name:"VolumeMuteIcon",props:{fillColor:{},size:{}},emits:["click"],setup(e){return(t,n)=>(U(),ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size??24,height:t.size??24,viewBox:`0 0 ${t.size??24} ${t.size??24}`,fill:t.fillColor??"white",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-volume-off-icon lucide-volume-off"},[...n[0]||(n[0]=[Bl('<path d="M16 9a5 5 0 0 1 .95 2.293"></path><path d="M19.364 5.636a9 9 0 0 1 1.889 9.96"></path><path d="m2 2 20 20"></path><path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"></path><path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686"></path>',5)])],8,Oa))}}),Ba=["width","height","viewBox","fill"],La=Be({__name:"PauseBtn",props:{fillColor:{},size:{}},emits:["click"],setup(e){return(t,n)=>(U(),ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size??24,height:t.size??24,viewBox:`0 0 ${t.size??24} ${t.size??24}`,fill:t.fillColor??"white",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-pause-icon lucide-pause cursor-pointer",onClick:n[0]||(n[0]=s=>t.$emit("click"))},[...n[1]||(n[1]=[le("rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"},null,-1),le("rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"},null,-1)])],8,Ba))}}),Ha=["width","height","viewBox","fill"],Ra=Be({__name:"PlayBtn",props:{fillColor:{},size:{}},emits:["click"],setup(e){return(t,n)=>(U(),ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size??24,height:t.size??24,viewBox:`0 0 ${t.size??24} ${t.size??24}`,fill:t.fillColor??"white",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-play-icon lucide-play cursor-pointer",onClick:n[0]||(n[0]=s=>t.$emit("click"))},[...n[1]||(n[1]=[le("path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"},null,-1)])],8,Ha))}}),Da={class:"flex h-full flex-row items-center justify-center gap-x-4"},Na={class:"triangle-css"},ja={key:0,class:"absolute ml-5 flex h-full max-w-[100px] flex-col justify-center"},Va=["value"],Ga=Be({__name:"AudioPlayer",props:{src:{}},setup(e,{expose:t}){const n=e,s=me(.05),o=me(!1),l=me(!1);let a=null,f=null;const c=u=>new Ea.Howl({src:[u],loop:!0,volume:s.value,html5:!0}),_=()=>{a&&(a.play(),l.value=!0)},p=()=>{a&&a.pause(),l.value=!1},r=u=>{const d=Number(u.target.value);s.value=d,a&&a.volume(d)},i=(u,d,g=1e3)=>{const v=g/60;let T=0;const F=()=>{T++;const M=T/60;u.volume(s.value*(1-M)),d.volume(s.value*M),T<60?setTimeout(F,v):(u.stop(),u.unload())};F()};return t({play:_,pause:p}),Bt(()=>n.src,(u,d)=>{if(!u)return;const g=c(u),y=l.value;a&&d?(f=a,a=g,y&&(g.volume(0),g.play(),i(f,g,2e3),l.value=!0)):(a=g,y&&_())},{immediate:!0}),Bt(s,u=>{a&&!f&&a.volume(u)}),Kn(()=>{a&&a.unload(),f&&f.unload()}),(u,d)=>(U(),ie("div",Da,[le("div",Na,[l.value?(U(),He(La,{key:1,onClick:p})):(U(),He(Ra,{key:0,onClick:_}))]),le("div",{class:"flex h-full flex-row items-center",onMouseover:d[0]||(d[0]=g=>o.value=!0),onMouseleave:d[1]||(d[1]=g=>o.value=!1)},[s.value>0?(U(),He(dt(Pa),{key:0})):(U(),He(dt(Fa),{key:1})),ae(bn,{name:"volume"},{default:ut(()=>[o.value?(U(),ie("div",ja,[le("input",{type:"range",min:"0",max:"1",step:"0.01",value:s.value,onInput:r},null,40,Va)])):xt("",!0)]),_:1})],32)]))}}),Rt=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Wa=Rt(Ga,[["__scopeId","data-v-1ec573ba"]]),Ka={class:"animated-button-container"},Ua=.05,qa=300,Ya=Be({__name:"Button",props:{shrink:{type:Boolean,default:!1},inverted:{type:Boolean}},emits:["click"],setup(e){const t=me(),n=me("translate(0px, 0px)");let s=0,o=0,l=null;function a(){if(!t.value){n.value="translate(0px, 0px)";return}const c=t.value.getBoundingClientRect(),_=c.left+c.width/2,p=c.top+c.height/2,r=s-_,i=o-p,u=Math.sqrt(r*r+i*i),d=Ua/(1+Math.pow(u/qa,2)),g=r*d,y=i*d;n.value=`translate(${g.toFixed(2)}px, ${y.toFixed(2)}px)`}function f(c){s=c.clientX,o=c.clientY,l===null&&(l=requestAnimationFrame(()=>{a(),l=null}))}return Wn(()=>{window.addEventListener("mousemove",f,{passive:!0})}),Kn(()=>{window.removeEventListener("mousemove",f),l!==null&&cancelAnimationFrame(l)}),(c,_)=>(U(),ie("div",Ka,[le("button",{ref_key:"buttonRef",ref:t,class:et([{shrink:c.shrink,"border-white text-white!":c.inverted},"animated-button rounded-2xl border-2 border-solid border-[#1a1612] px-8 py-4 text-2xl font-medium"]),style:Ht({transform:n.value}),onClick:_[0]||(_[0]=p=>c.$emit("click"))},[Qi(c.$slots,"default",{},()=>[_[1]||(_[1]=Pn("Начать",-1))])],6)]))}}),xs=Rt(Ya,[["__scopeId","data-v-b2e0575f"]]),Xa=""+new URL("../btn_arrow.png",import.meta.url).href,za=["id"],Ja=Be({__name:"ChooseBtn",props:{id:{}},emits:["click"],setup(e){return(t,n)=>(U(),ie("button",{id:t.id,class:"bg-none text-center text-white select-none",onClick:n[0]||(n[0]=s=>t.$emit("click",t.id))},[...n[1]||(n[1]=[le("img",{src:Xa,class:"inline aspect-[2/1] w-25 transition-[scale] hover:scale-110",draggable:"false"},null,-1)])],8,za))}}),mn=["1.1.1 - Сомнения","1.1.2.1 - Память","1.1.2.2.1 - Любовь","1.1.2.2.2 - Обида","1.2.1 - Забвение","1.2.2 - Время","2.2.1 - Боль","2.2.2 - Меланхолия","2.1.1 - Надежда","2.1.2 - Отчаяние"],Wo="ENDINGS";function br(){const e=localStorage.getItem(Wo);if(!e)return[];const t=JSON.parse(e);return[...new Set(t)]}function Za(e){localStorage.setItem(Wo,JSON.stringify(e))}function Qa(e){const t=br();t.push(e),Za(t)}const eu=["checked","disabled"],tu=Be({__name:"Bubble",props:tl({size:{default:void 0},locked:{type:Boolean,default:!1}},{checked:{type:Boolean,default:!1},checkedModifiers:{}}),emits:["update:checked"],setup(e){const t=xl(e,"checked");return(n,s)=>(U(),ie("label",null,[le("input",{value:"on",name:"dummy",type:"checkbox",class:et(["bubble",n.size]),checked:t.value,disabled:n.locked},null,10,eu)]))}}),Ss=Rt(tu,[["__scopeId","data-v-2c5c2db1"]]),nu={class:"fixed top-12 flex w-full flex-row justify-between px-2"},ru={class:"flex flex-col items-center justify-center gap-y-1"},su={key:0,class:"description cursor-default"},ou={class:"flex flex-col items-center justify-center gap-y-1"},iu={key:0,class:"description cursor-default"},lu=Be({__name:"EndingIndicator",setup(e,{expose:t}){const n=me(br());t({update:()=>n.value=br()}),Bt(n,o=>console.log(o));const s=o=>o.split("-").at(-1)?.trim();return(o,l)=>(U(),ie("div",nu,[le("div",ru,[(U(!0),ie(he,null,En(dt(mn).slice(0,dt(mn).length/2),a=>(U(),ie("div",{key:a,class:"goal flex w-full flex-row items-center justify-start gap-x-2"},[ae(Ss,{class:"bubble-wrapper",checked:n.value.includes(a),locked:"",size:"smaller"},null,8,["checked"]),n.value.includes(a)?(U(),ie("p",su,An(s(a)),1)):xt("",!0)]))),128))]),le("div",ou,[(U(!0),ie(he,null,En(dt(mn).slice(dt(mn).length/2),a=>(U(),ie("div",{key:a,class:"goal flex w-full flex-row items-center justify-end gap-x-2"},[n.value.includes(a)?(U(),ie("p",iu,An(s(a)),1)):xt("",!0),ae(Ss,{class:"bubble-wrapper",checked:n.value.includes(a),locked:"",size:"smaller"},null,8,["checked"])]))),128))])]))}}),au=Rt(lu,[["__scopeId","data-v-edfa884c"]]),uu=["innerHTML"],fu=Be({__name:"PoemCard",props:{content:{},justify:{default:"justify"},meta:{default:void 0}},setup(e){const t=n=>n.split(`
`).join("<br>");return(n,s)=>(U(),ie("div",{class:et(["poem-card flex w-full flex-col gap-2",{disappearing:n.meta?.disappearing}])},[le("p",{class:"h-[20%] rounded-2xl bg-transparent font-semibold",style:Ht({"text-align-last":n.justify}),innerHTML:t(n.content)},null,12,uu)],2))}}),cu=Rt(fu,[["__scopeId","data-v-0bf9880b"]]),pe={"(0)Fate":"./mus/(0)Fate.opus","(1)Voyage":"./mus/(1)Voyage.opus","(1_1)Home":"./mus/(1_1)Home.opus","(1_2)Rachel":"./mus/(1_2)Rachel.opus","(1_3)Amberley":"./mus/(1_3)Amberley.opus","(1_4)Promenade":"./mus/(1_4)Promenade.opus","(1_5)Letters":"./mus/(1_5)Letters.opus","(1_6)When the Love Falls":"./mus/(1_6)When the Love Falls.opus","(1_9)Starry Night":"./mus/(1_9)Starry Night.opus","(1_11)Break":"./mus/(1_11)Break.opus","(1_12)Last Choise":"./mus/(1_12)Last Choise.opus","(1_13)Secret":"./mus/(1_13)Secret.opus","(1_14)Hold Me Please":"./mus/(1_14)Hold Me Please.opus","(1_15)Coward":"./mus/(1_15)Coward.opus","(1_16)Malfaiteur":"./mus/(1_16)Malfaiteur.opus","(1_17)Mistake":"./mus/(1_17)Mistake.opus","(1_18)Fatal Mistake":"./mus/(1_18)Fatal Mistake.opus","(1_19)Empathy":"./mus/(1_19)Empathy.opus","(1_20)Décadence":"./mus/(1_20)Décadence.opus","(1_21)Hopefulness":"./mus/(1_21)Hopefulness.opus"};function C(e){return{text:e[0],justify:"left"}}function E(e){return{text:e[0],justify:"right"}}function Qt(e){return{text:e[0],meta:{disappearing:!0}}}function Le(e){return typeof e=="string"?e:e.text}function Ko(e){return typeof e=="string"?void 0:e.meta}function Ne(e){return typeof e=="string"?void 0:e.justify}const K=(e=void 0,t="center",n={})=>(s,o,l)=>{const a=Le(s),f=Ne(s)??(typeof t=="function"?t(s,o,l):t??"center"),c=Ko(s)??(typeof n=="function"?n(s,o,l):n??void 0);return{text:a,visible:!1,hasButton:o==l.length-1,justify:f,newSong:e,meta:c}},du=[{id:"beginning",next:"neutral-0",text:`Вчера студент, сегодня – безработный доктор,
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
  Их уважение заслужить.`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,id:`neutral-${t}`,justify:"center",next:`neutral-${t+1}`})),pu=[`А тик в ноге никак не хочет
  Замолкнуть к матери святой.
  И что бы я себе не прочил
  Для них я всё ещё чужой.`,`Я брошу всё не ради цели,
  Я брошу всё не для любви, –
  Я прослежу, как Лондон тлеет,
  Я вновь останусь на мели…`,`А мать ведь точно говорила:
  «Живи не пыткой, а мечтой».
  Но вряд ли бы она хвалила
  Моё стремление домой.`,`Я слышу поезд – его рокот,
  Созвучный с чисткою гóрла,
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
  Сегодня я с ней поборюсь… `].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,id:`neutral-${t+wr.length}`,justify:"center",next:t==n.length-1?[{id:"brave-0",label:"Храбрец",song:pe["(1)Voyage"],brigtness:1.2},{id:"fear-0",label:"Страх",song:pe["(1_15)Coward"],brigtness:.8}]:`neutral-${t+wr.length+1}`})),_u=[`…Страх победил. Я снова испугался.
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
  И чувство, будто вот-вот закричу.`].map(K()),hu=[`Сверну с Флит-Стрит, пока ещё не поздно –
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
  А он надеялся спастись, дурной калека.`].map(K()),mu=[..._u,...hu].map((e,t,n)=>({...e,id:`fear-${t}`,next:t==n.length-1?[{id:"fear-ignore-0",label:"Плевать",song:pe["(1_16)Malfaiteur"],brigtness:.6},{id:"fear-help-0",label:"Помочь",song:pe["(1_19)Empathy"],brigtness:1}]:`fear-${t+1}`})),gu=[`Но я плевать хотел. Его проблемы – мусор.
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
  Что скоро королевство отберёт.`].map(K()),vu=["<…>",`Каким ты был человеком, таким и остался.
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
Вдруг где-то на дне есть монета?`].map(K()),yu=[`«Твою ж!…» - я срываюсь на жалобный крик,
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
  Способен ли я убивать?`].map(K()),bu=[...gu,...vu,...yu].map((e,t,n)=>({...e,id:`fear-ignore-${t}`,next:t==n.length-1?[{id:"fear-ignore-keep-0",label:"Оставлю",song:pe["(1_17)Mistake"],brigtness:.4},{id:"fear-ignore-sell-0",label:"Продам",brigtness:.6}]:`fear-ignore-${t+1}`})),wu=[`Оставлю себе.
  Пусть будет негласной защитой,
  С которой смогу ощущать
  Себя я немножко смелее.
  Теперь лишь остатки продать…`].map(K()),Au=["<…>",`Мир – отвратительное место
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
  След алой крови на платке.`].map(K()),Tu=[`Его страшатся – я питаюсь,
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
  Он был пустым. Я так умён!`].map(K(pe["(1_18)Fatal Mistake"])),xu=["И вдруг я подпрыгнул.","Болью пронзило","где-то в спине. Горячо…","Мысль запоздала – блик-провокатор","дал им сигнал",'"бей в плечо".',"Быстрых шагов пелена","рассосалась.","Пуст и карман, и кошель…","Скальпель упал,","поганец блестящий,","я вслед за ним улетел.","Вот так ирония -","место вокруг","больно знакомое. Точно…","Здесь год назад","бездомный сидел,","а я отказался помочь.","Я постарался подняться","и рухнул.","В мокрой земле обречён","Промокнуть, остаться,","уснуть и затухнуть,","Всевышним я был ли прощён?","И в чём виноват","тот злосчастный вокзал?…","Во всём виноват только я.",Qt`И если б мне кто-то`,Qt`тогда подсказал,`,Qt`я б в поезд спешил, как дитя…`].map(K(void 0,(e,t)=>{if(t%3==0)return"left";if(t%3==1)return"center";if(t%3==2)return"right"})),Su=[...wu,...Au,...Tu,...xu].map((e,t,n)=>({...e,id:`fear-ignore-keep-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"2.2.1 - Боль"}]:`fear-ignore-keep-${t+1}`})),Cu=[`Продам поскорей.
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
  Людские души. Ну а в них… Лишь дно.`].map(K()).map((e,t,n)=>({...e,id:`fear-ignore-sell-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"2.2.2 - Меланхолия"}]:`fear-ignore-sell-${t+1}`})),Iu=[`Помочь ему я мог? Не знаю, я не ангел.
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
  И выразил лицом своим отказ.`].map(K()),Eu=[E`«Возьмите. Боль уйдёт на время», —`,`стараясь тише говорить,
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
  Которого не убедить.`,E`«Я вам оставлю всё равно
  Микстуру. Просто попытайтесь.»`,C`«Я просто слабое звено.
  Уйдите и не возвращайтесь!»`].map(K()),ku=[`Вся искренность его желания
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
  Искать работу буду я.`].map(K(pe["(1_20)Décadence"])),$u=["<…>","Полки вновь испещряет","Пыль","А пальто вновь проела","Моль","Разъедает обои","Сырь","На груди лишь одна","Боль.","Я не помню как делать","Вдох","На окне толстым слоем","Смог","И романтик во мне","Сдох","И работу найти не","Смог.","Алкоголем наполнен","Рот","И рассудок мутнеет","Вновь","Календарных не вижу","Дат","Как бы сильно не хмурил","Бровь.","Я в долгах и займах","Утоп","Мне не хочется более","Жить","Из квартиры сколочен","Гроб","Мне приказано в нём","Остыть.","Руки тянутся пойло","Пить","Но я падаю прямо","Вниз","В голове лишь желание","Выть","Но уста издают лишь","Писк."].map(K(void 0,(e,t)=>t>0?t%2==0?"right":"left":"center",{halfWidth:!0})),Mu=["Я тянусь и пытаюсь","	Встать","Но скольжу на бумаге.","	Чёрт…","И на помощь мне надо бы","	Звать","Если б не был я так","	Упёрт.","Вдруг рука ощутила","	Письмо","Средь бумаг и подгнивших","	Газет","Оно выглядит так","	Свежо","И следов распаковки","	Нет.","Я пытаюсь наладить","	Взгляд","Поскорее сломать","	Сургуч","«Лунный пансионат,","	Бат.","Для здоровья клиентов","	Ключ.»","Я пытался понять","	Зачем","И всего лишь одно -","	Кому","Назначается этот","	Плен","Оказалось не мне.","	Сглотнул.","Это было письмо","	Другим","Ведь не могут же звать","	Меня","Поработать у них ","	Благим","Ассистирующим ","	Врача."].map(K(void 0,(e,t)=>t%2==1?"right":"left",{halfWidth:!0})),Pu=[...Iu,...Eu,...ku,...$u,...Mu].map((e,t,n)=>({...e,id:`fear-help-${t}`,next:t==n.length-1?[{id:"fear-help-hope-0",label:"Надежда",song:pe["(1_21)Hopefulness"],brigtness:1.2},{id:"fear-help-despair-0",label:"Отчаяние",brigtness:.5}]:`fear-help-${t+1}`})),Ou=[`Надежды луч пробил окошко, проник в мои глаза,
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
  Нести спасение и лечить ознобы.`,"И надо лишь немного подождать…"].map(K()),Fu=["<…>",`…Свой уголок, свой кабинет, кровать.
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
  ход времени и жизни обратить…`].map(K()),Bu=[...Ou,...Fu].map((e,t,n)=>({...e,id:`fear-help-hope-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"2.1.1 - Надежда"}]:`fear-help-hope-${t+1}`})),Lu=["Отчаяние поглощало,","как прежде, так и сейчас","Должно быть письмо опоздало,","а я лишь сильнее увяз","Проклятое крепкое пойло","тянуло меня за собой","С трудом покачнувшись, я понял,","что выбор сейчас небольшой","А выбор стоит между шнапсом","и сидром, и пивом опять","И в мыслях о сим декадансе","стараюсь письмо разорвать","Не вышло – сминаю, бросаю","и плюхаюсь в кресло скорей","Хватаю бутыль, открываю","и телу заметно теплей","Оставлю в бутылке амбиции,","себя перестану жалеть","Продам саквояж медицинский,","чтоб чаще от пойла хмелеть","А раньше хотел я уехать","в надежде хоть что-то найти","И надо ж, какая потеха!","Себя я не смог превзойти.",Qt`И в Эмберли скоро билеты`,Qt`смогу я приобрести…`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,id:`fear-help-despair-${t}`,justify:t%2==1?"right":"left",meta:Ko(e),next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"2.1.2 - Отчаяние"}]:`fear-help-despair-${t+1}`})),Hu=[`Храбрец? Отнюдь, я смелый лишь с собою,
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
  Вдали увидел Эмберли…`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,newSong:pe["(1_1)Home"],justify:"center"})),Ru=["<…>",`Я помню улицу… Я помню этот дом.
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
  Хоть познакомлюсь с новыми людьми.`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,newSong:pe["(1_2)Rachel"],justify:"center"})),Du=[`Стучусь… И с замиранием сердца жду ответа.
  Сначала тишина, затем шаги. И вот
  Мне открывает дверь… Огня соцветие?
  Я вновь смутился, но наоборот.`,`Передо мной предстала незнакомка,
  Чьи волосы похожи на огонь.
  Их рыжая, как пламя, окаёмка,
  Могла бы растопить заснеженный холм.`,`Я встал прямее и почти промолвил,
  Но утонул в её напористых глазах.
  Они, оттенка грозового неба,
  Будто сковали свою суть на небесах.`,C`«А Вы к кому?» – промолвил голос нежный.`,E`«Я к Вам… Вы Блэк?» – я вопрошал прилежно.`,`И я разрез её зубов увидел белоснежный,
  Протянутый в улыбке безмятежной.`,`Я замолчал. Она молчала,
  Глядела долго, изучала…
  Чтобы в конце толкнуть в плечо
  И разразиться горячо:`,C`«Так это ж ты! Ты что, забылся?
  Мы вместе здесь давно росли…
  А ты чего краснóй покрылся?
  Увидел что-то? Не молчи!»`,`А я молчал. Я был в смятении…
  Неужто правда Рейчел Блэк?
  Она, по скромным ощущениям,
  Не тот же самый человек.`,E`«Привет… Сюрприз! Что ж, неудачно…» –
  я попытался возразить.`,C`«Сюрприз? А выглядишь ты мрачно.
  Неужто Лондон тяготит?»`].map(K()),Nu=[`Она меня читала, будто книгу
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
  Я двинулся туда, где жил мясник.`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,newSong:pe["(1_3)Amberley"],justify:Ne(e)??"center"})),ju=[`В деревне центр свой – не городская площадь,
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
  И понял – это было зря.`,E`«Ну здравствуй, Том, –
  тяну улыбку, –
  я здесь на время. По делам.»`,`И парень с мерзкою мне миной
  Поймал нить лжи в моих словах.`,C`«Ну что ж… Понятно. Ты надолго?»`,E`«Не знаю точно. Ну а что?»`,C`«У нас еды тут нету толком…»`,"И я забыл, куда я шёл.",E`«Как так? А хлеб? А мясо, птица?»`,C`«А ты не в курсе? Во дурак!
  У нас как год гниёт пшеница,
  А у животных… Вроде рак.»`,`Не мягко Эмберли встречает
  Заблудших сыновей своих.
  Одно лишь радует – у Тома
  С рождения мыслей никаких.`,E`«Понятно… Рак. А миссис Бьянка?»`,C`«А что она? Она ж не врач.
  Чужую помощь, грубиянка,
  Шлёт к чёрту. Ей не до подач!»`,`То верно… Наша скотоводка –
  Упёртей дамы не найти.
  И это, как-никак, находка,
  Вдруг я смогу "еду" спасти?`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:Ne(e)??"center"})),Vu=["<…>",C`«Ай, больно надо! Сам-то знаешь
  Как мою Беллочку лечить?»`,E`«Но миссис Бьянка…»`,C`«Прочь! И хватит
  Свои услуги мне лепить.»`,`И дверь захлопнулась. Ну вот…
  Во всяком случае, я пытался.
  Так долго, что весь небосвод
  К оттенку синего склонялся.`,`Вечерний лик моей деревни
  Всегда тоску мне нагонял.
  А флёр романтики осенней
  Все эти чувства укреплял.`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,newSong:pe["(1_4)Promenade"],justify:Ne(e)??"center"})),Gu=[`И вдруг… Толчок! Опять в плечо,
  На этот раз пришёлся сзади…`,C`«Ты чего хмурый, дурачок?
  Ходил до Бьянки? Чего ради?»`,`Я сразу в голосе узнал
  Девчонку с взглядом озорницы.`,E`«Я просто как-то… Заскучал», –
  cлегка приврал в лицо девице.`,C`«Понятно. Ты прости меня,
  За то что я тогда сбежала.
  Но дедушке день ото дня
  Всё хуже. Память пострадала…»`,`Я поглядел в зеницы Рейчел –
  В них всё ещё играл задор,
  Пусть он уже был менее весел,
  Чем когда мы гуляли в бор.`,E`«Не хочешь в гости? Я один
  Сегодня прибирал свой дом.
  Ну а ещё купил еды…» –
  я пошуршал своим мешком.`,C`«Пытаешься завлечь на ужин?»`,"Я взгляд отвёл и покраснел.",E`«Подумал, что захочешь кушать,
  Да и увидеться хотел.»`,`Весь путь до дома прошёл тихо –
  Она глядела на кусты,
  А я глядел на её лико, –
  Бледнее лунной красоты.`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:Ne(e)??"center"})),Wu=[C`«Подумать только… Как же долго
  Я здесь с тобою не была», –
  сказала Рейчел и умолкла.`,E`«А ты здесь что, была одна?»`,`Она же лишь главой качнула
  И поспешила в зал пройти.
  Я вслед прошёл, но полный думы:
  Зачем ей было приходить?`,`Она решила мне помочь,
  Пусть я её и не просил.
  Меня касается рукой –
  И вскоре скромный столы накрыт.`,C`«Ну и зачем ты меня звал?» –
  она глядела мне в глаза.`,"Недолго думая, сказал:",E`«Я по тебе весьма скучал.»`,`С её тончайших нежных губ
  Сорвался маленький смешок.`,C`«Всё также ты на правду скуп…
  Скучал и написать не мог?»`,`Я протянул бокал с вином,
  Которое в шкафу нашёл.`,E`«Я думал только об одном –
  Чтоб твой ответ скорей пришёл.»`,`Её улыбка исказилась,
  А брови резко изумились.`,C`«Ответ? Ты сам не отвечал,
  И сам писать бы мне не стал!»`,`Я в замешательстве опешил.
  О чём она мне говорит?
  Я точно помню, как депешей
  Все письма слал чуть не в кредит!`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:Ne(e)??"center"})),Ku=[E`«Постой… Куда ты их носила?»`,C`«К твои родителям… А там,
  Когда я деньги получила,
  То относила прям в почтамт.»`,`И в миг мне стало дело ясно –
  Сейчас уж некого винить…
  Моя семья, народ потрясный,
  Срезала связи с Рейчел нить.`,E`«Зачем они-… Послушай, Рейчел,
  Я ничего не получал.»`,C`«Но почему?»`,E`«Чтоб не отвлечься,
  Пока я лекции изучал.»`,`В тот миг и ей всё стало ясно.
  У нас в деревне все свои,
  И не доставить письма – грязно,
  Но помешать нам всё ж смогли.`,"Тогда и мы заулыбались.",C`«Я думала, что ты забыл…»`,E`«Да как я мог? А вдруг остались
  Все письма где-то тут вблизи?»`,`Тут поняли друг друга сразу
  И, проглотив своё вино,
  По комнатам мы разбежались,
  Чтобы найти что суждено.`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:Ne(e)??"center"})),Uu=[`Пока Рей шастала в кладовке,
Я вверх по лестнице взбежал.
И лучше мест для маскировки
Я в этом доме и не знал.`,`Их спальня – воздух сильно спёрт,
Я здесь ещё не убирался.
Весь улетучился комфорт –
Лишь холод смерти их остался…`,`Я аккуратно шёл к кровати, –
Будто меня вела рука.
Пусть здесь углы и мрачноваты,
Но тут мой дом. Моя семья…`,E`«Эх, вот вы где…» – я молвил тихо,
Открывший тумбочку отца.`,`В ней толстым слоем были письма,
И половина их – моя.`,E`«Рей, помоги! Их слишком много!» –
    я на весь дом заголосил.`,`И быстрый топот лёгких ножек
Стремительно за мной возник.`,`Но вместо похвалы иль смеха
Она, лишь взглядом потупив,
Пробормотала: «Вот потеха…
Ты правда их не получил.»`,`Я мог гадать, что в её мыслях, –
Винит во всём она меня?
Или родительские смыслы,
Что часто любят усложнять?`,`Она взяла часть писем в руки
И поглядела на меня.`,C`«Возьми вино, будь так услужлив,
Ну а затем держись меня.»`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,newSong:pe["(1_5)Letters"],justify:Ne(e)??"center"})),qu=["<…>",`Затеи Рейчел мне всегда казались чудом.
    Там, где другой не видел толком ничего,
    Она, в своих манерах тонких, чутких,
    Творила чудеса и волшебство.`,`Вот и сейчас вместо простой ограды,
    Она увидела тот самый редкий шанс,
    Что разорвёт меж нами все преграды
    И писем не дошедших декаданс.`,`Мы провели на каменном заборе
    Часа четыре – крайне поздний час.
    И содержимое всех писем вскоре
    Открылось испытанием для нас.`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,justify:"center"})),Yu=[C`«"У нас тут сыро" — ты серьёзно? –
  она старалась сдерживать свой звонкий смех, –
  зачем описывать погоду так детально?
  Тем более, Солнце в Лондоне – есть грех.»`,E`«Я думал, тебе будет это интересно…
  Ты знаешь, там, как наши говорят,
  Нет ничего, что было бы чудесным», —
  я удержал на ней свой робкий взгляд.`,`Она постукала по кирпичам пустой бутылкой,
  Но я сквозь этот звук другой поймал –
  Она тряслась от холода. Вот придурь!
  Совсем забыл, что за окном не май…`,E`«Возьми пальто, – я поспешил накинуть её плечи, –
  мне следовало раньше предложить.»`,C`«Так ты же врач… Возьмёшь, да и залечишь.
  Тебя вообще учили там лечить?…»`,`Я усмехнулся и взглянул на время.
  Как я хотел ещё с ней посидеть…
  Но Рей права – на мне теперь есть бремя, –
  Я не позволю ей здесь заболеть.`,`И в миг, когда она глядела на Луну,
  А отражение я ловил в её глазах,
  Мне диалог наш мысль дал одну…`,E`«Ты ведь с животными в приятельских речах?»`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:Ne(e)??"center"})),Xu=["<…>",`Весь новый день провёл я в предвкушении –
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
    Могла с ним слиться, ей лишь захотеть…`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,newSong:pe["(1_6)When the Love Falls"],justify:"center"})),zu=["<…>",`Стук в дверь – и я, как окрылённый ворон,
  Бегу скорее Рейчел открывать.
  А там она – с моим пальто, и строго
  Пыталась в руки мне его отдать.`,E`«Оставь себе. Я же вчера ответил,
  Что пока денег ты на куртку соберёшь,
  То в этой тонкой кофте скоченеешь
  И в зиму эту ты не проживёшь.»`,`Я видел, как её уста дрожали,
  То ли от холода, то ль от желания возразить,
  Но мои речи её знатно напужали, –
  Пришлось пальто на плечи ей грузить.`,E`«Ты как-то рано, – я взглянул на время, –
  но не беда. Пройдёмся до Луны.»`,C`«Ты так и не сказал, что за дилемма,
  B которой мои навыки нужны…»`,`Я ей в ответ лишь улыбнулся
  И, дверь закрыв, сошёл с крыльца.
  Слегка помялся, развернулся…`,E`«Возьмёшь меня под руку, а?»`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:Ne(e)??"center"})),Ju=[`Она же тихо ухмыльнулась,
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
  И пуще прежнего тепло…`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,justify:"center"})),Zu=[`Я для себя пытался чувства
    Все эти срочно описать.
    Когда в груди творится буйство,
    А телу хочется плясать?`,C`«Гляди-ка, белка! Вот милашка!» –
  воскликнула одна из них.`,`В душе всё та же обаяшка,
  Чей смысл в радостях мирских.`,E`«Ты знаешь, Рей, мне так приятно
  С тобою снова погулять.
  Когда теперь мы не ребята,
  Вольны с тобой весь мир объять…»`,C`«Весь мир… Со мной? Ты так забавен.»`,E`«Я помню детскую мечту,
  Которой ты делилась ранее.»`,C`«Да я всю жизнь здесь проведу…»`,`Я опустил взгляд и заметил
  В её лице отчаянный жест.`,E`«Всё из-за дедушки?»`,C`«Конечно. И мне ведь это надоест…»`,`Я помню всё – она желала
  Весь мир увидеть, покорить,
  И в небесах она мечтала
  Звезду ярчайшую открыть.`].map((e,t,n)=>({text:Le(e),visible:!1,hasButton:t==n.length-1,justify:Ne(e)??"center"})),Qu=[E`«Это не вечно…»`,C`«Знаю, знаю. Не говори мне о смертях…»`,E`«Я ни на что не намекаю,
  Лишь обсуждаем бытия…»`,C`«Я долго думала о ночи.
  Зачем ты снова тут, скажи?»`,"Она меня смутила очень.",E`«Не знаю. Для меня тут жизнь?»`,C`«Скажи мне честно… Ты не доктор,
  И от занятий ты сбежал?»`,E`«Спокойно, Рейчел, что за говор?
  Я так-то профессионал.»`,`Она в ответ лишь улыбнулась
  И взгляд спешила отвести.
  А я, шагая не сутулясь,
  Продолжил в сад её вести.`,`А что за "сад"? Мы так назвали
  Опушку леса возле гор.
  Мы в детстве часто там гуляли
  Родителям наперекор.`,`Пусть мы весь путь почти молчали,
  Мне было страстно хорошо.
  Как в детстве мы с ней не смеялись,
  Но так слова мы сбережём.`].map(K()),ef=[`Земля сменилася травою,
  Когда мы дальше отошли.
  Трава же сменится листвою –
  И вот мы к клёну подошли.`,C`«Он так огромен, как и раньше.»`,E`«Тебе напомнить, как расти?»`,C`«Ты, дылда, помнишь о реванше?»`,E`«Да я шучу, прости-прости…»`,`Она отвесила мне по лбу
  И отпустила мой рукав.
  Взбежала к клёну вверх по холму,
  Остановилась на корнях.`,C`«Секунд двенадцать было, помнишь?»`,E`«Может не надо?»`,C`«Не труси! Иначе этот клён запомнит,
  Как ты боялся. Засеки!»`,`Я томно выдохнул с часами,
  Поймал глазами её взгляд…
  И она резкими рывками
  Перемахнула веток ряд.`,`Мне стоило не волноваться,
  Но я же врач, а она – Рей,
  Всё норовившая сорваться –
  Не сосчитать потом костей.`,C`«Лови меня!»`,E`«Чего?!»`,C`«Я прыгну!»`,`Я только время подсчитал,
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
  Мы к клёну сели впопыхах.`].map(K()),tf=["<…>",C`«Что, если мы когда-то сможем
  Все эти звёзды посетить?»`,E`«Тогда, науку приумножив,
  Придётся знания торопить.»`,`Мы просидели так часами –
  Она, прижавшися к плечу,
  Гуляла по небу глазами:`,C`«Как я узнать там всё хочу…»`,E`«И ты узнаешь. Ты же гений, –
  я гладил нежное плечо, –
  и к звёздам через дебри терний,
  все испытания мы пройдём.»`,C`«Мы?»`,E`«Ну конечно. Вспомни детство –
  Что мне тогда сказала ты?»`,C`«"Мы неразлучные соседи,
  Судьбой общей сплетены."»`,`Тогда она заулыбалась.
  Глаза прикрыв, произнесла:`,C`«Тогда всё так легко казалось,
  И вот я здесь. Чего смогла?»`,E`«Ты – вольной птицы проявление,
  Тебе всего лишь захотеть –
  И даже сложное умение
  Освоить сможешь хоть за день.»`,`Я тут же понял, что ей нужно,
  И в мыслях это закрепил.
  Мы посидели у опушки,
  Теперь пора и в хлев сходить.`].map(K()),nf=["<…>",C`«Ты правда думаешь, что сможешь?»`,E`«Ну я хотя бы посмотрю!»`,C`«Звучит всё как-то, ну, не очень.
  Хотя, кому я говорю…»`,`Мы двигаться старались тише –
  Пусть миссис Бьянка дальше спит.
  К хлеву мы подобрались ближе…`,C`«Один вопрос… А как зайти?»`,`Я знал, что Бьянка будет строгой,
  Но на воротах тут замок!
  Пусть для кого-то и морока,
  Но я в таких вещах знаток.`,E`«Я подсажу тебя в окошко,
  А ты мне руку там подашь.»`,C`«Ты что, сдурел? Нам Бьянка бошки
  Открутит, коль хоть звук издашь.»`,`И мы условились на этом.
  Я Рей поднял и подсадил,
  И вскоре мы своим дуэтом
  Попали внутрь.`,C`«Как детьми…»`,"Я сразу дело заприметил:",E`«Так вот, кто Белла… Поглядим.»`,`Сопротивления не встретив,
  Мы с Рей к корове подошли.`].map(K()),rf=[C`«Она… Большая.»`,E`«Я заметил.»`,C`«Это нормально?»`,E`«Не совсем.
  Всё выглядит как тимпани́я, –
  Не худшая из всех проблем.»`,`Я Рей кивнул – не будем медлить.
  Пока я Беллу обойду,
  Она поможет ту утешить, –
  Я скоро к делу перейду.`,E`«Скорми ей это, успокоит.» –
  я протянул Рей мяты горсть.`,C`«Нас тётя Бьянка точно взмоет…
  Ты не забыл ли её злость?»`,`Я не ответил ей и думал,
  Где же лежит мой троака́р.
  И в этих томных, важных думах,
  Я ворошил свой инвентарь.`,E`«Нашёл. Готовься. Будет больно.»`,C`«Не мне?»`,E`«Конечно не тебе.»`,`И длинной, толстою иглою,
  Пронзил я Беллочке рубец.`].map(K()),sf=[`Мы ждали жалкие минуты,
  Но даже так хватило их,
  Чтобы живот скота надутый
  Стал в разы меньше и утих.`,`И когда мне осталось только
  На рану спирта наложить,
  Замок с ворот упал тихонько…
  Нам больше нечего таить.`,C`«Вы что творите?! Негодяи!»`,E`«Хоть наложите ей бинты!»`,C`«Злодеи! Бесы! Разгильдяи!» –`,"крик Бьянки был аж за версты.",`Мы с Рейчел долго так бежали,
  Пока крик позади не стих.
  За эту ночь мы так устали…
  Но были счастливы в сей миг.`].map(K()),of=[C`«Ты плохо на меня влияешь.»`,E`«Серьёзно? Первый раз ведь ты
  Мои хотелки выполняешь.
  Я яблоки тебе тащил!»`,`Мы средь аллеи становились,
  Пока над нами пела ночь.
  Я только что всерьёз влюбился,
  Мне вздохнуть, не превозмочь…`,E`«Спасибо, Рей. Ты просто чудо.»`,C`«Тебе спасибо. Пусть и так,
  Но миссис Бьянка будет рада.
  Ты ведь для нас и не чужак…»`,`Тут я позволил себе только
  Её украдкою обнять.
  Но был шокирован легонько:`,C`«Давай так чаще мы гулять?»`,E`«Давай.»`,`Она прижалась крепче
  Пальто помятым… Мне плевать.
  Я так был счастлив этой встрече,
  Пусть ничего не мог сказать.`,C`«Тогда до встречи?»`,E`«Да, до встречи.»`,C`«Увидимся ещё раз, да?»`,`Я понимал по-человечьи
  Её желания и слова.`,E`«Мой дом – твой дом.»`,C`«Охотно верю.»`,E`«Теперь прощай… Не навсегда.»`,C`«Я завтра ночью…»`,E`«Рейчел, верю.»`,C`«Ну хорошо. Тогда… Пока?»`,`Мы разминулись, попрощавшись,
  И я пошёл один домой.
  В кровати быстро распластался
  И я заснул, как на убой.`].map(K()),lf=["<…>",`Мне каждый день казался первым,
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
  Чтобы мечту осуществить.`].map(K()),af=["<…>",`И я копил. Я знал, он не дешёвый,
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
  А вдруг её мои стремления напугают?`].map(K()),uf=[...Hu,...Ru,...Du,...Nu,...ju,...Vu,...Gu,...Wu,...Ku,...Uu,...qu,...Yu,...Xu,...zu,...Ju,...Zu,...Qu,...ef,...tf,...nf,...rf,...sf,...of,...lf,...af].map((e,t,n)=>({...e,id:`brave-${t}`,next:t==n.length-1?[{id:"brave-tell-0",label:"Сказать",song:pe["(1_9)Starry Night"],brigtness:1.4},{id:"brave-keep-0",label:"Хранить",song:pe["(1_13)Secret"],brigtness:1}]:`brave-${t+1}`})),ff=[`И пусть. Сказать, как есть – не страшно,
  А страшно будет в зеркало смотреть,
  Коль сам всё это не скажу отважно, –
  Остаток жизни буду я жалеть.`,"<…>",E`«Гляди, – я вынул из кармана
  коробку с лентой, – это вот тебе.»`,C`«Подарок? Как-то это странно.
  Мой день рождения же не в ноябре…»`,E`«Рей, ты…»`,C`«Постой. Серьёзно, что ли?»`,E`«Тебе понравилось?»`,C`«Дурак!
  Ты знаешь, сколько это стоит?»`,E`«Это подарок, как-никак.
  Пусть я не очень-то и смыслю
  Во всех космических вещах, –
  Отделаться не мог от мысли,
  Что в этих странных мелочах
  Ты обретёшь мечты начало.»`,C`«С такою вещью? Мечты мало!»`,`И она принялась крутить,
  Вертеть, глядеть и теребить.`,C`«С такою точной астролябией,
  Подвластны всяки расстояния.»`,E`«С такою точной астро-… Что?»`,C`«Неважно. Это хорошо.»`,`И прежде чем вновь погрузиться
  В мир изученья, Рей смягчилась.`,C`«Ты что-то мне хотел сказать.»`,E`«Теперь не знаю, как сказать…»`,C`«Попробуй прямо.»`,E`«Ты прекрасна,
  Великолепна. И напрасно
  Я думал, будто не смогу.
  Я полюбил. Тебя люблю.»`].map(K()),cf=[`Она же тут же замолчала,
  Металл ногтями ковыряя.
  Её лик мягко исказился…
  И вдруг улыбкою расплылся.`,C`«Ты правда думал, будто я,
  И не замечу ни черта?»`,E`«Так очевидно?»`,C`«Очень, глупый.
  А теперь двинься и послушай…»`,`Послушно сдвинувшись к девице,
  Я на ограде стал к ней ближе.
  И наши красные с ней лица
  Застыли рядом неподвижно.`,`Вдруг – поцелуй. Теплее света,
  По телу дрожью пробежал.
  И если счастье было где-то,
  Его я только что поймал.`,`Мы провели остаток ночи
  Под небосводом и Луной.
  Теперь мы с ней не одиноки,
  Она – мой свет. Я с ней живой.`].map(K()),df=["<…>",`Проходит время. И с зимою
  На Рей свалились боль и горе.
  Пришлось ей деда хоронить,
  А я старался рядом быть.`,`И с каждый днём мне всё казалось,
  Будто она мне "так", "никто"…
  Она мне реже улыбалась,
  А я не знал, как ей помочь.`,`Мне в один день пришло видение –
  А может дело всё во мне?
  И это едкое мышление
  Меня сжигало и во сне.`].map(K()),pf=[...ff,...cf,...df].map((e,t,n)=>({...e,id:`brave-tell-${t}`,next:t==n.length-1?[{id:"brave-tell-doubt-0",label:"Сомневаться",brigtness:.8},{id:"brave-tell-talk-0",label:"Разговор",song:pe["(1_11)Break"],brigtness:1.6}]:`brave-tell-${t+1}`})),_f=[`Сомнения гложут. Мне не победить их.
  Она ко мне остыла, спору нет.
  На дне бутылок коньяков испитых
  Ищу когда-то будораживший мой свет.`,`Когда я понял, что искать там тщетно,
  Мне передал один знакомый мой сосед,
  Что Рей уехала из дома незаметно.
  Теперь её со мною больше нет.`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-tell-doubt-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.1.1 - Сомнения"}]:`brave-tell-doubt-${t+1}`})),hf=[`Нам нужен разговор. Расставить точки нужно –
  В делах романтики я пусть и новичок,
  Но я не дам дурному равнодушью
  Травить святого чувства мой глоток.`,"<…>",E`«Рейчел, постой…»`,C`«Чего тебе вновь нужно?»`,E`«Не будь такой строптивой.»`,C`«Почему?»`,E`«Нам следует поговорить…»`,C`«И правда нужно.»`,E`«Что происходит? Я ведь не пойму.»`,`Мы встретились буквально средь аллеи –
  Она была угрюма и брела.
  На холоде её глаза будто синели
  И становились злобными слегка.`,`Её глаза забегали, забылись,
  Но я в душе всё знал. Сей диалог
  Она вынашивала долго. Страхи сбылись –
  На сердце остаётся лишь ожог.`].map(K()),mf=[C`«Мне кажется, что мы поторопились.»`,E`«Пусть так… И что теперь с того?»`,C`«В моей душе ведь столько накопилось…
  А ты всё молвишь: "Как же ей легко!"»`,E`«Я так не делал.»`,C`«Ну и пусть… Мне больно.
  Я деда потеряла, ну а ты?
  Ты думаешь, что мне хоть чуть помогут
  Красивые, но поздние цветы?»`,E`«И что ты хочешь?»`,C`«Я хочу спокойствия.
  Мне нужно одиночество…»`,E`«Сейчас? Ты будто хочешь показать геройство,
  Забыв про всё, что было бы у нас.»`,C`«Да будет так.» – сказала она строго
  И двинулась к своему дому прочь.`,`Я постоял один ещё немного,
  Стараясь бурный импульс превозмочь.`,`И что теперь? Я думал, будто можно
  Своему чувству приказать молчать.
  Ну а на деле это просто невозможно –
  Хотелось то ли выть, то ли кричать.`].map(K()),gf=[...hf,...mf].map((e,t,n)=>({...e,id:`brave-tell-talk-${t}`,next:t==n.length-1?[{id:"brave-tell-talk-leave-0",label:"Уеду",brigtness:.8},{id:"brave-tell-talk-stay-0",label:"Останусь",song:pe["(1_12)Last Choise"],brigtness:1.6}]:`brave-tell-talk-${t+1}`})),vf=[`Уеду в город. Не смогу я больше
  Любить её, но только воздыхать.
  Всё происходит, будто рок нарочный,
  Где о любви мне светит лишь мечтать.`,`Теперь, когда я заимел здесь опыт,
  Мне будет проще там себя найти.
  И, может, меня примет к себе крупный город, –
  Удержит мои чувства взаперти.`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-tell-talk-leave-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.1.2.1 - Память"}]:`brave-tell-talk-leave-${t+1}`})),yf=[`И пусть мне счастья с Рей не светит –
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
  «Из дома Рейчел кашель громыхал…»`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-tell-talk-stay-${t}`,next:t==n.length-1?[{id:"brave-tell-talk-stay-visit-0",label:"Сходить",brigtness:1.8},{id:"brave-tell-talk-stay-ignore-0",label:"Пройти",brigtness:1.2}]:`brave-tell-talk-stay-${t+1}`})),bf=[`Я взял лекарства, саквояж… И вышел,
  Пока она сама там не слегла.`,`Я постучался, пусть сначала мялся –
  Пересекались реже мы, как никогда.
  И дверь открылась.`,E`«Я тебя заждался.
  Позволь пройти? Твой кашель – не беда.»`,`Она была болезненной, но бодрой –
  Старалась выглядеть отважно, точно ведь.
  Без лишних слов, она от медосмотра
  Решила не отказываться впредь.`].map(K()),wf=[E`«Открой свой рот, – командовал я мягко,
  пока она не слушалась меня, –
  чего сама не шла?»`,`Она молчала.
  Тогда же с ней начал молчать и я.`,`Поношенный веками тёплый свитер,
  Растрёпанные локоны огня.
  Я с её щёк одну слезинку вытер,
  Сбежать хотевшую скорее от меня.`,E`«И что молчишь?» – я вопрошаю робко,
  Пусть понимая, что мне ни к чему
  Общаться с ней, красой розовощёкой,
  Но сердце снова тянет. Не могу…`,`Она молчит. И что-то тихо шепчет,
  Что я пытался тщетно разузнать.
  Тогда же руку мою она схватит крепко,
  А там притянет, чтоб поцеловать.`,`Я ведь дурак – я сразу было понял,
  Что она хочет, чтобы я с ней заболел.
  Но я уже сам как-то и не против…
  На улице скворец засвиристел.`].map(K()),Af=[...bf,...wf].map((e,t,n)=>({...e,id:`brave-tell-talk-stay-visit-${t}`,next:t==n.length-1?[{id:"THE_END",label:"Конец",ending:"1.1.2.2.1 - Любовь"}]:`brave-tell-talk-stay-visit-${t+1}`})),Tf=[`И пусть. Не хочет ведь мириться?
  Тогда и мне ей нечего сказать.`,`Домой зайдя, я инструменты вымыл,
  Лекарства подготовил. Новый день,
  Когда я занят бедами чужими,
  Когда я буду вновь лечить людей.`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-tell-talk-stay-ignore-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.1.2.2.2 - Обида"}]:`brave-tell-talk-stay-ignore-${t+1}`})),xf=[`Хранить. Хранить, не проливая,
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
  А что поделаешь? Зима.`,C`«Нам следует бы попрощаться…»`,"Я обернулся.",E`«Ты куда?»`,`Когда я отпустил соседа,
  Напомнив ему чаще пить,
  Передо мной предстала Рейчел.`,C`«Я еду в город. Еду жить.»`].map(K()),Sf=[`И вот она, стоит пред мною –
  В своём пальто. И хмурый взгляд
  Всё так же красен синевою,
  Пусть горем он теперь объят.`,E`«Тебе не стоит…»`,C`«Может хватит?
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
  На улице всё холодней.`].map(K()),Cf=[...xf,...Sf].map((e,t,n)=>({...e,id:`brave-keep-${t}`,next:t==n.length-1?[{id:"brave-keep-leave-0",label:"Уеду",brigtness:.8},{id:"brave-keep-stay-0",label:"Останусь",song:pe["(1_14)Hold Me Please"],brigtness:1.2}]:`brave-keep-${t+1}`})),If=[`Уеду прочь. Но не за ней, а дальше,
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
  Может хоть там мне счастье суждено?`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-keep-leave-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.2.1 - Забвение"}]:`brave-keep-leave-${t+1}`})),Ef=[`Останусь здесь. Пусть ей ещё, быть может,
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
Пора впитать мне улицы покой.`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,justify:"center"})),kf=[`Я выхожу, мороз вдыхаю кожей –
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
  Что от объятий плавило меня.`,E`«Ты здесь?…»`,C`«Молчи. И дай мне насладиться
  Минутами спокойствия в глуши.»`,E`«Пошли домой? Там проще находиться.»`,C`«Я же сказала – просто помолчи.»`,`Я чувствовал, она заплачет скоро,
  Поэтому в ответ её обнял.`,E`«В шкафу подарок. Всё ещё не хочешь?»`,C`«И это так по мне ты заскучал?»`,`Я усмехнулся и погладил Рейчел.
  Я ничего не понял… Ну и пусть.`,E`«Я проведу с тобой хоть всю вечность,
  Чтоб развести собою твою грусть.»`].map(K()),$f=[...Ef,...kf].map((e,t,n)=>({...e,id:`brave-keep-stay-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.2.2 - Время"}]:`brave-keep-stay-${t+1}`})),Mf=[...du,...wr,...pu,...mu,...bu,...Su,...Bu,...Lu,...Cu,...Pu,...uf,...pf,..._f,...gf,...vf,...yf,...Af,...Tf,...Cf,...If,...$f],Pf=Object.fromEntries(Mf.map(e=>[e.id,e]));function bt(e){return new Promise(t=>setTimeout(t,e))}const Of={class:"fixed top-0 left-0 z-1 h-10 w-full bg-[image:var(--secondary-gradient)]"},Ff={class:"flex flex-col items-center p-2"},Bf={class:"absolute top-[50%] translate-y-[-50%]"},Lf={key:0,class:"absolute top-[50%] flex h-[50vh] w-[50%] -translate-y-1/2 flex-col items-center justify-center"},Hf=["id"],Rf=Be({__name:"App",setup(e){const t=me(void 0),n=me(Pf),s=Tt([]),o=me(),l=me(),a=me(),f=Tt([]),c=Tt(new Set),_=Tt(new Set),p=me(!1),r=me(!1),i=me(!1),u=me(),d=me(),g=me(1),y=Lo(()=>`brightness(${g.value})`),T={prod:{showNext:1200}}.prod,F=async L=>{const I=n.value[L];I.visible=!0,s.push(I),"hasButton"in I&&!I.hasButton?(clearTimeout(t.value),t.value=setTimeout(()=>F(I.next),T.showNext)):t.value=void 0},M=L=>{console.log("handling end"),Qa(L),d.value?.update()},W=async()=>{g.value=1;const L=["brave-0","fear-0"],I=u.value?.findIndex(ee=>L.map(J=>`block-${J}`).includes(ee.id)),N=s.findIndex(ee=>L.includes(ee.id)),G=f.findIndex(ee=>L.includes(ee));if(console.log(u.value?.map(ee=>ee.id)),console.log(I),!I||I==-1)throw new Error("For some reason i can't find Brave or Fear block");if(N==-1)throw new Error("For some reason i can't find Brave or Fear block");if(G==-1)throw new Error("For some reason i can't find Brave or Fear choose");f.splice(G),c.clear(),_.clear(),await Kt();const _e=u.value?.[I-1];console.log(_e),_e?.scrollIntoView({behavior:"smooth",block:"end"}),await bt(300),s.splice(N),l.value="./mus/(0)Fate.opus"},ne=async(L,I,N="single",G=void 0,_e=void 0,ee=void 0)=>{if(console.log(L),(L=="THE_END"||L=="TRY_AGAIN")&&_e!=null){console.log(_e),M(_e),L=="TRY_AGAIN"&&W();return}if(ee&&(g.value=ee),!f.includes(L))if(f.push(L),G&&(l.value=G),N=="multiple"){const J=`btn-${L}`;console.log("Multiple choice - Looking for button:",J),console.log("Available buttons:",a.value?.map(we=>we.$el.id));const Y=a.value?.find(we=>we.$el.id===J);console.log("Found button:",Y),Y?(await bt(150),console.log("Scrolling to button"),Y.$el.scrollIntoView({behavior:"smooth",block:"center"})):console.warn("Button not found for scrolling!"),await bt(500),_.add(I),await bt(1e3),c.add(L),F(L),await Kt()}else{F(L),await Kt();const J=`btn-${L}`;console.log("Single choice - Looking for button:",J),console.log("Available buttons:",a.value?.map(we=>we.$el.id));const Y=a.value?.find(we=>we.$el.id===J);console.log("Found button:",Y),Y?(await bt(150),console.log("Scrolling to button"),Y.$el.scrollIntoView({behavior:"smooth",block:"start"})):console.warn("Button not found for scrolling!")}},ue=async()=>{r.value=!0,await bt(2e3),r.value=!1,await bt(500),l.value=pe["(0)Fate"],n.value.beginning.visible=!0,s.push(n.value.beginning),p.value=!0,await Kt(),o.value?.play()},ce=L=>f?.includes(L),B=L=>!L.hasButton||!L.visible?!1:L.next instanceof Array?!L.next.some(I=>c.has(I.id)):!c.has(L.next),q=()=>g.value<=.6;return Wn(()=>{window.scrollTo({top:0})}),(L,I)=>(U(),ie("div",{ref:"body",class:et(["body hide-scrollbar pt-10",{inverted:q()}])},[le("header",Of,[ae(bn,{name:"fade"},{default:ut(()=>[p.value?(U(),He(Wa,{key:0,ref_key:"audioPlayer",ref:o,src:l.value},null,8,["src"])):xt("",!0)]),_:1})]),le("main",Ff,[le("div",Bf,[ae(bn,{name:"fade",onAfterLeave:ue},{default:ut(()=>[i.value?xt("",!0):(U(),He(xs,{key:0,class:"",onClick:I[0]||(I[0]=N=>i.value=!0)},{default:ut(()=>[...I[1]||(I[1]=[Pn(" Начать ",-1)])]),_:1}))]),_:1})]),ae(bn,{name:"fade"},{default:ut(()=>[r.value?(U(),ie("div",Lf,[I[2]||(I[2]=le("h2",{class:"p-8"}," Этот сайт активно использует звук для создания подходящей атмосферы. Пожалуйста, используйте наушники. ",-1)),ae(dt($a),{size:40})])):xt("",!0)]),_:1}),ae(ga,{name:"fade",tag:"div",class:"content-wrapper"},{default:ut(()=>[(U(!0),ie(he,null,En(s,N=>(U(),ie("div",{id:`block-${N.id}`,key:N.id,ref_for:!0,ref_key:"blockElements",ref:u,class:"block-container flex flex-col items-center justify-center"},[ae(cu,{content:N.text,justify:N.justify,meta:N.meta,class:"p-2"},null,8,["content","justify","meta"]),B(N)?(U(),ie("div",{key:0,class:et(["choose-holder flex flex-row items-center justify-center gap-x-48 p-8",{collapsing:_.has(N.id)}])},[N.next instanceof Array?(U(!0),ie(he,{key:1},En(N.next,G=>(U(),He(xs,{key:G.id,id:`btn-${G.id}`,ref_for:!0,ref_key:"buttons",ref:a,class:et(["anim-btn",{selected:ce(G.id)}]),inverted:q(),onClick:_e=>ne(G.id,N.id,"multiple",G.song,G.ending,G.brigtness)},{default:ut(()=>[Pn(An(G.label),1)]),_:2},1032,["id","class","inverted","onClick"]))),128)):(U(),He(Ja,{key:0,id:`btn-${N.next}`,ref_for:!0,ref_key:"buttons",ref:a,onClick:G=>ne(N.next,N.id,"single",N.newSong)},null,8,["id","onClick"]))],2)):xt("",!0)],8,Hf))),128))]),_:1}),I[3]||(I[3]=le("div",{class:"scroll-spacer"},null,-1))]),ae(au,{ref_key:"endingIndicator",ref:d},null,512),le("div",{class:"background",style:Ht({filter:y.value})},null,4)],2))}}),Df=Rt(Rf,[["__scopeId","data-v-a2711c20"]]);xa(Df).mount("#app");
