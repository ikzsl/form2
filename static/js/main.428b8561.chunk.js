(this.webpackJsonpform2=this.webpackJsonpform2||[]).push([[0],{141:function(e,a,t){e.exports=t(211)},147:function(e,a,t){},150:function(e,a,t){},210:function(e,a,t){},211:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(33),c=t.n(l),m=(t(146),t(147),t(111)),i=t(109),s=t(112),u=t(60),d=t(59),o=t(214),f=t(215),b=t(110),E=(t(150),function(e){var a=e.label,t=Object(s.a)(e,["label"]),r=Object(u.d)(t),l=Object(i.a)(r,2),c=l[0],m=l[1],d=t.id,f=t.name;return n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:d||f},a),n.a.createElement(o.a,Object.assign({className:"text-input"},c,t)),m.touched&&m.error?n.a.createElement("div",{className:"error"},m.error):null)}),p=function(e){var a=e.children,t=Object(s.a)(e,["children"]),r=Object(u.d)(Object(m.a)(Object(m.a)({},t),{},{type:"checkbox"})),l=Object(i.a)(r,2),c=l[0],d=l[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{className:"checkbox"},n.a.createElement(f.a,Object.assign({},c,t)),a),d.touched&&d.error?n.a.createElement("div",{className:"error"},d.error):null)},h=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Subscribe!"),n.a.createElement(u.c,{initialValues:{firstName:"",lastName:"",email:"",acceptedTerms:!1},validationSchema:d.b({firstName:d.c().max(15,"Must be 15 characters or less").required("Required"),lastName:d.c().max(20,"Must be 20 characters or less").required("Required"),email:d.c().email("Invalid email address").required("Required"),acceptedTerms:d.a().required("Required").oneOf([!0],"You must accept the terms and conditions.")}),onSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){t(!1)}),400)},render:function(e){var a=e.values;return n.a.createElement(u.b,{className:"form"},n.a.createElement(E,{label:"First Name",name:"firstName",type:"text",placeholder:"Jane",className:"field"}),n.a.createElement(E,{label:"Last Name",name:"lastName",type:"text",placeholder:"Doe",className:"field"}),n.a.createElement(E,{label:"Email Address",name:"email",type:"email",placeholder:"jane@formik.com",className:"field"}),n.a.createElement(u.a,{name:"friends",render:function(e){return n.a.createElement("div",null,a.friends&&a.friends.length>0?a.friends.map((function(t,r){return n.a.createElement("div",{key:r,className:"field"},n.a.createElement(o.a,{id:r,name:"friends.".concat(r),onPressEnter:function(t){t.preventDefault(),e.insert(r,""),document.getElementById(a.friends.length-1).focus()}}))})):e.push(""),n.a.createElement(b.a,{onClick:function(){document.getElementById(a.friends.length-1).focus(),e.push("")},className:"field",type:"primary"},"Add"))}}),n.a.createElement(p,{name:"acceptedTerms"},"I accept the terms"),n.a.createElement(b.a,{htmlType:"submit",className:"field",type:"primary"},"Submit"))}}))},N=(t(210),function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h2",null,"\u0424\u043e\u0440\u043c\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438"),n.a.createElement(h,null))});c.a.render(n.a.createElement(N,null),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.428b8561.chunk.js.map