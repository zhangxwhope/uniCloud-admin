(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/system/role/edit"],{2125:function(n,e,t){"use strict";(function(n){t("f659");o(t("66fd"));var e=o(t("c2ef"));function o(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"75a2":function(n,e,t){"use strict";t.r(e);var o=t("c0d3"),i=t.n(o);for(var r in o)"default"!==r&&function(n){t.d(e,n,(function(){return o[n]}))}(r);e["default"]=i.a},"7c72":function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return o}));var o={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"7351"))},uniFormsItem:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item")]).then(t.bind(null,"4f13"))},uniEasyinput:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput")]).then(t.bind(null,"a786"))},uniDataCheckbox:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox")]).then(t.bind(null,"39b2"))}},i=function(){var n=this,e=n.$createElement;n._self._c},r=[]},c0d3:function(n,e,t){"use strict";(function(n,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("742a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){c(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var s=n.database(),l=(s.command,"uni-id-roles");function f(n){var e={};for(var t in i.default)n.includes(t)&&(e[t]=i.default[t]);return e}var d={data:function(){return{formData:{role_id:"",role_name:"",permission:[],comment:""},rules:u({},f(["role_id","role_name","permission","comment"])),permissions:[]}},onLoad:function(n){var e=n.id;this.formDataId=e,this.getDetail(e),this.loadPermissions()},methods:{submitForm:function(n){this.$refs.form.submit()},submit:function(n){var e=this,t=n.detail,i=t.value,r=t.errors;r||(o.showLoading({title:"修改中...",mask:!0}),s.collection(l).where({_id:this.formDataId}).update(i).then((function(n){o.showToast({title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return o.navigateBack()}),500)})).catch((function(n){o.showModal({content:n.message||"请求服务失败",showCancel:!1})})).finally((function(){o.hideLoading()})))},getDetail:function(n){var e=this;o.showLoading({mask:!0}),s.collection(l).where({_id:n}).get().then((function(n){var t=n.result.data[0];t&&(Object.keys(e.formData).forEach((function(n){e.binddata(n,t[n])})),e.formData=t)})).catch((function(n){o.showModal({content:n.message||"请求服务失败",showCancel:!1})})).finally((function(){o.hideLoading()}))},loadPermissions:function(){var n=this;s.collection("uni-id-permissions").limit(500).get().then((function(e){n.permissions=e.result.data.map((function(n){return{value:n.permission_id,text:n.permission_name}}))})).catch((function(n){o.showModal({title:"提示",content:n.message,showCancel:!1})}))}}};e.default=d}).call(this,t("a9ff")["default"],t("543d")["default"])},c2ef:function(n,e,t){"use strict";t.r(e);var o=t("7c72"),i=t("75a2");for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);var a,u=t("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],a);e["default"]=c.exports}},[["2125","common/runtime","common/vendor"]]]);