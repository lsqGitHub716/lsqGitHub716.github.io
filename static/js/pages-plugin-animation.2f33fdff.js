(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-plugin-animation"],{"273b":function(a,t,e){"use strict";e.r(t);var i=e("5972"),s=e("3209");for(var n in s)"default"!==n&&function(a){e.d(t,a,(function(){return s[a]}))}(n);e("c89d");var r,o=e("f0c5"),l=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"9ea53d82",null,!1,i["a"],r);t["default"]=l.exports},3209:function(a,t,e){"use strict";e.r(t);var i=e("6df1"),s=e.n(i);for(var n in i)"default"!==n&&function(a){e.d(t,a,(function(){return i[a]}))}(n);t["default"]=s.a},5972:function(a,t,e){"use strict";var i,s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",[e("cu-custom",{attrs:{bgImage:"https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[a._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[a._v("微动画")])],2),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),a._v("默认效果")],1)],1),e("v-uni-view",{staticClass:"padding-sm"},[e("v-uni-view",{staticClass:"flex flex-wrap justify-around"},a._l(a.list,(function(t,i){return e("v-uni-button",{key:i,staticClass:"cu-btn margin-sm basis-sm shadow",class:["bg-"+t.color,a.animation==t.name?"animation-"+t.name:""],attrs:{"data-class":t.name},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.Toggle.apply(void 0,arguments)}}},[a._v(a._s(t.name))])})),1)],1),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),a._v("反向动画")],1)],1),e("v-uni-view",{staticClass:"padding-sm"},[e("v-uni-view",{staticClass:"flex flex-wrap justify-around"},a._l(a.list,(function(t,i){return e("v-uni-button",{key:i,staticClass:"cu-btn animation-reverse margin-sm basis-sm shadow",class:["bg-"+t.color,a.animation==t.name+"s"?"animation-"+t.name:""],attrs:{"data-class":t.name+"s"},on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.Toggle.apply(void 0,arguments)}}},[a._v(a._s(t.name))])})),1)],1),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),a._v("延迟执行")],1),e("v-uni-view",{staticClass:"action"},[e("v-uni-button",{staticClass:"cu-btn bg-cyan shadow",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.ToggleDelay.apply(void 0,arguments)}}},[a._v("开始执行")])],1)],1),e("v-uni-view",{staticClass:"padding-sm"},[e("v-uni-view",{staticClass:"flex flex-wrap justify-around"},a._l(a.list,(function(t,i){return e("v-uni-button",{key:i,staticClass:"margin-sm basis-sm shadow cu-btn",class:["bg-"+t.color,a.toggleDelay?"animation-slide-bottom":""],style:[{animationDelay:.1*(i+1)+"s"}]},[a._v("0."+a._s(i+1)+"s")])})),1)],1),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-title text-orange"}),a._v("Gif动画")],1)],1),e("v-uni-view",{staticClass:"margin radius bg-gradual-green shadow-blur"},[e("v-uni-image",{staticClass:"gif-black response",staticStyle:{height:"100upx"},attrs:{src:"https://image.weilanwl.com/gif/wave.gif",mode:"scaleToFill"}})],1),e("v-uni-view",{staticClass:"margin flex"},[e("v-uni-view",{staticClass:"bg-black flex-sub margin-right radius shadow-lg"},[e("v-uni-image",{staticClass:"gif-black response",staticStyle:{height:"240upx"},attrs:{src:"https://image.weilanwl.com/gif/loading-black.gif",mode:"aspectFit"}})],1),e("v-uni-view",{staticClass:"bg-white flex-sub radius shadow-lg"},[e("v-uni-image",{staticClass:"gif-white response",staticStyle:{height:"240upx"},attrs:{src:"https://image.weilanwl.com/gif/loading-white.gif",mode:"aspectFit"}})],1)],1),e("v-uni-view",{staticClass:"margin flex"},[e("v-uni-view",{staticClass:"bg-gradual-blue flex-sub margin-right radius shadow-lg"},[e("v-uni-image",{staticClass:"gif-black response",staticStyle:{height:"240upx"},attrs:{src:"https://image.weilanwl.com/gif/rhomb-black.gif",mode:"aspectFit"}})],1),e("v-uni-view",{staticClass:"bg-white flex-sub radius shadow-lg"},[e("v-uni-image",{staticClass:"gif-white response",staticStyle:{height:"240upx"},attrs:{src:"https://image.weilanwl.com/gif/rhomb-white.gif",mode:"aspectFit"}})],1)],1),e("v-uni-view",{staticClass:"margin flex"},[e("v-uni-view",{staticClass:"bg-white flex-sub margin-right radius shadow-lg"},[e("v-uni-image",{staticClass:"gif-white response",staticStyle:{height:"240upx"},attrs:{src:"https://image.weilanwl.com/gif/loading-1.gif",mode:"aspectFit"}})],1),e("v-uni-view",{staticClass:"bg-black flex-sub radius shadow-lg"},[e("v-uni-image",{staticClass:"gif-black response",staticStyle:{height:"240upx"},attrs:{src:"https://image.weilanwl.com/gif/loading-2.gif",mode:"aspectFit"}})],1)],1)],1)},n=[];e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return i}))},"6a13":function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,'/* \r\n  Animation 微动画  \r\n  基于ColorUI组建库的动画模块 by 文晓港 2019年3月26日19:52:28\r\n */\r\n\r\n/* css 滤镜 控制黑白底色gif的 */.gif-black[data-v-9ea53d82]{mix-blend-mode:screen}.gif-white[data-v-9ea53d82]{mix-blend-mode:multiply}\r\n\r\n/* Animation css */[class*=animation-][data-v-9ea53d82]{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animation-fade[data-v-9ea53d82]{-webkit-animation-name:fade-data-v-9ea53d82;animation-name:fade-data-v-9ea53d82;-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.animation-scale-up[data-v-9ea53d82]{-webkit-animation-name:scale-up-data-v-9ea53d82;animation-name:scale-up-data-v-9ea53d82}.animation-scale-down[data-v-9ea53d82]{-webkit-animation-name:scale-down-data-v-9ea53d82;animation-name:scale-down-data-v-9ea53d82}.animation-slide-top[data-v-9ea53d82]{-webkit-animation-name:slide-top-data-v-9ea53d82;animation-name:slide-top-data-v-9ea53d82}.animation-slide-bottom[data-v-9ea53d82]{-webkit-animation-name:slide-bottom-data-v-9ea53d82;animation-name:slide-bottom-data-v-9ea53d82}.animation-slide-left[data-v-9ea53d82]{-webkit-animation-name:slide-left-data-v-9ea53d82;animation-name:slide-left-data-v-9ea53d82}.animation-slide-right[data-v-9ea53d82]{-webkit-animation-name:slide-right-data-v-9ea53d82;animation-name:slide-right-data-v-9ea53d82}.animation-shake[data-v-9ea53d82]{-webkit-animation-name:shake-data-v-9ea53d82;animation-name:shake-data-v-9ea53d82}.animation-reverse[data-v-9ea53d82]{animation-direction:reverse}@-webkit-keyframes fade-data-v-9ea53d82{0%{opacity:0}100%{opacity:1}}@keyframes fade-data-v-9ea53d82{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes scale-up-data-v-9ea53d82{0%{opacity:0;-webkit-transform:scale(.2);transform:scale(.2)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-up-data-v-9ea53d82{0%{opacity:0;-webkit-transform:scale(.2);transform:scale(.2)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes scale-down-data-v-9ea53d82{0%{opacity:0;-webkit-transform:scale(1.8);transform:scale(1.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes scale-down-data-v-9ea53d82{0%{opacity:0;-webkit-transform:scale(1.8);transform:scale(1.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes slide-top-data-v-9ea53d82{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slide-top-data-v-9ea53d82{0%{opacity:0;-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slide-bottom-data-v-9ea53d82{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slide-bottom-data-v-9ea53d82{0%{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes shake-data-v-9ea53d82{0%,\r\n    100%{-webkit-transform:translateX(0);transform:translateX(0)}10%{-webkit-transform:translateX(-9px);transform:translateX(-9px)}20%{-webkit-transform:translateX(8px);transform:translateX(8px)}30%{-webkit-transform:translateX(-7px);transform:translateX(-7px)}40%{-webkit-transform:translateX(6px);transform:translateX(6px)}50%{-webkit-transform:translateX(-5px);transform:translateX(-5px)}60%{-webkit-transform:translateX(4px);transform:translateX(4px)}70%{-webkit-transform:translateX(-3px);transform:translateX(-3px)}80%{-webkit-transform:translateX(2px);transform:translateX(2px)}90%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}}@keyframes shake-data-v-9ea53d82{0%,\r\n    100%{-webkit-transform:translateX(0);transform:translateX(0)}10%{-webkit-transform:translateX(-9px);transform:translateX(-9px)}20%{-webkit-transform:translateX(8px);transform:translateX(8px)}30%{-webkit-transform:translateX(-7px);transform:translateX(-7px)}40%{-webkit-transform:translateX(6px);transform:translateX(6px)}50%{-webkit-transform:translateX(-5px);transform:translateX(-5px)}60%{-webkit-transform:translateX(4px);transform:translateX(4px)}70%{-webkit-transform:translateX(-3px);transform:translateX(-3px)}80%{-webkit-transform:translateX(2px);transform:translateX(2px)}90%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}}@-webkit-keyframes slide-left-data-v-9ea53d82{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slide-left-data-v-9ea53d82{0%{opacity:0;-webkit-transform:translateX(-100%);transform:translateX(-100%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes slide-right-data-v-9ea53d82{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes slide-right-data-v-9ea53d82{0%{opacity:0;-webkit-transform:translateX(100%);transform:translateX(100%)}100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}uni-image[class*="gif-"][data-v-9ea53d82]{-webkit-border-radius:%?6?%;border-radius:%?6?%;display:block}',""]),a.exports=t},"6df1":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{animation:"",list:[{name:"fade",color:"red"},{name:"scale-up",color:"orange"},{name:"scale-down",color:"olive"},{name:"slide-top",color:"green"},{name:"slide-bottom",color:"cyan"},{name:"slide-left",color:"blue"},{name:"slide-right",color:"purple"},{name:"shake",color:"mauve"}],toggleDelay:!1}},methods:{Toggle:function(a){var t=this,e=a.currentTarget.dataset.class;this.animation=e,setTimeout((function(){t.animation=""}),1e3)},ToggleDelay:function(){var a=this;this.toggleDelay=!0,setTimeout((function(){a.toggleDelay=!1}),1e3)}}};t.default=i},a90e:function(a,t,e){var i=e("6a13");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var s=e("4f06").default;s("25c69c12",i,!0,{sourceMap:!1,shadowMode:!1})},c89d:function(a,t,e){"use strict";var i=e("a90e"),s=e.n(i);s.a}}]);