(function(e){function t(t){for(var n,a,i=t[0],u=t[1],l=t[2],p=0,d=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==s[u]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2395:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("d3b7"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=r("5f5b"),o=r("b1e0"),a=(r("f9e3"),r("2dd8"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/books"}},[e._v("Books")]),e._v(" | "),r("router-link",{attrs:{to:"/issues"}},[e._v("All Issues")]),e._v(" | "),r("router-link",{attrs:{to:"/my-issues"}},[e._v("My issues")]),e._v(" | "),r("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),r("router-view")],1)}),i=[],u=(r("7c55"),r("2877")),l={},c=Object(u["a"])(l,a,i,!1,null,null,null),p=c.exports,d=r("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("Login")],1)},f=[],y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[e._v("Code: "+e._s(e.code))]),!e.code&&e.hasExpired?r("b-form",{on:{submit:e.onSubmit}},[r("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Login with CVUT")])],1):e._e()],1)},m=[],v=(r("99af"),r("ac1f"),r("466d"),r("5319"),r("96cf"),r("1da1")),h=r("bc3a"),g=r.n(h),k=g.a.create({baseURL:"http://via-library.azurewebsites.net",headers:{Accept:"application/json","Content-Type":"application/json"}});function _(e){return x.apply(this,arguments)}function x(){return x=Object(v["a"])(regeneratorRuntime.mark((function e(t){var r,n,s,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k.post("/api/Auth/sign-in",{code:t});case 2:r=e.sent,n=r.data,s=n.access_token,o=n.refresh_token,a=n.expiresIn,localStorage.setItem("access_token",s),localStorage.setItem("refresh_token",o),localStorage.setItem("expires_in",a);case 7:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function w(){var e=localStorage.getItem("expires_in"),t=new Date;return t>=Date.parse(e)}var B={computed:{hasExpired:function(){return w()},code:function(){var e=/(?<=code=)(\w*)(?=(&|#)?)/gm,t=window.location.href.match(e);return t&&1==t.length?t[0]:this.$route.query.code}},methods:{onSubmit:function(e){e.preventDefault();var t=location.href.replace("/#/",""),r="623409a3-3e29-4258-b3d8-5c6943d56c1d";window.location.href="https://auth.fit.cvut.cz/oauth/authorize?response_type=code&client_id=".concat(r,"&redirect_uri=").concat(t)}},mounted:function(){this.$nextTick(Object(v["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.code||!this.hasExpired){e.next=3;break}return e.next=3,_(this.code);case 3:t=/\??code=(\w*)(?=(&|#)?)/gm,window.location.href=window.location.href.replace(t,"");case 5:case"end":return e.stop()}}),e,this)}))))}},S=B,j=Object(u["a"])(S,y,m,!1,null,null,null),O=j.exports,D={name:"Home",components:{Login:O}},P=D,R=Object(u["a"])(P,b,f,!1,null,null,null),I=R.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-table",{attrs:{hover:"",selectable:"","current-page":e.currentPage,"per-page":e.perPage,"sort-by":e.sortBy,fields:e.fields,items:e.items,busy:e.isBusy,"select-mode":e.selectMode},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t}},scopedSlots:e._u([{key:"action",fn:function(t){return[r("b-button",{on:{click:function(r){return e.shouldRemove(t.item.email)}}},[e._v("Remove")])]}}])},[r("div",{staticClass:"text-center text-primary my-2",attrs:{slot:"table-busy"},slot:"table-busy"},[r("b-spinner",{staticClass:"align-middle"}),r("strong",[e._v("Loading...")])],1)])],1)},T=[];function E(){return C.apply(this,arguments)}function C(){return C=Object(v["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k.get("/api/Books");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}var $={name:"Books",created:function(){var e=this;return Object(v["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isBusy=!0,t.next=3,E();case 3:e.items=t.sent,e.isBusy=!1;case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{fields:[{key:"name",label:"Book Name",sortable:!0},{key:"isbn",label:"ISBN",sortable:!0},{key:"quantity",label:"Quantity",sortable:!0},{key:"issued",label:"Issued",sortable:!0}],items:[],currentPage:0,perPage:100,pageSizes:[100],emptyText:"No data",sortBy:"",isBusy:!1,search:"",selectMode:"single"}}},L=$,N=Object(u["a"])(L,M,T,!1,null,null,null),z=N.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-table",{attrs:{hover:"",selectable:"","current-page":e.currentPage,"per-page":e.perPage,"sort-by":e.sortBy,fields:e.fields,items:e.items,busy:e.isBusy,"select-mode":e.selectMode},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t}},scopedSlots:e._u([{key:"action",fn:function(t){return[r("b-button",{on:{click:function(r){return e.shouldRemove(t.item.email)}}},[e._v("Remove")])]}}])},[r("div",{staticClass:"text-center text-primary my-2",attrs:{slot:"table-busy"},slot:"table-busy"},[r("b-spinner",{staticClass:"align-middle"}),r("strong",[e._v("Loading...")])],1)])],1)},q=[],H={name:"Issues",data:function(){return{fields:[{key:"book",label:"Book Name",sortable:!0},{key:"isbn",label:"ISBN",sortable:!0},{key:"issueTo",label:"Issue To",sortable:!0},{key:"issueDate",label:"Issue date",sortable:!0},{key:"expiryDate",label:"Expiry Date",sortable:!0},{key:"returnDate",label:"Return Date",sortable:!0},{key:"status",label:"Status",sortable:!0}],items:[{book:"My first Book",isbn:"978-3-16-148410-0",issueTo:"John Doe",issueDate:"2019-06-06",expiryDate:"2020-06-06",returnDate:"2020-05-05",status:"Returned"}],currentPage:0,perPage:100,pageSizes:[100],emptyText:"No data",sortBy:"",isBusy:!1,search:"",selectMode:"single"}}},J=H,U=Object(u["a"])(J,A,q,!1,null,null,null),V=U.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-table",{attrs:{hover:"",selectable:"","current-page":e.currentPage,"per-page":e.perPage,"sort-by":e.sortBy,fields:e.fields,items:e.items,busy:e.isBusy,"select-mode":e.selectMode},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t}},scopedSlots:e._u([{key:"action",fn:function(t){return[r("b-button",{on:{click:function(r){return e.shouldRemove(t.item.email)}}},[e._v("Remove")])]}}])},[r("div",{staticClass:"text-center text-primary my-2",attrs:{slot:"table-busy"},slot:"table-busy"},[r("b-spinner",{staticClass:"align-middle"}),r("strong",[e._v("Loading...")])],1)])],1)},F=[],G={name:"MyIssues",data:function(){return{fields:[{key:"book",label:"Book Name",sortable:!0},{key:"isbn",label:"ISBN",sortable:!0},{key:"issueDate",label:"Issue date",sortable:!0},{key:"expiryDate",label:"Expiry Date",sortable:!0},{key:"returnDate",label:"Return Date",sortable:!0},{key:"status",label:"Status",sortable:!0}],items:[{book:"My first Book",isbn:"978-3-16-148410-0",issueDate:"2019-06-06",expiryDate:"2020-06-06",returnDate:"2020-05-05",status:"Returned"}],currentPage:0,perPage:100,pageSizes:[100],emptyText:"No data",sortBy:"",isBusy:!1,search:"",selectMode:"single"}}},K=G,W=Object(u["a"])(K,Q,F,!1,null,null,null),X=W.exports;n["default"].use(d["a"]);var Y=[{path:"/",name:"Home",component:I},{path:"/login",name:"Login",component:O},{path:"/books",name:"Books",component:z},{path:"/issues",name:"All Issues",component:V},{path:"/my-issues",name:"My issues",component:X}],Z=new d["a"]({routes:Y}),ee=Z;n["default"].config.productionTip=!1,n["default"].prototype.$http=k,n["default"].use(s["a"]),n["default"].use(o["a"]),k.interceptors.request.use((function(e){var t=localStorage.getItem("access_token");return t&&void 0!=t&&(e.headers.common["Authorization"]="Bearer "+t),e}),(function(e){return Promise.reject(e)})),new n["default"]({router:ee,render:function(e){return e(p)}}).$mount("#app")},"7c55":function(e,t,r){"use strict";r("2395")},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.2e7a83d4.js.map