"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[623],{7341:function(e,r,n){var t=n(5671),a=n(3144),c=n(136),s=n(7277),i=n(2791),o=n(1758),l=n(184),u=function(e){(0,c.Z)(n,e);var r=(0,s.Z)(n);function n(){var e;(0,t.Z)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=r.call.apply(r,[this].concat(c))).state={error:!1},e}return(0,a.Z)(n,[{key:"componentDidCatch",value:function(e,r){console.log(e,r),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,l.jsx)(o.Z,{}):this.props.children}}]),n}(i.Component);r.Z=u},1758:function(e,r,n){n.d(r,{Z:function(){return c}});var t=n.p+"static/media/error.42292aa12b6bc303ce99.gif",a=n(184),c=function(){return(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:t,alt:"error"})}},8315:function(e,r,n){n.r(r),n.d(r,{default:function(){return w}});var t=n(9439),a=n(2791),c=n(4270),s=n.p+"static/media/mjolnir.61f31e1809f12183a524.png",i=n(6703),o=n(2523),l=n(184),u=function(e){var r=e.data,n=r.name,t=r.description,a=r.thumbnail,c=r.homepage,s=r.wiki,i=function(e){return"string"!==typeof e?e:""===e?"This character does't have a description":e.length>227?e.slice(0,212)+"...":e}(t),o="cover";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"!==a&&"http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"!==a||(o="contain"),(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:a,alt:"Random character",className:"randomchar__img",style:{objectFit:"".concat(o)}}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:n}),(0,l.jsx)("p",{className:"randomchar__descr",children:i}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:s,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(e){var r=(0,a.useState)({}),n=(0,t.Z)(r,2),c=n[0],h=n[1],d=(0,i.Z)(),m=d.process,f=d.setProcess,p=d.getCharacter,v=d.clearError;(0,a.useEffect)((function(){_();var e=setInterval(_,6e4);return function(){clearInterval(e)}}),[]);var x=function(e){h(e)},_=function(){v();var e=Math.floor(400*Math.random()+1011e3);p(e).then(x).then((function(){return f("confirmed")}))};return(0,l.jsxs)("div",{className:"randomchar",children:[(0,o.Z)(m,u,c),(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{onClick:_,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:s,alt:"mjolnir",className:"randomchar__decoration"})]})]})},d=n(3433),m=n(7934),f=n(6983),p=n(5660),v=function(e){var r=(0,a.useRef)([]),n=function(e){r.current.forEach((function(e){return e.classList.remove("char__item_selected")})),r.current[e].classList.add("char__item_selected"),r.current[e].focus()},c=(0,a.useState)([]),s=(0,t.Z)(c,2),o=s[0],u=s[1],h=(0,a.useState)(!1),v=(0,t.Z)(h,2),x=v[0],_=v[1],j=(0,a.useState)(0),g=(0,t.Z)(j,2),b=g[0],N=g[1],Z=(0,a.useState)(!1),k=(0,t.Z)(Z,2),y=k[0],w=k[1],C=(0,i.Z)(),E=C.process,S=C.setProcess,O=C.getAllCharacters;(0,a.useEffect)((function(){T(b,!0)}),[]);var T=function(e,r){_(!r),O(e).then(P).then((function(){return S("confirmed")}))},P=function(e){var r=!1;e.length<9&&(r=!0),u((function(r){return[].concat((0,d.Z)(r),(0,d.Z)(e))})),_((function(e){return!1})),N((function(e){return e+9})),w((function(e){return r}))};return(0,l.jsxs)("div",{className:"char__list",children:[(0,m.Z)(E,(function(){return function(){var t=o.map((function(t,a){var c="cover";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"!==t.thumbnail&&"http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"!==t.thumbnail||(c="unset"),(0,l.jsx)(f.Z,{timeout:700,classNames:"char__item",children:(0,l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return r.current[a]=e},onClick:function(){e.onCharSelected(t.id),n(a)},onKeyPress:function(r){" "!==r.key&&"Enter"!==r.key||(e.onCharSelected(t.id),n(a))},children:[(0,l.jsx)("img",{src:t.thumbnail,alt:t.name,style:{objectFit:"".concat(c)}}),(0,l.jsx)("div",{className:"char__name",children:t.name})]})},a)}));return(0,l.jsx)("ul",{className:"char__grid",children:(0,l.jsx)(p.Z,{component:null,children:t})})}()}),x),(0,l.jsx)("button",{disabled:x,style:{display:y?"none":"block"},onClick:function(){return T(b)},className:"button button__main button__long",children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})},x=n(1087),_=function(e){var r=e.data,n=r.id,t=r.name,a=r.description,c=r.thumbnail,s=r.homepage,i=r.wiki,o=r.comics,u="cover";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"!==c&&"http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"!==c||(u="contain"),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)(x.rU,{to:"marvelAPI/".concat(n),children:(0,l.jsx)("img",{src:c,alt:t,style:{objectFit:"".concat(u)}})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:t}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:s,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:i,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:a||"This character does not have a description"}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[o.length>0?null:"This character does not have a comic",o.map((function(e,r){return r>9?null:(0,l.jsx)(x.rU,{to:"/marvelAPI/comics/".concat(e.resourceURI.slice(43)),className:"char__comics-item",children:(0,l.jsx)("li",{children:e.name},r)})}))]})]})},j=function(e){var r=(0,a.useState)(null),n=(0,t.Z)(r,2),c=n[0],s=n[1],u=e.charId,h=(0,i.Z)(),d=h.process,m=h.setProcess,f=h.getCharacter,p=h.clearError;(0,a.useEffect)((function(){x()}),[u]);var v=function(e){s(e)},x=function(){p(),u&&f(u).then(v).then((function(){return m("confirmed")}))};return(0,l.jsx)("div",{className:"char__info",children:(0,o.Z)(d,_,c)})},g=n(7670),b=n(5705),N=n(1758),Z=function(){var e=(0,a.useState)(null),r=(0,t.Z)(e,2),n=r[0],c=r[1],s=(0,i.Z)(),o=s.process,u=s.setProcess,h=s.getCharacterByName,d=s.clearError,m=function(e){c(e)},f="error"===o?(0,l.jsx)(N.Z,{}):null,p=n?n.length>0?(0,l.jsxs)("div",{className:"char__search-wrapper",children:[(0,l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",n[0].name," page?"]}),(0,l.jsx)(x.rU,{to:"marvelAPI/".concat(n[0].id),className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"To page"})})]}):(0,l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,l.jsxs)("div",{className:"char__search-form",children:[(0,l.jsx)(b.J9,{initialValues:{charName:""},validationSchema:g.Ry({charName:g.Z_().required("This field is required")}),onSubmit:function(e){var r,n=e.charName;return r=n,d(),void h(r).then(m).then((function(){return u("confirmed")}))},children:(0,l.jsxs)(b.l0,{children:[(0,l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,l.jsxs)("div",{className:"char__search-wrapper",children:[(0,l.jsx)(b.gN,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,l.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===o,children:(0,l.jsx)("div",{className:"inner",children:"find"})})]}),(0,l.jsx)(b.Bc,{component:"div",className:"char__search-error",name:"charName"})]})}),p,f]})},k=n(7341),y=n.p+"static/media/vision.067d4ae1936d64a577ce.png",w=function(){var e=(0,a.useState)(null),r=(0,t.Z)(e,2),n=r[0],s=r[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(c.q,{children:[(0,l.jsx)("meta",{name:"descriptmeta",content:"Marvel information portal"}),(0,l.jsx)("title",{children:"Marvel information portal"})]}),(0,l.jsx)(k.Z,{children:(0,l.jsx)(h,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(k.Z,{children:(0,l.jsx)(v,{onCharSelected:function(e){s(e)}})}),(0,l.jsxs)("div",{className:"char__infoandform",children:[(0,l.jsx)(k.Z,{children:(0,l.jsx)(j,{charId:n})}),(0,l.jsx)(k.Z,{children:(0,l.jsx)(Z,{})})]})]}),(0,l.jsx)("img",{className:"bg-decoration",src:y,alt:"vision"})]})}},6703:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(4165),a=n(5861),c=n(9439),s=n(2791),i=function(){var e=function(){var e=(0,s.useState)("waiting"),r=(0,c.Z)(e,2),n=r[0],i=r[1],o=(0,s.useCallback)(function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n,a,c,s,o,l=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"aplication/json"},i("loading"),e.prev=4,e.next=7,fetch(r,{method:n,body:a,headers:c});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),i("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(r){return e.apply(this,arguments)}}(),[]);return{request:o,clearError:(0,s.useCallback)((function(){i("waiting")}),[]),process:n,setProcess:i}}(),r=e.request,n=e.clearError,i=e.process,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=7de4f012d99c5c5bd16a21956155921f",h=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,a,c=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:0,e.next=3,r("".concat(l,"characters?limit=9&offset=").concat(n,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(f));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(l,"characters/").concat(n,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",f(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(n){var a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r("".concat(l,"characters?name=").concat(n,"&").concat(u));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(f));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(e){return{id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},p=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,a,c=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:0,e.next=3,r("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(n,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(x));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(){var n,a,c=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:1003,e.next=3,r("".concat(l,"comics/").concat(n,"?").concat(u));case 3:return a=e.sent,e.abrupt("return",x(a.data.results[0]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(e){return{id:e.id,title:e.title,price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"NOT AVAILABLE",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,pageCount:e.pageCount?e.pageCount:"NOT FOUND",description:0===e.textObjects.length?"NOT FOUND":e.textObjects[0].text,language:0===e.textObjects.length?"NOT FOUND":e.textObjects[0].language}};return{process:i,setProcess:o,clearError:n,getCharacter:d,getAllCharacters:h,getAllComics:p,getComic:v,getCharacterByName:m}}},2523:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(184),a=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,t.jsxs)("div",{className:"skeleton",children:[(0,t.jsxs)("div",{className:"pulse skeleton__header",children:[(0,t.jsx)("div",{className:"pulse skeleton__circle"}),(0,t.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,t.jsx)("div",{className:"pulse skeleton__block"}),(0,t.jsx)("div",{className:"pulse skeleton__block"}),(0,t.jsx)("div",{className:"pulse skeleton__block"})]})]})},c=n(3394),s=n(1758),i=function(e,r,n){switch(e){case"waiting":return(0,t.jsx)(a,{});case"loading":return(0,t.jsx)(c.Z,{});case"confirmed":return(0,t.jsx)(r,{data:n});case"error":return(0,t.jsx)(s.Z,{});default:throw new Error("Unexpected process state")}}},7934:function(e,r,n){var t=n(3394),a=n(1758),c=n(184);r.Z=function(e,r,n){switch(e){case"waiting":return(0,c.jsx)(t.Z,{});case"loading":return n?(0,c.jsx)(r,{}):(0,c.jsx)(t.Z,{});case"confirmed":return(0,c.jsx)(r,{});case"error":return(0,c.jsx)(a.Z,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=623.019bc42f.chunk.js.map