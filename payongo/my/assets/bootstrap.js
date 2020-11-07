!function(){"use strict";!function(t){var e=!1;if(!t.forceJURL)try{var n=new URL("b","http://a");n.pathname="c%20d",e="http://a/c%20d"===n.href}catch(v){}if(!e){var r=Object.create(null);r.ftp=21,r.file=0,r.gopher=70,r.http=80,r.https=443,r.ws=80,r.wss=443;var i=Object.create(null);i["%2e"]=".",i[".%2e"]="..",i["%2e."]="..",i["%2e%2e"]="..";var o=void 0,a=/[a-zA-Z]/,s=/[a-zA-Z0-9\+\-\.]/;_.prototype={toString:function(){return this.href},get href(){if(this._isInvalid)return this._url;var t="";return""==this._username&&null==this._password||(t=this._username+(null!=this._password?":"+this._password:"")+"@"),this.protocol+(this._isRelative?"//"+t+this.host:"")+this.pathname+this._query+this._fragment},set href(t){m.call(this),d.call(this,t)},get protocol(){return this._scheme+":"},set protocol(t){this._isInvalid||d.call(this,t+":","scheme start")},get host(){return this._isInvalid?"":this._port?this._host+":"+this._port:this._host},set host(t){!this._isInvalid&&this._isRelative&&d.call(this,t,"host")},get hostname(){return this._host},set hostname(t){!this._isInvalid&&this._isRelative&&d.call(this,t,"hostname")},get port(){return this._port},set port(t){!this._isInvalid&&this._isRelative&&d.call(this,t,"port")},get pathname(){return this._isInvalid?"":this._isRelative?"/"+this._path.join("/"):this._schemeData},set pathname(t){!this._isInvalid&&this._isRelative&&(this._path=[],d.call(this,t,"relative path start"))},get search(){return this._isInvalid||!this._query||"?"==this._query?"":this._query},set search(t){!this._isInvalid&&this._isRelative&&(this._query="?","?"==t[0]&&(t=t.slice(1)),d.call(this,t,"query"))},get hash(){return this._isInvalid||!this._fragment||"#"==this._fragment?"":this._fragment},set hash(t){this._isInvalid||(this._fragment="#","#"==t[0]&&(t=t.slice(1)),d.call(this,t,"fragment"))},get origin(){var t;if(this._isInvalid||!this._scheme)return"";switch(this._scheme){case"data":case"file":case"javascript":case"mailto":return"null"}return(t=this.host)?this._scheme+"://"+t:""}};var c=t.URL;c&&(_.createObjectURL=function(t){return c.createObjectURL.apply(c,arguments)},_.revokeObjectURL=function(t){c.revokeObjectURL(t)}),t.URL=_}function h(t){return void 0!==r[t]}function l(){m.call(this),this._isInvalid=!0}function u(t){return""==t&&l.call(this),t.toLowerCase()}function f(t){var e=t.charCodeAt(0);return e>32&&e<127&&-1==[34,35,60,62,63,96].indexOf(e)?t:encodeURIComponent(t)}function p(t){var e=t.charCodeAt(0);return e>32&&e<127&&-1==[34,35,60,62,96].indexOf(e)?t:encodeURIComponent(t)}function d(t,e,n){var c=e||"scheme start",d=0,m="",_=!1,v=!1;t:for(;(t[d-1]!=o||0==d)&&!this._isInvalid;){var g=t[d];switch(c){case"scheme start":if(!g||!a.test(g)){if(e)break t;m="",c="no scheme";continue}m+=g.toLowerCase(),c="scheme";break;case"scheme":if(g&&s.test(g))m+=g.toLowerCase();else{if(":"!=g){if(e){if(o==g)break t;break t}m="",d=0,c="no scheme";continue}if(this._scheme=m,m="",e)break t;h(this._scheme)&&(this._isRelative=!0),c="file"==this._scheme?"relative":this._isRelative&&n&&n._scheme==this._scheme?"relative or authority":this._isRelative?"authority first slash":"scheme data"}break;case"scheme data":"?"==g?(this._query="?",c="query"):"#"==g?(this._fragment="#",c="fragment"):o!=g&&"\t"!=g&&"\n"!=g&&"\r"!=g&&(this._schemeData+=f(g));break;case"no scheme":if(n&&h(n._scheme)){c="relative";continue}l.call(this);break;case"relative or authority":if("/"!=g||"/"!=t[d+1]){c="relative";continue}c="authority ignore slashes";break;case"relative":if(this._isRelative=!0,"file"!=this._scheme&&(this._scheme=n._scheme),o==g){this._host=n._host,this._port=n._port,this._path=n._path.slice(),this._query=n._query,this._username=n._username,this._password=n._password;break t}if("/"==g||"\\"==g)c="relative slash";else if("?"==g)this._host=n._host,this._port=n._port,this._path=n._path.slice(),this._query="?",this._username=n._username,this._password=n._password,c="query";else{if("#"!=g){var y=t[d+1],b=t[d+2];("file"!=this._scheme||!a.test(g)||":"!=y&&"|"!=y||o!=b&&"/"!=b&&"\\"!=b&&"?"!=b&&"#"!=b)&&(this._host=n._host,this._port=n._port,this._username=n._username,this._password=n._password,this._path=n._path.slice(),this._path.pop()),c="relative path";continue}this._host=n._host,this._port=n._port,this._path=n._path.slice(),this._query=n._query,this._fragment="#",this._username=n._username,this._password=n._password,c="fragment"}break;case"relative slash":if("/"!=g&&"\\"!=g){"file"!=this._scheme&&(this._host=n._host,this._port=n._port,this._username=n._username,this._password=n._password),c="relative path";continue}c="file"==this._scheme?"file host":"authority ignore slashes";break;case"authority first slash":if("/"!=g){c="authority ignore slashes";continue}c="authority second slash";break;case"authority second slash":if(c="authority ignore slashes","/"!=g)continue;break;case"authority ignore slashes":if("/"!=g&&"\\"!=g){c="authority";continue}break;case"authority":if("@"==g){_&&(m+="%40"),_=!0;for(var w=0;w<m.length;w++){var E=m[w];if("\t"!=E&&"\n"!=E&&"\r"!=E)if(":"!=E||null!==this._password){var C=f(E);null!==this._password?this._password+=C:this._username+=C}else this._password=""}m=""}else{if(o==g||"/"==g||"\\"==g||"?"==g||"#"==g){d-=m.length,m="",c="host";continue}m+=g}break;case"file host":if(o==g||"/"==g||"\\"==g||"?"==g||"#"==g){2!=m.length||!a.test(m[0])||":"!=m[1]&&"|"!=m[1]?0==m.length?c="relative path start":(this._host=u.call(this,m),m="",c="relative path start"):c="relative path";continue}"\t"==g||"\n"==g||"\r"==g||(m+=g);break;case"host":case"hostname":if(":"!=g||v){if(o==g||"/"==g||"\\"==g||"?"==g||"#"==g){if(this._host=u.call(this,m),m="",c="relative path start",e)break t;continue}"\t"!=g&&"\n"!=g&&"\r"!=g&&("["==g?v=!0:"]"==g&&(v=!1),m+=g)}else if(this._host=u.call(this,m),m="",c="port","hostname"==e)break t;break;case"port":if(/[0-9]/.test(g))m+=g;else{if(o==g||"/"==g||"\\"==g||"?"==g||"#"==g||e){if(""!=m){var N=parseInt(m,10);N!=r[this._scheme]&&(this._port=N+""),m=""}if(e)break t;c="relative path start";continue}"\t"==g||"\n"==g||"\r"==g||l.call(this)}break;case"relative path start":if(c="relative path","/"!=g&&"\\"!=g)continue;break;case"relative path":var S;if(o!=g&&"/"!=g&&"\\"!=g&&(e||"?"!=g&&"#"!=g))"\t"!=g&&"\n"!=g&&"\r"!=g&&(m+=f(g));else(S=i[m.toLowerCase()])&&(m=S),".."==m?(this._path.pop(),"/"!=g&&"\\"!=g&&this._path.push("")):"."==m&&"/"!=g&&"\\"!=g?this._path.push(""):"."!=m&&("file"==this._scheme&&0==this._path.length&&2==m.length&&a.test(m[0])&&"|"==m[1]&&(m=m[0]+":"),this._path.push(m)),m="","?"==g?(this._query="?",c="query"):"#"==g&&(this._fragment="#",c="fragment");break;case"query":e||"#"!=g?o!=g&&"\t"!=g&&"\n"!=g&&"\r"!=g&&(this._query+=p(g)):(this._fragment="#",c="fragment");break;case"fragment":o!=g&&"\t"!=g&&"\n"!=g&&"\r"!=g&&(this._fragment+=g)}d++}}function m(){this._scheme="",this._schemeData="",this._username="",this._password=null,this._host="",this._port="",this._path=[],this._query="",this._fragment="",this._isInvalid=!1,this._isRelative=!1}function _(t,e){void 0===e||e instanceof _||(e=new _(String(e))),this._url=t,m.call(this);var n=t.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");d.call(this,n,null,e)}}(window),function(){var t=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function e(e){var n=t.has(e);return e=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e),!n&&e}function n(t){var e=t.isConnected;if(void 0!==e)return e;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function r(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function i(t,e,n){n=void 0===n?new Set:n;for(var o=t;o;){if(o.nodeType===Node.ELEMENT_NODE){var a=o;e(a);var s=a.localName;if("link"===s&&"import"===a.getAttribute("rel")){if((o=a.import)instanceof Node&&!n.has(o))for(n.add(o),o=o.firstChild;o;o=o.nextSibling)i(o,e,n);o=r(t,a);continue}if("template"===s){o=r(t,a);continue}if(a=a.__CE_shadowRoot)for(a=a.firstChild;a;a=a.nextSibling)i(a,e,n)}o=o.firstChild?o.firstChild:r(t,o)}}function o(t,e,n){t[e]=n}function a(){this.a=new Map,this.g=new Map,this.c=[],this.f=[],this.b=!1}function s(t,e){t.b&&i(e,function(e){return c(t,e)})}function c(t,e){if(t.b&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.c.length;n++)t.c[n](e);for(n=0;n<t.f.length;n++)t.f[n](e)}}function h(t,e){var n=[];for(i(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var r=n[e];1===r.__CE_state?t.connectedCallback(r):f(t,r)}}function l(t,e){var n=[];for(i(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var r=n[e];1===r.__CE_state&&t.disconnectedCallback(r)}}function u(t,e,n){var r=(n=void 0===n?{}:n).u||new Set,o=n.i||function(e){return f(t,e)},a=[];if(i(e,function(e){if("link"===e.localName&&"import"===e.getAttribute("rel")){var n=e.import;n instanceof Node&&(n.__CE_isImportDocument=!0,n.__CE_hasRegistry=!0),n&&"complete"===n.readyState?n.__CE_documentLoadHandled=!0:e.addEventListener("load",function(){var n=e.import;if(!n.__CE_documentLoadHandled){n.__CE_documentLoadHandled=!0;var i=new Set(r);i.delete(n),u(t,n,{u:i,i:o})}})}else a.push(e)},r),t.b)for(e=0;e<a.length;e++)c(t,a[e]);for(e=0;e<a.length;e++)o(a[e])}function f(t,e){if(void 0===e.__CE_state){var r=e.ownerDocument;if((r.defaultView||r.__CE_isImportDocument&&r.__CE_hasRegistry)&&(r=t.a.get(e.localName))){r.constructionStack.push(e);var i=r.constructorFunction;try{try{if(new i!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{r.constructionStack.pop()}}catch(s){throw e.__CE_state=2,s}if(e.__CE_state=1,e.__CE_definition=r,r.attributeChangedCallback)for(r=r.observedAttributes,i=0;i<r.length;i++){var o=r[i],a=e.getAttribute(o);null!==a&&t.attributeChangedCallback(e,o,null,a,null)}n(e)&&t.connectedCallback(e)}}}function p(t){var e=document;this.c=t,this.a=e,this.b=void 0,u(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function d(t){t.b&&t.b.disconnect()}function m(){var t=this;this.b=this.a=void 0,this.c=new Promise(function(e){t.b=e,t.a&&e(t.a)})}function _(t){if(t.a)throw Error("Already resolved.");t.a=void 0,t.b&&t.b(void 0)}function v(t){this.c=!1,this.a=t,this.j=new Map,this.f=function(t){return t()},this.b=!1,this.g=[],this.o=new p(t)}a.prototype.connectedCallback=function(t){var e=t.__CE_definition;e.connectedCallback&&e.connectedCallback.call(t)},a.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;e.disconnectedCallback&&e.disconnectedCallback.call(t)},a.prototype.attributeChangedCallback=function(t,e,n,r,i){var o=t.__CE_definition;o.attributeChangedCallback&&-1<o.observedAttributes.indexOf(e)&&o.attributeChangedCallback.call(t,e,n,r,i)},p.prototype.f=function(t){var e=this.a.readyState;for("interactive"!==e&&"complete"!==e||d(this),e=0;e<t.length;e++)for(var n=t[e].addedNodes,r=0;r<n.length;r++)u(this.c,n[r])},v.prototype.l=function(t,n){var r=this;if(!(n instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!e(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.a.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var i=function(t){var e=o[t];if(void 0!==e&&!(e instanceof Function))throw Error("The '"+t+"' callback must be a function.");return e},o=n.prototype;if(!(o instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var a=i("connectedCallback"),s=i("disconnectedCallback"),c=i("adoptedCallback"),h=i("attributeChangedCallback"),l=n.observedAttributes||[]}catch(p){return}finally{this.c=!1}n={localName:t,constructorFunction:n,connectedCallback:a,disconnectedCallback:s,adoptedCallback:c,attributeChangedCallback:h,observedAttributes:l,constructionStack:[]},function(t,e,n){t.a.set(e,n),t.g.set(n.constructorFunction,n)}(this.a,t,n),this.g.push(n),this.b||(this.b=!0,this.f(function(){return function(t){if(!1!==t.b){t.b=!1;for(var e=t.g,n=[],r=new Map,i=0;i<e.length;i++)r.set(e[i].localName,[]);for(u(t.a,document,{i:function(e){if(void 0===e.__CE_state){var i=e.localName,o=r.get(i);o?o.push(e):t.a.a.get(i)&&n.push(e)}}}),i=0;i<n.length;i++)f(t.a,n[i]);for(;0<e.length;){var o=e.shift();i=o.localName,o=r.get(o.localName);for(var a=0;a<o.length;a++)f(t.a,o[a]);(i=t.j.get(i))&&_(i)}}}(r)}))},v.prototype.i=function(t){u(this.a,t)},v.prototype.get=function(t){if(t=this.a.a.get(t))return t.constructorFunction},v.prototype.m=function(t){if(!e(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var n=this.j.get(t);return n?n.c:(n=new m,this.j.set(t,n),this.a.a.get(t)&&!this.g.some(function(e){return e.localName===t})&&_(n),n.c)},v.prototype.s=function(t){d(this.o);var e=this.f;this.f=function(n){return t(function(){return e(n)})}},window.CustomElementRegistry=v,v.prototype.define=v.prototype.l,v.prototype.upgrade=v.prototype.i,v.prototype.get=v.prototype.get,v.prototype.whenDefined=v.prototype.m,v.prototype.polyfillWrapFlushCallback=v.prototype.s;var g=window.Document.prototype.createElement,y=window.Document.prototype.createElementNS,b=window.Document.prototype.importNode,w=window.Document.prototype.prepend,E=window.Document.prototype.append,C=window.DocumentFragment.prototype.prepend,N=window.DocumentFragment.prototype.append,S=window.Node.prototype.cloneNode,A=window.Node.prototype.appendChild,k=window.Node.prototype.insertBefore,L=window.Node.prototype.removeChild,D=window.Node.prototype.replaceChild,T=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),O=window.Element.prototype.attachShadow,R=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),j=window.Element.prototype.getAttribute,P=window.Element.prototype.setAttribute,M=window.Element.prototype.removeAttribute,x=window.Element.prototype.getAttributeNS,I=window.Element.prototype.setAttributeNS,q=window.Element.prototype.removeAttributeNS,U=window.Element.prototype.insertAdjacentElement,H=window.Element.prototype.insertAdjacentHTML,F=window.Element.prototype.prepend,B=window.Element.prototype.append,z=window.Element.prototype.before,W=window.Element.prototype.after,$=window.Element.prototype.replaceWith,K=window.Element.prototype.remove,Y=window.HTMLElement,J=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),Z=window.HTMLElement.prototype.insertAdjacentElement,V=window.HTMLElement.prototype.insertAdjacentHTML,X=new function(){};function G(t,e,r){function i(e){return function(r){for(var i=[],o=0;o<arguments.length;++o)i[o]=arguments[o];o=[];for(var a=[],s=0;s<i.length;s++){var c=i[s];if(c instanceof Element&&n(c)&&a.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)o.push(c);else o.push(c)}for(e.apply(this,i),i=0;i<a.length;i++)l(t,a[i]);if(n(this))for(i=0;i<o.length;i++)(a=o[i])instanceof Element&&h(t,a)}}void 0!==r.h&&(e.prepend=i(r.h)),void 0!==r.append&&(e.append=i(r.append))}var Q,tt=window.customElements;if(!tt||tt.forcePolyfill||"function"!=typeof tt.define||"function"!=typeof tt.get){var et=new a;Q=et,window.HTMLElement=function(){function t(){var t=this.constructor,e=Q.g.get(t);if(!e)throw Error("The custom element being constructed was not registered with `customElements`.");var n=e.constructionStack;if(0===n.length)return n=g.call(document,e.localName),Object.setPrototypeOf(n,t.prototype),n.__CE_state=1,n.__CE_definition=e,c(Q,n),n;var r=n[e=n.length-1];if(r===X)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return n[e]=X,Object.setPrototypeOf(r,t.prototype),c(Q,r),r}return t.prototype=Y.prototype,Object.defineProperty(t.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:t}),t}(),function(){var t=et;o(Document.prototype,"createElement",function(e){if(this.__CE_hasRegistry){var n=t.a.get(e);if(n)return new n.constructorFunction}return e=g.call(this,e),c(t,e),e}),o(Document.prototype,"importNode",function(e,n){return e=b.call(this,e,!!n),this.__CE_hasRegistry?u(t,e):s(t,e),e}),o(Document.prototype,"createElementNS",function(e,n){if(this.__CE_hasRegistry&&(null===e||"http://www.w3.org/1999/xhtml"===e)){var r=t.a.get(n);if(r)return new r.constructorFunction}return e=y.call(this,e,n),c(t,e),e}),G(t,Document.prototype,{h:w,append:E})}(),G(et,DocumentFragment.prototype,{h:C,append:N}),function(){function t(t,r){Object.defineProperty(t,"textContent",{enumerable:r.enumerable,configurable:!0,get:r.get,set:function(t){if(this.nodeType===Node.TEXT_NODE)r.set.call(this,t);else{var i=void 0;if(this.firstChild){var o=this.childNodes,a=o.length;if(0<a&&n(this)){i=Array(a);for(var s=0;s<a;s++)i[s]=o[s]}}if(r.set.call(this,t),i)for(t=0;t<i.length;t++)l(e,i[t])}}})}var e=et;o(Node.prototype,"insertBefore",function(t,r){if(t instanceof DocumentFragment){var i=Array.prototype.slice.apply(t.childNodes);if(t=k.call(this,t,r),n(this))for(r=0;r<i.length;r++)h(e,i[r]);return t}return i=n(t),r=k.call(this,t,r),i&&l(e,t),n(this)&&h(e,t),r}),o(Node.prototype,"appendChild",function(t){if(t instanceof DocumentFragment){var r=Array.prototype.slice.apply(t.childNodes);if(t=A.call(this,t),n(this))for(var i=0;i<r.length;i++)h(e,r[i]);return t}return r=n(t),i=A.call(this,t),r&&l(e,t),n(this)&&h(e,t),i}),o(Node.prototype,"cloneNode",function(t){return t=S.call(this,!!t),this.ownerDocument.__CE_hasRegistry?u(e,t):s(e,t),t}),o(Node.prototype,"removeChild",function(t){var r=n(t),i=L.call(this,t);return r&&l(e,t),i}),o(Node.prototype,"replaceChild",function(t,r){if(t instanceof DocumentFragment){var i=Array.prototype.slice.apply(t.childNodes);if(t=D.call(this,t,r),n(this))for(l(e,r),r=0;r<i.length;r++)h(e,i[r]);return t}i=n(t);var o=D.call(this,t,r),a=n(this);return a&&l(e,r),i&&l(e,t),a&&h(e,t),o}),T&&T.get?t(Node.prototype,T):function(t,e){t.b=!0,t.c.push(e)}(e,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=0;e<this.childNodes.length;e++){var n=this.childNodes[e];n.nodeType!==Node.COMMENT_NODE&&t.push(n.textContent)}return t.join("")},set:function(t){for(;this.firstChild;)L.call(this,this.firstChild);null!=t&&""!==t&&A.call(this,document.createTextNode(t))}})})}(),function(){function t(t,e){Object.defineProperty(t,"innerHTML",{enumerable:e.enumerable,configurable:!0,get:e.get,set:function(t){var r=this,o=void 0;if(n(this)&&(o=[],i(this,function(t){t!==r&&o.push(t)})),e.set.call(this,t),o)for(var c=0;c<o.length;c++){var h=o[c];1===h.__CE_state&&a.disconnectedCallback(h)}return this.ownerDocument.__CE_hasRegistry?u(a,this):s(a,this),t}})}function e(t,e){o(t,"insertAdjacentElement",function(t,r){var i=n(r);return t=e.call(this,t,r),i&&l(a,r),n(t)&&h(a,r),t})}function r(t,e){function n(t,e){for(var n=[];t!==e;t=t.nextSibling)n.push(t);for(e=0;e<n.length;e++)u(a,n[e])}o(t,"insertAdjacentHTML",function(t,r){if("beforebegin"===(t=t.toLowerCase())){var i=this.previousSibling;e.call(this,t,r),n(i||this.parentNode.firstChild,this)}else if("afterbegin"===t)i=this.firstChild,e.call(this,t,r),n(this.firstChild,i);else if("beforeend"===t)i=this.lastChild,e.call(this,t,r),n(i||this.firstChild,null);else{if("afterend"!==t)throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");i=this.nextSibling,e.call(this,t,r),n(this.nextSibling,i)}})}var a=et;O&&o(Element.prototype,"attachShadow",function(t){t=O.call(this,t);var e=a;if(e.b&&!t.__CE_patched){t.__CE_patched=!0;for(var n=0;n<e.c.length;n++)e.c[n](t)}return this.__CE_shadowRoot=t}),R&&R.get?t(Element.prototype,R):J&&J.get?t(HTMLElement.prototype,J):function(t,e){t.b=!0,t.f.push(e)}(a,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){return S.call(this,!0).innerHTML},set:function(t){var e="template"===this.localName,n=e?this.content:this,r=y.call(document,this.namespaceURI,this.localName);for(r.innerHTML=t;0<n.childNodes.length;)L.call(n,n.childNodes[0]);for(t=e?r.content:r;0<t.childNodes.length;)A.call(n,t.childNodes[0])}})}),o(Element.prototype,"setAttribute",function(t,e){if(1!==this.__CE_state)return P.call(this,t,e);var n=j.call(this,t);P.call(this,t,e),e=j.call(this,t),a.attributeChangedCallback(this,t,n,e,null)}),o(Element.prototype,"setAttributeNS",function(t,e,n){if(1!==this.__CE_state)return I.call(this,t,e,n);var r=x.call(this,t,e);I.call(this,t,e,n),n=x.call(this,t,e),a.attributeChangedCallback(this,e,r,n,t)}),o(Element.prototype,"removeAttribute",function(t){if(1!==this.__CE_state)return M.call(this,t);var e=j.call(this,t);M.call(this,t),null!==e&&a.attributeChangedCallback(this,t,e,null,null)}),o(Element.prototype,"removeAttributeNS",function(t,e){if(1!==this.__CE_state)return q.call(this,t,e);var n=x.call(this,t,e);q.call(this,t,e);var r=x.call(this,t,e);n!==r&&a.attributeChangedCallback(this,e,n,r,t)}),Z?e(HTMLElement.prototype,Z):U?e(Element.prototype,U):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),V?r(HTMLElement.prototype,V):H?r(Element.prototype,H):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."),G(a,Element.prototype,{h:F,append:B}),function(t){function e(e){return function(r){for(var i=[],o=0;o<arguments.length;++o)i[o]=arguments[o];o=[];for(var a=[],s=0;s<i.length;s++){var c=i[s];if(c instanceof Element&&n(c)&&a.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)o.push(c);else o.push(c)}for(e.apply(this,i),i=0;i<a.length;i++)l(t,a[i]);if(n(this))for(i=0;i<o.length;i++)(a=o[i])instanceof Element&&h(t,a)}}var r=Element.prototype;void 0!==z&&(r.before=e(z)),void 0!==z&&(r.after=e(W)),void 0!==$&&o(r,"replaceWith",function(e){for(var r=[],i=0;i<arguments.length;++i)r[i]=arguments[i];i=[];for(var o=[],a=0;a<r.length;a++){var s=r[a];if(s instanceof Element&&n(s)&&o.push(s),s instanceof DocumentFragment)for(s=s.firstChild;s;s=s.nextSibling)i.push(s);else i.push(s)}for(a=n(this),$.apply(this,r),r=0;r<o.length;r++)l(t,o[r]);if(a)for(l(t,this),r=0;r<i.length;r++)(o=i[r])instanceof Element&&h(t,o)}),void 0!==K&&o(r,"remove",function(){var e=n(this);K.call(this),e&&l(t,this)})}(a)}(),document.__CE_hasRegistry=!0;var nt=new v(et);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:nt})}}.call(self),function(){function t(){var t=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();t.forEach(function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(String(t)))}),this.appendChild(e)}[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach(function(e){e.hasOwnProperty("append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:t})})}(),function(){function t(){var t=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();t.forEach(function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(String(t)))}),this.insertBefore(e,this.firstChild)}[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach(function(e){e.hasOwnProperty("prepend")||Object.defineProperty(e,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:t})})}(),function(){function t(){var t=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();t.forEach(function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(String(t)))}),this.insertBefore(e,this)}[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(e){e.hasOwnProperty("before")||Object.defineProperty(e,"before",{configurable:!0,enumerable:!0,writable:!0,value:t})})}(),function(){function t(){var t=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();t.forEach(function(t){var n=t instanceof Node;e.appendChild(n?t:document.createTextNode(String(t)))}),this.parentNode.insertBefore(e,this.nextSibling)}[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(e){e.hasOwnProperty("after")||Object.defineProperty(e,"after",{configurable:!0,enumerable:!0,writable:!0,value:t})})}(),function(){var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function e(){var e,n=this.parentNode,r=arguments.length;if(n)for(r||n.removeChild(this);r--;)"object"!==(void 0===(e=arguments[r])?"undefined":t(e))?e=this.ownerDocument.createTextNode(e):e.parentNode&&e.parentNode.removeChild(e),r?n.insertBefore(this.previousSibling,e):n.replaceChild(e,this)}[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(t){t.hasOwnProperty("replaceWith")||Object.defineProperty(t,"replaceWith",{configurable:!0,enumerable:!0,writable:!0,value:e})})}(),function(){var t=document.createElement("details");t.innerHTML="<summary>a</summary>b",t.setAttribute("style","position: absolute; left: -9999px");var e="open"in t&&function(){(document.body||document.documentElement).appendChild(t);var e=t.offsetHeight;t.open=!0;var n=t.offsetHeight;return t.parentNode.removeChild(t),e!=n}(),n="ontoggle"in t;var r,i,o,a,s='\ndetails, summary {\n  display: block;\n}\ndetails:not([open]) > *:not(summary) {\n  display: none;\n}\nsummary::before {\n  content: "â–º";\n  padding-right: 0.3rem;\n  font-size: 0.6rem;\n  cursor: default;\n}\n[open] > summary::before {\n  content: "â–¼";\n}\n',c=[],h=c.forEach,l=c.slice;function u(t){(function(t,e){return(t.tagName==e?[t]:[]).concat("function"==typeof t.getElementsByTagName?l.call(t.getElementsByTagName(e)):[])})(t,"SUMMARY").forEach(function(t){var e=m(t,"DETAILS");t.setAttribute("aria-expanded",e.hasAttribute("open")),t.hasAttribute("tabindex")||t.setAttribute("tabindex","0"),t.hasAttribute("role")||t.setAttribute("role","button")})}function f(t){return!(t.defaultPrevented||t.ctrlKey||t.metaKey||t.shiftKey||t.target.isContentEditable)}function p(t){addEventListener("click",function(e){if(f(e)&&e.which<=1){var n=m(e.target,"SUMMARY");n&&n.parentNode&&"DETAILS"==n.parentNode.tagName&&t(n.parentNode)}},!1),addEventListener("keydown",function(e){if(f(e)&&(13==e.keyCode||32==e.keyCode)){var n=m(e.target,"SUMMARY");n&&n.parentNode&&"DETAILS"==n.parentNode.tagName&&(t(n.parentNode),e.preventDefault())}},!1)}function d(t){var e=document.createEvent("Event");e.initEvent("toggle",!1,!1),t.dispatchEvent(e)}function m(t,e){if("function"==typeof t.closest)return t.closest(e);for(;t;){if(t.tagName==e)return t;t=t.parentNode}}e||(document.head.insertAdjacentHTML("afterbegin","<style>"+s+"</style>"),r=document.createElement("details").constructor.prototype,i=r.setAttribute,o=r.removeAttribute,a=Object.getOwnPropertyDescriptor(r,"open"),Object.defineProperties(r,{open:{get:function(){return"DETAILS"==this.tagName?this.hasAttribute("open"):a&&a.get?a.get.call(this):void 0},set:function(t){return"DETAILS"==this.tagName?t?this.setAttribute("open",""):this.removeAttribute("open"):a&&a.set?a.set.call(this,t):void 0}},setAttribute:{value:function(t,e){var n=this,r=function(){return i.call(n,t,e)};if("open"==t&&"DETAILS"==this.tagName){var o=this.hasAttribute("open"),a=r();if(!o){var s=this.querySelector("summary");s&&s.setAttribute("aria-expanded",!0),d(this)}return a}return r()}},removeAttribute:{value:function(t){var e=this,n=function(){return o.call(e,t)};if("open"==t&&"DETAILS"==this.tagName){var r=this.hasAttribute("open"),i=n();if(r){var a=this.querySelector("summary");a&&a.setAttribute("aria-expanded",!1),d(this)}return i}return n()}}}),p(function(t){t.hasAttribute("open")?t.removeAttribute("open"):t.setAttribute("open","")}),u(document),window.MutationObserver?new MutationObserver(function(t){h.call(t,function(t){h.call(t.addedNodes,u)})}).observe(document.documentElement,{subtree:!0,childList:!0}):document.addEventListener("DOMNodeInserted",function(t){u(t.target)})),e&&!n&&(window.MutationObserver?new MutationObserver(function(t){h.call(t,function(t){var e=t.target,n=t.attributeName;"DETAILS"==e.tagName&&"open"==n&&d(e)})}).observe(document.documentElement,{attributes:!0,subtree:!0}):p(function(t){var e=t.getAttribute("open");setTimeout(function(){var n=t.getAttribute("open");e!=n&&d(t)},1)}))}();var t={};try{!function(e,n){if("+"!==new e("q=%2B").get("q")||"+"!==new e({q:"+"}).get("q")||"+"!==new e([["q","+"]]).get("q")||"q=%0A"!==new e("q=\n").toString()||"q=+%26"!==new e({q:" &"}).toString())throw e;t.URLSearchParams=e}(URLSearchParams)}catch(URLSearchParams){!function(e,n,r){var i=e.create,o=e.defineProperty,a=/[!'\(\)~]|%20|%00/g,s=/\+/g,c={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},h={append:function(t,e){p(this._ungap,t,e)},delete:function(t){delete this._ungap[t]},get:function(t){return this.has(t)?this._ungap[t][0]:null},getAll:function(t){return this.has(t)?this._ungap[t].slice(0):[]},has:function(t){return t in this._ungap},set:function(t,e){this._ungap[t]=[n(e)]},forEach:function(t,e){var r=this;for(var i in r._ungap)r._ungap[i].forEach(o,i);function o(o){t.call(e,o,n(i),r)}},toJSON:function(){return{}},toString:function(){var t=[];for(var e in this._ungap)for(var n=m(e),r=0,i=this._ungap[e];r<i.length;r++)t.push(n+"="+m(i[r]));return t.join("&")}};for(var l in h)o(u.prototype,l,{configurable:!0,writable:!0,value:h[l]});function u(t){var e=i(null);switch(o(this,"_ungap",{value:e}),!0){case!t:break;case"string"==typeof t:"?"===t.charAt(0)&&(t=t.slice(1));for(var n=t.split("&"),a=0,s=n.length;a<s;a++){var c=(h=n[a]).indexOf("=");-1<c?p(e,d(h.slice(0,c)),d(h.slice(c+1))):h.length&&p(e,d(h),"")}break;case r(t):for(a=0,s=t.length;a<s;a++){var h;p(e,(h=t[a])[0],h[1])}break;case"forEach"in t:t.forEach(f,e);break;default:for(var l in t)p(e,l,t[l])}}function f(t,e){p(this,e,t)}function p(t,e,n){var i=r(n)?n.join(","):n;e in t?t[e].push(i):t[e]=[i]}function d(t){return decodeURIComponent(t.replace(s," "))}function m(t){return encodeURIComponent(t).replace(a,_)}function _(t){return c[t]}t.URLSearchParams=u}(Object,String,Array.isArray)}!function(t){var e=!1;try{e=!!Symbol.iterator}catch(r){}function n(t,n){var r=[];return t.forEach(n,r),e?r[Symbol.iterator]():{next:function(){var t=r.shift();return{done:void 0===t,value:t}}}}"forEach"in t||(t.forEach=function(t,e){var n=this,r=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(i){!i.length||i in r||(r[i]=n.getAll(i)).forEach(function(r){t.call(e,r,i,n)})})}),"keys"in t||(t.keys=function(){return n(this,function(t,e){this.push(e)})}),"values"in t||(t.values=function(){return n(this,function(t,e){this.push(t)})}),"entries"in t||(t.entries=function(){return n(this,function(t,e){this.push([e,t])})}),!e||Symbol.iterator in t||(t[Symbol.iterator]=t.entries),"sort"in t||(t.sort=function(){for(var t,e,n,r=this.entries(),i=r.next(),o=i.done,a=[],s=Object.create(null);!o;)e=(n=i.value)[0],a.push(e),e in s||(s[e]=[]),s[e].push(n[1]),o=(i=r.next()).done;for(a.sort(),t=0;t<a.length;t++)this.delete(a[t]);for(t=0;t<a.length;t++)e=a[t],this.append(e,s[e].shift())}),function(e){var n=e.defineProperty,r=e.getOwnPropertyDescriptor,i=function(e){var n=e.append;e.append=t.append,URLSearchParams.call(e,e._usp.search.slice(1)),e.append=n},o=function(t,e){if(!(t instanceof e))throw new TypeError("'searchParams' accessed on an object that does not implement interface "+e.name)},a=function(a){var s,c,h=a.prototype,l=r(h,"searchParams"),u=r(h,"href"),f=r(h,"search");!l&&f&&f.set&&(c=function(e){function r(n,r){t.append.call(this,n,r),n=this.toString(),e.set.call(this._usp,n?"?"+n:"")}function i(n){t.delete.call(this,n),n=this.toString(),e.set.call(this._usp,n?"?"+n:"")}function o(n,r){t.set.call(this,n,r),n=this.toString(),e.set.call(this._usp,n?"?"+n:"")}return function(t,e){return t.append=r,t.delete=i,t.set=o,n(t,"_usp",{configurable:!0,writable:!0,value:e})}}(f),s=function(t,e){return n(t,"_searchParams",{configurable:!0,writable:!0,value:c(e,t)}),e},e.defineProperties(h,{href:{get:function(){return u.get.call(this)},set:function(t){var e=this._searchParams;u.set.call(this,t),e&&i(e)}},search:{get:function(){return f.get.call(this)},set:function(t){var e=this._searchParams;f.set.call(this,t),e&&i(e)}},searchParams:{get:function(){return o(this,a),this._searchParams||s(this,new URLSearchParams(this.search.slice(1)))},set:function(t){o(this,a),s(this,t)}}}))};try{a(HTMLAnchorElement),/^function|object$/.test(typeof URL)&&URL.prototype&&a(URL)}catch(s){}}(Object)}(t.URLSearchParams.prototype,Object);var e=t.URLSearchParams;window.URLSearchParams||(window.URLSearchParams=e),HTMLCollection.prototype[Symbol.iterator]||Object.defineProperty(HTMLCollection.prototype,Symbol.iterator,{enumerable:!1,configurable:!0,get:()=>Array.prototype[Symbol.iterator]})}();
//# sourceMappingURL=compat-bootstrap-9b690cef.js.map
