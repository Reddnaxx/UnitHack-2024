"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{5911:function(t,e,o){o.d(e,{Z:function(){return x}});var a=o(3950),r=o(2988),n=o(2265);o(1945);var i=o(4839),l=o(6259),c=o(8024),d=o(5023),u=o(2272),s=o(4535),p=o(4541);function f(t){return(0,p.ZP)("MuiToggleButtonGroup",t)}let g=(0,s.Z)("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]);var v=o(1764),m=o(4674),b=o(919),h=o(7437);let Z=["children","className","color","disabled","exclusive","fullWidth","onChange","orientation","size","value"],B=t=>{let{classes:e,orientation:o,fullWidth:a,disabled:r}=t,n={root:["root","vertical"===o&&"vertical",a&&"fullWidth"],grouped:["grouped","grouped".concat((0,u.Z)(o)),r&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return(0,l.Z)(n,f,e)},y=(0,c.ZP)("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:o}=t;return[{["& .".concat(g.grouped)]:e.grouped},{["& .".concat(g.grouped)]:e["grouped".concat((0,u.Z)(o.orientation))]},{["& .".concat(g.firstButton)]:e.firstButton},{["& .".concat(g.lastButton)]:e.lastButton},{["& .".concat(g.middleButton)]:e.middleButton},e.root,"vertical"===o.orientation&&e.vertical,o.fullWidth&&e.fullWidth]}})(t=>{let{ownerState:e,theme:o}=t;return(0,r.Z)({display:"inline-flex",borderRadius:(o.vars||o).shape.borderRadius},"vertical"===e.orientation&&{flexDirection:"column"},e.fullWidth&&{width:"100%"},{["& .".concat(g.grouped)]:(0,r.Z)({},"horizontal"===e.orientation?{["&.".concat(g.selected," + .").concat(g.grouped,".").concat(g.selected)]:{borderLeft:0,marginLeft:0}}:{["&.".concat(g.selected," + .").concat(g.grouped,".").concat(g.selected)]:{borderTop:0,marginTop:0}})},"horizontal"===e.orientation?{["& .".concat(g.firstButton,",& .").concat(g.middleButton)]:{borderTopRightRadius:0,borderBottomRightRadius:0},["& .".concat(g.lastButton,",& .").concat(g.middleButton)]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0}}:{["& .".concat(g.firstButton,",& .").concat(g.middleButton)]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},["& .".concat(g.lastButton,",& .").concat(g.middleButton)]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0}},"horizontal"===e.orientation?{["& .".concat(g.lastButton,".").concat(b.Z.disabled,",& .").concat(g.middleButton,".").concat(b.Z.disabled)]:{borderLeft:"1px solid transparent"}}:{["& .".concat(g.lastButton,".").concat(b.Z.disabled,",& .").concat(g.middleButton,".").concat(b.Z.disabled)]:{borderTop:"1px solid transparent"}})});var x=n.forwardRef(function(t,e){let o=(0,d.Z)({props:t,name:"MuiToggleButtonGroup"}),{children:l,className:c,color:u="standard",disabled:s=!1,exclusive:p=!1,fullWidth:f=!1,onChange:g,orientation:b="horizontal",size:x="medium",value:R}=o,C=(0,a.Z)(o,Z),z=(0,r.Z)({},o,{disabled:s,fullWidth:f,orientation:b,size:x}),T=B(z),k=n.useCallback((t,e)=>{let o;if(!g)return;let a=R&&R.indexOf(e);R&&a>=0?(o=R.slice()).splice(a,1):o=R?R.concat(e):[e],g(t,o)},[g,R]),O=n.useCallback((t,e)=>{g&&g(t,R===e?null:e)},[g,R]),L=n.useMemo(()=>({className:T.grouped,onChange:p?O:k,value:R,size:x,fullWidth:f,color:u,disabled:s}),[T.grouped,p,O,k,R,x,f,u,s]),M=n.Children.toArray(l).filter(t=>n.isValidElement(t)),P=M.length,W=t=>{let e=0===t,o=t===P-1;return e&&o?"":e?T.firstButton:o?T.lastButton:T.middleButton};return(0,h.jsx)(y,(0,r.Z)({role:"group",className:(0,i.Z)(T.root,c),ref:e,ownerState:z},C,{children:(0,h.jsx)(v.Z.Provider,{value:L,children:M.map((t,e)=>(0,h.jsx)(m.Z.Provider,{value:W(e),children:t},e))})}))})},4674:function(t,e,o){let a=o(2265).createContext(void 0);e.Z=a},1764:function(t,e,o){let a=o(2265).createContext({});e.Z=a},9143:function(t,e,o){o.d(e,{Z:function(){return x}});var a=o(3950),r=o(2988),n=o(2265),i=o(4839),l=o(9481),c=o(6259),d=o(2305),u=o(6200),s=o(2272),p=o(5023),f=o(8024),g=o(919),v=o(1764),m=o(4674),b=o(7437);let h=["value"],Z=["children","className","color","disabled","disableFocusRipple","fullWidth","onChange","onClick","selected","size","value"],B=t=>{let{classes:e,fullWidth:o,selected:a,disabled:r,size:n,color:i}=t,l={root:["root",a&&"selected",r&&"disabled",o&&"fullWidth","size".concat((0,s.Z)(n)),i]};return(0,c.Z)(l,g.a,e)},y=(0,f.ZP)(u.Z,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:o}=t;return[e.root,e["size".concat((0,s.Z)(o.size))]]}})(t=>{let e,{theme:o,ownerState:a}=t,n="standard"===a.color?o.palette.text.primary:o.palette[a.color].main;return o.vars&&(n="standard"===a.color?o.vars.palette.text.primary:o.vars.palette[a.color].main,e="standard"===a.color?o.vars.palette.text.primaryChannel:o.vars.palette[a.color].mainChannel),(0,r.Z)({},o.typography.button,{borderRadius:(o.vars||o).shape.borderRadius,padding:11,border:"1px solid ".concat((o.vars||o).palette.divider),color:(o.vars||o).palette.action.active},a.fullWidth&&{width:"100%"},{["&.".concat(g.Z.disabled)]:{color:(o.vars||o).palette.action.disabled,border:"1px solid ".concat((o.vars||o).palette.action.disabledBackground)},"&:hover":{textDecoration:"none",backgroundColor:o.vars?"rgba(".concat(o.vars.palette.text.primaryChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(g.Z.selected)]:{color:n,backgroundColor:o.vars?"rgba(".concat(e," / ").concat(o.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(n,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?"rgba(".concat(e," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.hoverOpacity,"))"):(0,d.Fq)(n,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:o.vars?"rgba(".concat(e," / ").concat(o.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(n,o.palette.action.selectedOpacity)}}}},"small"===a.size&&{padding:7,fontSize:o.typography.pxToRem(13)},"large"===a.size&&{padding:15,fontSize:o.typography.pxToRem(15)})});var x=n.forwardRef(function(t,e){var o;let c=n.useContext(v.Z),{value:d}=c,u=(0,a.Z)(c,h),s=n.useContext(m.Z),f=(0,l.Z)((0,r.Z)({},u,{selected:(o=t.value,void 0!==d&&void 0!==o&&(Array.isArray(d)?d.indexOf(o)>=0:o===d))}),t),g=(0,p.Z)({props:f,name:"MuiToggleButton"}),{children:x,className:R,color:C="standard",disabled:z=!1,disableFocusRipple:T=!1,fullWidth:k=!1,onChange:O,onClick:L,selected:M,size:P="medium",value:W}=g,w=(0,a.Z)(g,Z),N=(0,r.Z)({},g,{color:C,disabled:z,disableFocusRipple:T,fullWidth:k,size:P}),S=B(N);return(0,b.jsx)(y,(0,r.Z)({className:(0,i.Z)(u.className,S.root,R,s||""),disabled:z,focusRipple:!T,ref:e,onClick:t=>{L&&(L(t,W),t.defaultPrevented)||!O||O(t,W)},onChange:O,value:W,ownerState:N,"aria-pressed":M},w,{children:x}))})},919:function(t,e,o){o.d(e,{a:function(){return n}});var a=o(4535),r=o(4541);function n(t){return(0,r.ZP)("MuiToggleButton",t)}let i=(0,a.Z)("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]);e.Z=i},6648:function(t,e,o){o.d(e,{default:function(){return r.a}});var a=o(5601),r=o.n(a)},5601:function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var o in e)Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}(e,{default:function(){return c},getImageProps:function(){return l}});let a=o(9920),r=o(497),n=o(8173),i=a._(o(1241));function l(t){let{props:e}=(0,r.getImgProps)(t,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/UnitHack-2024/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[t,o]of Object.entries(e))void 0===o&&delete e[t];return{props:e}}let c=n.Image}}]);