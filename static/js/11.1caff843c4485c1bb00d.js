webpackJsonp([11],{QOcI:function(e,t){},ZvbC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a=n("bOdI"),c=n.n(a),s=(n("k3b4"),n("+2ln")),o=(n("3Lne"),n("SSsa")),r=(n("FO5P"),n("woHG")),l={components:(i={},c()(i,r.a.name,r.a),c()(i,o.a.name,o.a),c()(i,s.a.name,s.a),i),created:function(){var e={meetingId:"",initialize:function(){document.addEventListener("deviceready",e.onDeviceReady,!1)},onDeviceReady:function(){var e=this;cicdi.plugins.meeting.initSDK(function(){document.getElementById("createMeetingBtn").addEventListener("click",e.createMeeting)},function(){alert("error")},{npsUrl:"http://175.102.132.82:8018/nps_x1/",npsSlaveUrl:"http://175.102.132.82:8018/nps_x1/",account:"67000101",nickname:"hahaha",appKey:"62be9552972140c5b77aafaedbfa3229",password:"123456"})},createMeeting:function(){cicdi.plugins.meeting.createMeeting(function(t){e.meetingId=t},function(){alert(1)},{topic:"部门例会",meetingType:1})}};e.initialize()}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"meeting"},[n("div",{staticClass:"meeting-row"},[n("div",{staticClass:"meeting-col"},[n("van-icon",{staticClass:"iconfont",attrs:{size:"2rem",color:"#fff","class-prefix":"icon",name:"jishitaolun"}}),e._v(" "),n("div",[n("van-button",{attrs:{id:"createMeetingBtn",color:"#999",round:"",type:"default"}},[e._v("召开会议")])],1)],1),e._v(" "),n("div",{staticClass:"meeting-col"},[n("van-icon",{staticClass:"iconfont",attrs:{size:"2rem",color:"#FFFFFF","class-prefix":"icon",name:"jiarujiazu"}}),e._v(" "),n("div",[n("van-button",{attrs:{color:"#999",round:"",type:"default"}},[e._v("加入会议")])],1)],1)]),e._v(" "),n("div",{staticClass:"meeting-row"},[n("div",{staticClass:"meeting-col"},[n("van-icon",{staticClass:"iconfont",attrs:{size:"2rem",color:"#FFFFFF","class-prefix":"icon",name:"yuyue"}}),e._v(" "),n("div",[n("van-button",{attrs:{color:"#999",round:"",type:"default"}},[e._v("预约会议")])],1)],1),e._v(" "),n("div",{staticClass:"meeting-col"},[n("van-icon",{staticClass:"iconfont",attrs:{size:"2rem",color:"#FFFFFF","class-prefix":"icon",name:"meeting-management-my-meeting"}}),e._v(" "),n("div",[n("van-button",{attrs:{color:"#999",round:"",type:"default"}},[e._v("我的会议")])],1)],1)])])},staticRenderFns:[]};var v=n("VU/8")(l,d,!1,function(e){n("QOcI")},"data-v-5d5f7a27",null);t.default=v.exports}});
//# sourceMappingURL=11.1caff843c4485c1bb00d.js.map