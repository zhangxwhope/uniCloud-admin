(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-link/components/uni-link/uni-link"],{"0ede":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},methods:{openURL:function(){t.setClipboardData({data:this.href}),t.showModal({content:this.copyTips,showCancel:!1})}}};n.default=e}).call(this,e("543d")["default"])},b6a6:function(t,n,e){},ea97:function(t,n,e){"use strict";var u=e("b6a6"),a=e.n(u);a.a},ed9f:function(t,n,e){"use strict";e.r(n);var u=e("0ede"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);n["default"]=a.a},f02d:function(t,n,e){"use strict";e.r(n);var u=e("f519"),a=e("ed9f");for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);e("ea97");var r,o=e("f0c5"),f=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);n["default"]=f.exports},f519:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return u}));var a=function(){var t=this,n=t.$createElement;t._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-link/components/uni-link/uni-link-create-component',
    {
        'uni_modules/uni-link/components/uni-link/uni-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f02d"))
        })
    },
    [['uni_modules/uni-link/components/uni-link/uni-link-create-component']]
]);
