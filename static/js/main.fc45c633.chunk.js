(this.webpackJsonpchronoteam=this.webpackJsonpchronoteam||[]).push([[0],{24:function(e,t,n){e.exports=n(39)},29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(10),l=n(11),r=n(23),c=n(22),o=n(0),u=n.n(o),i=n(15),s=n(2),m=n(18),d=n(7),p={color:"blue",inputText:"you can speak"};function E(e,t){switch(e.color){case"blue":return{inputText:"you're speaking",color:"green"};case"green":return{color:"blue",inputText:"you can speak"};default:throw new Error}}var b=function(){var e=u.a.useReducer(E,p),t=Object(d.a)(e,2),n=t[0],a=t[1],l={backgroundColor:n.color,fontSize:"30px",fontWeight:200,padding:"13px 50px 13px",border:"3px solid black",cursor:"pointer"},r={border:"1px solid #dddddd",textAlign:"left",padding:"8px"};return u.a.createElement("html",null,u.a.createElement("body",null,u.a.createElement("div",null,u.a.createElement("table",{style:{fontFamily:"arial, sans-serif",borderCollapse:"collapse",width:"100%"}},u.a.createElement("tr",null,u.a.createElement("th",null,"Name"),u.a.createElement("th",null,"Counter")),u.a.createElement("tr",null,u.a.createElement("td",{style:r},"Alfreds Futterkiste"),u.a.createElement("td",{style:r})),u.a.createElement("tr",null,u.a.createElement("td",{style:r},"Francisco Chang"),u.a.createElement("td",{style:r})),u.a.createElement("tr",null,u.a.createElement("td",{style:r},"Ernst Handel"),u.a.createElement("td",{style:r})),u.a.createElement("tr",null,u.a.createElement("td",{style:r},"Helen Bennett"),u.a.createElement("td",{style:r})),u.a.createElement("tr",null,u.a.createElement("td",{style:r},"Yoshi Tannamuri"),u.a.createElement("td",{style:r})),u.a.createElement("tr",null,u.a.createElement("td",{style:r},"Giovanni Rovelli"),u.a.createElement("td",{style:r})))),u.a.createElement("div",null,u.a.createElement("button",{style:l,onClick:function(){return a({type:"PressButton"})}},n.inputText))))},y=(n(29),n(21)),h={color:"blue",inputText:"login",clickOk:!0};function f(e,t){switch(e.color){case"blue":return{color:"grey",inputText:"wait",clickOk:!1};case"grey":return h;default:throw new Error}}var g=function(){var e=u.a.useReducer(f,h),t=Object(d.a)(e,2),n=t[0],a=(t[1],Object(y.a)()),l=(a.register,a.handleSubmit),r={backgroundColor:n.color},c=Object(o.useState)("vide"),i=Object(d.a)(c,2),m=i[0],p=i[1],E=new XMLHttpRequest,b=Object(s.f)();return u.a.createElement("div",null,u.a.createElement("form",{onSubmit:l((function(e){console.log("data",e)}))},u.a.createElement("div",{className:"App"},u.a.createElement("header",{className:"App-header"},u.a.createElement("p",null,"Welcome to Chrono Team"),u.a.createElement("div",{className:"field"},u.a.createElement("label",{htmlFor:"name"},"Name"),u.a.createElement("input",{type:"text",value:m,onChange:function(e){return p(e.target.value)}})),u.a.createElement("button",{style:r,type:"submit",onClick:function(){b.push("/foo"),E.open("POST","http://192.168.1.32:8080/allspeakers",!0),E.setRequestHeader("Content-type","application/json;charset=UTF-8"),E.send(JSON.stringify({name:m}))}},"Log in ")))))},v=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.createElement(i.a,null,o.createElement("div",null,o.createElement(s.c,null,o.createElement(s.a,{exact:!0,path:"/",component:g}),o.createElement(s.a,{exact:!0,path:"/foo",component:b}))))}}]),n}(o.Component);Object(m.render)(o.createElement(v,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.fc45c633.chunk.js.map