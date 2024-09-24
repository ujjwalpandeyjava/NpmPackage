(()=>{var e={2:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var o=n(601),r=n.n(o),a=n(314),i=n.n(a)()(r());i.push([e.id,':root{--botBg: red}*{padding:0;margin:0;box-sizing:border-box}:root{--varX: #000202}.bubble *{margin:0;padding:0;box-sizing:border-box}.bubble{position:fixed;padding:0;bottom:20px;right:20px;display:flex;justify-content:center;align-items:center;overflow:visible;min-height:auto;height:60px;width:60px}.updateIcon{user-select:none;display:grid;place-items:center;overflow:hidden;width:60px;height:60px;background-color:var(--varX);border-radius:50%;cursor:pointer;transition:background-color .3s;box-shadow:0 4px 8px rgba(231,231,231,.2)}.updateIcon:hover{background-color:var(--varX);box-shadow:0 4px 8px rgba(221,221,221,.37)}.updateIcon>div{height:60px;width:60px;display:grid;place-items:center;transition:all .3s}.updateIcon.active>div{transform:translateY(-60px)}.updateIcon svg,.updateIcon img{font-size:2.5rem;width:60%;color:#fff;aspect-ratio:1/1}.botArea{position:absolute;background-color:#fff;height:70vh;max-height:calc(-104px + 100vh);min-width:300px;width:90vw;max-width:380px;bottom:-70vh;opacity:0;right:100%;overscroll-behavior:none;transition:all .6s;box-shadow:rgba(23,73,77,.15) 0px 20px 30px;z-index:999999;border-radius:16px;overflow:hidden;border:0px}.botSection{display:flex;flex-direction:column;flex-wrap:nowrap;align-items:stretch;justify-content:space-between;position:absolute;inset:0}.updateIcon.active+.botArea{bottom:80%;opacity:1}.btn{cursor:pointer;outline:none;border:none;padding:4px 8px;display:inline-block}.btn:hover{filter:drop-shadow(0 0 2px gray)}.header{background-color:var(--varX);color:#fff;display:flex;align-items:stretch;border-top-left-radius:10px;border-top-right-radius:10px;padding:12px;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.logoTitle{flex:1;display:flex;align-items:center;justify-content:flex-start;flex-direction:row;flex-wrap:wrap;gap:4px}.logoTitle img{width:35px}.minimizeClose{display:flex;flex-direction:row;align-items:center;justify-content:space-evenly;gap:4px}.content{height:100%;max-height:100%;overflow:hidden;flex:1;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:stretch;justify-content:flex-start}.content>.content_chat{flex:1;border-bottom:1px solid #bbb;overflow:auto;padding:8px 15px 0 15px}.content_chatInputs{display:flex;padding:8px 12px;flex-direction:row;gap:8px;flex-wrap:nowrap;align-items:center;justify-content:space-between}.content_chatInputs input{outline:none;background-color:rgba(0,0,0,0);border:1px solid gray}#inputFieldText{flex:1;width:100%;resize:none;margin:0px;background:#fff;font-size:14px;letter-spacing:-0.1px;color:rgba(0,0,0,.85);line-height:1.25;outline:none;box-sizing:border-box;padding:10px 20px 10px 13px;border:none;border-radius:8px;font-family:"Montserrat",sans-serif !important}.question{box-shadow:0 3px 4px rgba(184,255,255,.5882352941);margin-bottom:1rem;display:flex;justify-content:flex-end;padding:4px}.answer{box-shadow:0 3px 4px rgba(192,201,244,.4);display:flex;justify-content:flex-start;border-radius:4px;padding:4px;margin-bottom:1rem}.settingSection{bottom:unset;background-color:#bebdbd;position:absolute;box-shadow:0px 0 10px rgba(179,176,176,.7568627451);padding:0 10px 10px;max-height:75%;overflow:auto;display:block;user-select:all;inset:auto 0 0 0;opacity:1;transition:transform 600ms ease-in-out 100ms,bottom 600ms ease-in-out 100ms,display 10ms ease}.settingSection.settingHidden{user-select:none;bottom:-80%;box-shadow:unset}.settingHeader{background-color:#fff;position:sticky;top:0}',""]);const s=i},314:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},601:e=>{"use strict";e.exports=function(e){return e[1]}},72:e=>{"use strict";var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=o(e,r),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},659:e=>{"use strict";var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},246:e=>{e.exports={attributes:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"white"},content:'<path \t\td="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path>'}},937:e=>{e.exports={attributes:{className:"sc-1k07fow-0 fVXBLf",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21 13",focusable:"false",role:"presentation"},content:'<path fill-rule="evenodd" clip-rule="evenodd" fill="white" \t\td="M20.1005 2.7169L10.9931 11.8244C10.4724 12.3451 9.62815 12.3451 9.10745 11.8244L-8.00829e-06 2.7169L1.88561 0.831278L10.0503 8.99593L18.2149 0.831278L20.1005 2.7169Z"></path>'}},275:e=>{e.exports={attributes:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"white"},content:'<path \t\td="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path>'}},231:e=>{e.exports={attributes:{position:"right",class:"sc-1k07fow-1 cbnSms",viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},content:'<path fill="white" \t\td="M10,18 L6,22 L6,18 L10,18 Z M17,6 C19.7614237,6 22,8.23857625 22,11 C22,13.7614237 19.7614237,16 17,16 L17,16 L7,16 C4.23857625,16 2,13.7614237 2,11 C2,8.23857625 4.23857625,6 7,6 L7,6 Z" \t\ttransform="translate(12.000000, 14.000000) scale(-1, 1) translate(-12.000000, -14.000000) "> \t</path>'}},10:e=>{e.exports={attributes:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"white"},content:'<path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"></path>'}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var o={};(()=>{"use strict";n.r(o),n.d(o,{default:()=>M});const e=require("react");var t=n(937),r=n.n(t),a=n(10),i=n.n(a),s=n(231),l=n.n(s),c=n(246),d=n.n(c),u=n(275),p=n.n(u),m=n(72),f=n.n(m),h=n(825),g=n.n(h),b=n(659),x=n.n(b),v=n(56),y=n.n(v),w=n(540),k=n.n(w),I=n(113),E=n.n(I),L=n(2),R={};function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,a,i,s=[],l=!0,c=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(o=a.call(n)).done)&&(s.push(o.value),s.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw r}}return s}}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"==typeof e)return C(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}R.styleTagTransform=E(),R.setAttributes=y(),R.insert=x().bind(null,"head"),R.domAPI=g(),R.insertStyleElement=k(),f()(L.A,R),L.A&&L.A.locals&&L.A.locals;const M=function(){var t=S((0,e.useState)(),2),n=t[0],o=t[1],a=S((0,e.useState)([]),2),s=a[0],c=a[1],u=(0,e.useRef)();return(0,e.useEffect)((function(){u&&(n?u.current.focus():u.current.blur())}),[n]),React.createElement("div",{className:"bubble"},React.createElement("div",{className:"updateIcon ".concat(n?"active":""),onClick:function(){o((function(e){return!e})),console.log("addIntroductionMessage..."),s.length<1&&setTimeout((function(){c((function(e){return[].concat(function(e){if(Array.isArray(e))return C(e)}(t=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||A(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[{side:"bot",text:"How can I help you?"}]);var t}))}),750)}},React.createElement("div",null,React.createElement("img",{src:l(),alt:"message"})),React.createElement("div",null,React.createElement("img",{src:r(),alt:"message"}))),React.createElement("div",{className:"botArea"},React.createElement("section",{className:"botSection"},React.createElement("div",{className:"header"},React.createElement("div",{className:"btn menuOptions"},React.createElement("img",{src:p(),alt:"Close and minimize bot"})),React.createElement("div",{className:"logoTitle"},React.createElement("img",{src:"https://api.intellylabs.com/logo_image",alt:"alt..."}),React.createElement("div",{className:"botChatTitle",title:"Bot Title..."},"Bot Title...")),React.createElement("div",{className:"minimizeClose"},React.createElement("div",{className:"btn"},React.createElement("img",{src:i(),alt:"Minimize bot"})),React.createElement("div",{className:"btn"},React.createElement("img",{src:d(),alt:"Menu options"})))),React.createElement("div",{className:"content"},React.createElement("div",{className:"content_chat",id:"content_chat"}),React.createElement("div",{className:"content_chatInputs"},React.createElement("input",{type:"text",id:"inputFieldText",ref:u,placeholder:"Message"}))),React.createElement("section",{className:"settingSection settingHidden",id:"settingHidden"},React.createElement("div",{className:"settingHeader"},React.createElement("div",{className:"btn"},"X")),React.createElement("div",{className:"settingBody"},"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.")))))}})(),module.exports=o})();