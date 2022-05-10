"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[903],{903:function(n,e,t){t.r(e),t.d(e,{default:function(){return Nn}});var r,o,i,c=t(2070),a=t(5048),s=t(168),l=t(2499),d=l.Z.label(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin-bottom: 50px;\n"]))),u=l.Z.p(o||(o=(0,s.Z)(["\n  font-weight: 600;\n  color: var(--main-text-color);\n  margin-bottom: 5px;\n"]))),x=l.Z.input(i||(i=(0,s.Z)(["\n  width: 95%;\n  height: 40px;\n  padding: 0 10px 0 10px;\n\n  border: 1px solid var(--second-bg-color);\n  outline: none;\n\n  color: var(--main-text-color);\n  font-size: 14px;\n\n  :focus {\n    border-color: var(--accent-bg-color);\n  }\n\n  ::placeholder {\n    font-size: 12px;\n    color: var(--main-text-color);\n  }\n"]))),p=t(9652),h=t(3329);var g,m,f,v,b,Z,j,y,w,k,C,R,q,z=function(){var n=(0,a.I0)();return(0,h.jsxs)(d,{children:[(0,h.jsx)(u,{children:"Find contacts by name"}),(0,h.jsx)(x,{type:"text",onChange:function(e){var t=e.currentTarget.value;n((0,p.M6)(t))},name:"filter"})]})},M=t(2007),_=t.n(M),F=t(6355),L=l.Z.div(g||(g=(0,s.Z)(["\n  background-color: #fafafa;\n  border-radius: 10px;\n  border: 1px solid #f2f2f2;\n\n  padding: 10px;\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]))),E=l.Z.div(m||(m=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),T=(0,l.Z)(F.Xws)(f||(f=(0,s.Z)(["\n  background-color: var(--accent-bg-color);\n  color: var(--main-bg-color);\n\n  margin-right: 30px;\n  padding: 10px;\n"]))),Y=l.Z.p(v||(v=(0,s.Z)(["\n  font-size: 18px;\n  color: var(--main-text-color);\n"]))),A=l.Z.p(b||(b=(0,s.Z)(["\n  text-align: center;\n"]))),I=l.Z.ul(Z||(Z=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),N=l.Z.li(j||(j=(0,s.Z)(["\n  margin-right: 5px;\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]))),P=l.Z.button(y||(y=(0,s.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 40px;\n  height: 30px;\n  padding: 10px;\n\n  border: none;\n  background-color: transparent;\n  color: var(--accent-bg-color);\n\n  cursor: pointer;\n  transition: color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    color: var(--second-bg-color);\n  }\n"]))),S=t(2791),X=t(4164),D=t(8820),H=l.Z.div(w||(w=(0,s.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-color: var(--backdrop-bg-color);\n"]))),U=l.Z.div(k||(k=(0,s.Z)(["\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  width: 280px;\n  height: auto;\n  padding: 10px;\n\n  background-color: var(--main-bg-color);\n  color: var(--main-text-color);\n\n  @media screen and (min-width: 768px) {\n    width: 600px;\n    padding: 30px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding: 50px;\n  }\n"]))),B=l.Z.div(C||(C=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  border-bottom: 1px solid var(--accent-bg-color);\n\n  margin-bottom: 25px;\n  padding-bottom: 15px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 35px;\n    padding-bottom: 25px;\n  }\n"]))),G=l.Z.h2(R||(R=(0,s.Z)(["\n  font-size: 20px;\n  font-weight: 900;\n  text-transform: uppercase;\n\n  @media screen and (min-width: 768px) {\n    font-size: 30px;\n  }\n"]))),J=l.Z.button(q||(q=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 30px;\n  height: 30px;\n\n  background-color: var(--second-bg-color);\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background-color: var(--accent-bg-color);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 40px;\n    height: 40px;\n  }\n"]))),K=document.querySelector("#modal-root");function O(n){var e=n.children,t=n.onClose,r=n.title;(0,S.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){return window.removeEventListener("keydown",n)}}),[t]);return(0,X.createPortal)((0,h.jsx)(H,{onClick:function(n){n.target===n.currentTarget&&t()},children:(0,h.jsxs)(U,{children:[(0,h.jsxs)(B,{children:[(0,h.jsx)(G,{children:r}),(0,h.jsx)(J,{type:"button",onClick:t,children:(0,h.jsx)(D.oHP,{})})]}),e]})}),K)}O.prototype={children:_().element,onClose:_().func.isRequired};var Q=O,V=t(885);var W,$,nn,en,tn,rn,on=function(n){var e=(0,S.useState)(n),t=(0,V.Z)(e,2),r=t[0],o=t[1];return{togleModal:function(){return o((function(n){return!n}))},showModal:r}},cn=l.Z.p(W||(W=(0,s.Z)(["\n  font-size: 20px;\n  margin-bottom: 30px;\n"]))),an=l.Z.span($||($=(0,s.Z)(["\n  color: red;\n"]))),sn=l.Z.ul(nn||(nn=(0,s.Z)(["\n  display: flex;\n  justify-content: right;\n"]))),ln=l.Z.li(en||(en=(0,s.Z)(["\n  margin-right: 10px;\n\n  :last-child {\n    margin-right: 0;\n  }\n"]))),dn=l.Z.button(tn||(tn=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100px;\n  height: 30px;\n\n  background-color: var(--second-bg-color);\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background-color: var(--accent-bg-color);\n  }\n"]))),un=l.Z.button(rn||(rn=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100px;\n  height: 30px;\n\n  background-color: red;\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background-color: var(--accent-bg-color);\n  }\n"]))),xn=t(2223),pn=t(5264),hn=t(6871);function gn(n){var e=n.id,t=n.name,r=n.togleModal,o=(0,hn.s0)(),i=(0,xn.Nt)(),c=(0,V.Z)(i,2),a=c[0],s=c[1].isLoading;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(cn,{children:["Are you sure you want to delete a contact ",(0,h.jsx)(an,{children:t}),"?"]}),(0,h.jsxs)(sn,{children:[(0,h.jsx)(ln,{children:(0,h.jsx)(dn,{type:"button",onClick:r,children:"Cancel"})}),(0,h.jsx)(ln,{children:(0,h.jsx)(un,{type:"button",onClick:function(){a(e),o("/contacts"),r(),pn.Notify.success("The ".concat(t," has been removed from your contact list."))},children:s?"...":"Delete"})})]})]})}gn.prototype={id:_().string.isRequired,name:_().string.isRequired,togleModal:_().func.isRequired};var mn=gn;function fn(n){var e=n.id,t=n.name,r=n.number,o=on(!1),i=o.showModal,c=o.togleModal,a=(0,hn.s0)();return(0,h.jsxs)(h.Fragment,{children:[i&&(0,h.jsx)(Q,{onClose:c,title:t,children:(0,h.jsx)(mn,{id:e,name:t,togleModal:c})}),(0,h.jsxs)(L,{children:[(0,h.jsxs)(E,{children:[(0,h.jsx)(T,{}),(0,h.jsx)(Y,{children:t})]}),(0,h.jsx)(A,{children:r}),(0,h.jsxs)(I,{children:[(0,h.jsx)(N,{children:(0,h.jsx)(P,{type:"button",onClick:c,children:(0,h.jsx)(F.Xm5,{})})}),(0,h.jsx)(N,{children:(0,h.jsx)(P,{type:"button",onClick:function(){return a("edit/".concat(e))},children:(0,h.jsx)(F.dfI,{})})})]})]})]})}fn.prototype={id:_().string.isRequired,name:_().string.isRequired,number:_().string.isRequired};var vn,bn,Zn=fn,jn=l.Z.ul(vn||(vn=(0,s.Z)([""]))),yn=l.Z.li(bn||(bn=(0,s.Z)(["\n  margin-bottom: 20px;\n"]))),wn=t(8929),kn=t(6258);var Cn,Rn,qn=function(){var n=(0,xn.wY)(),e=n.data,t=n.isFetching,r=n.error,o=(0,a.v9)((function(n){return function(n){return n.contacts}(n)})).filter,i=function(){var n=o.toLowerCase();return e&&e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,h.jsxs)(h.Fragment,{children:[t&&(0,h.jsx)(wn.Z,{}),r&&(0,h.jsx)(kn.Z,{data:r.data,status:r.status}),(0,h.jsx)(jn,{children:e&&i.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,h.jsx)(yn,{children:(0,h.jsx)(Zn,{id:e,name:t,number:r})},e)}))})]})},zn=l.Z.div(Cn||(Cn=(0,s.Z)(["\n  text-align: center;\n"]))),Mn=l.Z.p(Rn||(Rn=(0,s.Z)(["\n  font-weight: 600;\n  font-size: 25px;\n"])));var _n,Fn,Ln=function(n){var e=n.message;return(0,h.jsx)(zn,{children:(0,h.jsx)(Mn,{children:e})})},En=t(3504),Tn=(0,l.Z)(En.rU)(_n||(_n=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 270px;\n  height: 40px;\n  margin-bottom: 50px;\n\n  background-color: var(--accent-bg-color);\n  color: var(--second-text-color);\n  font-family: inherit;\n  border: none;\n\n  cursor: pointer;\n  transition: background-color var(--main-hover-animation);\n\n  :hover,\n  :focus {\n    background-color: var(--second-bg-color);\n  }\n"]))),Yn=l.Z.span(Fn||(Fn=(0,s.Z)(["\n  margin-right: 10px;\n"]))),An=t(9126);var In=function(){return(0,h.jsxs)(Tn,{to:"/contacts/add",children:[(0,h.jsx)(Yn,{children:"Add new contact"}),(0,h.jsx)(An.RYR,{size:20})]})};var Nn=function(){var n=(0,xn.wY)().data;return(0,h.jsxs)(c.Z,{title:"Contacts",children:[(0,h.jsx)(In,{}),(0,h.jsx)(z,{}),n&&n.length>0?(0,h.jsx)(qn,{}):(0,h.jsx)(Ln,{message:"Contact list is empty."})]})}}}]);
//# sourceMappingURL=903.2ffbd66c.chunk.js.map