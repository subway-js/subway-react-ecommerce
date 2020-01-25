(this["webpackJsonpsubway-react-ecommerce"]=this["webpackJsonpsubway-react-ecommerce"]||[]).push([[0],{258:function(e,t,a){e.exports=a(438)},438:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(61),l=a.n(c),o=a(16),i=a(447),u=window.Subway,s=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(n.useState)(null),c=Object(o.a)(r,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){console.log(">>>> useObserveAggregateState init");var n=u.selectAggregate(e).observeState({next:function(e){var n=e.nextState;i(t(n)),a&&c()}}),r=n.currentState,c=n.unsubscribe;return i(t(r)),function(){try{c()}catch(e){}}}),[]),[l]},m="PRODUCT_PAGE_SELECTED",d="HOME_PAGE_SELECTED",g="LOGIN_MODAL_REQUEST_SUBMITTED",E="LOGOUT_USER_REQUEST_SUBMITTED",p="CHECKOUT_PAGE_REQUEST_SUBMITTED",f="SELECT_HOME_PAGE",v="REQUEST_USER_LOGOUT",b="REQUEST_LOGIN_MODAL",h=[{command:f,handler:function(){return{events:[{id:d}]}}},{command:b,handler:function(){return{events:[{id:g}]}}},{command:v,handler:function(){return{events:[{id:E}]}}}],O=a(24),C=[{command:d,handler:function(e){return{proposal:Object(O.a)({},e,{currentPage:"home"})}}},{command:m,handler:function(e){return{proposal:Object(O.a)({},e,{currentPage:"product"})}}},{command:p,handler:function(e){return{proposal:Object(O.a)({},e,{currentPage:"checkout"})}}}],A=a(460),T=a(461),S=a(459),w=a(454),_=a(51),y=a(456),P=a(450),j=function(){u.selectAggregate(I).sendCommand(f)};function L(e){var t=e.shoppingCartMenuItem,a=s("SessionAggregate",(function(e){return{isUserLogged:e.userLogged,username:e.username}})),n=Object(o.a)(a,1)[0];return r.a.createElement(A.a,{size:"small",borderless:!0,fixed:"top"},r.a.createElement(i.a,null,r.a.createElement(A.a.Item,null,r.a.createElement(T.a,{color:"teal"},"SubwayJS eComm")),r.a.createElement(A.a.Item,{position:"right"},t,n&&!n.isUserLogged&&r.a.createElement(S.a,{onClick:function(){u.selectAggregate(I).sendCommand(b)},style:{marginLeft:10},color:"teal",basic:!0}," ","Log-in"),n&&n.isUserLogged&&r.a.createElement(w.a,{on:"click",position:"bottom right",trigger:r.a.createElement(S.a,{basic:!0,color:"teal",icon:!0,style:{marginLeft:10}},r.a.createElement(_.a,{name:"user"}))},r.a.createElement(w.a.Content,{style:{padding:"0 !important"}},r.a.createElement(y.a.Header,null,"Hi, ".concat(n.username)," "),r.a.createElement(P.a,null),r.a.createElement(y.a,{selection:!0,verticalAlign:"middle"},r.a.createElement(y.a.Item,{onClick:function(){u.selectAggregate(I).sendCommand(v)}},"Logout")))))))}var U=a(463),D=a(464);function k(){var e=function(e,t,a){var r=Object(n.useState)(null),c=Object(o.a)(r,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){var n=u.selectAggregate(e).spy(t,{next:function(e){i(a(e))}});return function(){n()}}),[]),[l]}("ProductsAggregate","ProductSelectedForDetails",(function(e){var t=e.product;return{id:t.id,title:t.title}})),t=Object(o.a)(e,1)[0],a=s(I,(function(e){return e.currentPage})),c=Object(o.a)(a,1)[0];return r.a.createElement(U.a,{relaxed:!0,columns:2},r.a.createElement(U.a.Column,null,r.a.createElement(D.a,null,"home"===c&&r.a.createElement(D.a.Section,{active:!0},"Products"),"product"===c&&t&&t.id&&t.title&&r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a.Section,{active:!0,link:!0,onClick:function(){return j()}},"Products"),r.a.createElement(D.a.Divider,null),r.a.createElement(D.a.Section,{active:!0},t.title)))),"product"===c&&r.a.createElement(U.a.Column,{textAlign:"right"},r.a.createElement(S.a,{onClick:function(){return j()},size:"tiny",content:"Back to products",icon:"angle left",color:"teal",labelPosition:"left"})))}var I="NavigationAggregate",R={name:I,initialState:{currentPage:"home"},cmdHandlers:h,evtHandlers:C,bootstrap:function(){u.selectAggregate("ProductsAggregate").triggerAfter("ProductSelectedForDetails",{targetAggregate:I,triggeredEvent:m}),u.selectAggregate("*").triggerAfter("CHECKOUT_PAGE_REQUESTED",{targetAggregate:I,triggeredEvent:p})}},G="LoadProductsList",H="SelectProductForDetails",M="TriggerAddToShoppingCart",z=function(e){u.selectAggregate(oe).sendCommand(M,{product:e})},x=a(50),N=a.n(x),F="ProductsListLoaded",B="ProductSelectedForDetails",Q="ADD_TO_SHOPPING_CART_TRIGGERED",K=[{id:1,img:"images/products/11.jpg",title:"GoPro HERO7 Camera",price:"299.00",ccy:"$",rating:"4",reviewsCount:132},{id:2,img:"images/products/5.jpg",title:"Leather Sleeve - Macbook 13\u2019\u2019",price:"3753.00",newPrice:"3099.00",ccy:"$",rating:"4",reviewsCount:56},{id:3,img:"images/products/4.jpg",title:"Fj\xe4llr\xe4ven K\xe5nken Backpack Blue Ridge",price:"84.00",ccy:"$",rating:"5",reviewsCount:85},{id:4,img:"images/products/12.jpg",title:"Off-White Odsy-1000 Low-Top Sneakers",price:"815.00",newPrice:"799.00",ccy:"$",rating:"4",reviewsCount:422},{id:5,img:"images/products/9.jpg",title:"Logitech - Headset for gaming",price:"19.00",newPrice:"14.99",ccy:"$",rating:"3",reviewsCount:23},{id:6,img:"images/products/10.jpg",title:"Apple Homkit - Ecobee3 Lite Smart Thermostat",price:"169.95",ccy:"$",rating:"4",reviewsCount:198}],$=[{command:G,handler:function(e,t){var a;return N.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.awrap(new Promise((function(e,t){setTimeout((function(){e(K)}),500)})));case 2:return a=e.sent,e.abrupt("return",{events:[{id:F,payload:{productsList:a}}]});case 4:case"end":return e.stop()}}))}},{command:H,handler:function(e,t){var a=t.product;return{events:[{id:B,payload:{product:a}}]}}},{command:M,handler:function(e,t){var a=t.product;return{events:[{id:Q,payload:{product:a}}]}}}],V=[{command:F,handler:function(e,t){var a=t.productsList;return{proposal:Object(O.a)({},e,{productsList:a})}}},{command:B,handler:function(e,t){var a=t.product;return{proposal:Object(O.a)({},e,{selectedProduct:a})}}}],q=a(457),J=a(251),Y=a(462),W=a(467),X=a(114);function Z(e){var t=e.product,a=e.size,c=e.onClick,l=Object(n.useState)(!1),i=Object(o.a)(l,2),u=i[0],s=i[1];return r.a.createElement(S.a,{size:a,fluid:!0,loading:u,color:"teal",onClick:function(){s(!0),setTimeout((function(){c(t),s(!1)}),500)}},r.a.createElement(S.a.Content,null,r.a.createElement(_.a,{name:"shop"})," Add to cart"))}function ee(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],l=s(oe,(function(e){return e.productsList}),!0),i=Object(o.a)(l,1)[0];return r.a.createElement(U.a,{columns:3},i&&i.map((function(e){var t=e.id,n=e.img,l=e.title,o=e.price,i=e.rating,s=e.reviewsCount,m=e.newPrice,d=void 0===m?null:m,g=e.ccy;return r.a.createElement(U.a.Column,{key:t},r.a.createElement(q.a,null,d&&r.a.createElement(J.a,{fluid:!0,label:{as:"a",color:"orange",corner:"left",icon:"star"}}),r.a.createElement(Y.a.Dimmable,{as:J.a,onMouseOver:function(){c(t)},onMouseLeave:function(){c(null)},dimmed:a===t},r.a.createElement(J.a,{src:n,wrapped:!0}),r.a.createElement(Y.a,{active:a===t},r.a.createElement(S.a,{basic:!0,size:"small",color:"teal",onClick:function(){return function(e){u.selectAggregate(oe).sendCommand(H,{product:e})}(e)}},r.a.createElement(S.a.Content,null,r.a.createElement(_.a,{name:"magnify"})," Product details")))),r.a.createElement(q.a.Content,null,r.a.createElement(q.a.Header,{as:"a"},l),r.a.createElement(q.a.Meta,null,r.a.createElement(W.a,{size:"mini",disabled:!0,icon:"star",defaultRating:i,maxRating:5})," ",s," Reviews"),d&&r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a.Description,null,r.a.createElement("strike",null,g,o)," ",r.a.createElement(_.a,{name:"arrow right"})," ",r.a.createElement(X.a,{as:"span",color:"orange",tag:!0},g,d))),!d&&r.a.createElement(q.a.Description,null,g,o," ")),r.a.createElement(q.a.Content,{extra:!0},r.a.createElement(Z,{size:"small",product:e,onClick:z}))))})))}var te=a(465);function ae(){var e=s(oe,(function(e){return e.selectedProduct})),t=Object(o.a)(e,1)[0];return r.a.createElement(r.a.Fragment,null," ",t&&r.a.createElement(te.a.Group,{horizontal:!0},r.a.createElement(te.a,null,r.a.createElement(J.a,{src:t.img,wrapped:!0}),r.a.createElement(te.a.Group,{horizontal:!0,compact:!0},[1,2,3].map((function(e){return r.a.createElement(te.a,{key:e,basic:!0},r.a.createElement(J.a,{src:t.img,size:"tiny"}))})))),r.a.createElement(te.a,null,r.a.createElement(T.a,{size:"huge"},t.title," ",t.newPrice&&r.a.createElement(X.a,{as:"span",color:"orange",tag:!0},"ON SALE")),r.a.createElement(i.a,null,r.a.createElement(W.a,{disabled:!0,icon:"star",defaultRating:t.rating,maxRating:5})," ",t.reviewsCount," Reviews"),r.a.createElement("br",null),r.a.createElement(i.a,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("br",null),t.newPrice&&r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{as:"span",color:"grey",basic:!0,size:"huge"},r.a.createElement("strike",null,t.ccy,t.price)),r.a.createElement(_.a,{name:"arrow right",size:"big"}),r.a.createElement(X.a,{as:"span",color:"orange",size:"huge"},t.ccy,t.newPrice)),!t.newPrice&&r.a.createElement(T.a,{size:"huge"},t.ccy,t.price),r.a.createElement(P.a,null),r.a.createElement(Z,{size:"huge",product:t,onClick:z}))))}var ne=a(468),re=a(458),ce=["This is not a real ecommerce","Prices and ratings are not real","All product and company names are trademarks\u2122 or registered\xae trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them."];function le(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){setTimeout((function(){c(!0)}),4e3)}),[]);return r.a.createElement(ne.a,{visible:a,animation:"fade up",duration:500},r.a.createElement(re.a,{color:"teal",size:"tiny",onDismiss:function(){c(!1)},style:{position:"fixed",zIndex:10,bottom:0,right:0,width:"100%"},header:"Disclaimer",list:ce}))}var oe="ProductsAggregate",ie={name:oe,initialState:{productsList:[],selectedProduct:null},cmdHandlers:$,evtHandlers:V,bootstrap:function(){u.selectAggregate(oe).sendCommand(G)}},ue="PRODUCT_ADDED_TO_CART",se="CHECKOUT_PAGE_REQUESTED",me={GO_TO_CHECKOUT:"GO_TO_CHECKOUT"},de=[{command:me.GO_TO_CHECKOUT,handler:function(e,t){return N.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{events:[{id:se}]});case 1:case"end":return e.stop()}}))}}],ge=[{command:ue,handler:function(e,t){var a=t.product,n=e.items;if(n.has(a.id)){var r=n.get(a.id);n.set(a.id,Object(O.a)({},a,{count:r.count+1}))}else n.set(a.id,Object(O.a)({},a,{count:1}));return{proposal:Object(O.a)({},e,{items:n})}}}],Ee=a(455);function pe(e){e.size;var t=s(ve,(function(e){return e||{}})),a=(Object(o.a)(t,1)[0]||{}).items,n=void 0===a?new Map:a,c=Array.from(n).map((function(e){return Object(O.a)({},e[1])})),l=c.reduce((function(e,t){return+e+ +t.count}),0);return r.a.createElement(w.a,{on:"click",position:"bottom right",trigger:r.a.createElement(S.a,{color:"teal",icon:!0},r.a.createElement(_.a,{name:"shopping cart"}),l>0&&"    (".concat(l,")"))},r.a.createElement(w.a.Content,null,(!c||0===c.length)&&r.a.createElement(te.a,{basic:!0,textAlign:"center"},r.a.createElement(_.a,{name:"frown outline",size:"big",color:"teal"}),r.a.createElement(T.a,{size:"tiny"},r.a.createElement(T.a.Subheader,null,"Your shopping cart is empty"))),c&&c.length>0&&r.a.createElement(Ee.a.Group,{divided:!0},c.map((function(e){var t=e.id,a=e.img,n=e.title,c=e.price,l=e.newPrice,o=e.ccy,i=e.count;return r.a.createElement(Ee.a,{key:t},r.a.createElement(Ee.a.Image,{size:"mini",src:a}),r.a.createElement(Ee.a.Content,null,r.a.createElement(Ee.a.Description,null,i&&i>1&&r.a.createElement(X.a,{circular:!0,size:"tiny",color:"black"},"x",i)," ",n),r.a.createElement(Ee.a.Meta,null,r.a.createElement("span",{className:"price"},o,(l||c)*i))))})),r.a.createElement(Ee.a,null,r.a.createElement(Ee.a.Header,{as:"h4"},"Total: ",c[0].ccy," ",c.reduce((function(e,t){return+e+ +(t.newPrice||t.price)*t.count}),0).toFixed(2))),r.a.createElement(Ee.a,null,r.a.createElement(Ee.a.Content,null,r.a.createElement(S.a,{fluid:!0,color:"teal",onClick:function(){u.selectAggregate(ve).sendCommand(me.GO_TO_CHECKOUT)}},"Checkout"))))))}function fe(){return r.a.createElement(re.a,{color:"black",size:"tiny",header:"TODO"})}var ve="ShoppingCartAggregate",be={name:ve,initialState:{items:new Map},cmdHandlers:de,evtHandlers:ge,bootstrap:function(){u.selectAggregate("ProductsAggregate").triggerAfter("ADD_TO_SHOPPING_CART_TRIGGERED",{targetAggregate:ve,triggeredEvent:ue})}},he="LOGIN_MODAL_VISIBILITY_UPDATED",Oe="LOGIN_MODAL_REQUESTED",Ce="LOGOUT_USER_REQUESTED",Ae="USER_LOGGED_OUT",Te="USER_SUCCESSFULLY_AUTHENTICATED",Se="UPDATE_LOGIN_MODAL_VISIBILITY",we="AUTHENTICATE_USER",_e=[{command:Se,handler:function(e,t){return{events:[{id:he,payload:t}]}}},{command:we,handler:function(e,t){var a,n,r,c;return N.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,t.password,e.next=3,N.a.awrap(new Promise((function(e,t){setTimeout((function(){e({status:"ok",jwt:"fake.jwt.token"})}),1e3)})));case 3:return n=e.sent,r=[],"ok"===n.status&&(c=n.jwt,r=r.concat([{id:Te,payload:{jwt:c,username:a}}])),e.abrupt("return",{events:r});case 8:case"end":return e.stop()}}))}}],ye=[{command:he,handler:function(e,t){var a=t.show;return{proposal:Object(O.a)({},e,{loginModalVisible:a})}}},{command:Oe,handler:function(e){return{events:[{id:he,payload:{show:!0}}]}}},{command:Te,handler:function(e,t){var a=t.jwt,n=t.username;return{proposal:Object(O.a)({},e,{userLogged:!0,loginModalVisible:!1,jwt:a,username:n})}}},{command:Ce,handler:function(e){return{proposal:Object(O.a)({},e,{userLogged:!1,jwt:null,username:null}),events:[{id:Ae}]}}}],Pe=a(30),je=a(452),Le=a(451),Ue=function(){u.selectAggregate(ke).sendCommand(Se,{show:!1})};function De(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=s("SessionAggregate",(function(e){return e.loginModalVisible})),i=Object(o.a)(l,1)[0];return Object(n.useEffect)((function(){c(!1)}),[i]),r.a.createElement(je.a,Object(Pe.a)({open:i,dimmer:"blurring",size:"mini",onClose:function(){return Ue()}},"size","small"),r.a.createElement(T.a,{color:"teal",icon:"user",content:"Enter your credentials"}),r.a.createElement(je.a.Content,null,r.a.createElement(Le.a,null,r.a.createElement(Le.a.Field,null,r.a.createElement(Le.a.Input,{disabled:!0,value:"testuser",label:"Enter Username"})),r.a.createElement(Le.a.Field,null,r.a.createElement(Le.a.Input,{disabled:!0,value:"password",label:"Enter Password",type:"password"})))),r.a.createElement(je.a.Actions,null,r.a.createElement(S.a,{disabled:a,color:"grey",onClick:function(){return Ue()}},r.a.createElement(_.a,{name:"cancel"})," Cancel"),r.a.createElement(S.a,{loading:a,disabled:a,color:"teal",onClick:function(){var e,t;c(!0),e="MichaelJordan23",t="aPassword",u.selectAggregate(ke).sendCommand(we,{username:e,password:t})}},r.a.createElement(_.a,{name:"checkmark"})," Simulate Successful Login")))}var ke="SessionAggregate",Ie={name:ke,initialState:{userLogged:!1,loginModalVisible:!1,jwt:null,username:null},cmdHandlers:_e,evtHandlers:ye,bootstrap:function(){u.selectAggregate("*").triggerAfter("LOGIN_MODAL_REQUEST_SUBMITTED",{targetAggregate:ke,triggeredEvent:Oe}),u.selectAggregate("*").triggerAfter("LOGOUT_USER_REQUEST_SUBMITTED",{targetAggregate:ke,triggeredEvent:Ce})}};var Re,Ge=function(){var e=s("NavigationAggregate",(function(e){return e.currentPage})),t=Object(o.a)(e,1)[0];return r.a.createElement("div",{style:{background:"#f8f9fa"}},r.a.createElement(i.a,null,r.a.createElement(De,null),r.a.createElement(L,{shoppingCartMenuItem:r.a.createElement(pe,null)}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(k,null),r.a.createElement("br",null),r.a.createElement("br",null),(!t||"home"===t)&&r.a.createElement(ee,null),"product"===t&&r.a.createElement(ae,null),"checkout"===t&&r.a.createElement(fe,null),r.a.createElement(le,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));(Re=[Ie,ie,R,be]).forEach((function(e){var t=e.name,a=e.initialState,n=void 0===a?{}:a,r=e.cmdHandlers,c=e.evtHandlers;!function(e,t,a){t&&t.forEach((function(t){var a=t.command,n=t.handler,r=t.onError,c=void 0===r?null:r;e.setCommandHandler(a,n,c)})),a&&a.forEach((function(t){var a=t.command,n=t.handler,r=t.onError,c=void 0===r?null:r;e.setEventHandler(a,n,c)}))}(u.createAggregate(t,n),r,c)})),Re.forEach((function(e){var t=e.bootstrap;return(void 0===t?function(){}:t)()})),l.a.render(r.a.createElement(Ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[258,1,2]]]);
//# sourceMappingURL=main.dd9aafe3.chunk.js.map