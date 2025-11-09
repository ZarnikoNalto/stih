(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Tr(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Z={},Ft=[],Je=()=>{},$o=()=>!1,Dn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xr=e=>e.startsWith("onUpdate:"),_e=Object.assign,Sr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ei=Object.prototype.hasOwnProperty,J=(e,t)=>ei.call(e,t),D=Array.isArray,Bt=e=>Nn(e)==="[object Map]",Mo=e=>Nn(e)==="[object Set]",V=e=>typeof e=="function",fe=e=>typeof e=="string",it=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Po=e=>(le(e)||V(e))&&V(e.then)&&V(e.catch),Oo=Object.prototype.toString,Nn=e=>Oo.call(e),ti=e=>Nn(e).slice(8,-1),Fo=e=>Nn(e)==="[object Object]",Cr=e=>fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xt=Tr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jn=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ni=/-\w/g,rt=jn(e=>e.replace(ni,t=>t.slice(1).toUpperCase())),ri=/\B([A-Z])/g,gt=jn(e=>e.replace(ri,"-$1").toLowerCase()),Bo=jn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Zn=jn(e=>e?`on${Bo(e)}`:""),Ie=(e,t)=>!Object.is(e,t),Qn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Lo=(e,t,n,o=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:o,value:n})},oi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},si=e=>{const t=fe(e)?Number(e):NaN;return isNaN(t)?e:t};let qr;const Vn=()=>qr||(qr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Et(e){if(D(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=fe(o)?ui(o):Et(o);if(s)for(const i in s)t[i]=s[i]}return t}else if(fe(e)||le(e))return e}const ii=/;(?![^(]*\))/g,li=/:([^]+)/,ai=/\/\*[^]*?\*\//g;function ui(e){const t={};return e.replace(ai,"").split(ii).forEach(n=>{if(n){const o=n.split(li);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function nt(e){let t="";if(fe(e))t=e;else if(D(e))for(let n=0;n<e.length;n++){const o=nt(e[n]);o&&(t+=o+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ci="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fi=Tr(ci);function Ho(e){return!!e||e===""}const Ro=e=>!!(e&&e.__v_isRef===!0),Sn=e=>fe(e)?e:e==null?"":D(e)||le(e)&&(e.toString===Oo||!V(e.toString))?Ro(e)?Sn(e.value):JSON.stringify(e,Do,2):String(e),Do=(e,t)=>Ro(t)?Do(e,t.value):Bt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s],i)=>(n[er(o,i)+" =>"]=s,n),{})}:Mo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>er(n))}:it(t)?er(t):le(t)&&!D(t)&&!Fo(t)?String(t):t,er=(e,t="")=>{var n;return it(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let be;class di{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=be,!t&&be&&(this.index=(be.scopes||(be.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=be;try{return be=this,t()}finally{be=n}}}on(){++this._on===1&&(this.prevScope=be,be=this)}off(){this._on>0&&--this._on===0&&(be=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(this.effects.length=0,n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function No(){return be}function pi(e,t=!1){be&&be.cleanups.push(e)}let se;const tr=new WeakSet;class jo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,be&&be.active&&be.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,tr.has(this)&&(tr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Go(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yr(this),Wo(this);const t=se,n=Ne;se=this,Ne=!0;try{return this.fn()}finally{Ko(this),se=t,Ne=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Er(t);this.deps=this.depsTail=void 0,Yr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?tr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fr(this)&&this.run()}get dirty(){return fr(this)}}let Vo=0,zt,Jt;function Go(e,t=!1){if(e.flags|=8,t){e.next=Jt,Jt=e;return}e.next=zt,zt=e}function kr(){Vo++}function Ir(){if(--Vo>0)return;if(Jt){let t=Jt;for(Jt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;zt;){let t=zt;for(zt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(o){e||(e=o)}t=n}}if(e)throw e}function Wo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ko(e){let t,n=e.depsTail,o=n;for(;o;){const s=o.prevDep;o.version===-1?(o===n&&(n=s),Er(o),_i(o)):t=o,o.dep.activeLink=o.prevActiveLink,o.prevActiveLink=void 0,o=s}e.deps=t,e.depsTail=n}function fr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Uo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Uo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===nn)||(e.globalVersion=nn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!fr(e))))return;e.flags|=2;const t=e.dep,n=se,o=Ne;se=e,Ne=!0;try{Wo(e);const s=e.fn(e._value);(t.version===0||Ie(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{se=n,Ne=o,Ko(e),e.flags&=-3}}function Er(e,t=!1){const{dep:n,prevSub:o,nextSub:s}=e;if(o&&(o.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=o,e.nextSub=void 0),n.subs===e&&(n.subs=o,!o&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Er(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function _i(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ne=!0;const qo=[];function ot(){qo.push(Ne),Ne=!1}function st(){const e=qo.pop();Ne=e===void 0?!0:e}function Yr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=se;se=void 0;try{t()}finally{se=n}}}let nn=0;class hi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!se||!Ne||se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==se)n=this.activeLink=new hi(se,this),se.deps?(n.prevDep=se.depsTail,se.depsTail.nextDep=n,se.depsTail=n):se.deps=se.depsTail=n,Yo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const o=n.nextDep;o.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=o),n.prevDep=se.depsTail,n.nextDep=void 0,se.depsTail.nextDep=n,se.depsTail=n,se.deps===n&&(se.deps=o)}return n}trigger(t){this.version++,nn++,this.notify(t)}notify(t){kr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ir()}}}function Yo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let o=t.deps;o;o=o.nextDep)Yo(o)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Cn=new WeakMap,kt=Symbol(""),dr=Symbol(""),rn=Symbol("");function ye(e,t,n){if(Ne&&se){let o=Cn.get(e);o||Cn.set(e,o=new Map);let s=o.get(n);s||(o.set(n,s=new Gn),s.map=o,s.key=n),s.track()}}function tt(e,t,n,o,s,i){const a=Cn.get(e);if(!a){nn++;return}const c=f=>{f&&f.trigger()};if(kr(),t==="clear")a.forEach(c);else{const f=D(e),p=f&&Cr(n);if(f&&n==="length"){const d=Number(o);a.forEach((r,l)=>{(l==="length"||l===rn||!it(l)&&l>=d)&&c(r)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),p&&c(a.get(rn)),t){case"add":f?p&&c(a.get("length")):(c(a.get(kt)),Bt(e)&&c(a.get(dr)));break;case"delete":f||(c(a.get(kt)),Bt(e)&&c(a.get(dr)));break;case"set":Bt(e)&&c(a.get(kt));break}}Ir()}function mi(e,t){const n=Cn.get(e);return n&&n.get(t)}function Mt(e){const t=z(e);return t===e?t:(ye(t,"iterate",rn),He(e)?t:t.map(ve))}function Wn(e){return ye(e=z(e),"iterate",rn),e}const gi={__proto__:null,[Symbol.iterator](){return nr(this,Symbol.iterator,ve)},concat(...e){return Mt(this).concat(...e.map(t=>D(t)?Mt(t):t))},entries(){return nr(this,"entries",e=>(e[1]=ve(e[1]),e))},every(e,t){return Ze(this,"every",e,t,void 0,arguments)},filter(e,t){return Ze(this,"filter",e,t,n=>n.map(ve),arguments)},find(e,t){return Ze(this,"find",e,t,ve,arguments)},findIndex(e,t){return Ze(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ze(this,"findLast",e,t,ve,arguments)},findLastIndex(e,t){return Ze(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ze(this,"forEach",e,t,void 0,arguments)},includes(...e){return rr(this,"includes",e)},indexOf(...e){return rr(this,"indexOf",e)},join(e){return Mt(this).join(e)},lastIndexOf(...e){return rr(this,"lastIndexOf",e)},map(e,t){return Ze(this,"map",e,t,void 0,arguments)},pop(){return Kt(this,"pop")},push(...e){return Kt(this,"push",e)},reduce(e,...t){return Xr(this,"reduce",e,t)},reduceRight(e,...t){return Xr(this,"reduceRight",e,t)},shift(){return Kt(this,"shift")},some(e,t){return Ze(this,"some",e,t,void 0,arguments)},splice(...e){return Kt(this,"splice",e)},toReversed(){return Mt(this).toReversed()},toSorted(e){return Mt(this).toSorted(e)},toSpliced(...e){return Mt(this).toSpliced(...e)},unshift(...e){return Kt(this,"unshift",e)},values(){return nr(this,"values",ve)}};function nr(e,t,n){const o=Wn(e),s=o[t]();return o!==e&&!He(e)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const vi=Array.prototype;function Ze(e,t,n,o,s,i){const a=Wn(e),c=a!==e&&!He(e),f=a[t];if(f!==vi[t]){const r=f.apply(e,i);return c?ve(r):r}let p=n;a!==e&&(c?p=function(r,l){return n.call(this,ve(r),l,e)}:n.length>2&&(p=function(r,l){return n.call(this,r,l,e)}));const d=f.call(a,p,o);return c&&s?s(d):d}function Xr(e,t,n,o){const s=Wn(e);let i=n;return s!==e&&(He(e)?n.length>3&&(i=function(a,c,f){return n.call(this,a,c,f,e)}):i=function(a,c,f){return n.call(this,a,ve(c),f,e)}),s[t](i,...o)}function rr(e,t,n){const o=z(e);ye(o,"iterate",rn);const s=o[t](...n);return(s===-1||s===!1)&&Or(n[0])?(n[0]=z(n[0]),o[t](...n)):s}function Kt(e,t,n=[]){ot(),kr();const o=z(e)[t].apply(e,n);return Ir(),st(),o}const bi=Tr("__proto__,__v_isRef,__isVue"),Xo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(it));function yi(e){it(e)||(e=String(e));const t=z(this);return ye(t,"has",e),t.hasOwnProperty(e)}class zo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,o){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return o===(s?i?$i:es:i?Qo:Zo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const a=D(t);if(!s){let f;if(a&&(f=gi[n]))return f;if(n==="hasOwnProperty")return yi}const c=Reflect.get(t,n,ge(t)?t:o);return(it(n)?Xo.has(n):bi(n))||(s||ye(t,"get",n),i)?c:ge(c)?a&&Cr(n)?c:c.value:le(c)?s?Mr(c):St(c):c}}class Jo extends zo{constructor(t=!1){super(!1,t)}set(t,n,o,s){let i=t[n];if(!this._isShallow){const f=ht(i);if(!He(o)&&!ht(o)&&(i=z(i),o=z(o)),!D(t)&&ge(i)&&!ge(o))return f||(i.value=o),!0}const a=D(t)&&Cr(n)?Number(n)<t.length:J(t,n),c=Reflect.set(t,n,o,ge(t)?t:s);return t===z(s)&&(a?Ie(o,i)&&tt(t,"set",n,o):tt(t,"add",n,o)),c}deleteProperty(t,n){const o=J(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&tt(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!it(n)||!Xo.has(n))&&ye(t,"has",n),o}ownKeys(t){return ye(t,"iterate",D(t)?"length":kt),Reflect.ownKeys(t)}}class wi extends zo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ai=new Jo,Ti=new wi,xi=new Jo(!0);const pr=e=>e,hn=e=>Reflect.getPrototypeOf(e);function Si(e,t,n){return function(...o){const s=this.__v_raw,i=z(s),a=Bt(i),c=e==="entries"||e===Symbol.iterator&&a,f=e==="keys"&&a,p=s[e](...o),d=n?pr:t?kn:ve;return!t&&ye(i,"iterate",f?dr:kt),{next(){const{value:r,done:l}=p.next();return l?{value:r,done:l}:{value:c?[d(r[0]),d(r[1])]:d(r),done:l}},[Symbol.iterator](){return this}}}}function mn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ci(e,t){const n={get(s){const i=this.__v_raw,a=z(i),c=z(s);e||(Ie(s,c)&&ye(a,"get",s),ye(a,"get",c));const{has:f}=hn(a),p=t?pr:e?kn:ve;if(f.call(a,s))return p(i.get(s));if(f.call(a,c))return p(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&ye(z(s),"iterate",kt),s.size},has(s){const i=this.__v_raw,a=z(i),c=z(s);return e||(Ie(s,c)&&ye(a,"has",s),ye(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,f=z(c),p=t?pr:e?kn:ve;return!e&&ye(f,"iterate",kt),c.forEach((d,r)=>s.call(i,p(d),p(r),a))}};return _e(n,e?{add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear")}:{add(s){!t&&!He(s)&&!ht(s)&&(s=z(s));const i=z(this);return hn(i).has.call(i,s)||(i.add(s),tt(i,"add",s,s)),this},set(s,i){!t&&!He(i)&&!ht(i)&&(i=z(i));const a=z(this),{has:c,get:f}=hn(a);let p=c.call(a,s);p||(s=z(s),p=c.call(a,s));const d=f.call(a,s);return a.set(s,i),p?Ie(i,d)&&tt(a,"set",s,i):tt(a,"add",s,i),this},delete(s){const i=z(this),{has:a,get:c}=hn(i);let f=a.call(i,s);f||(s=z(s),f=a.call(i,s)),c&&c.call(i,s);const p=i.delete(s);return f&&tt(i,"delete",s,void 0),p},clear(){const s=z(this),i=s.size!==0,a=s.clear();return i&&tt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Si(s,e,t)}),n}function $r(e,t){const n=Ci(e,t);return(o,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get(J(n,s)&&s in o?n:o,s,i)}const ki={get:$r(!1,!1)},Ii={get:$r(!1,!0)},Ei={get:$r(!0,!1)};const Zo=new WeakMap,Qo=new WeakMap,es=new WeakMap,$i=new WeakMap;function Mi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pi(e){return e.__v_skip||!Object.isExtensible(e)?0:Mi(ti(e))}function St(e){return ht(e)?e:Pr(e,!1,Ai,ki,Zo)}function Oi(e){return Pr(e,!1,xi,Ii,Qo)}function Mr(e){return Pr(e,!0,Ti,Ei,es)}function Pr(e,t,n,o,s){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Pi(e);if(i===0)return e;const a=s.get(e);if(a)return a;const c=new Proxy(e,i===2?o:n);return s.set(e,c),c}function Lt(e){return ht(e)?Lt(e.__v_raw):!!(e&&e.__v_isReactive)}function ht(e){return!!(e&&e.__v_isReadonly)}function He(e){return!!(e&&e.__v_isShallow)}function Or(e){return e?!!e.__v_raw:!1}function z(e){const t=e&&e.__v_raw;return t?z(t):e}function Fi(e){return!J(e,"__v_skip")&&Object.isExtensible(e)&&Lo(e,"__v_skip",!0),e}const ve=e=>le(e)?St(e):e,kn=e=>le(e)?Mr(e):e;function ge(e){return e?e.__v_isRef===!0:!1}function pe(e){return ts(e,!1)}function Bi(e){return ts(e,!0)}function ts(e,t){return ge(e)?e:new Li(e,t)}class Li{constructor(t,n){this.dep=new Gn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:z(t),this._value=n?t:ve(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,o=this.__v_isShallow||He(t)||ht(t);t=o?t:z(t),Ie(t,n)&&(this._rawValue=t,this._value=o?t:ve(t),this.dep.trigger())}}function Le(e){return ge(e)?e.value:e}function Fr(e){return V(e)?e():Le(e)}const Hi={get:(e,t,n)=>t==="__v_raw"?e:Le(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return ge(s)&&!ge(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function ns(e){return Lt(e)?e:new Proxy(e,Hi)}class Ri{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Gn,{get:o,set:s}=t(n.track.bind(n),n.trigger.bind(n));this._get=o,this._set=s}get value(){return this._value=this._get()}set value(t){this._set(t)}}function rs(e){return new Ri(e)}class Di{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return mi(z(this._object),this._key)}}class Ni{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function ji(e,t,n){return ge(e)?e:V(e)?new Ni(e):le(e)&&arguments.length>1?Vi(e,t,n):pe(e)}function Vi(e,t,n){const o=e[t];return ge(o)?o:new Di(e,t,n)}class Gi{constructor(t,n,o){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Gn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=nn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=o}notify(){if(this.flags|=16,!(this.flags&8)&&se!==this)return Go(this,!0),!0}get value(){const t=this.dep.track();return Uo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Wi(e,t,n=!1){let o,s;return V(e)?o=e:(o=e.get,s=e.set),new Gi(o,s,n)}const gn={},In=new WeakMap;let Tt;function Ki(e,t=!1,n=Tt){if(n){let o=In.get(n);o||In.set(n,o=[]),o.push(e)}}function Ui(e,t,n=Z){const{immediate:o,deep:s,once:i,scheduler:a,augmentJob:c,call:f}=n,p=M=>s?M:He(M)||s===!1||s===0?pt(M,1):pt(M);let d,r,l,u,_=!1,g=!1;if(ge(e)?(r=()=>e.value,_=He(e)):Lt(e)?(r=()=>p(e),_=!0):D(e)?(g=!0,_=e.some(M=>Lt(M)||He(M)),r=()=>e.map(M=>{if(ge(M))return M.value;if(Lt(M))return p(M);if(V(M))return f?f(M,2):M()})):V(e)?t?r=f?()=>f(e,2):e:r=()=>{if(l){ot();try{l()}finally{st()}}const M=Tt;Tt=d;try{return f?f(e,3,[u]):e(u)}finally{Tt=M}}:r=Je,t&&s){const M=r,G=s===!0?1/0:s;r=()=>pt(M(),G)}const b=No(),v=()=>{d.stop(),b&&b.active&&Sr(b.effects,d)};if(i&&t){const M=t;t=(...G)=>{M(...G),v()}}let T=g?new Array(e.length).fill(gn):gn;const F=M=>{if(!(!(d.flags&1)||!d.dirty&&!M))if(t){const G=d.run();if(s||_||(g?G.some((te,ce)=>Ie(te,T[ce])):Ie(G,T))){l&&l();const te=Tt;Tt=d;try{const ce=[G,T===gn?void 0:g&&T[0]===gn?[]:T,u];T=G,f?f(t,3,ce):t(...ce)}finally{Tt=te}}}else d.run()};return c&&c(F),d=new jo(r),d.scheduler=a?()=>a(F,!1):F,u=M=>Ki(M,!1,d),l=d.onStop=()=>{const M=In.get(d);if(M){if(f)f(M,4);else for(const G of M)G();In.delete(d)}},t?o?F(!0):T=d.run():a?a(F.bind(null,!0),!0):d.run(),v.pause=d.pause.bind(d),v.resume=d.resume.bind(d),v.stop=v,v}function pt(e,t=1/0,n){if(t<=0||!le(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ge(e))pt(e.value,t,n);else if(D(e))for(let o=0;o<e.length;o++)pt(e[o],t,n);else if(Mo(e)||Bt(e))e.forEach(o=>{pt(o,t,n)});else if(Fo(e)){for(const o in e)pt(e[o],t,n);for(const o of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,o)&&pt(e[o],t,n)}return e}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cn(e,t,n,o){try{return o?e(...o):e()}catch(s){Kn(s,t,n)}}function je(e,t,n,o){if(V(e)){const s=cn(e,t,n,o);return s&&Po(s)&&s.catch(i=>{Kn(i,t,n)}),s}if(D(e)){const s=[];for(let i=0;i<e.length;i++)s.push(je(e[i],t,n,o));return s}}function Kn(e,t,n,o=!0){const s=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Z;if(t){let c=t.parent;const f=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let r=0;r<d.length;r++)if(d[r](e,f,p)===!1)return}c=c.parent}if(i){ot(),cn(i,null,10,[e,f,p]),st();return}}qi(e,n,s,o,a)}function qi(e,t,n,o=!0,s=!1){if(s)throw e;console.error(e)}const xe=[];let Xe=-1;const Ht=[];let ct=null,Pt=0;const os=Promise.resolve();let En=null;function Ot(e){const t=En||os;return e?t.then(this?e.bind(this):e):t}function Yi(e){let t=Xe+1,n=xe.length;for(;t<n;){const o=t+n>>>1,s=xe[o],i=on(s);i<e||i===e&&s.flags&2?t=o+1:n=o}return t}function Br(e){if(!(e.flags&1)){const t=on(e),n=xe[xe.length-1];!n||!(e.flags&2)&&t>=on(n)?xe.push(e):xe.splice(Yi(t),0,e),e.flags|=1,ss()}}function ss(){En||(En=os.then(ls))}function Xi(e){D(e)?Ht.push(...e):ct&&e.id===-1?ct.splice(Pt+1,0,e):e.flags&1||(Ht.push(e),e.flags|=1),ss()}function zr(e,t,n=Xe+1){for(;n<xe.length;n++){const o=xe[n];if(o&&o.flags&2){if(e&&o.id!==e.uid)continue;xe.splice(n,1),n--,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function is(e){if(Ht.length){const t=[...new Set(Ht)].sort((n,o)=>on(n)-on(o));if(Ht.length=0,ct){ct.push(...t);return}for(ct=t,Pt=0;Pt<ct.length;Pt++){const n=ct[Pt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ct=null,Pt=0}}const on=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ls(e){try{for(Xe=0;Xe<xe.length;Xe++){const t=xe[Xe];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),cn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Xe<xe.length;Xe++){const t=xe[Xe];t&&(t.flags&=-2)}Xe=-1,xe.length=0,is(),En=null,(xe.length||Ht.length)&&ls()}}let Ee=null,as=null;function $n(e){const t=Ee;return Ee=e,as=e&&e.type.__scopeId||null,t}function ft(e,t=Ee,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&Bn(-1);const i=$n(t);let a;try{a=e(...s)}finally{$n(i),o._d&&Bn(1)}return a};return o._n=!0,o._c=!0,o._d=!0,o}function bt(e,t,n,o){const s=e.dirs,i=t&&t.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let f=c.dir[o];f&&(ot(),je(f,n,8,[e.el,c,e,t]),st())}}const zi=Symbol("_vte"),us=e=>e.__isTeleport,et=Symbol("_leaveCb"),vn=Symbol("_enterCb");function cs(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jt(()=>{e.isMounted=!0}),vs(()=>{e.isUnmounting=!0}),e}const Be=[Function,Array],fs={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Be,onEnter:Be,onAfterEnter:Be,onEnterCancelled:Be,onBeforeLeave:Be,onLeave:Be,onAfterLeave:Be,onLeaveCancelled:Be,onBeforeAppear:Be,onAppear:Be,onAfterAppear:Be,onAppearCancelled:Be},ds=e=>{const t=e.subTree;return t.component?ds(t.component):t},Ji={name:"BaseTransition",props:fs,setup(e,{slots:t}){const n=dn(),o=cs();return()=>{const s=t.default&&Lr(t.default(),!0);if(!s||!s.length)return;const i=ps(s),a=z(e),{mode:c}=a;if(o.isLeaving)return or(i);const f=Jr(i);if(!f)return or(i);let p=sn(f,a,o,n,r=>p=r);f.type!==we&&It(f,p);let d=n.subTree&&Jr(n.subTree);if(d&&d.type!==we&&!xt(d,f)&&ds(n).type!==we){let r=sn(d,a,o,n);if(It(d,r),c==="out-in"&&f.type!==we)return o.isLeaving=!0,r.afterLeave=()=>{o.isLeaving=!1,n.job.flags&8||n.update(),delete r.afterLeave,d=void 0},or(i);c==="in-out"&&f.type!==we?r.delayLeave=(l,u,_)=>{const g=_s(o,d);g[String(d.key)]=d,l[et]=()=>{u(),l[et]=void 0,delete p.delayedLeave,d=void 0},p.delayedLeave=()=>{_(),delete p.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function ps(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==we){t=n;break}}return t}const Zi=Ji;function _s(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}function sn(e,t,n,o,s){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:f,onEnter:p,onAfterEnter:d,onEnterCancelled:r,onBeforeLeave:l,onLeave:u,onAfterLeave:_,onLeaveCancelled:g,onBeforeAppear:b,onAppear:v,onAfterAppear:T,onAppearCancelled:F}=t,M=String(e.key),G=_s(n,e),te=(B,X)=>{B&&je(B,o,9,X)},ce=(B,X)=>{const Q=X[1];te(B,X),D(B)?B.every(C=>C.length<=1)&&Q():B.length<=1&&Q()},de={mode:a,persisted:c,beforeEnter(B){let X=f;if(!n.isMounted)if(i)X=b||f;else return;B[et]&&B[et](!0);const Q=G[M];Q&&xt(e,Q)&&Q.el[et]&&Q.el[et](),te(X,[B])},enter(B){let X=p,Q=d,C=r;if(!n.isMounted)if(i)X=v||p,Q=T||d,C=F||r;else return;let H=!1;const j=B[vn]=ne=>{H||(H=!0,ne?te(C,[B]):te(Q,[B]),de.delayedLeave&&de.delayedLeave(),B[vn]=void 0)};X?ce(X,[B,j]):j()},leave(B,X){const Q=String(e.key);if(B[vn]&&B[vn](!0),n.isUnmounting)return X();te(l,[B]);let C=!1;const H=B[et]=j=>{C||(C=!0,X(),j?te(g,[B]):te(_,[B]),B[et]=void 0,G[Q]===e&&delete G[Q])};G[Q]=e,u?ce(u,[B,H]):H()},clone(B){const X=sn(B,t,n,o,s);return s&&s(X),X}};return de}function or(e){if(Un(e))return e=mt(e),e.children=null,e}function Jr(e){if(!Un(e))return us(e.type)&&e.children?ps(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&V(n.default))return n.default()}}function It(e,t){e.shapeFlag&6&&e.component?(e.transition=t,It(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Lr(e,t=!1,n){let o=[],s=0;for(let i=0;i<e.length;i++){let a=e[i];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===me?(a.patchFlag&128&&s++,o=o.concat(Lr(a.children,t,c))):(t||a.type!==we)&&o.push(c!=null?mt(a,{key:c}):a)}if(s>1)for(let i=0;i<o.length;i++)o[i].patchFlag=-2;return o}function $e(e,t){return V(e)?_e({name:e.name},t,{setup:e}):e}function hs(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Mn=new WeakMap;function Zt(e,t,n,o,s=!1){if(D(e)){e.forEach((_,g)=>Zt(_,t&&(D(t)?t[g]:t),n,o,s));return}if(Rt(o)&&!s){o.shapeFlag&512&&o.type.__asyncResolved&&o.component.subTree.component&&Zt(e,t,n,o.component.subTree);return}const i=o.shapeFlag&4?jr(o.component):o.el,a=s?null:i,{i:c,r:f}=e,p=t&&t.r,d=c.refs===Z?c.refs={}:c.refs,r=c.setupState,l=z(r),u=r===Z?$o:_=>J(l,_);if(p!=null&&p!==f){if(Zr(t),fe(p))d[p]=null,u(p)&&(r[p]=null);else if(ge(p)){p.value=null;const _=t;_.k&&(d[_.k]=null)}}if(V(f))cn(f,c,12,[a,d]);else{const _=fe(f),g=ge(f);if(_||g){const b=()=>{if(e.f){const v=_?u(f)?r[f]:d[f]:f.value;if(s)D(v)&&Sr(v,i);else if(D(v))v.includes(i)||v.push(i);else if(_)d[f]=[i],u(f)&&(r[f]=d[f]);else{const T=[i];f.value=T,e.k&&(d[e.k]=T)}}else _?(d[f]=a,u(f)&&(r[f]=a)):g&&(f.value=a,e.k&&(d[e.k]=a))};if(a){const v=()=>{b(),Mn.delete(e)};v.id=-1,Mn.set(e,v),Pe(v,n)}else Zr(e),b()}}}function Zr(e){const t=Mn.get(e);t&&(t.flags|=8,Mn.delete(e))}Vn().requestIdleCallback;Vn().cancelIdleCallback;const Rt=e=>!!e.type.__asyncLoader,Un=e=>e.type.__isKeepAlive;function Qi(e,t){ms(e,"a",t)}function el(e,t){ms(e,"da",t)}function ms(e,t,n=Se){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(qn(t,o,n),n){let s=n.parent;for(;s&&s.parent;)Un(s.parent.vnode)&&tl(o,t,n,s),s=s.parent}}function tl(e,t,n,o){const s=qn(t,e,o,!0);fn(()=>{Sr(o[t],s)},n)}function qn(e,t,n=Se,o=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{ot();const c=pn(n),f=je(t,n,e,a);return c(),st(),f});return o?s.unshift(i):s.push(i),i}}const lt=e=>(t,n=Se)=>{(!un||e==="sp")&&qn(e,(...o)=>t(...o),n)},nl=lt("bm"),jt=lt("m"),rl=lt("bu"),gs=lt("u"),vs=lt("bum"),fn=lt("um"),ol=lt("sp"),sl=lt("rtg"),il=lt("rtc");function ll(e,t=Se){qn("ec",e,t)}const al=Symbol.for("v-ndc");function Pn(e,t,n,o){let s;const i=n,a=D(e);if(a||fe(e)){const c=a&&Lt(e);let f=!1,p=!1;c&&(f=!He(e),p=ht(e),e=Wn(e)),s=new Array(e.length);for(let d=0,r=e.length;d<r;d++)s[d]=t(f?p?kn(ve(e[d])):ve(e[d]):e[d],d,void 0,i)}else if(typeof e=="number"){s=new Array(e);for(let c=0;c<e;c++)s[c]=t(c+1,c,void 0,i)}else if(le(e))if(e[Symbol.iterator])s=Array.from(e,(c,f)=>t(c,f,void 0,i));else{const c=Object.keys(e);s=new Array(c.length);for(let f=0,p=c.length;f<p;f++){const d=c[f];s[f]=t(e[d],d,f,i)}}else s=[];return s}function ul(e,t,n={},o,s){if(Ee.ce||Ee.parent&&Rt(Ee.parent)&&Ee.parent.ce)return W(),De(me,null,[ae("slot",n,o&&o())],64);let i=e[t];i&&i._c&&(i._d=!1),W();const a=i&&bs(i(n)),c=n.key||a&&a.key,f=De(me,{key:(c&&!it(c)?c:`_${t}`)+(!a&&o?"_fb":"")},a||(o?o():[]),a&&e._===1?64:-2);return i&&i._c&&(i._d=!0),f}function bs(e){return e.some(t=>an(t)?!(t.type===we||t.type===me&&!bs(t.children)):!0)?e:null}const _r=e=>e?Ds(e)?jr(e):_r(e.parent):null,Qt=_e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_r(e.parent),$root:e=>_r(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ws(e),$forceUpdate:e=>e.f||(e.f=()=>{Br(e.update)}),$nextTick:e=>e.n||(e.n=Ot.bind(e.proxy)),$watch:e=>Ol.bind(e)}),sr=(e,t)=>e!==Z&&!e.__isScriptSetup&&J(e,t),cl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:o,data:s,props:i,accessCache:a,type:c,appContext:f}=e;let p;if(t[0]!=="$"){const u=a[t];if(u!==void 0)switch(u){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(sr(o,t))return a[t]=1,o[t];if(s!==Z&&J(s,t))return a[t]=2,s[t];if((p=e.propsOptions[0])&&J(p,t))return a[t]=3,i[t];if(n!==Z&&J(n,t))return a[t]=4,n[t];hr&&(a[t]=0)}}const d=Qt[t];let r,l;if(d)return t==="$attrs"&&ye(e.attrs,"get",""),d(e);if((r=c.__cssModules)&&(r=r[t]))return r;if(n!==Z&&J(n,t))return a[t]=4,n[t];if(l=f.config.globalProperties,J(l,t))return l[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:i}=e;return sr(s,t)?(s[t]=n,!0):o!==Z&&J(o,t)?(o[t]=n,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,propsOptions:i,type:a}},c){let f,p;return!!(n[c]||e!==Z&&c[0]!=="$"&&J(e,c)||sr(t,c)||(f=i[0])&&J(f,c)||J(o,c)||J(Qt,c)||J(s.config.globalProperties,c)||(p=a.__cssModules)&&p[c])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:J(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function On(e){return D(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}function fl(e,t){return!e||!t?e||t:D(e)&&D(t)?e.concat(t):_e({},On(e),On(t))}let hr=!0;function dl(e){const t=ws(e),n=e.proxy,o=e.ctx;hr=!1,t.beforeCreate&&Qr(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:c,provide:f,inject:p,created:d,beforeMount:r,mounted:l,beforeUpdate:u,updated:_,activated:g,deactivated:b,beforeDestroy:v,beforeUnmount:T,destroyed:F,unmounted:M,render:G,renderTracked:te,renderTriggered:ce,errorCaptured:de,serverPrefetch:B,expose:X,inheritAttrs:Q,components:C,directives:H,filters:j}=t;if(p&&pl(p,o,null),a)for(const U in a){const q=a[U];V(q)&&(o[U]=q.bind(n))}if(s){const U=s.call(n,n);le(U)&&(e.data=St(U))}if(hr=!0,i)for(const U in i){const q=i[U],Ae=V(q)?q.bind(n,n):V(q.get)?q.get.bind(n,n):Je,Fe=!V(q)&&V(q.set)?q.set.bind(n):Je,vt=zn({get:Ae,set:Fe});Object.defineProperty(o,U,{enumerable:!0,configurable:!0,get:()=>vt.value,set:Ge=>vt.value=Ge})}if(c)for(const U in c)ys(c[U],o,n,U);if(f){const U=V(f)?f.call(n):f;Reflect.ownKeys(U).forEach(q=>{bl(q,U[q])})}d&&Qr(d,e,"c");function re(U,q){D(q)?q.forEach(Ae=>U(Ae.bind(n))):q&&U(q.bind(n))}if(re(nl,r),re(jt,l),re(rl,u),re(gs,_),re(Qi,g),re(el,b),re(ll,de),re(il,te),re(sl,ce),re(vs,T),re(fn,M),re(ol,B),D(X))if(X.length){const U=e.exposed||(e.exposed={});X.forEach(q=>{Object.defineProperty(U,q,{get:()=>n[q],set:Ae=>n[q]=Ae,enumerable:!0})})}else e.exposed||(e.exposed={});G&&e.render===Je&&(e.render=G),Q!=null&&(e.inheritAttrs=Q),C&&(e.components=C),H&&(e.directives=H),B&&hs(e)}function pl(e,t,n=Je){D(e)&&(e=mr(e));for(const o in e){const s=e[o];let i;le(s)?"default"in s?i=yn(s.from||o,s.default,!0):i=yn(s.from||o):i=yn(s),ge(i)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[o]=i}}function Qr(e,t,n){je(D(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function ys(e,t,n,o){let s=o.includes(".")?Os(n,o):()=>n[o];if(fe(e)){const i=t[e];V(i)&&_t(s,i)}else if(V(e))_t(s,e.bind(n));else if(le(e))if(D(e))e.forEach(i=>ys(i,t,n,o));else{const i=V(e.handler)?e.handler.bind(n):t[e.handler];V(i)&&_t(s,i,e)}}function ws(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,c=i.get(t);let f;return c?f=c:!s.length&&!n&&!o?f=t:(f={},s.length&&s.forEach(p=>Fn(f,p,a,!0)),Fn(f,t,a)),le(t)&&i.set(t,f),f}function Fn(e,t,n,o=!1){const{mixins:s,extends:i}=t;i&&Fn(e,i,n,!0),s&&s.forEach(a=>Fn(e,a,n,!0));for(const a in t)if(!(o&&a==="expose")){const c=_l[a]||n&&n[a];e[a]=c?c(e[a],t[a]):t[a]}return e}const _l={data:eo,props:to,emits:to,methods:Yt,computed:Yt,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Yt,directives:Yt,watch:ml,provide:eo,inject:hl};function eo(e,t){return t?e?function(){return _e(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function hl(e,t){return Yt(mr(e),mr(t))}function mr(e){if(D(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Te(e,t){return e?[...new Set([].concat(e,t))]:t}function Yt(e,t){return e?_e(Object.create(null),e,t):t}function to(e,t){return e?D(e)&&D(t)?[...new Set([...e,...t])]:_e(Object.create(null),On(e),On(t??{})):t}function ml(e,t){if(!e)return t;if(!t)return e;const n=_e(Object.create(null),e);for(const o in t)n[o]=Te(e[o],t[o]);return n}function As(){return{app:null,config:{isNativeTag:$o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gl=0;function vl(e,t){return function(o,s=null){V(o)||(o=_e({},o)),s!=null&&!le(s)&&(s=null);const i=As(),a=new WeakSet,c=[];let f=!1;const p=i.app={_uid:gl++,_component:o,_props:s,_container:null,_context:i,_instance:null,version:na,get config(){return i.config},set config(d){},use(d,...r){return a.has(d)||(d&&V(d.install)?(a.add(d),d.install(p,...r)):V(d)&&(a.add(d),d(p,...r))),p},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),p},component(d,r){return r?(i.components[d]=r,p):i.components[d]},directive(d,r){return r?(i.directives[d]=r,p):i.directives[d]},mount(d,r,l){if(!f){const u=p._ceVNode||ae(o,s);return u.appContext=i,l===!0?l="svg":l===!1&&(l=void 0),e(u,d,l),f=!0,p._container=d,d.__vue_app__=p,jr(u.component)}},onUnmount(d){c.push(d)},unmount(){f&&(je(c,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(d,r){return i.provides[d]=r,p},runWithContext(d){const r=Dt;Dt=p;try{return d()}finally{Dt=r}}};return p}}let Dt=null;function bl(e,t){if(Se){let n=Se.provides;const o=Se.parent&&Se.parent.provides;o===n&&(n=Se.provides=Object.create(o)),n[e]=t}}function yn(e,t,n=!1){const o=dn();if(o||Dt){let s=Dt?Dt._context.provides:o?o.parent==null||o.ce?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&V(t)?t.call(o&&o.proxy):t}}const Ts={},xs=()=>Object.create(Ts),Ss=e=>Object.getPrototypeOf(e)===Ts;function yl(e,t,n,o=!1){const s={},i=xs();e.propsDefaults=Object.create(null),Cs(e,t,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=o?s:Oi(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function wl(e,t,n,o){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,c=z(s),[f]=e.propsOptions;let p=!1;if((o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let r=0;r<d.length;r++){let l=d[r];if(Yn(e.emitsOptions,l))continue;const u=t[l];if(f)if(J(i,l))u!==i[l]&&(i[l]=u,p=!0);else{const _=rt(l);s[_]=gr(f,c,_,u,e,!1)}else u!==i[l]&&(i[l]=u,p=!0)}}}else{Cs(e,t,s,i)&&(p=!0);let d;for(const r in c)(!t||!J(t,r)&&((d=gt(r))===r||!J(t,d)))&&(f?n&&(n[r]!==void 0||n[d]!==void 0)&&(s[r]=gr(f,c,r,void 0,e,!0)):delete s[r]);if(i!==c)for(const r in i)(!t||!J(t,r))&&(delete i[r],p=!0)}p&&tt(e.attrs,"set","")}function Cs(e,t,n,o){const[s,i]=e.propsOptions;let a=!1,c;if(t)for(let f in t){if(Xt(f))continue;const p=t[f];let d;s&&J(s,d=rt(f))?!i||!i.includes(d)?n[d]=p:(c||(c={}))[d]=p:Yn(e.emitsOptions,f)||(!(f in o)||p!==o[f])&&(o[f]=p,a=!0)}if(i){const f=z(n),p=c||Z;for(let d=0;d<i.length;d++){const r=i[d];n[r]=gr(s,f,r,p[r],e,!J(p,r))}}return a}function gr(e,t,n,o,s,i){const a=e[n];if(a!=null){const c=J(a,"default");if(c&&o===void 0){const f=a.default;if(a.type!==Function&&!a.skipFactory&&V(f)){const{propsDefaults:p}=s;if(n in p)o=p[n];else{const d=pn(s);o=p[n]=f.call(null,t),d()}}else o=f;s.ce&&s.ce._setProp(n,o)}a[0]&&(i&&!c?o=!1:a[1]&&(o===""||o===gt(n))&&(o=!0))}return o}const Al=new WeakMap;function ks(e,t,n=!1){const o=n?Al:t.propsCache,s=o.get(e);if(s)return s;const i=e.props,a={},c=[];let f=!1;if(!V(e)){const d=r=>{f=!0;const[l,u]=ks(r,t,!0);_e(a,l),u&&c.push(...u)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!f)return le(e)&&o.set(e,Ft),Ft;if(D(i))for(let d=0;d<i.length;d++){const r=rt(i[d]);no(r)&&(a[r]=Z)}else if(i)for(const d in i){const r=rt(d);if(no(r)){const l=i[d],u=a[r]=D(l)||V(l)?{type:l}:_e({},l),_=u.type;let g=!1,b=!0;if(D(_))for(let v=0;v<_.length;++v){const T=_[v],F=V(T)&&T.name;if(F==="Boolean"){g=!0;break}else F==="String"&&(b=!1)}else g=V(_)&&_.name==="Boolean";u[0]=g,u[1]=b,(g||J(u,"default"))&&c.push(r)}}const p=[a,c];return le(e)&&o.set(e,p),p}function no(e){return e[0]!=="$"&&!Xt(e)}const Hr=e=>e==="_"||e==="_ctx"||e==="$stable",Rr=e=>D(e)?e.map(ze):[ze(e)],Tl=(e,t,n)=>{if(t._n)return t;const o=ft((...s)=>Rr(t(...s)),n);return o._c=!1,o},Is=(e,t,n)=>{const o=e._ctx;for(const s in e){if(Hr(s))continue;const i=e[s];if(V(i))t[s]=Tl(s,i,o);else if(i!=null){const a=Rr(i);t[s]=()=>a}}},Es=(e,t)=>{const n=Rr(t);e.slots.default=()=>n},$s=(e,t,n)=>{for(const o in t)(n||!Hr(o))&&(e[o]=t[o])},xl=(e,t,n)=>{const o=e.slots=xs();if(e.vnode.shapeFlag&32){const s=t._;s?($s(o,t,n),n&&Lo(o,"_",s,!0)):Is(t,o)}else t&&Es(e,t)},Sl=(e,t,n)=>{const{vnode:o,slots:s}=e;let i=!0,a=Z;if(o.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:$s(s,t,n):(i=!t.$stable,Is(t,s)),a=t}else t&&(Es(e,t),a={default:1});if(i)for(const c in s)!Hr(c)&&a[c]==null&&delete s[c]},Pe=jl;function Cl(e){return kl(e)}function kl(e,t){const n=Vn();n.__VUE__=!0;const{insert:o,remove:s,patchProp:i,createElement:a,createText:c,createComment:f,setText:p,setElementText:d,parentNode:r,nextSibling:l,setScopeId:u=Je,insertStaticContent:_}=e,g=(h,m,y,x=null,w=null,A=null,P=void 0,$=null,E=!!m.dynamicChildren)=>{if(h===m)return;h&&!xt(h,m)&&(x=_n(h),Ge(h,w,A,!0),h=null),m.patchFlag===-2&&(E=!1,m.dynamicChildren=null);const{type:S,ref:R,shapeFlag:O}=m;switch(S){case Xn:b(h,m,y,x);break;case we:v(h,m,y,x);break;case wn:h==null&&T(m,y,x,P);break;case me:C(h,m,y,x,w,A,P,$,E);break;default:O&1?G(h,m,y,x,w,A,P,$,E):O&6?H(h,m,y,x,w,A,P,$,E):(O&64||O&128)&&S.process(h,m,y,x,w,A,P,$,E,Gt)}R!=null&&w?Zt(R,h&&h.ref,A,m||h,!m):R==null&&h&&h.ref!=null&&Zt(h.ref,null,A,h,!0)},b=(h,m,y,x)=>{if(h==null)o(m.el=c(m.children),y,x);else{const w=m.el=h.el;m.children!==h.children&&p(w,m.children)}},v=(h,m,y,x)=>{h==null?o(m.el=f(m.children||""),y,x):m.el=h.el},T=(h,m,y,x)=>{[h.el,h.anchor]=_(h.children,m,y,x,h.el,h.anchor)},F=({el:h,anchor:m},y,x)=>{let w;for(;h&&h!==m;)w=l(h),o(h,y,x),h=w;o(m,y,x)},M=({el:h,anchor:m})=>{let y;for(;h&&h!==m;)y=l(h),s(h),h=y;s(m)},G=(h,m,y,x,w,A,P,$,E)=>{m.type==="svg"?P="svg":m.type==="math"&&(P="mathml"),h==null?te(m,y,x,w,A,P,$,E):B(h,m,w,A,P,$,E)},te=(h,m,y,x,w,A,P,$)=>{let E,S;const{props:R,shapeFlag:O,transition:L,dirs:N}=h;if(E=h.el=a(h.type,A,R&&R.is,R),O&8?d(E,h.children):O&16&&de(h.children,E,null,x,w,ir(h,A),P,$),N&&bt(h,null,x,"created"),ce(E,h,h.scopeId,P,x),R){for(const oe in R)oe!=="value"&&!Xt(oe)&&i(E,oe,null,R[oe],A,x);"value"in R&&i(E,"value",null,R.value,A),(S=R.onVnodeBeforeMount)&&qe(S,x,h)}N&&bt(h,null,x,"beforeMount");const Y=Il(w,L);Y&&L.beforeEnter(E),o(E,m,y),((S=R&&R.onVnodeMounted)||Y||N)&&Pe(()=>{S&&qe(S,x,h),Y&&L.enter(E),N&&bt(h,null,x,"mounted")},w)},ce=(h,m,y,x,w)=>{if(y&&u(h,y),x)for(let A=0;A<x.length;A++)u(h,x[A]);if(w){let A=w.subTree;if(m===A||Ls(A.type)&&(A.ssContent===m||A.ssFallback===m)){const P=w.vnode;ce(h,P,P.scopeId,P.slotScopeIds,w.parent)}}},de=(h,m,y,x,w,A,P,$,E=0)=>{for(let S=E;S<h.length;S++){const R=h[S]=$?dt(h[S]):ze(h[S]);g(null,R,m,y,x,w,A,P,$)}},B=(h,m,y,x,w,A,P)=>{const $=m.el=h.el;let{patchFlag:E,dynamicChildren:S,dirs:R}=m;E|=h.patchFlag&16;const O=h.props||Z,L=m.props||Z;let N;if(y&&yt(y,!1),(N=L.onVnodeBeforeUpdate)&&qe(N,y,m,h),R&&bt(m,h,y,"beforeUpdate"),y&&yt(y,!0),(O.innerHTML&&L.innerHTML==null||O.textContent&&L.textContent==null)&&d($,""),S?X(h.dynamicChildren,S,$,y,x,ir(m,w),A):P||q(h,m,$,null,y,x,ir(m,w),A,!1),E>0){if(E&16)Q($,O,L,y,w);else if(E&2&&O.class!==L.class&&i($,"class",null,L.class,w),E&4&&i($,"style",O.style,L.style,w),E&8){const Y=m.dynamicProps;for(let oe=0;oe<Y.length;oe++){const ee=Y[oe],Ce=O[ee],ke=L[ee];(ke!==Ce||ee==="value")&&i($,ee,Ce,ke,w,y)}}E&1&&h.children!==m.children&&d($,m.children)}else!P&&S==null&&Q($,O,L,y,w);((N=L.onVnodeUpdated)||R)&&Pe(()=>{N&&qe(N,y,m,h),R&&bt(m,h,y,"updated")},x)},X=(h,m,y,x,w,A,P)=>{for(let $=0;$<m.length;$++){const E=h[$],S=m[$],R=E.el&&(E.type===me||!xt(E,S)||E.shapeFlag&198)?r(E.el):y;g(E,S,R,null,x,w,A,P,!0)}},Q=(h,m,y,x,w)=>{if(m!==y){if(m!==Z)for(const A in m)!Xt(A)&&!(A in y)&&i(h,A,m[A],null,w,x);for(const A in y){if(Xt(A))continue;const P=y[A],$=m[A];P!==$&&A!=="value"&&i(h,A,$,P,w,x)}"value"in y&&i(h,"value",m.value,y.value,w)}},C=(h,m,y,x,w,A,P,$,E)=>{const S=m.el=h?h.el:c(""),R=m.anchor=h?h.anchor:c("");let{patchFlag:O,dynamicChildren:L,slotScopeIds:N}=m;N&&($=$?$.concat(N):N),h==null?(o(S,y,x),o(R,y,x),de(m.children||[],y,R,w,A,P,$,E)):O>0&&O&64&&L&&h.dynamicChildren?(X(h.dynamicChildren,L,y,w,A,P,$),(m.key!=null||w&&m===w.subTree)&&Ms(h,m,!0)):q(h,m,y,R,w,A,P,$,E)},H=(h,m,y,x,w,A,P,$,E)=>{m.slotScopeIds=$,h==null?m.shapeFlag&512?w.ctx.activate(m,y,x,P,E):j(m,y,x,w,A,P,E):ne(h,m,E)},j=(h,m,y,x,w,A,P)=>{const $=h.component=Xl(h,x,w);if(Un(h)&&($.ctx.renderer=Gt),zl($,!1,P),$.asyncDep){if(w&&w.registerDep($,re,P),!h.el){const E=$.subTree=ae(we);v(null,E,m,y),h.placeholder=E.el}}else re($,h,m,y,w,A,P)},ne=(h,m,y)=>{const x=m.component=h.component;if(Dl(h,m,y))if(x.asyncDep&&!x.asyncResolved){U(x,m,y);return}else x.next=m,x.update();else m.el=h.el,x.vnode=m},re=(h,m,y,x,w,A,P)=>{const $=()=>{if(h.isMounted){let{next:O,bu:L,u:N,parent:Y,vnode:oe}=h;{const Ke=Ps(h);if(Ke){O&&(O.el=oe.el,U(h,O,P)),Ke.asyncDep.then(()=>{h.isUnmounted||$()});return}}let ee=O,Ce;yt(h,!1),O?(O.el=oe.el,U(h,O,P)):O=oe,L&&Qn(L),(Ce=O.props&&O.props.onVnodeBeforeUpdate)&&qe(Ce,Y,O,oe),yt(h,!0);const ke=oo(h),We=h.subTree;h.subTree=ke,g(We,ke,r(We.el),_n(We),h,w,A),O.el=ke.el,ee===null&&Nl(h,ke.el),N&&Pe(N,w),(Ce=O.props&&O.props.onVnodeUpdated)&&Pe(()=>qe(Ce,Y,O,oe),w)}else{let O;const{el:L,props:N}=m,{bm:Y,m:oe,parent:ee,root:Ce,type:ke}=h,We=Rt(m);yt(h,!1),Y&&Qn(Y),!We&&(O=N&&N.onVnodeBeforeMount)&&qe(O,ee,m),yt(h,!0);{Ce.ce&&Ce.ce._def.shadowRoot!==!1&&Ce.ce._injectChildStyle(ke);const Ke=h.subTree=oo(h);g(null,Ke,y,x,h,w,A),m.el=Ke.el}if(oe&&Pe(oe,w),!We&&(O=N&&N.onVnodeMounted)){const Ke=m;Pe(()=>qe(O,ee,Ke),w)}(m.shapeFlag&256||ee&&Rt(ee.vnode)&&ee.vnode.shapeFlag&256)&&h.a&&Pe(h.a,w),h.isMounted=!0,m=y=x=null}};h.scope.on();const E=h.effect=new jo($);h.scope.off();const S=h.update=E.run.bind(E),R=h.job=E.runIfDirty.bind(E);R.i=h,R.id=h.uid,E.scheduler=()=>Br(R),yt(h,!0),S()},U=(h,m,y)=>{m.component=h;const x=h.vnode.props;h.vnode=m,h.next=null,wl(h,m.props,x,y),Sl(h,m.children,y),ot(),zr(h),st()},q=(h,m,y,x,w,A,P,$,E=!1)=>{const S=h&&h.children,R=h?h.shapeFlag:0,O=m.children,{patchFlag:L,shapeFlag:N}=m;if(L>0){if(L&128){Fe(S,O,y,x,w,A,P,$,E);return}else if(L&256){Ae(S,O,y,x,w,A,P,$,E);return}}N&8?(R&16&&Vt(S,w,A),O!==S&&d(y,O)):R&16?N&16?Fe(S,O,y,x,w,A,P,$,E):Vt(S,w,A,!0):(R&8&&d(y,""),N&16&&de(O,y,x,w,A,P,$,E))},Ae=(h,m,y,x,w,A,P,$,E)=>{h=h||Ft,m=m||Ft;const S=h.length,R=m.length,O=Math.min(S,R);let L;for(L=0;L<O;L++){const N=m[L]=E?dt(m[L]):ze(m[L]);g(h[L],N,y,null,w,A,P,$,E)}S>R?Vt(h,w,A,!0,!1,O):de(m,y,x,w,A,P,$,E,O)},Fe=(h,m,y,x,w,A,P,$,E)=>{let S=0;const R=m.length;let O=h.length-1,L=R-1;for(;S<=O&&S<=L;){const N=h[S],Y=m[S]=E?dt(m[S]):ze(m[S]);if(xt(N,Y))g(N,Y,y,null,w,A,P,$,E);else break;S++}for(;S<=O&&S<=L;){const N=h[O],Y=m[L]=E?dt(m[L]):ze(m[L]);if(xt(N,Y))g(N,Y,y,null,w,A,P,$,E);else break;O--,L--}if(S>O){if(S<=L){const N=L+1,Y=N<R?m[N].el:x;for(;S<=L;)g(null,m[S]=E?dt(m[S]):ze(m[S]),y,Y,w,A,P,$,E),S++}}else if(S>L)for(;S<=O;)Ge(h[S],w,A,!0),S++;else{const N=S,Y=S,oe=new Map;for(S=Y;S<=L;S++){const Me=m[S]=E?dt(m[S]):ze(m[S]);Me.key!=null&&oe.set(Me.key,S)}let ee,Ce=0;const ke=L-Y+1;let We=!1,Ke=0;const Wt=new Array(ke);for(S=0;S<ke;S++)Wt[S]=0;for(S=N;S<=O;S++){const Me=h[S];if(Ce>=ke){Ge(Me,w,A,!0);continue}let Ue;if(Me.key!=null)Ue=oe.get(Me.key);else for(ee=Y;ee<=L;ee++)if(Wt[ee-Y]===0&&xt(Me,m[ee])){Ue=ee;break}Ue===void 0?Ge(Me,w,A,!0):(Wt[Ue-Y]=S+1,Ue>=Ke?Ke=Ue:We=!0,g(Me,m[Ue],y,null,w,A,P,$,E),Ce++)}const Wr=We?El(Wt):Ft;for(ee=Wr.length-1,S=ke-1;S>=0;S--){const Me=Y+S,Ue=m[Me],Kr=m[Me+1],Ur=Me+1<R?Kr.el||Kr.placeholder:x;Wt[S]===0?g(null,Ue,y,Ur,w,A,P,$,E):We&&(ee<0||S!==Wr[ee]?vt(Ue,y,Ur,2):ee--)}}},vt=(h,m,y,x,w=null)=>{const{el:A,type:P,transition:$,children:E,shapeFlag:S}=h;if(S&6){vt(h.component.subTree,m,y,x);return}if(S&128){h.suspense.move(m,y,x);return}if(S&64){P.move(h,m,y,Gt);return}if(P===me){o(A,m,y);for(let O=0;O<E.length;O++)vt(E[O],m,y,x);o(h.anchor,m,y);return}if(P===wn){F(h,m,y);return}if(x!==2&&S&1&&$)if(x===0)$.beforeEnter(A),o(A,m,y),Pe(()=>$.enter(A),w);else{const{leave:O,delayLeave:L,afterLeave:N}=$,Y=()=>{h.ctx.isUnmounted?s(A):o(A,m,y)},oe=()=>{A._isLeaving&&A[et](!0),O(A,()=>{Y(),N&&N()})};L?L(A,Y,oe):oe()}else o(A,m,y)},Ge=(h,m,y,x=!1,w=!1)=>{const{type:A,props:P,ref:$,children:E,dynamicChildren:S,shapeFlag:R,patchFlag:O,dirs:L,cacheIndex:N}=h;if(O===-2&&(w=!1),$!=null&&(ot(),Zt($,null,y,h,!0),st()),N!=null&&(m.renderCache[N]=void 0),R&256){m.ctx.deactivate(h);return}const Y=R&1&&L,oe=!Rt(h);let ee;if(oe&&(ee=P&&P.onVnodeBeforeUnmount)&&qe(ee,m,h),R&6)Qs(h.component,y,x);else{if(R&128){h.suspense.unmount(y,x);return}Y&&bt(h,null,m,"beforeUnmount"),R&64?h.type.remove(h,m,y,Gt,x):S&&!S.hasOnce&&(A!==me||O>0&&O&64)?Vt(S,m,y,!1,!0):(A===me&&O&384||!w&&R&16)&&Vt(E,m,y),x&&Vr(h)}(oe&&(ee=P&&P.onVnodeUnmounted)||Y)&&Pe(()=>{ee&&qe(ee,m,h),Y&&bt(h,null,m,"unmounted")},y)},Vr=h=>{const{type:m,el:y,anchor:x,transition:w}=h;if(m===me){Zs(y,x);return}if(m===wn){M(h);return}const A=()=>{s(y),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(h.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:$}=w,E=()=>P(y,A);$?$(h.el,A,E):E()}else A()},Zs=(h,m)=>{let y;for(;h!==m;)y=l(h),s(h),h=y;s(m)},Qs=(h,m,y)=>{const{bum:x,scope:w,job:A,subTree:P,um:$,m:E,a:S}=h;ro(E),ro(S),x&&Qn(x),w.stop(),A&&(A.flags|=8,Ge(P,h,m,y)),$&&Pe($,m),Pe(()=>{h.isUnmounted=!0},m)},Vt=(h,m,y,x=!1,w=!1,A=0)=>{for(let P=A;P<h.length;P++)Ge(h[P],m,y,x,w)},_n=h=>{if(h.shapeFlag&6)return _n(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const m=l(h.anchor||h.el),y=m&&m[zi];return y?l(y):m};let Jn=!1;const Gr=(h,m,y)=>{h==null?m._vnode&&Ge(m._vnode,null,null,!0):g(m._vnode||null,h,m,null,null,null,y),m._vnode=h,Jn||(Jn=!0,zr(),is(),Jn=!1)},Gt={p:g,um:Ge,m:vt,r:Vr,mt:j,mc:de,pc:q,pbc:X,n:_n,o:e};return{render:Gr,hydrate:void 0,createApp:vl(Gr)}}function ir({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function yt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Il(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ms(e,t,n=!1){const o=e.children,s=t.children;if(D(o)&&D(s))for(let i=0;i<o.length;i++){const a=o[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=dt(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&Ms(a,c)),c.type===Xn&&c.patchFlag!==-1&&(c.el=a.el),c.type===we&&!c.el&&(c.el=a.el)}}function El(e){const t=e.slice(),n=[0];let o,s,i,a,c;const f=e.length;for(o=0;o<f;o++){const p=e[o];if(p!==0){if(s=n[n.length-1],e[s]<p){t[o]=s,n.push(o);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,e[n[c]]<p?i=c+1:a=c;p<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Ps(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ps(t)}function ro(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const $l=Symbol.for("v-scx"),Ml=()=>yn($l);function Pl(e,t){return Dr(e,null,{flush:"sync"})}function _t(e,t,n){return Dr(e,t,n)}function Dr(e,t,n=Z){const{immediate:o,deep:s,flush:i,once:a}=n,c=_e({},n),f=t&&o||!t&&i!=="post";let p;if(un){if(i==="sync"){const u=Ml();p=u.__watcherHandles||(u.__watcherHandles=[])}else if(!f){const u=()=>{};return u.stop=Je,u.resume=Je,u.pause=Je,u}}const d=Se;c.call=(u,_,g)=>je(u,d,_,g);let r=!1;i==="post"?c.scheduler=u=>{Pe(u,d&&d.suspense)}:i!=="sync"&&(r=!0,c.scheduler=(u,_)=>{_?u():Br(u)}),c.augmentJob=u=>{t&&(u.flags|=4),r&&(u.flags|=2,d&&(u.id=d.uid,u.i=d))};const l=Ui(e,t,c);return un&&(p?p.push(l):f&&l()),l}function Ol(e,t,n){const o=this.proxy,s=fe(e)?e.includes(".")?Os(o,e):()=>o[e]:e.bind(o,o);let i;V(t)?i=t:(i=t.handler,n=t);const a=pn(this),c=Dr(s,i.bind(o),n);return a(),c}function Os(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}function Fl(e,t,n=Z){const o=dn(),s=rt(t),i=gt(t),a=Fs(e,s),c=rs((f,p)=>{let d,r=Z,l;return Pl(()=>{const u=e[s];Ie(d,u)&&(d=u,p())}),{get(){return f(),n.get?n.get(d):d},set(u){const _=n.set?n.set(u):u;if(!Ie(_,d)&&!(r!==Z&&Ie(u,r)))return;const g=o.vnode.props;g&&(t in g||s in g||i in g)&&(`onUpdate:${t}`in g||`onUpdate:${s}`in g||`onUpdate:${i}`in g)||(d=u,p()),o.emit(`update:${t}`,_),Ie(u,_)&&Ie(u,r)&&!Ie(_,l)&&p(),r=u,l=_}}});return c[Symbol.iterator]=()=>{let f=0;return{next(){return f<2?{value:f++?a||Z:c,done:!1}:{done:!0}}}},c}const Fs=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${rt(t)}Modifiers`]||e[`${gt(t)}Modifiers`];function Bl(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Z;let s=n;const i=t.startsWith("update:"),a=i&&Fs(o,t.slice(7));a&&(a.trim&&(s=n.map(d=>fe(d)?d.trim():d)),a.number&&(s=n.map(oi)));let c,f=o[c=Zn(t)]||o[c=Zn(rt(t))];!f&&i&&(f=o[c=Zn(gt(t))]),f&&je(f,e,6,s);const p=o[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,je(p,e,6,s)}}const Ll=new WeakMap;function Bs(e,t,n=!1){const o=n?Ll:t.emitsCache,s=o.get(e);if(s!==void 0)return s;const i=e.emits;let a={},c=!1;if(!V(e)){const f=p=>{const d=Bs(p,t,!0);d&&(c=!0,_e(a,d))};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}return!i&&!c?(le(e)&&o.set(e,null),null):(D(i)?i.forEach(f=>a[f]=null):_e(a,i),le(e)&&o.set(e,a),a)}function Yn(e,t){return!e||!Dn(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,gt(t))||J(e,t))}function oo(e){const{type:t,vnode:n,proxy:o,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:f,render:p,renderCache:d,props:r,data:l,setupState:u,ctx:_,inheritAttrs:g}=e,b=$n(e);let v,T;try{if(n.shapeFlag&4){const M=s||o,G=M;v=ze(p.call(G,M,d,r,u,l,_)),T=c}else{const M=t;v=ze(M.length>1?M(r,{attrs:c,slots:a,emit:f}):M(r,null)),T=t.props?c:Hl(c)}}catch(M){en.length=0,Kn(M,e,1),v=ae(we)}let F=v;if(T&&g!==!1){const M=Object.keys(T),{shapeFlag:G}=F;M.length&&G&7&&(i&&M.some(xr)&&(T=Rl(T,i)),F=mt(F,T,!1,!0))}return n.dirs&&(F=mt(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&It(F,n.transition),v=F,$n(b),v}const Hl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Dn(n))&&((t||(t={}))[n]=e[n]);return t},Rl=(e,t)=>{const n={};for(const o in e)(!xr(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Dl(e,t,n){const{props:o,children:s,component:i}=e,{props:a,children:c,patchFlag:f}=t,p=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&f>=0){if(f&1024)return!0;if(f&16)return o?so(o,a,p):!!a;if(f&8){const d=t.dynamicProps;for(let r=0;r<d.length;r++){const l=d[r];if(a[l]!==o[l]&&!Yn(p,l))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:o===a?!1:o?a?so(o,a,p):!0:!!a;return!1}function so(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const i=o[s];if(t[i]!==e[i]&&!Yn(n,i))return!0}return!1}function Nl({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const Ls=e=>e.__isSuspense;function jl(e,t){t&&t.pendingBranch?D(e)?t.effects.push(...e):t.effects.push(e):Xi(e)}const me=Symbol.for("v-fgt"),Xn=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),wn=Symbol.for("v-stc"),en=[];let Oe=null;function W(e=!1){en.push(Oe=e?null:[])}function Vl(){en.pop(),Oe=en[en.length-1]||null}let ln=1;function Bn(e,t=!1){ln+=e,e<0&&Oe&&t&&(Oe.hasOnce=!0)}function Hs(e){return e.dynamicChildren=ln>0?Oe||Ft:null,Vl(),ln>0&&Oe&&Oe.push(e),e}function ie(e,t,n,o,s,i){return Hs(ue(e,t,n,o,s,i,!0))}function De(e,t,n,o,s){return Hs(ae(e,t,n,o,s,!0))}function an(e){return e?e.__v_isVNode===!0:!1}function xt(e,t){return e.type===t.type&&e.key===t.key}const Rs=({key:e})=>e??null,An=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?fe(e)||ge(e)||V(e)?{i:Ee,r:e,k:t,f:!!n}:e:null);function ue(e,t=null,n=null,o=0,s=null,i=e===me?0:1,a=!1,c=!1){const f={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Rs(t),ref:t&&An(t),scopeId:as,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ee};return c?(Nr(f,n),i&128&&e.normalize(f)):n&&(f.shapeFlag|=fe(n)?8:16),ln>0&&!a&&Oe&&(f.patchFlag>0||i&6)&&f.patchFlag!==32&&Oe.push(f),f}const ae=Gl;function Gl(e,t=null,n=null,o=0,s=null,i=!1){if((!e||e===al)&&(e=we),an(e)){const c=mt(e,t,!0);return n&&Nr(c,n),ln>0&&!i&&Oe&&(c.shapeFlag&6?Oe[Oe.indexOf(e)]=c:Oe.push(c)),c.patchFlag=-2,c}if(ea(e)&&(e=e.__vccOpts),t){t=Wl(t);let{class:c,style:f}=t;c&&!fe(c)&&(t.class=nt(c)),le(f)&&(Or(f)&&!D(f)&&(f=_e({},f)),t.style=Et(f))}const a=fe(e)?1:Ls(e)?128:us(e)?64:le(e)?4:V(e)?2:0;return ue(e,t,n,o,s,a,i,!0)}function Wl(e){return e?Or(e)||Ss(e)?_e({},e):e:null}function mt(e,t,n=!1,o=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:f}=e,p=t?Ul(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Rs(p),ref:t&&t.ref?n&&i?D(i)?i.concat(An(t)):[i,An(t)]:An(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:f,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mt(e.ssContent),ssFallback:e.ssFallback&&mt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return f&&o&&It(d,f.clone(d)),d}function Ln(e=" ",t=0){return ae(Xn,null,e,t)}function Kl(e,t){const n=ae(wn,null,e);return n.staticCount=t,n}function Ct(e="",t=!1){return t?(W(),De(we,null,e)):ae(we,null,e)}function ze(e){return e==null||typeof e=="boolean"?ae(we):D(e)?ae(me,null,e.slice()):an(e)?dt(e):ae(Xn,null,String(e))}function dt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:mt(e)}function Nr(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(D(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),Nr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Ss(t)?t._ctx=Ee:s===3&&Ee&&(Ee.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:Ee},n=32):(t=String(t),o&64?(n=16,t=[Ln(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ul(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=nt([t.class,o.class]));else if(s==="style")t.style=Et([t.style,o.style]);else if(Dn(s)){const i=t[s],a=o[s];a&&i!==a&&!(D(i)&&i.includes(a))&&(t[s]=i?[].concat(i,a):a)}else s!==""&&(t[s]=o[s])}return t}function qe(e,t,n,o=null){je(e,t,7,[n,o])}const ql=As();let Yl=0;function Xl(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||ql,i={uid:Yl++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new di(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ks(o,s),emitsOptions:Bs(o,s),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:o.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Bl.bind(null,i),e.ce&&e.ce(i),i}let Se=null;const dn=()=>Se||Ee;let Hn,vr;{const e=Vn(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Hn=t("__VUE_INSTANCE_SETTERS__",n=>Se=n),vr=t("__VUE_SSR_SETTERS__",n=>un=n)}const pn=e=>{const t=Se;return Hn(e),e.scope.on(),()=>{e.scope.off(),Hn(t)}},io=()=>{Se&&Se.scope.off(),Hn(null)};function Ds(e){return e.vnode.shapeFlag&4}let un=!1;function zl(e,t=!1,n=!1){t&&vr(t);const{props:o,children:s}=e.vnode,i=Ds(e);yl(e,o,i,t),xl(e,s,n||t);const a=i?Jl(e,t):void 0;return t&&vr(!1),a}function Jl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,cl);const{setup:o}=n;if(o){ot();const s=e.setupContext=o.length>1?Ql(e):null,i=pn(e),a=cn(o,e,0,[e.props,s]),c=Po(a);if(st(),i(),(c||e.sp)&&!Rt(e)&&hs(e),c){if(a.then(io,io),t)return a.then(f=>{lo(e,f)}).catch(f=>{Kn(f,e,0)});e.asyncDep=a}else lo(e,a)}else Ns(e)}function lo(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=ns(t)),Ns(e)}function Ns(e,t,n){const o=e.type;e.render||(e.render=o.render||Je);{const s=pn(e);ot();try{dl(e)}finally{st(),s()}}}const Zl={get(e,t){return ye(e,"get",""),e[t]}};function Ql(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Zl),slots:e.slots,emit:e.emit,expose:t}}function jr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ns(Fi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qt)return Qt[n](e)},has(t,n){return n in t||n in Qt}})):e.proxy}function ea(e){return V(e)&&"__vccOpts"in e}const zn=(e,t)=>Wi(e,t,un);function ta(e,t,n){const o=(i,a,c)=>{Bn(-1);try{return ae(i,a,c)}finally{Bn(1)}},s=arguments.length;return s===2?le(t)&&!D(t)?an(t)?o(e,null,[t]):o(e,t):o(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&an(n)&&(n=[n]),o(e,t,n))}const na="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let br;const ao=typeof window<"u"&&window.trustedTypes;if(ao)try{br=ao.createPolicy("vue",{createHTML:e=>e})}catch{}const js=br?e=>br.createHTML(e):e=>e,ra="http://www.w3.org/2000/svg",oa="http://www.w3.org/1998/Math/MathML",Qe=typeof document<"u"?document:null,uo=Qe&&Qe.createElement("template"),sa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?Qe.createElementNS(ra,e):t==="mathml"?Qe.createElementNS(oa,e):n?Qe.createElement(e,{is:n}):Qe.createElement(e);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,i){const a=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{uo.innerHTML=js(o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e);const c=uo.content;if(o==="svg"||o==="mathml"){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}t.insertBefore(c,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},at="transition",Ut="animation",Nt=Symbol("_vtc"),Vs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Gs=_e({},fs,Vs),ia=e=>(e.displayName="Transition",e.props=Gs,e),Tn=ia((e,{slots:t})=>ta(Zi,Ws(e),t)),wt=(e,t=[])=>{D(e)?e.forEach(n=>n(...t)):e&&e(...t)},co=e=>e?D(e)?e.some(t=>t.length>1):e.length>1:!1;function Ws(e){const t={};for(const C in e)C in Vs||(t[C]=e[C]);if(e.css===!1)return t;const{name:n="v",type:o,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:f=i,appearActiveClass:p=a,appearToClass:d=c,leaveFromClass:r=`${n}-leave-from`,leaveActiveClass:l=`${n}-leave-active`,leaveToClass:u=`${n}-leave-to`}=e,_=la(s),g=_&&_[0],b=_&&_[1],{onBeforeEnter:v,onEnter:T,onEnterCancelled:F,onLeave:M,onLeaveCancelled:G,onBeforeAppear:te=v,onAppear:ce=T,onAppearCancelled:de=F}=t,B=(C,H,j,ne)=>{C._enterCancelled=ne,ut(C,H?d:c),ut(C,H?p:a),j&&j()},X=(C,H)=>{C._isLeaving=!1,ut(C,r),ut(C,u),ut(C,l),H&&H()},Q=C=>(H,j)=>{const ne=C?ce:T,re=()=>B(H,C,j);wt(ne,[H,re]),fo(()=>{ut(H,C?f:i),Ye(H,C?d:c),co(ne)||po(H,o,g,re)})};return _e(t,{onBeforeEnter(C){wt(v,[C]),Ye(C,i),Ye(C,a)},onBeforeAppear(C){wt(te,[C]),Ye(C,f),Ye(C,p)},onEnter:Q(!1),onAppear:Q(!0),onLeave(C,H){C._isLeaving=!0;const j=()=>X(C,H);Ye(C,r),C._enterCancelled?(Ye(C,l),yr()):(yr(),Ye(C,l)),fo(()=>{C._isLeaving&&(ut(C,r),Ye(C,u),co(M)||po(C,o,b,j))}),wt(M,[C,j])},onEnterCancelled(C){B(C,!1,void 0,!0),wt(F,[C])},onAppearCancelled(C){B(C,!0,void 0,!0),wt(de,[C])},onLeaveCancelled(C){X(C),wt(G,[C])}})}function la(e){if(e==null)return null;if(le(e))return[lr(e.enter),lr(e.leave)];{const t=lr(e);return[t,t]}}function lr(e){return si(e)}function Ye(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Nt]||(e[Nt]=new Set)).add(t)}function ut(e,t){t.split(/\s+/).forEach(o=>o&&e.classList.remove(o));const n=e[Nt];n&&(n.delete(t),n.size||(e[Nt]=void 0))}function fo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let aa=0;function po(e,t,n,o){const s=e._endId=++aa,i=()=>{s===e._endId&&o()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:c,propCount:f}=Ks(e,t);if(!a)return o();const p=a+"end";let d=0;const r=()=>{e.removeEventListener(p,l),i()},l=u=>{u.target===e&&++d>=f&&r()};setTimeout(()=>{d<f&&r()},c+1),e.addEventListener(p,l)}function Ks(e,t){const n=window.getComputedStyle(e),o=_=>(n[_]||"").split(", "),s=o(`${at}Delay`),i=o(`${at}Duration`),a=_o(s,i),c=o(`${Ut}Delay`),f=o(`${Ut}Duration`),p=_o(c,f);let d=null,r=0,l=0;t===at?a>0&&(d=at,r=a,l=i.length):t===Ut?p>0&&(d=Ut,r=p,l=f.length):(r=Math.max(a,p),d=r>0?a>p?at:Ut:null,l=d?d===at?i.length:f.length:0);const u=d===at&&/\b(?:transform|all)(?:,|$)/.test(o(`${at}Property`).toString());return{type:d,timeout:r,propCount:l,hasTransform:u}}function _o(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,o)=>ho(n)+ho(e[o])))}function ho(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function yr(){return document.body.offsetHeight}function ua(e,t,n){const o=e[Nt];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const mo=Symbol("_vod"),ca=Symbol("_vsh"),fa=Symbol(""),da=/(?:^|;)\s*display\s*:/;function pa(e,t,n){const o=e.style,s=fe(n);let i=!1;if(n&&!s){if(t)if(fe(t))for(const a of t.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&xn(o,c,"")}else for(const a in t)n[a]==null&&xn(o,a,"");for(const a in n)a==="display"&&(i=!0),xn(o,a,n[a])}else if(s){if(t!==n){const a=o[fa];a&&(n+=";"+a),o.cssText=n,i=da.test(n)}}else t&&e.removeAttribute("style");mo in e&&(e[mo]=i?o.display:"",e[ca]&&(o.display="none"))}const go=/\s*!important$/;function xn(e,t,n){if(D(n))n.forEach(o=>xn(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=_a(e,t);go.test(n)?e.setProperty(gt(o),n.replace(go,""),"important"):e[o]=n}}const vo=["Webkit","Moz","ms"],ar={};function _a(e,t){const n=ar[t];if(n)return n;let o=rt(t);if(o!=="filter"&&o in e)return ar[t]=o;o=Bo(o);for(let s=0;s<vo.length;s++){const i=vo[s]+o;if(i in e)return ar[t]=i}return t}const bo="http://www.w3.org/1999/xlink";function yo(e,t,n,o,s,i=fi(t)){o&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(bo,t.slice(6,t.length)):e.setAttributeNS(bo,t,n):n==null||i&&!Ho(n)?e.removeAttribute(t):e.setAttribute(t,i?"":it(n)?String(n):n)}function wo(e,t,n,o,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?js(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?e.getAttribute("value")||"":e.value,f=n==null?e.type==="checkbox"?"on":"":String(n);(c!==f||!("_value"in e))&&(e.value=f),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ho(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(s||t)}function ha(e,t,n,o){e.addEventListener(t,n,o)}function ma(e,t,n,o){e.removeEventListener(t,n,o)}const Ao=Symbol("_vei");function ga(e,t,n,o,s=null){const i=e[Ao]||(e[Ao]={}),a=i[t];if(o&&a)a.value=o;else{const[c,f]=va(t);if(o){const p=i[t]=wa(o,s);ha(e,c,p,f)}else a&&(ma(e,c,a,f),i[t]=void 0)}}const To=/(?:Once|Passive|Capture)$/;function va(e){let t;if(To.test(e)){t={};let o;for(;o=e.match(To);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):gt(e.slice(2)),t]}let ur=0;const ba=Promise.resolve(),ya=()=>ur||(ba.then(()=>ur=0),ur=Date.now());function wa(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;je(Aa(o,n.value),t,5,[o])};return n.value=e,n.attached=ya(),n}function Aa(e,t){if(D(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const xo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ta=(e,t,n,o,s,i)=>{const a=s==="svg";t==="class"?ua(e,o,a):t==="style"?pa(e,n,o):Dn(t)?xr(t)||ga(e,t,n,o,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xa(e,t,o,a))?(wo(e,t,o),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&yo(e,t,o,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!fe(o))?wo(e,rt(t),o,i,t):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),yo(e,t,o,a))};function xa(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&xo(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return xo(t)&&fe(n)?!1:t in e}const Us=new WeakMap,qs=new WeakMap,Rn=Symbol("_moveCb"),So=Symbol("_enterCb"),Sa=e=>(delete e.props.mode,e),Ca=Sa({name:"TransitionGroup",props:_e({},Gs,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=dn(),o=cs();let s,i;return gs(()=>{if(!s.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!Ma(s[0].el,n.vnode.el,a)){s=[];return}s.forEach(Ia),s.forEach(Ea);const c=s.filter($a);yr(),c.forEach(f=>{const p=f.el,d=p.style;Ye(p,a),d.transform=d.webkitTransform=d.transitionDuration="";const r=p[Rn]=l=>{l&&l.target!==p||(!l||l.propertyName.endsWith("transform"))&&(p.removeEventListener("transitionend",r),p[Rn]=null,ut(p,a))};p.addEventListener("transitionend",r)}),s=[]}),()=>{const a=z(e),c=Ws(a);let f=a.tag||me;if(s=[],i)for(let p=0;p<i.length;p++){const d=i[p];d.el&&d.el instanceof Element&&(s.push(d),It(d,sn(d,c,o,n)),Us.set(d,d.el.getBoundingClientRect()))}i=t.default?Lr(t.default()):[];for(let p=0;p<i.length;p++){const d=i[p];d.key!=null&&It(d,sn(d,c,o,n))}return ae(f,null,i)}}}),ka=Ca;function Ia(e){const t=e.el;t[Rn]&&t[Rn](),t[So]&&t[So]()}function Ea(e){qs.set(e,e.el.getBoundingClientRect())}function $a(e){const t=Us.get(e),n=qs.get(e),o=t.left-n.left,s=t.top-n.top;if(o||s){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${o}px,${s}px)`,i.transitionDuration="0s",e}}function Ma(e,t,n){const o=e.cloneNode(),s=e[Nt];s&&s.forEach(c=>{c.split(/\s+/).forEach(f=>f&&o.classList.remove(f))}),n.split(/\s+/).forEach(c=>c&&o.classList.add(c)),o.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(o);const{hasTransform:a}=Ks(o);return i.removeChild(o),a}const Pa=_e({patchProp:Ta},sa);let Co;function Oa(){return Co||(Co=Cl(Pa))}const Fa=((...e)=>{const t=Oa().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=La(o);if(!s)return;const i=t._component;!V(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Ba(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t});function Ba(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function La(e){return fe(e)?document.querySelector(e):e}function Ys(e){return No()?(pi(e),!0):!1}const Xs=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ha=e=>e!=null,Ra=()=>{};function Da(...e){if(e.length!==1)return ji(...e);const t=e[0];return typeof t=="function"?Mr(rs(()=>({get:t,set:Ra}))):pe(t)}function Na(e){return Array.isArray(e)?e:[e]}const ja=Xs?window:void 0,Va=Xs?window.document:void 0;function Ga(e){var t;const n=Fr(e);return(t=n?.$el)!=null?t:n}function Wa(){const e=Bi(!1),t=dn();return t&&jt(()=>{e.value=!0},t),e}function Ka(e){const t=Wa();return zn(()=>(t.value,!!e()))}function Ua(e,t,n={}){const{window:o=ja,...s}=n;let i;const a=Ka(()=>o&&"MutationObserver"in o),c=()=>{i&&(i.disconnect(),i=void 0)},f=zn(()=>{const l=Fr(e),u=Na(l).map(Ga).filter(Ha);return new Set(u)}),p=_t(f,l=>{c(),a.value&&l.size&&(i=new MutationObserver(t),l.forEach(u=>i.observe(u,s)))},{immediate:!0,flush:"post"}),d=()=>i?.takeRecords(),r=()=>{p(),c()};return Ys(r),{isSupported:a,stop:r,takeRecords:d}}function qa(e=null,t={}){var n,o,s;const{document:i=Va,restoreOnUnmount:a=r=>r}=t,c=(n=i?.title)!=null?n:"",f=Da((o=e??i?.title)!=null?o:null),p=!!(e&&typeof e=="function");function d(r){if(!("titleTemplate"in t))return r;const l=t.titleTemplate||"%s";return typeof l=="function"?l(r):Fr(l).replace(/%s/g,r)}return _t(f,(r,l)=>{r!==l&&i&&(i.title=d(r??""))},{immediate:!0}),t.observe&&!t.titleTemplate&&i&&!p&&Ua((s=i.head)==null?void 0:s.querySelector("title"),()=>{i&&i.title!==f.value&&(f.value=d(i.title))},{childList:!0}),Ys(()=>{if(a){const r=a(c,f.value||"");r!=null&&i&&(i.title=r)}}),f}var qt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cr={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */var ko;function Ya(){return ko||(ko=1,(function(e){(function(){var t=function(){this.init()};t.prototype={init:function(){var r=this||n;return r._counter=1e3,r._html5AudioPool=[],r.html5PoolSize=10,r._codecs={},r._howls=[],r._muted=!1,r._volume=1,r._canPlayEvent="canplaythrough",r._navigator=typeof window<"u"&&window.navigator?window.navigator:null,r.masterGain=null,r.noAudio=!1,r.usingWebAudio=!0,r.autoSuspend=!0,r.ctx=null,r.autoUnlock=!0,r._setup(),r},volume:function(r){var l=this||n;if(r=parseFloat(r),l.ctx||d(),typeof r<"u"&&r>=0&&r<=1){if(l._volume=r,l._muted)return l;l.usingWebAudio&&l.masterGain.gain.setValueAtTime(r,n.ctx.currentTime);for(var u=0;u<l._howls.length;u++)if(!l._howls[u]._webAudio)for(var _=l._howls[u]._getSoundIds(),g=0;g<_.length;g++){var b=l._howls[u]._soundById(_[g]);b&&b._node&&(b._node.volume=b._volume*r)}return l}return l._volume},mute:function(r){var l=this||n;l.ctx||d(),l._muted=r,l.usingWebAudio&&l.masterGain.gain.setValueAtTime(r?0:l._volume,n.ctx.currentTime);for(var u=0;u<l._howls.length;u++)if(!l._howls[u]._webAudio)for(var _=l._howls[u]._getSoundIds(),g=0;g<_.length;g++){var b=l._howls[u]._soundById(_[g]);b&&b._node&&(b._node.muted=r?!0:b._muted)}return l},stop:function(){for(var r=this||n,l=0;l<r._howls.length;l++)r._howls[l].stop();return r},unload:function(){for(var r=this||n,l=r._howls.length-1;l>=0;l--)r._howls[l].unload();return r.usingWebAudio&&r.ctx&&typeof r.ctx.close<"u"&&(r.ctx.close(),r.ctx=null,d()),r},codecs:function(r){return(this||n)._codecs[r.replace(/^x-/,"")]},_setup:function(){var r=this||n;if(r.state=r.ctx&&r.ctx.state||"suspended",r._autoSuspend(),!r.usingWebAudio)if(typeof Audio<"u")try{var l=new Audio;typeof l.oncanplaythrough>"u"&&(r._canPlayEvent="canplay")}catch{r.noAudio=!0}else r.noAudio=!0;try{var l=new Audio;l.muted&&(r.noAudio=!0)}catch{}return r.noAudio||r._setupCodecs(),r},_setupCodecs:function(){var r=this||n,l=null;try{l=typeof Audio<"u"?new Audio:null}catch{return r}if(!l||typeof l.canPlayType!="function")return r;var u=l.canPlayType("audio/mpeg;").replace(/^no$/,""),_=r._navigator?r._navigator.userAgent:"",g=_.match(/OPR\/(\d+)/g),b=g&&parseInt(g[0].split("/")[1],10)<33,v=_.indexOf("Safari")!==-1&&_.indexOf("Chrome")===-1,T=_.match(/Version\/(.*?) /),F=v&&T&&parseInt(T[1],10)<15;return r._codecs={mp3:!!(!b&&(u||l.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!u,opus:!!l.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(l.canPlayType('audio/wav; codecs="1"')||l.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!l.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!l.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(l.canPlayType("audio/x-m4a;")||l.canPlayType("audio/m4a;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(l.canPlayType("audio/x-m4b;")||l.canPlayType("audio/m4b;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(l.canPlayType("audio/x-mp4;")||l.canPlayType("audio/mp4;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!F&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!F&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!l.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(l.canPlayType("audio/x-flac;")||l.canPlayType("audio/flac;")).replace(/^no$/,"")},r},_unlockAudio:function(){var r=this||n;if(!(r._audioUnlocked||!r.ctx)){r._audioUnlocked=!1,r.autoUnlock=!1,!r._mobileUnloaded&&r.ctx.sampleRate!==44100&&(r._mobileUnloaded=!0,r.unload()),r._scratchBuffer=r.ctx.createBuffer(1,1,22050);var l=function(u){for(;r._html5AudioPool.length<r.html5PoolSize;)try{var _=new Audio;_._unlocked=!0,r._releaseHtml5Audio(_)}catch{r.noAudio=!0;break}for(var g=0;g<r._howls.length;g++)if(!r._howls[g]._webAudio)for(var b=r._howls[g]._getSoundIds(),v=0;v<b.length;v++){var T=r._howls[g]._soundById(b[v]);T&&T._node&&!T._node._unlocked&&(T._node._unlocked=!0,T._node.load())}r._autoResume();var F=r.ctx.createBufferSource();F.buffer=r._scratchBuffer,F.connect(r.ctx.destination),typeof F.start>"u"?F.noteOn(0):F.start(0),typeof r.ctx.resume=="function"&&r.ctx.resume(),F.onended=function(){F.disconnect(0),r._audioUnlocked=!0,document.removeEventListener("touchstart",l,!0),document.removeEventListener("touchend",l,!0),document.removeEventListener("click",l,!0),document.removeEventListener("keydown",l,!0);for(var M=0;M<r._howls.length;M++)r._howls[M]._emit("unlock")}};return document.addEventListener("touchstart",l,!0),document.addEventListener("touchend",l,!0),document.addEventListener("click",l,!0),document.addEventListener("keydown",l,!0),r}},_obtainHtml5Audio:function(){var r=this||n;if(r._html5AudioPool.length)return r._html5AudioPool.pop();var l=new Audio().play();return l&&typeof Promise<"u"&&(l instanceof Promise||typeof l.then=="function")&&l.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(r){var l=this||n;return r._unlocked&&l._html5AudioPool.push(r),l},_autoSuspend:function(){var r=this;if(!(!r.autoSuspend||!r.ctx||typeof r.ctx.suspend>"u"||!n.usingWebAudio)){for(var l=0;l<r._howls.length;l++)if(r._howls[l]._webAudio){for(var u=0;u<r._howls[l]._sounds.length;u++)if(!r._howls[l]._sounds[u]._paused)return r}return r._suspendTimer&&clearTimeout(r._suspendTimer),r._suspendTimer=setTimeout(function(){if(r.autoSuspend){r._suspendTimer=null,r.state="suspending";var _=function(){r.state="suspended",r._resumeAfterSuspend&&(delete r._resumeAfterSuspend,r._autoResume())};r.ctx.suspend().then(_,_)}},3e4),r}},_autoResume:function(){var r=this;if(!(!r.ctx||typeof r.ctx.resume>"u"||!n.usingWebAudio))return r.state==="running"&&r.ctx.state!=="interrupted"&&r._suspendTimer?(clearTimeout(r._suspendTimer),r._suspendTimer=null):r.state==="suspended"||r.state==="running"&&r.ctx.state==="interrupted"?(r.ctx.resume().then(function(){r.state="running";for(var l=0;l<r._howls.length;l++)r._howls[l]._emit("resume")}),r._suspendTimer&&(clearTimeout(r._suspendTimer),r._suspendTimer=null)):r.state==="suspending"&&(r._resumeAfterSuspend=!0),r}};var n=new t,o=function(r){var l=this;if(!r.src||r.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}l.init(r)};o.prototype={init:function(r){var l=this;return n.ctx||d(),l._autoplay=r.autoplay||!1,l._format=typeof r.format!="string"?r.format:[r.format],l._html5=r.html5||!1,l._muted=r.mute||!1,l._loop=r.loop||!1,l._pool=r.pool||5,l._preload=typeof r.preload=="boolean"||r.preload==="metadata"?r.preload:!0,l._rate=r.rate||1,l._sprite=r.sprite||{},l._src=typeof r.src!="string"?r.src:[r.src],l._volume=r.volume!==void 0?r.volume:1,l._xhr={method:r.xhr&&r.xhr.method?r.xhr.method:"GET",headers:r.xhr&&r.xhr.headers?r.xhr.headers:null,withCredentials:r.xhr&&r.xhr.withCredentials?r.xhr.withCredentials:!1},l._duration=0,l._state="unloaded",l._sounds=[],l._endTimers={},l._queue=[],l._playLock=!1,l._onend=r.onend?[{fn:r.onend}]:[],l._onfade=r.onfade?[{fn:r.onfade}]:[],l._onload=r.onload?[{fn:r.onload}]:[],l._onloaderror=r.onloaderror?[{fn:r.onloaderror}]:[],l._onplayerror=r.onplayerror?[{fn:r.onplayerror}]:[],l._onpause=r.onpause?[{fn:r.onpause}]:[],l._onplay=r.onplay?[{fn:r.onplay}]:[],l._onstop=r.onstop?[{fn:r.onstop}]:[],l._onmute=r.onmute?[{fn:r.onmute}]:[],l._onvolume=r.onvolume?[{fn:r.onvolume}]:[],l._onrate=r.onrate?[{fn:r.onrate}]:[],l._onseek=r.onseek?[{fn:r.onseek}]:[],l._onunlock=r.onunlock?[{fn:r.onunlock}]:[],l._onresume=[],l._webAudio=n.usingWebAudio&&!l._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(l),l._autoplay&&l._queue.push({event:"play",action:function(){l.play()}}),l._preload&&l._preload!=="none"&&l.load(),l},load:function(){var r=this,l=null;if(n.noAudio){r._emit("loaderror",null,"No audio support.");return}typeof r._src=="string"&&(r._src=[r._src]);for(var u=0;u<r._src.length;u++){var _,g;if(r._format&&r._format[u])_=r._format[u];else{if(g=r._src[u],typeof g!="string"){r._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}_=/^data:audio\/([^;,]+);/i.exec(g),_||(_=/\.([^.]+)$/.exec(g.split("?",1)[0])),_&&(_=_[1].toLowerCase())}if(_||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),_&&n.codecs(_)){l=r._src[u];break}}if(!l){r._emit("loaderror",null,"No codec support for selected audio sources.");return}return r._src=l,r._state="loading",window.location.protocol==="https:"&&l.slice(0,5)==="http:"&&(r._html5=!0,r._webAudio=!1),new s(r),r._webAudio&&a(r),r},play:function(r,l){var u=this,_=null;if(typeof r=="number")_=r,r=null;else{if(typeof r=="string"&&u._state==="loaded"&&!u._sprite[r])return null;if(typeof r>"u"&&(r="__default",!u._playLock)){for(var g=0,b=0;b<u._sounds.length;b++)u._sounds[b]._paused&&!u._sounds[b]._ended&&(g++,_=u._sounds[b]._id);g===1?r=null:_=null}}var v=_?u._soundById(_):u._inactiveSound();if(!v)return null;if(_&&!r&&(r=v._sprite||"__default"),u._state!=="loaded"){v._sprite=r,v._ended=!1;var T=v._id;return u._queue.push({event:"play",action:function(){u.play(T)}}),T}if(_&&!v._paused)return l||u._loadQueue("play"),v._id;u._webAudio&&n._autoResume();var F=Math.max(0,v._seek>0?v._seek:u._sprite[r][0]/1e3),M=Math.max(0,(u._sprite[r][0]+u._sprite[r][1])/1e3-F),G=M*1e3/Math.abs(v._rate),te=u._sprite[r][0]/1e3,ce=(u._sprite[r][0]+u._sprite[r][1])/1e3;v._sprite=r,v._ended=!1;var de=function(){v._paused=!1,v._seek=F,v._start=te,v._stop=ce,v._loop=!!(v._loop||u._sprite[r][2])};if(F>=ce){u._ended(v);return}var B=v._node;if(u._webAudio){var X=function(){u._playLock=!1,de(),u._refreshBuffer(v);var j=v._muted||u._muted?0:v._volume;B.gain.setValueAtTime(j,n.ctx.currentTime),v._playStart=n.ctx.currentTime,typeof B.bufferSource.start>"u"?v._loop?B.bufferSource.noteGrainOn(0,F,86400):B.bufferSource.noteGrainOn(0,F,M):v._loop?B.bufferSource.start(0,F,86400):B.bufferSource.start(0,F,M),G!==1/0&&(u._endTimers[v._id]=setTimeout(u._ended.bind(u,v),G)),l||setTimeout(function(){u._emit("play",v._id),u._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?X():(u._playLock=!0,u.once("resume",X),u._clearTimer(v._id))}else{var Q=function(){B.currentTime=F,B.muted=v._muted||u._muted||n._muted||B.muted,B.volume=v._volume*n.volume(),B.playbackRate=v._rate;try{var j=B.play();if(j&&typeof Promise<"u"&&(j instanceof Promise||typeof j.then=="function")?(u._playLock=!0,de(),j.then(function(){u._playLock=!1,B._unlocked=!0,l?u._loadQueue():u._emit("play",v._id)}).catch(function(){u._playLock=!1,u._emit("playerror",v._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),v._ended=!0,v._paused=!0})):l||(u._playLock=!1,de(),u._emit("play",v._id)),B.playbackRate=v._rate,B.paused){u._emit("playerror",v._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}r!=="__default"||v._loop?u._endTimers[v._id]=setTimeout(u._ended.bind(u,v),G):(u._endTimers[v._id]=function(){u._ended(v),B.removeEventListener("ended",u._endTimers[v._id],!1)},B.addEventListener("ended",u._endTimers[v._id],!1))}catch(ne){u._emit("playerror",v._id,ne)}};B.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(B.src=u._src,B.load());var C=window&&window.ejecta||!B.readyState&&n._navigator.isCocoonJS;if(B.readyState>=3||C)Q();else{u._playLock=!0,u._state="loading";var H=function(){u._state="loaded",Q(),B.removeEventListener(n._canPlayEvent,H,!1)};B.addEventListener(n._canPlayEvent,H,!1),u._clearTimer(v._id)}}return v._id},pause:function(r){var l=this;if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"pause",action:function(){l.pause(r)}}),l;for(var u=l._getSoundIds(r),_=0;_<u.length;_++){l._clearTimer(u[_]);var g=l._soundById(u[_]);if(g&&!g._paused&&(g._seek=l.seek(u[_]),g._rateSeek=0,g._paused=!0,l._stopFade(u[_]),g._node))if(l._webAudio){if(!g._node.bufferSource)continue;typeof g._node.bufferSource.stop>"u"?g._node.bufferSource.noteOff(0):g._node.bufferSource.stop(0),l._cleanBuffer(g._node)}else(!isNaN(g._node.duration)||g._node.duration===1/0)&&g._node.pause();arguments[1]||l._emit("pause",g?g._id:null)}return l},stop:function(r,l){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"stop",action:function(){u.stop(r)}}),u;for(var _=u._getSoundIds(r),g=0;g<_.length;g++){u._clearTimer(_[g]);var b=u._soundById(_[g]);b&&(b._seek=b._start||0,b._rateSeek=0,b._paused=!0,b._ended=!0,u._stopFade(_[g]),b._node&&(u._webAudio?b._node.bufferSource&&(typeof b._node.bufferSource.stop>"u"?b._node.bufferSource.noteOff(0):b._node.bufferSource.stop(0),u._cleanBuffer(b._node)):(!isNaN(b._node.duration)||b._node.duration===1/0)&&(b._node.currentTime=b._start||0,b._node.pause(),b._node.duration===1/0&&u._clearSound(b._node))),l||u._emit("stop",b._id))}return u},mute:function(r,l){var u=this;if(u._state!=="loaded"||u._playLock)return u._queue.push({event:"mute",action:function(){u.mute(r,l)}}),u;if(typeof l>"u")if(typeof r=="boolean")u._muted=r;else return u._muted;for(var _=u._getSoundIds(l),g=0;g<_.length;g++){var b=u._soundById(_[g]);b&&(b._muted=r,b._interval&&u._stopFade(b._id),u._webAudio&&b._node?b._node.gain.setValueAtTime(r?0:b._volume,n.ctx.currentTime):b._node&&(b._node.muted=n._muted?!0:r),u._emit("mute",b._id))}return u},volume:function(){var r=this,l=arguments,u,_;if(l.length===0)return r._volume;if(l.length===1||l.length===2&&typeof l[1]>"u"){var g=r._getSoundIds(),b=g.indexOf(l[0]);b>=0?_=parseInt(l[0],10):u=parseFloat(l[0])}else l.length>=2&&(u=parseFloat(l[0]),_=parseInt(l[1],10));var v;if(typeof u<"u"&&u>=0&&u<=1){if(r._state!=="loaded"||r._playLock)return r._queue.push({event:"volume",action:function(){r.volume.apply(r,l)}}),r;typeof _>"u"&&(r._volume=u),_=r._getSoundIds(_);for(var T=0;T<_.length;T++)v=r._soundById(_[T]),v&&(v._volume=u,l[2]||r._stopFade(_[T]),r._webAudio&&v._node&&!v._muted?v._node.gain.setValueAtTime(u,n.ctx.currentTime):v._node&&!v._muted&&(v._node.volume=u*n.volume()),r._emit("volume",v._id))}else return v=_?r._soundById(_):r._sounds[0],v?v._volume:0;return r},fade:function(r,l,u,_){var g=this;if(g._state!=="loaded"||g._playLock)return g._queue.push({event:"fade",action:function(){g.fade(r,l,u,_)}}),g;r=Math.min(Math.max(0,parseFloat(r)),1),l=Math.min(Math.max(0,parseFloat(l)),1),u=parseFloat(u),g.volume(r,_);for(var b=g._getSoundIds(_),v=0;v<b.length;v++){var T=g._soundById(b[v]);if(T){if(_||g._stopFade(b[v]),g._webAudio&&!T._muted){var F=n.ctx.currentTime,M=F+u/1e3;T._volume=r,T._node.gain.setValueAtTime(r,F),T._node.gain.linearRampToValueAtTime(l,M)}g._startFadeInterval(T,r,l,u,b[v],typeof _>"u")}}return g},_startFadeInterval:function(r,l,u,_,g,b){var v=this,T=l,F=u-l,M=Math.abs(F/.01),G=Math.max(4,M>0?_/M:_),te=Date.now();r._fadeTo=u,r._interval=setInterval(function(){var ce=(Date.now()-te)/_;te=Date.now(),T+=F*ce,T=Math.round(T*100)/100,F<0?T=Math.max(u,T):T=Math.min(u,T),v._webAudio?r._volume=T:v.volume(T,r._id,!0),b&&(v._volume=T),(u<l&&T<=u||u>l&&T>=u)&&(clearInterval(r._interval),r._interval=null,r._fadeTo=null,v.volume(u,r._id),v._emit("fade",r._id))},G)},_stopFade:function(r){var l=this,u=l._soundById(r);return u&&u._interval&&(l._webAudio&&u._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(u._interval),u._interval=null,l.volume(u._fadeTo,r),u._fadeTo=null,l._emit("fade",r)),l},loop:function(){var r=this,l=arguments,u,_,g;if(l.length===0)return r._loop;if(l.length===1)if(typeof l[0]=="boolean")u=l[0],r._loop=u;else return g=r._soundById(parseInt(l[0],10)),g?g._loop:!1;else l.length===2&&(u=l[0],_=parseInt(l[1],10));for(var b=r._getSoundIds(_),v=0;v<b.length;v++)g=r._soundById(b[v]),g&&(g._loop=u,r._webAudio&&g._node&&g._node.bufferSource&&(g._node.bufferSource.loop=u,u&&(g._node.bufferSource.loopStart=g._start||0,g._node.bufferSource.loopEnd=g._stop,r.playing(b[v])&&(r.pause(b[v],!0),r.play(b[v],!0)))));return r},rate:function(){var r=this,l=arguments,u,_;if(l.length===0)_=r._sounds[0]._id;else if(l.length===1){var g=r._getSoundIds(),b=g.indexOf(l[0]);b>=0?_=parseInt(l[0],10):u=parseFloat(l[0])}else l.length===2&&(u=parseFloat(l[0]),_=parseInt(l[1],10));var v;if(typeof u=="number"){if(r._state!=="loaded"||r._playLock)return r._queue.push({event:"rate",action:function(){r.rate.apply(r,l)}}),r;typeof _>"u"&&(r._rate=u),_=r._getSoundIds(_);for(var T=0;T<_.length;T++)if(v=r._soundById(_[T]),v){r.playing(_[T])&&(v._rateSeek=r.seek(_[T]),v._playStart=r._webAudio?n.ctx.currentTime:v._playStart),v._rate=u,r._webAudio&&v._node&&v._node.bufferSource?v._node.bufferSource.playbackRate.setValueAtTime(u,n.ctx.currentTime):v._node&&(v._node.playbackRate=u);var F=r.seek(_[T]),M=(r._sprite[v._sprite][0]+r._sprite[v._sprite][1])/1e3-F,G=M*1e3/Math.abs(v._rate);(r._endTimers[_[T]]||!v._paused)&&(r._clearTimer(_[T]),r._endTimers[_[T]]=setTimeout(r._ended.bind(r,v),G)),r._emit("rate",v._id)}}else return v=r._soundById(_),v?v._rate:r._rate;return r},seek:function(){var r=this,l=arguments,u,_;if(l.length===0)r._sounds.length&&(_=r._sounds[0]._id);else if(l.length===1){var g=r._getSoundIds(),b=g.indexOf(l[0]);b>=0?_=parseInt(l[0],10):r._sounds.length&&(_=r._sounds[0]._id,u=parseFloat(l[0]))}else l.length===2&&(u=parseFloat(l[0]),_=parseInt(l[1],10));if(typeof _>"u")return 0;if(typeof u=="number"&&(r._state!=="loaded"||r._playLock))return r._queue.push({event:"seek",action:function(){r.seek.apply(r,l)}}),r;var v=r._soundById(_);if(v)if(typeof u=="number"&&u>=0){var T=r.playing(_);T&&r.pause(_,!0),v._seek=u,v._ended=!1,r._clearTimer(_),!r._webAudio&&v._node&&!isNaN(v._node.duration)&&(v._node.currentTime=u);var F=function(){T&&r.play(_,!0),r._emit("seek",_)};if(T&&!r._webAudio){var M=function(){r._playLock?setTimeout(M,0):F()};setTimeout(M,0)}else F()}else if(r._webAudio){var G=r.playing(_)?n.ctx.currentTime-v._playStart:0,te=v._rateSeek?v._rateSeek-v._seek:0;return v._seek+(te+G*Math.abs(v._rate))}else return v._node.currentTime;return r},playing:function(r){var l=this;if(typeof r=="number"){var u=l._soundById(r);return u?!u._paused:!1}for(var _=0;_<l._sounds.length;_++)if(!l._sounds[_]._paused)return!0;return!1},duration:function(r){var l=this,u=l._duration,_=l._soundById(r);return _&&(u=l._sprite[_._sprite][1]/1e3),u},state:function(){return this._state},unload:function(){for(var r=this,l=r._sounds,u=0;u<l.length;u++)l[u]._paused||r.stop(l[u]._id),r._webAudio||(r._clearSound(l[u]._node),l[u]._node.removeEventListener("error",l[u]._errorFn,!1),l[u]._node.removeEventListener(n._canPlayEvent,l[u]._loadFn,!1),l[u]._node.removeEventListener("ended",l[u]._endFn,!1),n._releaseHtml5Audio(l[u]._node)),delete l[u]._node,r._clearTimer(l[u]._id);var _=n._howls.indexOf(r);_>=0&&n._howls.splice(_,1);var g=!0;for(u=0;u<n._howls.length;u++)if(n._howls[u]._src===r._src||r._src.indexOf(n._howls[u]._src)>=0){g=!1;break}return i&&g&&delete i[r._src],n.noAudio=!1,r._state="unloaded",r._sounds=[],r=null,null},on:function(r,l,u,_){var g=this,b=g["_on"+r];return typeof l=="function"&&b.push(_?{id:u,fn:l,once:_}:{id:u,fn:l}),g},off:function(r,l,u){var _=this,g=_["_on"+r],b=0;if(typeof l=="number"&&(u=l,l=null),l||u)for(b=0;b<g.length;b++){var v=u===g[b].id;if(l===g[b].fn&&v||!l&&v){g.splice(b,1);break}}else if(r)_["_on"+r]=[];else{var T=Object.keys(_);for(b=0;b<T.length;b++)T[b].indexOf("_on")===0&&Array.isArray(_[T[b]])&&(_[T[b]]=[])}return _},once:function(r,l,u){var _=this;return _.on(r,l,u,1),_},_emit:function(r,l,u){for(var _=this,g=_["_on"+r],b=g.length-1;b>=0;b--)(!g[b].id||g[b].id===l||r==="load")&&(setTimeout((function(v){v.call(this,l,u)}).bind(_,g[b].fn),0),g[b].once&&_.off(r,g[b].fn,g[b].id));return _._loadQueue(r),_},_loadQueue:function(r){var l=this;if(l._queue.length>0){var u=l._queue[0];u.event===r&&(l._queue.shift(),l._loadQueue()),r||u.action()}return l},_ended:function(r){var l=this,u=r._sprite;if(!l._webAudio&&r._node&&!r._node.paused&&!r._node.ended&&r._node.currentTime<r._stop)return setTimeout(l._ended.bind(l,r),100),l;var _=!!(r._loop||l._sprite[u][2]);if(l._emit("end",r._id),!l._webAudio&&_&&l.stop(r._id,!0).play(r._id),l._webAudio&&_){l._emit("play",r._id),r._seek=r._start||0,r._rateSeek=0,r._playStart=n.ctx.currentTime;var g=(r._stop-r._start)*1e3/Math.abs(r._rate);l._endTimers[r._id]=setTimeout(l._ended.bind(l,r),g)}return l._webAudio&&!_&&(r._paused=!0,r._ended=!0,r._seek=r._start||0,r._rateSeek=0,l._clearTimer(r._id),l._cleanBuffer(r._node),n._autoSuspend()),!l._webAudio&&!_&&l.stop(r._id,!0),l},_clearTimer:function(r){var l=this;if(l._endTimers[r]){if(typeof l._endTimers[r]!="function")clearTimeout(l._endTimers[r]);else{var u=l._soundById(r);u&&u._node&&u._node.removeEventListener("ended",l._endTimers[r],!1)}delete l._endTimers[r]}return l},_soundById:function(r){for(var l=this,u=0;u<l._sounds.length;u++)if(r===l._sounds[u]._id)return l._sounds[u];return null},_inactiveSound:function(){var r=this;r._drain();for(var l=0;l<r._sounds.length;l++)if(r._sounds[l]._ended)return r._sounds[l].reset();return new s(r)},_drain:function(){var r=this,l=r._pool,u=0,_=0;if(!(r._sounds.length<l)){for(_=0;_<r._sounds.length;_++)r._sounds[_]._ended&&u++;for(_=r._sounds.length-1;_>=0;_--){if(u<=l)return;r._sounds[_]._ended&&(r._webAudio&&r._sounds[_]._node&&r._sounds[_]._node.disconnect(0),r._sounds.splice(_,1),u--)}}},_getSoundIds:function(r){var l=this;if(typeof r>"u"){for(var u=[],_=0;_<l._sounds.length;_++)u.push(l._sounds[_]._id);return u}else return[r]},_refreshBuffer:function(r){var l=this;return r._node.bufferSource=n.ctx.createBufferSource(),r._node.bufferSource.buffer=i[l._src],r._panner?r._node.bufferSource.connect(r._panner):r._node.bufferSource.connect(r._node),r._node.bufferSource.loop=r._loop,r._loop&&(r._node.bufferSource.loopStart=r._start||0,r._node.bufferSource.loopEnd=r._stop||0),r._node.bufferSource.playbackRate.setValueAtTime(r._rate,n.ctx.currentTime),l},_cleanBuffer:function(r){var l=this,u=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!r.bufferSource)return l;if(n._scratchBuffer&&r.bufferSource&&(r.bufferSource.onended=null,r.bufferSource.disconnect(0),u))try{r.bufferSource.buffer=n._scratchBuffer}catch{}return r.bufferSource=null,l},_clearSound:function(r){var l=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);l||(r.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var s=function(r){this._parent=r,this.init()};s.prototype={init:function(){var r=this,l=r._parent;return r._muted=l._muted,r._loop=l._loop,r._volume=l._volume,r._rate=l._rate,r._seek=0,r._paused=!0,r._ended=!0,r._sprite="__default",r._id=++n._counter,l._sounds.push(r),r.create(),r},create:function(){var r=this,l=r._parent,u=n._muted||r._muted||r._parent._muted?0:r._volume;return l._webAudio?(r._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),r._node.gain.setValueAtTime(u,n.ctx.currentTime),r._node.paused=!0,r._node.connect(n.masterGain)):n.noAudio||(r._node=n._obtainHtml5Audio(),r._errorFn=r._errorListener.bind(r),r._node.addEventListener("error",r._errorFn,!1),r._loadFn=r._loadListener.bind(r),r._node.addEventListener(n._canPlayEvent,r._loadFn,!1),r._endFn=r._endListener.bind(r),r._node.addEventListener("ended",r._endFn,!1),r._node.src=l._src,r._node.preload=l._preload===!0?"auto":l._preload,r._node.volume=u*n.volume(),r._node.load()),r},reset:function(){var r=this,l=r._parent;return r._muted=l._muted,r._loop=l._loop,r._volume=l._volume,r._rate=l._rate,r._seek=0,r._rateSeek=0,r._paused=!0,r._ended=!0,r._sprite="__default",r._id=++n._counter,r},_errorListener:function(){var r=this;r._parent._emit("loaderror",r._id,r._node.error?r._node.error.code:0),r._node.removeEventListener("error",r._errorFn,!1)},_loadListener:function(){var r=this,l=r._parent;l._duration=Math.ceil(r._node.duration*10)/10,Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue()),r._node.removeEventListener(n._canPlayEvent,r._loadFn,!1)},_endListener:function(){var r=this,l=r._parent;l._duration===1/0&&(l._duration=Math.ceil(r._node.duration*10)/10,l._sprite.__default[1]===1/0&&(l._sprite.__default[1]=l._duration*1e3),l._ended(r)),r._node.removeEventListener("ended",r._endFn,!1)}};var i={},a=function(r){var l=r._src;if(i[l]){r._duration=i[l].duration,p(r);return}if(/^data:[^;]+;base64,/.test(l)){for(var u=atob(l.split(",")[1]),_=new Uint8Array(u.length),g=0;g<u.length;++g)_[g]=u.charCodeAt(g);f(_.buffer,r)}else{var b=new XMLHttpRequest;b.open(r._xhr.method,l,!0),b.withCredentials=r._xhr.withCredentials,b.responseType="arraybuffer",r._xhr.headers&&Object.keys(r._xhr.headers).forEach(function(v){b.setRequestHeader(v,r._xhr.headers[v])}),b.onload=function(){var v=(b.status+"")[0];if(v!=="0"&&v!=="2"&&v!=="3"){r._emit("loaderror",null,"Failed loading audio file with status: "+b.status+".");return}f(b.response,r)},b.onerror=function(){r._webAudio&&(r._html5=!0,r._webAudio=!1,r._sounds=[],delete i[l],r.load())},c(b)}},c=function(r){try{r.send()}catch{r.onerror()}},f=function(r,l){var u=function(){l._emit("loaderror",null,"Decoding audio data failed.")},_=function(g){g&&l._sounds.length>0?(i[l._src]=g,p(l,g)):u()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(r).then(_).catch(u):n.ctx.decodeAudioData(r,_,u)},p=function(r,l){l&&!r._duration&&(r._duration=l.duration),Object.keys(r._sprite).length===0&&(r._sprite={__default:[0,r._duration*1e3]}),r._state!=="loaded"&&(r._state="loaded",r._emit("load"),r._loadQueue())},d=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var r=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),l=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),u=l?parseInt(l[1],10):null;if(r&&u&&u<9){var _=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!_&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};e.Howler=n,e.Howl=o,typeof qt<"u"?(qt.HowlerGlobal=t,qt.Howler=n,qt.Howl=o,qt.Sound=s):typeof window<"u"&&(window.HowlerGlobal=t,window.Howler=n,window.Howl=o,window.Sound=s)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var o=this;if(!o.ctx||!o.ctx.listener)return o;for(var s=o._howls.length-1;s>=0;s--)o._howls[s].stereo(n);return o},HowlerGlobal.prototype.pos=function(n,o,s){var i=this;if(!i.ctx||!i.ctx.listener)return i;if(o=typeof o!="number"?i._pos[1]:o,s=typeof s!="number"?i._pos[2]:s,typeof n=="number")i._pos=[n,o,s],typeof i.ctx.listener.positionX<"u"?(i.ctx.listener.positionX.setTargetAtTime(i._pos[0],Howler.ctx.currentTime,.1),i.ctx.listener.positionY.setTargetAtTime(i._pos[1],Howler.ctx.currentTime,.1),i.ctx.listener.positionZ.setTargetAtTime(i._pos[2],Howler.ctx.currentTime,.1)):i.ctx.listener.setPosition(i._pos[0],i._pos[1],i._pos[2]);else return i._pos;return i},HowlerGlobal.prototype.orientation=function(n,o,s,i,a,c){var f=this;if(!f.ctx||!f.ctx.listener)return f;var p=f._orientation;if(o=typeof o!="number"?p[1]:o,s=typeof s!="number"?p[2]:s,i=typeof i!="number"?p[3]:i,a=typeof a!="number"?p[4]:a,c=typeof c!="number"?p[5]:c,typeof n=="number")f._orientation=[n,o,s,i,a,c],typeof f.ctx.listener.forwardX<"u"?(f.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),f.ctx.listener.forwardY.setTargetAtTime(o,Howler.ctx.currentTime,.1),f.ctx.listener.forwardZ.setTargetAtTime(s,Howler.ctx.currentTime,.1),f.ctx.listener.upX.setTargetAtTime(i,Howler.ctx.currentTime,.1),f.ctx.listener.upY.setTargetAtTime(a,Howler.ctx.currentTime,.1),f.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):f.ctx.listener.setOrientation(n,o,s,i,a,c);else return p;return f},Howl.prototype.init=(function(n){return function(o){var s=this;return s._orientation=o.orientation||[1,0,0],s._stereo=o.stereo||null,s._pos=o.pos||null,s._pannerAttr={coneInnerAngle:typeof o.coneInnerAngle<"u"?o.coneInnerAngle:360,coneOuterAngle:typeof o.coneOuterAngle<"u"?o.coneOuterAngle:360,coneOuterGain:typeof o.coneOuterGain<"u"?o.coneOuterGain:0,distanceModel:typeof o.distanceModel<"u"?o.distanceModel:"inverse",maxDistance:typeof o.maxDistance<"u"?o.maxDistance:1e4,panningModel:typeof o.panningModel<"u"?o.panningModel:"HRTF",refDistance:typeof o.refDistance<"u"?o.refDistance:1,rolloffFactor:typeof o.rolloffFactor<"u"?o.rolloffFactor:1},s._onstereo=o.onstereo?[{fn:o.onstereo}]:[],s._onpos=o.onpos?[{fn:o.onpos}]:[],s._onorientation=o.onorientation?[{fn:o.onorientation}]:[],n.call(this,o)}})(Howl.prototype.init),Howl.prototype.stereo=function(n,o){var s=this;if(!s._webAudio)return s;if(s._state!=="loaded")return s._queue.push({event:"stereo",action:function(){s.stereo(n,o)}}),s;var i=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof o>"u")if(typeof n=="number")s._stereo=n,s._pos=[n,0,0];else return s._stereo;for(var a=s._getSoundIds(o),c=0;c<a.length;c++){var f=s._soundById(a[c]);if(f)if(typeof n=="number")f._stereo=n,f._pos=[n,0,0],f._node&&(f._pannerAttr.panningModel="equalpower",(!f._panner||!f._panner.pan)&&t(f,i),i==="spatial"?typeof f._panner.positionX<"u"?(f._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),f._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),f._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):f._panner.setPosition(n,0,0):f._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),s._emit("stereo",f._id);else return f._stereo}return s},Howl.prototype.pos=function(n,o,s,i){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"pos",action:function(){a.pos(n,o,s,i)}}),a;if(o=typeof o!="number"?0:o,s=typeof s!="number"?-.5:s,typeof i>"u")if(typeof n=="number")a._pos=[n,o,s];else return a._pos;for(var c=a._getSoundIds(i),f=0;f<c.length;f++){var p=a._soundById(c[f]);if(p)if(typeof n=="number")p._pos=[n,o,s],p._node&&((!p._panner||p._panner.pan)&&t(p,"spatial"),typeof p._panner.positionX<"u"?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(o,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(s,Howler.ctx.currentTime)):p._panner.setPosition(n,o,s)),a._emit("pos",p._id);else return p._pos}return a},Howl.prototype.orientation=function(n,o,s,i){var a=this;if(!a._webAudio)return a;if(a._state!=="loaded")return a._queue.push({event:"orientation",action:function(){a.orientation(n,o,s,i)}}),a;if(o=typeof o!="number"?a._orientation[1]:o,s=typeof s!="number"?a._orientation[2]:s,typeof i>"u")if(typeof n=="number")a._orientation=[n,o,s];else return a._orientation;for(var c=a._getSoundIds(i),f=0;f<c.length;f++){var p=a._soundById(c[f]);if(p)if(typeof n=="number")p._orientation=[n,o,s],p._node&&(p._panner||(p._pos||(p._pos=a._pos||[0,0,-.5]),t(p,"spatial")),typeof p._panner.orientationX<"u"?(p._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.orientationY.setValueAtTime(o,Howler.ctx.currentTime),p._panner.orientationZ.setValueAtTime(s,Howler.ctx.currentTime)):p._panner.setOrientation(n,o,s)),a._emit("orientation",p._id);else return p._orientation}return a},Howl.prototype.pannerAttr=function(){var n=this,o=arguments,s,i,a;if(!n._webAudio)return n;if(o.length===0)return n._pannerAttr;if(o.length===1)if(typeof o[0]=="object")s=o[0],typeof i>"u"&&(s.pannerAttr||(s.pannerAttr={coneInnerAngle:s.coneInnerAngle,coneOuterAngle:s.coneOuterAngle,coneOuterGain:s.coneOuterGain,distanceModel:s.distanceModel,maxDistance:s.maxDistance,refDistance:s.refDistance,rolloffFactor:s.rolloffFactor,panningModel:s.panningModel}),n._pannerAttr={coneInnerAngle:typeof s.pannerAttr.coneInnerAngle<"u"?s.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof s.pannerAttr.coneOuterAngle<"u"?s.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof s.pannerAttr.coneOuterGain<"u"?s.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof s.pannerAttr.distanceModel<"u"?s.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof s.pannerAttr.maxDistance<"u"?s.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof s.pannerAttr.refDistance<"u"?s.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof s.pannerAttr.rolloffFactor<"u"?s.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof s.pannerAttr.panningModel<"u"?s.pannerAttr.panningModel:n._panningModel});else return a=n._soundById(parseInt(o[0],10)),a?a._pannerAttr:n._pannerAttr;else o.length===2&&(s=o[0],i=parseInt(o[1],10));for(var c=n._getSoundIds(i),f=0;f<c.length;f++)if(a=n._soundById(c[f]),a){var p=a._pannerAttr;p={coneInnerAngle:typeof s.coneInnerAngle<"u"?s.coneInnerAngle:p.coneInnerAngle,coneOuterAngle:typeof s.coneOuterAngle<"u"?s.coneOuterAngle:p.coneOuterAngle,coneOuterGain:typeof s.coneOuterGain<"u"?s.coneOuterGain:p.coneOuterGain,distanceModel:typeof s.distanceModel<"u"?s.distanceModel:p.distanceModel,maxDistance:typeof s.maxDistance<"u"?s.maxDistance:p.maxDistance,refDistance:typeof s.refDistance<"u"?s.refDistance:p.refDistance,rolloffFactor:typeof s.rolloffFactor<"u"?s.rolloffFactor:p.rolloffFactor,panningModel:typeof s.panningModel<"u"?s.panningModel:p.panningModel};var d=a._panner;d||(a._pos||(a._pos=n._pos||[0,0,-.5]),t(a,"spatial"),d=a._panner),d.coneInnerAngle=p.coneInnerAngle,d.coneOuterAngle=p.coneOuterAngle,d.coneOuterGain=p.coneOuterGain,d.distanceModel=p.distanceModel,d.maxDistance=p.maxDistance,d.refDistance=p.refDistance,d.rolloffFactor=p.rolloffFactor,d.panningModel=p.panningModel}return n},Sound.prototype.init=(function(n){return function(){var o=this,s=o._parent;o._orientation=s._orientation,o._stereo=s._stereo,o._pos=s._pos,o._pannerAttr=s._pannerAttr,n.call(this),o._stereo?s.stereo(o._stereo):o._pos&&s.pos(o._pos[0],o._pos[1],o._pos[2],o._id)}})(Sound.prototype.init),Sound.prototype.reset=(function(n){return function(){var o=this,s=o._parent;return o._orientation=s._orientation,o._stereo=s._stereo,o._pos=s._pos,o._pannerAttr=s._pannerAttr,o._stereo?s.stereo(o._stereo):o._pos?s.pos(o._pos[0],o._pos[1],o._pos[2],o._id):o._panner&&(o._panner.disconnect(0),o._panner=void 0,s._refreshBuffer(o)),n.call(this)}})(Sound.prototype.reset);var t=function(n,o){o=o||"spatial",o==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(cr)),cr}var Xa=Ya();const za=["width","height","viewBox","stroke","stroke-width"],Ja=["d"],Za=$e({__name:"ChevronDownIcon",props:{width:{default:128},height:{default:32},strokeWidth:{default:3},inverted:{type:Boolean,default:!1}},setup(e){return(t,n)=>(W(),ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:`0 0 ${t.width} ${t.height}`,fill:"none",stroke:t.inverted?"#c9bfb5":"black","stroke-width":t.strokeWidth,"stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-chevron-down-icon lucide-chevron-down"},[ue("path",{d:`m${t.strokeWidth/2} ${t.strokeWidth/2} ${(t.width-t.strokeWidth)/2} ${t.height-t.strokeWidth} ${(t.width-t.strokeWidth)/2}-${t.height-t.strokeWidth}`},null,8,Ja)],8,za))}}),Qa=["width","height"],eu=$e({__name:"HeadphonesIcon",props:{size:{default:24}},setup(e){return(t,n)=>(W(),ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size,height:t.size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-headphones-icon lucide-headphones"},[...n[0]||(n[0]=[ue("path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"},null,-1)])],8,Qa))}}),tu=["width","height","viewBox","fill"],nu=$e({__name:"PauseBtn",props:{fillColor:{},size:{}},emits:["click"],setup(e){return(t,n)=>(W(),ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size??24,height:t.size??24,viewBox:`0 0 ${t.size??24} ${t.size??24}`,fill:t.fillColor??"white",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-pause-icon lucide-pause cursor-pointer",onClick:n[0]||(n[0]=o=>t.$emit("click"))},[...n[1]||(n[1]=[ue("rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"},null,-1),ue("rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"},null,-1)])],8,tu))}}),ru=["width","height","viewBox","fill"],ou=$e({__name:"PlayBtn",props:{fillColor:{},size:{}},emits:["click"],setup(e){return(t,n)=>(W(),ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size??24,height:t.size??24,viewBox:`0 0 ${t.size??24} ${t.size??24}`,fill:t.fillColor??"white",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-play-icon lucide-play cursor-pointer",onClick:n[0]||(n[0]=o=>t.$emit("click"))},[...n[1]||(n[1]=[ue("path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"},null,-1)])],8,ru))}}),su=["width","height","viewBox","fill"],iu=$e({__name:"VolumeIcon",props:{fillColor:{},size:{}},emits:["click"],setup(e){return(t,n)=>(W(),ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size??24,height:t.size??24,viewBox:`0 0 ${t.size??24} ${t.size??24}`,fill:t.fillColor??"none",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-volume2-icon lucide-volume-2"},[...n[0]||(n[0]=[ue("path",{fill:"white",d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"},null,-1),ue("path",{d:"M16 9a5 5 0 0 1 0 6"},null,-1),ue("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"},null,-1)])],8,su))}}),lu=["width","height","viewBox","fill"],au=$e({__name:"VolumeMuteIcon",props:{fillColor:{},size:{}},emits:["click"],setup(e){return(t,n)=>(W(),ie("svg",{xmlns:"http://www.w3.org/2000/svg",width:t.size??24,height:t.size??24,viewBox:`0 0 ${t.size??24} ${t.size??24}`,fill:t.fillColor??"white",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-volume-off-icon lucide-volume-off"},[...n[0]||(n[0]=[Kl('<path d="M16 9a5 5 0 0 1 .95 2.293"></path><path d="M19.364 5.636a9 9 0 0 1 1.889 9.96"></path><path d="m2 2 20 20"></path><path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"></path><path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686"></path>',5)])],8,lu))}}),uu={class:"flex h-full flex-row items-center justify-center gap-x-4"},cu={class:"triangle-css"},fu={key:0,class:"absolute ml-5 flex h-full max-w-[100px] flex-col justify-center"},du=["value"],pu=$e({__name:"AudioPlayer",props:{src:{}},setup(e,{expose:t}){const n=e,o=pe(.05),s=pe(!1),i=pe(!1);let a=null,c=null;const f=u=>new Xa.Howl({src:[u],loop:!0,volume:o.value,html5:!0}),p=()=>{a&&(a.play(),i.value=!0)},d=()=>{a&&a.pause(),i.value=!1},r=u=>{const _=Number(u.target.value);o.value=_,a&&a.volume(_)},l=(u,_,g=1e3)=>{const v=g/60;let T=0;const F=()=>{T++;const M=T/60;u.volume(o.value*(1-M)),_.volume(o.value*M),T<60?setTimeout(F,v):(u.stop(),u.unload())};F()};return t({play:p,pause:d}),_t(()=>n.src,(u,_)=>{if(!u)return;const g=f(u),b=i.value;a&&_?(c=a,a=g,b&&(g.volume(0),g.play(),l(c,g,2e3),i.value=!0)):(a=g,b&&p())},{immediate:!0}),_t(o,u=>{a&&!c&&a.volume(u)}),fn(()=>{a&&a.unload(),c&&c.unload()}),(u,_)=>(W(),ie("div",uu,[ue("div",cu,[i.value?(W(),De(Le(nu),{key:1,onClick:d})):(W(),De(Le(ou),{key:0,onClick:p}))]),ue("div",{class:"flex h-full flex-row items-center",onMouseover:_[0]||(_[0]=g=>s.value=!0),onMouseleave:_[1]||(_[1]=g=>s.value=!1)},[o.value>0?(W(),De(Le(iu),{key:0})):(W(),De(Le(au),{key:1})),ae(Tn,{name:"volume"},{default:ft(()=>[s.value?(W(),ie("div",fu,[ue("input",{type:"range",min:"0",max:"1",step:"0.01",value:o.value,onInput:r},null,40,du)])):Ct("",!0)]),_:1})],32)]))}}),$t=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n},_u=$t(pu,[["__scopeId","data-v-3e683d19"]]),hu={class:"animated-button-container"},mu=.05,gu=300,vu=$e({__name:"Button",props:{shrink:{type:Boolean,default:!1},inverted:{type:Boolean}},emits:["click"],setup(e){const t=pe(),n=pe("translate(0px, 0px)");let o=0,s=0,i=null;function a(){if(!t.value){n.value="translate(0px, 0px)";return}const f=t.value.getBoundingClientRect(),p=f.left+f.width/2,d=f.top+f.height/2,r=o-p,l=s-d,u=Math.sqrt(r*r+l*l),_=mu/(1+Math.pow(u/gu,2)),g=r*_,b=l*_;n.value=`translate(${g.toFixed(2)}px, ${b.toFixed(2)}px)`}function c(f){o=f.clientX,s=f.clientY,i===null&&(i=requestAnimationFrame(()=>{a(),i=null}))}return jt(()=>{window.addEventListener("mousemove",c,{passive:!0})}),fn(()=>{window.removeEventListener("mousemove",c),i!==null&&cancelAnimationFrame(i)}),(f,p)=>(W(),ie("div",hu,[ue("button",{ref_key:"buttonRef",ref:t,class:nt([{shrink:f.shrink,"border-white text-white!":f.inverted},"animated-button rounded-2xl border-2 border-solid border-[#1a1612] px-8 py-4 text-2xl font-medium"]),style:Et({transform:n.value}),onClick:p[0]||(p[0]=d=>f.$emit("click"))},[ul(f.$slots,"default",{},()=>[p[1]||(p[1]=Ln("Начать",-1))])],6)]))}}),Io=$t(vu,[["__scopeId","data-v-b2e0575f"]]),bu=["id"],yu=$e({__name:"ChooseBtn",props:{id:{}},emits:["click"],setup(e){return(t,n)=>(W(),ie("button",{id:t.id,class:"bg-none text-center text-white select-none",onClick:n[0]||(n[0]=o=>t.$emit("click",t.id))},[ae(Le(Za))],8,bu))}}),bn=["1.1.1 - Сомнения","1.1.2.1 - Память","1.1.2.2.1 - Любовь","1.1.2.2.2 - Обида","1.2.1 - Забвение","1.2.2 - Время","2.2.1 - Боль","2.2.2 - Меланхолия","2.1.1 - Надежда","2.1.2 - Отчаяние"],zs="ENDINGS";function wr(){const e=localStorage.getItem(zs);if(!e)return[];const t=JSON.parse(e);return[...new Set(t)]}function wu(e){localStorage.setItem(zs,JSON.stringify(e))}function Au(e){const t=wr();t.push(e),wu(t)}const Tu=["checked","disabled"],xu=$e({__name:"Bubble",props:fl({size:{default:void 0},locked:{type:Boolean,default:!1}},{checked:{type:Boolean,default:!1},checkedModifiers:{}}),emits:["update:checked"],setup(e){const t=Fl(e,"checked");return(n,o)=>(W(),ie("label",null,[ue("input",{value:"on",name:"dummy",type:"checkbox",class:nt(["bubble",n.size]),checked:t.value,disabled:n.locked},null,10,Tu)]))}}),Eo=$t(xu,[["__scopeId","data-v-2c5c2db1"]]),Su={class:"fixed top-12 flex w-full flex-row justify-between px-2"},Cu={class:"flex flex-col items-center justify-center gap-y-1"},ku={key:0,class:"description cursor-default"},Iu={class:"flex flex-col items-center justify-center gap-y-1"},Eu={key:0,class:"description cursor-default"},$u=$e({__name:"EndingIndicator",setup(e,{expose:t}){const n=pe(wr());t({update:()=>n.value=wr()}),_t(n,s=>console.log(s));const o=s=>s.split("-").at(-1)?.trim();return(s,i)=>(W(),ie("div",Su,[ue("div",Cu,[(W(!0),ie(me,null,Pn(Le(bn).slice(0,Le(bn).length/2),a=>(W(),ie("div",{key:a,class:"goal flex w-full flex-row items-center justify-start gap-x-2"},[ae(Eo,{class:"bubble-wrapper",checked:n.value.includes(a),locked:"",size:"smaller"},null,8,["checked"]),n.value.includes(a)?(W(),ie("p",ku,Sn(o(a)),1)):Ct("",!0)]))),128))]),ue("div",Iu,[(W(!0),ie(me,null,Pn(Le(bn).slice(Le(bn).length/2),a=>(W(),ie("div",{key:a,class:"goal flex w-full flex-row items-center justify-end gap-x-2"},[n.value.includes(a)?(W(),ie("p",Eu,Sn(o(a)),1)):Ct("",!0),ae(Eo,{class:"bubble-wrapper",checked:n.value.includes(a),locked:"",size:"smaller"},null,8,["checked"])]))),128))])]))}}),Mu=$t($u,[["__scopeId","data-v-edfa884c"]]),Pu=["innerHTML"],Ou=$e({__name:"PoemCard",props:{content:{},justify:{default:"justify"},meta:{default:void 0}},setup(e){const t=n=>n.split(`
`).join("<br>");return(n,o)=>(W(),ie("div",{class:nt(["poem-card flex w-full flex-col gap-2",{disappearing:n.meta?.disappearing}])},[ue("p",{class:"h-[20%] rounded-2xl bg-transparent font-semibold",style:Et({"text-align-last":n.justify}),innerHTML:t(n.content)},null,12,Pu)],2))}}),Fu=$t(Ou,[["__scopeId","data-v-0bf9880b"]]),Bu=$e({__name:"ScrollProgress",setup(e){const t=pe(0),n=()=>{const o=document.documentElement.scrollTop,s=document.documentElement.scrollHeight-document.documentElement.clientHeight;t.value=s>0?o/s*100:0};return jt(()=>{window.addEventListener("scroll",n),n();const o=new MutationObserver(()=>{Ot(()=>{n()})});o.observe(document.body,{childList:!0,subtree:!0,attributes:!0,characterData:!0}),window.__scrollProgressObserver=o}),fn(()=>{window.removeEventListener("scroll",n),window.__scrollProgressObserver&&(window.__scrollProgressObserver.disconnect(),delete window.__scrollProgressObserver)}),(o,s)=>(W(),ie("div",{class:"scroll-progress",style:Et({height:t.value+"%"})},null,4))}}),Lu=$t(Bu,[["__scopeId","data-v-e4928b34"]]),he={"(0)Fate":"./mus/(0)Fate.opus","(1)Voyage":"./mus/(1)Voyage.opus","(1_1)Home":"./mus/(1_1)Home.opus","(1_2)Rachel":"./mus/(1_2)Rachel.opus","(1_3)Amberley":"./mus/(1_3)Amberley.opus","(1_4)Promenade":"./mus/(1_4)Promenade.opus","(1_5)Letters":"./mus/(1_5)Letters.opus","(1_6)When the Love Falls":"./mus/(1_6)When the Love Falls.opus","(1_9)Starry Night":"./mus/(1_9)Starry Night.opus","(1_11)Break":"./mus/(1_11)Break.opus","(1_12)Last Choise":"./mus/(1_12)Last Choise.opus","(1_13)Secret":"./mus/(1_13)Secret.opus","(1_14)Hold Me Please":"./mus/(1_14)Hold Me Please.opus","(1_15)Coward":"./mus/(1_15)Coward.opus","(1_16)Malfaiteur":"./mus/(1_16)Malfaiteur.opus","(1_17)Mistake":"./mus/(1_17)Mistake.opus","(1_18)Fatal Mistake":"./mus/(1_18)Fatal Mistake.opus","(1_19)Empathy":"./mus/(1_19)Empathy.opus","(1_20)Décadence":"./mus/(1_20)Décadence.opus","(1_21)Hopefulness":"./mus/(1_21)Hopefulness.opus"};function k(e){return{text:e[0],justify:"left"}}function I(e){return{text:e[0],justify:"right"}}function tn(e){return{text:e[0],meta:{disappearing:!0}}}function Re(e){return typeof e=="string"?e:e.text}function Js(e){return typeof e=="string"?void 0:e.meta}function Ve(e){return typeof e=="string"?void 0:e.justify}const K=(e=void 0,t="center",n={})=>(o,s,i)=>{const a=Re(o),c=Ve(o)??(typeof t=="function"?t(o,s,i):t??"center"),f=Js(o)??(typeof n=="function"?n(o,s,i):n??void 0);return{text:a,visible:!1,hasButton:s==i.length-1,justify:c,newSong:e,meta:f}},Hu=[{id:"beginning",next:"neutral-0",text:`Вчера студент, сегодня – безработный доктор,
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
      И первым делом приобрету-ка я билет к себе домой.`,visible:!1,hasButton:!0,justify:"justify"}],Ar=[`Как сильно это восхищает…
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
  Их уважение заслужить.`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,id:`neutral-${t}`,justify:"center",next:`neutral-${t+1}`})),Ru=[`А тик в ноге никак не хочет
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
  Сегодня я с ней поборюсь… `].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,id:`neutral-${t+Ar.length}`,justify:"center",next:t==n.length-1?[{id:"brave-0",label:"Храбрец",song:he["(1)Voyage"],brigtness:1.2},{id:"fear-0",label:"Страх",song:he["(1_15)Coward"],brigtness:.8}]:`neutral-${t+Ar.length+1}`})),Du=[`…Страх победил. Я снова испугался.
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
  И чувство, будто вот-вот закричу.`].map(K()),Nu=[`Сверну с Флит-Стрит, пока ещё не поздно –
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
  А он надеялся спастись, дурной калека.`].map(K()),ju=[...Du,...Nu].map((e,t,n)=>({...e,id:`fear-${t}`,next:t==n.length-1?[{id:"fear-ignore-0",label:"Плевать",song:he["(1_16)Malfaiteur"],brigtness:.6},{id:"fear-help-0",label:"Помочь",song:he["(1_19)Empathy"],brigtness:1}]:`fear-${t+1}`})),Vu=[`Но я плевать хотел. Его проблемы – мусор.
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
  Что скоро королевство отберёт.`].map(K()),Gu=["<…>",`Каким ты был человеком, таким и остался.
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
Вдруг где-то на дне есть монета?`].map(K()),Wu=[`«Твою ж!…» - я срываюсь на жалобный крик,
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
  Способен ли я убивать?`].map(K()),Ku=[...Vu,...Gu,...Wu].map((e,t,n)=>({...e,id:`fear-ignore-${t}`,next:t==n.length-1?[{id:"fear-ignore-keep-0",label:"Оставлю",song:he["(1_17)Mistake"],brigtness:.4},{id:"fear-ignore-sell-0",label:"Продам",brigtness:.6}]:`fear-ignore-${t+1}`})),Uu=[`Оставлю себе.
  Пусть будет негласной защитой,
  С которой смогу ощущать
  Себя я немножко смелее.
  Теперь лишь остатки продать…`].map(K()),qu=["<…>",`Мир – отвратительное место
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
  След алой крови на платке.`].map(K()),Yu=[`Его страшатся – я питаюсь,
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
  Он был пустым. Я так умён!`].map(K(he["(1_18)Fatal Mistake"])),Xu=["И вдруг я подпрыгнул.","Болью пронзило","где-то в спине. Горячо…","Мысль запоздала – блик-провокатор","дал им сигнал",'"бей в плечо".',"Быстрых шагов пелена","рассосалась.","Пуст и карман, и кошель…","Скальпель упал,","поганец блестящий,","я вслед за ним улетел.","Вот так ирония -","место вокруг","больно знакомое. Точно…","Здесь год назад","бездомный сидел,","а я отказался помочь.","Я постарался подняться","и рухнул.","В мокрой земле обречён","Промокнуть, остаться,","уснуть и затухнуть,","Всевышним я был ли прощён?","И в чём виноват","тот злосчастный вокзал?…","Во всём виноват только я.",tn`И если б мне кто-то`,tn`тогда подсказал,`,tn`я б в поезд спешил, как дитя…`].map(K(void 0,(e,t)=>{if(t%3==0)return"left";if(t%3==1)return"center";if(t%3==2)return"right"})),zu=[...Uu,...qu,...Yu,...Xu].map((e,t,n)=>({...e,id:`fear-ignore-keep-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"2.2.1 - Боль"}]:`fear-ignore-keep-${t+1}`})),Ju=[`Продам поскорей.
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
  Людские души. Ну а в них… Лишь дно.`].map(K()).map((e,t,n)=>({...e,id:`fear-ignore-sell-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"2.2.2 - Меланхолия"}]:`fear-ignore-sell-${t+1}`})),Zu=[`Помочь ему я мог? Не знаю, я не ангел.
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
  И выразил лицом своим отказ.`].map(K()),Qu=[I`«Возьмите. Боль уйдёт на время», —`,`стараясь тише говорить,
  Я сбить пытался его бремя
  И фармацевтику внушить.`,k`«Простите, добрый господин, –
  он просипел в ответ на просьбу, –
  но вы из этих из трясин
  меня не вытащите точно.»`,`Пока я мялся в заблуждениях,
  Пытаясь подобрать слова,
  Мужчина поборол хрипение
  И посмотрел в мои глаза.`,`Я разглядеть в них попытался
  Чужой судьбы тугую нить,
  А видел немощного старца,
  Которого не убедить.`,I`«Я вам оставлю всё равно
  Микстуру. Просто попытайтесь.»`,k`«Я просто слабое звено.
  Уйдите и не возвращайтесь!»`].map(K()),ec=[`Вся искренность его желания
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
  Искать работу буду я.`].map(K(he["(1_20)Décadence"])),tc=["<…>","Полки вновь испещряет","Пыль","А пальто вновь проела","Моль","Разъедает обои","Сырь","На груди лишь одна","Боль.","Я не помню как делать","Вдох","На окне толстым слоем","Смог","И романтик во мне","Сдох","И работу найти не","Смог.","Алкоголем наполнен","Рот","И рассудок мутнеет","Вновь","Календарных не вижу","Дат","Как бы сильно не хмурил","Бровь.","Я в долгах и займах","Утоп","Мне не хочется более","Жить","Из квартиры сколочен","Гроб","Мне приказано в нём","Остыть.","Руки тянутся пойло","Пить","Но я падаю прямо","Вниз","В голове лишь желание","Выть","Но уста издают лишь","Писк."].map(K(void 0,(e,t)=>t>0?t%2==0?"right":"left":"center",{halfWidth:!0})),nc=["Я тянусь и пытаюсь","	Встать","Но скольжу на бумаге.","	Чёрт…","И на помощь мне надо бы","	Звать","Если б не был я так","	Упёрт.","Вдруг рука ощутила","	Письмо","Средь бумаг и подгнивших","	Газет","Оно выглядит так","	Свежо","И следов распаковки","	Нет.","Я пытаюсь наладить","	Взгляд","Поскорее сломать","	Сургуч","«Лунный пансионат,","	Бат.","Для здоровья клиентов","	Ключ.»","Я пытался понять","	Зачем","И всего лишь одно -","	Кому","Назначается этот","	Плен","Оказалось не мне.","	Сглотнул.","Это было письмо","	Другим","Ведь не могут же звать","	Меня","Поработать у них ","	Благим","Ассистирующим ","	Врача."].map(K(void 0,(e,t)=>t%2==1?"right":"left",{halfWidth:!0})),rc=[...Zu,...Qu,...ec,...tc,...nc].map((e,t,n)=>({...e,id:`fear-help-${t}`,next:t==n.length-1?[{id:"fear-help-hope-0",label:"Надежда",song:he["(1_21)Hopefulness"],brigtness:1.2},{id:"fear-help-despair-0",label:"Отчаяние",brigtness:.5}]:`fear-help-${t+1}`})),oc=[`Надежды луч пробил окошко, проник в мои глаза,
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
  Нести спасение и лечить ознобы.`,"И надо лишь немного подождать…"].map(K()),sc=["<…>",`…Свой уголок, свой кабинет, кровать.
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
  ход времени и жизни обратить…`].map(K()),ic=[...oc,...sc].map((e,t,n)=>({...e,id:`fear-help-hope-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"2.1.1 - Надежда"}]:`fear-help-hope-${t+1}`})),lc=["Отчаяние поглощало,","как прежде, так и сейчас","Должно быть письмо опоздало,","а я лишь сильнее увяз","Проклятое крепкое пойло","тянуло меня за собой","С трудом покачнувшись, я понял,","что выбор сейчас небольшой","А выбор стоит между шнапсом","и сидром, и пивом опять","И в мыслях о сим декадансе","стараюсь письмо разорвать","Не вышло – сминаю, бросаю","и плюхаюсь в кресло скорей","Хватаю бутыль, открываю","и телу заметно теплей","Оставлю в бутылке амбиции,","себя перестану жалеть","Продам саквояж медицинский,","чтоб чаще от пойла хмелеть","А раньше хотел я уехать","в надежде хоть что-то найти","И надо ж, какая потеха!","Себя я не смог превзойти.",tn`И в Эмберли скоро билеты`,tn`смогу я приобрести…`].map((e,t,n)=>({text:Re(e),visible:!1,hasButton:t==n.length-1,id:`fear-help-despair-${t}`,justify:t%2==1?"right":"left",meta:Js(e),next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"2.1.2 - Отчаяние"}]:`fear-help-despair-${t+1}`})),ac=[`Храбрец? Отнюдь, я смелый лишь с собою,
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
  Вдали увидел Эмберли…`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,newSong:he["(1_1)Home"],justify:"center"})),uc=["<…>",`Я помню улицу… Я помню этот дом.
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
  Хоть познакомлюсь с новыми людьми.`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,newSong:he["(1_2)Rachel"],justify:"center"})),cc=[`Стучусь… И с замиранием сердца жду ответа.
  Сначала тишина, затем шаги. И вот
  Мне открывает дверь… Огня соцветие?
  Я вновь смутился, но наоборот.`,`Передо мной предстала незнакомка,
  Чьи волосы похожи на огонь.
  Их рыжая, как пламя, окаёмка,
  Могла бы растопить заснеженный холм.`,`Я встал прямее и почти промолвил,
  Но утонул в её напористых глазах.
  Они, оттенка грозового неба,
  Будто сковали свою суть на небесах.`,k`«А Вы к кому?» – промолвил голос нежный.`,I`«Я к Вам… Вы Блэк?» – я вопрошал прилежно.`,`И я разрез её зубов увидел белоснежный,
  Протянутый в улыбке безмятежной.`,`Я замолчал. Она молчала,
  Глядела долго, изучала…
  Чтобы в конце толкнуть в плечо
  И разразиться горячо:`,k`«Так это ж ты! Ты что, забылся?
  Мы вместе здесь давно росли…
  А ты чего краснóй покрылся?
  Увидел что-то? Не молчи!»`,`А я молчал. Я был в смятении…
  Неужто правда Рейчел Блэк?
  Она, по скромным ощущениям,
  Не тот же самый человек.`,I`«Привет… Сюрприз! Что ж, неудачно…» –
  я попытался возразить.`,k`«Сюрприз? А выглядишь ты мрачно.
  Неужто Лондон тяготит?»`].map(K()),fc=[`Она меня читала, будто книгу
  Мои эмоции, движения, слова.
  Я улыбнулся, руки ей раскинул…
  Как тишину разбила хрипотца:`,`«Рей, кто пришёл? Там кто-то из соседей?»
  Я понял сразу – то был мистер Блэк.`,k`«Уже иду, дедуль, нас старый друг заметил!»`,"Могла бы объясниться и прямей…",`И пока я пытался разобраться,
  Она понизила свой юный глас.`,k`«Прости, сейчас не время обниматься,
  Мой дедушка проснулся. В другой раз…»`,`Я на крыльце чужом один остался,
  В непонимании холодном я застыл.
  Я не рассчитывал на праздник и фанфары,
  Но встреча с Рейчел поумерила мой пыл.`,`Пусть так – не буду я навязчив,
  К тому же, мистер Блэк – старик.
  И, дом соседей за спиной оставив,
  Я двинулся туда, где жил мясник.`].map((e,t,n)=>({text:Re(e),visible:!1,hasButton:t==n.length-1,newSong:he["(1_3)Amberley"],justify:Ve(e)??"center"})),dc=[`В деревне центр свой – не городская площадь,
  А небольшой пустой квартал.
  Когда-то здесь давно гуляла лошадь,
  Меня на ней ещё отец катал.`,`Все эти улицы пустые
  Не вызывали ничего –
  Соседи будто зауныли,
  Не замечали никого.`,`Что в детстве было бы прекрасным,
  Сейчас казалось никаким.
  Неужто ехал я напрасно
  И страстно прошлым одержим?`,k`«Кого я вижу! Ты вернулся?!
  А как же Лондон? Как семья?»`,`Я только-только обернулся
  И понял – это было зря.`,I`«Ну здравствуй, Том, –
  тяну улыбку, –
  я здесь на время. По делам.»`,`И парень с мерзкою мне миной
  Поймал нить лжи в моих словах.`,k`«Ну что ж… Понятно. Ты надолго?»`,I`«Не знаю точно. Ну а что?»`,k`«У нас еды тут нету толком…»`,"И я забыл, куда я шёл.",I`«Как так? А хлеб? А мясо, птица?»`,k`«А ты не в курсе? Во дурак!
  У нас как год гниёт пшеница,
  А у животных… Вроде рак.»`,`Не мягко Эмберли встречает
  Заблудших сыновей своих.
  Одно лишь радует – у Тома
  С рождения мыслей никаких.`,I`«Понятно… Рак. А миссис Бьянка?»`,k`«А что она? Она ж не врач.
  Чужую помощь, грубиянка,
  Шлёт к чёрту. Ей не до подач!»`,`То верно… Наша скотоводка –
  Упёртей дамы не найти.
  И это, как-никак, находка,
  Вдруг я смогу "еду" спасти?`].map((e,t,n)=>({text:Re(e),visible:!1,hasButton:t==n.length-1,justify:Ve(e)??"center"})),pc=["<…>",k`«Ай, больно надо! Сам-то знаешь
  Как мою Беллочку лечить?»`,I`«Но миссис Бьянка…»`,k`«Прочь! И хватит
  Свои услуги мне лепить.»`,`И дверь захлопнулась. Ну вот…
  Во всяком случае, я пытался.
  Так долго, что весь небосвод
  К оттенку синего склонялся.`,`Вечерний лик моей деревни
  Всегда тоску мне нагонял.
  А флёр романтики осенней
  Все эти чувства укреплял.`].map((e,t,n)=>({text:Re(e),visible:!1,hasButton:t==n.length-1,newSong:he["(1_4)Promenade"],justify:Ve(e)??"center"})),_c=[`И вдруг… Толчок! Опять в плечо,
  На этот раз пришёлся сзади…`,k`«Ты чего хмурый, дурачок?
  Ходил до Бьянки? Чего ради?»`,`Я сразу в голосе узнал
  Девчонку с взглядом озорницы.`,I`«Я просто как-то… Заскучал», –
  cлегка приврал в лицо девице.`,k`«Понятно. Ты прости меня,
  За то что я тогда сбежала.
  Но дедушке день ото дня
  Всё хуже. Память пострадала…»`,`Я поглядел в зеницы Рейчел –
  В них всё ещё играл задор,
  Пусть он уже был менее весел,
  Чем когда мы гуляли в бор.`,I`«Не хочешь в гости? Я один
  Сегодня прибирал свой дом.
  Ну а ещё купил еды…» –
  я пошуршал своим мешком.`,k`«Пытаешься завлечь на ужин?»`,"Я взгляд отвёл и покраснел.",I`«Подумал, что захочешь кушать,
  Да и увидеться хотел.»`,`Весь путь до дома прошёл тихо –
  Она глядела на кусты,
  А я глядел на её лико, –
  Бледнее лунной красоты.`].map((e,t,n)=>({text:Re(e),visible:!1,hasButton:t==n.length-1,justify:Ve(e)??"center"})),hc=[k`«Подумать только… Как же долго
  Я здесь с тобою не была», –
  сказала Рейчел и умолкла.`,I`«А ты здесь что, была одна?»`,`Она же лишь главой качнула
  И поспешила в зал пройти.
  Я вслед прошёл, но полный думы:
  Зачем ей было приходить?`,`Она решила мне помочь,
  Пусть я её и не просил.
  Меня касается рукой –
  И вскоре скромный стол накрыт.`,k`«Ну и зачем ты меня звал?» –
  она глядела мне в глаза.`,"Недолго думая, сказал:",I`«Я по тебе весьма скучал.»`,`С её тончайших нежных губ
  Сорвался маленький смешок.`,k`«Всё также ты на правду скуп…
  Скучал и написать не мог?»`,`Я протянул бокал с вином,
  Которое в шкафу нашёл.`,I`«Я думал только об одном –
  Чтоб твой ответ скорей пришёл.»`,`Её улыбка исказилась,
  А брови резко изумились.`,k`«Ответ? Ты сам не отвечал,
  И сам писать бы мне не стал!»`,`Я в замешательстве опешил.
  О чём она мне говорит?
  Я точно помню, как депешей
  Все письма слал чуть не в кредит!`].map((e,t,n)=>({text:Re(e),visible:!1,hasButton:t==n.length-1,justify:Ve(e)??"center"})),mc=[I`«Постой… Куда ты их носила?»`,k`«К твоим родителям… А там,
  Когда я деньги получила,
  То относила прям в почтамт.»`,`И в миг мне стало дело ясно –
  Сейчас уж некого винить…
  Моя семья, народ потрясный,
  Срезала связи с Рейчел нить.`,I`«Зачем они-… Послушай, Рейчел,
  Я ничего не получал.»`,k`«Но почему?»`,I`«Чтоб не отвлечься,
  Пока я лекции изучал.»`,`В тот миг и ей всё стало ясно.
  У нас в деревне все свои,
  И не доставить письма – грязно,
  Но помешать нам всё ж смогли.`,"Тогда и мы заулыбались.",k`«Я думала, что ты забыл…»`,I`«Да как я мог? А вдруг остались
  Все письма где-то тут вблизи?»`,`Тут поняли друг друга сразу
  И, проглотив своё вино,
  По комнатам мы разбежались,
  Чтобы найти что суждено.`].map((e,t,n)=>({text:Re(e),visible:!1,hasButton:t==n.length-1,justify:Ve(e)??"center"})),gc=[`Пока Рей шастала в кладовке,
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
И поглядела на меня.`,k`«Возьми вино, будь так услужлив,
Ну а затем держись меня.»`].map((e,t,n)=>({text:Re(e),visible:!1,hasButton:t==n.length-1,newSong:he["(1_5)Letters"],justify:Ve(e)??"center"})),vc=["<…>",`Затеи Рейчел мне всегда казались чудом.
    Там, где другой не видел толком ничего,
    Она, в своих манерах тонких, чутких,
    Творила чудеса и волшебство.`,`Вот и сейчас вместо простой ограды,
    Она увидела тот самый редкий шанс,
    Что разорвёт меж нами все преграды
    И писем не дошедших декаданс.`,`Мы провели на каменном заборе
    Часа четыре – крайне поздний час.
    И содержимое всех писем вскоре
    Открылось испытанием для нас.`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,justify:"center"})),bc=[k`«"У нас тут сыро" — ты серьёзно? –
  она старалась сдерживать свой звонкий смех, –
  зачем описывать погоду так детально?
  Тем более, Солнце в Лондоне – есть грех.»`,I`«Я думал, тебе будет это интересно…
  Ты знаешь, там, как наши говорят,
  Нет ничего, что было бы чудесным», —
  я удержал на ней свой робкий взгляд.`,`Она постукала по кирпичам пустой бутылкой,
  Но я сквозь этот звук другой поймал –
  Она тряслась от холода. Вот придурь!
  Совсем забыл, что за окном не май…`,I`«Возьми пальто, – я поспешил накинуть её плечи, –
  мне следовало раньше предложить.»`,k`«Так ты же врач… Возьмёшь, да и залечишь.
  Тебя вообще учили там лечить?…»`,`Я усмехнулся и взглянул на время.
  Как я хотел ещё с ней посидеть…
  Но Рей права – на мне теперь есть бремя, –
  Я не позволю ей здесь заболеть.`,`И в миг, когда она глядела на Луну,
  А отражение я ловил в её глазах,
  Мне диалог наш мысль дал одну…`,I`«Ты ведь с животными в приятельских речах?»`].map((e,t,n)=>({text:Re(e),visible:!1,hasButton:t==n.length-1,justify:Ve(e)??"center"})),yc=["<…>",`Весь новый день провёл я в предвкушении –
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
    Могла с ним слиться, ей лишь захотеть…`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,newSong:he["(1_6)When the Love Falls"],justify:"center"})),wc=["<…>",`Стук в дверь – и я, как окрылённый ворон,
  Бегу скорее Рейчел открывать.
  А там она – с моим пальто, и строго
  Пыталась в руки мне его отдать.`,I`«Оставь себе. Я же вчера ответил,
  Что пока денег ты на куртку соберёшь,
  То в этой тонкой кофте скоченеешь
  И в зиму эту ты не проживёшь.»`,`Я видел, как её уста дрожали,
  То ли от холода, то ль от желания возразить,
  Но мои речи её знатно напужали, –
  Пришлось пальто на плечи ей грузить.`,I`«Ты как-то рано, – я взглянул на время, –
  но не беда. Пройдёмся до Луны.»`,k`«Ты так и не сказал, что за дилемма,
  B которой мои навыки нужны…»`,`Я ей в ответ лишь улыбнулся
  И, дверь закрыв, сошёл с крыльца.
  Слегка помялся, развернулся…`,I`«Возьмёшь меня под руку, а?»`].map((e,t,n)=>({text:Re(e),visible:!1,hasButton:t==n.length-1,justify:Ve(e)??"center"})),Ac=[`Она же тихо ухмыльнулась,
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
  И пуще прежнего тепло…`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,justify:"center"})),Tc=[`Я для себя пытался чувства
    Все эти срочно описать.
    Когда в груди творится буйство,
    А телу хочется плясать?`,k`«Гляди-ка, белка! Вот милашка!» –
  воскликнула одна из них.`,`В душе всё та же обаяшка,
  Чей смысл в радостях мирских.`,I`«Ты знаешь, Рей, мне так приятно
  С тобою снова погулять.
  Когда теперь мы не ребята,
  Вольны с тобой весь мир объять…»`,k`«Весь мир… Со мной? Ты так забавен.»`,I`«Я помню детскую мечту,
  Которой ты делилась ранее.»`,k`«Да я всю жизнь здесь проведу…»`,`Я опустил взгляд и заметил
  В её лице отчаянный жест.`,I`«Всё из-за дедушки?»`,k`«Конечно. И мне ведь это надоест…»`,`Я помню всё – она желала
  Весь мир увидеть, покорить,
  И в небесах она мечтала
  Звезду ярчайшую открыть.`].map((e,t,n)=>({text:Re(e),visible:!1,hasButton:t==n.length-1,justify:Ve(e)??"center"})),xc=[I`«Это не вечно…»`,k`«Знаю, знаю. Не говори мне о смертях…»`,I`«Я ни на что не намекаю,
  Лишь обсуждаем бытия…»`,k`«Я долго думала о ночи.
  Зачем ты снова тут, скажи?»`,"Она меня смутила очень.",I`«Не знаю. Для меня тут жизнь?»`,k`«Скажи мне честно… Ты не доктор,
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
  Но так слова мы сбережём.`].map(K()),Sc=[`Земля сменилася травою,
  Когда мы дальше отошли.
  Трава же сменится листвою –
  И вот мы к клёну подошли.`,k`«Он так огромен, как и раньше.»`,I`«Тебе напомнить, как расти?»`,k`«Ты, дылда, помнишь о реванше?»`,I`«Да я шучу, прости-прости…»`,`Она отвесила мне по лбу
  И отпустила мой рукав.
  Взбежала к клёну вверх по холму,
  Остановилась на корнях.`,k`«Секунд двенадцать было, помнишь?»`,I`«Может не надо?»`,k`«Не труси! Иначе этот клён запомнит,
  Как ты боялся. Засеки!»`,`Я томно выдохнул с часами,
  Поймал глазами её взгляд…
  И она резкими рывками
  Перемахнула веток ряд.`,`Мне стоило не волноваться,
  Но я же врач, а она – Рей,
  Всё норовившая сорваться –
  Не сосчитать потом костей.`,k`«Лови меня!»`,I`«Чего?!»`,k`«Я прыгну!»`,`Я только время подсчитал,
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
  Мы к клёну сели впопыхах.`].map(K()),Cc=["<…>",k`«Что, если мы когда-то сможем
  Все эти звёзды посетить?»`,I`«Тогда, науку приумножив,
  Придётся знания торопить.»`,`Мы просидели так часами –
  Она, прижавшися к плечу,
  Гуляла по небу глазами:`,k`«Как я узнать там всё хочу…»`,I`«И ты узнаешь. Ты же гений, –
  я гладил нежное плечо, –
  и к звёздам через дебри терний,
  все испытания мы пройдём.»`,k`«Мы?»`,I`«Ну конечно. Вспомни детство –
  Что мне тогда сказала ты?»`,k`«"Мы неразлучные соседи,
  Судьбой общей сплетены."»`,`Тогда она заулыбалась.
  Глаза прикрыв, произнесла:`,k`«Тогда всё так легко казалось,
  И вот я здесь. Чего смогла?»`,I`«Ты – вольной птицы проявление,
  Тебе всего лишь захотеть –
  И даже сложное умение
  Освоить сможешь хоть за день.»`,`Я тут же понял, что ей нужно,
  И в мыслях это закрепил.
  Мы посидели у опушки,
  Теперь пора и в хлев сходить.`].map(K()),kc=["<…>",k`«Ты правда думаешь, что сможешь?»`,I`«Ну я хотя бы посмотрю!»`,k`«Звучит всё как-то, ну, не очень.
  Хотя, кому я говорю…»`,`Мы двигаться старались тише –
  Пусть миссис Бьянка дальше спит.
  К хлеву мы подобрались ближе…`,k`«Один вопрос… А как зайти?»`,`Я знал, что Бьянка будет строгой,
  Но на воротах тут замок!
  Пусть для кого-то и морока,
  Но я в таких вещах знаток.`,I`«Я подсажу тебя в окошко,
  А ты мне руку там подашь.»`,k`«Ты что, сдурел? Нам Бьянка бошки
  Открутит, коль хоть звук издашь.»`,`И мы условились на этом.
  Я Рей поднял и подсадил,
  И вскоре мы своим дуэтом
  Попали внутрь.`,k`«Как детьми…»`,"Я сразу дело заприметил:",I`«Так вот, кто Белла… Поглядим.»`,`Сопротивления не встретив,
  Мы с Рей к корове подошли.`].map(K()),Ic=[k`«Она… Большая.»`,I`«Я заметил.»`,k`«Это нормально?»`,I`«Не совсем.
  Всё выглядит как тимпани́я, –
  Не худшая из всех проблем.»`,`Я Рей кивнул – не будем медлить.
  Пока я Беллу обойду,
  Она поможет ту утешить, –
  Я скоро к делу перейду.`,I`«Скорми ей это, успокоит.» –
  я протянул Рей мяты горсть.`,k`«Нас тётя Бьянка точно взмоет…
  Ты не забыл ли её злость?»`,`Я не ответил ей и думал,
  Где же лежит мой троака́р.
  И в этих томных, важных думах,
  Я ворошил свой инвентарь.`,I`«Нашёл. Готовься. Будет больно.»`,k`«Не мне?»`,I`«Конечно не тебе.»`,`И длинной, толстою иглою,
  Пронзил я Беллочке рубец.`].map(K()),Ec=[`Мы ждали жалкие минуты,
  Но даже так хватило их,
  Чтобы живот скота надутый
  Стал в разы меньше и утих.`,`И когда мне осталось только
  На рану спирта наложить,
  Замок с ворот упал тихонько…
  Нам больше нечего таить.`,k`«Вы что творите?! Негодяи!»`,I`«Хоть наложите ей бинты!»`,k`«Злодеи! Бесы! Разгильдяи!» –`,"крик Бьянки был аж за версты.",`Мы с Рейчел долго так бежали,
  Пока крик позади не стих.
  За эту ночь мы так устали…
  Но были счастливы в сей миг.`].map(K()),$c=[k`«Ты плохо на меня влияешь.»`,I`«Серьёзно? Первый раз ведь ты
  Мои хотелки выполняешь.
  Я яблоки тебе тащил!»`,`Мы средь аллеи становились,
  Пока над нами пела ночь.
  Я только что всерьёз влюбился,
  Мне вздохнуть, не превозмочь…`,I`«Спасибо, Рей. Ты просто чудо.»`,k`«Тебе спасибо. Пусть и так,
  Но миссис Бьянка будет рада.
  Ты ведь для нас и не чужак…»`,`Тут я позволил себе только
  Её украдкою обнять.
  Но был шокирован легонько:`,k`«Давай так чаще мы гулять?»`,I`«Давай.»`,`Она прижалась крепче
  Пальто помятым… Мне плевать.
  Я так был счастлив этой встрече,
  Пусть ничего не мог сказать.`,k`«Тогда до встречи?»`,I`«Да, до встречи.»`,k`«Увидимся ещё раз, да?»`,`Я понимал по-человечьи
  Её желания и слова.`,I`«Мой дом – твой дом.»`,k`«Охотно верю.»`,I`«Теперь прощай… Не навсегда.»`,k`«Я завтра ночью…»`,I`«Рейчел, верю.»`,k`«Ну хорошо. Тогда… Пока?»`,`Мы разминулись, попрощавшись,
  И я пошёл один домой.
  В кровати быстро распластался
  И я заснул, как на убой.`].map(K()),Mc=["<…>",`Мне каждый день казался первым,
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
  Чтобы мечту осуществить.`].map(K()),Pc=["<…>",`И я копил. Я знал, он не дешёвый,
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
  А вдруг её мои стремления напугают?`].map(K()),Oc=[...ac,...uc,...cc,...fc,...dc,...pc,..._c,...hc,...mc,...gc,...vc,...bc,...yc,...wc,...Ac,...Tc,...xc,...Sc,...Cc,...kc,...Ic,...Ec,...$c,...Mc,...Pc].map((e,t,n)=>({...e,id:`brave-${t}`,next:t==n.length-1?[{id:"brave-tell-0",label:"Сказать",song:he["(1_9)Starry Night"],brigtness:1.4},{id:"brave-keep-0",label:"Хранить",song:he["(1_13)Secret"],brigtness:1}]:`brave-${t+1}`})),Fc=[`И пусть. Сказать, как есть – не страшно,
  А страшно будет в зеркало смотреть,
  Коль сам всё это не скажу отважно, –
  Остаток жизни буду я жалеть.`,"<…>",I`«Гляди, – я вынул из кармана
  коробку с лентой, – это вот тебе.»`,k`«Подарок? Как-то это странно.
  Мой день рождения же не в ноябре…»`,I`«Рей, ты…»`,k`«Постой. Серьёзно, что ли?»`,I`«Тебе понравилось?»`,k`«Дурак!
  Ты знаешь, сколько это стоит?»`,I`«Это подарок, как-никак.
  Пусть я не очень-то и смыслю
  Во всех космических вещах, –
  Отделаться не мог от мысли,
  Что в этих странных мелочах
  Ты обретёшь мечты начало.»`,k`«С такою вещью? Мечты мало!»`,`И она принялась крутить,
  Вертеть, глядеть и теребить.`,k`«С такою точной астролябией,
  Подвластны всяки расстояния.»`,I`«С такою точной астро-… Что?»`,k`«Неважно. Это хорошо.»`,`И прежде чем вновь погрузиться
  В мир изученья, Рей смягчилась.`,k`«Ты что-то мне хотел сказать.»`,I`«Теперь не знаю, как сказать…»`,k`«Попробуй прямо.»`,I`«Ты прекрасна,
  Великолепна. И напрасно
  Я думал, будто не смогу.
  Я полюбил. Тебя люблю.»`].map(K()),Bc=[`Она же тут же замолчала,
  Металл ногтями ковыряя.
  Её лик мягко исказился…
  И вдруг улыбкою расплылся.`,k`«Ты правда думал, будто я,
  И не замечу ни черта?»`,I`«Так очевидно?»`,k`«Очень, глупый.
  А теперь двинься и послушай…»`,`Послушно сдвинувшись к девице,
  Я на ограде стал к ней ближе.
  И наши красные с ней лица
  Застыли рядом неподвижно.`,`Вдруг – поцелуй. Теплее света,
  По телу дрожью пробежал.
  И если счастье было где-то,
  Его я только что поймал.`,`Мы провели остаток ночи
  Под небосводом и Луной.
  Теперь мы с ней не одиноки,
  Она – мой свет. Я с ней живой.`].map(K()),Lc=["<…>",`Проходит время. И с зимою
  На Рей свалились боль и горе.
  Пришлось ей деда хоронить,
  А я старался рядом быть.`,`И с каждый днём мне всё казалось,
  Будто она мне "так", "никто"…
  Она мне реже улыбалась,
  А я не знал, как ей помочь.`,`Мне в один день пришло видение –
  А может дело всё во мне?
  И это едкое мышление
  Меня сжигало и во сне.`].map(K()),Hc=[...Fc,...Bc,...Lc].map((e,t,n)=>({...e,id:`brave-tell-${t}`,next:t==n.length-1?[{id:"brave-tell-doubt-0",label:"Сомневаться",brigtness:.8},{id:"brave-tell-talk-0",label:"Разговор",song:he["(1_11)Break"],brigtness:1.6}]:`brave-tell-${t+1}`})),Rc=[`Сомнения гложут. Мне не победить их.
  Она ко мне остыла, спору нет.
  На дне бутылок коньяков испитых
  Ищу когда-то будораживший мой свет.`,`Когда я понял, что искать там тщетно,
  Мне передал один знакомый мой сосед,
  Что Рей уехала из дома незаметно.
  Теперь её со мною больше нет.`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-tell-doubt-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.1.1 - Сомнения"}]:`brave-tell-doubt-${t+1}`})),Dc=[`Нам нужен разговор. Расставить точки нужно –
  В делах романтики я пусть и новичок,
  Но я не дам дурному равнодушью
  Травить святого чувства мой глоток.`,"<…>",I`«Рейчел, постой…»`,k`«Чего тебе вновь нужно?»`,I`«Не будь такой строптивой.»`,k`«Почему?»`,I`«Нам следует поговорить…»`,k`«И правда нужно.»`,I`«Что происходит? Я ведь не пойму.»`,`Мы встретились буквально средь аллеи –
  Она была угрюма и брела.
  На холоде её глаза будто синели
  И становились злобными слегка.`,`Её глаза забегали, забылись,
  Но я в душе всё знал. Сей диалог
  Она вынашивала долго. Страхи сбылись –
  На сердце остаётся лишь ожог.`].map(K()),Nc=[k`«Мне кажется, что мы поторопились.»`,I`«Пусть так… И что теперь с того?»`,k`«В моей душе ведь столько накопилось…
  А ты всё молвишь: "Как же ей легко!"»`,I`«Я так не делал.»`,k`«Ну и пусть… Мне больно.
  Я деда потеряла, ну а ты?
  Ты думаешь, что мне хоть чуть помогут
  Красивые, но поздние цветы?»`,I`«И что ты хочешь?»`,k`«Я хочу спокойствия.
  Мне нужно одиночество…»`,I`«Сейчас? Ты будто хочешь показать геройство,
  Забыв про всё, что было бы у нас.»`,k`«Да будет так.» – сказала она строго
  И двинулась к своему дому прочь.`,`Я постоял один ещё немного,
  Стараясь бурный импульс превозмочь.`,`И что теперь? Я думал, будто можно
  Своему чувству приказать молчать.
  Ну а на деле это просто невозможно –
  Хотелось то ли выть, то ли кричать.`].map(K()),jc=[...Dc,...Nc].map((e,t,n)=>({...e,id:`brave-tell-talk-${t}`,next:t==n.length-1?[{id:"brave-tell-talk-leave-0",label:"Уеду",brigtness:.8},{id:"brave-tell-talk-stay-0",label:"Останусь",song:he["(1_12)Last Choise"],brigtness:1.6}]:`brave-tell-talk-${t+1}`})),Vc=[`Уеду в город. Не смогу я больше
  Любить её, но только воздыхать.
  Всё происходит, будто рок нарочный,
  Где о любви мне светит лишь мечтать.`,`Теперь, когда я заимел здесь опыт,
  Мне будет проще там себя найти.
  И, может, меня примет к себе крупный город, –
  Удержит мои чувства взаперти.`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-tell-talk-leave-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.1.2.1 - Память"}]:`brave-tell-talk-leave-${t+1}`})),Gc=[`И пусть мне счастья с Рей не светит –
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
  «Из дома Рейчел кашель громыхал…»`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-tell-talk-stay-${t}`,next:t==n.length-1?[{id:"brave-tell-talk-stay-visit-0",label:"Сходить",brigtness:1.8},{id:"brave-tell-talk-stay-ignore-0",label:"Пройти",brigtness:1.2}]:`brave-tell-talk-stay-${t+1}`})),Wc=[`Я взял лекарства, саквояж… И вышел,
  Пока она сама там не слегла.`,`Я постучался, пусть сначала мялся –
  Пересекались реже мы, как никогда.
  И дверь открылась.`,I`«Я тебя заждался.
  Позволь пройти? Твой кашель – не беда.»`,`Она была болезненной, но бодрой –
  Старалась выглядеть отважно, точно ведь.
  Без лишних слов, она от медосмотра
  Решила не отказываться впредь.`].map(K()),Kc=[I`«Открой свой рот, – командовал я мягко,
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
  На улице скворец засвиристел.`].map(K()),Uc=[...Wc,...Kc].map((e,t,n)=>({...e,id:`brave-tell-talk-stay-visit-${t}`,next:t==n.length-1?[{id:"THE_END",label:"Конец",ending:"1.1.2.2.1 - Любовь"}]:`brave-tell-talk-stay-visit-${t+1}`})),qc=[`И пусть. Не хочет ведь мириться?
  Тогда и мне ей нечего сказать.`,`Домой зайдя, я инструменты вымыл,
  Лекарства подготовил. Новый день,
  Когда я занят бедами чужими,
  Когда я буду вновь лечить людей.`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-tell-talk-stay-ignore-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.1.2.2.2 - Обида"}]:`brave-tell-talk-stay-ignore-${t+1}`})),Yc=[`Хранить. Хранить, не проливая,
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
  А что поделаешь? Зима.`,k`«Нам следует бы попрощаться…»`,"Я обернулся.",I`«Ты куда?»`,`Когда я отпустил соседа,
  Напомнив ему чаще пить,
  Передо мной предстала Рейчел.`,k`«Я еду в город. Еду жить.»`].map(K()),Xc=[`И вот она, стоит пред мною –
  В своём пальто. И хмурый взгляд
  Всё так же красен синевою,
  Пусть горем он теперь объят.`,I`«Тебе не стоит…»`,k`«Может хватит?
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
  На улице всё холодней.`].map(K()),zc=[...Yc,...Xc].map((e,t,n)=>({...e,id:`brave-keep-${t}`,next:t==n.length-1?[{id:"brave-keep-leave-0",label:"Уеду",brigtness:.8},{id:"brave-keep-stay-0",label:"Останусь",song:he["(1_14)Hold Me Please"],brigtness:1.2}]:`brave-keep-${t+1}`})),Jc=[`Уеду прочь. Но не за ней, а дальше,
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
  Может хоть там мне счастье суждено?`].map((e,t,n)=>({text:e,hasButton:t==n.length-1,visible:!1,justify:"center",id:`brave-keep-leave-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.2.1 - Забвение"}]:`brave-keep-leave-${t+1}`})),Zc=[`Останусь здесь. Пусть ей ещё, быть может,
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
Пора впитать мне улицы покой.`].map((e,t,n)=>({text:e,visible:!1,hasButton:t==n.length-1,justify:"center"})),Qc=[`Я выхожу, мороз вдыхаю кожей –
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
  Что от объятий плавило меня.`,I`«Ты здесь?…»`,k`«Молчи. И дай мне насладиться
  Минутами спокойствия в глуши.»`,I`«Пошли домой? Там проще находиться.»`,k`«Я же сказала – просто помолчи.»`,`Я чувствовал, она заплачет скоро,
  Поэтому в ответ её обнял.`,I`«В шкафу подарок. Всё ещё не хочешь?»`,k`«И это так по мне ты заскучал?»`,`Я усмехнулся и погладил Рейчел.
  Я ничего не понял… Ну и пусть.`,I`«Я проведу с тобой хоть всю вечность,
  Чтоб развести собою твою грусть.»`].map(K()),ef=[...Zc,...Qc].map((e,t,n)=>({...e,id:`brave-keep-stay-${t}`,next:t==n.length-1?[{id:"TRY_AGAIN",label:"Попробовать еще раз?",ending:"1.2.2 - Время"}]:`brave-keep-stay-${t+1}`})),tf=[...Hu,...Ar,...Ru,...ju,...Ku,...zu,...ic,...lc,...Ju,...rc,...Oc,...Hc,...Rc,...jc,...Vc,...Gc,...Uc,...qc,...zc,...Jc,...ef],nf=Object.fromEntries(tf.map(e=>[e.id,e]));function At(e){return new Promise(t=>setTimeout(t,e))}const rf={class:"fixed top-0 left-0 z-1 h-10 w-full bg-[image:var(--secondary-gradient)]"},of={class:"flex flex-col items-center p-2"},sf={class:"absolute top-[50%] translate-y-[-50%]"},lf={key:0,class:"absolute top-[50%] flex h-[50vh] w-[50%] -translate-y-1/2 flex-col items-center justify-center"},af=["id"],uf=$e({__name:"App",setup(e){const t=pe(void 0),n=pe(nf),o=St([]),s=pe(),i=pe(),a=pe(),c=St([]),f=St(new Set),p=St(new Set),d=pe(!1),r=pe(!1),l=pe(!1),u=pe(),_=pe(),g=pe(1),b=zn(()=>`brightness(${g.value})`),T={prod:{showNext:900}}.prod,F=qa(),M=async C=>{const H=n.value[C];H.visible=!0,o.push(H),"hasButton"in H&&!H.hasButton?(clearTimeout(t.value),t.value=setTimeout(()=>M(H.next),T.showNext)):t.value=void 0},G=C=>{console.log("handling end"),Au(C),_.value?.update()},te=async()=>{g.value=1;const C=["brave-0","fear-0"],H=u.value?.findIndex(U=>C.map(q=>`block-${q}`).includes(U.id)),j=o.findIndex(U=>C.includes(U.id)),ne=c.findIndex(U=>C.includes(U));if(console.log(u.value?.map(U=>U.id)),console.log(H),!H||H==-1)throw new Error("For some reason i can't find Brave or Fear block");if(j==-1)throw new Error("For some reason i can't find Brave or Fear block");if(ne==-1)throw new Error("For some reason i can't find Brave or Fear choose");c.splice(ne),f.clear(),p.clear(),await Ot();const re=u.value?.[H-1];console.log(re),re?.scrollIntoView({behavior:"smooth",block:"end"}),await At(300),o.splice(j),i.value="./mus/(0)Fate.opus"},ce=async(C,H,j="single",ne=void 0,re=void 0,U=void 0)=>{if(console.log(C),(C=="THE_END"||C=="TRY_AGAIN")&&re!=null){console.log(re),G(re),C=="TRY_AGAIN"&&te();return}if(U&&(g.value=U),!c.includes(C))if(c.push(C),ne&&(i.value=ne),j=="multiple"){const q=`btn-${C}`;console.log("Multiple choice - Looking for button:",q),console.log("Available buttons:",a.value?.map(Fe=>Fe.$el.id));const Ae=a.value?.find(Fe=>Fe.$el.id===q);console.log("Found button:",Ae),Ae?(await At(150),console.log("Scrolling to button"),Ae.$el.scrollIntoView({behavior:"smooth",block:"center"})):console.warn("Button not found for scrolling!"),await At(500),p.add(H),await At(1e3),f.add(C),M(C),await Ot()}else{M(C),await Ot();const q=`btn-${C}`;console.log("Single choice - Looking for button:",q),console.log("Available buttons:",a.value?.map(Fe=>Fe.$el.id));const Ae=a.value?.find(Fe=>Fe.$el.id===q);console.log("Found button:",Ae),Ae?(await At(150),console.log("Scrolling to button"),Ae.$el.scrollIntoView({behavior:"smooth",block:"start"})):console.warn("Button not found for scrolling!")}},de=async()=>{r.value=!0,F.value="Спасибо, что пришли",await At(2e3),r.value=!1,await At(500),F.value="Приятного просмотра",i.value=he["(0)Fate"],n.value.beginning.visible=!0,o.push(n.value.beginning),d.value=!0,await Ot(),s.value?.play(),F.value="Первый и последний выбор"},B=C=>c?.includes(C),X=C=>!C.hasButton||!C.visible?!1:C.next instanceof Array?!C.next.some(H=>f.has(H.id)):!f.has(C.next),Q=()=>g.value<=.6;return jt(()=>{window.scrollTo({top:0})}),(C,H)=>(W(),ie("div",{ref:"body",class:nt(["body hide-scrollbar pt-10",{inverted:Q()}])},[ue("header",rf,[ae(Tn,{name:"fade"},{default:ft(()=>[d.value?(W(),De(_u,{key:0,ref_key:"audioPlayer",ref:s,src:i.value},null,8,["src"])):Ct("",!0)]),_:1})]),ue("main",of,[ue("div",sf,[ae(Tn,{name:"fade",onAfterLeave:de},{default:ft(()=>[l.value?Ct("",!0):(W(),De(Io,{key:0,class:"",onClick:H[0]||(H[0]=j=>l.value=!0)},{default:ft(()=>[...H[1]||(H[1]=[Ln(" Начать ",-1)])]),_:1}))]),_:1})]),ae(Tn,{name:"fade"},{default:ft(()=>[r.value?(W(),ie("div",lf,[H[2]||(H[2]=ue("h2",{class:"p-8"}," Этот сайт активно использует звук для создания подходящей атмосферы. Пожалуйста, используйте наушники. ",-1)),ae(Le(eu),{size:40})])):Ct("",!0)]),_:1}),ae(ka,{name:"fade",tag:"div",class:"content-wrapper"},{default:ft(()=>[(W(!0),ie(me,null,Pn(o,j=>(W(),ie("div",{id:`block-${j.id}`,key:j.id,ref_for:!0,ref_key:"blockElements",ref:u,class:"block-container flex flex-col items-center justify-center"},[ae(Fu,{content:j.text,justify:j.justify,meta:j.meta,class:"p-2"},null,8,["content","justify","meta"]),X(j)?(W(),ie("div",{key:0,class:nt(["choose-holder flex flex-row items-center justify-center gap-x-48 p-8",{collapsing:p.has(j.id)}])},[j.next instanceof Array?(W(!0),ie(me,{key:1},Pn(j.next,ne=>(W(),De(Io,{key:ne.id,id:`btn-${ne.id}`,ref_for:!0,ref_key:"buttons",ref:a,class:nt(["anim-btn",{selected:B(ne.id)}]),inverted:Q(),onClick:re=>ce(ne.id,j.id,"multiple",ne.song,ne.ending,ne.brigtness)},{default:ft(()=>[Ln(Sn(ne.label),1)]),_:2},1032,["id","class","inverted","onClick"]))),128)):(W(),De(yu,{key:0,id:`btn-${j.next}`,ref_for:!0,ref_key:"buttons",ref:a,onClick:ne=>ce(j.next,j.id,"single",j.newSong)},null,8,["id","onClick"]))],2)):Ct("",!0)],8,af))),128))]),_:1}),H[3]||(H[3]=ue("div",{class:"scroll-spacer"},null,-1))]),ae(Mu,{ref_key:"endingIndicator",ref:_},null,512),ue("div",{class:"background",style:Et({filter:b.value})},null,4),ae(Lu)],2))}}),cf=$t(uf,[["__scopeId","data-v-1543cc94"]]);Fa(cf).mount("#app");
