webpackJsonp([7],{"+c27":function(t,e){},RA27:function(t,e){},cZ0s:function(t,e,i){"use strict";var n=i("nsZj"),s=(i.n(n),i("nOtf")),c=(i.n(s),i("+c27"));i.n(c)},fIxc:function(t,e,i){"use strict";var n=i("o69Z"),s=i("Vj2t"),c=Object(n.b)("checkbox"),a=c[0],h=c[1];e.a=a({mixins:[Object(s.a)({bem:h,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(t){this.parent?this.setParentValue(t):this.$emit("input",t)}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggle:function(t){var e=this;void 0===t&&(t=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout(function(){e.checked=t})},setParentValue:function(t){var e=this.parent,i=e.value.slice();if(t){if(e.max&&i.length>=e.max)return;-1===i.indexOf(this.name)&&(i.push(this.name),e.$emit("input",i))}else{var n=i.indexOf(this.name);-1!==n&&(i.splice(n,1),e.$emit("input",i))}}}})},vUyo:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=i("mvHQ"),c=i.n(s),a=(i("eqfM"),i("/QYm")),h=i("bOdI"),r=i.n(h),o=(i("FO5P"),i("woHG")),l=(i("cZ0s"),i("fIxc")),u=(i("XmAh"),i("il3B")),d=i("GKmE"),m={components:(n={},r()(n,u.a.name,u.a),r()(n,l.a.name,l.a),r()(n,o.a.name,o.a),n),methods:{onClickLeft:function(){this.$router.isBack=!0,this.$router.go(-1)},onClickRight:function(){var t=this;if(this.rightShow){if(this.list.every(function(t){return!t.checked}))return void Object(a.a)("请选择需要删除的会议");u.a.confirm({message:"确认删除所选项吗"}).then(function(){for(var e=t.list,i=e.length-1;i>=0;i--)e[i].checked&&e.splice(i,1);Object(d.h)("mineList_"+t.userId,c()(e)),t.rightShow=!t.rightShow}).catch(function(){t.list.forEach(function(t){t.checked=!1}),t.rightShow=!t.rightShow})}else this.rightShow=!this.rightShow},toMeetingDetail:function(t){this.rightShow?t.checked=!t.checked:this.$router.push({path:"/meeting/mine/detail",query:{id:t.id,theme:t.theme,duration:t.duration,date:t.date,type:t.type}})},initList:function(){if(Object(d.e)("mineList_"+this.userId)){var t=this.list;t.splice(0,t.length),JSON.parse(Object(d.d)("mineList_"+this.userId)).forEach(function(e){e.checked=!1,t.push(e)})}}},data:function(){return{userId:JSON.parse(Object(d.d)("userInfo")).userId,list:[],rightShow:!1}},created:function(){this.initList()}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container mine"},[i("van-nav-bar",{attrs:{fixed:"","left-text":"我的会议","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}},[i("span",{attrs:{slot:"right"},slot:"right"},[t.rightShow?i("span",{staticStyle:{color:"red"}},[t._v("删除")]):i("span",[t._v("批量删除")])])]),t._v(" "),t._l(t.list,function(e,n){return i("div",{key:n,staticClass:"mine-item",on:{click:function(i){return t.toMeetingDetail(e)}}},[i("div",{staticClass:"mine-item-left"},[1===e.type?i("div",{staticClass:"mine-item-blue"}):t._e(),t._v(" "),2===e.type?i("div",{staticClass:"mine-item-red"}):t._e(),t._v(" "),t.rightShow?i("van-checkbox",{attrs:{"checked-color":"#f00"},model:{value:e.checked,callback:function(i){t.$set(e,"checked",i)},expression:"item.checked"}}):t._e()],1),t._v(" "),i("div",{staticClass:"mine-item-right"},[i("div",{staticClass:"mine-item-title"},[t._v(t._s(e.theme)+" ")]),t._v(" "),i("div",{staticClass:"mine-item-id"},[t._v("会议ID "+t._s(e.id)+" ")]),t._v(" "),i("div",[t._v("会议日期 "+t._s(e.date)+" ")]),t._v(" "),1===e.type?i("div",{staticClass:"mine-item-tip1"},[t._v("即时会议")]):t._e(),t._v(" "),2===e.type?i("div",{staticClass:"mine-item-tip2"},[t._v("预约会议")]):t._e()])])}),t._v(" "),0===t.list.length?i("div",{staticClass:"mine-empty"},[t._v("\n    暂无会议~\n  ")]):t._e()],2)},staticRenderFns:[]};var v=i("VU/8")(m,f,!1,function(t){i("RA27")},"data-v-3dfa6990",null);e.default=v.exports}});