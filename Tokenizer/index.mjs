var Fe=Object.create;var q=Object.defineProperty;var He=Object.getOwnPropertyDescriptor;var Xe=Object.getOwnPropertyNames;var Ge=Object.getPrototypeOf,Ke=Object.prototype.hasOwnProperty;var Ye=(f,o,a)=>o in f?q(f,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):f[o]=a;var me=(f,o)=>()=>(o||f((o={exports:{}}).exports,o),o.exports);var ze=(f,o,a,m)=>{if(o&&typeof o=="object"||typeof o=="function")for(let _ of Xe(o))!Ke.call(f,_)&&_!==a&&q(f,_,{get:()=>o[_],enumerable:!(m=He(o,_))||m.enumerable});return f};var Qe=(f,o,a)=>(a=f!=null?Fe(Ge(f)):{},ze(o||!f||!f.__esModule?q(a,"default",{value:f,enumerable:!0}):a,f));var U=(f,o,a)=>(Ye(f,typeof o!="symbol"?o+"":o,a),a);var Ee=me((pe,ve)=>{(function(f){var o=Object.hasOwnProperty,a=Array.isArray?Array.isArray:function(t){return Object.prototype.toString.call(t)==="[object Array]"},m=10,_=typeof process=="object"&&typeof process.nextTick=="function",v=typeof Symbol=="function",d=typeof Reflect=="object",x=typeof setImmediate=="function",R=x?setImmediate:setTimeout,L=v?d&&typeof Reflect.ownKeys=="function"?Reflect.ownKeys:function(e){var t=Object.getOwnPropertyNames(e);return t.push.apply(t,Object.getOwnPropertySymbols(e)),t}:Object.keys;function g(){this._events={},this._conf&&B.call(this,this._conf)}function B(e){e&&(this._conf=e,e.delimiter&&(this.delimiter=e.delimiter),e.maxListeners!==f&&(this._maxListeners=e.maxListeners),e.wildcard&&(this.wildcard=e.wildcard),e.newListener&&(this._newListener=e.newListener),e.removeListener&&(this._removeListener=e.removeListener),e.verboseMemoryLeak&&(this.verboseMemoryLeak=e.verboseMemoryLeak),e.ignoreErrors&&(this.ignoreErrors=e.ignoreErrors),this.wildcard&&(this.listenerTree={}))}function P(e,t){var s="(node) warning: possible EventEmitter memory leak detected. "+e+" listeners added. Use emitter.setMaxListeners() to increase limit.";if(this.verboseMemoryLeak&&(s+=" Event name: "+t+"."),typeof process<"u"&&process.emitWarning){var n=new Error(s);n.name="MaxListenersExceededWarning",n.emitter=this,n.count=e,process.emitWarning(n)}else console.error(s),console.trace&&console.trace()}var D=function(e,t,s){var n=arguments.length;switch(n){case 0:return[];case 1:return[e];case 2:return[e,t];case 3:return[e,t,s];default:for(var r=new Array(n);n--;)r[n]=arguments[n];return r}};function oe(e,t){for(var s={},n,r=e.length,i=t?t.length:0,l=0;l<r;l++)n=e[l],s[n]=l<i?t[l]:f;return s}function le(e,t,s){this._emitter=e,this._target=t,this._listeners={},this._listenersCount=0;var n,r;if((s.on||s.off)&&(n=s.on,r=s.off),t.addEventListener?(n=t.addEventListener,r=t.removeEventListener):t.addListener?(n=t.addListener,r=t.removeListener):t.on&&(n=t.on,r=t.off),!n&&!r)throw Error("target does not implement any known event API");if(typeof n!="function")throw TypeError("on method must be a function");if(typeof r!="function")throw TypeError("off method must be a function");this._on=n,this._off=r;var i=e._observers;i?i.push(this):e._observers=[this]}Object.assign(le.prototype,{subscribe:function(e,t,s){var n=this,r=this._target,i=this._emitter,l=this._listeners,u=function(){var c=D.apply(null,arguments),h={data:c,name:t,original:e};if(s){var p=s.call(r,h);p!==!1&&i.emit.apply(i,[h.name].concat(c));return}i.emit.apply(i,[t].concat(c))};if(l[e])throw Error("Event '"+e+"' is already listening");this._listenersCount++,i._newListener&&i._removeListener&&!n._onNewListener?(this._onNewListener=function(c){c===t&&l[e]===null&&(l[e]=u,n._on.call(r,e,u))},i.on("newListener",this._onNewListener),this._onRemoveListener=function(c){c===t&&!i.hasListeners(c)&&l[e]&&(l[e]=null,n._off.call(r,e,u))},l[e]=null,i.on("removeListener",this._onRemoveListener)):(l[e]=u,n._on.call(r,e,u))},unsubscribe:function(e){var t=this,s=this._listeners,n=this._emitter,r,i,l=this._off,u=this._target,c;if(e&&typeof e!="string")throw TypeError("event must be a string");function h(){t._onNewListener&&(n.off("newListener",t._onNewListener),n.off("removeListener",t._onRemoveListener),t._onNewListener=null,t._onRemoveListener=null);var p=ae.call(n,t);n._observers.splice(p,1)}if(e){if(r=s[e],!r)return;l.call(u,e,r),delete s[e],--this._listenersCount||h()}else{for(i=L(s),c=i.length;c-- >0;)e=i[c],l.call(u,e,s[e]);this._listeners={},this._listenersCount=0,h()}}});function G(e,t,s,n){var r=Object.assign({},t);if(!e)return r;if(typeof e!="object")throw TypeError("options must be an object");var i=Object.keys(e),l=i.length,u,c,h;function p(T){throw Error('Invalid "'+u+'" option value'+(T?". Reason: "+T:""))}for(var O=0;O<l;O++){if(u=i[O],!n&&!o.call(t,u))throw Error('Unknown "'+u+'" option');c=e[u],c!==f&&(h=s[u],r[u]=h?h(c,p):c)}return r}function ce(e,t){return(typeof e!="function"||!e.hasOwnProperty("prototype"))&&t("value must be a constructor"),e}function he(e){var t="value must be type of "+e.join("|"),s=e.length,n=e[0],r=e[1];return s===1?function(i,l){if(typeof i===n)return i;l(t)}:s===2?function(i,l){var u=typeof i;if(u===n||u===r)return i;l(t)}:function(i,l){for(var u=typeof i,c=s;c-- >0;)if(u===e[c])return i;l(t)}}var Y=he(["function"]),Me=he(["object","function"]);function fe(e,t,s){var n,r,i=0,l,u=new e(function(c,h,p){s=G(s,{timeout:0,overload:!1},{timeout:function(w,I){return w*=1,(typeof w!="number"||w<0||!Number.isFinite(w))&&I("timeout must be a positive number"),w}}),n=!s.overload&&typeof e.prototype.cancel=="function"&&typeof p=="function";function O(){r&&(r=null),i&&(clearTimeout(i),i=0)}var T=function(w){O(),c(w)},b=function(w){O(),h(w)};n?t(T,b,p):(r=[function(w){b(w||Error("canceled"))}],t(T,b,function(w){if(l)throw Error("Unable to subscribe on cancel event asynchronously");if(typeof w!="function")throw TypeError("onCancel callback must be a function");r.push(w)}),l=!0),s.timeout>0&&(i=setTimeout(function(){var w=Error("timeout");w.code="ETIMEDOUT",i=0,u.cancel(w),h(w)},s.timeout))});return n||(u.cancel=function(c){if(!!r){for(var h=r.length,p=1;p<h;p++)r[p](c);r[0](c),r=null}}),u}function ae(e){var t=this._observers;if(!t)return-1;for(var s=t.length,n=0;n<s;n++)if(t[n]._target===e)return n;return-1}function A(e,t,s,n,r){if(!s)return null;if(n===0){var i=typeof t;if(i==="string"){var l,u,c=0,h=0,p=this.delimiter,O=p.length;if((u=t.indexOf(p))!==-1){l=new Array(5);do l[c++]=t.slice(h,u),h=u+O;while((u=t.indexOf(p,h))!==-1);l[c++]=t.slice(h),t=l,r=c}else t=[t],r=1}else i==="object"?r=t.length:(t=[t],r=1)}var T=null,b,w,I,V,Z,j=t[n],W=t[n+1],k,N;if(n===r)s._listeners&&(typeof s._listeners=="function"?(e&&e.push(s._listeners),T=[s]):(e&&e.push.apply(e,s._listeners),T=[s]));else if(j==="*"){for(k=L(s),u=k.length;u-- >0;)b=k[u],b!=="_listeners"&&(N=A(e,t,s[b],n+1,r),N&&(T?T.push.apply(T,N):T=N));return T}else if(j==="**"){for(Z=n+1===r||n+2===r&&W==="*",Z&&s._listeners&&(T=A(e,t,s,r,r)),k=L(s),u=k.length;u-- >0;)b=k[u],b!=="_listeners"&&(b==="*"||b==="**"?(s[b]._listeners&&!Z&&(N=A(e,t,s[b],r,r),N&&(T?T.push.apply(T,N):T=N)),N=A(e,t,s[b],n,r)):b===W?N=A(e,t,s[b],n+2,r):N=A(e,t,s[b],n,r),N&&(T?T.push.apply(T,N):T=N));return T}else s[j]&&(T=A(e,t,s[j],n+1,r));if(w=s["*"],w&&A(e,t,w,n+1,r),I=s["**"],I)if(n<r)for(I._listeners&&A(e,t,I,r,r),k=L(I),u=k.length;u-- >0;)b=k[u],b!=="_listeners"&&(b===W?A(e,t,I[b],n+2,r):b===j?A(e,t,I[b],n+1,r):(V={},V[b]=I[b],A(e,t,{"**":V},n+1,r)));else I._listeners?A(e,t,I,r,r):I["*"]&&I["*"]._listeners&&A(e,t,I["*"],r,r);return T}function Pe(e,t,s){var n=0,r=0,i,l=this.delimiter,u=l.length,c;if(typeof e=="string")if((i=e.indexOf(l))!==-1){c=new Array(5);do c[n++]=e.slice(r,i),r=i+u;while((i=e.indexOf(l,r))!==-1);c[n++]=e.slice(r)}else c=[e],n=1;else c=e,n=e.length;if(n>1){for(i=0;i+1<n;i++)if(c[i]==="**"&&c[i+1]==="**")return}var h=this.listenerTree,p;for(i=0;i<n;i++)if(p=c[i],h=h[p]||(h[p]={}),i===n-1)return h._listeners?(typeof h._listeners=="function"&&(h._listeners=[h._listeners]),s?h._listeners.unshift(t):h._listeners.push(t),!h._listeners.warned&&this._maxListeners>0&&h._listeners.length>this._maxListeners&&(h._listeners.warned=!0,P.call(this,h._listeners.length,p))):h._listeners=t,!0;return!0}function ue(e,t,s,n){for(var r=L(e),i=r.length,l,u,c,h=e._listeners,p;i-- >0;)u=r[i],l=e[u],u==="_listeners"?c=s:c=s?s.concat(u):[u],p=n||typeof u=="symbol",h&&t.push(p?c:c.join(this.delimiter)),typeof l=="object"&&ue.call(this,l,t,c,p);return t}function z(e){for(var t=L(e),s=t.length,n,r,i;s-- >0;)r=t[s],n=e[r],n&&(i=!0,r!=="_listeners"&&!z(n)&&delete e[r]);return i}function _e(e,t,s){this.emitter=e,this.event=t,this.listener=s}_e.prototype.off=function(){return this.emitter.off(this.event,this.listener),this};function De(e,t,s){if(s===!0)r=!0;else if(s===!1)n=!0;else{if(!s||typeof s!="object")throw TypeError("options should be an object or true");var n=s.async,r=s.promisify,i=s.nextTick,l=s.objectify}if(n||i||r){var u=t,c=t._origin||t;if(i&&!_)throw Error("process.nextTick is not supported");r===f&&(r=t.constructor.name==="AsyncFunction"),t=function(){var h=arguments,p=this,O=this.event;return r?i?Promise.resolve():new Promise(function(T){R(T)}).then(function(){return p.event=O,u.apply(p,h)}):(i?process.nextTick:R)(function(){p.event=O,u.apply(p,h)})},t._async=!0,t._origin=c}return[t,l?new _e(this,e,t):this]}function E(e){this._events={},this._newListener=!1,this._removeListener=!1,this.verboseMemoryLeak=!1,B.call(this,e)}E.EventEmitter2=E,E.prototype.listenTo=function(e,t,s){if(typeof e!="object")throw TypeError("target musts be an object");var n=this;s=G(s,{on:f,off:f,reducers:f},{on:Y,off:Y,reducers:Me});function r(i){if(typeof i!="object")throw TypeError("events must be an object");var l=s.reducers,u=ae.call(n,e),c;u===-1?c=new le(n,e,s):c=n._observers[u];for(var h=L(i),p=h.length,O,T=typeof l=="function",b=0;b<p;b++)O=h[b],c.subscribe(O,i[O]||O,T?l:l&&l[O])}return a(t)?r(oe(t)):r(typeof t=="string"?oe(t.split(/\s+/)):t),this},E.prototype.stopListeningTo=function(e,t){var s=this._observers;if(!s)return!1;var n=s.length,r,i=!1;if(e&&typeof e!="object")throw TypeError("target should be an object");for(;n-- >0;)r=s[n],(!e||r._target===e)&&(r.unsubscribe(t),i=!0);return i},E.prototype.delimiter=".",E.prototype.setMaxListeners=function(e){e!==f&&(this._maxListeners=e,this._conf||(this._conf={}),this._conf.maxListeners=e)},E.prototype.getMaxListeners=function(){return this._maxListeners},E.prototype.event="",E.prototype.once=function(e,t,s){return this._once(e,t,!1,s)},E.prototype.prependOnceListener=function(e,t,s){return this._once(e,t,!0,s)},E.prototype._once=function(e,t,s,n){return this._many(e,1,t,s,n)},E.prototype.many=function(e,t,s,n){return this._many(e,t,s,!1,n)},E.prototype.prependMany=function(e,t,s,n){return this._many(e,t,s,!0,n)},E.prototype._many=function(e,t,s,n,r){var i=this;if(typeof s!="function")throw new Error("many only accepts instances of Function");function l(){return--t===0&&i.off(e,l),s.apply(this,arguments)}return l._origin=s,this._on(e,l,n,r)},E.prototype.emit=function(){if(!this._events&&!this._all)return!1;this._events||g.call(this);var e=arguments[0],t,s=this.wildcard,n,r,i,l,u;if(e==="newListener"&&!this._newListener&&!this._events.newListener)return!1;if(s&&(t=e,e!=="newListener"&&e!=="removeListener"&&typeof e=="object")){if(r=e.length,v){for(i=0;i<r;i++)if(typeof e[i]=="symbol"){u=!0;break}}u||(e=e.join(this.delimiter))}var c=arguments.length,h;if(this._all&&this._all.length)for(h=this._all.slice(),i=0,r=h.length;i<r;i++)switch(this.event=e,c){case 1:h[i].call(this,e);break;case 2:h[i].call(this,e,arguments[1]);break;case 3:h[i].call(this,e,arguments[1],arguments[2]);break;default:h[i].apply(this,arguments)}if(s)h=[],A.call(this,h,t,this.listenerTree,0,r);else if(h=this._events[e],typeof h=="function"){switch(this.event=e,c){case 1:h.call(this);break;case 2:h.call(this,arguments[1]);break;case 3:h.call(this,arguments[1],arguments[2]);break;default:for(n=new Array(c-1),l=1;l<c;l++)n[l-1]=arguments[l];h.apply(this,n)}return!0}else h&&(h=h.slice());if(h&&h.length){if(c>3)for(n=new Array(c-1),l=1;l<c;l++)n[l-1]=arguments[l];for(i=0,r=h.length;i<r;i++)switch(this.event=e,c){case 1:h[i].call(this);break;case 2:h[i].call(this,arguments[1]);break;case 3:h[i].call(this,arguments[1],arguments[2]);break;default:h[i].apply(this,n)}return!0}else if(!this.ignoreErrors&&!this._all&&e==="error")throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");return!!this._all},E.prototype.emitAsync=function(){if(!this._events&&!this._all)return!1;this._events||g.call(this);var e=arguments[0],t=this.wildcard,s,n,r,i,l,u;if(e==="newListener"&&!this._newListener&&!this._events.newListener)return Promise.resolve([!1]);if(t&&(s=e,e!=="newListener"&&e!=="removeListener"&&typeof e=="object")){if(i=e.length,v){for(l=0;l<i;l++)if(typeof e[l]=="symbol"){n=!0;break}}n||(e=e.join(this.delimiter))}var c=[],h=arguments.length,p;if(this._all)for(l=0,i=this._all.length;l<i;l++)switch(this.event=e,h){case 1:c.push(this._all[l].call(this,e));break;case 2:c.push(this._all[l].call(this,e,arguments[1]));break;case 3:c.push(this._all[l].call(this,e,arguments[1],arguments[2]));break;default:c.push(this._all[l].apply(this,arguments))}if(t?(p=[],A.call(this,p,s,this.listenerTree,0)):p=this._events[e],typeof p=="function")switch(this.event=e,h){case 1:c.push(p.call(this));break;case 2:c.push(p.call(this,arguments[1]));break;case 3:c.push(p.call(this,arguments[1],arguments[2]));break;default:for(r=new Array(h-1),u=1;u<h;u++)r[u-1]=arguments[u];c.push(p.apply(this,r))}else if(p&&p.length){if(p=p.slice(),h>3)for(r=new Array(h-1),u=1;u<h;u++)r[u-1]=arguments[u];for(l=0,i=p.length;l<i;l++)switch(this.event=e,h){case 1:c.push(p[l].call(this));break;case 2:c.push(p[l].call(this,arguments[1]));break;case 3:c.push(p[l].call(this,arguments[1],arguments[2]));break;default:c.push(p[l].apply(this,r))}}else if(!this.ignoreErrors&&!this._all&&e==="error")return arguments[1]instanceof Error?Promise.reject(arguments[1]):Promise.reject("Uncaught, unspecified 'error' event.");return Promise.all(c)},E.prototype.on=function(e,t,s){return this._on(e,t,!1,s)},E.prototype.prependListener=function(e,t,s){return this._on(e,t,!0,s)},E.prototype.onAny=function(e){return this._onAny(e,!1)},E.prototype.prependAny=function(e){return this._onAny(e,!0)},E.prototype.addListener=E.prototype.on,E.prototype._onAny=function(e,t){if(typeof e!="function")throw new Error("onAny only accepts instances of Function");return this._all||(this._all=[]),t?this._all.unshift(e):this._all.push(e),this},E.prototype._on=function(e,t,s,n){if(typeof e=="function")return this._onAny(e,t),this;if(typeof t!="function")throw new Error("on only accepts instances of Function");this._events||g.call(this);var r=this,i;return n!==f&&(i=De.call(this,e,t,n),t=i[0],r=i[1]),this._newListener&&this.emit("newListener",e,t),this.wildcard?(Pe.call(this,e,t,s),r):(this._events[e]?(typeof this._events[e]=="function"&&(this._events[e]=[this._events[e]]),s?this._events[e].unshift(t):this._events[e].push(t),!this._events[e].warned&&this._maxListeners>0&&this._events[e].length>this._maxListeners&&(this._events[e].warned=!0,P.call(this,this._events[e].length,e))):this._events[e]=t,r)},E.prototype.off=function(e,t){if(typeof t!="function")throw new Error("removeListener only takes instances of Function");var s,n=[];if(this.wildcard){var r=typeof e=="string"?e.split(this.delimiter):e.slice();if(n=A.call(this,null,r,this.listenerTree,0),!n)return this}else{if(!this._events[e])return this;s=this._events[e],n.push({_listeners:s})}for(var i=0;i<n.length;i++){var l=n[i];if(s=l._listeners,a(s)){for(var u=-1,c=0,h=s.length;c<h;c++)if(s[c]===t||s[c].listener&&s[c].listener===t||s[c]._origin&&s[c]._origin===t){u=c;break}if(u<0)continue;return this.wildcard?l._listeners.splice(u,1):this._events[e].splice(u,1),s.length===0&&(this.wildcard?delete l._listeners:delete this._events[e]),this._removeListener&&this.emit("removeListener",e,t),this}else(s===t||s.listener&&s.listener===t||s._origin&&s._origin===t)&&(this.wildcard?delete l._listeners:delete this._events[e],this._removeListener&&this.emit("removeListener",e,t))}return this.listenerTree&&z(this.listenerTree),this},E.prototype.offAny=function(e){var t=0,s=0,n;if(e&&this._all&&this._all.length>0){for(n=this._all,t=0,s=n.length;t<s;t++)if(e===n[t])return n.splice(t,1),this._removeListener&&this.emit("removeListenerAny",e),this}else{if(n=this._all,this._removeListener)for(t=0,s=n.length;t<s;t++)this.emit("removeListenerAny",n[t]);this._all=[]}return this},E.prototype.removeListener=E.prototype.off,E.prototype.removeAllListeners=function(e){if(e===f)return!this._events||g.call(this),this;if(this.wildcard){var t=A.call(this,null,e,this.listenerTree,0),s,n;if(!t)return this;for(n=0;n<t.length;n++)s=t[n],s._listeners=null;this.listenerTree&&z(this.listenerTree)}else this._events&&(this._events[e]=null);return this},E.prototype.listeners=function(e){var t=this._events,s,n,r,i,l;if(e===f){if(this.wildcard)throw Error("event name required for wildcard emitter");if(!t)return[];for(s=L(t),i=s.length,r=[];i-- >0;)n=t[s[i]],typeof n=="function"?r.push(n):r.push.apply(r,n);return r}else{if(this.wildcard){if(l=this.listenerTree,!l)return[];var u=[],c=typeof e=="string"?e.split(this.delimiter):e.slice();return A.call(this,u,c,l,0),u}return t?(n=t[e],n?typeof n=="function"?[n]:n:[]):[]}},E.prototype.eventNames=function(e){var t=this._events;return this.wildcard?ue.call(this,this.listenerTree,[],null,e):t?L(t):[]},E.prototype.listenerCount=function(e){return this.listeners(e).length},E.prototype.hasListeners=function(e){if(this.wildcard){var t=[],s=typeof e=="string"?e.split(this.delimiter):e.slice();return A.call(this,t,s,this.listenerTree,0),t.length>0}var n=this._events,r=this._all;return!!(r&&r.length||n&&(e===f?L(n).length:n[e]))},E.prototype.listenersAny=function(){return this._all?this._all:[]},E.prototype.waitFor=function(e,t){var s=this,n=typeof t;return n==="number"?t={timeout:t}:n==="function"&&(t={filter:t}),t=G(t,{timeout:0,filter:f,handleError:!1,Promise,overload:!1},{filter:Y,Promise:ce}),fe(t.Promise,function(r,i,l){function u(){var c=t.filter;if(!(c&&!c.apply(s,arguments)))if(s.off(e,u),t.handleError){var h=arguments[0];h?i(h):r(D.apply(null,arguments).slice(1))}else r(D.apply(null,arguments))}l(function(){s.off(e,u)}),s._on(e,u,!1)},{timeout:t.timeout,overload:t.overload})};function je(e,t,s){s=G(s,{Promise,timeout:0,overload:!1},{Promise:ce});var n=s.Promise;return fe(n,function(r,i,l){var u;if(typeof e.addEventListener=="function"){u=function(){r(D.apply(null,arguments))},l(function(){e.removeEventListener(t,u)}),e.addEventListener(t,u,{once:!0});return}var c=function(){h&&e.removeListener("error",h),r(D.apply(null,arguments))},h;t!=="error"&&(h=function(p){e.removeListener(t,c),i(p)},e.once("error",h)),l(function(){h&&e.removeListener("error",h),e.removeListener(t,c)}),e.once(t,c)},{timeout:s.timeout,overload:s.overload})}var Q=E.prototype;if(Object.defineProperties(E,{defaultMaxListeners:{get:function(){return Q._maxListeners},set:function(e){if(typeof e!="number"||e<0||Number.isNaN(e))throw TypeError("n must be a non-negative number");Q._maxListeners=e},enumerable:!0},once:{value:je,writable:!0,configurable:!0}}),Object.defineProperties(Q,{_maxListeners:{value:m,writable:!0,configurable:!0},_observers:{value:null,writable:!0,configurable:!0}}),typeof define=="function"&&define.amd)define(function(){return E});else if(typeof pe=="object")ve.exports=E;else{var Ue=new Function("","return this")();Ue.EventEmitter2=E}})()});var de=me((ds,xe)=>{xe.exports=Ee()});var ye=Qe(de(),1);var Ve="as",Ze="=",We="break",qe="else",Je="enum",$e="export",et="if",tt="import",st="->",nt="is",rt="loop",it="mut",ot="native",lt="object",ct="fn",ht="return",ft="self",at="template",ut=Object.freeze({ALIAS:Ve,ASSIGN:Ze,BREAK:We,ELSE:qe,ENUMERATION:Je,EXPORT:$e,IF:et,IMPORT:tt,INTO:st,IS:nt,LOOP:rt,MUTABLE:it,NATIVE:ot,OBJECT:lt,PROCEDURE:ct,RETURN:ht,SELF:ft,TEMPLATE:at}),Te=ut;var _t="array",mt="assignment",pt="branch-default",vt="branch-value",Et="break",xt="condition",dt="declaration",Tt="enumeration",bt="export",gt="expression",Lt="import",wt="label",At="literal",Ot="loop",Rt="module",It="mutable",Nt="name-list",yt="native",Ct="object",Bt="procedure",kt="return",St="self",Mt="submodule",Pt="template",Dt="type-pair",jt=Object.freeze({ARRAY:_t,ASSIGNMENT:mt,BRANCH_DEFAULT:pt,BRANCH_VALUE:vt,BREAK:Et,CONDITION:xt,DECLARATION:dt,ENUMERATION:Tt,EXPORT:bt,EXPRESSION:gt,IMPORT:Lt,LABEL:wt,LITERAL:At,LOOP:Ot,MODULE:Rt,MUTABLE:It,NAME_LIST:Nt,NATIVE:yt,OBJECT:Ct,PROCEDURE:Bt,RETURN:kt,SELF:St,SUBMODULE:Mt,TEMPLATE:Pt,TYPE_PAIR:Dt}),be=jt;var Ut=Object.freeze({COLON:58,COMMA:44,DIGIT_ZERO:48,DIGIT_NINE:57,DOT:46,HASHTAG:35,HORIZONTAL_TAB:9,HYPHEN_MINUS:45,LEFT_CURLY_BRACKET:123,LEFT_PARENTHESIS:40,LEFT_SQUARE_BRACKET:91,LINE_BREAK:10,NULL:0,PLUS_SIGN:43,RIGHT_CURLY_BRACKET:125,RIGHT_PARENTHESIS:41,RIGHT_SQUARE_BRACKET:93,SEMICOLON:59,SPACE:32}),ge=Ut;var Ft=Object.freeze([]),Ht=Object.freeze({}),Xt="",Gt="	",Kt=`
`,Yt="UTF-8",zt=Object.freeze({EMPTY_ARRAY:Ft,EMPTY_OBJECT:Ht,EMPTY_STRING:Xt,HORIZONTAL_TAB:Gt,LINE_BREAK:Kt,UNICODE_TEXT:Yt,Codes:ge,Keys:Te,Types:be}),F=zt;var{EMPTY_STRING:Qt,UNICODE_TEXT:se}=F,Vt=-1,Zt=1,Wt=new TextDecoder(se),qt=new TextEncoder,Jt=(f,o,a=0,m=f.length|0,_=0,v=o.length|0)=>{for(_=_|0,a=a|0,v=v|0,m=m|0;;){let d=a>=m,x=_>=v;if(d||x)break;let L=f[a],g=o[_];if(a=a+1|0,_=_+1|0,L<g)return Vt;if(L>g)return Zt}return 0},$t=(f,o,a=0,m=f.length|0,_=0,v=o.length|0)=>{for(_=_|0,a=a|0,v=v|0,m=m|0;;){let d=_>=v,x=a>=m;if(d||x)break;o[_]=f[a],_=_+1|0,a=a+1|0}},es=(f,o,a=0,m=f.length|0,_=0,v=o.length|0)=>{for(a=a|0,_=_|0,m=m|0,v=v|0;;){let d=a>=m,x=_>=v;if(d||x)break;let L=f[a],g=o[_];if(a=a+1|0,_=_+1|0,L!==g)return!1}return!0},ts=f=>{f=f>>>0;let o=0,a=0;for(;a=(a<<1|1)>>>0,!(a>f);)o=o+1|0;return o},Ae=Object.freeze([48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102]),ee=(f,o,a,m)=>{for(f=f>>>0,m=m??o.length|0,a=a|0,m=m|0;f>0&&m>a;)m=m-1|0,o[m]=Ae[f&15],f=f>>>4},Oe=128,Re=127,ss=-1,te=64,ne=f=>{f=f|0;let o=[];for(;;){let a=f&Re;f=f>>7;let m=f===0,_=(a&te)===0,v=m&&_,d=f===-1,x=(a&te)!==0;if(v||d&&x){o.push(a);break}a=a|Oe,o.push(a)}return o},Ie=(f,o)=>{o=o|0;let a=0,m=0;for(;;){let _=f[o]|0;o=o+1|0;let v=(_&Re)<<m;if(m=m+7|0,a=a|v,(_&Oe)===0){let x=(_&te)!==0,R=m<32;if(x&&R){let g=ss<<m;a=a|g}break}}return a},ns=f=>Wt.decode(f),rs=f=>qt.encode(f),is=(f=Qt)=>{let o=f.length|0,a=ne(o),m=Buffer.from(f,se);return Object.freeze([...a,...m])},os=(f,o)=>{o=o|0;let a=Ie(f,o),m=ne(a).length;return o=o+m|0,f.subarray(o,o+a|0).toString(se)},ls=58,cs=46,H=32,J=48,hs=67,S=new Uint8Array(hs),Le=S.subarray(0,8),K=S.subarray(10,49),we=S.subarray(51,68),$=16,fs=2;S[8]=ls;S[9]=H;S[49]=H;S[50]=H;var as=(f,o)=>{o=o??console.log;let a=32,m=126,_=f.length|0,v=0;for(;_>0;){Le.fill(J),ee(v,Le),K.fill(H),we.fill(H);let d=_>=$?$:_;_=_-$|0;let x=0,R=0;for(let g=1;g<=d;g=g+1|0){let B=f[v]&255;K[x+0|0]=J,K[x+1|0]=J,ee(B,K,x,x+2|0);let P=cs;a<=B&&B<=m&&(P=B),we[R]=P,v=v+1|0,x=x+2|0,R=R+1|0,g%fs===0&&(x=x+1|0)}let L=String.fromCodePoint(...S);o(L)}},us=function*(f,o){let a=f.length|0,m=o.length|0,_=0;for(;_<a&&_<m;){let v=f[_],d=o[_];yield[v,d],_=_+1|0}},_s=function*(f,o,a){let m=f.length|0,_=o.length|0,v=a.length|0,d=0;for(;d<m&&d<_&&d<v;){let x=f[d],R=o[d],L=a[d];yield[x,R,L],d=d+1|0}},ms=Object.freeze({ARRAY_COMPARE:Jt,ARRAY_COPY:$t,ARRAY_EQUAL:es,BIT_DEPTH:ts,HEX_DIGITS:Ae,HEX_ENCODE:ee,LEB128_DECODE:Ie,LEB128_ENCODE:ne,UTF8_DECODE:ns,UTF8_ENCODE:rs,WASM_STRING_ENCODE:is,WASM_STRING_DECODE:os,XXD_DUMP_HEX:as,ZIP2:us,ZIP3:_s}),Ne=ms;var{Codes:y}=F,{EMPTY_STRING:Cs}=F,{ARRAY_COPY:ps}=Ne,vs=Object.freeze({tabSize:4}),Ce=new Set([40,41,91,93,123,125,46,44,58,59,64]);Object.freeze(Ce);var Be=new Set([46,44]);Object.freeze(Be);var ke=new Set([34,39]);Object.freeze(ke);var Se=new Set([9,13,32]);Object.freeze(Se);var X=1,re=2,ie=3,Es=(f,o,a)=>{if(o=o|0,a=a|0,(a-o|0)===0)return!1;let _=f[o];for((_===y.PLUS_SIGN||_===y.HYPHEN_MINUS)&&(o=o+1|0);o<a;){let v=f[o];o=o+1|0;let d=y.DIGIT_ZERO<=v&&v<=y.DIGIT_NINE,x=y.DOT===v||y.COMMA===v;if(!(d||x))return!1}return!0},M=class{constructor(o=vs){this.options=o,this.numberMark=!1,this.position=0,this.array=new Uint8Array(M.LIMIT_ARRAY),this.target=0,this.length=0,this.indexA=0,this.indexB=0,this.events=new Map,this.emitter=new ye.default,this.emitter.on("token",(a,m,_,v)=>{(this.events.get("token")||[]).forEach(x=>{x(a,m,_,v)})}),this.emitter.on("error",()=>{}),this.comment=!1,this.situation=X,this.quote=y.NULL,Object.seal(this)}on(o,a){if(M.SET_EVENTS.has(o)){let m=this.events.get(o)||[];m.push(a),this.events.set(o,m)}}feed(o){let a=o.length|0,m=0,_=0,v=a;for(;v>0;){let d=M.LIMIT_ARRAY-this.length|0,x=Math.min(d,v)|0;v=v-x|0,_=_+x|0,ps(o,this.array,m,_,this.target),this.length=this.length+x|0,this.flush(),m=m+x|0}}done(){this.array[this.indexB]=y.SPACE,this.length=this.length+1,this.flush()}flush(){for(;this.indexB<this.length;)switch(this.situation){case X:{this.flushTopLevel();break}case re:{this.flushQuotation();break}case ie:{this.flushComment();break}}let o=this.length-this.indexA|0;o>M.LIMIT_TOKEN||(o>0&&(this.array.copyWithin(0,this.indexA,this.indexB),this.indexA=0,this.indexB=o,this.target=o),this.length=o)}flushComment(){for(;this.indexB<this.length;){if((this.array[this.indexB]|0)===y.LINE_BREAK){this.drain("comment"),this.indexB=this.indexB+1|0,this.drain("token"),this.comment=!1,this.situation=X;break}this.indexB=this.indexB+1|0}this.comment===!0&&(this.length-this.indexA|0)>0&&this.drain("comment")}flushQuotation(){for(;this.indexB<this.length;){let o=this.indexB-this.indexA|0;if((this.array[this.indexB]|0)===this.quote){this.quote=y.NULL,o>0&&this.drain("token"),this.indexB=this.indexB+1|0,this.drain("token"),this.situation=X;return}this.indexB=this.indexB+1|0}}flushTopLevel(){let{options:o}=this,{tabSize:a}=o;for(;this.indexB<this.length;){let m=()=>{let g=0;this.numberMark&&(this.indexB=this.indexB-1|0),g=this.indexB-this.indexA|0,g>0&&this.drain("token"),this.numberMark&&(this.indexB=this.indexB+1|0),g=this.indexB-this.indexA|0,g>0&&this.drain("token"),this.numberMark=!1},_=this.array[this.indexB]|0;if(_===y.HASHTAG){m(),this.indexB=this.indexB+1|0,this.drain("token"),this.comment=!0,this.situation=ie;return}if(_===y.LINE_BREAK){m(),this.indexB=this.indexB+1|0,this.drain("token");continue}if(ke.has(_)){m(),this.indexB=this.indexB+1|0,this.drain("token"),this.quote=_,this.situation=re;return}if(Se.has(_)){m(),_===y.HORIZONTAL_TAB?this.position=this.position+a|0:this.position=this.position+1|0,this.indexA=this.indexA+1|0,this.indexB=this.indexB+1|0;continue}if(this.numberMark=!1,Ce.has(_)){let g=!Es(this.array,this.indexA,this.indexB),B=!Be.has(_);if(g||B){m(),this.indexB=this.indexB+1|0,this.drain("token");continue}this.numberMark=!0}this.indexB=this.indexB+1|0}}drain(o){let{array:a,position:m}=this,_=this.indexB-this.indexA|0,v=this.indexA;this.emitter.emit(o,m,a,v,_),this.position=this.position+_|0,this.indexA=this.indexB|0}close(){}},C=M;U(C,"LIMIT_TOKEN",256),U(C,"LIMIT_ARRAY",M.LIMIT_TOKEN*2|0),U(C,"SET_EVENTS",new Set(["comment","error","token"])),U(C,"SET_SITUATIONS",new Set([X,re,ie]));Object.values(C).forEach(Object.freeze);Object.freeze(C);Object.freeze(Object.getPrototypeOf(C));var Bs=C;export{Bs as default};
