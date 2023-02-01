(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #ffedd5;\n    margin: 0;\n    color: hsl(15, 75%, 15%)\n}\n\nheader {\n    background-color: #fdba74;\n    width: 100%;\n    padding-bottom: 1rem;\n    border-bottom: 5px solid #f97316;\n    margin-bottom: 1rem;\n    text-align: center;\n    color: #7c2d12;\n}\n\nnav {\n    display: flex;\n    justify-content: space-around;\n    margin: 0 33%;\n}\n\nnav button {\n    background-color: #fed7aa;\n    color: #7c2d12;\n    padding: 0.5rem 1.5rem;\n    border: 1px solid #f97316;\n    border-radius: 0 25px;\n}\n\nnav button:hover {\n    background-color: #fff7ed;\n    box-shadow: 2px 2px #f97316;\n}\n\n#content {\n}\n\n.menu {\n    display: grid;\n    background-color: #fed7aa;\n    grid-template-columns: auto auto;\n    margin-bottom: 1rem;\n    border: 3px solid #f97316;\n    padding: 1rem;\n    border-radius: 10px;\n    box-shadow: 3px 5px #f97316;\n}\n\n.menu h2 {\n    grid-column: 1 / 3;\n    justify-self: center;\n    color: #7c2d12;\n    font-style: italic;\n}\n\n.price {\n    margin-left: 1rem;\n}\n\n.about {\n    display: grid;\n    grid-template-columns: auto auto;\n    padding: 0 1rem;\n}\n\n.about h2 {\n    grid-column: 1/3;\n}\n\n.about img {\n    height: 15rem;\n    border-radius: 55px;\n    border: 5px ridge #f97316;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),u=0;u<o.length;u++){var d=t(o[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"f22e9e8006c2f4b09033.jpg";function n(n){let t=document.createElement("div");t.classList.add("about");let r=document.createElement("h2");r.textContent="About Us";let a=document.createElement("p");a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n     Vivamus finibus nisl ut est gravida, vel auctor ipsum finibus. Phasellus tempor \n     suscipit est eget venenatis. Vestibulum quis nisl sit amet erat vehicula porta. \n     Aliquam erat volutpat. Aliquam vehicula pharetra odio eget placerat. Fusce non \n     cursus metus, eget molestie massa. Curabitur quis pellentesque justo, quis \n     elementum neque. Vestibulum posuere dolor non volutpat blandit. Praesent in \n     semper erat. Sed consectetur massa at massa pellentesque, a congue mi \n     molestie. Aenean condimentum, dolor in eleifend volutpat, nibh nisi sodales \n     augue, sit amet fermentum turpis nisi eu nisl. Aliquam volutpat felis libero, \n     dapibus pretium tellus pretium et. Maecenas elementum risus et ex ornare, vitae \n     euismod nisi hendrerit.",t.appendChild(r),t.appendChild(a),n.appendChild(t);let o=document.createElement("img");o.src=e,t.appendChild(o)}const r=[{name:"English Breakfast",price:6.99},{name:"Flapjacks",price:5.99},{name:"Pancakes",price:4.99},{name:"Toasted Chicken and Mayonnaise",price:5.99},{name:"Oats & Yoghurt",price:4.99},{name:"Steak and Kidney Pie",price:4.99}],a=[{name:"Coffee",price:3.99},{name:"Black Tea",price:2.99},{name:"Green Tea",price:2.99},{name:"Soda",price:3.99},{name:"Ice Tea",price:3.99}];function o(e,n,t){let r=document.createElement("div");r.classList.add("menu");let a=document.createElement("h2");a.innerText=t,r.appendChild(a);for(let e of n){let n=document.createElement("p");n.innerText=e.name,n.classList.add("name");let t=document.createElement("p");t.innerText=e.price,t.classList.add("price"),r.appendChild(n),r.appendChild(t)}e.appendChild(r)}var i=t(379),c=t.n(i),s=t(795),u=t.n(s),d=t(569),l=t.n(d),p=t(565),m=t.n(p),f=t(216),h=t.n(f),v=t(589),b=t.n(v),g=t(426),y={};y.styleTagTransform=b(),y.setAttributes=m(),y.insert=l().bind(null,"head"),y.domAPI=u(),y.insertStyleElement=h(),c()(g.Z,y),g.Z&&g.Z.locals&&g.Z.locals;const x=document.createElement("header"),C=document.createElement("h1");C.textContent="Sunrise Cafe",x.appendChild(C);const E=document.createElement("nav"),T=document.createElement("button");T.textContent="About",E.appendChild(T);const w=document.createElement("button");w.textContent="Contact",E.appendChild(w);const M=document.createElement("button");M.textContent="Menu",E.appendChild(M),x.appendChild(E),document.querySelector("body").appendChild(x);const k=document.createElement("div");k.id="content",document.querySelector("body").appendChild(k),n(k),T.addEventListener("click",(()=>{k.innerHTML="",n(k)})),w.addEventListener("click",(()=>{k.innerHTML="",function(e){let n=document.createElement("h2");n.textContent="Contact Us";let t=document.createElement("p");t.innerHTML='Please contact us using our office number at <a href="tel:01234567891">12345678910.</a> Our opening hours are 9 to 5, Mondays through Friday.',e.appendChild(n),e.appendChild(t)}(k)})),M.addEventListener("click",(()=>{var e;k.innerHTML="",o(e=k,r,"Breakfast Menu"),o(e,a,"Drinks Menu")}))})()})();