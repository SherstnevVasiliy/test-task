(this["webpackJsonptest-work"]=this["webpackJsonptest-work"]||[]).push([[0],{23:function(e,a,t){},24:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var c=t(2),s=t.n(c),r=t(17),n=t.n(r),l=(t(23),t(24),t(3)),i=t.n(l),j=t(5),o=t(4),d=(t(8),t(6)),b=t.n(d),u=t(0),h=function(){var e=Object(c.useState)(""),a=Object(o.a)(e,2),t=a[0],s=a[1],r=Object(c.useState)(""),n=Object(o.a)(r,2),l=n[0],d=n[1],h=function(){var e=Object(j.a)(i.a.mark((function e(a){var t,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,b.a.get("https://jsonplaceholder.typicode.com/users");case 4:for(c=e.sent,console.log(c.data),s=0;s<c.data.length;s++)c.data[s].email===a&&(t=c.data[s],alert("Welcome! ".concat(t.name)));t.id?console.log(t):alert("Auth FAIL"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"wrap",children:[Object(u.jsxs)("div",{className:"cantainer-reg",children:[Object(u.jsx)("h1",{children:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0430\u0441 \u0441\u043d\u043e\u0432\u0430!"}),Object(u.jsx)("h2",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c \u0438 Email"})]}),Object(u.jsxs)("form",{className:"reg-form cantainer-reg",onSubmit:function(e){e.preventDefault(),""===t||""===l?alert("\u041f\u043e\u043b\u044f \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c\u0438..."):(h(t),s(""),d(""))},children:[Object(u.jsx)("input",{onChange:function(e){return s(e.target.value)},value:t,className:"input",type:"text",placeholder:"Email"}),Object(u.jsx)("input",{onChange:function(e){return d(e.target.value)},className:"input",value:l,type:"password",placeholder:"Password"}),Object(u.jsx)("p",{className:"forgot",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"}),Object(u.jsx)("input",{type:"submit",className:"sign-in",value:"\u0412\u043e\u0439\u0442\u0438"}),Object(u.jsxs)("div",{className:"no-accaunt-wrap",children:[Object(u.jsx)("p",{className:"no-accaunt",children:"\u041d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?"}),Object(u.jsx)("ul",{className:"reistration",children:Object(u.jsx)("li",{children:Object(u.jsx)("a",{children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c"})})})]})]}),Object(u.jsx)("div",{className:"cantainer-reg",children:Object(u.jsxs)("ul",{className:"media-social",children:[Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.google.ru/",target:"_blank",className:"media-google",rel:"noreferrer",children:Object(u.jsx)("span",{})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://ru-ru.facebook.com/",target:"_blank",className:"media-facebook",rel:"noreferrer",children:Object(u.jsx)("span",{})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://vk.com/",target:"_blank",className:"media-vk",rel:"noreferrer",children:Object(u.jsx)("span",{})})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"https://www.apple.com/ru/",target:"_blank",className:"media-apple",rel:"noreferrer",children:Object(u.jsx)("span",{})})})]})}),Object(u.jsx)("div",{className:"wrap-bg"})]})},p=t(46),m=function(e){var a=e.data,t=a.image,c=a.title,s=a.price;return Object(u.jsxs)("div",{className:"card-item",children:[Object(u.jsx)("img",{alt:"",className:"img-card",src:t}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:c}),Object(u.jsxs)("p",{className:"card-price",children:[s,"$"]})]})]},Object(p.a)())},O=function(){var e=Object(c.useState)([]),a=Object(o.a)(e,2),t=a[0],s=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(j.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://fakestoreapi.com/products");case 3:a=e.sent,s(a.data),console.log(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.jsxs)("div",{className:"wrap",children:[Object(u.jsxs)("div",{className:"page-header",children:[Object(u.jsx)("span",{className:"page-header-arrow",children:Object(u.jsx)("img",{alt:""})}),Object(u.jsx)("p",{className:"page-header-catalog",children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}),Object(u.jsx)("figure",{className:"smile-avatar"})]}),Object(u.jsx)("form",{className:"search",children:Object(u.jsx)("input",{className:"search-input",type:"text",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0442\u043e\u0432\u0430\u0440..."})}),Object(u.jsxs)("section",{children:[Object(u.jsxs)("ul",{className:"section-catalog",children:[Object(u.jsx)("li",{className:"section-popular",children:Object(u.jsx)("a",{children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435"})}),Object(u.jsx)("li",{className:"section-view-all",children:Object(u.jsx)("a",{children:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435"})})]}),Object(u.jsx)("div",{className:"section-vitrina",children:t.map((function(e){return Object(u.jsx)(m,{className:"items-card",data:e},Object(p.a)())}))})]})]})};var x=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(O,{})]})};n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))},8:function(e,a,t){}},[[45,1,2]]]);
//# sourceMappingURL=main.21cba606.chunk.js.map