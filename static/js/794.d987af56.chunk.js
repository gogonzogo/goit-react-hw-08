"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[794],{1794:function(t,e,n){n.r(e),n.d(e,{Contacts:function(){return ht},default:function(){return jt}});var a=n(9439),r=n(4942),c=n(1413),i="ContactsForm_addContactButton__eAEyH",o="ContactsForm_inputBox__og9Yo",s="ContactsForm_input__UjXFK",l=n(2791),u=n(9434),d=n(6052),m=function(t){return t.contacts.contacts.items},f=function(t){return t.contacts.filter},p=function(t){return t.contacts.sortOptions},x=function(t){return t.contacts.contacts.isLoading},h=function(t){return t.contacts.contacts.error},j=function(t){return t.contacts.phonebookOptions},b=function(){return{contacts:(0,u.v9)(m),filter:(0,u.v9)(f),sortOptions:(0,u.v9)(p),error:(0,u.v9)(h),isLoading:(0,u.v9)(x),phonebookOptions:(0,u.v9)(j)}},v=n(4554),Z=n(3466),C=n(9788),g=n(6429),N=n(9952),_=n(3329),k=n(9860),y=n(1686),I=n(184);function S(){var t=(0,l.useState)(!1),e=(0,a.Z)(t,2),n=e[0],m=e[1],f=(0,l.useState)({name:"",number:""}),p=(0,a.Z)(f,2),x=p[0],h=p[1],j=(0,u.I0)(),S=b().contacts,w=function(t){var e=t.target.value.split(" ").map((function(t){return t.trim()})).join(" ");h((function(n){return(0,c.Z)((0,c.Z)({},n),{},(0,r.Z)({},t.target.name,e))}))};return(0,I.jsxs)(v.Z,{children:[(0,I.jsxs)(v.Z,{className:o,children:[(0,I.jsx)(g.Z,{className:s,name:"name",label:"Contact Name",onChange:w,value:x.name,type:"text",required:!0,InputProps:{startAdornment:(0,I.jsx)(Z.Z,{position:"start",children:(0,I.jsx)(N.Z,{})})},variant:"standard"}),(0,I.jsx)(g.Z,{className:s,name:"number",label:"Contact Number",onChange:w,value:x.number,type:"tel",required:!0,InputProps:{startAdornment:(0,I.jsx)(Z.Z,{position:"start",children:(0,I.jsx)(C.Z,{})})},variant:"standard"})]}),(0,I.jsx)(v.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,I.jsx)(k.Z,{className:i,onClick:function(t){t.preventDefault(),m(!0);var e=x.name,n=x.number,a={name:e,number:n};return S.find((function(t){return t.name.toLowerCase()===e.toLowerCase()||t.number===n}))?(y.Notify.warning("".concat(e," or ").concat(n," is already in contacts")),void m(!1)):e&&n?(j((0,d.uK)(a)).then((function(){return m(!1)})),void h({name:"",number:""})):(y.Notify.failure("Please fill out all fields"),void m(!1))},loading:n,loadingPosition:"center",startIcon:(0,I.jsx)(_.Z,{}),variant:"contained",type:"submit",children:(0,I.jsx)("span",{children:"Save"})})})]})}var w=n(1538),L=n(585);function T(){var t=(0,l.useState)({input:""}),e=(0,a.Z)(t,2),n=e[0],r=e[1],i=(0,u.I0)();(0,l.useEffect)((function(){i((0,w.xO)(n.input))}),[n.input,i]);return(0,I.jsx)(v.Z,{sx:{width:"100%",marginTop:"20px"},children:(0,I.jsx)(g.Z,{label:"Filter Name or Number",id:"outlined-start-adornment",sx:{width:"100%"},onChange:function(t){r((function(e){return(0,c.Z)((0,c.Z)({},e),{},{input:t.target.value})}))},value:n.input,InputProps:{endAdornment:(0,I.jsx)(Z.Z,{position:"end",children:(0,I.jsx)(L.Z,{})})}})})}var A="ContactsSort_sortToggleSection__HQBhm",D="ContactsSort_sortToggleContainer__uHAxq",E=n(7924),P=n(5527),F=n(388),O=n(3238),B=n(2715),K=n(111),z=n(6502),H=n(6326),q=n(3768);function M(){var t=(0,l.useState)({name:"firstName",order:"asc"}),e=(0,a.Z)(t,2),n=e[0],r=e[1],i=(0,l.useState)("left"),o=(0,a.Z)(i,2),s=o[0],d=o[1],m=(0,l.useState)("left"),f=(0,a.Z)(m,2),p=f[0],x=f[1],h=(0,u.I0)();(0,l.useEffect)((function(){h((0,w.cs)(n))}),[n,h]);var j=function(t){switch(t.target.closest("button").id){case"firstName":d("left"),r((function(t){return(0,c.Z)((0,c.Z)({},t),{},{name:"firstName"})}));break;case"lastName":d("right"),r((function(t){return(0,c.Z)((0,c.Z)({},t),{},{name:"lastName"})}));break;case"asc":x("left"),r((function(t){return(0,c.Z)((0,c.Z)({},t),{},{order:"asc"})}));break;case"desc":x("right"),r((function(t){return(0,c.Z)((0,c.Z)({},t),{},{order:"desc"})}))}};return(0,I.jsx)(v.Z,{className:A,children:(0,I.jsxs)(P.Z,{className:D,elevation:4,sx:{display:"flex",justifyContent:"center"},children:[(0,I.jsxs)(O.Z,{color:"primary",size:"small",value:s,exclusive:!0,onChange:j,"aria-label":"text alignment",children:[(0,I.jsx)(F.Z,{id:"firstName",value:"left","aria-label":"left aligned",children:(0,I.jsx)(q.Z,{title:"First Name",placement:"top",children:(0,I.jsx)(B.Z,{})})}),(0,I.jsx)(F.Z,{id:"lastName",value:"right","aria-label":"right aligned",children:(0,I.jsx)(q.Z,{title:"Last Name",placement:"top",children:(0,I.jsx)(K.Z,{})})})]}),(0,I.jsx)(E.Z,{variant:"inset",flexItem:!0,orientation:"vertical",sx:{mx:1,my:.5,color:"#007bff"}}),(0,I.jsxs)(O.Z,{color:"primary",size:"small",value:p,exclusive:!0,onChange:j,"aria-label":"text alignment",children:[(0,I.jsx)(F.Z,{id:"asc",value:"left","aria-label":"left aligned",children:(0,I.jsx)(q.Z,{title:"Ascending",placement:"top",children:(0,I.jsx)(H.Z,{})})}),(0,I.jsx)(F.Z,{id:"desc",value:"right","aria-label":"right aligned",children:(0,I.jsx)(q.Z,{title:"Descending",placement:"top",children:(0,I.jsx)(z.Z,{})})})]})]})})}var R={contactsListSection:"ContactList_contactsListSection__cWqG0",contactListItem:"ContactList_contactListItem__3th7-",editableContact:"ContactList_editableContact__AOyjp",contactName:"ContactList_contactName__wLcl6",contactNumber:"ContactList_contactNumber__aD17w",contactAction:"ContactList_contactAction__NNKVZ"},G=n(6059),X=n.n(G),J=n(8703),Q=n.n(J),U=n(3433),V=n(4557),W=n(1286),Y=n(2207),$=n(645),tt=n(6711),et=n(383),nt={speedDial:"ContactsItemActions_speedDial__Rd-oJ"},at=n(2802),rt=[{icon:(0,I.jsx)($.Z,{}),tooltip:"Edit"},{icon:(0,I.jsx)(_.Z,{}),tooltip:"Save"},{icon:(0,I.jsx)(tt.Z,{}),tooltip:"Cancel"},{icon:(0,I.jsx)(et.Z,{}),tooltip:"Delete"}];function ct(t){var e=t.editableContactId,n=t.contactId,r=(t.editSaveError,t.handleSaveClick),c=t.handleEditClick,i=t.handleCancelClick,o=(0,l.useState)(!1),s=(0,a.Z)(o,2),m=s[0],f=s[1],p=(0,l.useState)(!1),x=(0,a.Z)(p,2),h=x[0],j=x[1],b=(0,u.I0)(),Z=(0,l.useRef)(null),C=function(t){try{if("mouseleave"===t.type&&h)return;if("mouseleave"===t.type&&!h)return void f(!1);if("mouseenter"===t.type)return void f(!0);if("click"===t.type){var e=t.target.closest("svg").dataset.testid;switch(console.log("target",e),e){case"EditIcon":case"EditNoteIcon":f(!0),j(!0);break;case"AddIcon":case"SaveIcon":case"CancelIcon":case"DeleteIcon":f(!1),j(!1);break;default:return}}}catch(n){Z.current=n}};return(0,I.jsx)(v.Z,{sx:{},children:(0,I.jsx)(V.Z,{sx:{position:"relative"},ariaLabel:"SpeedDial tooltip example",id:"speedDial",className:nt.speedDial,icon:(0,I.jsx)(at.Z,{openIcon:(0,I.jsx)(W.Z,{})}),direction:"left",onOpen:C,onClose:C,onClick:C,open:m,children:e===n?[(0,I.jsx)(Y.Z,{id:"save",className:nt.contactItemBtn,icon:rt[1].icon,tooltipTitle:rt[1].tooltip,onClick:function(){r(n)}},"save"),(0,I.jsx)(Y.Z,{id:"cancel",className:nt.contactItemBtn,icon:rt[2].icon,tooltipTitle:rt[2].tooltip,onClick:function(){i()}},"cancel")]:[(0,I.jsx)(Y.Z,{id:"edit",className:nt.contactItemBtn,icon:rt[0].icon,tooltipTitle:rt[0].tooltip,onClick:function(){c(n)}},"edit"),(0,I.jsx)(Y.Z,{id:"delete",className:nt.contactItemBtn,icon:rt[3].icon,tooltipTitle:rt[3].tooltip,onClick:function(){b((0,d.GK)(n))}},"delete")]})})}var it=n(8966),ot=function(){var t=(0,l.useState)(null),e=(0,a.Z)(t,2),n=e[0],r=e[1],i=(0,l.useState)(null),o=(0,a.Z)(i,2),s=o[0],m=o[1],f=(0,l.useState)(null),p=(0,a.Z)(f,2),x=p[0],h=p[1],j=(0,l.useState)(!1),v=(0,a.Z)(j,2),Z=v[0],C=v[1],g=(0,l.useRef)({}),N=(0,u.I0)(),_=b(),k=_.contacts,S=_.filter,w=_.sortOptions,L=function(t,e){var n=e.name,a=e.order,r=n,c=a;return(0,U.Z)(t).sort((function(t,e){var n,a;return"firstName"===r?(n=t.name.split(" ")[0],a=e.name.split(" ")[0]):"lastName"===r&&(n=t.name.split(" "),a=e.name.split(" "),n=n[n.length-1],a=a[a.length-1]),"asc"===c?n.localeCompare(a):a.localeCompare(n)}))}(k,w),T=function(t,e){var n=e.toLowerCase();return n?t.filter((function(t){return t.name.toLowerCase().includes(n)||t.number.includes(n)})):t}(L,S),A=function(t){h(t),g.current[t]=(0,c.Z)({},k.find((function(e){return e.id===t})))},D=function(){g.current={},h(null),r(null),m(null)},E=function(t){if(console.log(g.current[t].name),""===g.current[t].name||""===g.current[t].number||g.current[t].name.length>30||g.current[t].number.length>25)return y.Notify.failure("Please check the name and number fields are completed correctly and resubmit"),void C(!0);var e=k.filter((function(e){return e.id!==t})),n=function(t,e,n){var a=t.find((function(t){return t.id===e})),r=a.name,c=a.number,i=n.current[e];return{isNameEdited:r!==i.name,isNumberEdited:c!==i.number}}(k,t,g),a=n.isNameEdited,c=n.isNumberEdited,i=function(t,e,n){var a=e.current[n],r=a.name,c=a.number;return{isNameAvail:t.some((function(t){return t.name.toLowerCase()===r.toLowerCase()})),isNumAvail:t.some((function(t){return t.number===c}))}}(e,g,t),o=i.isNameAvail,s=i.isNumAvail;return o&&s?(y.Notify.failure("".concat(g.current[t].name," & ").concat(g.current[t.number]," is already in contacts. Please check and resubmit")),void C(!0)):s&&!o?(y.Notify.failure("".concat(g.current[t].number," is already in contacts. Please check and resubmit")),void C(!0)):!s&&o?(y.Notify.failure("".concat(g.current[t].name," is already in contacts. Please check and resubmit")),void C(!0)):(a&&r(t),c&&m(t),N((0,d.Tk)({editedContact:g.current[t]})).then((function(){m(null),r(null)})),h(null),g.current={},C(!1),void console.log("saved"))},F=function(t,e){var n=document.activeElement.innerText,a=Q().sanitize(n).trim(),r=t.currentTarget.dataset.value;g.current[e][r]=a},O=function(t){t.preventDefault();var e=t.clipboardData.getData("text/plain"),n=Q().sanitize(e);document.execCommand("insertText",!1,n)},B=function(t){13===t.which&&t.preventDefault()};return(0,I.jsx)("section",{className:R.contactsListSection,children:(0,I.jsx)(P.Z,{elevation:6,sx:{padding:"0 15px 15px 15px"},children:(0,I.jsx)("ul",{className:R.contactList,children:T.length>0?T.map((function(t){return(0,I.jsxs)("li",{className:R.contactListItem,children:[(0,I.jsx)("span",{className:R.contactName,children:x===t.id?(0,I.jsx)(q.Z,{title:"Must be between 1 and 30 characters long",placement:"top",children:(0,I.jsx)("div",{children:(0,I.jsx)(X(),{className:R.editableContact,html:t.name,disabled:!1,"data-value":"name",onChange:function(e){return F(e,t.id)},onPaste:O,onKeyDown:B})})}):n===t.id?(0,I.jsx)(it.ko,{height:"60",width:"80",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"#007bff",barColor:"#007bff"}):(0,I.jsx)("span",{dangerouslySetInnerHTML:{__html:t.name}})}),(0,I.jsx)("span",{className:R.contactNumber,children:x===t.id?(0,I.jsx)(q.Z,{title:"Must be between 1 and 25 characters long",placement:"top",children:(0,I.jsx)("div",{children:(0,I.jsx)(X(),{className:R.editableContact,html:t.number,disabled:!1,"data-value":"number",onChange:function(e){return F(e,t.id)},onPaste:O,onKeyDown:B})})}):s===t.id?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(it.ko,{height:"60",width:"100%",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"#007bff",barColor:"#007bff"})}):(0,I.jsx)("span",{dangerouslySetInnerHTML:{__html:t.number}})}),(0,I.jsx)("span",{className:R.contactAction,children:(0,I.jsx)(ct,{contactId:t.id,editableContactId:x,editSaveError:Z,handleEditClick:A,handleCancelClick:D,handleSaveClick:E})})]},t.id)})):(0,I.jsx)("li",{className:R.noContactsItem,children:(0,I.jsx)("p",{colSpan:3,className:R.noContactsText,children:"No contacts meet search criteria."})})})})})},st={contactsTitle:"Contacts_contactsTitle__9axPf",noContactsText:"Contacts_noContactsText__vPXb2"},lt=n(8094),ut=n(2639),dt={},mt=n(675),ft=n(4897),pt=n(8650);function xt(){var t=(0,l.useState)((function(){return[]})),e=(0,a.Z)(t,2),n=e[0],r=e[1],i=(0,u.I0)(),o=b().phonebookOptions,s=(0,l.useRef)(null);return(0,I.jsx)(v.Z,{sx:{width:"100%",display:"flex",justifyContent:"center",marginTop:"20px"},children:(0,I.jsx)(P.Z,{className:dt.phonebookToggleContainer,elevation:4,sx:{display:"flex",justifyContent:"center",width:"fit-content"},children:(0,I.jsxs)(O.Z,{color:"primary",size:"small",value:n,onChange:function(t,e){r(e);var n=t.target.closest("button").id;try{switch(n){case"add":i((0,w.um)((0,c.Z)((0,c.Z)({},o),{},{addContact:!o.addContact})));break;case"sort":i((0,w.um)((0,c.Z)((0,c.Z)({},o),{},{sortContacts:!o.sortContacts})));break;case"filter":i((0,w.um)((0,c.Z)((0,c.Z)({},o),{},{filterContacts:!o.filterContacts})));break;default:return}}catch(a){s.current=a}},"aria-label":"phonebook actions",children:[(0,I.jsx)(F.Z,{id:"add",value:"add contact","aria-label":"add contact",children:(0,I.jsx)(q.Z,{title:"Add Contact",placement:"top",children:(0,I.jsx)(mt.Z,{})})}),(0,I.jsx)(F.Z,{id:"sort",value:"sort contacts","aria-label":"sort contacts",children:(0,I.jsx)(q.Z,{title:"Sort Contact",placement:"top",children:(0,I.jsx)(ft.Z,{})})}),(0,I.jsx)(F.Z,{id:"filter",value:"filter contacts","aria-label":"filter contacts",children:(0,I.jsx)(q.Z,{title:"Filter Contact",placement:"top",children:(0,I.jsx)(pt.Z,{})})})]})})})}var ht=function(){var t=(0,u.I0)(),e=(0,l.useState)(!0),n=(0,a.Z)(e,2),r=n[0],c=n[1],i=b(),o=i.contacts,s=i.isLoading,m=i.phonebookOptions,f=(0,lt.a)(),p=f.isLoggedIn,x=f.user,h=m.addContact,j=m.sortContacts,v=m.filterContacts;return(0,l.useEffect)((function(){p&&t((0,d.yF)()).then((function(){return c(!1)}))}),[t,p]),(0,I.jsxs)("section",{className:st.phonebook,children:[(0,I.jsx)("h1",{className:st.contactsTitle,children:"".concat(x.name," Contacts")}),r&&(0,I.jsx)(ut.Z,{}),o.length>=2?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(xt,{}),h&&(0,I.jsx)(S,{}),v&&(0,I.jsx)(T,{}),j&&(0,I.jsx)(M,{}),(0,I.jsx)(ot,{})]}):1===o.length?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(S,{}),(0,I.jsx)(ot,{})]}):o.length<1&&!s?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(S,{}),(0,I.jsx)("h5",{className:st.noContactsText,children:"No contacts found. Complete the above form to begin adding contacts."})]}):null]})},jt=ht}}]);
//# sourceMappingURL=794.d987af56.chunk.js.map