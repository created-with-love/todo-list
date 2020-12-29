(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":"id-1","text":"Learn JavaScript Basics","completed":true},{"id":"id-2","text":"Learn React Basics","completed":false},{"id":"id-3","text":"Figure out how React Router works","completed":false},{"id":"id-4","text":"Learn React Redux","completed":false},{"id":"id-5","text":"Learn how to create SPA","completed":false}]')},,,,,,,,function(e,t,n){},,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),a=n.n(r),l=n(8),c=n.n(l),i=(n(20),n(6)),s=n(13),d=n(2),u=n(3),h=n(5),f=n(4),p=n(10),b=n.n(p),j=(n(29),n(30),function(e){var t=e.children;return Object(o.jsx)("div",{className:"Container",children:t})}),m=(n(31),n(32),n(11)),v=n.n(m),O=n(14),g=(n(33),function(e){var t=e.children,n=e.onClick,r=Object(O.a)(e,["children","onClick"]);return Object(o.jsx)("button",Object(i.a)(Object(i.a)({type:"button",className:"IconButton",onClick:n},r),{},{children:t}))});g.defaultProps={onClick:function(){return null},children:null};var x=g;function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),_=r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"});function k(e,t){var n=e.title,o=e.titleId,a=w(e,["title","titleId"]);return r.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,S,_)}var C=r.forwardRef(k),N=(n.p,function(e){var t=e.id,n=e.text,r=e.onToggleCompleted,a=e.onDeleteTodo,l=e.completed;return Object(o.jsxs)("li",{draggable:"true",className:v()("TodoList__item",{"TodoList__item--completed":l}),children:[Object(o.jsxs)("label",{className:"TodoList__label",children:[Object(o.jsx)("input",{type:"checkbox",className:"TodoList__checkbox",checked:l,onChange:r}),Object(o.jsx)("p",{className:"TodoList__text",children:n})]}),Object(o.jsx)(x,{className:"IconButton IconButton__close","aria-label":"delete element icon",onClick:a,children:Object(o.jsx)(C,{width:"32",height:"32",fill:"#black"})})]},t)}),T=function(e){var t=e.todos,n=e.onDeleteTodo,r=e.onToggleCompleted;return Object(o.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,a=e.text,l=e.completed;return Object(o.jsx)(N,{id:t,text:a,completed:l,onToggleCompleted:function(){return r(t)},onDeleteTodo:function(){return n(t)}},t)}))})},E=(n(34),function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={message:""},e.handleChange=function(t){e.setState({message:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.message),e.setState({message:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:"TodoEditor",onSubmit:this.handleSubmit,children:[Object(o.jsx)("textarea",{className:"TodoEditor__textarea",value:this.state.message,onChange:this.handleChange}),Object(o.jsx)("button",{type:"submit",className:"TodoEditor__button",children:"Save"})]})}}]),n}(r.Component)),L=(n(35),function(e){var t=e.value,n=e.onChange;return Object(o.jsx)("div",{className:"filter-wrapper",children:Object(o.jsxs)("label",{className:"filter",children:[Object(o.jsx)("p",{className:"filter__text",children:"Filter by name:"}),Object(o.jsx)("input",{type:"text",value:t,onChange:n,className:"filter__input"})]})})}),M=n(12);n(36);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D=r.createElement("path",{d:"M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"});function P(e,t){var n=e.title,o=e.titleId,a=B(e,["title","titleId"]);return r.createElement("svg",I({height:"512px",id:"Layer_1",style:{enableBackground:"new 0 0 512 512"},viewBox:"0 0 512 512",width:"512px",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,D)}var R=r.forwardRef(P),z=(n.p,document.querySelector("#modal-root")),J=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handelBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(l.createPortal)(Object(o.jsx)("div",{className:"Modal__backdrop",onClick:this.handelBackdropClick,children:Object(o.jsxs)("div",{className:"Modal__content",children:[Object(o.jsx)(x,{className:"Modal__close IconButton","aria-label":"Close Modal icon",onClick:this.props.onClose,children:Object(o.jsx)(R,{width:"32",height:"32",fill:"#black"})}),this.props.children]})}),z)}}]),n}(r.Component);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var V=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),F=r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"});function K(e,t){var n=e.title,o=e.titleId,a=H(e,["title","titleId"]);return r.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":o},a),n?r.createElement("title",{id:o},n):null,V,F)}var U=r.forwardRef(K),q=(n.p,n(37),function(e){var t=e.total,n=e.completed;return Object(o.jsxs)("div",{className:"Stats",children:[Object(o.jsxs)("p",{className:"Stats__item",children:[Object(o.jsx)("span",{className:"Stats__value",children:t}),Object(o.jsx)("span",{className:"Stats__label",children:"Total tasks"})]}),Object(o.jsxs)("p",{className:"Stats__item",children:[Object(o.jsx)("span",{className:"Stats__value",children:n}),Object(o.jsx)("span",{className:"Stats__label",children:"Completed"})]})]})});n(38);function W(){return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h1",{className:"text",children:"TODOS"})})}var X=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(d.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={todos:M,filter:"",showModal:!1},e.addTodo=function(t){var n={id:b.a.generate(),text:t,completed:!1};e.setState((function(e){var t=e.todos;return{todos:[n].concat(Object(s.a)(t))}})),e.setState({showModal:!1})},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.toggleCompleted=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed}):e}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleTodos=function(){var t=e.state,n=t.filter,o=t.todos,r=n.toLowerCase();return o.filter((function(e){return e.text.toLowerCase().includes(r)}))},e.calculateCompletedTodos=function(){return e.state.todos.reduce((function(e,t){return t.completed?e+1:e}),0)},e.toggleModal=function(){e.setState({showModal:!e.state.showModal})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&this.setState({todos:t})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.todos;n!==t&&localStorage.setItem("todos",JSON.stringify(n))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.filter,r=e.showModal,a=t.length,l=this.calculateCompletedTodos(),c=this.getVisibleTodos();return Object(o.jsxs)(j,{children:[Object(o.jsx)(W,{}),Object(o.jsxs)("div",{className:"barStyles",children:[Object(o.jsx)(q,{total:a,completed:l}),Object(o.jsx)(x,{onClick:this.toggleModal,"aria-label":"Add Todo",children:Object(o.jsx)(U,{width:"40",height:"40",fill:"#black"})}),Object(o.jsx)(L,{value:n,onChange:this.changeFilter})]}),Object(o.jsx)(T,{todos:c,onDeleteTodo:this.deleteTodo,onToggleCompleted:this.toggleCompleted}),r&&Object(o.jsx)(J,{onClose:this.toggleModal,children:Object(o.jsx)(E,{onSubmit:this.addTodo})})]})}}]),n}(r.Component);c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(X,{})}),document.getElementById("root"))}],[[39,1,2]]]);
//# sourceMappingURL=main.2555f16c.chunk.js.map