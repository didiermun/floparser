var Ke=Object.create;var se=Object.defineProperty;var Xe=Object.getOwnPropertyDescriptor;var ze=Object.getOwnPropertyNames;var Ze=Object.getPrototypeOf,Qe=Object.prototype.hasOwnProperty;var Ve=(l,r,c)=>r in l?se(l,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):l[r]=c;var xe=(l,r)=>()=>(r||l((r={exports:{}}).exports,r),r.exports);var We=(l,r,c,E)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of ze(r))!Qe.call(l,a)&&a!==c&&se(l,a,{get:()=>r[a],enumerable:!(E=Xe(r,a))||E.enumerable});return l};var qe=(l,r,c)=>(c=l!=null?Ke(Ze(l)):{},We(r||!l||!l.__esModule?se(c,"default",{value:l,enumerable:!0}):c,l));var G=(l,r,c)=>(Ve(l,typeof r!="symbol"?r+"":r,c),c);var de=xe((Te,ve)=>{(function(l){var r=Object.hasOwnProperty,c=Array.isArray?Array.isArray:function(t){return Object.prototype.toString.call(t)==="[object Array]"},E=10,a=typeof process=="object"&&typeof process.nextTick=="function",m=typeof Symbol=="function",v=typeof Reflect=="object",T=typeof setImmediate=="function",S=T?setImmediate:setTimeout,A=m?v&&typeof Reflect.ownKeys=="function"?Reflect.ownKeys:function(e){var t=Object.getOwnPropertyNames(e);return t.push.apply(t,Object.getOwnPropertySymbols(e)),t}:Object.keys;function O(){this._events={},this._conf&&C.call(this,this._conf)}function C(e){e&&(this._conf=e,e.delimiter&&(this.delimiter=e.delimiter),e.maxListeners!==l&&(this._maxListeners=e.maxListeners),e.wildcard&&(this.wildcard=e.wildcard),e.newListener&&(this._newListener=e.newListener),e.removeListener&&(this._removeListener=e.removeListener),e.verboseMemoryLeak&&(this.verboseMemoryLeak=e.verboseMemoryLeak),e.ignoreErrors&&(this.ignoreErrors=e.ignoreErrors),this.wildcard&&(this.listenerTree={}))}function k(e,t){var s="(node) warning: possible EventEmitter memory leak detected. "+e+" listeners added. Use emitter.setMaxListeners() to increase limit.";if(this.verboseMemoryLeak&&(s+=" Event name: "+t+"."),typeof process<"u"&&process.emitWarning){var n=new Error(s);n.name="MaxListenersExceededWarning",n.emitter=this,n.count=e,process.emitWarning(n)}else console.error(s),console.trace&&console.trace()}var j=function(e,t,s){var n=arguments.length;switch(n){case 0:return[];case 1:return[e];case 2:return[e,t];case 3:return[e,t,s];default:for(var i=new Array(n);n--;)i[n]=arguments[n];return i}};function he(e,t){for(var s={},n,i=e.length,o=t?t.length:0,h=0;h<i;h++)n=e[h],s[n]=h<o?t[h]:l;return s}function fe(e,t,s){this._emitter=e,this._target=t,this._listeners={},this._listenersCount=0;var n,i;if((s.on||s.off)&&(n=s.on,i=s.off),t.addEventListener?(n=t.addEventListener,i=t.removeEventListener):t.addListener?(n=t.addListener,i=t.removeListener):t.on&&(n=t.on,i=t.off),!n&&!i)throw Error("target does not implement any known event API");if(typeof n!="function")throw TypeError("on method must be a function");if(typeof i!="function")throw TypeError("off method must be a function");this._on=n,this._off=i;var o=e._observers;o?o.push(this):e._observers=[this]}Object.assign(fe.prototype,{subscribe:function(e,t,s){var n=this,i=this._target,o=this._emitter,h=this._listeners,_=function(){var f=j.apply(null,arguments),u={data:f,name:t,original:e};if(s){var p=s.call(i,u);p!==!1&&o.emit.apply(o,[u.name].concat(f));return}o.emit.apply(o,[t].concat(f))};if(h[e])throw Error("Event '"+e+"' is already listening");this._listenersCount++,o._newListener&&o._removeListener&&!n._onNewListener?(this._onNewListener=function(f){f===t&&h[e]===null&&(h[e]=_,n._on.call(i,e,_))},o.on("newListener",this._onNewListener),this._onRemoveListener=function(f){f===t&&!o.hasListeners(f)&&h[e]&&(h[e]=null,n._off.call(i,e,_))},h[e]=null,o.on("removeListener",this._onRemoveListener)):(h[e]=_,n._on.call(i,e,_))},unsubscribe:function(e){var t=this,s=this._listeners,n=this._emitter,i,o,h=this._off,_=this._target,f;if(e&&typeof e!="string")throw TypeError("event must be a string");function u(){t._onNewListener&&(n.off("newListener",t._onNewListener),n.off("removeListener",t._onRemoveListener),t._onNewListener=null,t._onRemoveListener=null);var p=Ee.call(n,t);n._observers.splice(p,1)}if(e){if(i=s[e],!i)return;h.call(_,e,i),delete s[e],--this._listenersCount||u()}else{for(o=A(s),f=o.length;f-- >0;)e=o[f],h.call(_,e,s[e]);this._listeners={},this._listenersCount=0,u()}}});function z(e,t,s,n){var i=Object.assign({},t);if(!e)return i;if(typeof e!="object")throw TypeError("options must be an object");var o=Object.keys(e),h=o.length,_,f,u;function p(d){throw Error('Invalid "'+_+'" option value'+(d?". Reason: "+d:""))}for(var R=0;R<h;R++){if(_=o[R],!n&&!r.call(t,_))throw Error('Unknown "'+_+'" option');f=e[_],f!==l&&(u=s[_],i[_]=u?u(f,p):f)}return i}function ae(e,t){return(typeof e!="function"||!e.hasOwnProperty("prototype"))&&t("value must be a constructor"),e}function ue(e){var t="value must be type of "+e.join("|"),s=e.length,n=e[0],i=e[1];return s===1?function(o,h){if(typeof o===n)return o;h(t)}:s===2?function(o,h){var _=typeof o;if(_===n||_===i)return o;h(t)}:function(o,h){for(var _=typeof o,f=s;f-- >0;)if(_===e[f])return o;h(t)}}var W=ue(["function"]),Ue=ue(["object","function"]);function _e(e,t,s){var n,i,o=0,h,_=new e(function(f,u,p){s=z(s,{timeout:0,overload:!1},{timeout:function(L,I){return L*=1,(typeof L!="number"||L<0||!Number.isFinite(L))&&I("timeout must be a positive number"),L}}),n=!s.overload&&typeof e.prototype.cancel=="function"&&typeof p=="function";function R(){i&&(i=null),o&&(clearTimeout(o),o=0)}var d=function(L){R(),f(L)},b=function(L){R(),u(L)};n?t(d,b,p):(i=[function(L){b(L||Error("canceled"))}],t(d,b,function(L){if(h)throw Error("Unable to subscribe on cancel event asynchronously");if(typeof L!="function")throw TypeError("onCancel callback must be a function");i.push(L)}),h=!0),s.timeout>0&&(o=setTimeout(function(){var L=Error("timeout");L.code="ETIMEDOUT",o=0,_.cancel(L),u(L)},s.timeout))});return n||(_.cancel=function(f){if(i){for(var u=i.length,p=1;p<u;p++)i[p](f);i[0](f),i=null}}),_}function Ee(e){var t=this._observers;if(!t)return-1;for(var s=t.length,n=0;n<s;n++)if(t[n]._target===e)return n;return-1}function g(e,t,s,n,i){if(!s)return null;if(n===0){var o=typeof t;if(o==="string"){var h,_,f=0,u=0,p=this.delimiter,R=p.length;if((_=t.indexOf(p))!==-1){h=new Array(5);do h[f++]=t.slice(u,_),u=_+R;while((_=t.indexOf(p,u))!==-1);h[f++]=t.slice(u),t=h,i=f}else t=[t],i=1}else o==="object"?i=t.length:(t=[t],i=1)}var d=null,b,L,I,$,ee,H=t[n],te=t[n+1],B,N;if(n===i)s._listeners&&(typeof s._listeners=="function"?(e&&e.push(s._listeners),d=[s]):(e&&e.push.apply(e,s._listeners),d=[s]));else if(H==="*"){for(B=A(s),_=B.length;_-- >0;)b=B[_],b!=="_listeners"&&(N=g(e,t,s[b],n+1,i),N&&(d?d.push.apply(d,N):d=N));return d}else if(H==="**"){for(ee=n+1===i||n+2===i&&te==="*",ee&&s._listeners&&(d=g(e,t,s,i,i)),B=A(s),_=B.length;_-- >0;)b=B[_],b!=="_listeners"&&(b==="*"||b==="**"?(s[b]._listeners&&!ee&&(N=g(e,t,s[b],i,i),N&&(d?d.push.apply(d,N):d=N)),N=g(e,t,s[b],n,i)):b===te?N=g(e,t,s[b],n+2,i):N=g(e,t,s[b],n,i),N&&(d?d.push.apply(d,N):d=N));return d}else s[H]&&(d=g(e,t,s[H],n+1,i));if(L=s["*"],L&&g(e,t,L,n+1,i),I=s["**"],I)if(n<i)for(I._listeners&&g(e,t,I,i,i),B=A(I),_=B.length;_-- >0;)b=B[_],b!=="_listeners"&&(b===te?g(e,t,I[b],n+2,i):b===H?g(e,t,I[b],n+1,i):($={},$[b]=I[b],g(e,t,{"**":$},n+1,i)));else I._listeners?g(e,t,I,i,i):I["*"]&&I["*"]._listeners&&g(e,t,I["*"],i,i);return d}function je(e,t,s){var n=0,i=0,o,h=this.delimiter,_=h.length,f;if(typeof e=="string")if((o=e.indexOf(h))!==-1){f=new Array(5);do f[n++]=e.slice(i,o),i=o+_;while((o=e.indexOf(h,i))!==-1);f[n++]=e.slice(i)}else f=[e],n=1;else f=e,n=e.length;if(n>1){for(o=0;o+1<n;o++)if(f[o]==="**"&&f[o+1]==="**")return}var u=this.listenerTree,p;for(o=0;o<n;o++)if(p=f[o],u=u[p]||(u[p]={}),o===n-1)return u._listeners?(typeof u._listeners=="function"&&(u._listeners=[u._listeners]),s?u._listeners.unshift(t):u._listeners.push(t),!u._listeners.warned&&this._maxListeners>0&&u._listeners.length>this._maxListeners&&(u._listeners.warned=!0,k.call(this,u._listeners.length,p))):u._listeners=t,!0;return!0}function pe(e,t,s,n){for(var i=A(e),o=i.length,h,_,f,u=e._listeners,p;o-- >0;)_=i[o],h=e[_],_==="_listeners"?f=s:f=s?s.concat(_):[_],p=n||typeof _=="symbol",u&&t.push(p?f:f.join(this.delimiter)),typeof h=="object"&&pe.call(this,h,t,f,p);return t}function q(e){for(var t=A(e),s=t.length,n,i,o;s-- >0;)i=t[s],n=e[i],n&&(o=!0,i!=="_listeners"&&!q(n)&&delete e[i]);return o}function me(e,t,s){this.emitter=e,this.event=t,this.listener=s}me.prototype.off=function(){return this.emitter.off(this.event,this.listener),this};function He(e,t,s){if(s===!0)i=!0;else if(s===!1)n=!0;else{if(!s||typeof s!="object")throw TypeError("options should be an object or true");var n=s.async,i=s.promisify,o=s.nextTick,h=s.objectify}if(n||o||i){var _=t,f=t._origin||t;if(o&&!a)throw Error("process.nextTick is not supported");i===l&&(i=t.constructor.name==="AsyncFunction"),t=function(){var u=arguments,p=this,R=this.event;return i?o?Promise.resolve():new Promise(function(d){S(d)}).then(function(){return p.event=R,_.apply(p,u)}):(o?process.nextTick:S)(function(){p.event=R,_.apply(p,u)})},t._async=!0,t._origin=f}return[t,h?new me(this,e,t):this]}function x(e){this._events={},this._newListener=!1,this._removeListener=!1,this.verboseMemoryLeak=!1,C.call(this,e)}x.EventEmitter2=x,x.prototype.listenTo=function(e,t,s){if(typeof e!="object")throw TypeError("target musts be an object");var n=this;s=z(s,{on:l,off:l,reducers:l},{on:W,off:W,reducers:Ue});function i(o){if(typeof o!="object")throw TypeError("events must be an object");var h=s.reducers,_=Ee.call(n,e),f;_===-1?f=new fe(n,e,s):f=n._observers[_];for(var u=A(o),p=u.length,R,d=typeof h=="function",b=0;b<p;b++)R=u[b],f.subscribe(R,o[R]||R,d?h:h&&h[R])}return c(t)?i(he(t)):i(typeof t=="string"?he(t.split(/\s+/)):t),this},x.prototype.stopListeningTo=function(e,t){var s=this._observers;if(!s)return!1;var n=s.length,i,o=!1;if(e&&typeof e!="object")throw TypeError("target should be an object");for(;n-- >0;)i=s[n],(!e||i._target===e)&&(i.unsubscribe(t),o=!0);return o},x.prototype.delimiter=".",x.prototype.setMaxListeners=function(e){e!==l&&(this._maxListeners=e,this._conf||(this._conf={}),this._conf.maxListeners=e)},x.prototype.getMaxListeners=function(){return this._maxListeners},x.prototype.event="",x.prototype.once=function(e,t,s){return this._once(e,t,!1,s)},x.prototype.prependOnceListener=function(e,t,s){return this._once(e,t,!0,s)},x.prototype._once=function(e,t,s,n){return this._many(e,1,t,s,n)},x.prototype.many=function(e,t,s,n){return this._many(e,t,s,!1,n)},x.prototype.prependMany=function(e,t,s,n){return this._many(e,t,s,!0,n)},x.prototype._many=function(e,t,s,n,i){var o=this;if(typeof s!="function")throw new Error("many only accepts instances of Function");function h(){return--t===0&&o.off(e,h),s.apply(this,arguments)}return h._origin=s,this._on(e,h,n,i)},x.prototype.emit=function(){if(!this._events&&!this._all)return!1;this._events||O.call(this);var e=arguments[0],t,s=this.wildcard,n,i,o,h,_;if(e==="newListener"&&!this._newListener&&!this._events.newListener)return!1;if(s&&(t=e,e!=="newListener"&&e!=="removeListener"&&typeof e=="object")){if(i=e.length,m){for(o=0;o<i;o++)if(typeof e[o]=="symbol"){_=!0;break}}_||(e=e.join(this.delimiter))}var f=arguments.length,u;if(this._all&&this._all.length)for(u=this._all.slice(),o=0,i=u.length;o<i;o++)switch(this.event=e,f){case 1:u[o].call(this,e);break;case 2:u[o].call(this,e,arguments[1]);break;case 3:u[o].call(this,e,arguments[1],arguments[2]);break;default:u[o].apply(this,arguments)}if(s)u=[],g.call(this,u,t,this.listenerTree,0,i);else if(u=this._events[e],typeof u=="function"){switch(this.event=e,f){case 1:u.call(this);break;case 2:u.call(this,arguments[1]);break;case 3:u.call(this,arguments[1],arguments[2]);break;default:for(n=new Array(f-1),h=1;h<f;h++)n[h-1]=arguments[h];u.apply(this,n)}return!0}else u&&(u=u.slice());if(u&&u.length){if(f>3)for(n=new Array(f-1),h=1;h<f;h++)n[h-1]=arguments[h];for(o=0,i=u.length;o<i;o++)switch(this.event=e,f){case 1:u[o].call(this);break;case 2:u[o].call(this,arguments[1]);break;case 3:u[o].call(this,arguments[1],arguments[2]);break;default:u[o].apply(this,n)}return!0}else if(!this.ignoreErrors&&!this._all&&e==="error")throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");return!!this._all},x.prototype.emitAsync=function(){if(!this._events&&!this._all)return!1;this._events||O.call(this);var e=arguments[0],t=this.wildcard,s,n,i,o,h,_;if(e==="newListener"&&!this._newListener&&!this._events.newListener)return Promise.resolve([!1]);if(t&&(s=e,e!=="newListener"&&e!=="removeListener"&&typeof e=="object")){if(o=e.length,m){for(h=0;h<o;h++)if(typeof e[h]=="symbol"){n=!0;break}}n||(e=e.join(this.delimiter))}var f=[],u=arguments.length,p;if(this._all)for(h=0,o=this._all.length;h<o;h++)switch(this.event=e,u){case 1:f.push(this._all[h].call(this,e));break;case 2:f.push(this._all[h].call(this,e,arguments[1]));break;case 3:f.push(this._all[h].call(this,e,arguments[1],arguments[2]));break;default:f.push(this._all[h].apply(this,arguments))}if(t?(p=[],g.call(this,p,s,this.listenerTree,0)):p=this._events[e],typeof p=="function")switch(this.event=e,u){case 1:f.push(p.call(this));break;case 2:f.push(p.call(this,arguments[1]));break;case 3:f.push(p.call(this,arguments[1],arguments[2]));break;default:for(i=new Array(u-1),_=1;_<u;_++)i[_-1]=arguments[_];f.push(p.apply(this,i))}else if(p&&p.length){if(p=p.slice(),u>3)for(i=new Array(u-1),_=1;_<u;_++)i[_-1]=arguments[_];for(h=0,o=p.length;h<o;h++)switch(this.event=e,u){case 1:f.push(p[h].call(this));break;case 2:f.push(p[h].call(this,arguments[1]));break;case 3:f.push(p[h].call(this,arguments[1],arguments[2]));break;default:f.push(p[h].apply(this,i))}}else if(!this.ignoreErrors&&!this._all&&e==="error")return arguments[1]instanceof Error?Promise.reject(arguments[1]):Promise.reject("Uncaught, unspecified 'error' event.");return Promise.all(f)},x.prototype.on=function(e,t,s){return this._on(e,t,!1,s)},x.prototype.prependListener=function(e,t,s){return this._on(e,t,!0,s)},x.prototype.onAny=function(e){return this._onAny(e,!1)},x.prototype.prependAny=function(e){return this._onAny(e,!0)},x.prototype.addListener=x.prototype.on,x.prototype._onAny=function(e,t){if(typeof e!="function")throw new Error("onAny only accepts instances of Function");return this._all||(this._all=[]),t?this._all.unshift(e):this._all.push(e),this},x.prototype._on=function(e,t,s,n){if(typeof e=="function")return this._onAny(e,t),this;if(typeof t!="function")throw new Error("on only accepts instances of Function");this._events||O.call(this);var i=this,o;return n!==l&&(o=He.call(this,e,t,n),t=o[0],i=o[1]),this._newListener&&this.emit("newListener",e,t),this.wildcard?(je.call(this,e,t,s),i):(this._events[e]?(typeof this._events[e]=="function"&&(this._events[e]=[this._events[e]]),s?this._events[e].unshift(t):this._events[e].push(t),!this._events[e].warned&&this._maxListeners>0&&this._events[e].length>this._maxListeners&&(this._events[e].warned=!0,k.call(this,this._events[e].length,e))):this._events[e]=t,i)},x.prototype.off=function(e,t){if(typeof t!="function")throw new Error("removeListener only takes instances of Function");var s,n=[];if(this.wildcard){var i=typeof e=="string"?e.split(this.delimiter):e.slice();if(n=g.call(this,null,i,this.listenerTree,0),!n)return this}else{if(!this._events[e])return this;s=this._events[e],n.push({_listeners:s})}for(var o=0;o<n.length;o++){var h=n[o];if(s=h._listeners,c(s)){for(var _=-1,f=0,u=s.length;f<u;f++)if(s[f]===t||s[f].listener&&s[f].listener===t||s[f]._origin&&s[f]._origin===t){_=f;break}if(_<0)continue;return this.wildcard?h._listeners.splice(_,1):this._events[e].splice(_,1),s.length===0&&(this.wildcard?delete h._listeners:delete this._events[e]),this._removeListener&&this.emit("removeListener",e,t),this}else(s===t||s.listener&&s.listener===t||s._origin&&s._origin===t)&&(this.wildcard?delete h._listeners:delete this._events[e],this._removeListener&&this.emit("removeListener",e,t))}return this.listenerTree&&q(this.listenerTree),this},x.prototype.offAny=function(e){var t=0,s=0,n;if(e&&this._all&&this._all.length>0){for(n=this._all,t=0,s=n.length;t<s;t++)if(e===n[t])return n.splice(t,1),this._removeListener&&this.emit("removeListenerAny",e),this}else{if(n=this._all,this._removeListener)for(t=0,s=n.length;t<s;t++)this.emit("removeListenerAny",n[t]);this._all=[]}return this},x.prototype.removeListener=x.prototype.off,x.prototype.removeAllListeners=function(e){if(e===l)return!this._events||O.call(this),this;if(this.wildcard){var t=g.call(this,null,e,this.listenerTree,0),s,n;if(!t)return this;for(n=0;n<t.length;n++)s=t[n],s._listeners=null;this.listenerTree&&q(this.listenerTree)}else this._events&&(this._events[e]=null);return this},x.prototype.listeners=function(e){var t=this._events,s,n,i,o,h;if(e===l){if(this.wildcard)throw Error("event name required for wildcard emitter");if(!t)return[];for(s=A(t),o=s.length,i=[];o-- >0;)n=t[s[o]],typeof n=="function"?i.push(n):i.push.apply(i,n);return i}else{if(this.wildcard){if(h=this.listenerTree,!h)return[];var _=[],f=typeof e=="string"?e.split(this.delimiter):e.slice();return g.call(this,_,f,h,0),_}return t?(n=t[e],n?typeof n=="function"?[n]:n:[]):[]}},x.prototype.eventNames=function(e){var t=this._events;return this.wildcard?pe.call(this,this.listenerTree,[],null,e):t?A(t):[]},x.prototype.listenerCount=function(e){return this.listeners(e).length},x.prototype.hasListeners=function(e){if(this.wildcard){var t=[],s=typeof e=="string"?e.split(this.delimiter):e.slice();return g.call(this,t,s,this.listenerTree,0),t.length>0}var n=this._events,i=this._all;return!!(i&&i.length||n&&(e===l?A(n).length:n[e]))},x.prototype.listenersAny=function(){return this._all?this._all:[]},x.prototype.waitFor=function(e,t){var s=this,n=typeof t;return n==="number"?t={timeout:t}:n==="function"&&(t={filter:t}),t=z(t,{timeout:0,filter:l,handleError:!1,Promise,overload:!1},{filter:W,Promise:ae}),_e(t.Promise,function(i,o,h){function _(){var f=t.filter;if(!(f&&!f.apply(s,arguments)))if(s.off(e,_),t.handleError){var u=arguments[0];u?o(u):i(j.apply(null,arguments).slice(1))}else i(j.apply(null,arguments))}h(function(){s.off(e,_)}),s._on(e,_,!1)},{timeout:t.timeout,overload:t.overload})};function Ge(e,t,s){s=z(s,{Promise,timeout:0,overload:!1},{Promise:ae});var n=s.Promise;return _e(n,function(i,o,h){var _;if(typeof e.addEventListener=="function"){_=function(){i(j.apply(null,arguments))},h(function(){e.removeEventListener(t,_)}),e.addEventListener(t,_,{once:!0});return}var f=function(){u&&e.removeListener("error",u),i(j.apply(null,arguments))},u;t!=="error"&&(u=function(p){e.removeListener(t,f),o(p)},e.once("error",u)),h(function(){u&&e.removeListener("error",u),e.removeListener(t,f)}),e.once(t,f)},{timeout:s.timeout,overload:s.overload})}var J=x.prototype;if(Object.defineProperties(x,{defaultMaxListeners:{get:function(){return J._maxListeners},set:function(e){if(typeof e!="number"||e<0||Number.isNaN(e))throw TypeError("n must be a non-negative number");J._maxListeners=e},enumerable:!0},once:{value:Ge,writable:!0,configurable:!0}}),Object.defineProperties(J,{_maxListeners:{value:E,writable:!0,configurable:!0},_observers:{value:null,writable:!0,configurable:!0}}),typeof define=="function"&&define.amd)define(function(){return x});else if(typeof Te=="object")ve.exports=x;else{var Fe=new Function("","return this")();Fe.EventEmitter2=x}})()});var Ae=xe((hn,be)=>{be.exports=de()});var Be=qe(Ae(),1);var Je="as",$e="=",et="break",tt="else",st="enum",nt="export",it="if",rt="import",ot="->",ct="is",lt="loop",ht="mut",ft="native",at="object",ut="fn",_t="return",Et="self",pt="template",mt=Object.freeze({ALIAS:Je,ASSIGN:$e,BREAK:et,ELSE:tt,ENUMERATION:st,EXPORT:nt,IF:it,IMPORT:rt,INTO:ot,IS:ct,LOOP:lt,MUTABLE:ht,NATIVE:ft,OBJECT:at,PROCEDURE:ut,RETURN:_t,SELF:Et,TEMPLATE:pt}),Oe=mt;var xt="assign",Tt="array_assignment",vt="branch-match",dt="branch-default",bt="condition",At="loop",Ot="data",Lt="generics",gt="enumeration",wt="expression",St="instance",Rt="Link",It="local",Nt="object",Ct="procedure",Pt="return",Bt="select",yt="member",kt="store",Dt="break",Mt="literal",Yt="array_access",Ut="valueLink",jt="linkValue",Ht="self",Gt="procedure-call",Ft="Maybe",Kt="native",Xt="move",zt="String",Zt="Array",Qt="import",Vt="library",Wt="constructor",qt="destructor",Jt="free",$t="block-end",es="default-block",ts="continue",ss="branch",ns="statement",is="draw",rs="size",os="concatenation",cs="foreach",ls="while",hs="while-condition",fs="foreach-condition",as="foreach-end",us="I32",_s=Object.freeze({TYPES_ASSIGN:xt,TYPES_ARRAY:Zt,TYPES_ARRAY_ASSIGNMENT:Tt,TYPES_BRANCH_MATCH:vt,TYPES_BRANCH_DEFAULT:dt,TYPES_CONDITION:bt,TYPES_LOOP:At,TYPES_FOREACH_END:as,TYPES_WHILE_CONDITION:hs,TYPES_FOREACH_CONDITION:fs,TYPES_DATA:Ot,TYPES_GENERICS:Lt,TYPES_ENUMERATION:gt,TYPES_EXPRESSION:wt,TYPES_INSTANCE:St,TYPES_LINK:Rt,TYPES_IMPORT:Qt,TYPES_LOCAL:It,TYPES_OBJECT:Nt,TYPES_PROCEDURE:Ct,TYPES_RETURN:Pt,TYPES_SELECT:Bt,TYPES_MEMBER:yt,TYPES_STORE:kt,TYPES_BREAK:Dt,TYPES_LITERAL:Mt,TYPES_ARRAY_ACCESS:Yt,TYPES_LINK_TO:Ut,TYPES_VALUE_AT:jt,TYPES_SELF:Ht,TYPES_LIBRARY:Vt,TYPES_DROP:Gt,TYPES_MAYBE:Ft,TYPES_NATIVE:Kt,TYPES_MOVE:Xt,TYPES_STRING:zt,TYPES_CONSTRUCTOR:Wt,TYPES_FREE:Jt,TYPES_DEFAULT_BLOCK:es,TYPES_BLOCK_END:$t,TYPES_CONTINUE:ts,TYPES_BRANCH:ss,TYPES_STATEMENT:ns,TYPES_DESTRUCTOR:qt,TYPES_DRAW:is,TYPES_SIZE:rs,TYPES_CONCAT:os,TYPES_FOREACH:cs,TYPES_WHILE:ls,TYPES_I32:us}),Le=_s;var Es=Object.freeze({COLON:58,COMMA:44,DIGIT_ZERO:48,DIGIT_NINE:57,DOT:46,HASHTAG:35,HORIZONTAL_TAB:9,HYPHEN_MINUS:45,LEFT_CURLY_BRACKET:123,LEFT_PARENTHESIS:40,LEFT_SQUARE_BRACKET:91,LINE_BREAK:10,NULL:0,PLUS_SIGN:43,RIGHT_CURLY_BRACKET:125,RIGHT_PARENTHESIS:41,RIGHT_SQUARE_BRACKET:93,SEMICOLON:59,SPACE:32}),ge=Es;var ps=Object.freeze([]),ms=Object.freeze({}),xs="",Ts="	",vs=`
`,ds="UTF-8";var bs=Object.freeze({EMPTY_ARRAY:ps,EMPTY_OBJECT:ms,EMPTY_STRING:xs,HORIZONTAL_TAB:Ts,LINE_BREAK:vs,UNICODE_TEXT:ds,Codes:ge,Keys:Oe,Types:Le}),F=bs;var{EMPTY_STRING:As,UNICODE_TEXT:oe}=F,Os=44,Ls=48,gs=57,ws=46,Ss=45,Rs=43,Is=65,Ns=90,Cs=-1,Ps=1,Bs=new TextDecoder(oe),ys=new TextEncoder,ks=(l,r,c=0,E=l.length|0,a=0,m=r.length|0)=>{for(a=a|0,c=c|0,m=m|0,E=E|0;;){let v=c>=E,T=a>=m;if(v||T)break;let A=l[c],O=r[a];if(c=c+1|0,a=a+1|0,A<O)return Cs;if(A>O)return Ps}return 0},Ds=(l,r,c=0,E=l.length|0,a=0,m=r.length|0)=>{for(a=a|0,c=c|0,m=m|0,E=E|0;;){let v=a>=m,T=c>=E;if(v||T)break;r[a]=l[c],a=a+1|0,c=c+1|0}},Ms=(l,r,c=0,E=l.length|0,a=0,m=r.length|0)=>{c=c|0,a=a|0,E=E|0,m=m|0;let v=E-c|0,T=m-a|0;if(v!==T)return!1;for(;;){let S=c>=E,A=a>=m;if(S||A)break;let C=l[c],k=r[a];if(c=c+1|0,a=a+1|0,C!==k)return!1}return!0},Ys=l=>{l=l>>>0;let r=0,c=0;for(;c=(c<<1|1)>>>0,!(c>l);)r=r+1|0;return r},Re=Object.freeze([48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102]),re=(l,r,c,E)=>{for(l=l>>>0,E=E??r.length|0,c=c|0,E=E|0;l>0&&E>c;)E=E-1|0,r[E]=Re[l&15],l=l>>>4},Us=(l,r,c,E)=>{let a=c|0,m=c+E|0;if(E===0)return!1;let v=r[a];for((v===Rs||v===Ss)&&(a=a+1|0);a<m;){let T=r[a];if(a=a+1|0,!(Ls<=T&&T<=gs||(ws===T||Os===T)))return!1}return!0},js=l=>{let r=l>=Is,c=l<=Ns;return r&&c},Q=128,V=127,Ie=-1,M=64,ce=l=>{l=l|0;let r=[];for(;;){let c=l&V;l=l>>7;let E=l===0,a=(c&M)===0,m=E&&a,v=l===-1,T=(c&M)!==0;if(m||v&&T){r.push(c);break}c=c|Q,r.push(c)}return r},Hs=l=>{let r=[],c=!0;for(;c;){let E=l&V;l>>=7,l===0&&!(E&M)||l===-1&&E&M?c=!1:E|=Q,r.push(E)}return r},Ne=(l,r)=>{r=r|0;let c=0,E=0;for(;;){let a=l[r]|0;r=r+1|0;let m=(a&V)<<E;if(E=E+7|0,c=c|m,(a&Q)===0){let T=(a&M)!==0,S=E<32;if(T&&S){let O=Ie<<E;c=c|O}break}}return c},Gs=(l,r)=>{r=r|0;let c=0,E=0;for(;;){let a=l[r]|0;r=r+1|0;let m=(a&V)<<E;if(E=E+7|0,c=c|m,!(a&Q)){if(a&M){let v=Ie<<E;c=c|v}break}}return c},Fs=l=>Bs.decode(l),Ks=l=>ys.encode(l),Xs=(l=As)=>{let r=l.length|0,c=ce(r),E=Buffer.from(l,oe);return Object.freeze([...c,...E])},zs=(l,r)=>{r=r|0;let c=Ne(l,r),E=ce(c).length;return r=r+E|0,l.subarray(r,r+c|0).toString(oe)},Zs=58,Qs=46,K=32,ne=48,Vs=67,y=new Uint8Array(Vs),we=y.subarray(0,8),Z=y.subarray(10,49),Se=y.subarray(51,68),ie=16,Ws=2;y[8]=Zs;y[9]=K;y[49]=K;y[50]=K;var qs=(l,r)=>{r=r??console.log;let c=32,E=126,a=l.length|0,m=0;for(;a>0;){we.fill(ne),re(m,we),Z.fill(K),Se.fill(K);let v=a>=ie?ie:a;a=a-ie|0;let T=0,S=0;for(let O=1;O<=v;O=O+1|0){let C=l[m]&255;Z[T+0|0]=ne,Z[T+1|0]=ne,re(C,Z,T,T+2|0);let k=Qs;c<=C&&C<=E&&(k=C),Se[S]=k,m=m+1|0,T=T+2|0,S=S+1|0,O%Ws===0&&(T=T+1|0)}let A=String.fromCodePoint(...y);r(A)}},Js=function*(l,r){let c=l.length|0,E=r.length|0,a=0;for(;a<c&&a<E;){let m=l[a],v=r[a];yield[m,v],a=a+1|0}},$s=function*(l,r,c){let E=l.length|0,a=r.length|0,m=c.length|0,v=0;for(;v<E&&v<a&&v<m;){let T=l[v],S=r[v],A=c[v];yield[T,S,A],v=v+1|0}},en=Object.freeze({ARRAY_COMPARE:ks,ARRAY_COPY:Ds,ARRAY_EQUAL:Ms,BIT_DEPTH:Ys,HEX_DIGITS:Re,HEX_ENCODE:re,IS_NUMBER:Us,IS_UPPERCASE:js,LEB128_DECODE:Ne,LEB128_DECODE_SIGNED:Gs,LEB128_ENCODE:ce,LEB128_ENCODE_SIGNED:Hs,UTF8_DECODE:Fs,UTF8_ENCODE:Ks,WASM_STRING_ENCODE:Xs,WASM_STRING_DECODE:zs,XXD_DUMP_HEX:qs,ZIP2:Js,ZIP3:$s}),Ce=en;var{Codes:w}=F,{EMPTY_STRING:bn}=F,{ARRAY_COPY:tn}=Ce,sn=Object.freeze({tabSize:4}),ye=new Set([40,41,91,93,123,125,46,44,58,59,64,61,47]);Object.freeze(ye);var ke=new Set([46,44]);Object.freeze(ke);var De=new Set([34,39]),Me=new Set([61,33,62,60]);Object.freeze(Me);var Pe=61,nn=58,rn=64,on=47;Object.freeze(De);var Ye=new Set([9,13,32]);Object.freeze(Ye);var X=1,Y=2,le=3,U=4,cn=(l,r,c)=>{if(r=r|0,c=c|0,(c-r|0)===0)return!1;let a=l[r];for((a===w.PLUS_SIGN||a===w.HYPHEN_MINUS)&&(r=r+1|0);r<c;){let m=l[r];r=r+1|0;let v=w.DIGIT_ZERO<=m&&m<=w.DIGIT_NINE,T=w.DOT===m||w.COMMA===m;if(!(v||T&&r<c&&w.DIGIT_ZERO<=l[r]&&l[r]<=w.DIGIT_NINE))return!1}return!0},D=class{constructor(r=sn){this.options=r,this.numberMark=!1,this.position=0,this.array=new Uint8Array(D.LIMIT_ARRAY),this.target=0,this.length=0,this.indexA=0,this.indexB=0,this.events=new Map,this.emitter=new Be.default,this.emitter.on("token",(c,E,a,m)=>{(this.events.get("token")||[]).forEach(T=>{T(c,E,a,m)})}),this.emitter.on("error",()=>{}),this.comment=!1,this.situation=X,this.quote=w.NULL,Object.seal(this)}on(r,c){if(D.SET_EVENTS.has(r)){let E=this.events.get(r)||[];E.push(c),this.events.set(r,E)}}feed(r){let c=r.length|0,E=0,a=0,m=c;for(;m>0;){let v=D.LIMIT_ARRAY-this.length|0,T=Math.min(v,m)|0;m=m-T|0,a=a+T|0,tn(r,this.array,E,a,this.target),this.length=this.length+T|0,this.flush(),E=E+T|0}}done(){this.array[this.indexB]=w.SPACE,this.length=this.length+1,this.flush()}flush(){for(;this.indexB<this.length;)switch(this.situation){case X:{this.flushTopLevel();break}case Y:{this.flushQuotation();break}case le:{this.flushComment();break}}let r=this.length-this.indexA|0;r>D.LIMIT_TOKEN||(r>0&&(this.array.copyWithin(0,this.indexA,this.indexB),this.indexA=0,this.indexB=r,this.target=r),this.length=r)}flushComment(){for(;this.indexB<this.length;){if((this.array[this.indexB]|0)===w.LINE_BREAK){this.drain("comment"),this.indexB=this.indexB+1|0,this.drain("token"),this.comment=!1,this.situation=X;break}this.indexB=this.indexB+1|0}this.comment===!0&&(this.length-this.indexA|0)>0&&this.drain("comment")}flushQuotation(){for(;this.indexB<this.length;){let r=this.array[this.indexB]|0;if(r===this.quote){if(this.situation!==U){this.drain("token"),this.quote=w.NULL,this.indexA=this.indexB,this.indexB++,this.drain("token"),this.indexA=this.indexB,this.situation=X;return}this.indexB++;continue}if(this.situation===Y&&r===w.LEFT_CURLY_BRACKET){this.drain("token"),this.indexB++,this.indexA=this.indexB-1,this.drain("token"),this.indexA=this.indexB,this.situation=U;continue}if(this.situation===U&&r===w.RIGHT_CURLY_BRACKET){this.drain("token"),this.indexB++,this.indexA=this.indexB-1,this.drain("token"),this.indexA=this.indexB,this.situation=Y;continue}if(this.situation===U){this.flushTopLevel();continue}this.indexB++}}flushTopLevel(){let{options:r}=this,{tabSize:c}=r;for(;this.indexB<this.length;){let E=()=>{let O=0;this.numberMark&&(this.indexB=this.indexB-1|0),O=this.indexB-this.indexA|0,O>0&&this.drain("token"),this.numberMark&&(this.indexB=this.indexB+1|0),O=this.indexB-this.indexA|0,O>0&&this.drain("token"),this.numberMark=!1},a=this.array[this.indexB]|0;if(a===w.RIGHT_CURLY_BRACKET&&this.situation===U){E(),this.indexB=this.indexB+1|0,this.drain("token"),this.situation=Y;return}if(a===w.HASHTAG){E(),this.indexB=this.indexB+1|0,this.drain("token"),this.comment=!0,this.situation=le;return}if(a===w.LINE_BREAK){E(),this.indexB=this.indexB+1|0,this.drain("token");continue}if(De.has(a)){E(),this.indexB=this.indexB+1|0,this.drain("token"),this.quote=a,this.situation=Y;return}if(Me.has(a)&&this.array[this.indexB+1]===Pe){E(),this.indexB=this.indexB+2|0,this.drain("token");continue}if(a===rn&&this.array[this.indexB+1]===on){E(),this.indexB=this.indexB+2|0,this.drain("token");continue}if(a===nn&&this.array[this.indexB+1]===Pe){E(),this.indexB=this.indexB+2|0,this.drain("token");continue}if(Ye.has(a)){E(),a===w.HORIZONTAL_TAB?this.position=this.position+c|0:this.position=this.position+1|0,this.indexA=this.indexA+1|0,this.indexB=this.indexB+1|0;continue}if(this.numberMark=!1,ye.has(a)){let O=!cn(this.array,this.indexA,this.indexB),C=!ke.has(a);if(O||C){E(),this.indexB=this.indexB+1|0,this.drain("token");continue}this.numberMark=!0}this.indexB=this.indexB+1|0}}drain(r){let{array:c,position:E}=this,a=this.indexB-this.indexA|0,m=this.indexA;this.emitter.emit(r,E,c,m,a),this.position=this.position+a|0,this.indexA=this.indexB|0}close(){}},P=D;G(P,"LIMIT_TOKEN",1e3),G(P,"LIMIT_ARRAY",D.LIMIT_TOKEN*2|0),G(P,"SET_EVENTS",new Set(["comment","error","token"])),G(P,"SET_SITUATIONS",new Set([X,Y,le,U]));Object.values(P).forEach(Object.freeze);Object.freeze(P);Object.freeze(Object.getPrototypeOf(P));var An=P;export{An as default};
/*! Bundled license information:

eventemitter2/lib/eventemitter2.js:
  (*!
   * EventEmitter2
   * https://github.com/hij1nx/EventEmitter2
   *
   * Copyright (c) 2013 hij1nx
   * Licensed under the MIT license.
   *)
*/
