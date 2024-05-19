"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[764],{8027:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(3950),o=n(2988),a=n(2265),i=n(4839),l=n(6259),s=n(317),u=n(8024),c=n(1931),d=n(5023),v=n(4535),f=n(4541);function p(e){return(0,f.ZP)("MuiPaper",e)}(0,v.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var m=n(7437);let g=["className","component","elevation","square","variant"],h=e=>{let{square:t,elevation:n,variant:r,classes:o}=e;return(0,l.Z)({root:["root",r,!t&&"rounded","elevation"===r&&"elevation".concat(n)]},p,o)},S=(0,u.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t["elevation".concat(n.elevation)]]}})(e=>{var t;let{theme:n,ownerState:r}=e;return(0,o.Z)({backgroundColor:(n.vars||n).palette.background.paper,color:(n.vars||n).palette.text.primary,transition:n.transitions.create("box-shadow")},!r.square&&{borderRadius:n.shape.borderRadius},"outlined"===r.variant&&{border:"1px solid ".concat((n.vars||n).palette.divider)},"elevation"===r.variant&&(0,o.Z)({boxShadow:(n.vars||n).shadows[r.elevation]},!n.vars&&"dark"===n.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,s.Fq)("#fff",(0,c.Z)(r.elevation)),", ").concat((0,s.Fq)("#fff",(0,c.Z)(r.elevation)),")")},n.vars&&{backgroundImage:null==(t=n.vars.overlays)?void 0:t[r.elevation]}))});var y=a.forwardRef(function(e,t){let n=(0,d.Z)({props:e,name:"MuiPaper"}),{className:a,component:l="div",elevation:s=1,square:u=!1,variant:c="elevation"}=n,v=(0,r.Z)(n,g),f=(0,o.Z)({},n,{component:l,elevation:s,square:u,variant:c}),p=h(f);return(0,m.jsx)(S,(0,o.Z)({as:l,ownerState:f,className:(0,i.Z)(p.root,a),ref:t},v))})},1931:function(e,t){t.Z=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2)},9018:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(2988),o=n(2265),a=n(3950),i=n(4839),l=n(6259),s=n(2272),u=n(5023),c=n(8024),d=n(4535),v=n(4541);function f(e){return(0,v.ZP)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var p=n(7437);let m=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],g=e=>{let{color:t,fontSize:n,classes:r}=e,o={root:["root","inherit"!==t&&"color".concat((0,s.Z)(t)),"fontSize".concat((0,s.Z)(n))]};return(0,l.Z)(o,f,r)},h=(0,c.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t["color".concat((0,s.Z)(n.color))],t["fontSize".concat((0,s.Z)(n.fontSize))]]}})(e=>{var t,n,r,o,a,i,l,s,u,c,d,v,f;let{theme:p,ownerState:m}=e;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:m.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(t=p.transitions)||null==(n=t.create)?void 0:n.call(t,"fill",{duration:null==(r=p.transitions)||null==(r=r.duration)?void 0:r.shorter}),fontSize:({inherit:"inherit",small:(null==(o=p.typography)||null==(a=o.pxToRem)?void 0:a.call(o,20))||"1.25rem",medium:(null==(i=p.typography)||null==(l=i.pxToRem)?void 0:l.call(i,24))||"1.5rem",large:(null==(s=p.typography)||null==(u=s.pxToRem)?void 0:u.call(s,35))||"2.1875rem"})[m.fontSize],color:null!=(c=null==(d=(p.vars||p).palette)||null==(d=d[m.color])?void 0:d.main)?c:({action:null==(v=(p.vars||p).palette)||null==(v=v.action)?void 0:v.active,disabled:null==(f=(p.vars||p).palette)||null==(f=f.action)?void 0:f.disabled,inherit:void 0})[m.color]}}),S=o.forwardRef(function(e,t){let n=(0,u.Z)({props:e,name:"MuiSvgIcon"}),{children:l,className:s,color:c="inherit",component:d="svg",fontSize:v="medium",htmlColor:f,inheritViewBox:S=!1,titleAccess:y,viewBox:b="0 0 24 24"}=n,w=(0,a.Z)(n,m),E=o.isValidElement(l)&&"svg"===l.type,O=(0,r.Z)({},n,{color:c,component:d,fontSize:v,instanceFontSize:e.fontSize,inheritViewBox:S,viewBox:b,hasSvgAsChild:E}),z={};S||(z.viewBox=b);let I=g(O);return(0,p.jsxs)(h,(0,r.Z)({as:d,className:(0,i.Z)(I.root,s),focusable:"false",color:f,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:t},z,w,E&&l.props,{ownerState:O,children:[E?l.props.children:l,y?(0,p.jsx)("title",{children:y}):null]}))});function y(e,t){function n(n,o){return(0,p.jsx)(S,(0,r.Z)({"data-testid":"".concat(t,"Icon"),ref:o},n,{children:e}))}return n.muiName=S.muiName,o.memo(o.forwardRef(n))}S.muiName="SvgIcon"},4492:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=r.useState,i=r.useEffect,l=r.useLayoutEffect,s=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),o=r[0].inst,c=r[1];return l(function(){o.value=n,o.getSnapshot=t,u(o)&&c({inst:o})},[e,n,t]),i(function(){return u(o)&&c({inst:o}),e(function(){u(o)&&c({inst:o})})},[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},5107:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=n(554),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=o.useSyncExternalStore,l=r.useRef,s=r.useEffect,u=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var d=l(null);if(null===d.current){var v={hasValue:!1,value:null};d.current=v}else v=d.current;var f=i(e,(d=u(function(){function e(e){if(!s){if(s=!0,i=e,e=r(e),void 0!==o&&v.hasValue){var t=v.value;if(o(t,e))return l=t}return l=e}if(t=l,a(i,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(i=e,l=n)}var i,l,s=!1,u=void 0===n?null:n;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,n,r,o]))[0],d[1]);return s(function(){v.hasValue=!0,v.value=f},[f]),c(f),f}},554:function(e,t,n){e.exports=n(4492)},5006:function(e,t,n){e.exports=n(5107)},9099:function(e,t,n){n.d(t,{Ue:function(){return v}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=r?r:"object"!=typeof o||null===o)?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},o=()=>t,a={setState:r,getState:o,getInitialState:()=>i,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},i=t=e(r,o,a);return a},o=e=>e?r(e):r;var a=n(2265),i=n(5006);let{useDebugValue:l}=a,{useSyncExternalStoreWithSelector:s}=i,u=!1,c=e=>e,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?o(e):e,n=(e,n)=>(function(e,t=c,n){n&&!u&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),u=!0);let r=s(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return l(r),r})(t,e,n);return Object.assign(n,t),n},v=e=>e?d(e):d},9291:function(e,t,n){n.d(t,{FL:function(){return s},mW:function(){return i},tJ:function(){return v}});let r=new Map,o=e=>{let t=r.get(e);return t?Object.fromEntries(Object.entries(t.stores).map(([e,t])=>[e,t.getState()])):{}},a=(e,t,n)=>{if(void 0===e)return{type:"untracked",connection:t.connect(n)};let o=r.get(n.name);if(o)return{type:"tracked",store:e,...o};let a={connection:t.connect(n),stores:{}};return r.set(n.name,a),{type:"tracked",store:e,...a}},i=(e,t={})=>(n,r,i)=>{let s;let{enabled:u,anonymousActionType:c,store:d,...v}=t;try{s=(null==u||u)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(e){}if(!s)return u&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),e(n,r,i);let{connection:f,...p}=a(d,s,v),m=!0;i.setState=(e,t,a)=>{let l=n(e,t);if(!m)return l;let s=void 0===a?{type:c||"anonymous"}:"string"==typeof a?{type:a}:a;return void 0===d?null==f||f.send(s,r()):null==f||f.send({...s,type:`${d}/${s.type}`},{...o(v.name),[d]:i.getState()}),l};let g=(...e)=>{let t=m;m=!1,n(...e),m=t},h=e(i.setState,r,i);if("untracked"===p.type?null==f||f.init(h):(p.stores[p.store]=i,null==f||f.init(Object.fromEntries(Object.entries(p.stores).map(([e,t])=>[e,e===p.store?h:t.getState()])))),i.dispatchFromDevtools&&"function"==typeof i.dispatch){let e=!1,t=i.dispatch;i.dispatch=(...n)=>{"__setState"!==n[0].type||e||(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),e=!0),t(...n)}}return f.subscribe(e=>{var t;switch(e.type){case"ACTION":if("string"!=typeof e.payload){console.error("[zustand devtools middleware] Unsupported action format");return}return l(e.payload,e=>{if("__setState"===e.type){if(void 0===d){g(e.state);return}1!==Object.keys(e.state).length&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);let t=e.state[d];if(null==t)return;JSON.stringify(i.getState())!==JSON.stringify(t)&&g(t);return}i.dispatchFromDevtools&&"function"==typeof i.dispatch&&i.dispatch(e)});case"DISPATCH":switch(e.payload.type){case"RESET":if(g(h),void 0===d)return null==f?void 0:f.init(i.getState());return null==f?void 0:f.init(o(v.name));case"COMMIT":if(void 0===d){null==f||f.init(i.getState());break}return null==f?void 0:f.init(o(v.name));case"ROLLBACK":return l(e.state,e=>{if(void 0===d){g(e),null==f||f.init(i.getState());return}g(e[d]),null==f||f.init(o(v.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return l(e.state,e=>{if(void 0===d){g(e);return}JSON.stringify(i.getState())!==JSON.stringify(e[d])&&g(e[d])});case"IMPORT_STATE":{let{nextLiftedState:n}=e.payload,r=null==(t=n.computedStates.slice(-1)[0])?void 0:t.state;if(!r)return;void 0===d?g(r):g(r[d]),null==f||f.send(null,n);break}case"PAUSE_RECORDING":return m=!m}return}}),h},l=(e,t)=>{let n;try{n=JSON.parse(e)}catch(e){console.error("[zustand devtools middleware] Could not parse the received json",e)}void 0!==n&&t(n)};function s(e,t){let n;try{n=e()}catch(e){return}return{getItem:e=>{var r;let o=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),a=null!=(r=n.getItem(e))?r:null;return a instanceof Promise?a.then(o):o(a)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,null==t?void 0:t.replacer)),removeItem:e=>n.removeItem(e)}}let u=e=>t=>{try{let n=e(t);if(n instanceof Promise)return n;return{then:e=>u(e)(n),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>u(t)(e)}}},c=(e,t)=>(n,r,o)=>{let a,i,l={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,c=new Set,d=new Set;try{a=l.getStorage()}catch(e){}if(!a)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${l.name}', the given storage is currently unavailable.`),n(...e)},r,o);let v=u(l.serialize),f=()=>{let e;let t=v({state:l.partialize({...r()}),version:l.version}).then(e=>a.setItem(l.name,e)).catch(t=>{e=t});if(e)throw e;return t},p=o.setState;o.setState=(e,t)=>{p(e,t),f()};let m=e((...e)=>{n(...e),f()},r,o),g=()=>{var e;if(!a)return;s=!1,c.forEach(e=>e(r()));let t=(null==(e=l.onRehydrateStorage)?void 0:e.call(l,r()))||void 0;return u(a.getItem.bind(a))(l.name).then(e=>{if(e)return l.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===l.version)return e.state;if(l.migrate)return l.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return n(i=l.merge(e,null!=(t=r())?t:m),!0),f()}).then(()=>{null==t||t(i,void 0),s=!0,d.forEach(e=>e(i))}).catch(e=>{null==t||t(void 0,e)})};return o.persist={setOptions:e=>{l={...l,...e},e.getStorage&&(a=e.getStorage())},clearStorage:()=>{null==a||a.removeItem(l.name)},getOptions:()=>l,rehydrate:()=>g(),hasHydrated:()=>s,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},g(),i||m},d=(e,t)=>(n,r,o)=>{let a,i={storage:s(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,d=new Set,v=i.storage;if(!v)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...e)},r,o);let f=()=>{let e=i.partialize({...r()});return v.setItem(i.name,{state:e,version:i.version})},p=o.setState;o.setState=(e,t)=>{p(e,t),f()};let m=e((...e)=>{n(...e),f()},r,o);o.getInitialState=()=>m;let g=()=>{var e,t;if(!v)return;l=!1,c.forEach(e=>{var t;return e(null!=(t=r())?t:m)});let o=(null==(t=i.onRehydrateStorage)?void 0:t.call(i,null!=(e=r())?e:m))||void 0;return u(v.getItem.bind(v))(i.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===i.version)return e.state;if(i.migrate)return i.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return n(a=i.merge(e,null!=(t=r())?t:m),!0),f()}).then(()=>{null==o||o(a,void 0),a=r(),l=!0,d.forEach(e=>e(a))}).catch(e=>{null==o||o(void 0,e)})};return o.persist={setOptions:e=>{i={...i,...e},e.storage&&(v=e.storage)},clearStorage:()=>{null==v||v.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>g(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(d.add(e),()=>{d.delete(e)})},i.skipHydration||g(),a||m},v=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),c(e,t)):d(e,t)}}]);