!function(t){function n(n){for(var o,r,s=n[0],l=n[1],c=n[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(u&&u(n);d.length;)d.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],o=!0,s=1;s<e.length;s++){var l=e[s];0!==a[l]&&(o=!1)}o&&(i.splice(n--,1),t=r(r.s=e[0]))}return t}var o={},a={2:0},i=[];function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var n=[],e=a[t];if(0!==e)if(e)n.push(e[2]);else{var o=new Promise((function(n,o){e=a[t]=[n,o]}));n.push(e[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(t){return r.p+"async_"+({}[t]||t)+"."+{3:"86318d4b",4:"679f1ebc"}[t]+".js"}(t);var l=new Error;i=function(n){s.onerror=s.onload=null,clearTimeout(c);var e=a[t];if(0!==e){if(e){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,e[1](l)}a[t]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},r.m=t,r.c=o,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/cutting-mat-widgets/",r.oe=function(t){throw console.error(t),t};var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var u=l;i.push([139,0]),e()}({139:function(t,n,e){t.exports=e(157)},140:function(t,n,e){"use strict";e(64)},141:function(t,n,e){(n=e(14)(!1)).push([t.i,".van-doc-demo-block__title {\n  margin: 0;\n  padding: 32px 16px 16px;\n  color: rgba(69, 90, 100, 0.6);\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 16px;\n}\n.van-doc-demo-block__card {\n  margin: 12px 12px 0;\n  overflow: hidden;\n  border-radius: 8px;\n}\n.van-doc-demo-block__title + .van-doc-demo-block__card {\n  margin-top: 0;\n}\n.van-doc-demo-block:first-of-type .van-doc-demo-block__title {\n  padding-top: 20px;\n}\n",""]),t.exports=n},142:function(t,n,e){"use strict";e(65)},143:function(t,n,e){(n=e(14)(!1)).push([t.i,".van-doc-demo-section {\n  box-sizing: border-box;\n  min-height: calc(100vh - 56px);\n  padding-bottom: 20px;\n}\n",""]),t.exports=n},144:function(t,n,e){var o=e(13),a=e(145);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};o(a,i);t.exports=a.locals||{}},145:function(t,n,e){(n=e(14)(!1)).push([t.i,'\n/* 固定宽高比矩形 */\n\n*[class*="rect-"] {\n    position: relative;\n    display : block;\n    width   : 100%;\n    height  : 0;\n    overflow: hidden;\n}\n\n*[class*="rect-"] ._full {\n    position: absolute;\n    left    : 0;\n    top     : 0;\n    width   : 100%;\n    height  : 100%;\n}\n\n.rect-4854 {\n    padding-bottom: 48.54%;\n}\n\n.rect-50 {\n    padding-bottom: 50%;\n}\n\n.rect-5625 {\n    padding-bottom: 56.25%;\n}\n\n.rect-60 {\n    padding-bottom: 60%;\n}\n\n.rect-618 {\n    padding-bottom: 61.8%;\n}\n\n.rect-70 {\n    padding-bottom: 70%;\n}\n\n.rect-75 {\n    padding-bottom: 75%;\n}\n\n.rect-80 {\n    padding-bottom: 80%;\n}\n\n.rect-90 {\n    padding-bottom: 90%;\n}\n\n.rect-100 {\n    padding-bottom: 100%;\n}\n',""]),t.exports=n},146:function(t,n,e){"use strict";e(66)},147:function(t,n,e){(n=e(14)(!1)).push([t.i,".demo-home-nav__title {\n  margin: 24px 0 8px 16px;\n  color: rgba(69, 90, 100, 0.6);\n  font-size: 14px;\n}\n.demo-home-nav__block {\n  position: relative;\n  display: flex;\n  margin: 0 0 12px;\n  padding-left: 20px;\n  color: #323233;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 40px;\n  background: #f7f8fa;\n  border-radius: 99px;\n  transition: background 0.3s;\n}\n.demo-home-nav__block:hover {\n  background: #eef0f4;\n}\n.demo-home-nav__block:active {\n  background: #e4e8ee;\n}\n.demo-home-nav__icon {\n  position: absolute;\n  top: 50%;\n  right: 16px;\n  width: 16px;\n  height: 16px;\n  margin-top: -8px;\n}\n",""]),t.exports=n},148:function(t,n,e){"use strict";e(67)},149:function(t,n,e){(n=e(14)(!1)).push([t.i,".demo-home {\n  box-sizing: border-box;\n  width: 100%;\n  min-height: 100vh;\n  padding: 46px 20px 20px;\n  background: #fff;\n}\n.demo-home__title,\n.demo-home__desc {\n  padding-left: 16px;\n  font-weight: normal;\n  line-height: 1;\n  -ms-user-select: none;\n      user-select: none;\n}\n.demo-home__title {\n  margin: 0 0 16px;\n  font-size: 32px;\n}\n.demo-home__title img,\n.demo-home__title span {\n  display: inline-block;\n  vertical-align: middle;\n}\n.demo-home__title img {\n  width: 32px;\n}\n.demo-home__title span {\n  margin-left: 16px;\n}\n.demo-home__title--small {\n  font-size: 24px;\n}\n.demo-home__desc {\n  margin: 0 0 40px;\n  color: rgba(69, 90, 100, 0.6);\n  font-size: 14px;\n}\n",""]),t.exports=n},150:function(t,n,e){"use strict";e(68)},151:function(t,n,e){(n=e(14)(!1)).push([t.i,".demo-nav {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 56px;\n  background-color: #fff;\n}\n.demo-nav__title {\n  font-weight: 600;\n  font-size: 17px;\n  text-transform: capitalize;\n}\n.demo-nav__back {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\n",""]),t.exports=n},152:function(t,n,e){"use strict";e(69)},153:function(t,n,e){(n=e(14)(!1)).push([t.i,"/* cyrillic-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-weight: 400;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://b.yzcdn.cn/vant/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOX-hpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOVuhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXuhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOUehpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXehpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOXOhpKKSTj5PW.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-weight: 600;\n  font-family: 'Open Sans';\n  font-style: normal;\n  src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://b.yzcdn.cn/vant/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\nbody {\n  min-width: 1100px;\n  margin: 0;\n  overflow-x: auto;\n  color: #323233;\n  font-size: 16px;\n  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;\n  background-color: #f7f8fa;\n  -webkit-font-smoothing: antialiased;\n}\np {\n  margin: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n  font-size: inherit;\n}\nul,\nol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\na {\n  text-decoration: none;\n}\n.van-doc-row {\n  width: 100%;\n}\n@media (min-width: 1680px) {\n.van-doc-row {\n    width: 1680px;\n    margin: 0 auto;\n}\n}\nbody {\n  min-width: 100vw;\n}\n::-webkit-scrollbar {\n  width: 0;\n  background: transparent;\n}\n",""]),t.exports=n},154:function(t,n){!function(){if("undefined"!=typeof window){var t,n="ontouchstart"in window;document.createTouch||(document.createTouch=function(t,n,o,a,i,r,s){return new e(n,o,{pageX:a,pageY:i,screenX:r,screenY:s,clientX:a-window.pageXOffset,clientY:i-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var t=a(),n=0;n<arguments.length;n++)t[n]=arguments[n];return t.length=arguments.length,t}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var e=function(t,n,e,o,a){o=o||0,a=a||0,this.identifier=n,this.target=t,this.clientX=e.clientX+o,this.clientY=e.clientY+a,this.screenX=e.screenX+o,this.screenY=e.screenY+a,this.pageX=e.pageX+o,this.pageY=e.pageY+a},o=!1;l.multiTouchOffset=75,n||new l}function a(){var t=[];return t.item=function(t){return this[t]||null},t.identifiedTouch=function(t){return this[t+1]||null},t}function i(n){return function(e){var a,i,l;("mousedown"===e.type&&(o=!0),"mouseup"===e.type&&(o=!1),"mousemove"!==e.type||o)&&(("mousedown"===e.type||!t||t&&!t.dispatchEvent)&&(t=e.target),null==t.closest("[data-no-touch-simulate]")&&(a=n,i=e,(l=document.createEvent("Event")).initEvent(a,!0,!0),l.altKey=i.altKey,l.ctrlKey=i.ctrlKey,l.metaKey=i.metaKey,l.shiftKey=i.shiftKey,l.touches=s(i),l.targetTouches=s(i),l.changedTouches=r(i),t.dispatchEvent(l)),"mouseup"===e.type&&(t=null))}}function r(n){var o=a();return o.push(new e(t,1,n,0,0)),o}function s(t){return"mouseup"===t.type?a():r(t)}function l(){window.addEventListener("mousedown",i("touchstart"),!0),window.addEventListener("mousemove",i("touchmove"),!0),window.addEventListener("mouseup",i("touchend"),!0)}}()},157:function(t,n,e){"use strict";e.r(n);var o=e(16),a={name:"demo-block",props:{card:Boolean,title:String}},i=(e(140),e(6)),r=Object(i.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"van-doc-demo-block"},[t.title?e("h2",{staticClass:"van-doc-demo-block__title"},[t._v(t._s(t.title))]):t._e(),t.card?e("div",{staticClass:"van-doc-demo-block__card"},[t._t("default")],2):t._t("default")],2)}),[],!1,null,null,null).exports,s=e(25),l={name:"demo-section",computed:{demoName:function(){var t=(this.$route||{}).meta;return t&&t.name?"demo-"+Object(s.a)(t.name):""}}},c=(e(142),Object(i.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"van-doc-demo-section",class:this.demoName},[this._t("default")],2)}),[],!1,null,null,null).exports),u=e(31),p=e(40),d=(e(60),Object(i.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("demo-section",[n("demo-block",{attrs:{title:"基础用法"}},[n("base-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"}},[this._v("按钮")])],1),n("demo-block",{attrs:{title:"自定义颜色"}},[n("base-button",{staticStyle:{"margin-left":"15px"},attrs:{color:"#03a9f4"}},[this._v("按钮")])],1)],1)}),[],!1,null,null,null).exports),f=Object(i.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("demo-section",[n("demo-block",{attrs:{title:"基础用法"}},[n("base-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"}},[this._v("按钮")])],1),n("demo-block",{attrs:{title:"自定义颜色"}},[n("base-button",{staticStyle:{"margin-left":"15px"},attrs:{color:"#03a9f4"}},[this._v("按钮")])],1)],1)}),[],!1,null,null,null).exports,m=Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("demo-section",[e("demo-block",{attrs:{title:"基础用法"}},[e("scroll-list",{staticStyle:{height:"300px"},attrs:{list:[1,2,3,4,5]},scopedSlots:t._u([{key:"default",fn:function(n){return[t._v("\n        data: "+t._s(n.row)+" isCur: "+t._s(n.isCur)+"\n      ")]}}])})],1)],1)}),[],!1,null,null,null).exports,h=Object(i.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("demo-section",[n("demo-block",{attrs:{title:"基础用法"}},[n("div",{staticStyle:{height:"200px"},attrs:{id:"myDiv"}},[this._v("我是一个div")]),n("watermark",{attrs:{"target-id":"myDiv"}})],1)],1)}),[],!1,null,null,null).exports,g={data:function(){return{}},methods:{handleReady:function(t){t.load("https://static.refined-x.com/static/sample.mp3")},handleHeartbeat:function(t){console.log("time==",t)}}},b=Object(i.a)(g,(function(){var t=this.$createElement,n=this._self._c||t;return n("demo-section",[n("demo-block",{attrs:{title:"基础用法"}},[n("audio-player",{on:{ready:this.handleReady}})],1),n("demo-block",{attrs:{title:"禁止拖拽"}},[n("audio-player",{attrs:{"seek-able":!1},on:{ready:this.handleReady,heartbeat:this.handleHeartbeat}})],1)],1)}),[],!1,null,null,null).exports,v=e(35),y=e(26),_=e.n(y),w={data:function(){return{videoOptions:{controls:!0},CryptoConfig:{Enable:!1,Debug:!0,GetSecretKey:function(){return Object(v.a)(_.a.mark((function t(){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){setTimeout((function(){t(12345)}),1e3)})));case 1:case"end":return t.stop()}}),t)})))()}}}},methods:{handleReadyMark:function(t){t.src({src:"https://static.refined-x.com/static/1080p-watermark.mp4",type:"video/mp4"}),t.markerPlugin({markers:[{offset:10},{offset:20,data:{content:"可点击"},onClick:function(t){t.stopPropagation(),alert("marker click!")}}]})},handleReadySwitch:function(t){t.SwitcherPlugin(),t.updateSrc([{src:"https://static.refined-x.com/static/1080p-watermark.mp4",type:"video/mp4",label:"1080P",res:"1080"},{src:"https://static.refined-x.com/stream/1080p-720.m3u8",type:"application/x-mpegURL",label:"720P",res:"720"}])},handleReadyHLS:function(t){t.src({src:"http://ogn0m4it0.bkt.clouddn.com/58IzAY_GglrObBBbbD98wrHIbLk%3D/llhpmYRGVWfZL8dyCPXwCwKovI9R.m3u8",type:"application/x-mpegURL"})}}},x=Object(i.a)(w,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("demo-section",[e("demo-block",{attrs:{title:"基础用法"}},[e("video-player",{staticStyle:{width:"100%","max-width":"600px"},attrs:{options:t.videoOptions},on:{ready:function(t){return t.src({src:"https://static.refined-x.com/static/1080p-watermark.mp4?t=media111",type:"video/mp4"})}}})],1),e("demo-block",{attrs:{title:"禁止拖拽"}},[e("video-player",{staticStyle:{width:"100%","max-width":"600px"},attrs:{options:t.videoOptions,"seek-able":!1},on:{ready:function(t){return t.src({src:"https://static.refined-x.com/static/1080p-watermark.mp4",type:"video/mp4"})}}})],1),e("demo-block",{attrs:{title:"视频打点"}},[e("video-player",{staticStyle:{width:"100%","max-width":"600px"},attrs:{options:t.videoOptions},on:{ready:t.handleReadyMark}})],1),e("demo-block",{attrs:{title:"清晰度选择"}},[e("video-player",{staticStyle:{width:"100%","max-width":"600px"},attrs:{options:t.videoOptions},on:{ready:t.handleReadySwitch}})],1),e("demo-block",{attrs:{title:"HLS加密"}},[e("video-player",{staticStyle:{width:"100%","max-width":"600px"},attrs:{options:Object.assign({},t.videoOptions,{CryptoConfig:Object.assign({},t.CryptoConfig),RequestOption:{headers:{Authorization:"aa98187bab55403393f8cd01d0229b59"}}})},on:{ready:t.handleReadyHLS}})],1)],1)}),[],!1,null,null,null).exports,U=(e(144),{data:function(){return{data1:[{label:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],value:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]}],data2:[{label:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],value:[12,14.9,17,23.2,55.6,76.7,135.6,162.2,135.6,162.7,135.2,162.6]}],data3:[{label:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],value:[2,4.9,7,23.2,25.6,76.7,135.6,82.2,32.6,20,6.4,3.3]},{label:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],value:[13,26.9,37,24.2,35.6,79.7,82.6,109.2,62.6,30,16.4,13.3]}],colors:[["#286BF1","#5CA4F8"],["#FAD961","#FAD961"]],colors2:[["rgba(43,95,212,0.65)","rgba(58,156,235,0.1)","rgba(43,95,212,1)"],["rgba(190,42,42,0.65)","rgba(191,80,80,0.1)","rgba(242,23,23,1)"]]}}}),k=Object(i.a)(U,(function(){var t=this.$createElement,n=this._self._c||t;return n("demo-section",[n("demo-block",{attrs:{title:"基础用法"}},[n("div",{staticClass:"rect-618"},[n("chart",{staticClass:"_full",attrs:{data:this.data1}})],1)]),n("demo-block",{attrs:{title:"图表类型"}},[n("div",{staticClass:"rect-618"},[n("chart",{staticClass:"_full",attrs:{data:this.data2,chartType:"line"}})],1)])],1)}),[],!1,null,null,null).exports,O=Object(i.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("demo-section",[n("demo-block",{attrs:{title:"基础用法"}},[n("bar-progress",{attrs:{percentage:50}})],1),n("demo-block",{attrs:{title:"labelType=2"}},[n("bar-progress",{attrs:{percentage:50,"label-type":"2"}})],1),n("demo-block",{attrs:{title:"labelType=3"}},[n("bar-progress",{attrs:{percentage:50,"label-type":"3"}})],1),n("demo-block",{attrs:{title:"自定义标题"}},[n("bar-progress",{attrs:{percentage:50,"label-type":"2"}},[n("div",{staticStyle:{width:"4em",color:"#999","font-size":"12px"}},[this._v("完成度")])])],1),n("demo-block",{attrs:{title:"自定义文字"}},[n("bar-progress",{attrs:{percentage:50,"label-type":"2"}},[n("template",{slot:"value"},[n("div",{staticStyle:{width:"4em",color:"#999","text-align":"right"}},[this._v("(50)")])])],2)],1)],1)}),[],!1,null,null,null).exports,S=Object(i.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("demo-section",[n("demo-block",{attrs:{title:"基础用法"}},[n("base-button",{staticStyle:{"margin-left":"15px"},attrs:{type:"primary"}},[this._v("按钮")])],1),n("demo-block",{attrs:{title:"自定义颜色"}},[n("base-button",{staticStyle:{"margin-left":"15px"},attrs:{color:"#03a9f4"}},[this._v("按钮")])],1)],1)}),[],!1,null,null,null).exports;o.a.use(p.a),d.name="demo-base-button",f.name="demo-base-richtext",m.name="demo-base-scroll-list",h.name="demo-base-watermark",b.name="demo-business-audio",x.name="demo-business-video",k.name="demo-chart",O.name="demo-chart-bar-progress",S.name="demo-chart-circle-progress";var F={BaseButton:d,BaseRichtext:f,BaseScrollList:m,BaseWatermark:h,BusinessAudio:b,BusinessVideo:x,Chart:k,ChartBarProgress:O,ChartCircleProgress:S},B={name:"cutting-mat-widgets",build:{css:{preprocessor:"less"},site:{publicPath:"/cutting-mat-widgets/"}},site:{title:"cutting-mat-widgets",logo:"http://cutting-mat.refined-x.com/logo.png",hideSimulator:!1,nav:[{title:"基础组件",items:[{path:"base-watermark",title:"水印"},{path:"base-scroll-list",title:"滚动列表"}]},{title:"图表组件",items:[{path:"chart",title:"柱形/线形图表"},{path:"chart-bar-progress",title:"柱状进度条"}]},{title:"业务组件",items:[{path:"business-video",title:"视频播放"},{path:"business-audio",title:"音频播放"}]}]}},A={components:{ArrowRight:Object(i.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{viewBox:"0 0 1024 1024"}},[n("path",{attrs:{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"}}),n("path",{attrs:{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"}})])}),[],!1,null,null,null).exports},props:{lang:String,group:Object},data:function(){return{active:[]}},computed:{base:function(){return this.lang?"/"+this.lang:""}}},C=(e(146),{components:{DemoHomeNav:Object(i.a)(A,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo-home-nav"},[e("div",{staticClass:"demo-home-nav__title"},[t._v(t._s(t.group.title))]),e("div",{staticClass:"demo-home-nav__group"},t._l(t.group.items,(function(n){return e("router-link",{key:n.path,class:["demo-home-nav__block",n.className],attrs:{to:t.base+"/"+n.path}},[t._v("\n      "+t._s(n.title)+"\n      "),e("arrow-right",{staticClass:"demo-home-nav__icon"})],1)})),1)])}),[],!1,null,null,null).exports},computed:{lang:function(){var t=this.$route.meta.lang;return t},config:function(){var t=B.site.locales;return t?t[this.lang]:B.site},smallTitle:function(){return this.config.title.length>=8}}}),E=(e(148),Object(i.a)(C,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo-home"},[e("h1",{staticClass:"demo-home__title",class:{"demo-home__title--small":t.smallTitle}},[e("img",{attrs:{src:t.config.logo}}),e("span",[t._v(t._s(t.config.title))])]),t.config.description?e("h2",{staticClass:"demo-home__desc"},[t._v("\n    "+t._s(t.config.description)+"\n  ")]):t._e(),t._l(t.config.nav,(function(n,o){return[e("demo-home-nav",{key:o,attrs:{group:n,lang:t.lang}})]}))],2)}),[],!1,null,null,null).exports),j=e(24),M=e(30),R=B.site,z=R.locales,T=R.defaultLang;Object(j.b)(T),o.a.use(u.a);var Y,P,K,D=new u.a({mode:"hash",routes:(Y=[],P=Object.keys(F),K=z?Object.keys(z):[],K.length?(Y.push({path:"*",redirect:function(t){return"/"+function(t){var n=t.path.split("/")[1];return-1!==Object.keys(z).indexOf(n)?n:Object(j.a)()}(t)+"/"}}),K.forEach((function(t){Y.push({path:"/"+t,component:E,meta:{lang:t}})}))):(Y.push({path:"*",redirect:function(){return"/"}}),Y.push({path:"/",component:E})),P.forEach((function(t){var n=Object(s.a)(t);K.length?K.forEach((function(e){Y.push({name:e+"/"+n,path:"/"+e+"/"+n,component:F[t],meta:{name:t,lang:e}})})):Y.push({name:t,path:"/"+n,component:F[t],meta:{name:t}})})),Y),scrollBehavior:function(t,n,e){return e||{x:0,y:0}}});D.afterEach((function(){D.currentRoute.redirectedFrom||Object(M.c)()})),Object(M.a)(D),window.vueRouter=D;var L={data:function(){return{path:"M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"}},computed:{title:function(){var t=(this.$route.meta||{}).name;return t?t.replace(/-/g,""):""}},methods:{onBack:function(){history.length>1?history.back():this.$router.replace("/")}}},$=(e(150),{components:{DemoNav:Object(i.a)(L,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:this.title,expression:"title"}],staticClass:"demo-nav"},[n("div",{staticClass:"demo-nav__title"},[this._v(this._s(this.title))]),n("svg",{staticClass:"demo-nav__back",attrs:{viewBox:"0 0 1000 1000"},on:{click:this.onBack}},[n("path",{attrs:{fill:"#969799","fill-rule":"evenodd",d:this.path}})])])}),[],!1,null,null,null).exports}}),G=(e(152),Object(i.a)($,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("demo-nav"),n("keep-alive",[n("router-view")],1)],1)}),[],!1,null,null,null).exports);e(154);o.a.component(r.name,r),o.a.component(c.name,c),setTimeout((function(){new o.a({el:"#app",render:function(t){return t(G)},router:D})}),0)},64:function(t,n,e){var o=e(13),a=e(141);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};o(a,i);t.exports=a.locals||{}},65:function(t,n,e){var o=e(13),a=e(143);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};o(a,i);t.exports=a.locals||{}},66:function(t,n,e){var o=e(13),a=e(147);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};o(a,i);t.exports=a.locals||{}},67:function(t,n,e){var o=e(13),a=e(149);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};o(a,i);t.exports=a.locals||{}},68:function(t,n,e){var o=e(13),a=e(151);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};o(a,i);t.exports=a.locals||{}},69:function(t,n,e){var o=e(13),a=e(153);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};o(a,i);t.exports=a.locals||{}}});