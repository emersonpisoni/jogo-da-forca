(this["webpackJsonpjogo-da-forca"]=this["webpackJsonpjogo-da-forca"]||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(19),i=n.n(r),s=(n(40),n(5)),o=n(4),u=n(2),j=n.n(u),d=n(15),l=n(6),b=n(3),O=n(12),p=(n(42),n(0));function h(e){return Object(p.jsx)("button",Object(O.a)({className:"button"},e))}n(44);function f(e){var t=e.children;return Object(p.jsx)("div",{className:"card",children:t})}n(45);function x(e){var t=e.children,n=e.isOpen,c=e.onClose,a=e.hiddenCloseButton;return Object(p.jsx)("div",{className:"modal",style:{display:n?"unset":"none"},children:Object(p.jsxs)("div",{className:"modal-content",children:[t,!a&&Object(p.jsx)("button",{className:"close",onClick:c,children:"X"})]})})}var v=n(23),m=n.n(v).a.create({baseURL:"http://hangman-game-web-backend.herokuapp.com/api"}),g=function(e){return m.get("/words/mode/".concat(e))},k=function(){return m.get("/words/mode/random")},y=n(16),C=function(e){return m.post("/rankings",e)},w=function(){return m.get("/rankings")},N=[{id:30,title:"Ca\xe7ador de zumbis.",description:"Acertou vinte palavras consecutivas."},{id:12,title:"Corte limpo!",description:"Acertou a palavra sem cometer nenhum erro."},{id:29,title:"Especialista em sobreviv\xeancia.",description:"Acertou dez palavras consecutivas."},{id:11,title:"Foi nada! S\xf3 uma mordidinha...",description:"Acertou a palavra depois de 5 erros."},{id:31,title:"Mais sorte na pr\xf3xima vida...",description:"Perdeu na primeira rodada."},{id:13,title:"Ningu\xe9m \xe9 perfeito.",description:"Acertou a palavra depois de apenas 1 erro."},{id:27,title:"Sobrevivente iniciante.",description:"Acertou quatro palavras consecutivas."},{id:25,title:"Sorte de iniciante.",description:"Acertou duas palavras consecutivas."},{id:26,title:"Talvez n\xe3o seja s\xf3 sorte!",description:"Acertou tr\xeas palavras consecutivas."},{id:28,title:"Veterano de apocalipse.",description:"Acertou cinco palavras consecutivas."}];function S(e,t){return!t.some((function(t){return t.id===e}))}n(64),n(65);n(71);n(72);function E(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1];return Object(p.jsxs)("div",{className:"como-jogar",children:[Object(p.jsx)(h,{onClick:function(){return a(!0)},children:"Como Jogar?"}),Object(p.jsx)(x,{isOpen:n,onClose:function(){return a(!1)},children:"Como Jogar?"})]})}var A=function(){return m.get("/categories")},J=function(e,t){return m.put("/categories/".concat(e),t)},q=function(e){return m.post("/categories",e)},P=function(e){return m.delete("/categories/".concat(e))},V=(n(73),n(14));n(74);var F=function(){return m.get("/words")},z=function(e,t){return m.put("/words/".concat(e),t)},B=function(e){return m.post("/words",e)},D=function(e){return m.delete("/words/".concat(e))};n(75);var G=n.p+"static/media/trofeu.9ce1eeac.svg";n(76);i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(s.a,{children:Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{path:"/jogo-da-forca",exact:!0,component:function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(b.a)(r,2),o=i[0],u=i[1],d=Object(c.useState)([]),O=Object(b.a)(d,2),f=O[0],v=O[1];function m(){return(m=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A();case 3:t=e.sent,v(t.data),u(t.data[0].id),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{isOpen:n,onClose:function(){return a(!1)},children:Object(p.jsxs)("div",{className:"game-mode",children:[Object(p.jsx)("select",{value:o,onChange:function(e){return u(e.target.value)},children:f.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(p.jsx)("div",{children:Object(p.jsx)(s.b,{to:"/jogo/".concat(o),children:Object(p.jsx)(h,{children:"Jogar com categoria"})})}),Object(p.jsx)(s.b,{to:"/jogo/random",children:Object(p.jsx)(h,{children:"Jogar com categorias aleat\xf3rias"})})]})}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(s.b,{to:"/admin",children:Object(p.jsx)("p",{children:"Jogo da forca"})}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)(h,{onClick:function(){return a(!0)},children:"Iniciar Jogo"}),Object(p.jsx)(s.b,{to:"/ranking",children:Object(p.jsx)(h,{children:"Ranking"})}),Object(p.jsx)(E,{})]})]})]})}}),Object(p.jsx)(o.b,{path:"/jogo/:mode",component:function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),i=Object(b.a)(r,2),u=i[0],O=i[1],v=Object(c.useState)([]),m=Object(b.a)(v,2),w=m[0],E=m[1],A=Object(c.useState)([]),J=Object(b.a)(A,2),q=J[0],P=J[1],V=Object(c.useState)([]),F=Object(b.a)(V,2),z=F[0],B=F[1],D=Object(c.useState)(0),G=Object(b.a)(D,2),L=G[0],I=G[1],M=Object(c.useState)(""),R=Object(b.a)(M,2),U=R[0],X=R[1],Q=Object(c.useState)([]),T=Object(b.a)(Q,2),H=T[0],K=T[1],W=Object(c.useState)(0),Y=Object(b.a)(W,2),Z=Y[0],$=Y[1],_=Object(c.useState)(!1),ee=Object(b.a)(_,2),te=ee[0],ne=ee[1],ce=Object(c.useState)(""),ae=Object(b.a)(ce,2),re=ae[0],ie=ae[1],se=Object(c.useState)(!1),oe=Object(b.a)(se,2),ue=oe[0],je=oe[1],de=Object(c.useState)([]),le=Object(b.a)(de,2),be=le[0],Oe=le[1],pe=Object(o.g)().mode;function he(){return(he=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="random"===pe?k:function(){return g(pe)},e.prev=1,e.next=4,t();case 4:n=e.sent,P(n.data),a(n.data[Z].category.name),ve(n.data[Z].name),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function fe(e){return xe.apply(this,arguments)}function xe(){return(xe=Object(l.a)(j.a.mark((function e(t){var n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],c=[],a=0;a<t.length;a++)z.includes(t[a])?n.push(t[a]):n.push(" ");z.forEach((function(e){return!n.includes(e)&&c.push(e)})),O(n),K(c),6===c.length&&ge();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ve(e){B([]);for(var t=[],n=0;n<e.length;n++)t.push(e[n]);E(t),fe(e)}function me(){return(me=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C({player:re,score:L,achievements:be.map((function(e){return{id:e.id}}))});case 3:je(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function ge(){var e=5*u.filter((function(e){return" "!==e})).length;I(L+e),ne(!0)}return Object(c.useEffect)((function(){!function(){he.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){fe(w)}),[z]),Object(c.useEffect)((function(){if(0!==Z){if(function(e,t,n,c){if(0===e.length&&S(12,t)){var a=N.find((function(e){return 12===e.id}));n([].concat(Object(d.a)(t),[a])),Object(y.b)(Object(p.jsxs)("div",{children:[a.title,Object(p.jsx)("br",{}),a.description]}))}if(2===c&&S(25,t)){var r=N.find((function(e){return 25===e.id}));n([].concat(Object(d.a)(t),[r])),Object(y.b)(Object(p.jsxs)("div",{children:[r.title,Object(p.jsx)("br",{}),r.description]}))}if(3===c&&S(26,t)){var i=N.find((function(e){return 26===e.id}));n([].concat(Object(d.a)(t),[i])),Object(y.b)(Object(p.jsxs)("div",{children:[i.title,Object(p.jsx)("br",{}),i.description]}))}}(H,be,Oe,Z),I(L+100),q.length<=Z)return void ne(!0);a(q[Z].category.name),ve(q[Z].name)}}),[Z]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y.a,{}),ue&&Object(p.jsx)(o.a,{to:"/ranking"}),Object(p.jsx)(x,{isOpen:te,onClose:function(){return ne(!1)},hiddenCloseButton:!0,children:Object(p.jsxs)("div",{className:"seu-nome",children:[Object(p.jsxs)("div",{children:["Digite seu nome:",Object(p.jsx)("input",{value:re,onChange:function(e){return ie(e.target.value)}})]}),Object(p.jsx)(h,{disabled:!re,onClick:function(){return me.apply(this,arguments)},children:"GO"})]})}),Object(p.jsxs)("div",{className:"jogo",children:["Jogo",Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"erros",children:[Object(p.jsx)("div",{children:"Qtd erros"}),Object(p.jsx)("div",{children:H.map((function(e,t){return Object(p.jsx)("div",{className:"erro",children:"X"},t)}))})]}),Object(p.jsxs)("div",{className:"palavra-escondida",children:[Object(p.jsxs)("div",{children:["Categoria: ",n]}),Object(p.jsx)("div",{children:u.map((function(e,t){return Object(p.jsx)(f,{children:e},e+"palavra-escondida"+t)}))})]}),Object(p.jsxs)("div",{className:"botoes",children:[Object(p.jsx)(h,{onClick:ge,children:"Desistir"}),Object(p.jsx)(h,{onClick:function(){return $(Z+1)},disabled:w.some((function(e,t){return u[t]!==e})),children:"Pr\xf3xima palavra"})]})]}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"letras-cantadas",children:[Object(p.jsx)("p",{children:"Letras j\xe1 faladas"}),Object(p.jsx)("div",{children:z.map((function(e,t){return Object(p.jsx)(f,{children:e},e+"letras-digitadas"+t)}))})]}),Object(p.jsxs)("div",{className:"digite-a-letra",children:["Digite a letra",Object(p.jsx)("input",{value:U,onChange:function(e){return X(e.target.value.toUpperCase())},maxLength:1}),Object(p.jsx)(h,{disabled:!U,onClick:function(){z.includes(U)||(B([].concat(Object(d.a)(z),[U])),X(""))},children:"Falar"})]}),Object(p.jsxs)("div",{className:"pontuacao",children:["Pontua\xe7\xe3o",Object(p.jsxs)(f,{children:[L," pts"]})]})]}),Object(p.jsx)(s.b,{to:"/jogo-da-forca",children:Object(p.jsx)(h,{children:"Voltar"})})]})]})},exact:!0}),Object(p.jsx)(o.b,{path:"/admin",component:function(){return Object(p.jsxs)("div",{className:"admin",children:[Object(p.jsx)(s.b,{to:"/jogo-da-forca",children:Object(p.jsx)(h,{children:"Voltar"})}),Object(p.jsx)(s.b,{to:"/categorias",children:Object(p.jsx)(h,{children:"Gerenciar Categorias"})}),Object(p.jsx)(s.b,{to:"/palavras",children:Object(p.jsx)(h,{children:"Gerenciar Palavras"})})]})}}),Object(p.jsx)(o.b,{path:"/categorias",component:function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({}),i=Object(b.a)(r,2),o=i[0],u=i[1];function d(){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,A();case 4:n=e.sent,a(n.data),n.data.forEach((function(e){t[e.name]=e.name})),u(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function x(){return(x=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P(t);case 3:return e.next=5,d();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(){return(v=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J(t.id,{name:o[t.name]});case 3:return e.next=5,d();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){u(Object(O.a)(Object(O.a)({},o),{},Object(V.a)({},e.target.name,e.target.value)))}function g(){return(g=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q({name:o.add});case 3:return u({add:""}),e.next=6,d();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){d()}),[]),Object(p.jsxs)("div",{className:"categorias",children:[Object(p.jsx)(s.b,{to:"/admin",children:Object(p.jsx)(h,{children:"Voltar"})}),Object(p.jsxs)("table",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Categoria"}),Object(p.jsx)("th",{children:"A\xe7\xf5es"})]}),n.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("input",{name:e.name,value:o[e.name],onChange:m})}),Object(p.jsxs)("td",{children:[Object(p.jsx)("button",{disabled:e.name===o[e.name],onClick:function(){return function(e){return v.apply(this,arguments)}(e)},children:"Editar"}),Object(p.jsx)("button",{onClick:function(){return function(e){return x.apply(this,arguments)}(e.id)},children:"Excluir"})]})]},e.name)})),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("input",{name:"add",value:o.add,onChange:m})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{disabled:n.map((function(e){return e.name})).includes(o.add),onClick:function(){return g.apply(this,arguments)},children:"Adicionar"})})]})]})]})}}),Object(p.jsx)(o.b,{path:"/palavras",component:function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),i=Object(b.a)(r,2),o=i[0],u=i[1],d=Object(c.useState)(0),f=Object(b.a)(d,2),x=f[0],v=f[1],m=Object(c.useState)({}),g=Object(b.a)(m,2),k=g[0],y=g[1];function C(){return(C=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,A();case 4:n=e.sent,u(n.data),v(n.data[0].id),n.data.forEach((function(e){t[e.name]=e.name})),y(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function w(){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.prev=1,e.next=4,F();case 4:n=e.sent,a(n.data),n.data.forEach((function(e){t[e.name]=e.name})),y(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function S(){return(S=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(t);case 3:return e.next=5,w();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function E(){return(E=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(t.id,{name:k[t.name]});case 3:return e.next=5,w();case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function J(e){y(Object(O.a)(Object(O.a)({},k),{},Object(V.a)({},e.target.name,e.target.value)))}function q(){return(q=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B({name:k.add,category:{id:x}});case 3:return y({add:""}),e.next=6,w();case 6:e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){w(),function(){C.apply(this,arguments)}()}),[]),Object(p.jsxs)("div",{className:"palavras",children:[Object(p.jsx)(s.b,{to:"/admin",children:Object(p.jsx)(h,{children:"Voltar"})}),Object(p.jsxs)("table",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Categoria"}),Object(p.jsx)("th",{children:"Palavra"}),Object(p.jsx)("th",{children:"A\xe7\xf5es"})]}),n.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("input",{disabled:!0,value:e.category.name})}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{name:e.name,value:k[e.name],onChange:J})}),Object(p.jsxs)("td",{children:[Object(p.jsx)("button",{disabled:e.name===k[e.name],onClick:function(){return function(e){return E.apply(this,arguments)}(e)},children:"Editar"}),Object(p.jsx)("button",{onClick:function(){return function(e){return S.apply(this,arguments)}(e.id)},children:"Excluir"})]})]})})),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)("select",{value:x,onChange:function(e){return v(e.target.value)},children:o.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name})}))})}),Object(p.jsx)("td",{children:Object(p.jsx)("input",{name:"add",value:k.add,onChange:J})}),Object(p.jsx)("td",{children:Object(p.jsx)("button",{disabled:n.map((function(e){return e.name})).includes(k.add),onClick:function(){return q.apply(this,arguments)},children:"Adicionar"})})]})]})]})}}),Object(p.jsx)(o.b,{path:"/ranking",component:function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(b.a)(r,2),o=i[0],u=i[1],d=Object(c.useState)([]),O=Object(b.a)(d,2),f=O[0],v=O[1];function m(){return(m=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w();case 3:t=e.sent,n=t.data.sort((function(e,t){return t.score-e.score})).slice(0,10),a(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{isOpen:o,onClose:function(){return u(!1)},children:Object(p.jsxs)("div",{className:"conquistas",children:[Object(p.jsx)("div",{className:"title",children:"Conquistas"}),f.map((function(e){var t=e.title,n=e.description;return Object(p.jsxs)("div",{className:"conquista",children:[Object(p.jsx)("div",{children:t}),Object(p.jsx)("div",{children:n})]})}))]})}),Object(p.jsxs)("div",{className:"ranking",children:[Object(p.jsxs)("div",{className:"lista",children:[Object(p.jsxs)("div",{className:"posicao",children:[Object(p.jsx)("div",{children:"Nome"}),Object(p.jsx)("div",{children:"Pontua\xe7\xe3o"}),Object(p.jsx)("div",{className:"conquistas",children:"Conquistas"})]}),Object(p.jsx)("div",{style:{width:"80%",height:"2px",backgroundColor:"white",margin:10}}),n.map((function(e,t){var n=e.player,c=e.score,a=e.achievements;return Object(p.jsxs)("div",{className:"posicao",children:[Object(p.jsx)("div",{children:n}),Object(p.jsx)("div",{children:c}),Object(p.jsx)("div",{className:"conquistas",children:Object(p.jsx)(h,{disabled:!a.length,style:{padding:4},onClick:function(){return function(e){v(e),u(!0)}(a)},children:Object(p.jsx)("img",{src:G,style:{width:30,opacity:"".concat(a.length?1:"0.3")},alt:"trofeu"})})})]},n+t)}))]}),Object(p.jsx)(s.b,{to:"/jogo-da-forca",children:Object(p.jsx)(h,{children:"Voltar"})})]})]})}})]})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.f9038a2a.chunk.js.map