const He=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}};He();function N(){}function Ne(e){return e()}function $e(){return Object.create(null)}function q(e){e.forEach(Ne)}function Ge(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let V;function ce(e,t){return V||(V=document.createElement("a")),V.href=t,e===V.href}function Fe(e){return Object.keys(e).length===0}let ee=!1;function Ve(){ee=!0}function Ke(){ee=!1}function ze(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function We(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let c=0;c<t.length;c++){const f=t[c];f.claim_order!==void 0&&s.push(f)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const c=t[s].claim_order,f=(r>0&&t[n[r]].claim_order<=c?r+1:ze(1,r,b=>t[n[b]].claim_order,c))-1;i[s]=n[f]+1;const u=f+1;n[u]=s,r=Math.max(u,r)}const a=[],o=[];let l=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(a.push(t[s-1]);l>=s;l--)o.push(t[l]);l--}for(;l>=0;l--)o.push(t[l]);a.reverse(),o.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<o.length;s++){for(;c<a.length&&o[s].claim_order>=a[c].claim_order;)c++;const f=c<a.length?a[c]:null;e.insertBefore(o[s],f)}}function $(e,t){if(ee){for(We(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function R(e,t,n){ee&&!n?$(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function p(e){e.parentNode.removeChild(e)}function Pe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function X(){return P(" ")}function J(){return P("")}function Ue(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function d(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function E(e){return Array.from(e.childNodes)}function Ze(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function Oe(e,t,n,i,r=!1){Ze(e);const a=(()=>{for(let o=e.claim_info.last_index;o<e.length;o++){const l=e[o];if(t(l)){const s=n(l);return s===void 0?e.splice(o,1):e[o]=s,r||(e.claim_info.last_index=o),l}}for(let o=e.claim_info.last_index-1;o>=0;o--){const l=e[o];if(t(l)){const s=n(l);return s===void 0?e.splice(o,1):e[o]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=o,l}}return i()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function Xe(e,t,n,i){return Oe(e,r=>r.nodeName===t,r=>{const a=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];n[l.name]||a.push(l.name)}a.forEach(o=>r.removeAttribute(o))},()=>i(t))}function w(e,t,n){return Xe(e,t,n,y)}function z(e,t){return Oe(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>P(t),!0)}function Q(e){return z(e," ")}function Je(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Qe(e,t=document.body){return Array.from(t.querySelectorAll(e))}let S;function j(e){S=e}function Ye(){if(!S)throw new Error("Function called outside component initialization");return S}function et(e){Ye().$$.on_mount.push(e)}const O=[],fe=[],W=[],ue=[],tt=Promise.resolve();let he=!1;function nt(){he||(he=!0,tt.then(je))}function de(e){W.push(e)}function rt(e){ue.push(e)}const le=new Set;let K=0;function je(){const e=S;do{for(;K<O.length;){const t=O[K];K++,j(t),it(t.$$)}for(j(null),O.length=0,K=0;fe.length;)fe.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];le.has(n)||(le.add(n),n())}W.length=0}while(O.length);for(;ue.length;)ue.pop()();he=!1,le.clear(),j(e)}function it(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(de)}}const Z=new Set;let k;function te(){k={r:0,c:[],p:k}}function ne(){k.r||q(k.c),k=k.p}function x(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function C(e,t,n,i){if(e&&e.o){if(Z.has(e))return;Z.add(e),k.c.push(()=>{Z.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function at(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Y(e){e&&e.c()}function ge(e,t){e&&e.l(t)}function B(e,t,n,i){const{fragment:r,on_mount:a,on_destroy:o,after_update:l}=e.$$;r&&r.m(t,n),i||de(()=>{const s=a.map(Ne).filter(Ge);o?o.push(...s):q(s),e.$$.on_mount=[]}),l.forEach(de)}function M(e,t){const n=e.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(e,t){e.$$.dirty[0]===-1&&(O.push(e),nt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,i,r,a,o,l=[-1]){const s=S;j(e);const c=e.$$={fragment:null,ctx:null,props:a,update:N,not_equal:r,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:$e(),dirty:l,skip_bound:!1,root:t.target||s.$$.root};o&&o(c.root);let f=!1;if(c.ctx=n?n(e,t.props||{},(u,b,...g)=>{const A=g.length?g[0]:b;return c.ctx&&r(c.ctx[u],c.ctx[u]=A)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](A),f&&ot(e,u)),b}):[],c.update(),f=!0,q(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){Ve();const u=E(t.target);c.fragment&&c.fragment.l(u),u.forEach(p)}else c.fragment&&c.fragment.c();t.intro&&x(e.$$.fragment),B(e,t.target,t.anchor,t.customElement),Ke(),je()}j(s)}class ie{$destroy(){M(this,1),this.$destroy=N}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!Fe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}var pe=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},H=qe,st=ve,lt=ht,ct=Se,ft=Me,ut=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function ve(e){for(var t=[],n=0,i=0,r="",a;(a=ut.exec(e))!=null;){var o=a[0],l=a[1],s=a.index;if(r+=e.slice(i,s),i=s+o.length,l){r+=l[1];continue}r&&(t.push(r),r="");var c=a[2],f=a[3],u=a[4],b=a[5],g=a[6],A=a[7],L=g==="+"||g==="*",_=g==="?"||g==="*",h=c||"/",v=u||b||(A?".*":"[^"+h+"]+?");t.push({name:f||n++,prefix:c||"",delimiter:h,optional:_,repeat:L,pattern:dt(v)})}return i<e.length&&(r+=e.substr(i)),r&&t.push(r),t}function ht(e){return Se(ve(e))}function Se(e){for(var t=new Array(e.length),n=0;n<e.length;n++)typeof e[n]=="object"&&(t[n]=new RegExp("^"+e[n].pattern+"$"));return function(i){for(var r="",a=i||{},o=0;o<e.length;o++){var l=e[o];if(typeof l=="string"){r+=l;continue}var s=a[l.name],c;if(s==null){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to be defined')}if(pe(s)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received "'+s+'"');if(s.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var f=0;f<s.length;f++){if(c=encodeURIComponent(s[f]),!t[o].test(c))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received "'+c+'"');r+=(f===0?l.prefix:l.delimiter)+c}continue}if(c=encodeURIComponent(s),!t[o].test(c))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+c+'"');r+=l.prefix+c}return r}}function Ee(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function dt(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function be(e,t){return e.keys=t,e}function Be(e){return e.sensitive?"":"i"}function pt(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return be(e,t)}function _t(e,t,n){for(var i=[],r=0;r<e.length;r++)i.push(qe(e[r],t,n).source);var a=new RegExp("(?:"+i.join("|")+")",Be(n));return be(a,t)}function mt(e,t,n){for(var i=ve(e),r=Me(i,n),a=0;a<i.length;a++)typeof i[a]!="string"&&t.push(i[a]);return be(r,t)}function Me(e,t){t=t||{};for(var n=t.strict,i=t.end!==!1,r="",a=e[e.length-1],o=typeof a=="string"&&/\/$/.test(a),l=0;l<e.length;l++){var s=e[l];if(typeof s=="string")r+=Ee(s);else{var c=Ee(s.prefix),f=s.pattern;s.repeat&&(f+="(?:"+c+f+")*"),s.optional?c?f="(?:"+c+"("+f+"))?":f="("+f+")?":f=c+"("+f+")",r+=f}}return n||(r=(o?r.slice(0,-2):r)+"(?:\\/(?=$))?"),i?r+="$":r+=n&&o?"":"(?=\\/|$)",new RegExp("^"+r,Be(t))}function qe(e,t,n){return t=t||[],pe(t)?n||(n={}):(n=t,t=[]),e instanceof RegExp?pt(e,t):pe(e)?_t(e,t,n):mt(e,t,n)}H.parse=st;H.compile=lt;H.tokensToFunction=ct;H.tokensToRegExp=ft;var U=typeof document<"u",T=typeof window<"u",ae=typeof history<"u",gt=typeof process<"u",_e=U&&document.ontouchstart?"touchstart":"click",I=T&&!!(window.history.location||window.location);function m(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}m.prototype.configure=function(e){var t=e||{};this._window=t.window||T&&window,this._decodeURLComponents=t.decodeURLComponents!==!1,this._popstate=t.popstate!==!1&&T,this._click=t.click!==!1&&U,this._hashbang=!!t.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):T&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(_e,this.clickHandler,!1):U&&n.document.removeEventListener(_e,this.clickHandler,!1),this._hashbang&&T&&!ae?n.addEventListener("hashchange",this._onpopstate,!1):T&&n.removeEventListener("hashchange",this._onpopstate,!1)};m.prototype.base=function(e){if(arguments.length===0)return this._base;this._base=e};m.prototype._getBase=function(){var e=this._base;if(e)return e;var t=T&&this._window&&this._window.location;return T&&this._hashbang&&t&&t.protocol==="file:"&&(e=t.pathname),e};m.prototype.strict=function(e){if(arguments.length===0)return this._strict;this._strict=e};m.prototype.start=function(e){var t=e||{};if(this.configure(t),t.dispatch!==!1){this._running=!0;var n;if(I){var i=this._window,r=i.location;this._hashbang&&~r.hash.indexOf("#!")?n=r.hash.substr(2)+r.search:this._hashbang?n=r.search+r.hash:n=r.pathname+r.search+r.hash}this.replace(n,null,!0,t.dispatch)}};m.prototype.stop=function(){if(!!this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(_e,this.clickHandler,!1),T&&e.removeEventListener("popstate",this._onpopstate,!1),T&&e.removeEventListener("hashchange",this._onpopstate,!1)}};m.prototype.show=function(e,t,n,i){var r=new G(e,t,this),a=this.prevContext;return this.prevContext=r,this.current=r.path,n!==!1&&this.dispatch(r,a),r.handled!==!1&&i!==!1&&r.pushState(),r};m.prototype.back=function(e,t){var n=this;if(this.len>0){var i=this._window;ae&&i.history.back(),this.len--}else setTimeout(e?function(){n.show(e,t)}:function(){n.show(n._getBase(),t)})};m.prototype.redirect=function(e,t){var n=this;typeof e=="string"&&typeof t=="string"&&oe.call(this,e,function(i){setTimeout(function(){n.replace(t)},0)}),typeof e=="string"&&typeof t>"u"&&setTimeout(function(){n.replace(e)},0)};m.prototype.replace=function(e,t,n,i){var r=new G(e,t,this),a=this.prevContext;return this.prevContext=r,this.current=r.path,r.init=n,r.save(),i!==!1&&this.dispatch(r,a),r};m.prototype.dispatch=function(e,t){var n=0,i=0,r=this;function a(){var l=r.exits[i++];if(!l)return o();l(t,a)}function o(){var l=r.callbacks[n++];if(e.path!==r.current){e.handled=!1;return}if(!l)return vt.call(r,e);l(e,o)}t?a():o()};m.prototype.exit=function(e,t){if(typeof e=="function")return this.exit("*",e);for(var n=new F(e,null,this),i=1;i<arguments.length;++i)this.exits.push(n.middleware(arguments[i]))};m.prototype.clickHandler=function(e){if(this._which(e)===1&&!(e.metaKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented){var t=e.target,n=e.path||(e.composedPath?e.composedPath():null);if(n){for(var i=0;i<n.length;i++)if(!!n[i].nodeName&&n[i].nodeName.toUpperCase()==="A"&&!!n[i].href){t=n[i];break}}for(;t&&t.nodeName.toUpperCase()!=="A";)t=t.parentNode;if(!(!t||t.nodeName.toUpperCase()!=="A")){var r=typeof t.href=="object"&&t.href.constructor.name==="SVGAnimatedString";if(!(t.hasAttribute("download")||t.getAttribute("rel")==="external")){var a=t.getAttribute("href");if(!(!this._hashbang&&this._samePath(t)&&(t.hash||a==="#"))&&!(a&&a.indexOf("mailto:")>-1)&&!(r?t.target.baseVal:t.target)&&!(!r&&!this.sameOrigin(t.href))){var o=r?t.href.baseVal:t.pathname+t.search+(t.hash||"");o=o[0]!=="/"?"/"+o:o,gt&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var l=o,s=this._getBase();o.indexOf(s)===0&&(o=o.substr(s.length)),this._hashbang&&(o=o.replace("#!","")),!(s&&l===o&&(!I||this._window.location.protocol!=="file:"))&&(e.preventDefault(),this.show(l))}}}}};m.prototype._onpopstate=function(){var e=!1;return T?(U&&document.readyState==="complete"?e=!0:window.addEventListener("load",function(){setTimeout(function(){e=!0},0)}),function(n){if(!!e){var i=this;if(n.state){var r=n.state.path;i.replace(r,n.state)}else if(I){var a=i._window.location;i.show(a.pathname+a.search+a.hash,void 0,void 0,!1)}}}):function(){}}();m.prototype._which=function(e){return e=e||T&&this._window.event,e.which==null?e.button:e.which};m.prototype._toURL=function(e){var t=this._window;if(typeof URL=="function"&&I)return new URL(e,t.location.toString());if(U){var n=t.document.createElement("a");return n.href=e,n}};m.prototype.sameOrigin=function(e){if(!e||!I)return!1;var t=this._toURL(e),n=this._window,i=n.location;return i.protocol===t.protocol&&i.hostname===t.hostname&&(i.port===t.port||i.port===""&&(t.port==80||t.port==443))};m.prototype._samePath=function(e){if(!I)return!1;var t=this._window,n=t.location;return e.pathname===n.pathname&&e.search===n.search};m.prototype._decodeURLEncodedURIComponent=function(e){return typeof e!="string"?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e};function De(){var e=new m;function t(){return oe.apply(e,arguments)}return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=De,Object.defineProperty(t,"len",{get:function(){return e.len},set:function(n){e.len=n}}),Object.defineProperty(t,"current",{get:function(){return e.current},set:function(n){e.current=n}}),t.Context=G,t.Route=F,t}function oe(e,t){if(typeof e=="function")return oe.call(this,"*",e);if(typeof t=="function")for(var n=new F(e,null,this),i=1;i<arguments.length;++i)this.callbacks.push(n.middleware(arguments[i]));else typeof e=="string"?this[typeof t=="string"?"redirect":"show"](e,t):this.start(e)}function vt(e){if(!e.handled){var t,n=this,i=n._window;n._hashbang?t=I&&this._getBase()+i.location.hash.replace("#!",""):t=I&&i.location.pathname+i.location.search,t!==e.canonicalPath&&(n.stop(),e.handled=!1,I&&(i.location.href=e.canonicalPath))}}function bt(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function G(e,t,n){var i=this.page=n||oe,r=i._window,a=i._hashbang,o=i._getBase();e[0]==="/"&&e.indexOf(o)!==0&&(e=o+(a?"#!":"")+e);var l=e.indexOf("?");this.canonicalPath=e;var s=new RegExp("^"+bt(o));if(this.path=e.replace(s,"")||"/",a&&(this.path=this.path.replace("#!","")||"/"),this.title=U&&r.document.title,this.state=t||{},this.state.path=e,this.querystring=~l?i._decodeURLEncodedURIComponent(e.slice(l+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~l?e.slice(0,l):e),this.params={},this.hash="",!a){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=i._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}G.prototype.pushState=function(){var e=this.page,t=e._window,n=e._hashbang;e.len++,ae&&t.history.pushState(this.state,this.title,n&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};G.prototype.save=function(){var e=this.page;ae&&e._window.history.replaceState(this.state,this.title,e._hashbang&&this.path!=="/"?"#!"+this.path:this.canonicalPath)};function F(e,t,n){var i=this.page=n||ye,r=t||{};r.strict=r.strict||i._strict,this.path=e==="*"?"(.*)":e,this.method="GET",this.regexp=H(this.path,this.keys=[],r)}F.prototype.middleware=function(e){var t=this;return function(n,i){if(t.match(n.path,n.params))return n.routePath=t.path,e(n,i);i()}};F.prototype.match=function(e,t){var n=this.keys,i=e.indexOf("?"),r=~i?e.slice(0,i):e,a=this.regexp.exec(decodeURIComponent(r));if(!a)return!1;delete t[0];for(var o=1,l=a.length;o<l;++o){var s=n[o-1],c=this.page._decodeURLEncodedURIComponent(a[o]);(c!==void 0||!hasOwnProperty.call(t,s.name))&&(t[s.name]=c)}return!0};var ye=De(),me=ye,yt=ye;me.default=yt;function wt(e){let t,n,i,r=!e[2]&&Te(e);return{c(){t=y("div"),r&&r.c(),this.h()},l(a){t=w(a,"DIV",{class:!0});var o=E(t);r&&r.l(o),o.forEach(p),this.h()},h(){d(t,"class","tile m-2 col svelte-nvgqo2")},m(a,o){R(a,t,o),r&&r.m(t,null),n||(i=Ue(t,"click",e[3]),n=!0)},p(a,o){a[2]?r&&(r.d(1),r=null):r?r.p(a,o):(r=Te(a),r.c(),r.m(t,null))},d(a){a&&p(t),r&&r.d(),n=!1,i()}}}function xt(e){let t,n,i;return{c(){t=y("div"),this.h()},l(r){t=w(r,"DIV",{class:!0});var a=E(t);a.forEach(p),this.h()},h(){d(t,"class","tile enabled-tile m-2 col svelte-nvgqo2")},m(r,a){R(r,t,a),n||(i=Ue(t,"click",e[3]),n=!0)},p:N,d(r){r&&p(t),n=!1,i()}}}function Te(e){let t,n;return{c(){t=y("img"),this.h()},l(i){t=w(i,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ce(t.src,n=e[1].get(e[0]).contentType+".svg")||d(t,"src",n),d(t,"alt","svg of content"),d(t,"class","mt-2 mb-2 ")},m(i,r){R(i,t,r)},p(i,r){r&3&&!ce(t.src,n=i[1].get(i[0]).contentType+".svg")&&d(t,"src",n)},d(i){i&&p(t)}}}function $t(e){let t;function n(a,o){return a[2]?xt:wt}let i=n(e),r=i(e);return{c(){r.c(),t=J()},l(a){r.l(a),t=J()},m(a,o){r.m(a,o),R(a,t,o)},p(a,[o]){i===(i=n(a))&&r?r.p(a,o):(r.d(1),r=i(a),r&&(r.c(),r.m(t.parentNode,t)))},i:N,o:N,d(a){r.d(a),a&&p(t)}}}function Et(e,t,n){let{tileId:i}=t,r=!0,{data:a}=t,{reloadGame:o=()=>{}}=t;function l(){let s=a.get(i);if(r)return console.log(`Tile id: ${i} is clicked.`),console.log(s.contentType),n(2,r=!1),s.contentType==="bomb"&&o(),s.contentType;console.log(`Tile id: ${i} is not enabled`),console.log(a.get(i))}return console.log(a.get(0)),e.$$set=s=>{"tileId"in s&&n(0,i=s.tileId),"data"in s&&n(1,a=s.data),"reloadGame"in s&&n(4,o=s.reloadGame)},[i,a,r,l,o]}class Tt extends ie{constructor(t){super(),re(this,t,Et,$t,D,{tileId:0,data:1,reloadGame:4})}}function Re(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}function Ce(e,t,n){const i=e.slice();return i[14]=t[n],i[16]=n,i}function Ie(e,t,n){const i=e.slice();return i[14]=t[n],i[18]=n,i}function Ae(e){let t,n;return t=new Tt({props:{reloadGame:e[4],tileId:e[2](),data:e[1]}}),{c(){Y(t.$$.fragment)},l(i){ge(t.$$.fragment,i)},m(i,r){B(t,i,r),n=!0},p:N,i(i){n||(x(t.$$.fragment,i),n=!0)},o(i){C(t.$$.fragment,i),n=!1},d(i){M(t,i)}}}function Le(e){let t,n,i,r=Array(5),a=[];for(let l=0;l<r.length;l+=1)a[l]=Ae(Ie(e,r,l));const o=l=>C(a[l],1,1,()=>{a[l]=null});return{c(){t=y("div");for(let l=0;l<a.length;l+=1)a[l].c();n=X(),this.h()},l(l){t=w(l,"DIV",{class:!0});var s=E(t);for(let c=0;c<a.length;c+=1)a[c].l(s);n=Q(s),s.forEach(p),this.h()},h(){d(t,"class","row")},m(l,s){R(l,t,s);for(let c=0;c<a.length;c+=1)a[c].m(t,null);$(t,n),i=!0},p(l,s){if(s&14){r=Array(5);let c;for(c=0;c<r.length;c+=1){const f=Ie(l,r,c);a[c]?(a[c].p(f,s),x(a[c],1)):(a[c]=Ae(f),a[c].c(),x(a[c],1),a[c].m(t,n))}for(te(),c=r.length;c<a.length;c+=1)o(c);ne()}},i(l){if(!i){for(let s=0;s<r.length;s+=1)x(a[s]);i=!0}},o(l){a=a.filter(Boolean);for(let s=0;s<a.length;s+=1)C(a[s]);i=!1},d(l){l&&p(t),Pe(a,l)}}}function ke(e){let t,n,i=Array(5),r=[];for(let o=0;o<i.length;o+=1)r[o]=Le(Ce(e,i,o));const a=o=>C(r[o],1,1,()=>{r[o]=null});return{c(){t=y("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){t=w(o,"DIV",{id:!0,class:!0});var l=E(t);for(let s=0;s<r.length;s+=1)r[s].l(l);l.forEach(p),this.h()},h(){d(t,"id","box"),d(t,"class","container svelte-1uejkbu")},m(o,l){R(o,t,l);for(let s=0;s<r.length;s+=1)r[s].m(t,null);n=!0},p(o,l){if(l&14){i=Array(5);let s;for(s=0;s<i.length;s+=1){const c=Ce(o,i,s);r[s]?(r[s].p(c,l),x(r[s],1)):(r[s]=Le(c),r[s].c(),x(r[s],1),r[s].m(t,null))}for(te(),s=i.length;s<r.length;s+=1)a(s);ne()}},i(o){if(!n){for(let l=0;l<i.length;l+=1)x(r[l]);n=!0}},o(o){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)C(r[l]);n=!1},d(o){o&&p(t),Pe(r,o)}}}function Rt(e){let t=e[0],n,i,r=ke(e);return{c(){r.c(),n=J()},l(a){r.l(a),n=J()},m(a,o){r.m(a,o),R(a,n,o),i=!0},p(a,[o]){o&1&&D(t,t=a[0])?(te(),C(r,1,1,N),ne(),r=ke(a),r.c(),x(r,1),r.m(n.parentNode,n)):r.p(a,o)},i(a){i||(x(r),i=!0)},o(a){C(r),i=!1},d(a){a&&p(n),r.d(a)}}}function Ct(e,t,n){let i=13,r=12,a=i+r,o=["bomb","gem"],l=new Map,s=new Map,c=0,{gameNumber:f=0}=t;function u(){return c++}function b(){for(let h=0;h<=a-1;h++)l.set(h,{clicked:!1,hasContent:!1,contentType:null}),console.log("adding tile")}function g(){let h=Re(0,1),v=o[h];if(v==="gem"){if(r>0)return r--,v;if(i>0)return i--,v}if(v==="bomb"){if(i>0)return i--,v;if(r>0)return r--,v}}function A(){console.log(l);let h,v;for(;s.size!==a;)h=Re(0,a-1),l.get(h).hasContent===!1&&(v=g(),s.set(h,v),l.set(h,{clicked:!1,hasContent:!0,contentType:v}))}function L(){console.log("creating new game"),c=0,r=12,i=13,l.clear(),s.clear(),b(),A(),n(0,f++,f)}et(async()=>{L()});const _=()=>L();return e.$$set=h=>{"gameNumber"in h&&n(0,f=h.gameNumber)},[f,l,u,L,_]}class It extends ie{constructor(t){super(),re(this,t,Ct,Rt,D,{gameNumber:0})}}function At(e){let t,n,i,r,a,o,l,s,c,f,u,b,g;function A(_){e[1](_)}let L={};return e[0]!==void 0&&(L.gameNumber=e[0]),u=new It({props:L}),fe.push(()=>at(u,"gameNumber",A)),{c(){t=y("div"),n=y("div"),i=y("h1"),r=P("Find the 12 gems"),a=X(),o=y("div"),l=y("p"),s=P("Tries: "),c=P(e[0]),f=X(),Y(u.$$.fragment),this.h()},l(_){t=w(_,"DIV",{class:!0});var h=E(t);n=w(h,"DIV",{class:!0});var v=E(n);i=w(v,"H1",{class:!0});var we=E(i);r=z(we,"Find the 12 gems"),we.forEach(p),v.forEach(p),a=Q(h),o=w(h,"DIV",{class:!0});var xe=E(o);l=w(xe,"P",{class:!0});var se=E(l);s=z(se,"Tries: "),c=z(se,e[0]),se.forEach(p),xe.forEach(p),h.forEach(p),f=Q(_),ge(u.$$.fragment,_),this.h()},h(){d(i,"class","mt-4 col"),d(n,"class","row text-center"),d(l,"class","mt-1 col"),d(o,"class","row text-center"),d(t,"class","container")},m(_,h){R(_,t,h),$(t,n),$(n,i),$(i,r),$(t,a),$(t,o),$(o,l),$(l,s),$(l,c),R(_,f,h),B(u,_,h),g=!0},p(_,[h]){(!g||h&1)&&Je(c,_[0]);const v={};!b&&h&1&&(b=!0,v.gameNumber=_[0],rt(()=>b=!1)),u.$set(v)},i(_){g||(x(u.$$.fragment,_),g=!0)},o(_){C(u.$$.fragment,_),g=!1},d(_){_&&p(t),_&&p(f),M(u,_)}}}function Lt(e,t,n){let i=0;function r(a){i=a,n(0,i)}return[i,r]}class kt extends ie{constructor(t){super(),re(this,t,Lt,At,D,{})}}function Nt(e){let t,n,i,r,a,o,l;var s=e[0];function c(f){return{props:{params:f[1]}}}return s&&(o=new s(c(e))),{c(){t=y("link"),n=y("script"),r=X(),a=y("main"),o&&Y(o.$$.fragment),this.h()},l(f){const u=Qe('[data-svelte="svelte-6n17o"]',document.head);t=w(u,"LINK",{rel:!0,href:!0}),n=w(u,"SCRIPT",{type:!0,src:!0,"data-name":!0,"data-slug":!0,"data-color":!0,"data-emoji":!0,"data-font":!0,"data-text":!0,"data-outline-color":!0,"data-font-color":!0,"data-coffee-color":!0});var b=E(n);b.forEach(p),u.forEach(p),r=Q(f),a=w(f,"MAIN",{class:!0});var g=E(a);o&&ge(o.$$.fragment,g),g.forEach(p),this.h()},h(){d(t,"rel","stylesheet"),d(t,"href","https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"),d(n,"type","text/javascript"),ce(n.src,i="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js")||d(n,"src",i),d(n,"data-name","bmc-button"),d(n,"data-slug","Atophite"),d(n,"data-color","#ffffff"),d(n,"data-emoji",""),d(n,"data-font","Cookie"),d(n,"data-text","Buy me a coffee"),d(n,"data-outline-color","#000000"),d(n,"data-font-color","#000000"),d(n,"data-coffee-color","#FFDD00"),d(a,"class","svelte-19jcrdx")},m(f,u){$(document.head,t),$(document.head,n),R(f,r,u),R(f,a,u),o&&B(o,a,null),l=!0},p(f,[u]){if(s!==(s=f[0])){if(o){te();const b=o;C(b.$$.fragment,1,0,()=>{M(b,1)}),ne()}s?(o=new s(c(f)),Y(o.$$.fragment),x(o.$$.fragment,1),B(o,a,null)):o=null}},i(f){l||(o&&x(o.$$.fragment,f),l=!0)},o(f){o&&C(o.$$.fragment,f),l=!1},d(f){p(t),p(n),f&&p(r),f&&p(a),o&&M(o)}}}function Pt(e,t,n){let i,r;return me("/",a=>n(0,i=kt)),me.start(),[i,r]}class Ut extends ie{constructor(t){super(),re(this,t,Pt,Nt,D,{})}}new Ut({target:document.getElementById("app")});