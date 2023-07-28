var Xe=Object.create;var ee=Object.defineProperty;var Fe=Object.getOwnPropertyDescriptor;var Ke=Object.getOwnPropertyNames;var Ye=Object.getPrototypeOf,ze=Object.prototype.hasOwnProperty;var Qe=(c,r,l)=>r in c?ee(c,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):c[r]=l;var Ee=(c,r)=>()=>(r||c((r={exports:{}}).exports,r),r.exports);var Ze=(c,r,l,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let u of Ke(r))!ze.call(c,u)&&u!==l&&ee(c,u,{get:()=>r[u],enumerable:!(p=Fe(r,u))||p.enumerable});return c};var Ve=(c,r,l)=>(l=c!=null?Xe(Ye(c)):{},Ze(r||!c||!c.__esModule?ee(l,"default",{value:c,enumerable:!0}):l,c));var G=(c,r,l)=>(Qe(c,typeof r!="symbol"?r+"":r,l),l);var de=Ee((ve,xe)=>{(function(c){var r=Object.hasOwnProperty,l=Array.isArray?Array.isArray:function(t){return Object.prototype.toString.call(t)==="[object Array]"},p=10,u=typeof process=="object"&&typeof process.nextTick=="function",E=typeof Symbol=="function",d=typeof Reflect=="object",x=typeof setImmediate=="function",w=x?setImmediate:setTimeout,L=E?d&&typeof Reflect.ownKeys=="function"?Reflect.ownKeys:function(e){var t=Object.getOwnPropertyNames(e);return t.push.apply(t,Object.getOwnPropertySymbols(e)),t}:Object.keys;function O(){this._events={},this._conf&&y.call(this,this._conf)}function y(e){e&&(this._conf=e,e.delimiter&&(this.delimiter=e.delimiter),e.maxListeners!==c&&(this._maxListeners=e.maxListeners),e.wildcard&&(this.wildcard=e.wildcard),e.newListener&&(this._newListener=e.newListener),e.removeListener&&(this._removeListener=e.removeListener),e.verboseMemoryLeak&&(this.verboseMemoryLeak=e.verboseMemoryLeak),e.ignoreErrors&&(this.ignoreErrors=e.ignoreErrors),this.wildcard&&(this.listenerTree={}))}function P(e,t){var s="(node) warning: possible EventEmitter memory leak detected. "+e+" listeners added. Use emitter.setMaxListeners() to increase limit.";if(this.verboseMemoryLeak&&(s+=" Event name: "+t+"."),typeof process<"u"&&process.emitWarning){var n=new Error(s);n.name="MaxListenersExceededWarning",n.emitter=this,n.count=e,process.emitWarning(n)}else console.error(s),console.trace&&console.trace()}var U=function(e,t,s){var n=arguments.length;switch(n){case 0:return[];case 1:return[e];case 2:return[e,t];case 3:return[e,t,s];default:for(var i=new Array(n);n--;)i[n]=arguments[n];return i}};function ce(e,t){for(var s={},n,i=e.length,o=t?t.length:0,h=0;h<i;h++)n=e[h],s[n]=h<o?t[h]:c;return s}function he(e,t,s){this._emitter=e,this._target=t,this._listeners={},this._listenersCount=0;var n,i;if((s.on||s.off)&&(n=s.on,i=s.off),t.addEventListener?(n=t.addEventListener,i=t.removeEventListener):t.addListener?(n=t.addListener,i=t.removeListener):t.on&&(n=t.on,i=t.off),!n&&!i)throw Error("target does not implement any known event API");if(typeof n!="function")throw TypeError("on method must be a function");if(typeof i!="function")throw TypeError("off method must be a function");this._on=n,this._off=i;var o=e._observers;o?o.push(this):e._observers=[this]}Object.assign(he.prototype,{subscribe:function(e,t,s){var n=this,i=this._target,o=this._emitter,h=this._listeners,_=function(){var f=U.apply(null,arguments),a={data:f,name:t,original:e};if(s){var m=s.call(i,a);m!==!1&&o.emit.apply(o,[a.name].concat(f));return}o.emit.apply(o,[t].concat(f))};if(h[e])throw Error("Event '"+e+"' is already listening");this._listenersCount++,o._newListener&&o._removeListener&&!n._onNewListener?(this._onNewListener=function(f){f===t&&h[e]===null&&(h[e]=_,n._on.call(i,e,_))},o.on("newListener",this._onNewListener),this._onRemoveListener=function(f){f===t&&!o.hasListeners(f)&&h[e]&&(h[e]=null,n._off.call(i,e,_))},h[e]=null,o.on("removeListener",this._onRemoveListener)):(h[e]=_,n._on.call(i,e,_))},unsubscribe:function(e){var t=this,s=this._listeners,n=this._emitter,i,o,h=this._off,_=this._target,f;if(e&&typeof e!="string")throw TypeError("event must be a string");function a(){t._onNewListener&&(n.off("newListener",t._onNewListener),n.off("removeListener",t._onRemoveListener),t._onNewListener=null,t._onRemoveListener=null);var m=_e.call(n,t);n._observers.splice(m,1)}if(e){if(i=s[e],!i)return;h.call(_,e,i),delete s[e],--this._listenersCount||a()}else{for(o=L(s),f=o.length;f-- >0;)e=o[f],h.call(_,e,s[e]);this._listeners={},this._listenersCount=0,a()}}});function K(e,t,s,n){var i=Object.assign({},t);if(!e)return i;if(typeof e!="object")throw TypeError("options must be an object");var o=Object.keys(e),h=o.length,_,f,a;function m(T){throw Error('Invalid "'+_+'" option value'+(T?". Reason: "+T:""))}for(var I=0;I<h;I++){if(_=o[I],!n&&!r.call(t,_))throw Error('Unknown "'+_+'" option');f=e[_],f!==c&&(a=s[_],i[_]=a?a(f,m):f)}return i}function fe(e,t){return(typeof e!="function"||!e.hasOwnProperty("prototype"))&&t("value must be a constructor"),e}function ae(e){var t="value must be type of "+e.join("|"),s=e.length,n=e[0],i=e[1];return s===1?function(o,h){if(typeof o===n)return o;h(t)}:s===2?function(o,h){var _=typeof o;if(_===n||_===i)return o;h(t)}:function(o,h){for(var _=typeof o,f=s;f-- >0;)if(_===e[f])return o;h(t)}}var Z=ae(["function"]),Me=ae(["object","function"]);function ue(e,t,s){var n,i,o=0,h,_=new e(function(f,a,m){s=K(s,{timeout:0,overload:!1},{timeout:function(g,R){return g*=1,(typeof g!="number"||g<0||!Number.isFinite(g))&&R("timeout must be a positive number"),g}}),n=!s.overload&&typeof e.prototype.cancel=="function"&&typeof m=="function";function I(){i&&(i=null),o&&(clearTimeout(o),o=0)}var T=function(g){I(),f(g)},b=function(g){I(),a(g)};n?t(T,b,m):(i=[function(g){b(g||Error("canceled"))}],t(T,b,function(g){if(h)throw Error("Unable to subscribe on cancel event asynchronously");if(typeof g!="function")throw TypeError("onCancel callback must be a function");i.push(g)}),h=!0),s.timeout>0&&(o=setTimeout(function(){var g=Error("timeout");g.code="ETIMEDOUT",o=0,_.cancel(g),a(g)},s.timeout))});return n||(_.cancel=function(f){if(i){for(var a=i.length,m=1;m<a;m++)i[m](f);i[0](f),i=null}}),_}function _e(e){var t=this._observers;if(!t)return-1;for(var s=t.length,n=0;n<s;n++)if(t[n]._target===e)return n;return-1}function A(e,t,s,n,i){if(!s)return null;if(n===0){var o=typeof t;if(o==="string"){var h,_,f=0,a=0,m=this.delimiter,I=m.length;if((_=t.indexOf(m))!==-1){h=new Array(5);do h[f++]=t.slice(a,_),a=_+I;while((_=t.indexOf(m,a))!==-1);h[f++]=t.slice(a),t=h,i=f}else t=[t],i=1}else o==="object"?i=t.length:(t=[t],i=1)}var T=null,b,g,R,q,J,j=t[n],$=t[n+1],S,C;if(n===i)s._listeners&&(typeof s._listeners=="function"?(e&&e.push(s._listeners),T=[s]):(e&&e.push.apply(e,s._listeners),T=[s]));else if(j==="*"){for(S=L(s),_=S.length;_-- >0;)b=S[_],b!=="_listeners"&&(C=A(e,t,s[b],n+1,i),C&&(T?T.push.apply(T,C):T=C));return T}else if(j==="**"){for(J=n+1===i||n+2===i&&$==="*",J&&s._listeners&&(T=A(e,t,s,i,i)),S=L(s),_=S.length;_-- >0;)b=S[_],b!=="_listeners"&&(b==="*"||b==="**"?(s[b]._listeners&&!J&&(C=A(e,t,s[b],i,i),C&&(T?T.push.apply(T,C):T=C)),C=A(e,t,s[b],n,i)):b===$?C=A(e,t,s[b],n+2,i):C=A(e,t,s[b],n,i),C&&(T?T.push.apply(T,C):T=C));return T}else s[j]&&(T=A(e,t,s[j],n+1,i));if(g=s["*"],g&&A(e,t,g,n+1,i),R=s["**"],R)if(n<i)for(R._listeners&&A(e,t,R,i,i),S=L(R),_=S.length;_-- >0;)b=S[_],b!=="_listeners"&&(b===$?A(e,t,R[b],n+2,i):b===j?A(e,t,R[b],n+1,i):(q={},q[b]=R[b],A(e,t,{"**":q},n+1,i)));else R._listeners?A(e,t,R,i,i):R["*"]&&R["*"]._listeners&&A(e,t,R["*"],i,i);return T}function Ue(e,t,s){var n=0,i=0,o,h=this.delimiter,_=h.length,f;if(typeof e=="string")if((o=e.indexOf(h))!==-1){f=new Array(5);do f[n++]=e.slice(i,o),i=o+_;while((o=e.indexOf(h,i))!==-1);f[n++]=e.slice(i)}else f=[e],n=1;else f=e,n=e.length;if(n>1){for(o=0;o+1<n;o++)if(f[o]==="**"&&f[o+1]==="**")return}var a=this.listenerTree,m;for(o=0;o<n;o++)if(m=f[o],a=a[m]||(a[m]={}),o===n-1)return a._listeners?(typeof a._listeners=="function"&&(a._listeners=[a._listeners]),s?a._listeners.unshift(t):a._listeners.push(t),!a._listeners.warned&&this._maxListeners>0&&a._listeners.length>this._maxListeners&&(a._listeners.warned=!0,P.call(this,a._listeners.length,m))):a._listeners=t,!0;return!0}function pe(e,t,s,n){for(var i=L(e),o=i.length,h,_,f,a=e._listeners,m;o-- >0;)_=i[o],h=e[_],_==="_listeners"?f=s:f=s?s.concat(_):[_],m=n||typeof _=="symbol",a&&t.push(m?f:f.join(this.delimiter)),typeof h=="object"&&pe.call(this,h,t,f,m);return t}function V(e){for(var t=L(e),s=t.length,n,i,o;s-- >0;)i=t[s],n=e[i],n&&(o=!0,i!=="_listeners"&&!V(n)&&delete e[i]);return o}function me(e,t,s){this.emitter=e,this.event=t,this.listener=s}me.prototype.off=function(){return this.emitter.off(this.event,this.listener),this};function je(e,t,s){if(s===!0)i=!0;else if(s===!1)n=!0;else{if(!s||typeof s!="object")throw TypeError("options should be an object or true");var n=s.async,i=s.promisify,o=s.nextTick,h=s.objectify}if(n||o||i){var _=t,f=t._origin||t;if(o&&!u)throw Error("process.nextTick is not supported");i===c&&(i=t.constructor.name==="AsyncFunction"),t=function(){var a=arguments,m=this,I=this.event;return i?o?Promise.resolve():new Promise(function(T){w(T)}).then(function(){return m.event=I,_.apply(m,a)}):(o?process.nextTick:w)(function(){m.event=I,_.apply(m,a)})},t._async=!0,t._origin=f}return[t,h?new me(this,e,t):this]}function v(e){this._events={},this._newListener=!1,this._removeListener=!1,this.verboseMemoryLeak=!1,y.call(this,e)}v.EventEmitter2=v,v.prototype.listenTo=function(e,t,s){if(typeof e!="object")throw TypeError("target musts be an object");var n=this;s=K(s,{on:c,off:c,reducers:c},{on:Z,off:Z,reducers:Me});function i(o){if(typeof o!="object")throw TypeError("events must be an object");var h=s.reducers,_=_e.call(n,e),f;_===-1?f=new he(n,e,s):f=n._observers[_];for(var a=L(o),m=a.length,I,T=typeof h=="function",b=0;b<m;b++)I=a[b],f.subscribe(I,o[I]||I,T?h:h&&h[I])}return l(t)?i(ce(t)):i(typeof t=="string"?ce(t.split(/\s+/)):t),this},v.prototype.stopListeningTo=function(e,t){var s=this._observers;if(!s)return!1;var n=s.length,i,o=!1;if(e&&typeof e!="object")throw TypeError("target should be an object");for(;n-- >0;)i=s[n],(!e||i._target===e)&&(i.unsubscribe(t),o=!0);return o},v.prototype.delimiter=".",v.prototype.setMaxListeners=function(e){e!==c&&(this._maxListeners=e,this._conf||(this._conf={}),this._conf.maxListeners=e)},v.prototype.getMaxListeners=function(){return this._maxListeners},v.prototype.event="",v.prototype.once=function(e,t,s){return this._once(e,t,!1,s)},v.prototype.prependOnceListener=function(e,t,s){return this._once(e,t,!0,s)},v.prototype._once=function(e,t,s,n){return this._many(e,1,t,s,n)},v.prototype.many=function(e,t,s,n){return this._many(e,t,s,!1,n)},v.prototype.prependMany=function(e,t,s,n){return this._many(e,t,s,!0,n)},v.prototype._many=function(e,t,s,n,i){var o=this;if(typeof s!="function")throw new Error("many only accepts instances of Function");function h(){return--t===0&&o.off(e,h),s.apply(this,arguments)}return h._origin=s,this._on(e,h,n,i)},v.prototype.emit=function(){if(!this._events&&!this._all)return!1;this._events||O.call(this);var e=arguments[0],t,s=this.wildcard,n,i,o,h,_;if(e==="newListener"&&!this._newListener&&!this._events.newListener)return!1;if(s&&(t=e,e!=="newListener"&&e!=="removeListener"&&typeof e=="object")){if(i=e.length,E){for(o=0;o<i;o++)if(typeof e[o]=="symbol"){_=!0;break}}_||(e=e.join(this.delimiter))}var f=arguments.length,a;if(this._all&&this._all.length)for(a=this._all.slice(),o=0,i=a.length;o<i;o++)switch(this.event=e,f){case 1:a[o].call(this,e);break;case 2:a[o].call(this,e,arguments[1]);break;case 3:a[o].call(this,e,arguments[1],arguments[2]);break;default:a[o].apply(this,arguments)}if(s)a=[],A.call(this,a,t,this.listenerTree,0,i);else if(a=this._events[e],typeof a=="function"){switch(this.event=e,f){case 1:a.call(this);break;case 2:a.call(this,arguments[1]);break;case 3:a.call(this,arguments[1],arguments[2]);break;default:for(n=new Array(f-1),h=1;h<f;h++)n[h-1]=arguments[h];a.apply(this,n)}return!0}else a&&(a=a.slice());if(a&&a.length){if(f>3)for(n=new Array(f-1),h=1;h<f;h++)n[h-1]=arguments[h];for(o=0,i=a.length;o<i;o++)switch(this.event=e,f){case 1:a[o].call(this);break;case 2:a[o].call(this,arguments[1]);break;case 3:a[o].call(this,arguments[1],arguments[2]);break;default:a[o].apply(this,n)}return!0}else if(!this.ignoreErrors&&!this._all&&e==="error")throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");return!!this._all},v.prototype.emitAsync=function(){if(!this._events&&!this._all)return!1;this._events||O.call(this);var e=arguments[0],t=this.wildcard,s,n,i,o,h,_;if(e==="newListener"&&!this._newListener&&!this._events.newListener)return Promise.resolve([!1]);if(t&&(s=e,e!=="newListener"&&e!=="removeListener"&&typeof e=="object")){if(o=e.length,E){for(h=0;h<o;h++)if(typeof e[h]=="symbol"){n=!0;break}}n||(e=e.join(this.delimiter))}var f=[],a=arguments.length,m;if(this._all)for(h=0,o=this._all.length;h<o;h++)switch(this.event=e,a){case 1:f.push(this._all[h].call(this,e));break;case 2:f.push(this._all[h].call(this,e,arguments[1]));break;case 3:f.push(this._all[h].call(this,e,arguments[1],arguments[2]));break;default:f.push(this._all[h].apply(this,arguments))}if(t?(m=[],A.call(this,m,s,this.listenerTree,0)):m=this._events[e],typeof m=="function")switch(this.event=e,a){case 1:f.push(m.call(this));break;case 2:f.push(m.call(this,arguments[1]));break;case 3:f.push(m.call(this,arguments[1],arguments[2]));break;default:for(i=new Array(a-1),_=1;_<a;_++)i[_-1]=arguments[_];f.push(m.apply(this,i))}else if(m&&m.length){if(m=m.slice(),a>3)for(i=new Array(a-1),_=1;_<a;_++)i[_-1]=arguments[_];for(h=0,o=m.length;h<o;h++)switch(this.event=e,a){case 1:f.push(m[h].call(this));break;case 2:f.push(m[h].call(this,arguments[1]));break;case 3:f.push(m[h].call(this,arguments[1],arguments[2]));break;default:f.push(m[h].apply(this,i))}}else if(!this.ignoreErrors&&!this._all&&e==="error")return arguments[1]instanceof Error?Promise.reject(arguments[1]):Promise.reject("Uncaught, unspecified 'error' event.");return Promise.all(f)},v.prototype.on=function(e,t,s){return this._on(e,t,!1,s)},v.prototype.prependListener=function(e,t,s){return this._on(e,t,!0,s)},v.prototype.onAny=function(e){return this._onAny(e,!1)},v.prototype.prependAny=function(e){return this._onAny(e,!0)},v.prototype.addListener=v.prototype.on,v.prototype._onAny=function(e,t){if(typeof e!="function")throw new Error("onAny only accepts instances of Function");return this._all||(this._all=[]),t?this._all.unshift(e):this._all.push(e),this},v.prototype._on=function(e,t,s,n){if(typeof e=="function")return this._onAny(e,t),this;if(typeof t!="function")throw new Error("on only accepts instances of Function");this._events||O.call(this);var i=this,o;return n!==c&&(o=je.call(this,e,t,n),t=o[0],i=o[1]),this._newListener&&this.emit("newListener",e,t),this.wildcard?(Ue.call(this,e,t,s),i):(this._events[e]?(typeof this._events[e]=="function"&&(this._events[e]=[this._events[e]]),s?this._events[e].unshift(t):this._events[e].push(t),!this._events[e].warned&&this._maxListeners>0&&this._events[e].length>this._maxListeners&&(this._events[e].warned=!0,P.call(this,this._events[e].length,e))):this._events[e]=t,i)},v.prototype.off=function(e,t){if(typeof t!="function")throw new Error("removeListener only takes instances of Function");var s,n=[];if(this.wildcard){var i=typeof e=="string"?e.split(this.delimiter):e.slice();if(n=A.call(this,null,i,this.listenerTree,0),!n)return this}else{if(!this._events[e])return this;s=this._events[e],n.push({_listeners:s})}for(var o=0;o<n.length;o++){var h=n[o];if(s=h._listeners,l(s)){for(var _=-1,f=0,a=s.length;f<a;f++)if(s[f]===t||s[f].listener&&s[f].listener===t||s[f]._origin&&s[f]._origin===t){_=f;break}if(_<0)continue;return this.wildcard?h._listeners.splice(_,1):this._events[e].splice(_,1),s.length===0&&(this.wildcard?delete h._listeners:delete this._events[e]),this._removeListener&&this.emit("removeListener",e,t),this}else(s===t||s.listener&&s.listener===t||s._origin&&s._origin===t)&&(this.wildcard?delete h._listeners:delete this._events[e],this._removeListener&&this.emit("removeListener",e,t))}return this.listenerTree&&V(this.listenerTree),this},v.prototype.offAny=function(e){var t=0,s=0,n;if(e&&this._all&&this._all.length>0){for(n=this._all,t=0,s=n.length;t<s;t++)if(e===n[t])return n.splice(t,1),this._removeListener&&this.emit("removeListenerAny",e),this}else{if(n=this._all,this._removeListener)for(t=0,s=n.length;t<s;t++)this.emit("removeListenerAny",n[t]);this._all=[]}return this},v.prototype.removeListener=v.prototype.off,v.prototype.removeAllListeners=function(e){if(e===c)return!this._events||O.call(this),this;if(this.wildcard){var t=A.call(this,null,e,this.listenerTree,0),s,n;if(!t)return this;for(n=0;n<t.length;n++)s=t[n],s._listeners=null;this.listenerTree&&V(this.listenerTree)}else this._events&&(this._events[e]=null);return this},v.prototype.listeners=function(e){var t=this._events,s,n,i,o,h;if(e===c){if(this.wildcard)throw Error("event name required for wildcard emitter");if(!t)return[];for(s=L(t),o=s.length,i=[];o-- >0;)n=t[s[o]],typeof n=="function"?i.push(n):i.push.apply(i,n);return i}else{if(this.wildcard){if(h=this.listenerTree,!h)return[];var _=[],f=typeof e=="string"?e.split(this.delimiter):e.slice();return A.call(this,_,f,h,0),_}return t?(n=t[e],n?typeof n=="function"?[n]:n:[]):[]}},v.prototype.eventNames=function(e){var t=this._events;return this.wildcard?pe.call(this,this.listenerTree,[],null,e):t?L(t):[]},v.prototype.listenerCount=function(e){return this.listeners(e).length},v.prototype.hasListeners=function(e){if(this.wildcard){var t=[],s=typeof e=="string"?e.split(this.delimiter):e.slice();return A.call(this,t,s,this.listenerTree,0),t.length>0}var n=this._events,i=this._all;return!!(i&&i.length||n&&(e===c?L(n).length:n[e]))},v.prototype.listenersAny=function(){return this._all?this._all:[]},v.prototype.waitFor=function(e,t){var s=this,n=typeof t;return n==="number"?t={timeout:t}:n==="function"&&(t={filter:t}),t=K(t,{timeout:0,filter:c,handleError:!1,Promise,overload:!1},{filter:Z,Promise:fe}),ue(t.Promise,function(i,o,h){function _(){var f=t.filter;if(!(f&&!f.apply(s,arguments)))if(s.off(e,_),t.handleError){var a=arguments[0];a?o(a):i(U.apply(null,arguments).slice(1))}else i(U.apply(null,arguments))}h(function(){s.off(e,_)}),s._on(e,_,!1)},{timeout:t.timeout,overload:t.overload})};function Ge(e,t,s){s=K(s,{Promise,timeout:0,overload:!1},{Promise:fe});var n=s.Promise;return ue(n,function(i,o,h){var _;if(typeof e.addEventListener=="function"){_=function(){i(U.apply(null,arguments))},h(function(){e.removeEventListener(t,_)}),e.addEventListener(t,_,{once:!0});return}var f=function(){a&&e.removeListener("error",a),i(U.apply(null,arguments))},a;t!=="error"&&(a=function(m){e.removeListener(t,f),o(m)},e.once("error",a)),h(function(){a&&e.removeListener("error",a),e.removeListener(t,f)}),e.once(t,f)},{timeout:s.timeout,overload:s.overload})}var W=v.prototype;if(Object.defineProperties(v,{defaultMaxListeners:{get:function(){return W._maxListeners},set:function(e){if(typeof e!="number"||e<0||Number.isNaN(e))throw TypeError("n must be a non-negative number");W._maxListeners=e},enumerable:!0},once:{value:Ge,writable:!0,configurable:!0}}),Object.defineProperties(W,{_maxListeners:{value:p,writable:!0,configurable:!0},_observers:{value:null,writable:!0,configurable:!0}}),typeof define=="function"&&define.amd)define(function(){return v});else if(typeof ve=="object")xe.exports=v;else{var He=new Function("","return this")();He.EventEmitter2=v}})()});var be=Ee((Ds,Te)=>{Te.exports=de()});var ye=Ve(be(),1);var We="as",qe="=",Je="break",$e="else",et="enum",tt="export",st="if",nt="import",it="->",rt="is",ot="loop",lt="mut",ct="native",ht="object",ft="fn",at="return",ut="self",_t="template",pt=Object.freeze({ALIAS:We,ASSIGN:qe,BREAK:Je,ELSE:$e,ENUMERATION:et,EXPORT:tt,IF:st,IMPORT:nt,INTO:it,IS:rt,LOOP:ot,MUTABLE:lt,NATIVE:ct,OBJECT:ht,PROCEDURE:ft,RETURN:at,SELF:ut,TEMPLATE:_t}),Le=pt;var mt="array",Et="assignment",vt="branch-default",xt="branch-value",dt="break",Tt="condition",bt="declaration",Lt="enumeration",Ot="export",gt="expression",At="import",wt="instance",It="label",Rt="literal",Nt="loop",Ct="module",yt="mutable",Bt="name-list",St="native",kt="object",Pt="procedure",Dt="procedure-call",Mt="return",Ut="self",jt="submodule",Gt="template",Ht="type-pair",Xt=Object.freeze({ARRAY:mt,ASSIGNMENT:Et,BRANCH_DEFAULT:vt,BRANCH_VALUE:xt,BREAK:dt,CONDITION:Tt,DECLARATION:bt,ENUMERATION:Lt,EXPORT:Ot,EXPRESSION:gt,IMPORT:At,INSTANCE:wt,LABEL:It,LITERAL:Rt,LOOP:Nt,MODULE:Ct,MUTABLE:yt,NAME_LIST:Bt,NATIVE:St,OBJECT:kt,PROCEDURE:Pt,PROCEDURE_CALL:Dt,RETURN:Mt,SELF:Ut,SUBMODULE:jt,TEMPLATE:Gt,TYPE_PAIR:Ht}),Oe=Xt;var Ft=Object.freeze({COLON:58,COMMA:44,DIGIT_ZERO:48,DIGIT_NINE:57,DOT:46,HASHTAG:35,HORIZONTAL_TAB:9,HYPHEN_MINUS:45,LEFT_CURLY_BRACKET:123,LEFT_PARENTHESIS:40,LEFT_SQUARE_BRACKET:91,LINE_BREAK:10,NULL:0,PLUS_SIGN:43,RIGHT_CURLY_BRACKET:125,RIGHT_PARENTHESIS:41,RIGHT_SQUARE_BRACKET:93,SEMICOLON:59,SPACE:32}),ge=Ft;var Kt=Object.freeze([]),Yt=Object.freeze({}),zt="",Qt="	",Zt=`
`,Vt="UTF-8",Wt=Object.freeze({EMPTY_ARRAY:Kt,EMPTY_OBJECT:Yt,EMPTY_STRING:zt,HORIZONTAL_TAB:Qt,LINE_BREAK:Zt,UNICODE_TEXT:Vt,Codes:ge,Keys:Le,Types:Oe}),H=Wt;var{EMPTY_STRING:qt,UNICODE_TEXT:ie}=H,Jt=44,$t=48,es=57,ts=46,ss=45,ns=43,is=65,rs=90,os=-1,ls=1,cs=new TextDecoder(ie),hs=new TextEncoder,fs=(c,r,l=0,p=c.length|0,u=0,E=r.length|0)=>{for(u=u|0,l=l|0,E=E|0,p=p|0;;){let d=l>=p,x=u>=E;if(d||x)break;let L=c[l],O=r[u];if(l=l+1|0,u=u+1|0,L<O)return os;if(L>O)return ls}return 0},as=(c,r,l=0,p=c.length|0,u=0,E=r.length|0)=>{for(u=u|0,l=l|0,E=E|0,p=p|0;;){let d=u>=E,x=l>=p;if(d||x)break;r[u]=c[l],u=u+1|0,l=l+1|0}},us=(c,r,l=0,p=c.length|0,u=0,E=r.length|0)=>{l=l|0,u=u|0,p=p|0,E=E|0;let d=p-l|0,x=E-u|0;if(d!==x)return!1;for(;;){let w=l>=p,L=u>=E;if(w||L)break;let y=c[l],P=r[u];if(l=l+1|0,u=u+1|0,y!==P)return!1}return!0},_s=c=>{c=c>>>0;let r=0,l=0;for(;l=(l<<1|1)>>>0,!(l>c);)r=r+1|0;return r},Ie=Object.freeze([48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102]),ne=(c,r,l,p)=>{for(c=c>>>0,p=p??r.length|0,l=l|0,p=p|0;c>0&&p>l;)p=p-1|0,r[p]=Ie[c&15],c=c>>>4},ps=(c,r,l,p)=>{let u=l|0,E=l+p|0;if(p===0)return!1;let d=r[u];for((d===ns||d===ss)&&(u=u+1|0);u<E;){let x=r[u];if(u=u+1|0,!($t<=x&&x<=es||(ts===x||Jt===x)))return!1}return!0},ms=c=>{let r=c>=is,l=c<=rs;return r&&l},z=128,Q=127,Re=-1,M=64,re=c=>{c=c|0;let r=[];for(;;){let l=c&Q;c=c>>7;let p=c===0,u=(l&M)===0,E=p&&u,d=c===-1,x=(l&M)!==0;if(E||d&&x){r.push(l);break}l=l|z,r.push(l)}return r},Es=c=>{let r=[],l=!0;for(;l;){let p=c&Q;c>>=7,c===0&&!(p&M)||c===-1&&p&M?l=!1:p|=z,r.push(p)}return r},Ne=(c,r)=>{r=r|0;let l=0,p=0;for(;;){let u=c[r]|0;r=r+1|0;let E=(u&Q)<<p;if(p=p+7|0,l=l|E,(u&z)===0){let x=(u&M)!==0,w=p<32;if(x&&w){let O=Re<<p;l=l|O}break}}return l},vs=(c,r)=>{r=r|0;let l=0,p=0;for(;;){let u=c[r]|0;r=r+1|0;let E=(u&Q)<<p;if(p=p+7|0,l=l|E,!(u&z)){if(u&M){let d=Re<<p;l=l|d}break}}return l},xs=c=>cs.decode(c),ds=c=>hs.encode(c),Ts=(c=qt)=>{let r=c.length|0,l=re(r),p=Buffer.from(c,ie);return Object.freeze([...l,...p])},bs=(c,r)=>{r=r|0;let l=Ne(c,r),p=re(l).length;return r=r+p|0,c.subarray(r,r+l|0).toString(ie)},Ls=58,Os=46,X=32,te=48,gs=67,k=new Uint8Array(gs),Ae=k.subarray(0,8),Y=k.subarray(10,49),we=k.subarray(51,68),se=16,As=2;k[8]=Ls;k[9]=X;k[49]=X;k[50]=X;var ws=(c,r)=>{r=r??console.log;let l=32,p=126,u=c.length|0,E=0;for(;u>0;){Ae.fill(te),ne(E,Ae),Y.fill(X),we.fill(X);let d=u>=se?se:u;u=u-se|0;let x=0,w=0;for(let O=1;O<=d;O=O+1|0){let y=c[E]&255;Y[x+0|0]=te,Y[x+1|0]=te,ne(y,Y,x,x+2|0);let P=Os;l<=y&&y<=p&&(P=y),we[w]=P,E=E+1|0,x=x+2|0,w=w+1|0,O%As===0&&(x=x+1|0)}let L=String.fromCodePoint(...k);r(L)}},Is=function*(c,r){let l=c.length|0,p=r.length|0,u=0;for(;u<l&&u<p;){let E=c[u],d=r[u];yield[E,d],u=u+1|0}},Rs=function*(c,r,l){let p=c.length|0,u=r.length|0,E=l.length|0,d=0;for(;d<p&&d<u&&d<E;){let x=c[d],w=r[d],L=l[d];yield[x,w,L],d=d+1|0}},Ns=Object.freeze({ARRAY_COMPARE:fs,ARRAY_COPY:as,ARRAY_EQUAL:us,BIT_DEPTH:_s,HEX_DIGITS:Ie,HEX_ENCODE:ne,IS_NUMBER:ps,IS_UPPERCASE:ms,LEB128_DECODE:Ne,LEB128_DECODE_SIGNED:vs,LEB128_ENCODE:re,LEB128_ENCODE_SIGNED:Es,UTF8_DECODE:xs,UTF8_ENCODE:ds,WASM_STRING_ENCODE:Ts,WASM_STRING_DECODE:bs,XXD_DUMP_HEX:ws,ZIP2:Is,ZIP3:Rs}),Ce=Ns;var{Codes:N}=H,{EMPTY_STRING:Zs}=H,{ARRAY_COPY:Cs}=Ce,ys=Object.freeze({tabSize:4}),Be=new Set([40,41,91,93,123,125,46,44,58,59,64,61]);Object.freeze(Be);var Se=new Set([46,44]);Object.freeze(Se);var ke=new Set([34,39]),Pe=new Set([61,33,62,60]);Object.freeze(Pe);var Bs=61,Ss=58;Object.freeze(ke);var De=new Set([9,13,32]);Object.freeze(De);var F=1,oe=2,le=3,ks=(c,r,l)=>{if(r=r|0,l=l|0,(l-r|0)===0)return!1;let u=c[r];for((u===N.PLUS_SIGN||u===N.HYPHEN_MINUS)&&(r=r+1|0);r<l;){let E=c[r];r=r+1|0;let d=N.DIGIT_ZERO<=E&&E<=N.DIGIT_NINE,x=N.DOT===E||N.COMMA===E;if(!(d||x&&r<l&&N.DIGIT_ZERO<=c[r]&&c[r]<=N.DIGIT_NINE))return!1}return!0},D=class{constructor(r=ys){this.options=r,this.numberMark=!1,this.position=0,this.array=new Uint8Array(D.LIMIT_ARRAY),this.target=0,this.length=0,this.indexA=0,this.indexB=0,this.events=new Map,this.emitter=new ye.default,this.emitter.on("token",(l,p,u,E)=>{(this.events.get("token")||[]).forEach(x=>{x(l,p,u,E)})}),this.emitter.on("error",()=>{}),this.comment=!1,this.situation=F,this.quote=N.NULL,Object.seal(this)}on(r,l){if(D.SET_EVENTS.has(r)){let p=this.events.get(r)||[];p.push(l),this.events.set(r,p)}}feed(r){let l=r.length|0,p=0,u=0,E=l;for(;E>0;){let d=D.LIMIT_ARRAY-this.length|0,x=Math.min(d,E)|0;E=E-x|0,u=u+x|0,Cs(r,this.array,p,u,this.target),this.length=this.length+x|0,this.flush(),p=p+x|0}}done(){this.array[this.indexB]=N.SPACE,this.length=this.length+1,this.flush()}flush(){for(;this.indexB<this.length;)switch(this.situation){case F:{this.flushTopLevel();break}case oe:{this.flushQuotation();break}case le:{this.flushComment();break}}let r=this.length-this.indexA|0;r>D.LIMIT_TOKEN||(r>0&&(this.array.copyWithin(0,this.indexA,this.indexB),this.indexA=0,this.indexB=r,this.target=r),this.length=r)}flushComment(){for(;this.indexB<this.length;){if((this.array[this.indexB]|0)===N.LINE_BREAK){this.drain("comment"),this.indexB=this.indexB+1|0,this.drain("token"),this.comment=!1,this.situation=F;break}this.indexB=this.indexB+1|0}this.comment===!0&&(this.length-this.indexA|0)>0&&this.drain("comment")}flushQuotation(){for(;this.indexB<this.length;){let r=this.indexB-this.indexA|0;if((this.array[this.indexB]|0)===this.quote){this.quote=N.NULL,r>0&&this.drain("token"),this.indexB=this.indexB+1|0,this.drain("token"),this.situation=F;return}this.indexB=this.indexB+1|0}}flushTopLevel(){let{options:r}=this,{tabSize:l}=r;for(;this.indexB<this.length;){let p=()=>{let O=0;this.numberMark&&(this.indexB=this.indexB-1|0),O=this.indexB-this.indexA|0,O>0&&this.drain("token"),this.numberMark&&(this.indexB=this.indexB+1|0),O=this.indexB-this.indexA|0,O>0&&this.drain("token"),this.numberMark=!1},u=this.array[this.indexB]|0;if(u===N.HASHTAG){p(),this.indexB=this.indexB+1|0,this.drain("token"),this.comment=!0,this.situation=le;return}if(u===N.LINE_BREAK){p(),this.indexB=this.indexB+1|0,this.drain("token");continue}if(ke.has(u)){p(),this.indexB=this.indexB+1|0,this.drain("token"),this.quote=u,this.situation=oe;return}if(Pe.has(u)&&this.array[this.indexB+1]===Bs){p(),this.indexB=this.indexB+2|0,this.drain("token");continue}if(u===Ss&&this.array[this.indexB+1]===61){p(),this.indexB=this.indexB+2|0,this.drain("token");continue}if(De.has(u)){p(),u===N.HORIZONTAL_TAB?this.position=this.position+l|0:this.position=this.position+1|0,this.indexA=this.indexA+1|0,this.indexB=this.indexB+1|0;continue}if(this.numberMark=!1,Be.has(u)){let O=!ks(this.array,this.indexA,this.indexB),y=!Se.has(u);if(O||y){p(),this.indexB=this.indexB+1|0,this.drain("token");continue}this.numberMark=!0}this.indexB=this.indexB+1|0}}drain(r){let{array:l,position:p}=this,u=this.indexB-this.indexA|0,E=this.indexA;this.emitter.emit(r,p,l,E,u),this.position=this.position+u|0,this.indexA=this.indexB|0}close(){}},B=D;G(B,"LIMIT_TOKEN",1e3),G(B,"LIMIT_ARRAY",D.LIMIT_TOKEN*2|0),G(B,"SET_EVENTS",new Set(["comment","error","token"])),G(B,"SET_SITUATIONS",new Set([F,oe,le]));Object.values(B).forEach(Object.freeze);Object.freeze(B);Object.freeze(Object.getPrototypeOf(B));var Vs=B;export{Vs as default};
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
