(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,'html {\n  height: 100%;\n}\nbody {\n  min-height: 100%;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(156, 153, 155);\n}\n\nsection {\n  flex: 1;\n  padding: 15px;\n}\n\nheader {\n  /* background-image: url(/images/cake.webp); */\n}\n#my-picture {\n  padding: 5px;\n  width: 108px;\n  height: 108px;\n}\nheader img {\n  border-radius: 50%;\n  border: 4px solid #fff;\n  background-color: #ffffff90;\n}\n#header-wrapper {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: linear-gradient(90deg, #8b8488, transparent);\n}\n#header-info {\n  padding: 10px;\n  text-shadow: 1px 1px 2px #e5dcdc;\n}\n\nh1 {\n  color: rgb(247, 238, 238);\n  margin: 5px 0;\n  /* font-weight: 300px;\n  font-size: 1.8em; */\n}\nh2,\nh3 {\n  color: black;\n  margin: 5px 0;\n  font-weight: 300px;\n  font-size: 1.2em;\n}\n\n#birthdayTable {\n  width: 100%;\n  border-collapse: collapse;\n}\n#birthdayTable th,\n#birthdayTable td {\n  border: 1px solid rgb(129, 121, 129);\n  padding: 5px;\n  line-height: 30px;\n  color: rgb(109, 98, 98);\n}\n#birthdayTable th {\n  color: rgb(240, 230, 230);\n  font-size: 1.4rem;\n  background-color: #490c32;\n}\n\n#birthdayTable tr:nth-child(even) {\n  background-color: #f2f2f2;\n  color: #094b0e;\n}\n\n#birthdayTable input {\n  width: 100%;\n}\n#birthdayTable tfoot input:not([type="image" i]) {\n  box-sizing: border-box;\n}\n\n.table-actions {\n  width: 90px;\n}\n\n.tbar {\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n}\n\n.tbar label {\n  padding: 0 5px;\n}\n\n.tfill {\n  flex: 1;\n}\n.action-btn {\n  cursor: pointer;\n  min-width: 35px;\n}\n\n.edit-btn {\n  display: none;\n  color: #094b0e;\n}\n\n.delete-btn {\n  display: none;\n  color: #ea1010;\n}\n\n#birthdayTable tr:hover .action-btn {\n  display: inline-block;\n}\n\nfooter {\n  background-color: rgb(148, 131, 141);\n  color: #fff;\n  text-align: center;\n  padding: 7px;\n}\n.mark {\n  background-color: #947688;\n}\n',""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=r(n,o),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),c=t(56),d=t.n(c),s=t(540),l=t.n(s),u=t(113),p=t.n(u),f=t(208),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(f.A,h),f.A&&f.A.locals&&f.A.locals;let b,m=[];function g(n){return document.querySelector(n)}function y(n){const e=n.url,t=e.startsWith("https://www")?e.substring(12):e;return`<tr>\n  <td>${n.name}</td>\n  <td>${n.contact}</td>\n  <td>${n.age}</td>\n  <td>\n  <a href = " ${e}"  target = "_blank">${t}</a>\n  </td>\n  <td>${n.dob}</td>\n  <td>\n  <button type="button" data-id="${n.id}" class="action-btn edit-btn" title="edit">🖍</button>\n  <button type="button" data-id="${n.id}" class="action-btn delete-btn" title="recycle">♻</button>\n\n  </td>\n</tr>`}let v=[];function x(n){if(function(n,e){return n===e?(console.info("same array"),!0):!(n.length!==e.length||!n.every(((n,e)=>n===n[e])))&&(console.info("same content in arrays"),!0)}(v,n))return;console.time("render");const e=n.map(y);g("#birthdayTable tbody").innerHTML=e.join(""),console.timeEnd("render")}g("#search").addEventListener("input",(n=>{const e=n.target.value,t=function(n,e){return e=e.toLowerCase(),console.warn("search %o",e),n.filter((n=>n.name.toLowerCase().includes(e)||n.contact.toLowerCase().includes(e)||n.age.toLowerCase().includes(e)||n.url.toLowerCase().includes(e)||n.dob.toLowerCase().includes(e)))}(m,e);x(t)})),g("#birthdayForm").addEventListener("submit",(function(n){n.preventDefault();const e={name:g("input[name=name]").value,contact:g("input[name=contact]").value,age:g("input[name=age]").value,url:g("input[name=url]").value,dob:g("input[name=dob]").value};b?(e.id=b,console.warn("should we edit?",b,e),function(n){return fetch("http://localhost:3000/birthdays-json/update",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))}(e).then((n=>{console.warn("status",n),n.success&&(e.id=n.id,m=m.map((n=>n)),m.push(e),x(m),g("#birthdayForm").reset())}))):function(n){return fetch("http://localhost:3000/birthdays-json/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((n=>n.json()))}(e).then((n=>{n.success&&window.location.reload()}))})),g("#birthdayForm").addEventListener("reset",(()=>{console.warn("reset",b),b=void 0})),g("#birthdayTable tbody").addEventListener("click",(n=>{if(n.target.matches("button.delete-btn")){const e=n.target.dataset.id;(function(n){return fetch("http://localhost:3000/birthdays-json/delete",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n})}).then((n=>n.json()))})(e).then((n=>{n.success&&(m=m.filter((n=>n.id!==e)),x(m))}))}else n.target.matches("button.edit-btn")&&function(n){b=n;const e=m.find((e=>e.id===n));console.warn("edit",n,e),function(n){g("input[name=name]").value=n.name,g("input[name=contact]").value=n.contact,g("input[name=age]").value=n.age,g("input[name=url]").value=n.url,g("input[name=dob]").value=n.dob}(e)}(n.target.dataset.id)})),fetch("http://localhost:3000/birthdays-json",{method:"GET",headers:{"Content-Type":"application/json"}}).then((n=>n.json().then((n=>{m=n,x(n),console.timeEnd("app-ready")}))))})()})();