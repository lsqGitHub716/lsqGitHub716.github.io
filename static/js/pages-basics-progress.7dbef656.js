(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-basics-progress"],{"02ad":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{ColorList:this.ColorList,color:"red",loading:!1,modalName:"",active:!1}},onLoad:function(){var t=this;setTimeout((function(){t.loading=!0}),500)},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},SetColor:function(t){this.color=t.currentTarget.dataset.color,this.modalName=null},SetActive:function(t){this.active=t.detail.value}}};i.default=a},1978:function(t,i,s){"use strict";s.r(i);var a=s("02ad"),e=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(i,t,(function(){return a[t]}))}(n);i["default"]=e.a},"57ba":function(t,i,s){"use strict";var a,e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[s("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),s("template",{attrs:{slot:"content"},slot:"content"},[t._v("进度条")])],2),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条形状")],1)],1),s("v-uni-view",{staticClass:"padding bg-white"},[s("v-uni-view",{staticClass:"cu-progress"},[s("v-uni-view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]},[t._v("61.8%")])],1),s("v-uni-view",{staticClass:"cu-progress radius margin-top"},[s("v-uni-view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]},[t._v("61.8%")])],1),s("v-uni-view",{staticClass:"cu-progress round margin-top"},[s("v-uni-view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]},[t._v("61.8%")])],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条尺寸")],1)],1),s("v-uni-view",{staticClass:"padding bg-white"},[s("v-uni-view",{staticClass:"cu-progress round"},[s("v-uni-view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]})],1),s("v-uni-view",{staticClass:"cu-progress round margin-top sm"},[s("v-uni-view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]})],1),s("v-uni-view",{staticClass:"cu-progress round margin-top xs"},[s("v-uni-view",{staticClass:"bg-red",style:[{width:t.loading?"61.8%":""}]})],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top",attrs:{"data-target":"ColorModal"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条颜色")],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-view",{staticClass:"padding solid radius shadow-blur",class:"bg-"+t.color})],1)],1),s("v-uni-view",{staticClass:"padding",class:"white"==t.color?"bg-grey":"bg-white"},[s("v-uni-view",{staticClass:"cu-progress round"},[s("v-uni-view",{class:"bg-"+t.color,style:[{width:t.loading?"61.8%":""}]})],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条条纹")],1),s("v-uni-switch",{staticClass:"margin-right-sm",class:t.active?"checked":"",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.SetActive.apply(void 0,arguments)}}})],1),s("v-uni-view",{staticClass:"padding bg-white"},[s("v-uni-view",{staticClass:"cu-progress round sm striped",class:t.active?"active":""},[s("v-uni-view",{staticClass:"bg-green",style:[{width:t.loading?"60%":""}]})],1),s("v-uni-view",{staticClass:"cu-progress round sm margin-top-sm striped",class:t.active?"active":""},[s("v-uni-view",{staticClass:"bg-black",style:[{width:t.loading?"40%":""}]})],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条比例")],1)],1),s("v-uni-view",{staticClass:"padding bg-white"},[s("v-uni-view",{staticClass:"cu-progress radius striped active"},[s("v-uni-view",{staticClass:"bg-red",style:[{width:t.loading?"30%":""}]},[t._v("30%")]),s("v-uni-view",{staticClass:"bg-olive",style:[{width:t.loading?"45%":""}]},[t._v("45%")]),s("v-uni-view",{staticClass:"bg-cyan",style:[{width:t.loading?"25%":""}]},[t._v("25%")])],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-title text-blue"}),t._v("进度条布局")],1)],1),s("v-uni-view",{staticClass:"padding bg-white "},[s("v-uni-view",{staticClass:"flex"},[s("v-uni-view",{staticClass:"cu-progress round"},[s("v-uni-view",{staticClass:"bg-green",style:[{width:t.loading?"100%":""}]})],1),s("v-uni-text",{staticClass:"cuIcon-roundcheckfill text-green margin-left-sm"})],1),s("v-uni-view",{staticClass:"flex margin-top"},[s("v-uni-view",{staticClass:"cu-progress round"},[s("v-uni-view",{staticClass:"bg-green",style:[{width:t.loading?"80%":""}]})],1),s("v-uni-text",{staticClass:"margin-left"},[t._v("80%")])],1)],1),s("v-uni-view",{staticClass:"cu-modal",class:"ColorModal"==t.modalName?"show":""},[s("v-uni-view",{staticClass:"cu-dialog"},[s("v-uni-view",{staticClass:"cu-bar justify-end solid-bottom"},[s("v-uni-view",{staticClass:"content"},[t._v("选择颜色")]),s("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[s("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),s("v-uni-view",{staticClass:"grid col-5 padding"},t._l(t.ColorList,(function(i,a){return"gray"!=i.name&&"white"!=i.name?s("v-uni-view",{key:a,staticClass:"padding-xs",attrs:{"data-color":i.name},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.SetColor.apply(void 0,arguments)}}},[s("v-uni-view",{staticClass:"padding-tb radius",class:"bg-"+i.name},[t._v(t._s(i.title))])],1):t._e()})),1)],1)],1)],1)},n=[];s.d(i,"b",(function(){return e})),s.d(i,"c",(function(){return n})),s.d(i,"a",(function(){return a}))},b701:function(t,i,s){"use strict";s.r(i);var a=s("57ba"),e=s("1978");for(var n in e)"default"!==n&&function(t){s.d(i,t,(function(){return e[t]}))}(n);var l,c=s("f0c5"),o=Object(c["a"])(e["default"],a["b"],a["c"],!1,null,"28afeea5",null,!1,a["a"],l);i["default"]=o.exports}}]);