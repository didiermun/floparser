function U(s){let r=[{start:s.buffer.byteLength/2,size:s.buffer.byteLength/2}],u=new Map,b=[],l=[];function d(){return r}function w(){return u}function f(e){let n=0;for(;n<r.length&&r[n].start<e.start;)n++;r.splice(n,0,e)}let g;function p(e){g===void 0?g=e:(l.push({first:g,second:e}),g=void 0)}function y(){if(!l.length)return[0,0];let e=l.pop();return[e.first,e.second]}function A(){if(l.length<2)return[0,0];let[e]=l.splice(l.length-2,1);return[e.first,e.second]}function c(e){let n=u.get(e);if(!n)throw new Error("Invalid pointer: "+e);let t=h(n.size),o=new Uint8Array(s.buffer,e,n.size);return new Uint8Array(s.buffer,t,n.size).set(o),t}function a(){let e=Array.from(u.entries());if(e.length<2){console.error("Not enough entries to merge.");return}let[n,t]=e[e.length-2],[o,i]=e[e.length-1],T={...t,size:t.size+i.size};u.delete(o),u.set(n,T)}function h(e){for(let t=0;t<r.length;t++)if(r[t].size>=e){let o=r.splice(t,1)[0];if(o.size>e){let i={start:o.start+e,size:o.size-e};f(i)}return o.size=e,u.set(o.start,o),o.start}if(s.buffer.byteLength+e>s.buffer.byteLength*s.buffer.byteLength/65536){let t=Math.ceil(e/65536);s.grow(t)}let n={start:s.buffer.byteLength,size:e};return u.set(n.start,n),n.start}function z(e){let n=u.get(e);if(!n){console.error("Unable to find block");return}u.delete(e);for(let t=0;t<r.length;t++)r[t].start+r[t].size===n.start?(n.start=r[t].start,n.size+=r[t].size,r.splice(t,1),t--):n.start+n.size===r[t].start&&(n.size+=r[t].size,r.splice(t,1),t--);f(n)}function V(e){return b.find(n=>n.dataPtr===e)}function P(e){let n=h(4*e).start,t={dataPtr:n,length:0,capacity:4,elementTypeSize:e};return b.push(t),n}function S(e,n){let t=V(e);if(!t)throw new Error("Vector not found");if(t.length>=t.capacity){let i=t.dataPtr;t.dataPtr=h(2*t.capacity*t.elementTypeSize).start,t.capacity*=2;let T=new Uint8Array(s.buffer,i,t.length*t.elementTypeSize);new Uint8Array(s.buffer,t.dataPtr,t.capacity*t.elementTypeSize).set(T),z(i)}let o=new Uint8Array(s.buffer,t.dataPtr+t.length*t.elementTypeSize,t.elementTypeSize);for(let i=0;i<t.elementTypeSize;i++)o[i]=n>>i*8&255;t.length+=1}function L(e,n=4){let t=h(n),o=new Uint8Array(s.buffer,t.start,n);for(let i=0;i<n;i++)o[i]=e>>i*8&255;return t.start}function k(e,n=4){let t=new Uint8Array(s.buffer,e,n),o=0;for(let i=0;i<n;i++)o|=t[i]<<i*8;return o}return{alloc:h,dealloc:z,merge:a,save:p,undo:y,undoPenultimate:A,createVector:P,pushToVector:S,allocateValue:L,readValue:k,getFreeList:d,getUsedBlocks:w,copy:c}}function M(s,r=void 0){let l=[],d="default",w,f,g;function p(c,a){let h=new Int32Array(s.buffer,c,a);return Array.from(h)}function y(c,a){let h=new Uint8Array(s.buffer,c,a*4);return new TextDecoder().decode(h)}function A(c){if(d==="default"){if(c===999999){d="array",l.pop();return}if(c===888888){d="string",l.pop();return}r?r.innerHTML=c:console.log(c)}else if(d==="array"){if(!w){w=c;return}if(!f){f=c;let a=p(w,f);r?r.innerHTML=a:console.log(a),w=void 0,f=void 0,d="default"}}else if(d==="string"){if(!f){f=c;return}if(!g){g=c;let a=y(g,f);r?r.innerHTML=a:console.log(a),g=void 0,f=void 0,d="default"}}}return{receiveParams:A}}export{M as createDrawer,U as createMemoryManager};
