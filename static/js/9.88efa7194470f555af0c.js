webpackJsonp([9],{"+x/F":function(t,s){},"58nP":function(t,s){},YKH1:function(t,s,i){"use strict";var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pwd-rule"},[s("div",[this._v("密码规则")]),this._v(" "),s("div",[this._v("1.密码长度为8 ~ 32 位字符")]),this._v(" "),s("div",[this._v("2.必须包含大小写字母和数字")]),this._v(" "),s("div",[this._v("3.请勿连续包含三个及以上相同字符 ")])])}]};var n=i("VU/8")({name:"PwdRule"},e,!1,function(t){i("58nP")},"data-v-017e0f10",null);s.a=n.exports},qGoq:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});i("eqfM");var e,n=i("/QYm"),r=i("bOdI"),o=i.n(r),a=(i("i0mo"),i("Hkar")),c=(i("MY4N"),i("0zAV")),l=(i("FO5P"),i("woHG")),d=(i("k3b4"),i("+2ln")),h=i("YKH1"),v=i("GKmE"),u=i("E4LH"),f=i("5V3A"),w={components:(e={},o()(e,d.a.name,d.a),o()(e,l.a.name,l.a),o()(e,c.a.name,c.a),o()(e,a.a.name,a.a),o()(e,"PwdRule",h.a),e),data:function(){return{oldPwd:"",newPwd:"",confirmPwd:"",errorMsg1:"",errorMsg2:"",isClose1:!0,isClose2:!0,isClose3:!0,step:1,rightTxt:"下一步"}},methods:{onClickLeft:function(){this.$router.isBack=!0,this.$router.go(-1)},shiftStatus1:function(){this.isClose1=!this.isClose1},shiftStatus2:function(){this.isClose2=!this.isClose2},shiftStatus3:function(){this.isClose3=!this.isClose3},firstClick:function(){if(""===this.oldPwd)return Object(n.a)("原密码不能为空");this.step=2},secondClick:function(){var t=Object(u.b)(this.newPwd);t?this.errorMsg1=t:this.step=3},thirdClick:function(){var t=this;if(this.confirmPwd===this.newPwd){var s={userId:JSON.parse(Object(v.d)("userInfo")).userId,oldPassWd:Object(v.a)(this.oldPwd),newPassWd:Object(v.a)(this.newPwd)};Object(f.b)(s).then(function(s){s.success?(Object(n.a)("修改密码成功"),t.$router.isBack=!0,t.$router.go(-1)):(Object(n.a)(s.message),t.step=1,t.newPwd="",t.confirmPwd="",t.errorMsg1="",t.errorMsg2="")})}else this.errorMsg2="确认密码和新密码不一致"},onClickRight:function(){switch(this.step){case 1:this.firstClick();break;case 2:this.secondClick();break;case 3:this.thirdClick()}}}},p={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"pwd"},[i("van-nav-bar",{attrs:{fixed:"","left-text":"修改密码","right-text":t.rightTxt,"left-arrow":""},on:{"click-right":t.onClickRight,"click-left":t.onClickLeft}}),t._v(" "),i("div",{staticClass:"pwd-main"},[1===t.step?i("div",[i("h3",[t._v("请输入原密码")]),t._v(" "),i("div",{staticClass:"pwd-desc"},[t._v("您的账号登陆密码")]),t._v(" "),i("van-cell-group",{attrs:{border:!1}},[i("van-field",{staticClass:"border",attrs:{"right-icon":"question-o",type:t.isClose1?"password":"text",placeholder:"请输入原密码"},on:{"click-right-icon":t.shiftStatus1},model:{value:t.oldPwd,callback:function(s){t.oldPwd=s},expression:"oldPwd"}},[i("van-icon",{staticClass:"iconfont",attrs:{slot:"right-icon","class-prefix":"icon",name:t.isClose1?"biyan":"ai-eye"},slot:"right-icon"})],1)],1)],1):t._e(),t._v(" "),2===t.step?i("div",[i("h3",[t._v("请输入新密码")]),t._v(" "),i("div",{staticClass:"pwd-desc"},[t._v("请设置您的新密码用于您的账号登录")]),t._v(" "),i("van-cell-group",{attrs:{border:!1}},[i("van-field",{staticClass:"border",attrs:{"right-icon":"question-o",type:t.isClose2?"password":"text","error-message":t.errorMsg1,placeholder:"请输入新密码"},on:{"click-right-icon":t.shiftStatus2},model:{value:t.newPwd,callback:function(s){t.newPwd=s},expression:"newPwd"}},[i("van-icon",{staticClass:"iconfont",attrs:{slot:"right-icon","class-prefix":"icon",name:t.isClose2?"biyan":"ai-eye"},slot:"right-icon"})],1)],1),t._v(" "),i("pwd-rule")],1):t._e(),t._v(" "),3===t.step?i("div",[i("h3",[t._v("请再次输入新密码进行确认")]),t._v(" "),i("div",{staticClass:"pwd-desc"},[t._v("确认您的新密码")]),t._v(" "),i("van-cell-group",{attrs:{border:!1}},[i("van-field",{staticClass:"border",attrs:{"right-icon":"question-o",type:t.isClose3?"password":"text","error-message":t.errorMsg2,placeholder:"请再次输入新密码"},on:{"click-right-icon":t.shiftStatus3},model:{value:t.confirmPwd,callback:function(s){t.confirmPwd=s},expression:"confirmPwd"}},[i("van-icon",{staticClass:"iconfont",attrs:{slot:"right-icon","class-prefix":"icon",name:t.isClose3?"biyan":"ai-eye"},slot:"right-icon"})],1)],1),t._v(" "),i("pwd-rule")],1):t._e()])],1)},staticRenderFns:[]};var C=i("VU/8")(w,p,!1,function(t){i("+x/F")},"data-v-dd1520e2",null);s.default=C.exports}});