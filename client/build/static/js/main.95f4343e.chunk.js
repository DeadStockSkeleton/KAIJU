(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(18),a=n.n(s),r=n(7),i=n(5),o=n(3),l=(n(13),n(0));var u=n(4),j=n.n(u),p=n(8),d={signUp:function(e,t,n){e&&t&&n&&fetch("/signup",{method:"POST",body:JSON.stringify({username:t,email:e,password:n}),headers:{"Content-Type":"application/json"}}).then((function(e){200===e.status&&(localStorage.setItem("token","token"),window.location.href="/")}))},getDashboard:function(){fetch("/",{method:"GET"}).then((function(e){return e}))},Login:function(e,t){e&&t&&fetch("/login",{method:"POST",body:JSON.stringify({email:e,pass:t}),headers:{"Content-Type":"application/json"}}).then((function(e){return 200===e.status?(localStorage.setItem("token","token"),window.location.href="/"):(localStorage.removeItem("token"),0)}))},deleteProject:function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/delete/project/"+t,{method:"GET"}).then((function(e){if(200===e.status)return e.json()})).then(function(){var e=Object(p.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=3;break}return e.next=3,fetch("/delete/project/"+t,{method:"DELETE"}).then((function(){return window.location.href="/"}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Logout:function(){fetch("/logout",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(){return localStorage.removeItem("token"),window.location.href="/login"}))},isLoggedIn:function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/auth",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return!0===e})).catch((function(e){return e}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),createProject:function(){var e=Object(p.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/project",{method:"POST",body:JSON.stringify({body:t,file:n}),headers:{"Content-Type":"application/json"}}).then((function(e){return window.location.href="/"}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),createFile:function(){var e=Object(p.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/file",{method:"POST",body:JSON.stringify({file:t,id:n}),headers:{"Content-Type":"application/json"}}).then((function(e){return window.location.reload()}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),saveFile:function(){var e=Object(p.a)(j.a.mark((function e(t,n,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/saving",{method:"POST",body:JSON.stringify({file:t,type:n,content:c}),headers:{"Content-Type":"application/json"}});case 2:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),getProjects:function(){var e=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/projects",{method:"GET",headers:{"Content-Type":"application/json"}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),searchProjects:function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/search/projects",{method:"POST",body:JSON.stringify({query:t}),headers:{"Content-Type":"application/json"}}).then((function(e){return e}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var h=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(o.a)(a,2),u=i[0],j=i[1];function p(e,t){switch(e){case"email":s(t);break;case"password":j(t);break;default:return 0}}return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{class:"container text-center p-5",children:Object(l.jsxs)("form",{class:"container signup-form",children:[Object(l.jsx)("h1",{className:"text-left display-4",children:"Login"}),Object(l.jsx)("label",{class:"form-control mb-4 signup-wrapper p-0 position-relative d-flex flex-justify-between flex-items-center",children:Object(l.jsx)("input",{id:"emailInput",onKeyUp:function(e){return p("email",e.target.value)},type:"text",class:"form-control text-dark signup-input input-sm",placeholder:"example@email.com",autocapitalize:"off",spellcheck:"false",autocomplete:"off"})}),Object(l.jsx)("label",{class:"form-control mb-4 signup-wrapper p-0 position-relative d-flex flex-justify-between flex-items-center",children:Object(l.jsx)("input",{id:"passwordInput",onKeyUp:function(e){return p("password",e.target.value)},type:"password",class:"form-control text-dark signup-input input-sm",placeholder:"Password",autocapitalize:"off",spellcheck:"false",autocomplete:"off"})}),Object(l.jsxs)("ul",{class:"nav nav-pills mx-auto nav-fill",children:[Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)("span",{onClick:function(){d.Login(n,u)},className:"nav-link regActive px-5",children:"Login"})}),Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)(r.b,{to:"/signup",className:"nav-link",children:"SignUp"})})]})]})})})};var f=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{class:"Login-section section",children:Object(l.jsx)(h,{})})})};var b=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("false"),i=Object(o.a)(a,2),u=i[0],j=i[1],p=Object(c.useState)(""),h=Object(o.a)(p,2),f=h[0],b=h[1],x=Object(c.useState)("false"),m=Object(o.a)(x,2),O=m[0],v=m[1],g=Object(c.useState)(""),w=Object(o.a)(g,2),y=w[0],k=w[1],S=Object(c.useState)("false"),C=Object(o.a)(S,2),N=C[0],T=C[1];function P(e,t){switch(e){case"email":if(t.includes("@")&&t.length>=5)return s(t),j("valid");j("wrong");break;case"username":if(t.length>=5)return v("valid");v("wrong");break;case"password":if(t.length>=8&&t.match(/[a-z]/g))return T("valid");T("wrong");break;default:return 0}}function F(e,t){switch(e){case"email":t.length>0&&P("email",t);break;case"username":b(t),t.length>0&&P("username",t);break;case"password":k(t),t.length>0&&P("password",t);break;default:return 0}}return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{class:"container text-center p-5",children:Object(l.jsxs)("div",{class:"container signup-form",children:[Object(l.jsx)("h1",{className:"text-left display-4",children:"SignUp"}),Object(l.jsxs)("label",{class:"form-control mb-4 signup-wrapper p-0 position-relative d-flex flex-justify-between flex-items-center",children:[Object(l.jsx)("input",{id:"emailInput",onKeyUp:function(e){return F("email",e.target.value)},type:"text",class:"form-control text-dark signup-input input-sm",placeholder:"example@email.com",autocapitalize:"off",spellcheck:"false",autocomplete:"off"}),Object(l.jsx)("span",{class:u+" fw-light status",children:"wrong"===u?Object(l.jsx)("i",{class:"fas fa-times"}):Object(l.jsx)("i",{class:"fas fa-check"})})]}),Object(l.jsxs)("label",{class:"form-control mb-4 signup-wrapper p-0 position-relative d-flex flex-justify-between flex-items-center",children:[Object(l.jsx)("input",{id:"usernameInput",onKeyUp:function(e){return F("username",e.target.value)},type:"text",class:"form-control text-dark signup-input input-sm",placeholder:"Username",autocapitalize:"off",spellcheck:"false",autocomplete:"off"}),Object(l.jsx)("span",{class:O+" fw-light status",children:"wrong"===O?Object(l.jsx)("i",{class:"fas fa-times"}):Object(l.jsx)("i",{class:"fas fa-check"})})]}),Object(l.jsxs)("label",{class:"form-control mb-4 signup-wrapper p-0 position-relative d-flex flex-justify-between flex-items-center",children:[Object(l.jsx)("input",{id:"passwordInput",onKeyUp:function(e){return F("password",e.target.value)},type:"password",class:"form-control text-dark signup-input input-sm",placeholder:"Password",autocapitalize:"off",spellcheck:"false",autocomplete:"off"}),Object(l.jsx)("span",{class:N+" fw-light status",children:"wrong"===N?Object(l.jsx)("i",{class:"fas fa-times"}):Object(l.jsx)("i",{class:"fas fa-check"})})]}),Object(l.jsxs)("ul",{class:"nav nav-pills mx-auto nav-fill",children:[Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)("span",{onClick:function(){d.signUp(n,f,y)},className:"nav-link regActive px-5",children:"SignUp"})}),Object(l.jsx)("li",{class:"nav-item",children:Object(l.jsx)(r.b,{to:"/login",className:"nav-link",children:"Login"})})]})]})})})};var x=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{class:"signup-section section",children:Object(l.jsx)(b,{})})})};var m=function(e){var t=e.showModal,n=e.setShowModal,s=Object(c.useState)({title:"Project Tile"}),a=Object(o.a)(s,2),r=a[0],i=a[1],u=Object(c.useState)("Project desc..."),j=Object(o.a)(u,2),p=j[0],h=j[1],f=Object(c.useState)("index"),b=Object(o.a)(f,2),x=b[0],m=b[1],O=Object(c.useState)("html"),v=Object(o.a)(O,2),g=v[0],w=v[1];return Object(l.jsx)(l.Fragment,{children:t?Object(l.jsx)("div",{class:"modal-bg",children:Object(l.jsx)("div",{className:"card newProjectModal p-4",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("nav",{class:"navbar"})," ",Object(l.jsxs)("div",{class:"container",children:[Object(l.jsx)("input",{onKeyUp:function(e){var t;(t=e.target.value).length>0&&i(t)},autoComplete:"off",placeholder:"Project Title",class:"text-light project-title"}),Object(l.jsx)("textarea",{onKeyUp:function(e){var t;(t=e.target.value).length>0&&h(t)},className:"w-100 mt-3 text-light project-desc",placeholder:"Project Desc..."}),Object(l.jsx)("form",{class:"search-form",children:Object(l.jsxs)("label",{class:"form-control search-wrapper p-0 position-relative d-flex",children:[Object(l.jsx)("input",{onKeyUp:function(e){var t;t=e.target.value,m(t)},type:"text",class:"form-control text-light search-input",placeholder:"index",autocapitalize:"off",spellcheck:"false",autocomplete:"off"}),Object(l.jsxs)("select",{onChange:function(e){var t;t=e.target.value,w(t)},class:"form-select form-select-sm type-select",children:[Object(l.jsx)("option",{value:"html",children:".html"}),Object(l.jsx)("option",{value:"css",children:".css"})]}),Object(l.jsx)("div",{class:"Box position-absolute overflow-hidden jump-to-suggestions js-jump-to-suggestions-container d-none"})]})}),Object(l.jsxs)("div",{class:"d-flex",children:[Object(l.jsx)("button",{onClick:function(){!function(){var e={title:r,desc:p},t={title:x,type:g};d.createProject(e,t)}()},class:"btn m-2 btn-primary",children:"Create"}),Object(l.jsx)("button",{class:"btn btn-outline-secondary btn-sm m-2",onClick:function(){n(!1)},children:"cancel"})]})]})]})})}):null})};var O=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)([]),u=Object(o.a)(i,2),h=u[0],f=u[1],b=Object(c.useState)(""),x=Object(o.a)(b,2),O=x[0],v=x[1],g=Object(c.useState)(""),w=Object(o.a)(g,2),y=w[0],k=w[1];function S(){return(S=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/projects",{method:"GET"}).then((function(e){return e.json()})).then((function(e){k(e),f(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){S.apply(this,arguments)}()}),[]),Object(l.jsxs)(l.Fragment,{children:["    ",Object(l.jsx)(m,{showModal:s,setShowModal:a}),Object(l.jsxs)("div",{class:"projects-library-wrapper",children:[Object(l.jsxs)("div",{class:"col-md-3 project-directory text-light",children:[Object(l.jsx)("div",{class:"row project-search",children:Object(l.jsxs)("label",{class:"form-control search-wrapper m-3 p-0 position-relative d-flex",children:[Object(l.jsx)("input",{onKeyUp:function(e){!function(e){for(var t=[],n=0;n<y.length;n++)y[n].title.includes(e)&&t.push(y[n]),f(t)}(e.target.value)},type:"text",class:"form-control text-light search-input",placeholder:"Search for Project",autocapitalize:"off",spellcheck:"false",autocomplete:"off"}),Object(l.jsx)("button",{class:"btn text-light add-btn",onClick:function(){a((function(e){return!e}))},children:"+"})]})}),Object(l.jsx)("div",{class:"row project-tabs",children:Object(l.jsx)("div",{class:"list-group project-tabs p-3 w-100",children:h.length?h.map((function(e,t){return Object(l.jsx)("button",{type:"button",onClick:function(){var t;t=e.id,fetch("/projects/".concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){v(e)}))},class:"list-group-item list-project project-link list-group-item-action",children:e.title},e.id)})):Object(l.jsx)("small",{class:"text-center text-muted m-3",children:"No Projects "})})})]}),Object(l.jsx)("div",{className:"row-col-md-9 g-0 w-100 project-panel p-3",children:O?Object(l.jsxs)("div",{className:"row g-0",children:[Object(l.jsxs)("nav",{class:"navbar w-100",children:[Object(l.jsxs)("div",{class:"container-fluid",children:[Object(l.jsx)("h1",{className:"text-light display-3",children:O.title}),Object(l.jsx)("button",{onClick:function(){!function(e){var t="delete "+O.title;prompt('Type "'.concat(t,'" to delete project'))===t&&d.deleteProject(e)}(O.id)},class:"btn text-light",children:Object(l.jsx)("i",{class:"fas fa-trash"})})]}),Object(l.jsx)(r.b,{to:"/projects/"+O.id+"/code",class:"btn bg-primary px-5 text-light",children:"start"})]}),Object(l.jsx)("div",{className:"row project-desc w-100 rounded p-3 container-fluid project-preview m-3 text-light",children:Object(l.jsx)("p",{children:O.desc})})]}):Object(l.jsx)("small",{class:"text-muted m-5",children:"No Project Selected"})})]})]})};var v=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(O,{})})},g=n(31),w=n(27),y=n.n(w),k=n(28);var S=function(e){var t=e.showModal,n=e.setShowModal,s=e.id,a=e.currentProj,r=Object(c.useState)("index"),i=Object(o.a)(r,2),u=i[0],j=i[1],p=Object(c.useState)("html"),h=Object(o.a)(p,2),f=h[0],b=h[1];return Object(l.jsx)(l.Fragment,{children:t?Object(l.jsx)("div",{class:"modal-bg",children:Object(l.jsxs)("div",{className:"card newFileModal w-50 p-4",children:[Object(l.jsx)("nav",{class:"navbar w-100",children:Object(l.jsx)("div",{class:"container-fluid text-muted",children:Object(l.jsxs)("small",{children:["project: ",a.title]})})}),Object(l.jsx)("div",{class:"container text-light",children:Object(l.jsx)("form",{children:Object(l.jsxs)("label",{class:"form-control search-wrapper p-0 position-relative d-flex",children:[Object(l.jsx)("input",{onKeyUp:function(e){var t;t=e.target.value,j(t)},type:"text",class:"form-control text-light search-input",placeholder:"index",autocapitalize:"off",spellcheck:"false",autocomplete:"off"}),Object(l.jsxs)("select",{onChange:function(e){var t;t=e.target.value,b(t)},class:"form-select form-select-sm type-select",children:[Object(l.jsx)("option",{value:"html",children:".html"}),Object(l.jsx)("option",{value:"css",children:".css"})]}),Object(l.jsx)("div",{class:"Box position-absolute overflow-hidden jump-to-suggestions js-jump-to-suggestions-container d-none"})]})})}),Object(l.jsxs)("div",{className:"d-grid gap-2 d-md-block container mt-3",children:[Object(l.jsxs)("button",{onClick:function(){!function(e){var t={title:u,type:f};d.createFile(t,e)}(s)},type:"button",class:"btn btn-primary btn-sm",children:["create ",u,Object(l.jsx)("small",{children:"."+f})]}),Object(l.jsx)("button",{type:"button",class:"btn btn-outline-secondary btn-sm mx-3",onClick:function(){n(!1)},children:"cancel"})]})]})}):null})};var C=function(e){var t=Object(c.useState)([]),n=Object(o.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)("html"),u=Object(o.a)(i,2),h=u[0],f=u[1],b=Object(c.useState)(""),x=Object(o.a)(b,2),m=x[0],O=x[1],v=Object(c.useState)(!1),w=Object(o.a)(v,2),C=w[0],N=w[1],T=Object(c.useState)(null),P=Object(o.a)(T,2),F=P[0],E=P[1],U=Object(c.useState)(!1),L=Object(o.a)(U,2),I=L[0],K=L[1],M=Object(c.useState)(m),z=Object(o.a)(M,2),J=z[0],G=z[1],D=Object(c.useState)(m),B=Object(o.a)(D,2),A=B[0],q=B[1],W=Object(c.useState)(m),H=Object(o.a)(W,2),Q=H[0],R=H[1],V=Object(c.useState)(""),X=Object(o.a)(V,2),Y=X[0],Z=X[1],$=e.match.params.id;function _(e){switch(e){case"html":return Object(l.jsx)("i",{class:"fab fa-html5"});case"css":return Object(l.jsx)("i",{class:"fab fa-css3-alt"});case"js":return Object(l.jsx)("i",{class:"fab fa-js"});default:return 0}}function ee(){return(ee=Object(p.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(!C);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e,t){return ne.apply(this,arguments)}function ne(){return(ne=Object(p.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(n),E(t),e.next=4,fetch("/file/".concat(t,"/").concat(n),{method:"GET"}).then((function(e){return e.json()})).then((function(e){switch(O(e),n){case"html":return G(e);case"css":return q(e);case"js":return R(e);default:return 0}}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){fetch("/projects/".concat($,"/code"),{method:"GET"}).then((function(e){return e.json()})).then((function(e){a(e)})),function(e){fetch("/projects/".concat(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){Z(e)}))}($),s.length>0&&te(s[0].uid,s[0].type)}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(S,{currentProj:Y,id:e.match.params.id,showModal:I,setShowModal:K}),C?Object(l.jsx)(y.a,{title:"Live Code",children:Object(k.a)("<style>".concat(A,"</style>").concat(J,"<script>").concat(Q,"<\/script>"))}):null,Object(l.jsx)("div",{class:"control-panel-wrapper w-100",children:Object(l.jsxs)("div",{class:" d-flex p-3 bg-light",children:[6===s.length?null:Object(l.jsx)("button",{onClick:function(){K((function(e){return!e}))},className:"btn newFileBtn control-panel-btn",children:Object(l.jsx)("i",{class:"fas fa-plus"})}),Object(l.jsx)("button",{onClick:function(){!function(){ee.apply(this,arguments)}()},className:C?"text-dark btn btn-sm":"text-muted btn btn-sm",children:C?Object(l.jsx)("i",{class:"fas fa-pause"}):Object(l.jsx)("i",{class:"fas fa-play"})}),Object(l.jsx)("button",{onClick:function(){var e,t,n;e=F,t=h,n=m,d.saveFile(e,t,n)},class:"btn",children:Object(l.jsx)("i",{class:"fas fa-save"})})]})}),Object(l.jsx)("div",{className:"editor-wrapper w-100 d-flex",children:Object(l.jsx)("div",{className:"editor p-3",children:Object(l.jsx)(g.a,{onChange:function(e){switch(O(e),h){case"html":return G(e);case"css":return q(e);case"js":return R(e);default:return 0}},height:"90vh",width:"100vw",language:function(e){switch(e){case"html":return"html";case"css":return"css";case"js":return"javascript";default:return 0}}(h),value:m})})}),Object(l.jsxs)("div",{className:"tab-wrapper fixed-bottom d-flex p-3 w-100 text-dark bg-light",children:[Object(l.jsx)("div",{className:"d-flex file-cont",children:s?s.map((function(e){return Object(l.jsxs)("small",{onClick:function(){return te(e.uid,e.type)},className:F===e.uid?"mx-3 me-3 pe-3 file-tab active-file":"mx-3 me-3 pe-3 file-tab",children:[_(e.type)," ",e.title+"."+e.type]})})):null}),Object(l.jsx)("div",{className:"current-project bg-light mx-3 pe-3 d-flex",children:Object(l.jsx)(r.b,{to:"/",class:"text-dark",children:Object(l.jsx)("small",{children:Object(l.jsx)("i",{class:"fas fa-home"})})})})]})]})},N=n(29),T=n(30),P=n(15),F=n(33),E=n(32),U=function(e){Object(F.a)(n,e);var t=Object(E.a)(n);function n(e){var c;return Object(N.a)(this,n),(c=t.call(this,e)).state={searchType:"Projects",results:[]},c.handleChange=function(e){c.setState({searchType:e.target.value})},c.logout=function(){d.Logout()},c.escFunction=c.escFunction.bind(Object(P.a)(c)),c}return Object(T.a)(n,[{key:"escFunction",value:function(e){if(13===e.keyCode){var t=e.target.value;fetch("/search/projects",{method:"POST",body:JSON.stringify({query:t}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.escFunction,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escFunction,!1)}},{key:"render",value:function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:" d-flex search-container  col",children:[Object(l.jsx)("div",{class:"search-form mx-auto",children:Object(l.jsxs)("label",{class:"form-control search-wrapper p-0 position-relative d-flex",children:[Object(l.jsx)("select",{disabled:!0,onChange:this.handleChange,class:"form-select form-select-sm search-select",children:Object(l.jsx)("option",{value:"Projects",children:"/"})}),Object(l.jsx)("input",{disabled:!0,type:"text",onChange:this.escFunction,class:"form-control disabled text-light search-input",placeholder:"Search "+this.state.searchType,autocapitalize:"off",spellcheck:"false",autocomplete:"off"})]})}),Object(l.jsx)("button",{onClick:this.logout,class:"text-danger btn",children:"Logout"})]})})}}]),n}(c.Component);var L=function(){var e=Object(i.g)();return Object(l.jsx)(l.Fragment,{children:"/live"===e.pathname?null:Object(l.jsx)("nav",{className:"/login"===e.pathname||"/signup"===e.pathname?"navbar sticky-top":"login-true sticky-top navbar",children:Object(l.jsxs)("div",{className:"container-fluid lbar p-2",children:[Object(l.jsxs)("b",{className:"/login"===e.pathname||"/signup"===e.pathname?"text-dark nav-logo navbar-brand":"text-light nav-logo navbar-brand",children:["KAIJU",Object(l.jsx)("span",{className:"text-primary",children:"CODE"})]}),"/login"===e.pathname||"/signup"===e.pathname?Object(l.jsx)(l.Fragment,{}):Object(l.jsx)(U,{})]})})})},I=function(e){return localStorage.getItem("token")?Object(l.jsx)(i.b,{exact:!0,path:e.path,component:e.component}):Object(l.jsx)(i.a,{to:"/login"})};var K=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(L,{}),Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{exact:!0,path:"/signup",component:x}),Object(l.jsx)(i.b,{exact:!0,path:"/login",component:f}),Object(l.jsx)(I,{exact:!0,path:"/",component:v}),Object(l.jsx)(I,{exact:!0,path:"/projects/:id/code",component:C})]})]})};n(57),n(58),n(60);a.a.render(Object(l.jsx)(K,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.95f4343e.chunk.js.map