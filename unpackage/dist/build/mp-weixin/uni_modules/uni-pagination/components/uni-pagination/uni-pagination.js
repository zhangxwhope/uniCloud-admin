(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-pagination/components/uni-pagination/uni-pagination"],{"1a28":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return u}));var u={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,"e13c"))}},i=function(){var n=this,t=n.$createElement;n._self._c},r=[]},"416e":function(n,t,e){"use strict";var u=e("a312"),i=e.n(u);i.a},4289:function(n,t,e){"use strict";e.r(t);var u=e("d81e"),i=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,(function(){return u[n]}))}(r);t["default"]=i.a},"9bf6":function(n,t,e){"use strict";e.r(t);var u=e("1a28"),i=e("4289");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);e("416e");var c,a=e("f0c5"),o=Object(a["a"])(i["default"],u["b"],u["c"],!1,null,"b0179ff4",null,!1,u["a"],c);t["default"]=o.exports},a312:function(n,t,e){},d81e:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"UniPagination",props:{prevText:{type:String,default:"上一页"},nextText:{type:String,default:"下一页"},current:{type:[Number,String],default:1},total:{type:[Number,String],default:0},pageSize:{type:[Number,String],default:10},showIcon:{type:[Boolean,String],default:!1}},data:function(){return{currentIndex:1}},computed:{maxPage:function(){var n=1,t=Number(this.total),e=Number(this.pageSize);return t&&e&&(n=Math.ceil(t/e)),n}},watch:{current:function(n){this.currentIndex=+n}},created:function(){this.currentIndex=+this.current},methods:{clickLeft:function(){1!==Number(this.currentIndex)&&(this.currentIndex-=1,this.change("prev"))},clickRight:function(){Number(this.currentIndex)!==this.maxPage&&(this.currentIndex+=1,this.change("next"))},change:function(n){this.$emit("change",{type:n,current:this.currentIndex})}}};t.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-pagination/components/uni-pagination/uni-pagination-create-component',
    {
        'uni_modules/uni-pagination/components/uni-pagination/uni-pagination-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9bf6"))
        })
    },
    [['uni_modules/uni-pagination/components/uni-pagination/uni-pagination-create-component']]
]);