(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-common-exit"],{3312:function(t,n,e){"use strict";var a=e("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("65ce")),u={data:function(){return{modalName:null,item:{msg:"退出成功"}}},onLoad:function(t){i.default.logout().then((function(t){uni.clearStorageSync()}))},methods:{goback:function(){uni.navigateTo({url:"/pages/login/login"})}}};n.default=u},"61e6":function(t,n,e){"use strict";e.r(n);var a=e("ed0f"),i=e("b57c");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);var o,c=e("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"847444e0",null,!1,a["a"],o);n["default"]=s.exports},b57c:function(t,n,e){"use strict";e.r(n);var a=e("3312"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=i.a},ed0f:function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("v-uni-scroll-view",{staticClass:"page",class:null!=t.modalName?"show":"",attrs:{"scroll-y":null==t.modalName}},[e("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!1}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("退出页")])],2),e("v-uni-view",{staticClass:"solids-bottom padding-xs flex align-center"},[e("v-uni-view",{staticClass:"flex-sub text-center"},[e("v-uni-view",{staticClass:"solid-bottom text-xsl padding"},[e("v-uni-text",{staticClass:" cuIcon-roundcheckfill text-green"})],1),e("v-uni-view",{staticClass:"padding"},[t._v(t._s(t.item.msg))])],1)],1),e("v-uni-view",{staticClass:"padding flex flex-direction"},[e("v-uni-button",{staticClass:"cu-btn bg-green shadow-blur round lg",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goback()}}},[t._v("返回登录")])],1)],1)],1)},u=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}))}}]);