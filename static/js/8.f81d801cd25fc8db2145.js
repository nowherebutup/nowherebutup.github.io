webpackJsonp([8],{"7oBh":function(t,i,e){!function(){function i(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function e(t,e){var s=function(t,e){var s=i(t)*i(e);if(0===s)return 0;var n=function(t,i){return t.x*i.x+t.y*i.y}(t,e)/s;return n>1&&(n=1),Math.acos(n)}(t,e);return function(t,i){return t.x*i.y-i.x*t.y}(t,e)>0&&(s*=-1),180*s/Math.PI}var s=function(t){this.handlers=[],this.el=t};function n(t,i){var e=new s(t);return e.add(i),e}s.prototype.add=function(t){this.handlers.push(t)},s.prototype.del=function(t){t||(this.handlers=[]);for(var i=this.handlers.length;i>=0;i--)this.handlers[i]===t&&this.handlers.splice(i,1)},s.prototype.dispatch=function(){for(var t=0,i=this.handlers.length;t<i;t++){var e=this.handlers[t];"function"==typeof e&&e.apply(this.el,arguments)}};var h=function(t,i){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var e=function(){};this.rotate=n(this.element,i.rotate||e),this.touchStart=n(this.element,i.touchStart||e),this.multipointStart=n(this.element,i.multipointStart||e),this.multipointEnd=n(this.element,i.multipointEnd||e),this.pinch=n(this.element,i.pinch||e),this.swipe=n(this.element,i.swipe||e),this.tap=n(this.element,i.tap||e),this.doubleTap=n(this.element,i.doubleTap||e),this.longTap=n(this.element,i.longTap||e),this.singleTap=n(this.element,i.singleTap||e),this.pressMove=n(this.element,i.pressMove||e),this.twoFingerPressMove=n(this.element,i.twoFingerPressMove||e),this.touchMove=n(this.element,i.touchMove||e),this.touchEnd=n(this.element,i.touchEnd||e),this.touchCancel=n(this.element,i.touchCancel||e),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};h.prototype={start:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var e=this.preV;if(t.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var s={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};e.x=s.x,e.y=s.y,this.pinchStartLen=i(e),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}},move:function(t){if(t.touches){var s=this.preV,n=t.touches.length,h=t.touches[0].pageX,a=t.touches[0].pageY;if(this.isDoubleTap=!1,n>1){var o=t.touches[1].pageX,r=t.touches[1].pageY,l={x:t.touches[1].pageX-h,y:t.touches[1].pageY-a};null!==s.x&&(this.pinchStartLen>0&&(t.zoom=i(l)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=e(l,s),this.rotate.dispatch(t,this.element)),s.x=l.x,s.y=l.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(h-this.x2+o-this.sx2)/2,t.deltaY=(a-this.y2+r-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=o,this.sy2=r}else{if(null!==this.x2){t.deltaX=h-this.x2,t.deltaY=a-this.y2;var c=Math.abs(this.x1-this.x2),p=Math.abs(this.y1-this.y2);(c>10||p>10)&&(this._preventTap=!0)}else t.deltaX=0,t.deltaY=0;this.pressMove.dispatch(t,this.element)}this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=h,this.y2=a,n>1&&t.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var i=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){i.swipe.dispatch(t,i.element)},0)):(this.tapTimeout=setTimeout(function(){i._preventTap||i.tap.dispatch(t,i.element),i.isDoubleTap&&(i.doubleTap.dispatch(t,i.element),i.isDoubleTap=!1)},0),i.isDoubleTap||(i.singleTapTimeout=setTimeout(function(){i.singleTap.dispatch(t,i.element)},250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancelAll:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)},cancel:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,i,e,s){return Math.abs(t-i)>=Math.abs(e-s)?t-i>0?"Left":"Right":e-s>0?"Up":"Down"},on:function(t,i){this[t]&&this[t].add(i)},off:function(t,i){this[t]&&this[t].del(i)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}},t.exports=h}()},CtSy:function(t,i){},d3fv:function(t,i,e){!function(){var i=e("7oBh"),s=e("vxC+");"function"!=typeof s&&(s=s.default);var n=function(t){if(this.renderTo=document.body,this.canvas=document.createElement("canvas"),this.output=t.output,this.width=t.width,this.height=t.height,this.canvas.width=t.width*this.output,this.canvas.height=t.height*this.output,this.circle=t.circle,t.width!==t.height&&t.circle)throw"can't set circle to true when width is not equal to height";this.ctx=this.canvas.getContext("2d"),this.croppingBox=document.createElement("div"),this.croppingBox.style.visibility="hidden",this.croppingBox.className=t.className||"",this.cover=document.createElement("canvas"),this.type=t.type||"png",this.cover.width=window.innerWidth,this.cover.height=window.innerHeight,this.cover_ctx=this.cover.getContext("2d"),this.img=document.createElement("img"),"http"===t.image_src.substring(0,4).toLowerCase()&&(this.img.crossOrigin="anonymous"),this.cancel=t.cancel,this.ok=t.ok,this.ok_text=t.ok_text||"ok",this.cancel_text=t.cancel_text||"cancel",this.croppingBox.appendChild(this.img),this.croppingBox.appendChild(this.cover),this.renderTo.appendChild(this.croppingBox),this.img.onload=this.init.bind(this),this.img.src=t.image_src,this.cancel_btn=document.createElement("a"),this.cancel_btn.innerHTML=this.cancel_text,this.ok_btn=document.createElement("a"),this.ok_btn.innerHTML=this.ok_text,this.croppingBox.appendChild(this.ok_btn),this.croppingBox.appendChild(this.cancel_btn),this.alloyFingerList=[]};n.prototype={init:function(){this.img_width=this.img.naturalWidth,this.img_height=this.img.naturalHeight,s(this.img,!0);var t=window.innerWidth/this.img_width;window.innerHeight,this.img_height;this.initScale=t,this.originScale=t,this.img.scaleX=this.img.scaleY=t,this.first=1;var e=this;this.alloyFingerList.push(new i(this.croppingBox,{multipointStart:function(t){var i=(t.touches[0].pageX+t.touches[1].pageX)/2,s=(t.touches[0].pageY+t.touches[1].pageY)/2,n=e.img.getBoundingClientRect(),h=i-(n.left+n.width/2),a=s-(n.top+n.height/2),o=e.img.originX,r=e.img.originY;e.img.originX=h/e.img.scaleX,e.img.originY=a/e.img.scaleY,e.img.translateX+=h-o*e.img.scaleX,e.img.translateY+=a-r*e.img.scaleX,1==e.first&&(e.img.scaleX=e.img.scaleY=1.1*e.initScale,++e.first),e.initScale=e.img.scaleX},pinch:function(t){var i=e.img.getBoundingClientRect(),s=(document.documentElement.clientHeight-e.height)/2,n=t.zoom,h=(i.width*n-i.width)/2,a=(i.height-i.height*n)/2;e.initScale*n<=1.6&&e.initScale*n>=e.originScale&&h>=i.left&&-h<=i.right-e.width&&a<=s-i.top&&a<=i.bottom-s-e.height&&(e.img.scaleX=e.img.scaleY=e.initScale*n)},pressMove:function(t){var i=e.img.getBoundingClientRect(),s=(document.documentElement.clientHeight-e.height)/2;s-i.top-t.deltaY>=0&&i.bottom+t.deltaY-s>=e.height&&(e.img.translateY+=t.deltaY);var n=(document.documentElement.clientWidth-e.width)/2;i.left+t.deltaX<=n&&i.right+t.deltaX-n>=e.width&&(e.img.translateX+=t.deltaX),t.preventDefault()}})),this.alloyFingerList.push(new i(this.cancel_btn,{touchStart:function(){e.cancel_btn.style.backgroundColor="#ffffff",e.cancel_btn.style.color="#3B4152"},tap:this._cancel.bind(this)})),this.alloyFingerList.push(new i(this.ok_btn,{touchStart:function(){e.ok_btn.style.backgroundColor="#2bcafd",e.ok_btn.style.color="#ffffff"},tap:this._ok.bind(this)})),this.alloyFingerList.push(new i(document,{touchEnd:function(){e.cancel_btn.style.backgroundColor="#ffffff",e.ok_btn.style.backgroundColor="#2bcafd"}})),this.renderCover(),this.setStyle()},_cancel:function(){var t=this;setTimeout(function(){t.croppingBox&&t._css(t.croppingBox,{display:"none"})},300),this.cancel()},_ok:function(){this.crop();var t=this;setTimeout(function(){t.croppingBox&&t._css(t.croppingBox,{display:"none"})},300),this.ok(this.canvas.toDataURL("image/"+this.type),this.canvas)},renderCover:function(){var t=this.cover_ctx,i=this.cover.width,e=this.cover.height,s=this.width,n=this.height;t.save(),t.fillStyle="black",t.globalAlpha=.7,t.fillRect(0,0,this.cover.width,this.cover.height),t.restore(),t.save(),t.globalCompositeOperation="destination-out",t.beginPath(),this.circle?t.arc(i/2,e/2,s/2-4,0,2*Math.PI,!1):t.rect(i/2-s/2,e/2-n/2,s,n),t.fill(),t.restore(),t.save(),t.beginPath(),t.strokeStyle="white",this.circle?t.arc(i/2,e/2,s/2-4,0,2*Math.PI,!1):t.rect(i/2-s/2,e/2-n/2,s,n),t.stroke()},setStyle:function(){this._css(this.cover,{position:"fixed",zIndex:"100",left:"0px",top:"0px"}),this._css(this.croppingBox,{color:"white",textAlign:"center",fontSize:"18px",textDecoration:"none",visibility:"visible"}),this._css(this.img,{position:"fixed",zIndex:"99",left:"50%",top:window.innerHeight/2+"px",marginLeft:this.img_width/-2+"px",marginTop:this.img_height/-2+"px"}),this._css(this.ok_btn,{position:"fixed",zIndex:"101",width:"100px",right:"50px",lineHeight:"40px",height:"40px",bottom:"20px",borderRadius:"2px",color:"#ffffff",backgroundColor:"#2bcafd"}),this._css(this.cancel_btn,{position:"fixed",zIndex:"101",width:"100px",height:"40px",lineHeight:"40px",left:"50px",bottom:"20px",borderRadius:"2px",color:"#3B4152",backgroundColor:"#ffffff"})},crop:function(){this.calculateRect(),this.ctx.drawImage(this.img,this.crop_rect[0],this.crop_rect[1],this.crop_rect[2],this.crop_rect[3],0,0,this.crop_rect[2]*this.img.scaleX*this.output,this.crop_rect[3]*this.img.scaleY*this.output)},calculateRect:function(){var t=this.img.getBoundingClientRect(),i=window.innerWidth/2-this.width/2,e=window.innerHeight/2-this.height/2,s=[i,e,this.width+i,this.height+e],n=[t.left,t.top,t.width+t.left,t.height+t.top],h=this.getOverlap.apply(this,s.concat(n)),a=(h[0]-n[0])/this.img.scaleX,o=(h[1]-n[1])/this.img.scaleY,r=h[2]/this.img.scaleX,l=h[3]/this.img.scaleY;a<0&&(a=0),o<0&&(o=0),a+r>this.img_width&&(r=this.img_width-a),o+l>this.img_height&&(l=this.img_height-o),this.crop_rect=[a,o,r,l]},getOverlap:function(t,i,e,s,n,h,a,o){if(e<n||s<h||t>a||i>o)return[0,0,0,0];var r=Math.max(t,n),l=Math.max(i,h);return[r,l,Math.min(e,a)-r,Math.min(s,o)-l]},_css:function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t.style[e]=i[e])},destroy:function(){for(var t in this.alloyFingerList.forEach(function(t){t.destroy()}),this.renderTo.removeChild(this.croppingBox),this)delete this[t]}},t.exports=n}()},fq8e:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});e("eqfM");var s,n=e("/QYm"),h=e("mvHQ"),a=e.n(h),o=e("bOdI"),r=e.n(o),l=(e("k3b4"),e("+2ln")),c=(e("mMXg"),e("qYlo")),p=(e("Ny/I"),e("7Tnr")),u=(e("FO5P"),e("woHG")),d=e("SIH0"),m=e.n(d),g=e("GKmE"),f=e("5V3A"),v=e("d3fv"),y=e.n(v),x={components:(s={},r()(s,u.a.name,u.a),r()(s,p.a.name,p.a),r()(s,c.a.name,c.a),r()(s,l.a.name,l.a),s),data:function(){return{url:m.a,showSheet:!1,userInfo:{}}},created:function(){this.initData()},methods:{initEvt:function(){var t=this;document.querySelector("#file").addEventListener("change",function(){t.showSheet=!1;var i=this.files[0],e=new FileReader;e.onload=function(){var s=e.result;new y.a({image_src:s,width:350,height:350,output:1,ok_text:"剪切",cancel_text:"取消",ok:function(e,s){s.toBlob(function(i){var e=new FormData;e.append("file",i),t.uploadAvatar(e)},i.type||"image/png")},cancel:function(){}})},e.readAsDataURL(i)})},uploadAvatar:function(t){var i=this;t.append("username",this.userInfo.userName),t.append("password",Object(g.a)(this.userInfo.passWord)),t.append("name",this.userInfo.name),t.append("phone",this.userInfo.phone),t.append("email",this.userInfo.email),t.append("deptId",this.userInfo.deptId),t.append("post",this.userInfo.post),t.append("job",this.userInfo.job),t.append("staffNum",this.userInfo.staffnum),t.append("adaptiveId",this.userInfo.adaptiveId),t.append("userId",this.userInfo.userId),Object(f.c)(t).then(function(t){if(t.success){var e=t.data.bean,s=JSON.parse(Object(g.d)("userInfo")),h={orgName:s.orgName,deptName:s.deptName,name:s.name,avatar:e,phone:s.phone,userId:s.userId,token:s.token};Object(g.h)("userInfo",a()(h)),i.url=e}else Object(n.a)(t.message||"更换头像失败")})},convertImageToCanvas:function(t){var i=document.createElement("canvas");return i.width=t.width,i.height=t.height,i.getContext("2d").drawImage(t,0,0),i},onClickLeft:function(){this.$router.isBack=!0,this.$router.go(-1)},onClickRight:function(){var t=this;this.showSheet=!0,setTimeout(function(){t.initEvt()},0)},initData:function(){var t=this,i=JSON.parse(Object(g.d)("userInfo")),e=i.avatar,s=i.userId;this.url=Object(g.f)(e)||m.a,Object(f.a)({userId:s,searchText:""}).then(function(i){t.userInfo=i.data.rows[0]})}}},w={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"avatar"},[e("van-nav-bar",{attrs:{fixed:"","left-text":"个人信息","left-arrow":""},on:{"click-right":t.onClickRight,"click-left":t.onClickLeft}},[e("van-icon",{attrs:{slot:"right",name:"weapp-nav"},slot:"right"})],1),t._v(" "),e("img",{staticClass:"avatar-img",attrs:{src:t.url,alt:""}}),t._v(" "),e("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.showSheet,callback:function(i){t.showSheet=i},expression:"showSheet"}},[e("div",{staticClass:"avatar-options"},[e("div",{staticClass:"avatar-select border"},[e("span",[t._v("从本地选择图片")]),t._v(" "),e("input",{attrs:{id:"file",type:"file",name:"image",accept:"image/*"}})])])])],1)},staticRenderFns:[]};var T=e("VU/8")(x,w,!1,function(t){e("CtSy")},"data-v-38dcd4b7",null);i.default=T.exports},"vxC+":function(t,i,e){!function(){var i=.017453292519943295,e=function(t,i,e,s,n,h,a,o,r,l,c,p,u,d,m,g){this.elements=window.Float32Array?new Float32Array(16):[];var f=this.elements;f[0]=void 0!==t?t:1,f[4]=i||0,f[8]=e||0,f[12]=s||0,f[1]=n||0,f[5]=void 0!==h?h:1,f[9]=a||0,f[13]=o||0,f[2]=r||0,f[6]=l||0,f[10]=void 0!==c?c:1,f[14]=p||0,f[3]=u||0,f[7]=d||0,f[11]=m||0,f[15]=void 0!==g?g:1};e.prototype={set:function(t,i,e,s,n,h,a,o,r,l,c,p,u,d,m,g){var f=this.elements;return f[0]=t,f[4]=i,f[8]=e,f[12]=s,f[1]=n,f[5]=h,f[9]=a,f[13]=o,f[2]=r,f[6]=l,f[10]=c,f[14]=p,f[3]=u,f[7]=d,f[11]=m,f[15]=g,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},multiplyMatrices:function(t,i){var e=t.elements,s=this.elements,n=e[0],h=e[4],a=e[8],o=e[12],r=e[1],l=e[5],c=e[9],p=e[13],u=e[2],d=e[6],m=e[10],g=e[14],f=e[3],v=e[7],y=e[11],x=e[15],w=i[0],T=i[1],b=i[2],_=i[3],M=i[4],X=i[5],Y=i[6],k=i[7],S=i[8],C=i[9],E=i[10],I=i[11],L=i[12],B=i[13],P=i[14],D=i[15];return s[0]=n*w+h*M+a*S+o*L,s[4]=n*T+h*X+a*C+o*B,s[8]=n*b+h*Y+a*E+o*P,s[12]=n*_+h*k+a*I+o*D,s[1]=r*w+l*M+c*S+p*L,s[5]=r*T+l*X+c*C+p*B,s[9]=r*b+l*Y+c*E+p*P,s[13]=r*_+l*k+c*I+p*D,s[2]=u*w+d*M+m*S+g*L,s[6]=u*T+d*X+m*C+g*B,s[10]=u*b+d*Y+m*E+g*P,s[14]=u*_+d*k+m*I+g*D,s[3]=f*w+v*M+y*S+x*L,s[7]=f*T+v*X+y*C+x*B,s[11]=f*b+v*Y+y*E+x*P,s[15]=f*_+v*k+y*I+x*D,this},epsilon:function(t){return Math.abs(t)<1e-10?0:t},_arrayWrap:function(t){return window.Float32Array?new Float32Array(t):t},appendTransform:function(t,e,s,n,h,a,o,r,l,c,p,u,d,m){var g=o*i,f=this.epsilon(Math.cos(g)),v=this.epsilon(Math.sin(g)),y=r*i,x=this.epsilon(Math.cos(y)),w=this.epsilon(Math.sin(y)),T=l*i,b=this.epsilon(Math.cos(-1*T)),_=this.epsilon(Math.sin(-1*T));return this.multiplyMatrices(this,this._arrayWrap([1,0,0,t,0,f,v,e,0,-v,f,s,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([x,0,w,0,0,1,0,0,-w,0,x,0,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([b*n,_*h,0,0,-_*n,b*h,0,0,0,0,1*a,0,0,0,0,1])),(c||p)&&this.multiplyMatrices(this,this._arrayWrap([this.epsilon(Math.cos(c*i)),this.epsilon(Math.sin(c*i)),0,0,-1*this.epsilon(Math.sin(p*i)),this.epsilon(Math.cos(p*i)),0,0,0,0,1,0,0,0,0,1])),(u||d||m)&&(this.elements[12]-=u*this.elements[0]+d*this.elements[4]+m*this.elements[8],this.elements[13]-=u*this.elements[1]+d*this.elements[5]+m*this.elements[9],this.elements[14]-=u*this.elements[2]+d*this.elements[6]+m*this.elements[10]),this}};var s=function(t,i,e,s,n,h){return this.a=null==t?1:t,this.b=i||0,this.c=e||0,this.d=null==s?1:s,this.tx=n||0,this.ty=h||0,this};function n(t,i,e){Object.defineProperty(t,i,{get:function(){return this["_"+i]},set:function(t){this["_"+i]=t,e()}})}function h(t,i){if(!t.___mixCSS3Transform){var s,h=["translateX","translateY","translateZ","scaleX","scaleY","scaleZ","rotateX","rotateY","rotateZ","skewX","skewY","originX","originY","originZ"],a=(s=t,"object"==typeof HTMLElement?s instanceof HTMLElement:s&&"object"==typeof s&&null!==s&&1===s.nodeType&&"string"==typeof s.nodeName);i||h.push("perspective"),t.___mixCSS3Transform=!0,function(t,i,e){for(var s=0,h=i.length;s<h;s++)n(t,i[s],e)}(t,h,function(){var e=t.matrix3d.identity().appendTransform(t.translateX,t.translateY,t.translateZ,t.scaleX,t.scaleY,t.scaleZ,t.rotateX,t.rotateY,t.rotateZ,t.skewX,t.skewY,t.originX,t.originY,t.originZ),s=(i?"":"perspective("+t.perspective+"px) ")+"matrix3d("+Array.prototype.slice.call(e.elements).join(",")+")";a?t.style.transform=t.style.msTransform=t.style.OTransform=t.style.MozTransform=t.style.webkitTransform=s:t.transform=s}),t.matrix3d=new e,i||(t.perspective=500),t.scaleX=t.scaleY=t.scaleZ=1,t.translateX=t.translateY=t.translateZ=t.rotateX=t.rotateY=t.rotateZ=t.skewX=t.skewY=t.originX=t.originY=t.originZ=0}}s.prototype={identity:function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},appendTransform:function(t,e,s,n,h,a,o,r,l){if(h%360)var c=h*i,p=Math.cos(c),u=Math.sin(c);else p=1,u=0;return a||o?(a*=i,o*=i,this.append(Math.cos(o),Math.sin(o),-Math.sin(a),Math.cos(a),t,e),this.append(p*s,u*s,-u*n,p*n,0,0)):this.append(p*s,u*s,-u*n,p*n,t,e),(r||l)&&(this.tx-=r*this.a+l*this.c,this.ty-=r*this.b+l*this.d),this},append:function(t,i,e,s,n,h){var a=this.a,o=this.b,r=this.c,l=this.d;return this.a=t*a+i*r,this.b=t*o+i*l,this.c=e*a+s*r,this.d=e*o+s*l,this.tx=n*a+h*r+this.tx,this.ty=n*o+h*l+this.ty,this},initialize:function(t,i,e,s,n,h){return this.a=t,this.b=i,this.c=e,this.d=s,this.tx=n,this.ty=h,this},setValues:function(t,i,e,s,n,h){return this.a=null==t?1:t,this.b=i||0,this.c=e||0,this.d=null==s?1:s,this.tx=n||0,this.ty=h||0,this},copy:function(t){return this.setValues(t.a,t.b,t.c,t.d,t.tx,t.ty)}},h.getMatrix3D=function(t){var i={translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0,skewX:0,skewY:0,originX:0,originY:0,originZ:0,scaleX:1,scaleY:1,scaleZ:1};for(var s in t)t.hasOwnProperty(s)&&(i[s]=t[s]);return(new e).identity().appendTransform(i.translateX,i.translateY,i.translateZ,i.scaleX,i.scaleY,i.scaleZ,i.rotateX,i.rotateY,i.rotateZ,i.skewX,i.skewY,i.originX,i.originY,i.originZ).elements},h.getMatrix2D=function(t){var i={translateX:0,translateY:0,rotation:0,skewX:0,skewY:0,originX:0,originY:0,scaleX:1,scaleY:1};for(var e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return(new s).identity().appendTransform(i.translateX,i.translateY,i.scaleX,i.scaleY,i.rotation,i.skewX,i.skewY,i.originX,i.originY)},t.exports=h}()}});