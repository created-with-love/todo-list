(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e){e.exports=JSON.parse("{}")},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n.n(o),l=n(7),a=n.n(l),i=n(4),s=n(21),d=(n(37),n(8)),u=n(9),b=n(11),j=n(10),h=(n(38),n(39),function(e){var t=e.children;return Object(r.jsx)("div",{className:"Container",children:t})}),f=n(22),p=n.n(f),O=n(3),m={addTodo:Object(O.b)("todos/Add",(function(e){return{payload:{id:p.a.generate(),text:e,completed:!1}}})),deleteTodo:Object(O.b)("todos/Delete"),changeFilter:Object(O.b)("todos/ChangeFilter"),toggleCompleted:Object(O.b)("todos/ToggleCompleted")},v=(n(48),n(49),n(23)),g=n.n(v),x=n(12),y=n(26),w=(n(50),function(e){var t=e.children,n=e.onClick,o=Object(y.a)(e,["children","onClick"]);return Object(r.jsx)("button",Object(x.a)(Object(x.a)({type:"button",className:"IconButton",onClick:n},o),{},{children:t}))});w.defaultProps={onClick:function(){return null},children:null};var C=w;function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var T=o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),N=o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function S(e,t){var n=e.title,r=e.titleId,c=k(e,["title","titleId"]);return o.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,T,N)}var E=o.forwardRef(S),M=(n.p,function(e){var t=e.id,n=e.text,o=e.onToggleCompleted,c=e.onDeleteTodo,l=e.completed;return Object(r.jsxs)("li",{draggable:"true",className:g()("TodoList__item",{"TodoList__item--completed":l}),children:[Object(r.jsxs)("label",{className:"TodoList__label",children:[Object(r.jsx)("input",{type:"checkbox",className:"TodoList__checkbox",checked:l,onChange:o}),Object(r.jsx)("p",{className:"TodoList__text",children:n})]}),Object(r.jsx)(C,{className:"IconButton IconButton__close","aria-label":"delete element icon",onClick:c,children:Object(r.jsx)(E,{width:"32",height:"32",fill:"#black"})})]},t)}),L=function(e){var t=e.todos,n=e.onDeleteTodo,o=e.onToggleCompleted;return Object(r.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,c=e.text,l=e.completed;return Object(r.jsx)(M,{id:t,text:c,completed:l,onToggleCompleted:function(){return o(t)},onDeleteTodo:function(){return n(t)}},t)}))})},I=Object(i.b)((function(e){var t=e.todos,n=t.filter;return{todos:function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.text.toLowerCase().includes(n)}))}(t.items,n)}}),(function(e){return{onDeleteTodo:function(t){return e(m.deleteTodo(t))},onToggleCompleted:function(t){return e(m.toggleCompleted(t))}}}))(L),B=(n(51),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={message:""},e.handleChange=function(t){e.setState({message:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.message),e.props.onClose(),e.setState({message:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("form",{className:"TodoEditor",onSubmit:this.handleSubmit,children:[Object(r.jsx)("textarea",{className:"TodoEditor__textarea",value:this.state.message,onChange:this.handleChange}),Object(r.jsx)("button",{type:"submit",className:"TodoEditor__button",children:"Save"})]})}}]),n}(o.Component)),D=Object(i.b)(null,(function(e){return{onSubmit:function(t){return e(m.addTodo(t))}}}))(B),P=(n(52),Object(i.b)((function(e){return{value:e.todos.filter}}),(function(e){return{onChange:function(t){return e(m.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(r.jsx)("div",{className:"filter-wrapper",children:Object(r.jsxs)("label",{className:"filter",children:[Object(r.jsx)("p",{className:"filter__text",children:"Filter by name:"}),Object(r.jsx)("input",{type:"text",value:t,onChange:n,className:"filter__input"})]})})})));n(53),n(54);function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var F=o.createElement("path",{d:"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"});function H(e,t){var n=e.title,r=e.titleId,c=A(e,["title","titleId"]);return o.createElement("svg",z({height:"512px",id:"Layer_1",style:{enableBackground:"new 0 0 512 512"},viewBox:"0 0 512 512",width:"512px",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,F)}var J=o.forwardRef(H),K=(n.p,document.querySelector("#modal-root")),R=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handelBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(l.createPortal)(Object(r.jsx)("div",{className:"Modal__backdrop",onClick:this.handelBackdropClick,children:Object(r.jsxs)("div",{className:"Modal__content",children:[Object(r.jsx)(C,{className:"Modal__close IconButton","aria-label":"Close Modal icon",onClick:this.props.onClose,children:Object(r.jsx)(J,{width:"32",height:"32",fill:"#black"})}),this.props.children]})}),K)}}]),n}(o.Component);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var U=o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),W=o.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"});function X(e,t){var n=e.title,r=e.titleId,c=q(e,["title","titleId"]);return o.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},c),n?o.createElement("title",{id:r},n):null,U,W)}var G=o.forwardRef(X),Q=(n.p,n(55),function(e){return e.reduce((function(e,t){return t.completed?e+1:e}),0)}),Y=Object(i.b)((function(e){return{total:e.todos.items.length,completed:Q(e.todos.items)}}),null)((function(e){var t=e.total,n=e.completed;return Object(r.jsxs)("div",{className:"Stats",children:[Object(r.jsxs)("p",{className:"Stats__item",children:[Object(r.jsx)("span",{className:"Stats__value",children:t}),Object(r.jsx)("span",{className:"Stats__label",children:"Total tasks"})]}),Object(r.jsxs)("p",{className:"Stats__item",children:[Object(r.jsx)("span",{className:"Stats__value",children:n}),Object(r.jsx)("span",{className:"Stats__label",children:"Completed"})]})]})}));n(56);function Z(){return Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("h1",{className:"text",children:"TODOS"})})}var $,ee=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={showModal:!1},e.toggleModal=function(){e.setState({showModal:!e.state.showModal})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.showModal;return Object(r.jsxs)(h,{children:[Object(r.jsx)(Z,{}),Object(r.jsxs)("div",{className:"barStyles",children:[Object(r.jsx)(Y,{}),Object(r.jsx)(C,{onClick:this.toggleModal,"aria-label":"Add Todo",children:Object(r.jsx)(G,{width:"40",height:"40",fill:"#black"})}),Object(r.jsx)(P,{})]}),Object(r.jsx)(I,{}),e&&Object(r.jsx)(R,{onClose:this.toggleModal,children:Object(r.jsx)(D,{onClose:this.toggleModal})})]})}}]),n}(o.Component),te=n(14),ne=n(2),re=n(24),oe=n.n(re),ce=n(5),le=n(25),ae=n.n(le),ie=n(6),se=m.addTodo,de=m.deleteTodo,ue=m.changeFilter,be=m.toggleCompleted,je=Object(O.c)([],($={},Object(ie.a)($,se,(function(e,t){var n=t.payload;return[].concat(Object(te.a)(e),[n])})),Object(ie.a)($,de,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(ie.a)($,be,(function(e,t){var n=t.payload;return e.map((function(e){return e.id===n?Object(x.a)(Object(x.a)({},e),{},{completed:!e.completed}):e}))})),$)),he=Object(O.c)("",Object(ie.a)({},ue,(function(e,t){return t.payload}))),fe=Object(ne.c)({items:je,filter:he}),pe={key:"todos",storage:ae.a,blacklist:["filter"]},Oe=[].concat(Object(te.a)(Object(O.d)({serializableCheck:{ignoredActions:[ce.a,ce.f,ce.b,ce.c,ce.d,ce.e]}})),[oe.a]),me=Object(ne.c)({todos:Object(ce.g)(pe,fe)}),ve=Object(O.a)({reducer:me,devTools:!1,middleware:Oe}),ge={store:ve,persistor:Object(ce.h)(ve)};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(i.a,{store:ge.store,children:Object(r.jsx)(s.a,{loading:null,persistor:ge.persistor,children:Object(r.jsx)(ee,{})})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.e0a7f545.chunk.js.map