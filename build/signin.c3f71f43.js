parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({42:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={data:function(){return{name:"",pwd:"",nametip:["用户名不能为空","ok"],pwdtip:["密码不能少于6位","ok","密码格式不对"],dismissSecs:5,dismissCountDown:0,variant:"",info:""}},methods:{countDownChanged:function(n){this.dismissCountDown=n},keyup:function(n){38!=n.keyCode&&40!=n.keyCode&&(this.disabled||13!=n.keyCode||this.signin())},signin:function(){var n=this;this.axios.post("/signin",{name:this.name,pwd:this.pwd}).then(function(t){"登录成功"!=t.data.info&&(n.variant="danger",n.dismissCountDown=n.dismissSecs,n.info=t.data.info),"登录成功"==t.data.info&&(n.$cookies.set("isLogin","1245465r654fghfgfwcb"+t.data.user,259200),n.$router.push({path:"/vote"}))},function(t){n.variant="danger",n.dismissCountDown=n.dismissSecs,n.info="服务器已关闭"})}},computed:{nameState:function(){return!!this.name||null},pwdState:function(){return!!/^[0-9a-zA-Z!@#$^*]{6,18}$/.test(this.pwd)||null},disabled:function(){return!this.name||!/^[0-9a-zA-Z!@#$^*]{6,18}$/.test(this.pwd)}}};var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"signin"}},[n("div",{staticClass:"alertContainer"},[n("b-alert",{attrs:{variant:t.variant,dismissible:"",show:t.dismissCountDown},on:{dismissed:function(s){t.dismissCountdown=0},"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.info)+" 这条消息将在 "+t._s(t.dismissCountDown)+" 秒后消失... ")])],1),t._v(" "),n("b-form",{on:{keyup:t.keyup}},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{state:t.nameState,placeholder:"输入用户名"},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}}),n("font",{directives:[{name:"show",rawName:"v-show",value:t.name,expression:"name"}],on:{click:function(s){s.stopPropagation(),t.name=""}}},[n("i",{staticClass:"fa fa-times"})])],1),t._v(" "),n("span",[t._v(t._s(t.name?t.nametip[1]:t.nametip[0]))]),t._v(" "),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"form-control",attrs:{type:"password",state:t.pwdState,placeholder:"输入密码"},domProps:{value:t.pwd},on:{input:function(s){s.target.composing||(t.pwd=s.target.value)}}}),n("font",{directives:[{name:"show",rawName:"v-show",value:t.pwd,expression:"pwd"}],on:{click:function(s){s.stopPropagation(),t.pwd=""}}},[n("i",{staticClass:"fa fa-times"})])],1),t._v(" "),n("span",[t._v(t._s(t.pwd.length>=6?/^[0-9a-zA-Z!@#$^*]{6,18}$/.test(t.pwd)?t.pwdtip[1]:t.pwdtip[2]:t.pwdtip[0]))])]),t._v(" "),n("p",[n("button",{staticClass:"form-control",attrs:{disabled:t.disabled},on:{click:function(s){return s.stopPropagation(),t.signin(s)}}},[t._v("登录")]),t._v(" "),n("router-link",{attrs:{to:"/signup"}},[t._v("注册")])],1)],1)},staticRenderFns:[],_compiled:!0,_scopeId:null,functional:void 0});
},{}]},{},[42])
//# sourceMappingURL=signin.c3f71f43.map