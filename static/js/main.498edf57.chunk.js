(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{12:function(e,t,a){e.exports=a(25)},17:function(e,t,a){},19:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),o=a.n(r),i=(a(17),a(4)),s=a.n(i),l=a(8),u=a(2),m=(a(19),a(9)),p=a.n(m);function f(e){var t=e.title,a=e.calories,n=e.image;e.item;return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",null,t),c.a.createElement("p",null,"Calories:",a.toFixed(2)),c.a.createElement("img",{src:n,alt:"demo"}))}var h=a(10),d=a(11),b=c.a.createElement(h.a,{icon:d.a}),v=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(u.a)(o,2),m=i[0],p=i[1],h=Object(n.useState)("chicken"),d=Object(u.a)(h,2),v=d[0],E=d[1];Object(n.useEffect)((function(){g()}),[v]);var g=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(v,"&app_id=").concat("6d4dc5a1","&app_key=").concat("267cf85ffc377067fbc643ac61465f13","&from=0&to=9&calories=591-722&health=alcohol-free"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),E(m),p("")}},c.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){p(e.target.value)}}),c.a.createElement("button",{className:"search-btn",type:"submit"},b)),c.a.createElement("div",{className:"content"},a.map((function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,item:e.recipe.ingredients})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports={recipe:"recipe_recipe__1oMWp"}}},[[12,1,2]]]);
//# sourceMappingURL=main.498edf57.chunk.js.map