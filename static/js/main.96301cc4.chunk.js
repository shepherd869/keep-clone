(this["webpackJsonpkeep-clone"]=this["webpackJsonpkeep-clone"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(7),r=n.n(o),c=(n(14),n(8)),i=n(2),u=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("h1",null," Keep Clone ")))},m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",null,l.a.createElement("p",null," Greg Shepherd \xa9 CDA2520C")))},s=n(4),d=n(5),b=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)({title:"",body:""}),u=Object(i.a)(c,2),m=u[0],b=u[1],f=function(e){var t=e.target,n=t.name,a=t.value;b((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(s.a)({},n,a))})),console.log(m)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"notes"},l.a.createElement("form",null,o?l.a.createElement("input",{type:"text",name:"title",value:m.title,onChange:f,placeholder:"Title",autoComplete:"off"}):null,l.a.createElement("textarea",{rows:"3",column:"auto",name:"body",value:m.body,onChange:f,placeholder:"Take a note...",onClick:function(){r(!0)},onDoubleClick:function(){r(!1)}})),o?l.a.createElement("button",{onClick:function(){e.passNote(m),b({})},className:"add-btn"},l.a.createElement("span",{role:"img","aria-label":"add button"},"\u2795")):null))},f=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"note-container"},l.a.createElement("div",{className:"note-list"},l.a.createElement("h3",null," ",e.title," "),l.a.createElement("p",null," ",e.body," "),l.a.createElement("button",{className:"delete-btn",onClick:function(){e.deleteItem(e.id)}},l.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uddd1\ufe0f")))))},h=(n(15),function(){var e=Object(a.useState)([{title:"Refine Keep Clone",body:"Play with CSS"},{title:"Work on better buttons",body:"Research ways to do that, I have some ideas"},{title:"Keep playing with text",body:"I got longer entries to wrap and lengthen, sure took me a while, but it was really cool when I got it to work!"},{title:"CSS seems really important",body:"for creating a better UI/UX"},{title:"GitHub Pages",body:"is really cool, but I'm still confused on how to upload a project to SOTD and get it to function"}]),t=Object(i.a)(e,2),n=t[0],o=t[1],r=function(e){o((function(t){return t.filter((function(t,n){return n!==e}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(b,{passNote:function(e){o((function(t){return[].concat(Object(c.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(f,{key:t,id:t,title:e.title,body:e.body,deleteItem:r})})),l.a.createElement(m,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.96301cc4.chunk.js.map