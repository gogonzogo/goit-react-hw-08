"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[199],{1799:function(a,n,t){t.d(n,{Z:function(){return c}});var e={validationPopup:"ValidationPopup_validationPopup__-i5Rs",validationPopupItem:"ValidationPopup_validationPopupItem__H+yOa",validationPopupIcon:"ValidationPopup_validationPopupIcon__THSxl"},i=t(493),o=t(4852),r=t(6259),s=t(8946),l=t(5146),d=t(5527),u=t(184),c=function(a){var n=a.validationData;return(0,u.jsx)(d.Z,{elevation:8,className:e.validationPopup,children:(0,u.jsx)(i.Z,{className:e.validationPopupList,sx:{width:"100%",maxWidth:360},children:n.map((function(a,n){var t=a[Object.keys(a)[0]],i=t.id,d=t.message,c=t.met,p=c?s.Z:l.Z,m=c?"green":"red";return(0,u.jsxs)(o.ZP,{className:e.validationPopupItem,disableGutters:!0,children:[(0,u.jsx)(p,{className:e.validationPopupIcon,style:{color:m}}),(0,u.jsx)(r.Z,{disableTypography:!0,primary:d,sx:{fontSize:"12px"}})]},i)}))})})}},623:function(a,n,t){t.d(n,{V:function(){return u}});var e=t(9434),i=function(a){return a.validation.validationReqs},o=function(a){return a.validation.formData},r=function(a){return a.validation.formData.name},s=function(a){return a.validation.formData.password},l=function(a){return a.validation.formData.password2},d=function(a){return a.validation.formData.email},u=function(){return{validationReqs:(0,e.v9)(i),formData:(0,e.v9)(o),formDataEmail:(0,e.v9)(d),formDataName:(0,e.v9)(r),formDataPassword:(0,e.v9)(s),formDataPassword2:(0,e.v9)(l)}}},778:function(a,n,t){t.r(n),t.d(n,{default:function(){return k}});var e=t(4942),i=t(1413),o=t(9439),r="Register_registerForm__uD5pr",s="Register_registerSection__Pmq8N",l=t(2791),d=t(1799),u=t(9434),c=t(7689),p=t(5823),m=t(5264),f=t(8223),v=t(8096),x=t(4925),h=t(7078),Z=t(3466),w=t(3400),j=t(3746),g=t(165),D=t(6151),P=t(521),_=t(5822),y=t(623),b=t(184),k=function(){var a=(0,l.useState)({name:"",email:"",password:"",password2:""}),n=(0,o.Z)(a,2),t=n[0],k=n[1],C=t.name,N=t.email,I=t.password,R=t.password2,T=(0,l.useState)(!1),F=(0,o.Z)(T,2),S=F[0],V=F[1],q=(0,l.useState)(""),z=(0,o.Z)(q,2),B=z[0],E=z[1],O=(0,u.I0)(),W=(0,y.V)().validationReqs,G=(0,c.s0)(),A=function(a){a.preventDefault();var n=a.target.id,t=a.target.value;k((function(a){return(0,i.Z)((0,i.Z)({},a),{},(0,e.Z)({},n,t))})),O((0,p.Zv)((0,e.Z)({},n,t))),O((0,p.o5)((0,e.Z)({},a.target.id,a.target.value)))},H=function(a){var n=a.target.id;E(n)},M=function(){E("")},L=function(){return V((function(a){return!a}))},U=function(a){a.preventDefault()};return(0,b.jsx)("section",{className:s,children:(0,b.jsxs)("form",{className:r,children:[(0,b.jsx)(f.Z,{sx:{marginTop:"20px"},id:"name",label:"Username",variant:"standard",fullWidth:!0,size:"large",value:C,onChange:A,onFocus:H,onBlur:M}),"name"===B&&(0,b.jsx)(d.Z,{validationData:W.name}),(0,b.jsx)(f.Z,{sx:{marginTop:"20px"},id:"email",label:"Email",variant:"standard",fullWidth:!0,size:"small",value:N,onChange:A,onFocus:H,onBlur:M}),"email"===B&&(0,b.jsx)(d.Z,{validationData:W.email}),(0,b.jsxs)(v.Z,{sx:{width:"100%",marginTop:"20px"},variant:"standard",children:[(0,b.jsx)(x.Z,{htmlFor:"standard-adornment-password",children:"Password"}),(0,b.jsx)(h.Z,{id:"password",type:S?"text":"password",autoComplete:"off",value:I,onChange:A,onFocus:H,onBlur:M,endAdornment:(0,b.jsx)(Z.Z,{position:"end",children:(0,b.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:L,onMouseDown:U,children:S?(0,b.jsx)(g.Z,{}):(0,b.jsx)(j.Z,{})})})})]}),"password"===B&&(0,b.jsx)(d.Z,{validationData:W.password}),(0,b.jsxs)(v.Z,{sx:{width:"100%",marginTop:"20px"},variant:"standard",children:[(0,b.jsx)(x.Z,{htmlFor:"standard-adornment-password",children:"Confirm Password"}),(0,b.jsx)(h.Z,{id:"password2",type:S?"text":"password",autoComplete:"off",value:R,onChange:A,onFocus:H,onBlur:M,endAdornment:(0,b.jsx)(Z.Z,{position:"end",children:(0,b.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:L,onMouseDown:U,children:S?(0,b.jsx)(g.Z,{}):(0,b.jsx)(j.Z,{})})})})]}),"password2"===B&&(0,b.jsx)(d.Z,{validationData:W.password2}),(0,b.jsx)(D.Z,{sx:{marginTop:"40px"},variant:"contained",fullWidth:!0,startIcon:(0,b.jsx)(P.Z,{}),onClick:function(a){a.preventDefault();var n=Object.values(W).every((function(a){return a.every((function(a){return a[Object.keys(a)[0]].met}))}));C&&N&&I?n?O((0,_.z2)({name:C,email:N,password:I})).then((function(a){a.error||(O((0,p.vG)()),O((0,p.pg)()),G("/contacts"))})).catch((function(){m.Notify.failure("Registration failure")})):m.Notify.warning("Please check fields with errors"):m.Notify.warning("Please fill in all the fields")},children:"REGISTER"})]})})}}}]);
//# sourceMappingURL=199.0962c556.chunk.js.map