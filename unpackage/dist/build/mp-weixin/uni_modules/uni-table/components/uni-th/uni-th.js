(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-table/components/uni-th/uni-th"],{"1fa7":function(t,n,e){"use strict";e.r(n);var r=e("7db4"),i=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=i.a},"7db4":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"uniTh",options:{virtualHost:!0},props:{width:{type:[String,Number],default:""},align:{type:String,default:"left"}},data:function(){return{border:!1}},created:function(){this.root=this.getTable("uniTable"),this.rootTr=this.getTable("uniTr"),this.rootTr.minWidthUpdate(this.width?this.width:140),this.border=this.root.border},methods:{getTable:function(t){var n=this.$parent,e=n.$options.name;while(e!==t){if(n=n.$parent,!n)return!1;e=n.$options.name}return n}}};n.default=r},ae12:function(t,n,e){"use strict";e.r(n);var r=e("f314"),i=e("1fa7");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("cc69");var a,o=e("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);n["default"]=c.exports},c2c3:function(t,n,e){},cc69:function(t,n,e){"use strict";var r=e("c2c3"),i=e.n(r);i.a},f314:function(t,n,e){"use strict";var r;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}));var i=function(){var t=this,n=t.$createElement;t._self._c},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-table/components/uni-th/uni-th-create-component',
    {
        'uni_modules/uni-table/components/uni-th/uni-th-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ae12"))
        })
    },
    [['uni_modules/uni-table/components/uni-th/uni-th-create-component']]
]);
