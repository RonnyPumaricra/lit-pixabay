var ut=Object.defineProperty;var pt=(r,t,e)=>t in r?ut(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var O=(r,t,e)=>(pt(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=window,V=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),Q=new WeakMap;let rt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(V&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Q.set(e,t))}return t}toString(){return this.cssText}};const gt=r=>new rt(typeof r=="string"?r:r+"",void 0,W),E=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new rt(e,r,W)},vt=(r,t)=>{V?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=L.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)})},K=V?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return gt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;const R=window,Z=R.trustedTypes,$t=Z?Z.emptyScript:"",F=R.reactiveElementPolyfillSupport,D={toAttribute(r,t){switch(t){case Boolean:r=r?$t:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},nt=(r,t)=>t!==r&&(t==t||r==r),z={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:nt};let y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=z){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(K(s))}else t!==void 0&&e.push(K(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return vt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=z){var s;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:D).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(n!==void 0&&this._$El!==n){const o=s.getPropertyOptions(n),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:D;this._$El=n,this[n]=d.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||nt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},F==null||F({ReactiveElement:y}),((q=R.reactiveElementVersions)!==null&&q!==void 0?q:R.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const T=window,b=T.trustedTypes,J=b?b.createPolicy("lit-html",{createHTML:r=>r}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,ot="?"+m,mt=`<${ot}>`,A=document,C=(r="")=>A.createComment(r),k=r=>r===null||typeof r!="object"&&typeof r!="function",at=Array.isArray,ft=r=>at(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,X=/>/g,f=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,tt=/"/g,lt=/^(?:script|style|textarea|title)$/i,yt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),$=yt(1),x=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),et=new WeakMap,_=A.createTreeWalker(A,129,null,!1),_t=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":"",o=S;for(let a=0;a<e;a++){const l=r[a];let v,h,c=-1,p=0;for(;p<l.length&&(o.lastIndex=p,h=o.exec(l),h!==null);)p=o.lastIndex,o===S?h[1]==="!--"?o=G:h[1]!==void 0?o=X:h[2]!==void 0?(lt.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=f):h[3]!==void 0&&(o=f):o===f?h[0]===">"?(o=s??S,c=-1):h[1]===void 0?c=-2:(c=o.lastIndex-h[2].length,v=h[1],o=h[3]===void 0?f:h[3]==='"'?tt:Y):o===tt||o===Y?o=f:o===G||o===X?o=S:(o=f,s=void 0);const H=o===f&&r[a+1].startsWith("/>")?" ":"";n+=o===S?l+mt:c>=0?(i.push(v),l.slice(0,c)+"$lit$"+l.slice(c)+m+H):l+m+(c===-2?(i.push(void 0),a):H)}const d=n+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[J!==void 0?J.createHTML(d):d,i]};class P{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const d=t.length-1,a=this.parts,[l,v]=_t(t,e);if(this.el=P.createElement(l,i),_.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=_.nextNode())!==null&&a.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith("$lit$")||c.startsWith(m)){const p=v[o++];if(h.push(c),p!==void 0){const H=s.getAttribute(p.toLowerCase()+"$lit$").split(m),N=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:N[2],strings:H,ctor:N[1]==="."?At:N[1]==="?"?wt:N[1]==="@"?Et:M})}else a.push({type:6,index:n})}for(const c of h)s.removeAttribute(c)}if(lt.test(s.tagName)){const h=s.textContent.split(m),c=h.length-1;if(c>0){s.textContent=b?b.emptyScript:"";for(let p=0;p<c;p++)s.append(h[p],C()),_.nextNode(),a.push({type:2,index:++n});s.append(h[c],C())}}}else if(s.nodeType===8)if(s.data===ot)a.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(m,h+1))!==-1;)a.push({type:7,index:n}),h+=m.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function w(r,t,e=r,i){var s,n,o,d;if(t===x)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const l=k(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(r),a._$AT(r,e,i)),i!==void 0?((o=(d=e)._$Co)!==null&&o!==void 0?o:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=w(r,a._$AS(r,t.values),a,i)),t}class bt{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(i,!0);_.currentNode=n;let o=_.nextNode(),d=0,a=0,l=s[0];for(;l!==void 0;){if(d===l.index){let v;l.type===2?v=new U(o,o.nextSibling,this,t):l.type===1?v=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(v=new St(o,this,t)),this.u.push(v),l=s[++a]}d!==(l==null?void 0:l.index)&&(o=_.nextNode(),d++)}return n}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{constructor(t,e,i,s){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),k(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==x&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ft(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==u&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=P.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.p(i);else{const o=new bt(n,this),d=o.v(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new P(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new U(this.O(C()),this.O(C()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class M{constructor(t,e,i,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=w(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{const d=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=w(this,d[i+a],e,a),l===x&&(l=this._$AH[a]),o||(o=!k(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}o&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class At extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const xt=b?b.emptyScript:"";class wt extends M{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,xt):this.element.removeAttribute(this.name)}}class Et extends M{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=w(this,t,e,0))!==null&&i!==void 0?i:u)===x)return;const s=this._$AH,n=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==u&&(s===u||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class St{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const it=T.litHtmlPolyfillSupport;it==null||it(P,U),((j=T.litHtmlVersions)!==null&&j!==void 0?j:T.litHtmlVersions=[]).push("2.6.1");const Ct=(r,t,e)=>{var i,s;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=n._$litPart$;if(o===void 0){const d=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=o=new U(t.insertBefore(C(),d),d,void 0,e??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B,I;class g extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return x}}g.finalized=!0,g._$litElement$=!0,(B=globalThis.litElementHydrateSupport)===null||B===void 0||B.call(globalThis,{LitElement:g});const st=globalThis.litElementPolyfillSupport;st==null||st({LitElement:g});((I=globalThis.litElementVersions)!==null&&I!==void 0?I:globalThis.litElementVersions=[]).push("3.2.2");const kt=({className:r})=>$`
  <svg
    viewBox="0 0 48 48"
    class="${r}"
    xmlns="http://www.w3.org/2000/svg"
    fill-rule="evenodd"
    clip-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="2">
    <path d="M48 4c0-2.208-1.792-4-4-4H4C1.792 0 0 1.792 0 4v40c0 2.208 1.792 4 4 4h40c2.208 0 4-1.792 4-4V4z" fill="currentColor"></path>
    <path d="M33.268 23.681l4.789 6.129h5.277l-7.82-9.624L42.672 11h-4.963l-4.389 5.743L29.384 11h-4.998l6.583 9.186-7.158 9.624h5.155l4.302-6.129zM14.296 11.009c-2.638.066-4.831.98-6.578 2.741C5.972 15.512 5.066 17.723 5 20.384v16.952h3.694v-7.534h5.602c2.641-.068 4.84-.989 6.599-2.763 1.759-1.773 2.672-3.991 2.739-6.654-.067-2.662-.98-4.873-2.739-6.634-1.759-1.762-3.958-2.675-6.599-2.742zM8.694 26.077v-5.692c.039-1.609.583-2.943 1.634-4.003 1.05-1.059 2.373-1.608 3.968-1.648 1.615.04 2.95.589 4.005 1.648 1.055 1.06 1.601 2.394 1.64 4.003-.039 1.628-.585 2.975-1.64 4.039-1.055 1.063-2.39 1.614-4.005 1.653H8.694z"></path>
  </svg>
`,Pt=$`
  <svg
    viewBox="0 0 700 700"
    xmlns="http://www.w3.org/2000/svg">
  <g>
    <path
      d="m373.33 23.332c-128.33 0-233.33 105-233.33 233.34 0 56 19.832 107.33 52.5 147l-92.168 92.168c-9.332 9.332-9.332 23.332 0 32.668 4.668 5.8281 10.5 8.1641 16.336 8.1641 5.832 0 11.668-2.332 16.332-7l92.168-92.168c40.832 32.668 92.164 52.5 148.16 52.5 128.33 0 233.33-105 233.33-233.33 0.003907-128.34-105-233.34-233.33-233.34zm0 420c-102.67 0-186.67-84-186.67-186.67 0.003907-102.66 84.004-186.66 186.67-186.66 102.67 0 186.67 84 186.67 186.67 0 102.66-84 186.66-186.67 186.66z" />
  </g>
  </svg>
`;class Ut extends g{static get styles(){return E`
      :host {
        /* Layout */
        display:flex;
        align-items:center;
        padding:16px 32px;

        /* Coloring */
        background-color: var(--strong-dark);
        color:var(--very-light);
      }
      
      .logo-wrapper{
        margin-right:auto;
      }

      .logo {
        display:block;
        height: 3rem;
        color: var(--very-light);
        fill: var(--strong-dark);
      }

      a.button {
        display:block;
        padding: .5rem 1rem;
        border-radius: .5rem;
        width: fit-content;
        background: var(--primary);
        
        /* Coloring */
        color: inherit;
        font-weight: 600;
        text-decoration:none;
      }
    `}render(){return $`
      <div class="logo-wrapper">
        <a href="/">
        ${kt({className:"logo"})}
        </a>
      </div>
      <a class="button" href="https://pixabay.com">See original</a>
    `}}customElements.define("floating-header",Ut);class Ht extends g{static get styles(){return E`
      :host {
        flex:1;
        display:block;
        overflow-y: auto;
      }
    `}render(){return $`
    <banner-header></banner-header>
    <search-results></search-results>
    `}}customElements.define("main-content",Ht);class ht extends g{static get styles(){return E`
      :host {
        display:block;
        padding: 168px 32px 32px;
        position:relative;
        background-image:
          linear-gradient(
            var(--strong-dark-translucid-60-bg),
            var(--strong-dark-translucid-20-bg)
          ),
          url("../assets/coast-beach.jpg")
        ;
        background-size: auto, cover;
        background-position-y: auto, bottom;
      }

      :host::before {
        // content:"";
        position: absolute;
        inset: 0;
        // background-image: 
      }

      * {
        margin-top: 0;
      }

      form {
        max-width: 840px;
        margin: auto;
        margin-bottom: 200px;
        isolation:isolate;
      }

      h2 {
        font-size: 2.25rem;
        font-weight: 800;
      }

      .input-wrapper {
        height: 3.5rem;
        border-radius: 2rem;
        padding: 0 1.5rem;

        display: flex;
        align-items: center;
        gap: 20px;
        
        background: var(--very-light);
        color: var(--strong-dark);
      }

      input, button {
        font:inherit;
        outline: none;
        height: 2.5rem;
      }

      input[type="text"] {
        // Reset
        // display: block;
        // width:100%;
        // max-width:100%;
        flex:1;
        padding: .25rem;
        border:none;

        background:transparent;

        // outline: none;
      }
      button {
        padding: 0 1rem;
        border:none;
        border-radius: 1.25rem;

        font-weight: 600;
      }
      button:hover, button:focus {
        background-color: var(--light-grayish);
      }

      .search-wrapper {
        width: 40px;
      }
      svg {
        display: block;
        fill: currentColor;
      }
    `}constructor(){super(),this.query="",this._localQuery=""}handleSubmit(t){t.preventDefault();const e=encodeURIComponent(this.input.value);this.dispatchEvent(new CustomEvent("queryChange",{bubbles:!0,detail:e}))}get input(){var t;return((t=this.renderRoot)==null?void 0:t.querySelector("#query-input"))??null}render(){return $`
      <form @submit=${t=>this.handleSubmit(t)}>
        <h2>Stunning free images & royalty free stock</h2>
        <p>Over 2.7 million+ high quality stock images, videos and music shared by our talented community.</p>
        <div class="input-wrapper">
          <div class="search-wrapper">
          ${Pt}
          </div>
          <input
            type="text"
            placeholder="Search for all images in Pixabay"
            id="query-input"
            autocomplete="off"
          >
          <button>Buscar</button>
        </div>
      </form>
    `}}O(ht,"properties",{query:{attribute:!0,reflect:!0},_localQuery:{state:!0}});customElements.define("banner-header",ht);class Nt extends g{static get styles(){return E`
      :host {
        flex: 1;
        display:block;
        padding: 16px 32px;
        overflow-y: auto;
      }

      .wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        max-width: 1400px;
        margin: auto;
        // grid-template-columns: repeat(5, 1fr);
      }

      .image-cell {
        flex: 1;
        min-width: 300px;

        // background: var(--primary);
      }

      img {
        display: block;
        width:100%;
      }
    `}constructor(){super(),this.query="",this._searchResultsList=[],this._pageLimit=1}static get properties(){return{_searchResultsList:{type:Array,state:!0},_pageLimit:{type:Number,state:!0},query:{attribute:!0},page:{attribute:!0,type:Number}}}update(t){if(t.has("query")||t.has("page")){t.has("query")&&(this.page=1);const e="image_type=photo",i="q="+(this.query??""),s="key=16710011-1c75e80783a37b384b531eba9",n="page="+this.page,o=`https://pixabay.com/api/?${s}&${i}&per_page=24&${e}&${n}&safesearch=true`;console.log(o),fetch(o).then(d=>d.json()).then(d=>{this._searchResultsList=d.hits,this._pageLimit=Math.ceil(d.totalHits/24)||1,this.requestUpdate(),console.log(d)})}super.update()}handlePageChange(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("pageChange",{bubbles:!0,detail:t.detail}))}render(){var e;const t=({id:i,webformatURL:s})=>$`
      <div class="image-cell">
      <img src="${s}" alt="">
      </div>
      `;return $`
    <page-navigation .pageLimit=${this._pageLimit} .page=${this.page} @pageChange=${this.handlePageChange}></page-navigation>
    <div class="wrapper">
      ${(e=this._searchResultsList)==null?void 0:e.map(i=>t(i))}
      </div>
      <page-navigation .pageLimit=${this._pageLimit} .page=${this.page} @pageChange=${this.handlePageChange}></page-navigation>
    `}}customElements.define("search-results",Nt);class dt extends g{static get styles(){return E`
      :host {
        display: flex;
        gap: 16px;
        justify-content: space-between;
        margin: 32px auto;
        max-width: 850px;
        font-size: 1.2rem;
      }

      button {
        padding: .25rem 1rem;
        border: 2px solid var(--strong-dark);
        font: inherit;
        color: inherit;
        background: hsl(10deg 90% 35%);
      }

      button:hover, button:disabled, button:active {
        background-color: var(--strong-dark);
      }

      button:active {
        --strong-dark: var(--primary);
      }

      button:disabled {
        --strong-dark: hsl(0deg 0% 35%);
      }

      .prev-btn {
        background: hsl(10deg 90% 35%);
      }
    `}handleClick(t){return function(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("pageChange",{bubbles:!0,detail:t}))}}render(){return $`
      <button @click=${this.handleClick(-1)} class="prev-btn" ?disabled=${this.page===1}>Previous</button>
      <div class="page-position">${this.page}</div>
      <button @click=${this.handleClick(1)} class="next-btn" ?disabled=${this.page===this.pageLimit}>Next</button>
    `}}O(dt,"properties",{page:{attribute:!0,type:Number},pageLimit:{attribute:!0,type:Number}});customElements.define("page-navigation",dt);class ct extends g{constructor(){super(),this._fetchedList=[],this.query="",this._currentPage=1}static get styles(){return E`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .body-content {
        flex: 1;
        display: block;
        overflow-y: scroll;
      }

      main {
        flex: 1;
        display:block;
        padding: 16px 32px;
      }

      .wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
        max-width: 1400px;
        margin: auto;
      }

      .image-cell {
        flex: 1;
        min-width: 300px;
      }

      img {
        display: block;
        width:100%;
      }
    `}handlePageChange(t){this._currentPage+=t.detail,console.log(this._currentPage)}render(){return $`
    <floating-header></floating-header>
    
    <div class="body-content">
    <!--.query=${this.query}--> 
      <banner-header
        @queryChange=${t=>{this.query=t.detail}}
      ></banner-header>

      <search-results
        query=${this.query}
        .page=${this._currentPage}
        @pageChange=${this.handlePageChange}
      ></search-results>
    `}}O(ct,"properties",{_fetchedList:{state:!0},query:{},_currentPage:{state:!0,type:Number}});customElements.define("app-wrapper",ct);
