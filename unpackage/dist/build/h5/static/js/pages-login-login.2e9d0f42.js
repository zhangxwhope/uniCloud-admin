(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"3c1e":function(t,n,e){"use strict";e.r(n);var a=e("a773"),i=e("555d");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("dbe3");var s,r=e("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"59a2175f",null,!1,a["a"],s);n["default"]=u.exports},"555d":function(t,n,e){"use strict";e.r(n);var a=e("5c56"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},"5c56":function(t,n,e){"use strict";var a=e("4ea4");e("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("5530")),o=e("2f62"),s=a(e("4cb5")),r={data:function(){return(0,i.default)((0,i.default)({},s.default.navBar),{},{indexPage:s.default.index.url,showPassword:!0,loading:!1,formData:{username:"",password:""},rules:{username:{rules:[{required:!0,errorMessage:"请输入账户"},{minLength:1,maxLength:30,errorMessage:"账户长度在{minLength}到{maxLength}个字符"}]},password:{rules:[{required:!0,errorMessage:"请输入正确的密码"},{minLength:6,errorMessage:"密码长度大于{minLength}个字符"}]}}})},mounted:function(){this.focus();var t=this;uni.getStorage({key:"username",success:function(n){t.formData.username=n.data}})},methods:(0,i.default)((0,i.default)((0,i.default)({},(0,o.mapActions)({init:"app/init"})),(0,o.mapMutations)({setToken:function(t,n){t("user/SET_TOKEN",n)}})),{},{submit:function(t){var n=this;if(!this.loading){var e=t.detail,a=e.errors,i=e.value;a||(this.$refs.usernameInput.$refs.input.blur(),this.$refs.passwordInput.$refs.input.blur(),this.loading=!0,this.$request("user/login",i).then((function(t){return n.setToken({token:t.token,tokenExpired:t.tokenExpired}),n.init().then((function(){uni.showToast({title:"登录成功",icon:"none"}),uni.setStorage({key:"username",data:i.username}),uni.redirectTo({url:n.indexPage})}))})).catch((function(t){})).finally((function(t){n.loading=!1})))}},confirmForm:function(t,n){this.submitForm()},submitForm:function(){this.$refs.form.submit()},initAdmin:function(){uni.redirectTo({url:"/pages/demo/init/init"})},changePassword:function(){this.showPassword=!this.showPassword},focus:function(){this.$refs.usernameInput.$refs.input.focus()}})};n.default=r},a05e:function(t,n,e){var a=e("a272");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("3908320a",a,!0,{sourceMap:!1,shadowMode:!1})},a272:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"uni-page-body[data-v-59a2175f]{width:100%;height:100%;display:flex;justify-content:center;background-color:#fff}.login-box[data-v-59a2175f]{position:relative;max-width:420px;flex:1;padding:140px 35px 0;margin:0 auto;overflow:hidden\n\t/* background-color: #F5F5F5; */}.underline[data-v-59a2175f]:hover{text-decoration:underline}.uni-tips[data-v-59a2175f]{display:flex;justify-content:flex-end;margin-top:15px}.uni-tips-text[data-v-59a2175f]{cursor:pointer;text-decoration:underline;font-size:13px;color:#007aff;opacity:.8}.no-padding[data-v-59a2175f]{padding:0}.admin-logo[data-v-59a2175f]{display:flex;justify-content:center;margin-bottom:30px}.admin-logo uni-image[data-v-59a2175f]{height:40px}body.?%PAGE?%[data-v-59a2175f]{background-color:#fff}",""]),t.exports=n},a773:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var a={uniForms:e("7351").default,uniFormsItem:e("4f13").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"login-box"},[e("v-uni-view",{staticClass:"admin-logo"},[e("v-uni-image",{attrs:{src:t.logo,mode:"heightFix"}})],1),e("v-uni-view",{staticClass:"uni-header no-padding"},[e("v-uni-view",{staticClass:"uni-title"},[t._v("系统登录")])],1),e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{rules:t.rules},on:{submit:function(n){arguments[0]=n=t.$handleEvent(n),t.submit.apply(void 0,arguments)}},model:{value:t.formData,callback:function(n){t.formData=n},expression:"formData"}},[e("uni-forms-item",{attrs:{"left-icon":"uni-icons-person-filled",name:"username",labelWidth:"35"}},[e("v-uni-input",{ref:"usernameInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:"账户"},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.submitForm.apply(void 0,arguments)}},model:{value:t.formData.username,callback:function(n){t.$set(t.formData,"username",n)},expression:"formData.username"}})],1),e("uni-forms-item",{staticClass:"icon-container",attrs:{"left-icon":"uni-icons-locked-filled",name:"password",labelWidth:"35"}},[e("v-uni-input",{ref:"passwordInput",staticClass:"uni-input-border",attrs:{password:t.showPassword,placeholder:"密码"},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.submitForm.apply(void 0,arguments)}},model:{value:t.formData.password,callback:function(n){t.$set(t.formData,"password",n)},expression:"formData.password"}}),e("v-uni-text",{staticClass:"uni-icon-password-eye pointer",class:[t.showPassword?"":"uni-eye-active"],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changePassword.apply(void 0,arguments)}}},[t._v("")])],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button uni-button-full",attrs:{type:"primary",loading:t.loading,disabled:t.loading},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submitForm.apply(void 0,arguments)}}},[t._v("登录")])],1)],1),e("v-uni-view",{staticClass:"uni-tips"},[e("v-uni-text",{staticClass:"uni-tips-text",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.initAdmin.apply(void 0,arguments)}}},[t._v("如无管理员账号，请先创建管理员...")])],1)],1)],1)},o=[]},dbe3:function(t,n,e){"use strict";var a=e("a05e"),i=e.n(a);i.a}}]);