(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"3c1e":function(n,t,e){"use strict";e.r(t);var i=e("9d54"),a=e("555d");for(var o in a)"default"!==o&&function(n){e.d(t,n,(function(){return a[n]}))}(o);e("e475");var s,r=e("f0c5"),u=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"75601c1e",null,!1,i["a"],s);t["default"]=u.exports},"555d":function(n,t,e){"use strict";e.r(t);var i=e("5c56"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,(function(){return i[n]}))}(o);t["default"]=a.a},"5c56":function(n,t,e){"use strict";var i=e("4ea4");e("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(e("5530")),o=e("2f62"),s=i(e("4cb5")),r={data:function(){return(0,a.default)((0,a.default)({},s.default.navBar),{},{indexPage:s.default.index.url,showPassword:!0,loading:!1,formData:{username:"",password:""},rules:{username:{rules:[{required:!0,errorMessage:"请输入账户"},{minLength:1,maxLength:30,errorMessage:"账户长度在{minLength}到{maxLength}个字符"}]},password:{rules:[{required:!0,errorMessage:"请输入正确的密码"},{minLength:6,errorMessage:"密码长度大于{minLength}个字符"}]}}})},mounted:function(){this.focus();var n=this;uni.getStorage({key:"username",success:function(t){n.formData.username=t.data}})},methods:(0,a.default)((0,a.default)((0,a.default)({},(0,o.mapActions)({init:"app/init"})),(0,o.mapMutations)({setToken:function(n,t){n("user/SET_TOKEN",t)}})),{},{submit:function(n){var t=this;if(!this.loading){var e=n.detail,i=e.errors,a=e.value;i||(this.$refs.usernameInput.$refs.input.blur(),this.$refs.passwordInput.$refs.input.blur(),this.loading=!0,this.$request("user/login",a).then((function(n){return t.setToken({token:n.token,tokenExpired:n.tokenExpired}),t.init().then((function(){uni.showToast({title:"登录成功",icon:"none"}),uni.setStorage({key:"username",data:a.username}),uni.redirectTo({url:t.indexPage})}))})).catch((function(n){})).finally((function(n){t.loading=!1})))}},confirmForm:function(n,t){this.submitForm()},submitForm:function(){this.$refs.form.submit()},initAdmin:function(){uni.redirectTo({url:"/pages/demo/init/init"})},changePassword:function(){this.showPassword=!this.showPassword},focus:function(){this.$refs.usernameInput.$refs.input.focus()}})};t.default=r},"962a":function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,"uni-page-body[data-v-75601c1e]{width:100%;height:100%;display:flex;justify-content:center;background-color:#fff}.login-box[data-v-75601c1e]{position:relative;max-width:420px;flex:1;padding:140px 35px 0;margin:0 auto;overflow:hidden\n\t/* background-color: #F5F5F5; */}.underline[data-v-75601c1e]:hover{text-decoration:underline}.uni-tips[data-v-75601c1e]{display:flex;justify-content:flex-end;margin-top:15px}.uni-tips-text[data-v-75601c1e]{cursor:pointer;text-decoration:underline;font-size:13px;color:#007aff;opacity:.8}.no-padding[data-v-75601c1e]{padding:0}.admin-logo[data-v-75601c1e]{display:flex;justify-content:center;margin-bottom:30px}.admin-logo uni-image[data-v-75601c1e]{height:40px}body.?%PAGE?%[data-v-75601c1e]{background-color:#fff}",""]),n.exports=t},"9d54":function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return i}));var i={uniForms:e("7351").default,uniFormsItem:e("4f13").default},a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"login-box"},[e("v-uni-view",{staticClass:"admin-logo"},[e("v-uni-image",{attrs:{src:n.logo,mode:"heightFix"}})],1),e("v-uni-view",{staticClass:"uni-header no-padding"},[e("v-uni-view",{staticClass:"uni-title"},[n._v("系统登录")])],1),e("v-uni-view",{staticClass:"uni-container"},[e("uni-forms",{ref:"form",attrs:{rules:n.rules},on:{submit:function(t){arguments[0]=t=n.$handleEvent(t),n.submit.apply(void 0,arguments)}},model:{value:n.formData,callback:function(t){n.formData=t},expression:"formData"}},[e("uni-forms-item",{attrs:{"left-icon":"uni-icons-person-filled",name:"username",labelWidth:"35"}},[e("v-uni-input",{ref:"usernameInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:"账户"},on:{confirm:function(t){arguments[0]=t=n.$handleEvent(t),n.submitForm.apply(void 0,arguments)}},model:{value:n.formData.username,callback:function(t){n.$set(n.formData,"username",t)},expression:"formData.username"}})],1),e("uni-forms-item",{staticClass:"icon-container",attrs:{"left-icon":"uni-icons-locked-filled",name:"password",labelWidth:"35"}},[e("v-uni-input",{ref:"passwordInput",staticClass:"uni-input-border",attrs:{password:n.showPassword,placeholder:"密码"},on:{confirm:function(t){arguments[0]=t=n.$handleEvent(t),n.submitForm.apply(void 0,arguments)}},model:{value:n.formData.password,callback:function(t){n.$set(n.formData,"password",t)},expression:"formData.password"}}),e("v-uni-text",{staticClass:"uni-icon-password-eye pointer",class:[n.showPassword?"":"uni-eye-active"],on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.changePassword.apply(void 0,arguments)}}},[n._v("")])],1),e("v-uni-view",{staticClass:"uni-button-group"},[e("v-uni-button",{staticClass:"uni-button uni-button-full",attrs:{type:"primary",loading:n.loading,disabled:n.loading},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.submitForm.apply(void 0,arguments)}}},[n._v("登录")])],1)],1)],1)],1)},o=[]},e475:function(n,t,e){"use strict";var i=e("f734"),a=e.n(i);a.a},f734:function(n,t,e){var i=e("962a");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("b476a988",i,!0,{sourceMap:!1,shadowMode:!1})}}]);