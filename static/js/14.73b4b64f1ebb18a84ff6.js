webpackJsonp([14],{"4rJS":function(t,e){},dP3a:function(t,e){},vxu6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("eqfM");var a,o=n("/QYm"),i=n("bOdI"),r=n.n(i),s=(n("k3b4"),n("+2ln")),c=(n("nsZj"),n("nOtf"),n("4rJS"),n("o69Z")),d=n("Vj2t"),m=Object(c.b)("radio"),l=m[0],u=m[1],v=l({mixins:[Object(d.a)({bem:u,role:"radio",parent:"vanRadio"})],computed:{currentValue:{get:function(){return this.parent?this.parent.value:this.value},set:function(t){(this.parent||this).$emit("input",t)}},checked:function(){return this.currentValue===this.name}},methods:{toggle:function(){this.currentValue=this.name}}}),f=n("1SJR"),h=Object(c.b)("radio-group"),p=h[0],_=h[1],b=p({mixins:[Object(f.b)("vanRadio")],props:{value:null,disabled:Boolean,checkedColor:String,iconSize:[Number,String]},watch:{value:function(t){this.$emit("change",t)}},render:function(){return(0,arguments[0])("div",{class:_(),attrs:{role:"radiogroup"}},[this.slots()])}}),g=(n("FO5P"),n("woHG")),C=(n("3Lne"),n("SSsa")),k=(n("Ny/I"),n("7Tnr")),S=(n("MY4N"),n("0zAV")),j=(n("i0mo"),n("Hkar")),w=n("hCGe"),O={components:(a={},r()(a,j.a.name,j.a),r()(a,S.a.name,S.a),r()(a,k.a.name,k.a),r()(a,C.a.name,C.a),r()(a,g.a.name,g.a),r()(a,b.name,b),r()(a,v.name,v),r()(a,s.a.name,s.a),a),data:function(){return{descShow:!1,personShow:!1,person:"",startEnd:"",description:"",toConfirm:"",confirmId:"",option:"1",form:{theme:"",property:"",creator:"",hostDepartmentId:"",roomName:"",date:"",startTime:"",endTime:"",inside:"",outside:""}}},created:function(){this.initData()},methods:{confirmFn:function(){var t=this,e={meetingId:this.confirmId,status:Number(this.option),description:this.description,changeUserId:this.person};Object(w.b)(e).then(function(e){e.success?(Object(o.a)("提交成功"),t.$router.isBack=!0,t.$router.go(-1)):Object(o.a)(e.message)})},onClickLeft:function(){this.$router.isBack=!0,this.$router.go(-1)},selectPerson:function(){},radioChange:function(t){switch(t){case"1":this.descShow=!1;break;case"2":this.descShow=!0}},handleTime:function(){var t=this.form.start.substr(0,10),e=this.form.end.substr(0,10),n=this.form.start.substr(11,5),a=this.form.end.substr(11,5);this.startEnd=t===e?t+" "+n+"-"+a:""},handleJoiner:function(t){return t.reduce(function(t,e){return t+","+e.joiner},"").substr(1)},initData:function(){var t=this,e=this.$route.query,n=e.overallId,a=void 0===n?"":n,i=e.meetingId,r=void 0===i?"":i,s=e.toConfirm,c=void 0===s?"":s;if(this.toConfirm=c,a||r){this.confirmId=r;var d={overallId:a,meetingId:r};Object(w.c)(d).then(function(e){if(e.success){var n=e.data.overallMeeting,a=n.theme,i=n.startTime,r=n.endTime,s=n.creator,c=n.roomName;t.form.theme=a,t.form.start=i,t.form.end=r,t.form.creator=s,t.form.roomName=c,t.form.inside=t.handleJoiner(e.data.innerJoiners),t.form.outside=t.handleJoiner(e.data.outerJoiners),t.handleTime()}else Object(o.a)(e.message)})}}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"attend-container attend-detail"},[n("van-nav-bar",{attrs:{fixed:"",border:!1,"left-text":"待参加会议","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",{staticClass:"attend-detail-top"},[n("h2",[t._v(t._s(t.form.theme)+" ")]),t._v(" "),n("div",{staticClass:"attend-detail-top-item"},[n("van-icon",{attrs:{name:"clock-o"}}),t._v(" "),n("span",[t._v("时间:")]),t._v(" "),t.startEnd?n("span",[t._v(t._s(t.startEnd)+" ")]):n("span",[t._v(t._s(t.form.start)+"~"+t._s(t.form.end)+" ")])],1),t._v(" "),n("div",{staticClass:"attend-detail-top-item"},[n("van-icon",{attrs:{name:"wap-home-o"}}),t._v(" "),n("span",[t._v("会议室:")]),t._v(" "),n("span",[t._v(t._s(t.form.roomName)+" ")])],1)]),t._v(" "),n("div",{staticClass:"attend-detail-bottom"},[n("div",{staticClass:"attend-detail-bottom-main"},[n("h4",[t._v("内部参会人员")]),t._v(" "),n("div",[t._v(t._s(t.form.inside)+" ")]),t._v(" "),n("van-divider"),t._v(" "),t.toConfirm?n("van-radio-group",{staticClass:"attend-detail-options",on:{change:t.radioChange},model:{value:t.option,callback:function(e){t.option=e},expression:"option"}},[n("van-radio",{attrs:{name:"1"}},[t._v("参加")]),t._v(" "),n("van-radio",{attrs:{name:"2"}},[t._v("拒绝")])],1):t._e(),t._v(" "),t.toConfirm?n("van-cell-group",{attrs:{border:!1}},[t.descShow?n("van-field",{attrs:{rows:"2",autosize:"",type:"textarea",placeholder:"请输入备注"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}):t._e(),t._v(" "),t.personShow?n("van-field",{attrs:{readonly:"",placeholder:"请选择待参加人员"},on:{click:t.selectPerson},model:{value:t.person,callback:function(e){t.person=e},expression:"person"}}):t._e()],1):t._e(),t._v(" "),t.toConfirm?n("div",{staticClass:"attend-detail-bottom-submit"},[n("van-button",{staticClass:"common-btn",attrs:{round:""},on:{click:t.confirmFn}},[t._v("提交")])],1):t._e()],1)])],1)},staticRenderFns:[]};var x=n("VU/8")(O,I,!1,function(t){n("dP3a")},"data-v-0b4359e4",null);e.default=x.exports}});