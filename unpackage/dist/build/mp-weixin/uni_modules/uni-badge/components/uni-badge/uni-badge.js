(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-badge/components/uni-badge/uni-badge"],{"3a44":function(t,e,n){"use strict";var a=n("ca3a"),u=n.n(a);u.a},a8a6:function(t,e,n){"use strict";n.r(e);var a=n("de54"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=u.a},ca3a:function(t,e,n){},dc5c:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement;t._self._c},i=[]},de54:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=a},df02:function(t,e,n){"use strict";n.r(e);var a=n("dc5c"),u=n("a8a6");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("3a44");var c,r=n("f0c5"),o=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"8a8cfeb4",null,!1,a["a"],c);e["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-badge/components/uni-badge/uni-badge-create-component',
    {
        'uni_modules/uni-badge/components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("df02"))
        })
    },
    [['uni_modules/uni-badge/components/uni-badge/uni-badge-create-component']]
]);
