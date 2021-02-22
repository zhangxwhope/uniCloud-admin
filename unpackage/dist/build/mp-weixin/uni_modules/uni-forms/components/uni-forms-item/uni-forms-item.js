(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-forms/components/uni-forms-item/uni-forms-item"],{"12e7":function(e,t,r){},"4f13":function(e,t,r){"use strict";r.r(t);var i=r("d5f3"),n=r("7303");for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);r("86cf");var s,l=r("f0c5"),a=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"688c0f3e",null,!1,i["a"],s);t["default"]=a.exports},7303:function(e,t,r){"use strict";r.r(t);var i=r("766d"),n=r.n(i);for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"766d":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r("a34a"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t,r,i,n,o,s){try{var l=e[o](s),a=l.value}catch(u){return void r(u)}l.done?t(a):Promise.resolve(a).then(i,n)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function l(e){s(o,i,n,l,a,"next",e)}function a(e){s(o,i,n,l,a,"throw",e)}l(void 0)}))}}var a={name:"uniFormsItem",props:{custom:{type:Boolean,default:!1},showMessage:{type:Boolean,default:!0},name:String,required:Boolean,validateTrigger:{type:String,default:""},leftIcon:String,iconColor:{type:String,default:"#606266"},label:String,labelWidth:{type:[Number,String],default:""},labelAlign:{type:String,default:""},labelPosition:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""}},data:function(){return{errorTop:!1,errorBottom:!1,labelMarginBottom:"",errorWidth:"",errMsg:"",val:"",labelPos:"",labelWid:"",labelAli:"",showMsg:"undertext",border:!1,isFirstBorder:!1}},computed:{msg:function(){return this.errorMessage||this.errMsg},fieldStyle:function(){var e={};return"top"==this.labelPos&&(e.padding="0 0",this.labelMarginBottom="6px"),"left"==this.labelPos&&!1!==this.msg&&""!=this.msg?(e.paddingBottom="0px",this.errorBottom=!0,this.errorTop=!1):"top"==this.labelPos&&!1!==this.msg&&""!=this.msg?(this.errorBottom=!1,this.errorTop=!0):(this.errorTop=!1,this.errorBottom=!1),e},justifyContent:function(){return"left"===this.labelAli?"flex-start":"center"===this.labelAli?"center":"right"===this.labelAli?"flex-end":void 0}},watch:{validateTrigger:function(e){this.formTrigger=e}},created:function(){this.form=this.getForm(),this.group=this.getForm("uniGroup"),this.formRules=[],this.formTrigger=this.validateTrigger,this.form&&this.form.childrens.push(this),this.init()},destroyed:function(){var e=this;this.form&&this.form.childrens.forEach((function(t,r){t===e&&(e.form.childrens.splice(r,1),delete e.form.formData[t.name])}))},methods:{init:function(){if(this.form){var e=this.form,t=e.formRules,r=e.validator,i=(e.formData,e.value,e.labelPosition),n=e.labelWidth,o=e.labelAlign,s=e.errShowType;this.labelPos=this.labelPosition?this.labelPosition:i,this.labelWid=this.label?this.labelWidth?this.labelWidth:n:0,this.labelAli=this.labelAlign?this.labelAlign:o,this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border,this.showMsg=s,t&&(this.formRules=t[this.name]||{}),this.validator=r}else this.labelPos=this.labelPosition||"left",this.labelWid=this.labelWidth||65,this.labelAli=this.labelAlign||"left"},getForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniForms",t=this.$parent,r=t.$options.name;while(r!==e){if(t=t.$parent,!t)return!1;r=t.$options.name}return t},clearValidate:function(){this.errMsg=""},setValue:function(e){if(this.name){if(this.errMsg&&(this.errMsg=""),this.form.formData[this.name]=this.form._getValue(this.name,e),!this.formRules||(this.formRules,"{}"===JSON.stringify(this.formRules)))return;this.triggerCheck(this.form._getValue(this.name,e))}},triggerCheck:function(t,r){var n=this;return l(i.default.mark((function r(){var s,l,a,u;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(null,n.errMsg="",n.validator){r.next=4;break}return r.abrupt("return");case 4:if(s=n.isRequired(n.formRules.rules||[]),l=n.isTrigger(n.formRules.validateTrigger,n.validateTrigger,n.form.validateTrigger),a=null,!l){r.next=11;break}return r.next=10,n.validator.validateUpdate(o({},n.name,t),n.form.formData);case 10:a=r.sent;case 11:s||t||(a=null),l&&a&&a.errorMessage&&(u=n.form.inputChildrens.find((function(e){return e.rename===n.name})),u&&(u.errMsg=a.errorMessage),"toast"===n.form.errShowType&&e.showToast({title:a.errorMessage||"校验错误",icon:"none"}),"modal"===n.form.errShowType&&e.showModal({title:"提示",content:a.errorMessage||"校验错误"})),n.errMsg=a?a.errorMessage:"",n.form.validateCheck(a||null);case 15:case"end":return r.stop()}}),r)})))()},isTrigger:function(e,t,r){return!("submit"===e||!e)||void 0===e&&("bind"===t||!t&&"bind"===r)},isRequired:function(e){for(var t=!1,r=0;r<e.length;r++){var i=e[r];if(i.required){t=!0;break}}return t}}};t.default=a}).call(this,r("543d")["default"])},"86cf":function(e,t,r){"use strict";var i=r("12e7"),n=r.n(i);n.a},d5f3:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i}));var i={uniIcons:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(r.bind(null,"e13c"))}},n=function(){var e=this,t=e.$createElement,r=(e._self._c,e.msg&&"left"===e.labelPos?Number(e.labelWid):null);e.$mp.data=Object.assign({},{$root:{m0:r}})},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-forms/components/uni-forms-item/uni-forms-item-create-component',
    {
        'uni_modules/uni-forms/components/uni-forms-item/uni-forms-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4f13"))
        })
    },
    [['uni_modules/uni-forms/components/uni-forms-item/uni-forms-item-create-component']]
]);