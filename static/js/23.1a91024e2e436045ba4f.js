webpackJsonp([23],{"R/R4":function(e,t){},qgia:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i("eqfM");var a,n=i("/QYm"),s=(i("XmAh"),i("il3B")),o=i("bOdI"),c=i.n(o),d=(i("3Lne"),i("SSsa")),m=(i("FO5P"),i("woHG")),l=(i("Ny/I"),i("7Tnr")),r=i("irbH"),u=i("CgFE"),v={components:(a={},c()(a,l.a.name,l.a),c()(a,m.a.name,m.a),c()(a,d.a.name,d.a),a),mixins:[r.a],data:function(){return{hideCode:!0,meetingDetail:{meetingId:"12456233",type:0,theme:"",room:"",manager:"",date:"",time:"",duration:"",url:""}}},mounted:function(){this.initData()},methods:{showModal:function(){var e=this;s.a.confirm({message:"是否分享到微信好友"}).then(function(){Wechat.share({message:{title:"会议通知",description:"这是您待参加的一个视频会议:"+e.meetingDetail.theme,media:{type:Wechat.Type.IMAGE,image:e.meetingDetail.url}},scene:Wechat.Scene.SESSION},function(){},function(e){Object(n.a)("分享失败: "+e)})}).catch(function(){})},handleJoin:function(){var e=this;cicdi.plugins.meeting.joinMeeting(function(){},function(t){s.a.confirm({message:t||"加入会议失败,是否重新加入"}).then(function(){e.handleJoin()}).catch(function(){})},e.meetingDetail.meetingId)},onClickLeft:function(){this.$router.isBack=!0,this.$router.go(-1)},createCode:function(e){var t=this;cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE,e,function(e){t.meetingDetail.url=e.file},function(e){s.a.confirm({message:"生成二维码失败,是否重新生成"}).then(function(){t.createCode()}).catch(function(){})})},isShowCode:function(){var e=this.formatDate(Date.now(),"date"),t=1===this.meetingDetail.type,i=e!==this.meetingDetail.date;this.hideCode=t&&i},initData:function(){var e=this,t=this.$route.query.meetingId;Object(u.c)({meetingId:t}).then(function(t){if(t.success){var i=t.data;e.meetingDetail.meetingId=i.meetingId,e.meetingDetail.type=Number(i),e.meetingDetail.theme=i.theme,e.meetingDetail.duration=i.duration,e.meetingDetail.date=i.date.substr(0,10),e.meetingDetail.time=i.date.substr(11,5),e.isShowCode(),e.createCode(i.meetingId)}else Object(n.a)(t.message||"获取会议详情失败")})}}},g={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"container mine-detail"},[i("van-nav-bar",{attrs:{fixed:"","left-text":"预约详情","left-arrow":""},on:{"click-left":e.onClickLeft}}),e._v(" "),i("div",{staticClass:"mine-detail-main"},[i("div",{staticClass:"mine-detail-main-top"},[i("div",{staticClass:"detail-main-top-theme"},[e._v("\n        "+e._s(e.meetingDetail.theme)+"\n      ")]),e._v(" "),i("div",{staticClass:"detail-main-top-item"},[i("span",[e._v("会议日期:")]),e._v(" "),i("span",[e._v(e._s(e.meetingDetail.date))])]),e._v(" "),i("div",{staticClass:"detail-main-top-item"},[i("span",[e._v("开始时间:")]),e._v(" "),i("span",[e._v(e._s(e.meetingDetail.time))])]),e._v(" "),i("div",{staticClass:"detail-main-top-item"},[i("span",[e._v("会议时长:")]),e._v(" "),i("span",[e._v(e._s(e.meetingDetail.duration))])]),e._v(" "),i("div",{staticClass:"detail-main-top-item"},[i("span",[e._v("会议ID:")]),e._v(" "),i("span",[e._v(e._s(e.meetingDetail.meetingId))])]),e._v(" "),e.hideCode?e._e():i("div",{staticClass:"detail-main-top-btn"},[i("van-button",{staticClass:"common-btn",attrs:{round:""},on:{click:e.handleJoin}},[e._v("加入会议")])],1),e._v(" "),i("van-divider",{staticClass:"detail-main-top-divider",attrs:{dashed:!0}})],1),e._v(" "),e.hideCode?e._e():i("div",{staticClass:"mine-detail-main-bottom"},[i("img",{attrs:{src:e.meetingDetail.url,id:"share-img",alt:""}}),e._v(" "),i("div",[e._v("会议二维码")])])])],1)},staticRenderFns:[]};var h=i("VU/8")(v,g,!1,function(e){i("R/R4")},"data-v-196c328d",null);t.default=h.exports}});