var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l,s;function i(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){t.value=null==e?"":e}function b(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function w(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}function k(t){s=t}function _(){if(!s)throw new Error("Function called outside component initialization");return s}const x=[],E=[],N=[],S=[],j=Promise.resolve();let q=!1;function L(t){N.push(t)}let P=!1;const C=new Set;function O(){if(!P){P=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];k(e),R(e.$$)}for(k(null),x.length=0;E.length;)E.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];C.has(e)||(C.add(e),e())}N.length=0}while(x.length);for(;S.length;)S.pop()();q=!1,P=!1,C.clear()}}function R(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const z=new Set;let T;function H(){T={r:0,c:[],p:T}}function J(){T.r||o(T.c),T=T.p}function U(t,e){t&&t.i&&(z.delete(t),t.i(e))}function A(t,e,n,o){if(t&&t.o){if(z.has(t))return;z.add(t),T.c.push((()=>{z.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function I(t,e){const n=e.token={};function o(t,o,r,c){if(e.token!==n)return;e.resolved=c;let l=e.ctx;void 0!==r&&(l=l.slice(),l[r]=c);const s=t&&(e.current=t)(l);let i=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(H(),A(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),J())})):e.block.d(1),s.c(),U(s,1),s.m(e.mount(),e.anchor),i=!0),e.block=s,e.blocks&&(e.blocks[o]=s),i&&O()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=_();if(t.then((t=>{k(n),o(e.then,1,e.value,t),k(null)}),(t=>{if(k(n),o(e.catch,2,e.error,t),k(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}function M(t,e,n){const o=e.slice(),{resolved:r}=t;t.current===t.then&&(o[t.value]=r),t.current===t.catch&&(o[t.error]=r),t.block.p(o,n)}function W(t){t&&t.c()}function X(t,n,c,l){const{fragment:s,on_mount:i,on_destroy:a,after_update:u}=t.$$;s&&s.m(n,c),l||L((()=>{const n=i.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(L)}function B(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(x.push(t),q||(q=!0,j.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,r,c,l,i,a,u,p=[-1]){const h=s;k(e);const d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(h?h.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:r.target||h.$$.root};u&&u(d.root);let m=!1;if(d.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),m&&D(e,t)),n})):[],d.update(),m=!0,o(d.before_update),d.fragment=!!l&&l(d.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();r.intro&&U(e.$$.fragment),X(e,r.target,r.anchor,r.customElement),O()}k(h)}class G{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class V{constructor(t,e){this.country=t,this.full_locale=e}}async function K(){const t=await async function(){const t=await fetch("https://warm-coast-72718.herokuapp.com/https://apis.justwatch.com/content/locales/state",{headers:{"X-Requested-With":"fetch"}});if(0==t.ok)throw new Error("Http Error: "+t.status);return await t.json()}();var e=[];return t.forEach((t=>{var n=new V(t.country,t.full_locale);e.push(n)})),e}async function Q(){const t=await K();var e=[],n=t.map((async t=>{var n=await async function(t){const e=`https://warm-coast-72718.herokuapp.com/https://apis.justwatch.com/content/providers/locale/${t}`,n=await fetch(e,{headers:{"X-Requested-With":"fetch"}});if(0==n.ok)throw new Error("Http Error: "+n.status);return n.json()}(t.full_locale),o={country:t.country,providers:n};e.push(o)}));return await Promise.all(n),e}class Y{constructor(t,e,n,o,r,c){this.title=t,this.id=e,this.poster_uri=n,this.type=o,this.release_year=r,this.query_locale=c}}async function Z(t,e){const n=await async function(t,e){const n=`https://warm-coast-72718.herokuapp.com/https://apis.justwatch.com/content/titles/${e}/popular`,o={query:t},r=await fetch(n,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json","X-Requested-With":"fetch"}});if(0==r.ok)throw new Error("Http Error: "+r.status);return await r.json()}(t,e.full_locale);var o=[];return n.items.forEach((t=>{var n,r=new RegExp("\\s*([0-9]+)").exec(t.poster);n=null==r?"NULL":`https://images.justwatch.com/poster/${r[0]}/s592/poster.webp`,o.push(new Y(t.title,t.id,n,t.object_type,t.original_release_year,e))})),o}function tt(e){let n;return{c(){n=h("div"),n.innerHTML='<span class="svelte-152oh3b"><h1 class="svelte-152oh3b">Loading...</h1></span> \n  <span class="svelte-152oh3b"><div class="loader svelte-152oh3b"></div></span>',b(n,"margin-top","8rem")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class et extends G{constructor(t){super(),F(this,t,null,tt,c,{})}}function nt(t,e,n){const o=t.slice();return o[7]=e[n],o}function ot(t){let e,n,o={ctx:t,current:null,token:null,hasCatch:!1,pending:it,then:lt,catch:ct,value:4,blocks:[,,,]};return I(t[4],o),{c(){e=h("div"),o.block.c(),v(e,"class","class svelte-1uxoscp")},m(t,r){u(t,e,r),o.block.m(e,o.anchor=null),o.mount=()=>e,o.anchor=null,n=!0},p(e,n){M(o,t=e,n)},i(t){n||(U(o.block),n=!0)},o(t){for(let t=0;t<3;t+=1){A(o.blocks[t])}n=!1},d(t){t&&f(e),o.block.d(),o.token=null,o=null}}}function rt(t){let e,n;return e=new Ft({props:{page:"SearchResults",search:t[0]+",",locale:JSON.parse(t[1])}}),{c(){W(e.$$.fragment)},m(t,o){X(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.search=t[0]+","),2&n&&(o.locale=JSON.parse(t[1])),e.$set(o)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function ct(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function lt(e){let n,r,c,l,s,i,d,g,k,_,x,E,N,S,j,q,P=e[4],C=[];for(let t=0;t<P.length;t+=1)C[t]=st(nt(e,P,t));return{c(){n=h("div"),r=m(),c=h("div"),l=h("h1"),l.textContent="Global Streaming Search",s=m(),i=h("h3"),i.textContent="Search for a movie or TV show title and see what streaming services\n          offer it worldwide!",d=m(),g=h("div"),k=h("form"),_=h("input"),x=m(),E=h("select");for(let t=0;t<C.length;t+=1)C[t].c();N=m(),S=h("input"),v(n,"class","background svelte-1uxoscp"),v(l,"class","svelte-1uxoscp"),v(i,"class","svelte-1uxoscp"),v(_,"class","search svelte-1uxoscp"),v(_,"type","text"),v(_,"placeholder","Title"),v(E,"class","search svelte-1uxoscp"),void 0===e[1]&&L((()=>e[6].call(E))),v(S,"type","submit"),v(S,"class","search svelte-1uxoscp"),b(g,"display","inline-block"),v(c,"class","top svelte-1uxoscp")},m(t,o){u(t,n,o),u(t,r,o),u(t,c,o),a(c,l),a(c,s),a(c,i),a(c,d),a(c,g),a(g,k),a(k,_),y(_,e[0]),a(k,x),a(k,E);for(let t=0;t<C.length;t+=1)C[t].m(E,null);var f;w(E,e[1]),a(k,N),a(k,S),j||(q=[$(_,"input",e[5]),$(E,"change",e[6]),$(k,"submit",(f=e[3],function(t){return t.preventDefault(),f.call(this,t)}))],j=!0)},p(t,e){if(1&e&&_.value!==t[0]&&y(_,t[0]),16&e){let n;for(P=t[4],n=0;n<P.length;n+=1){const o=nt(t,P,n);C[n]?C[n].p(o,e):(C[n]=st(o),C[n].c(),C[n].m(E,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=P.length}18&e&&w(E,t[1])},i:t,o:t,d(t){t&&f(n),t&&f(r),t&&f(c),p(C,t),j=!1,o(q)}}}function st(e){let n,o,r,c=e[7].country+"";return{c(){n=h("option"),o=d(c),n.__value=r=JSON.stringify(e[7]),n.value=n.__value},m(t,e){u(t,n,e),a(n,o)},p:t,d(t){t&&f(n)}}}function it(e){let n,o;return n=new et({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),o=!0},p:t,i(t){o||(U(n.$$.fragment,t),o=!0)},o(t){A(n.$$.fragment,t),o=!1},d(t){B(n,t)}}}function at(t){let e,n,o,r;const c=[rt,ot],l=[];function s(t,e){return t[2]?0:1}return e=s(t),n=l[e]=c[e](t),{c(){n.c(),o=g()},m(t,n){l[e].m(t,n),u(t,o,n),r=!0},p(t,[r]){let i=e;e=s(t),e===i?l[e].p(t,r):(H(),A(l[i],1,1,(()=>{l[i]=null})),J(),n=l[e],n?n.p(t,r):(n=l[e]=c[e](t),n.c()),U(n,1),n.m(o.parentNode,o))},i(t){r||(U(n),r=!0)},o(t){A(n),r=!1},d(t){l[e].d(t),t&&f(o)}}}function ut(t,e,n){let o,r,c=K(),l=!1;return[o,r,l,function(){null!=o?n(2,l=!0):alert("Please input a valid title.")},c,function(){o=this.value,n(0,o)},function(){r=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(1,r),n(4,c)}]}class ft extends G{constructor(t){super(),F(this,t,ut,at,c,{})}}class pt extends Y{constructor(t,e,n,o,r){super(t.title,t.id,t.poster_uri,t.type,t.release_year,t.query_locale),this.short_description=e,this.number_seasons=n,this.backdrop_url=o,this.offers=r}}async function ht(t,e){console.time("test");const n=await K();let o=[];var r=n.map((async e=>{let n=await async function(t,e,n){const o=`https://warm-coast-72718.herokuapp.com/https://apis.justwatch.com/content/titles/${n}/${t}/locale/${e}`,r=await fetch(o,{headers:{"X-Requested-With":"fetch"}});if(0==r.ok)throw new Error("Http Error: "+r.status);return r.json()}(t.id,e.full_locale,t.type);o.push({country:e.country,info:n})}));await Promise.all(r);let c=o.filter((e=>e.country===t.query_locale.country));c=c[0].info;let l=c.short_description,s=new RegExp("\\s*([0-9]+)").exec(c.backdrops[0].backdrop_url),i=null!=s?`https://images.justwatch.com/backdrop/${s[0]}/s1920/backdrop.webp`:"NULL",a="seasons"in c?c.seasons:"NULL",u=[];var f=o.map((async t=>{let n=t.country;if("offers"in(t=t.info)){let r=[];var o=t.offers.map((async t=>{t.monitization_types,e.forEach((e=>{t.provider_id==e.id&&r.push({id:e.id,short_name:e.short_name,clear_name:e.clear_name,icon_uri:e.icon_uri,monetization_types:e.monetization_types,url:t.urls.standard_web})}))}));await Promise.all(o),u.push({country:n,offers:r})}}));return await Promise.all(f),console.timeEnd("test"),new pt(t,l,a,i,u)}class dt{constructor(t,e,n,o,r){this.id=t,this.short_name=e,this.clear_name=n,this.icon_uri=o,this.monetization_types=r}}function mt(t,e,n){const o=t.slice();return o[7]=e[n],o}function gt(t){let e,n,o,r,c,l,s,i={ctx:t,current:null,token:null,hasCatch:!1,pending:Et,then:yt,catch:vt,value:4,blocks:[,,,]};return I(t[4],i),{c(){e=h("h2"),n=d("Results for "),o=h("span"),r=d(t[0]),c=m(),l=g(),i.block.c(),b(o,"color","red"),b(e,"color","white"),b(e,"text-align","center")},m(t,f){u(t,e,f),a(e,n),a(e,o),a(o,r),u(t,c,f),u(t,l,f),i.block.m(t,i.anchor=f),i.mount=()=>l.parentNode,i.anchor=l,s=!0},p(e,n){t=e,(!s||1&n)&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,t[0]),M(i,t,n)},i(t){s||(U(i.block),s=!0)},o(t){for(let t=0;t<3;t+=1){A(i.blocks[t])}s=!1},d(t){t&&f(e),t&&f(c),t&&f(l),i.block.d(t),i.token=null,i=null}}}function $t(t){let e,n;return e=new Ft({props:{page:"Selection",selection:t[2]}}),{c(){W(e.$$.fragment)},m(t,o){X(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.selection=t[2]),e.$set(o)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function vt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function yt(e){let n;let o=function(t,e){return t[4].length>0?wt:bt}(e),r=o(e);return{c(){r.c(),n=g()},m(t,e){r.m(t,e),u(t,n,e)},p(t,e){r.p(t,e)},i:t,o:t,d(t){r.d(t),t&&f(n)}}}function bt(e){let n;return{c(){n=h("span"),n.innerHTML="<h1>No results 😭</h1> \n        <h2>please reload the page and try a different title.</h2>",b(n,"color","white"),b(n,"text-align","center")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function wt(t){let e,n=t[4],o=[];for(let e=0;e<n.length;e+=1)o[e]=xt(mt(t,n,e));return{c(){e=h("div");for(let t=0;t<o.length;t+=1)o[t].c();v(e,"class","results svelte-1rudybt")},m(t,n){u(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null)},p(t,r){if(24&r){let c;for(n=t[4],c=0;c<n.length;c+=1){const l=mt(t,n,c);o[c]?o[c].p(l,r):(o[c]=xt(l),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}},d(t){t&&f(e),p(o,t)}}}function kt(e){let n,o;return{c(){n=h("img"),i(n.src,o="./images/noImage.webp")||v(n,"src","./images/noImage.webp"),v(n,"alt","No image found for the "+e[7].type+" "+e[7].title),v(n,"class","svelte-1rudybt")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function _t(e){let n,o;return{c(){n=h("img"),i(n.src,o=e[7].poster_uri)||v(n,"src",o),v(n,"alt","Poster for the "+e[7].type+" "+e[7].title),v(n,"class","svelte-1rudybt")},m(t,e){u(t,n,e)},p:t,d(t){t&&f(n)}}}function xt(t){let e,n,o,r,c,l,s,i,p,g,y,w,k,_,x,E,N,S=t[7].title+"",j=t[7].release_year+"",q=t[7].type+"";let L=function(t,e){return"NULL"!=t[7].poster_uri?_t:kt}(t),P=L(t);function C(){return t[6](t[7])}return{c(){e=h("div"),n=h("div"),P.c(),o=m(),r=h("span"),c=h("h2"),l=d(S),s=m(),i=h("h4"),p=d("("),g=d(j),y=d(")"),w=m(),k=h("h4"),_=d(q),x=m(),v(r,"class","resultinfo svelte-1rudybt"),v(n,"class","result svelte-1rudybt"),b(e,"display","inline-block"),b(e,"margin-left","2rem"),b(e,"margin-right","2rem"),b(e,"margin-bottom","2rem")},m(t,f){u(t,e,f),a(e,n),P.m(n,null),a(n,o),a(n,r),a(r,c),a(c,l),a(r,s),a(r,i),a(i,p),a(i,g),a(i,y),a(r,w),a(r,k),a(k,_),a(e,x),E||(N=$(r,"click",C),E=!0)},p(e,n){t=e,P.p(t,n)},d(t){t&&f(e),P.d(),E=!1,N()}}}function Et(e){let n,o;return n=new et({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),o=!0},p:t,i(t){o||(U(n.$$.fragment,t),o=!0)},o(t){A(n.$$.fragment,t),o=!1},d(t){B(n,t)}}}function Nt(t){let e,n,o,r;const c=[$t,gt],l=[];function s(t,e){return t[1]?0:1}return e=s(t),n=l[e]=c[e](t),{c(){n.c(),o=g()},m(t,n){l[e].m(t,n),u(t,o,n),r=!0},p(t,[r]){let i=e;e=s(t),e===i?l[e].p(t,r):(H(),A(l[i],1,1,(()=>{l[i]=null})),J(),n=l[e],n?n.p(t,r):(n=l[e]=c[e](t),n.c()),U(n,1),n.m(o.parentNode,o))},i(t){r||(U(n),r=!0)},o(t){A(n),r=!1},d(t){l[e].d(t),t&&f(o)}}}function St(t,e,n){let{query:o}=e,{locale:r}=e;o=o.replace(",,","");let c,l=async function(t,e){return await Z(t,e)}(o,r),s=!1;function i(t){n(1,s=!0),n(2,c=JSON.stringify(t))}return t.$$set=t=>{"query"in t&&n(0,o=t.query),"locale"in t&&n(5,r=t.locale)},[o,s,c,i,l,r,t=>i(t)]}class jt extends G{constructor(t){super(),F(this,t,St,Nt,c,{query:0,locale:5})}}function qt(t,e,n){const o=t.slice();return o[4]=e[n],o}function Lt(t,e,n){const o=t.slice();return o[7]=e[n],o}function Pt(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function Ct(e){let n,o,r,c,l,s,g,$,y,w,k,_,x,E,N,S,j,q,L=e[3].title+"",P=e[3].release_year+"",C=e[3].short_description+"",O=e[3].offers,R=[];for(let t=0;t<O.length;t+=1)R[t]=Rt(qt(e,O,t));return{c(){n=h("div"),o=h("div"),r=m(),c=h("div"),l=h("div"),s=h("img"),$=m(),y=h("div"),w=h("h1"),k=d(L),_=m(),x=h("h3"),E=d(P),N=m(),S=h("p"),j=d(C),q=m();for(let t=0;t<R.length;t+=1)R[t].c();b(o,"background-color","transparent"),b(o,"height","15rem"),i(s.src,g=e[3].poster_uri)||v(s,"src",g),v(s,"alt","Poster for the "+e[3].type+" "+e[3].title),v(s,"class","svelte-1k9vcow"),v(y,"class","text svelte-1k9vcow"),b(l,"display","flex"),b(l,"align-items","left"),v(c,"class","box svelte-1k9vcow"),v(n,"class","selection svelte-1k9vcow"),b(n,"--backdrop-url","url("+e[3].backdrop_url+")")},m(t,e){u(t,n,e),a(n,o),a(n,r),a(n,c),a(c,l),a(l,s),a(l,$),a(l,y),a(y,w),a(w,k),a(y,_),a(y,x),a(x,E),a(y,N),a(y,S),a(S,j),a(y,q);for(let t=0;t<R.length;t+=1)R[t].m(y,null)},p(t,e){if(1&e){let n;for(O=t[3].offers,n=0;n<O.length;n+=1){const o=qt(t,O,n);R[n]?R[n].p(o,e):(R[n]=Rt(o),R[n].c(),R[n].m(y,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=O.length}},i:t,o:t,d(t){t&&f(n),p(R,t)}}}function Ot(e){let n,o,r,c,l,s,p,g,$,y=e[7].clear_name+"";return{c(){n=h("div"),o=h("span"),r=h("a"),c=h("img"),s=m(),p=h("label"),g=d(y),i(c.src,l=e[7].icon_uri)||v(c,"src",l),v(c,"alt","Icon for "+e[7].clear_name),v(c,"id",e[7].short_name),v(c,"class","svelte-1k9vcow"),v(r,"href",e[7].url),v(p,"for",$=e[7].short_name),v(p,"class","svelte-1k9vcow"),b(o,"text-align","center"),b(o,"display","inline-block"),b(n,"display","inline-block")},m(t,e){u(t,n,e),a(n,o),a(o,r),a(r,c),a(o,s),a(o,p),a(p,g)},p:t,d(t){t&&f(n)}}}function Rt(t){let e,n,o,r,c,l=t[4].country+"",s=t[4].offers,i=[];for(let e=0;e<s.length;e+=1)i[e]=Ot(Lt(t,s,e));return{c(){e=h("div"),n=h("h4"),o=d(l),r=m();for(let t=0;t<i.length;t+=1)i[t].c();c=m(),v(e,"class","offer svelte-1k9vcow")},m(t,l){u(t,e,l),a(e,n),a(n,o),a(e,r);for(let t=0;t<i.length;t+=1)i[t].m(e,null);a(e,c)},p(t,n){if(1&n){let o;for(s=t[4].offers,o=0;o<s.length;o+=1){const r=Lt(t,s,o);i[o]?i[o].p(r,n):(i[o]=Ot(r),i[o].c(),i[o].m(e,c))}for(;o<i.length;o+=1)i[o].d(1);i.length=s.length}},d(t){t&&f(e),p(i,t)}}}function zt(e){let n,o;return n=new et({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),o=!0},p:t,i(t){o||(U(n.$$.fragment,t),o=!0)},o(t){A(n.$$.fragment,t),o=!1},d(t){B(n,t)}}}function Tt(t){let e,n,o={ctx:t,current:null,token:null,hasCatch:!1,pending:zt,then:Ct,catch:Pt,value:3,blocks:[,,,]};return I(t[0],o),{c(){e=g(),o.block.c()},m(t,r){u(t,e,r),o.block.m(t,o.anchor=r),o.mount=()=>e.parentNode,o.anchor=e,n=!0},p(e,[n]){M(o,t=e,n)},i(t){n||(U(o.block),n=!0)},o(t){for(let t=0;t<3;t+=1){A(o.blocks[t])}n=!1},d(t){t&&f(e),o.block.d(t),o.token=null,o=null}}}function Ht(t,e,n){let{providers:o}=e,{selection:r}=e;r=JSON.parse(r);let c=ht(r,o);return t.$$set=t=>{"providers"in t&&n(2,o=t.providers),"selection"in t&&n(1,r=t.selection)},[c,r,o]}class Jt extends G{constructor(t){super(),F(this,t,Ht,Tt,c,{providers:2,selection:1})}}function Ut(e){return{c:t,m:t,p:t,i:t,o:t,d:t}}function At(t){let e,n,o,r;const c=[Wt,Mt,It],l=[];function s(t,e){return"search"==t[0]?0:"SearchResults"==t[0]?1:"Selection"==t[0]?2:-1}return~(e=s(t))&&(n=l[e]=c[e](t)),{c(){n&&n.c(),o=g()},m(t,n){~e&&l[e].m(t,n),u(t,o,n),r=!0},p(t,r){let i=e;e=s(t),e===i?~e&&l[e].p(t,r):(n&&(H(),A(l[i],1,1,(()=>{l[i]=null})),J()),~e?(n=l[e],n?n.p(t,r):(n=l[e]=c[e](t),n.c()),U(n,1),n.m(o.parentNode,o)):n=null)},i(t){r||(U(n),r=!0)},o(t){A(n),r=!1},d(t){~e&&l[e].d(t),t&&f(o)}}}function It(t){let e,n;return e=new Jt({props:{providers:t[4],selection:t[3]}}),{c(){W(e.$$.fragment)},m(t,o){X(e,t,o),n=!0},p(t,n){const o={};8&n&&(o.selection=t[3]),e.$set(o)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Mt(t){let e,n;return e=new jt({props:{query:t[1]+",",locale:t[2]}}),{c(){W(e.$$.fragment)},m(t,o){X(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.query=t[1]+","),4&n&&(o.locale=t[2]),e.$set(o)},i(t){n||(U(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function Wt(e){let n,o;return n=new ft({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),o=!0},p:t,i(t){o||(U(n.$$.fragment,t),o=!0)},o(t){A(n.$$.fragment,t),o=!1},d(t){B(n,t)}}}function Xt(e){let n,o;return n=new et({}),{c(){W(n.$$.fragment)},m(t,e){X(n,t,e),o=!0},p:t,i(t){o||(U(n.$$.fragment,t),o=!0)},o(t){A(n.$$.fragment,t),o=!1},d(t){B(n,t)}}}function Bt(t){let e,n,o={ctx:t,current:null,token:null,hasCatch:!1,pending:Xt,then:At,catch:Ut,value:4,blocks:[,,,]};return I(t[4],o),{c(){e=g(),o.block.c()},m(t,r){u(t,e,r),o.block.m(t,o.anchor=r),o.mount=()=>e.parentNode,o.anchor=e,n=!0},p(e,[n]){M(o,t=e,n)},i(t){n||(U(o.block),n=!0)},o(t){for(let t=0;t<3;t+=1){A(o.blocks[t])}n=!1},d(t){t&&f(e),o.block.d(t),o.token=null,o=null}}}function Dt(t,e,n){let o=async function(){var t=await Q(),e=[],n=t.map((async t=>{t.providers.forEach((t=>{if(t.monetization_types.includes("flatrate")||t.monetization_types.includes("free")||t.monetization_types.includes("ads")){var n=t.monetization_types,o=new RegExp("\\s*([0-9]+)").exec(t.icon_url);let r=null!=o?`https://www.justwatch.com/images/icon/${o[0]}/s100/icon.webp`:"NULL";e.push(new dt(t.id,t.short_name,t.clear_name,r,n))}}))}));return await Promise.all(n),[...new Map(e.map((t=>[t.id,t]))).values()]}(),{page:r="search"}=e,{search:c}=e,{locale:l}=e,{selection:s}=e;return t.$$set=t=>{"page"in t&&n(0,r=t.page),"search"in t&&n(1,c=t.search),"locale"in t&&n(2,l=t.locale),"selection"in t&&n(3,s=t.selection)},[r,c,l,s,o]}class Ft extends G{constructor(t){super(),F(this,t,Dt,Bt,c,{page:0,search:1,locale:2,selection:3})}}function Gt(e){let n,o,r,c,l,s;return l=new Ft({}),{c(){n=h("meta"),o=h("html"),r=m(),c=h("main"),W(l.$$.fragment),document.title="Steaming Search",v(n,"name","viewport"),v(n,"content","width=device-width, initial-scale=1.0"),v(o,"lang","en")},m(t,e){a(document.head,n),a(document.head,o),u(t,r,e),u(t,c,e),X(l,c,null),s=!0},p:t,i(t){s||(U(l.$$.fragment,t),s=!0)},o(t){A(l.$$.fragment,t),s=!1},d(t){f(n),f(o),t&&f(r),t&&f(c),B(l)}}}return new class extends G{constructor(t){super(),F(this,t,null,Gt,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
