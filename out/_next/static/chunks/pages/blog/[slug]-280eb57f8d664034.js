(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{49937:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(53010)}])},81353:function(e,t,n){"use strict";n.d(t,{E:function(){return s}});var r=n(10990),l=n(25317);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}var s=function(e,t,n){return r.ZP.fromTo(e,c({opacity:0},t),c({opacity:1},n,{stagger:.2,ease:l.Aq.easeOut}))}},53010:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return L},default:function(){return Z}});var r=n(85893),l=n(67294),a=n(42665),c=n(31758),s=n(77205),o=n(84283);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}function f(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={code:function(e){e.node;var t=e.inline,n=e.className,l=e.children,a=f(e,["node","inline","className","children"]),c=/language-(\w+)/.exec(n||"");return!t&&c?(0,r.jsx)(s.Z,u({style:o.cL,language:c[1],PreTag:"div"},a,{children:String(l).replace(/\n$/,"")})):(0,r.jsx)("code",u({className:n},a,{children:l}))}},m=function(e){var t=e.content;return(0,r.jsx)(c.D,{components:d,className:"markdown-class",children:t})},x=n(90003),h=n(9008),p=n.n(h),v=n(20558),b=n(81353),g=n(25542),j=n(34051),w=n.n(j),y=n(9198),N=n.n(y),O=n(93463),S=n(82010);n(95828);function k(e,t,n,r,l,a,c){try{var s=e[a](c),o=s.value}catch(i){return void n(i)}s.done?t(o):Promise.resolve(o).then(r,l)}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){C(e,t,n[t])}))}return e}var P=function(e){var t=e.post,n=e.close,a=(e.refresh,(0,S.F)().theme),c=(0,l.useState)("BLOGDETAILS"),s=c[0],o=c[1],i=(0,l.useState)(t.content),u=i[0],f=i[1],d=(0,l.useState)({date:t.date,title:t.title,tagline:t.tagline,preview:t.preview,image:t.image}),m=d[0],x=d[1],h=function(){var e,t=(e=w().mark((function e(){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=5;break;case 3:e.next=6;break;case 5:alert("This thing only works in development mode.");case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,l){var a=e.apply(t,n);function c(e){k(a,r,l,c,s,"next",e)}function s(e){k(a,r,l,c,s,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,r.jsx)("div",{className:"fixed z-10 w-screen h-screen overflow-auto top-0 flex flex-col items-center ".concat("dark"===a?"bg-black":"bg-white"),children:(0,r.jsxs)("div",{className:"container my-20",children:[(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsxs)("div",{className:"z-10 sticky top-12",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-4xl",children:m.title}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(g.Z,{onClick:h,type:"primary",children:"Save"}),(0,r.jsx)(g.Z,{onClick:n,children:"Close"})]})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(g.Z,{onClick:function(){return o("BLOGDETAILS")},type:"BLOGDETAILS"===s&&"primary",children:"Blog Details"}),(0,r.jsx)(g.Z,{onClick:function(){return o("CONTENT")},type:"CONTENT"===s&&"primary",children:"Content"})]})]})}),"BLOGDETAILS"===s&&(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,r.jsx)("label",{className:"w-full text-sx opacity-50",children:"Date"}),(0,r.jsx)(N(),{selected:new Date(m.date),className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",onChange:function(e){x(E({},m,{date:e.toISOString()}))}})]}),(0,r.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,r.jsx)("label",{className:"w-full text-sx opacity-50",children:"Title"}),(0,r.jsx)("input",{value:m.title,onChange:function(e){return x(E({},m,{title:e.target.value}))},className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,r.jsx)("label",{className:"w-full text-sx opacity-50",children:"Tagline"}),(0,r.jsx)("input",{value:m.tagline,onChange:function(e){return x(E({},m,{tagline:e.target.value}))},className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,r.jsx)("label",{className:"w-full text-sx opacity-50",children:"preview (SEO)"}),(0,r.jsx)("textarea",{value:m.preview,onChange:function(e){return x(E({},m,{preview:e.target.value}))},className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5 flex flex-col items-center",children:[(0,r.jsx)("label",{className:"w-full text-sx opacity-50",children:"Image"}),(0,r.jsx)("input",{value:m.image,onChange:function(e){return x(E({},m,{image:e.target.value}))},className:"w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",type:"text"})]})]}),"CONTENT"===s&&(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("label",{className:"w-full text-sx opacity-50",children:"Content"}),(0,r.jsx)(O.Z,{className:"w-full h-auto mt-5 p-4 border hover:border-blue-400 rounded-xl shadow-xl",value:u,onChange:function(e){return f(e.target.value)}})]})})]})})},T=n(11163),_=n(29617),D=n(69954),L=!0,Z=function(e){var t=e.post,n=(0,l.useState)(!1),c=n[0],s=n[1],o=(0,l.useRef)(),i=(0,l.useRef)(),u=(0,T.useRouter)();return(0,v.LI)((function(){(0,b.E)([o.current,i.current],{y:30},{y:0})}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p(),{children:[(0,r.jsx)("title",{children:"Blog - "+t.title}),(0,r.jsx)("meta",{name:"description",content:t.preview})]}),D.showCursor&&(0,r.jsx)(_.Z,{}),(0,r.jsxs)("div",{className:"container mx-auto mt-10 ".concat(D.showCursor&&"cursor-none"),children:[(0,r.jsx)(a.Z,{isBlog:!0}),(0,r.jsxs)("div",{className:"mt-10 flex flex-col",children:[(0,r.jsx)("img",{className:"w-full h-96 rounded-lg shadow-lg object-cover",src:t.image,alt:t.title}),(0,r.jsx)("h1",{ref:o,className:"mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold",children:t.title}),(0,r.jsx)("h2",{ref:i,className:"mt-2 text-xl max-w-4xl text-darkgray opacity-50",children:t.tagline})]}),(0,r.jsx)(m,{content:t.content}),(0,r.jsx)(x.Z,{})]}),!1,c&&(0,r.jsx)(P,{post:t,close:function(){return s(!1)},refresh:function(){return u.reload(window.location.pathname)}})]})}},20558:function(e,t,n){"use strict";n.d(t,{KO:function(){return l},LI:function(){return r}});var r=n(67294).useLayoutEffect;function l(e){if(e){var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}}}},function(e){e.O(0,[802,144,996,37,511,774,888,179],(function(){return t=49937,e(e.s=t);var t}));var t=e.O();_N_E=t}]);