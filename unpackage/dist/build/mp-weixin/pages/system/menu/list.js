(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/system/menu/list"],{"2f44":function(n,e,t){"use strict";var i=t("8c68"),u=t.n(i);u.a},"47f1":function(n,e,t){"use strict";(function(n){t("f659");i(t("66fd"));var e=i(t("beae"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},5996:function(n,e,t){"use strict";t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return i}));var i={uniBadge:function(){return t.e("uni_modules/uni-badge/components/uni-badge/uni-badge").then(t.bind(null,"df02"))},uniTable:function(){return t.e("uni_modules/uni-table/components/uni-table/uni-table").then(t.bind(null,"237e"))},uniTr:function(){return t.e("uni_modules/uni-table/components/uni-tr/uni-tr").then(t.bind(null,"0d2d"))},uniTh:function(){return t.e("uni_modules/uni-table/components/uni-th/uni-th").then(t.bind(null,"ae12"))},uniTd:function(){return t.e("uni_modules/uni-table/components/uni-td/uni-td").then(t.bind(null,"bff5"))},fixWindow:function(){return t.e("components/fix-window/fix-window").then(t.bind(null,"86a2"))}},u=function(){var n=this,e=n.$createElement;n._self._c},o=[]},"8c68":function(n,e,t){},b124:function(n,e,t){"use strict";(function(n,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=t("2f62");function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var c=[];function s(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;n.title=(t?"　".repeat(t)+"|-":"")+n.name,e.push(n),n.children&&l(n.children,e,t+1)}function l(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return n.forEach((function(n){return s(n,e,t)})),e}var f={data:function(){return{loading:!0,menus:[],errMsg:"",currentTab:"menus",selectedPluginMenuIndexs:[]}},computed:{pluginMenus:function(){var n=[];if(!this.$hasRole("admin"))return n;var e=this.menus;return e.length?(c.forEach((function(t){e.find((function(n){return n.menu_id===t.menu_id}))||n.push(t)})),n):n}},watch:{pluginMenus:function(n){n.length||(this.currentTab="menus")}},onLoad:function(){this.loadData()},methods:r(r({},(0,u.mapActions)({init:"app/init"})),{},{switchTab:function(n){this.currentTab=n},loadData:function(){var n=this;this.loading=!0,this.$request("system/menu/list",{},{showModal:!1}).then((function(e){n.menus=l(e)})).catch((function(e){n.errMsg=e.message})).finally((function(){n.loading=!1}))},navigateTo:function(e,t){var i=this;n.navigateTo({url:e,events:{refreshData:function(){i.loadData(t)}}})},confirmDelete:function(e){var t=this,i="是否删除该菜单？";this.menus.find((function(n){return n.parent_id===e.menu_id}))&&(i="是否删除该菜单及其所有子菜单？"),n.showModal({title:"提示",content:i,success:function(i){i.confirm&&(n.showLoading({mask:!0}),t.$request("system/menu/delete",{id:e._id}).then((function(){t.init(),t.loadData()})).finally((function(){n.hideLoading()})))}})},pluginMenuSelectChange:function(n){this.selectedPluginMenuIndexs=n.detail.index},addPluginMenus:function(e){var t=this;if(!this.selectedPluginMenuIndexs.length)return n.showModal({title:"提示",content:"请选择要添加的菜单！",showCancel:!1});var u=this.pluginMenus,o=[];this.selectedPluginMenuIndexs.forEach((function(n){var e=u[n];if(e){var t=JSON.parse(JSON.stringify(e));delete t.json,o.push(t)}})),n.showModal({title:"提示",content:"您确认要添加已选中的菜单吗？",success:function(e){if(e.confirm){n.showLoading({mask:!0});var r=o.length===u.length;i.database().collection("opendb-admin-menus").add(o).then((function(e){t.init(),n.showModal({title:"提示",content:"添加菜单成功！",showCancel:!1,success:function(){t.$refs.pluginMenusTable.clearSelection(),r&&(t.currentTab="menus"),t.loadData()}})})).catch((function(e){n.showModal({title:"提示",content:e.message,showCancel:!1})})).finally((function(){n.hideLoading()}))}}})}})};e.default=f}).call(this,t("543d")["default"],t("a9ff")["default"])},beae:function(n,e,t){"use strict";t.r(e);var i=t("5996"),u=t("cc00");for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);t("2f44");var r,a=t("f0c5"),c=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=c.exports},cc00:function(n,e,t){"use strict";t.r(e);var i=t("b124"),u=t.n(i);for(var o in i)"default"!==o&&function(n){t.d(e,n,(function(){return i[n]}))}(o);e["default"]=u.a}},[["47f1","common/runtime","common/vendor"]]]);