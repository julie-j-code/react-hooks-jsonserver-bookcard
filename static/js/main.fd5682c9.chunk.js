(this["webpackJsonpcampus-react-shop"]=this["webpackJsonpcampus-react-shop"]||[]).push([[0],{111:function(e,t,a){e.exports=a(142)},117:function(e,t,a){},118:function(e,t,a){},142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),c=a.n(l),i=(a(116),a(117),a(81)),o=a(54),u=(a(118),a(98)),m=a.n(u),s=a(157),d=a(101),E=a(158),p=a(50);function f(e){var t=e.data,a=Object(n.useContext)(w).addToCart;return r.a.createElement(s.a,null,r.a.createElement(d.a,{src:t.image,className:"ui fluid image"}),r.a.createElement(s.a.Content,null,r.a.createElement(s.a.Header,null,t.title),r.a.createElement(s.a.Meta,null,r.a.createElement("span",{className:"date"},"publi\xe9 en ",t.year)),r.a.createElement(s.a.Description,null)),r.a.createElement(s.a.Content,{extra:!0},r.a.createElement(E.a,{animated:"vertical",onClick:function(){return a(t)}},r.a.createElement(E.a.Content,{hidden:!0},"+"),r.a.createElement(E.a.Content,{visible:!0},r.a.createElement(p.a,{name:"shop"})))))}var g=a(160),v=a(161);function C(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){m.a.get("http://localhost:3001/products").then((function(e){var t=e.data;l(t)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{as:"h2"},"Livres en vente"),0===a.length?r.a.createElement("div",null,"loading..."):r.a.createElement(v.a,{columns:4,doubling:!0,stackable:!0,className:"ui for column grid"},a.map((function(e){return r.a.createElement(v.a.Column,{key:e.id},r.a.createElement(f,{data:e}))}))))}function b(){var e=Object(n.useContext)(w).countCartArticles;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Caddie (",e(),")"))}var h=a(71),y=a(9),O=a(156);function j(){var e=Object(n.useContext)(w),t=e.cart,a=e.addToCart,l=e.removeFromCart,c=e.emptyCart;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:c,class:"ui button"},"vider le caddie"),r.a.createElement(O.a,{celled:!0,padded:!0},r.a.createElement(O.a.Header,null,r.a.createElement(O.a.Row,null,r.a.createElement(O.a.HeaderCell,{singleLine:!0,textAlign:"center"},"Quantit\xe9"),r.a.createElement(O.a.HeaderCell,null,"Titre"),r.a.createElement(O.a.HeaderCell,{textAlign:"right"},"Prix unitaire"),r.a.createElement(O.a.HeaderCell,{textAlign:"right"},"Prix total"))),r.a.createElement(O.a.Body,null,Object.keys(t).map((function(e){return r.a.createElement(O.a.Row,{key:t[e].id},r.a.createElement(O.a.Cell,null,r.a.createElement(p.a,{name:"minus square outline",onClick:function(){return l(t[e])},style:{cursor:"pointer"}}),t[e].quantity," ",r.a.createElement(p.a,{name:"plus square outline",onClick:function(){return a(t[e])},style:{cursor:"pointer"}})),r.a.createElement(O.a.Cell,{singleLine:!0},t[e].title),r.a.createElement(O.a.Cell,{textAlign:"right"},t[e].price," \u20ac"),r.a.createElement(O.a.Cell,{textAlign:"right"},(t[e].quantity*t[e].price).toFixed(2)," \u20ac"))})))))}var k=a(154),x=a(155),w=Object(n.createContext)();var q=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(0),u=Object(o.a)(c,2),m=u[0],s=u[1];Object(n.useEffect)((function(){var e=localStorage.getItem("react-shop");null!==e&&l(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("react-shop",JSON.stringify(a)),document.title="caddie(".concat(m,")")}),[a,m]);var d={cart:a,addToCart:function(e){console.log("item",e),a[e.id]?a[e.id].quantity+=1:(a[e.id]=e,a[e.id].quantity=1),l(Object(i.a)({},a))},countCartArticles:function(){var e=0;return Object.keys(a).map((function(t){return e+=a[t].quantity})),s(e),e},removeFromCart:function(e){1!==a[e.id].quantity?a[e.id].quantity=a[e.id].quantity-1:delete a[e.id],l(Object(i.a)({},a)),console.log("cart",a)},emptyCart:function(){window.confirm("Etes-vous vous s\xfbr de vouloir vider le caddie ? ")&&l({})}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement(w.Provider,{value:d},r.a.createElement(k.a,null,r.a.createElement(x.a,{stackable:!0},r.a.createElement(x.a.Item,null,r.a.createElement(h.b,{to:"/"},"Campus Shop")),r.a.createElement(x.a.Item,null,r.a.createElement(h.b,{to:"/cart"},r.a.createElement(p.a,{name:"cart",size:"small"})," ",r.a.createElement(b,null)))),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/cart",component:j}),r.a.createElement(y.a,{path:"/",component:C}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[111,1,2]]]);
//# sourceMappingURL=main.fd5682c9.chunk.js.map