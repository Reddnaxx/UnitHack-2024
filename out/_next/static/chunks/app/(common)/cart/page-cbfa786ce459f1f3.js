(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[993],{4632:function(e,t,r){Promise.resolve().then(r.bind(r,7929))},7449:function(e,t){"use strict";function r(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},291:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(9920)._(r(2265)).default.createContext(null)},7929:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ep}});var n=r(7437),a=r(7371),i=r.n(a),s=r(126),o=r(2265),c=r(6648),l=r(603),d=r.n(l),u=r(335),m=r(9018),_=(0,m.Z)((0,n.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove"),h=(0,m.Z)((0,n.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),x=function(e){let{item:t,count:r}=e,{addToCart:a,removeOneFromCart:i}=(0,s.x)();return(0,n.jsxs)("div",{className:d()["cart-item"],children:[(0,n.jsx)("div",{className:d()["cart-item__img"],children:(0,n.jsx)(c.default,{src:"/dev/hoodie1.jpg",alt:"",fill:!0})}),(0,n.jsxs)("div",{className:d()["cart-item__content"],children:[(0,n.jsxs)("div",{className:d()["cart-item__info"],children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:t.title}),(0,n.jsx)("p",{children:t.description})]}),(0,n.jsxs)("div",{className:d()["cart-item__count"],children:[(0,n.jsx)(u.Z,{sx:{borderRadius:"4px",border:"1px solid #E23239"},onClick:()=>i(t),children:(0,n.jsx)(_,{sx:{fontSize:"1rem"}})}),(0,n.jsx)("span",{children:null!=r?r:0}),(0,n.jsx)(u.Z,{sx:{borderRadius:"4px",border:"1px solid #E23239"},onClick:()=>a(t),children:(0,n.jsx)(h,{sx:{fontSize:"1rem"}})})]})]}),(0,n.jsx)("div",{className:d()["cart-item__cost"],children:(0,n.jsxs)("p",{children:[t.cost,"₽"]})})]})]})},p=r(2903),f=r.n(p),j=function(e){var t;let r,{...a}=e,i=(0,s.x)(e=>e.items),c=(0,o.useMemo)(()=>{let e=[];return i.filter(t=>!e.includes(t.id)&&(e.push(t.id),!0))},[i]);return(0,n.jsxs)("div",{className:f()["cart-items"],children:[(0,n.jsxs)("div",{className:f().top,children:[(0,n.jsx)("h2",{children:"Корзина"}),(0,n.jsx)("p",{children:i.length+" "+(r=(t=Math.abs(t=i.length)%100)%10,t>10&&t<20?"товаров":r>1&&r<5?"товара":1==r?"товар":"товаров")})]}),c.length>0?(0,n.jsx)("ul",{className:f()["cart-items__list"],children:c.map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsx)(x,{item:e,count:i.filter(t=>t.id===e.id).length})},t))}):(0,n.jsx)("p",{className:f()["cart-items__empty"],children:"Пусто"})]})},g=r(9373),v=r(5911),b=r(9143),y=r(6548),Z=r(8071),N=r.n(Z),w=r(4952),k=r(9874),C=r(5069),S=r(9455),D=r.n(S),F=r(9343),M=r(1014),z=r(9772),R=r(8378);class W{static async getAll(){return await R.Z.get("/order").then(e=>e.data)}static async getById(e){return await R.Z.get("/order/".concat(e)).then(e=>e.data)}static async create(e){return await R.Z.post("/order",e).then(e=>e.data)}static async delete(e){return await R.Z.delete("/order/".concat(e)).then(e=>e.data)}static async edit(e,t){return await R.Z.post("/order/".concat(e),t).then(e=>e.data)}}var A=r(1274);let T=N()(new Date).add(1,"day"),L=N()(new Date).add(7,"day"),O=z.z.object({address:z.z.string().min(1),date:z.z.string().min(1)});var P=function(e){let{isValid:t,values:r}=e,{items:a,clear:i}=(0,s.x)(),c=(0,A.t)(e=>e.user),l=(0,o.useMemo)(()=>a.reduce((e,t)=>e+t.cost,0),[a]),[d,u]=(0,o.useState)(1),{register:m,formState:{isValid:_,errors:h},setValue:x,getValues:p,handleSubmit:f}=(0,F.cI)({mode:"onTouched",resolver:(0,M.F)(O)}),j=async e=>{var t;r&&await W.create({itemsId:a.map(e=>e.id),userId:null!==(t=null==c?void 0:c.id)&&void 0!==t?t:null,deliveryAddress:e.address,deliveryDate:e.date,userEmail:null==r?void 0:r.email,userFullName:null==r?void 0:r.name,userPhone:null==r?void 0:r.phone}).then(()=>{i()})};return(0,n.jsx)(w._,{dateAdapter:C.y,children:(0,n.jsx)("section",{className:D()["order-section"],children:(0,n.jsxs)("form",{onSubmit:f(j),children:[(0,n.jsx)("h3",{children:"Доставка курьером"}),(0,n.jsxs)("div",{className:D()["order-section__info"],children:[(0,n.jsx)(g.Z,{variant:"outlined",label:"Адрес",fullWidth:!0,...m("address")}),(0,n.jsx)(k.M,{label:"Дата доставки",minDate:T,maxDate:L,format:"DD/MM/YYYY",sx:{width:"100%"},onChange:e=>x("date",(null==e?void 0:e.toDate().toLocaleDateString())||"")})]}),(0,n.jsxs)("h3",{children:["Оплата картой ",(0,n.jsx)("span",{children:"--8008"})]}),(0,n.jsxs)(v.Z,{color:"primary",exclusive:!0,fullWidth:!0,value:d,onChange:(e,t)=>{null!==t&&u(t)},sx:{paddingInline:"1rem"},children:[(0,n.jsx)(b.Z,{value:1,sx:{fontSize:"0.75rem"},children:"При получении"}),(0,n.jsx)(b.Z,{value:2,sx:{fontSize:"0.75rem"},children:"Сразу"})]}),(0,n.jsxs)("p",{className:D()["order-section__sum"],children:["Итого: ",(0,n.jsxs)("span",{children:[l,"₽"]})]}),(0,n.jsx)(y.Z,{variant:"contained",color:"primary",fullWidth:!0,sx:{borderRadius:"40px",padding:"0.75rem",fontSize:"1.25rem"},disabled:0===a.length||!t||!r||!_,type:"submit",children:"Заказать"})]})})})},E=r(6520),I=r(3950),V=r(2988),U=r(4839),B=r(6259),H=r(2272),Y=r(8024),q=r(5023),J=r(9261),K=r(909),X=r(3719),G=r(4535),Q=r(4541);function $(e){return(0,Q.ZP)("MuiLink",e)}let ee=(0,G.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var et=r(5166),er=r(317);let en={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},ea=e=>en[e]||e;var ei=e=>{let{theme:t,ownerState:r}=e,n=ea(r.color),a=(0,et.DW)(t,"palette.".concat(n),!1)||r.color,i=(0,et.DW)(t,"palette.".concat(n,"Channel"));return"vars"in t&&i?"rgba(".concat(i," / 0.4)"):(0,er.Fq)(a,.4)};let es=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],eo=e=>{let{classes:t,component:r,focusVisible:n,underline:a}=e,i={root:["root","underline".concat((0,H.Z)(a)),"button"===r&&"button",n&&"focusVisible"]};return(0,B.Z)(i,$,t)},ec=(0,Y.ZP)(X.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t["underline".concat((0,H.Z)(r.underline))],"button"===r.component&&t.button]}})(e=>{let{theme:t,ownerState:r}=e;return(0,V.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,V.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:ei({theme:t,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(ee.focusVisible)]:{outline:"auto"}})}),el=o.forwardRef(function(e,t){let r=(0,q.Z)({props:e,name:"MuiLink"}),{className:a,color:i="primary",component:s="a",onBlur:c,onFocus:l,TypographyClasses:d,underline:u="always",variant:m="inherit",sx:_}=r,h=(0,I.Z)(r,es),{isFocusVisibleRef:x,onBlur:p,onFocus:f,ref:j}=(0,J.Z)(),[g,v]=o.useState(!1),b=(0,K.Z)(t,j),y=(0,V.Z)({},r,{color:i,component:s,focusVisible:g,underline:u,variant:m}),Z=eo(y);return(0,n.jsx)(ec,(0,V.Z)({color:i,className:(0,U.Z)(Z.root,a),classes:d,component:s,onBlur:e=>{p(e),!1===x.current&&v(!1),c&&c(e)},onFocus:e=>{f(e),!0===x.current&&v(!0),l&&l(e)},ref:b,ownerState:y,variant:m,sx:[...Object.keys(en).includes(i)?[]:[{color:i}],...Array.isArray(_)?_:[_]]},h))});var ed=r(47),eu=r.n(ed);let em=z.z.object({email:z.z.string().email().min(1),name:z.z.string().min(1),phone:z.z.string().min(10).max(11)});var e_=function(e){let{onChange:t}=e,{register:r,getValues:a,formState:{isValid:i,errors:s}}=(0,F.cI)({mode:"onTouched",resolver:(0,M.F)(em)});return(0,n.jsxs)("form",{className:eu()["order-data-form"],children:[(0,n.jsx)(g.Z,{label:"Почта",variant:"filled",fullWidth:!0,type:"email",error:!!s.email,...r("email",{onChange:()=>t(a(),i)})}),(0,n.jsx)(g.Z,{label:"Имя",variant:"filled",fullWidth:!0,error:!!s.name,...r("name",{onChange:()=>t(a(),i)})}),(0,n.jsx)(g.Z,{label:"Телефон",variant:"filled",fullWidth:!0,error:!!s.phone,...r("phone",{onChange:()=>t(a(),i)})})]})},eh=r(7449),ex=r.n(eh);function ep(e){let{}=e,[t,r]=(0,o.useState)(!1),[a,s]=(0,o.useState)(null);return(0,n.jsxs)("main",{className:i().cart,children:[(0,n.jsx)(ex(),{children:(0,n.jsx)("title",{children:"Корзина | Магазин мерча Warpoint"})}),(0,n.jsx)("div",{className:i().cart__cat}),(0,n.jsx)("section",{children:(0,n.jsx)(j,{})}),(0,n.jsx)(P,{isValid:t,values:a}),(0,n.jsx)("div",{className:i().cart__bottom,children:(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{children:"Способ оплаты"}),(0,n.jsxs)(E.Z,{variant:"outlined",sx:{borderColor:"#E23239FF",background:"none",display:"flex",gap:"1rem",padding:"1rem 2rem",borderRadius:"10px"},children:[(0,n.jsx)(c.default,{src:"/icons/credit_card_1.svg",alt:"",width:30,height:20}),(0,n.jsx)("p",{className:i().cart__card,children:"SberPay --8008"})]}),(0,n.jsxs)(E.Z,{variant:"outlined",sx:{borderColor:"#E23239FF",background:"none",display:"flex",gap:"1rem",padding:"1rem 2rem",borderRadius:"10px",opacity:.5},children:[(0,n.jsx)(c.default,{src:"/icons/credit_card_2.svg",alt:"",width:30,height:20}),(0,n.jsx)("p",{className:i().cart__card,children:"Tinkoff --5676"})]}),(0,n.jsxs)(E.Z,{variant:"outlined",sx:{borderColor:"#E23239FF",background:"none",display:"flex",gap:"1rem",padding:"1rem 2rem",borderRadius:"10px"},children:[(0,n.jsx)(c.default,{src:"/icons/credit_card_empty.svg",alt:"",width:30,height:20}),(0,n.jsx)("p",{className:i().cart__card,children:"Добавить новую карту"}),(0,n.jsx)(h,{sx:{marginLeft:"auto"}})]})]})}),(0,n.jsxs)("section",{className:i().cart__data,children:[(0,n.jsx)("h2",{children:"Мои данные"}),(0,n.jsx)(e_,{onChange:(e,t)=>{r(t),s(e)}}),(0,n.jsx)(el,{href:"login",children:"Войдите в аккаунт для автозаполнения"})]})]})}},8378:function(e,t,r){"use strict";var n=r(2126);t.Z=n.Z.create({baseURL:"http://www.unithack.somee.com"})},1274:function(e,t,r){"use strict";r.d(t,{t:function(){return o}});var n=r(9099),a=r(9291),i=r(8378);class s{static async login(e,t){return await i.Z.post("/user/token",{email:e,password:t}).then(e=>e.data)}static async register(e){return await i.Z.post("/user/register",e).then(e=>e.data)}}let o=(0,n.Ue)()((0,a.mW)((0,a.tJ)((e,t)=>({user:null,accessToken:null,isAuth:!1,login:async(t,r)=>{let n=await s.login(t,r);n&&e(e=>({user:n.user,accessToken:n.accessToken,isAuth:!0}))},register:async e=>{await s.register(e)},logout:()=>{e(()=>({user:null,accessToken:null,isAuth:!1}))}}),{name:"auth",storage:(0,a.FL)(()=>localStorage)})))},126:function(e,t,r){"use strict";r.d(t,{x:function(){return i}});var n=r(9099),a=r(9291);let i=(0,n.Ue)()((0,a.mW)((0,a.tJ)((e,t)=>({items:[],addToCart:t=>e(e=>({items:[...e.items,t]})),removeOneFromCart:r=>{let n=t().items;n.splice(n.findLastIndex(e=>e.id===r.id),1),e(e=>({items:[...n]}))},removeAllFromCart:t=>{e(e=>({items:[...e.items.filter(e=>e.id!==t.id)]}))},clear:()=>{e(e=>({items:[]}))}}),{name:"cart",storage:(0,a.FL)(()=>localStorage)})))},7371:function(e){e.exports={cart:"page_cart__kX3nr",cart__bottom:"page_cart__bottom__doLUR",cart__card:"page_cart__card__88RRq",cart__data:"page_cart__data__8W1TV",cart__cat:"page_cart__cat__UNhWo"}},603:function(e){e.exports={"cart-item":"cart-item_cart-item__tJNE4","cart-item__img":"cart-item_cart-item__img__u6gY9","cart-item__content":"cart-item_cart-item__content__OLZhg","cart-item__info":"cart-item_cart-item__info__tfKdm","cart-item__count":"cart-item_cart-item__count__apqeT","cart-item__cost":"cart-item_cart-item__cost__jUrKV"}},2903:function(e){e.exports={"cart-items__empty":"cart-items_cart-items__empty__uN2Bi","cart-items__list":"cart-items_cart-items__list__jWFaG",top:"cart-items_top__OylmN"}},47:function(e){e.exports={"order-data-form":"order-data-form_styles_order-data-form__phIgV"}},9455:function(e){e.exports={"order-section":"order-section_style_order-section__jbXcn","order-section__info":"order-section_style_order-section__info__TIHMD","order-section__sum":"order-section_style_order-section__sum__fSQjn"}}},function(e){e.O(0,[237,520,200,764,128,126,328,373,343,173,567,894,708,971,23,744],function(){return e(e.s=4632)}),_N_E=e.O()}]);