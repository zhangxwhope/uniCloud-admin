(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-role-list"],{"081c":function(n,t,e){"use strict";e.r(t);var i=e("1067"),a=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=a.a},1067:function(n,t,e){"use strict";(function(n){var i=e("4ea4");e("a15b"),e("d81d"),e("d3b7"),e("4d63"),e("ac1f"),e("25f0"),e("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("96cf");var a=i(e("1da1")),r=(n.database(),"create_date desc"),u=["role_id","role_name"],o=20,s=1,c={data:function(){return{query:"",where:"",orderby:r,options:{pageSize:o,pageCurrent:s},selectedIndexs:[]}},methods:{onqueryload:function(n,t){for(var e=0;e<n.length;e++){var i=n[e];i.permission=i.permission.map((function(n){return n.permission_name})).join("、")}},getWhere:function(){var n=this.query.trim();if(!n)return"";var t=new RegExp(n,"i");return u.map((function(n){return t+".test("+n+")"})).join(" || ")},search:function(){var n=this.getWhere(),t=n===this.where;this.where=n,t&&this.loadData()},loadData:function(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:n})},onPageChanged:function(n){this.$refs.udb.loadData({current:n.current})},navigateTo:function(n,t){var e=this;uni.navigateTo({url:n,events:{refreshData:function(){e.loadData(t)}}})},selectedItems:function(){var n=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return n[t].role_id}))},delTable:function(){var n=this;uni.showModal({title:"提示",content:"确认删除多条记录？",success:function(t){t.confirm&&n.delete(n.selectedItems())}})},selectionChange:function(n){this.selectedIndexs=n.detail.index},confirmDelete:function(n){var t=this;uni.showModal({title:"提示",content:"确认删除该记录？",success:function(e){e.confirm&&t.delete(n)}})},delete:function(n){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading({mask:!0}),e.next=3,t.$request("system/role/remove",{id:n}).then((function(n){uni.showToast({title:"删除成功"})})).catch((function(n){uni.showModal({content:n.message||"请求服务失败",showCancel:!1})})).finally((function(n){uni.hideLoading()}));case 3:t.loadData(!1);case 4:case"end":return e.stop()}}),e)})))()},praseRoleArr:function(n){return n?n.map((function(n){return n.permission_name})).join("、"):"-"}}};t.default=c}).call(this,e("a9ff")["default"])},"117d":function(n,t,e){var i=e("24fb");t=i(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""]),n.exports=t},"3b69":function(n,t,e){"use strict";var i=e("aa76"),a=e.n(i);a.a},4484:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}));var i={unicloudDb:e("960d").default,uniTable:e("237e").default,uniTr:e("0d2d").default,uniTh:e("ae12").default,uniTd:e("bff5").default,uniDateformat:e("afa6").default,uniPagination:e("9bf6").default},a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"uni-header"},[e("v-uni-view",{staticClass:"uni-group"},[e("v-uni-view",{staticClass:"uni-title"}),e("v-uni-view",{staticClass:"uni-sub-title"})],1),e("v-uni-view",{staticClass:"uni-group"},[e("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=n.$handleEvent(t),n.search.apply(void 0,arguments)}},model:{value:n.query,callback:function(t){n.query=t},expression:"query"}}),e("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.search.apply(void 0,arguments)}}},[n._v("搜索")]),e("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.navigateTo("./add")}}},[n._v("新增")]),e("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!n.selectedIndexs.length},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.delTable.apply(void 0,arguments)}}},[n._v("批量删除")])],1)],1),e("v-uni-view",{staticClass:"uni-container"},[e("unicloud-db",{ref:"udb",attrs:{collection:"uni-id-roles,uni-id-permissions",options:n.options,where:n.where,field:"role_id,role_name,permission{permission_id,permission_name},comment,create_date","page-data":"replace",orderby:n.orderby,getcount:!0,"page-size":n.options.pageSize,"page-current":n.options.pageCurrent},on:{load:function(t){arguments[0]=t=n.$handleEvent(t),n.onqueryload.apply(void 0,arguments)}},scopedSlots:n._u([{key:"default",fn:function(t){var i=t.data,a=t.pagination,r=t.loading,u=t.error;return[e("uni-table",{attrs:{loading:r,emptyText:u.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=n.$handleEvent(t),n.selectionChange.apply(void 0,arguments)}}},[e("uni-tr",[e("uni-th",{attrs:{align:"center"}},[n._v("角色Id")]),e("uni-th",{attrs:{align:"center"}},[n._v("角色名")]),e("uni-th",{attrs:{align:"center"}},[n._v("权限")]),e("uni-th",{attrs:{align:"center"}},[n._v("备注")]),e("uni-th",{attrs:{width:"170",align:"center"}},[n._v("创建时间")]),e("uni-th",{attrs:{width:"204",align:"center"}},[n._v("操作")])],1),n._l(i,(function(t,i){return e("uni-tr",{key:i},[e("uni-td",{attrs:{align:"center"}},[n._v(n._s(t.role_id))]),e("uni-td",{attrs:{align:"center"}},[n._v(n._s(t.role_name))]),e("uni-td",{attrs:{align:"center"}},[n._v(n._s(t.permission))]),e("uni-td",{attrs:{align:"center"}},[n._v(n._s(t.comment))]),e("uni-td",{attrs:{align:"center"}},[e("uni-dateformat",{attrs:{date:t.create_date,threshold:[0,0]}})],1),e("uni-td",{attrs:{align:"center"}},["admin"===t.role_id?e("v-uni-view",[n._v("-")]):e("v-uni-view",{staticClass:"uni-group"},[e("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.navigateTo("./edit?id="+t._id,!1)}}},[n._v("修改")]),e("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.confirmDelete(t.role_id)}}},[n._v("删除")])],1)],1)],1)}))],2),e("v-uni-view",{staticClass:"uni-pagination-box"},[e("uni-pagination",{attrs:{"show-icon":!0,"page-size":a.size,total:a.count},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.onPageChanged.apply(void 0,arguments)}},model:{value:a.current,callback:function(t){n.$set(a,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},aa76:function(n,t,e){var i=e("117d");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("6d491700",i,!0,{sourceMap:!1,shadowMode:!1})},b160:function(n,t,e){"use strict";e.r(t);var i=e("4484"),a=e("081c");for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);e("3b69");var u,o=e("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"123c996f",null,!1,i["a"],u);t["default"]=s.exports}}]);