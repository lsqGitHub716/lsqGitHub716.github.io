(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-acdetail"],{"252d":function(t,e,i){"use strict";i.r(e);var a=i("cd23"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=s.a},7111:function(t,e,i){"use strict";var a,s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("my-page",{attrs:{title:"详情"}},[i("v-uni-swiper",{staticClass:"screen-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.swiperList,(function(e,a){return i("v-uni-swiper-item",{key:a},["image"==e.type?i("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e()],1)})),1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("问题编号:")]),i("v-uni-input",{attrs:{disabled:"",placeholder:t.item.questionId,name:"input"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("期       数:")]),i("v-uni-input",{attrs:{disabled:"",placeholder:t.item.term,name:"input"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("属地名称:")]),i("v-uni-input",{attrs:{disabled:"",placeholder:t.item.streetName,name:"input"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("问题地点:")]),i("v-uni-input",{attrs:{disabled:"",placeholder:t.item.questionAddr,name:"input"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("问题来源:")]),i("v-uni-input",{attrs:{disabled:"",placeholder:t.item.questionSource,name:"input"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("问题分类:")]),i("v-uni-input",{attrs:{disabled:"",placeholder:t.item.questionClassify,name:"input"}})],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("问题描述:")]),i("v-uni-input",{attrs:{disabled:"",placeholder:t.item.questionRemark,name:"input"}})],1)],1)},n=[];i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},cd23:function(t,e,i){"use strict";i("d81d"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{modalName:null,item:{},dotStyle:!1,towerStart:0,direction:"",swiperList:[]}},onLoad:function(t){var e=JSON.parse(decodeURIComponent(t.item));this.load(e)},methods:{load:function(t){this.swiperList=t.questionImgPath.split(",").map((function(t,e){return{id:e,type:"image",url:baseurl+t}})),t["term"]=this.$api.getDictNameByCode(t.term,"term"),t["streetName"]=this.$api.getDictNameByCode(t.streetName,"streetCode"),t["questionClassify"]=this.$api.getDictNameByCode(t.questionClassify,"quesFLCode"),t["questionSource"]=this.$api.getDictNameByCode(t.questionSource,"quesSource"),t["cityName"]=this.$api.getDictNameByCode(t.cityName,"areaCode"),this.item=t}}};e.default=a},e6ec:function(t,e,i){"use strict";i.r(e);var a=i("7111"),s=i("252d");for(var n in s)"default"!==n&&function(t){i.d(e,t,(function(){return s[t]}))}(n);var u,r=i("f0c5"),o=Object(r["a"])(s["default"],a["b"],a["c"],!1,null,"aba80b9e",null,!1,a["a"],u);e["default"]=o.exports}}]);