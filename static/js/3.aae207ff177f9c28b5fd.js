webpackJsonp([3],{"3X7g":function(t,i,e){"use strict";(function(t){i.b=c,i.a=function(t){c(function(){c(t)})};var s=e("o69Z"),n=Date.now();var a=s.f?t:window,o=a.requestAnimationFrame||function(t){var i=Date.now(),e=Math.max(0,16-(i-n)),s=setTimeout(t,e);return n=i+e,s};a.cancelAnimationFrame||a.clearTimeout;function c(t){return o.call(a,t)}}).call(i,e("DuR2"))},AK14:function(t,i){},CIzQ:function(t,i,e){t.exports=e.p+"static/img/guide3.c098e77.png"},JsOw:function(t,i){},NVjv:function(t,i,e){t.exports=e.p+"static/img/guide2.b72788f.png"},W0KU:function(t,i){},joY4:function(t,i,e){"use strict";i.a=function(t,i,e){return Math.min(Math.max(t,i),e)}},vNRw:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s,n=e("bOdI"),a=e.n(n),o=(e("nsZj"),e("W0KU"),e("RfZZ")),c=e("o69Z"),r=Object(c.b)("swipe-item"),h=r[0],u=r[1],l=h({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(){var t=arguments[0],i=this.$parent,e=i.vertical,s=i.computedWidth,n=i.computedHeight,a={width:s+"px",height:e?n+"px":"100%",transform:"translate"+(e?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:u(),style:a,on:Object(o.a)({},this.$listeners)},[this.slots()])}}),d=(e("3Lne"),e("SSsa")),f=(e("JsOw"),e("RP/J")),v=e("vwLT"),p=e("5Fm4"),m=e("3X7g"),g=e("joY4"),w=Object(c.b)("swipe"),b=w[0],C=w[1],y=b({mixins:[v.a,Object(p.a)(function(t,i){t(window,"resize",this.onResize,!0),i?this.initialize():this.clear()})],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return(t={})[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(f.c)(t,!0),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count;return t?this.loop?Object(g.a)(i+t,-1,e):Object(g.a)(i+t,0,e-1):i},getTargetOffset:function(t,i){var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var s=Math.round(i-e);return this.loop||(s=Object(g.a)(s,this.minOffset,0)),s},move:function(t){var i=t.pace,e=void 0===i?0:i,s=t.offset,n=void 0===s?0:s,a=t.emitChange,o=this.loop,c=this.count,r=this.active,h=this.swipes,u=this.trackSize,l=this.minOffset;if(!(c<=1)){var d=this.getTargetActive(e),f=this.getTargetOffset(d,n);if(o){if(h[0]){var v=f<l;h[0].offset=v?u:0}if(h[c-1]){var p=f>0;h[c-1].offset=p?-u:0}}this.active=d,this.offset=f,a&&d!==r&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(m.a)(function(){var s;s=e.loop&&t===e.count?0===e.active?0:t:t%e.count,e.move({pace:s-e.active,emitChange:!0}),i.immediate?Object(m.a)(function(){e.swiping=!1}):e.swiping=!1})},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(m.a)(function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()})},i))},renderIndicator:function(){var t=this,i=this.$createElement,e=this.count,s=this.activeIndicator,n=this.slots("indicator");return n||(this.showIndicators&&e>1?i("div",{class:C("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map(function(e,n){return i("i",{class:C("indicator",{active:n===s}),style:n===s?t.indicatorStyle:null})})]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:C()},[t("div",{ref:"track",style:this.trackStyle,class:C("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.renderIndicator()])}}),O=e("GKmE"),T=e("xgl3"),x=e.n(T),z=e("NVjv"),j=e.n(z),S=e("CIzQ"),_=e.n(S),I={components:(s={},a()(s,y.name,y),a()(s,d.a.name,d.a),a()(s,l.name,l),s),data:function(){return{guide1:x.a,guide2:j.a,guide3:_.a}},methods:{toIndexPage:function(){Object(O.b)(),this.$router.push({path:"/manage/index",query:{}})}},created:function(){}},P={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"guide"},[e("van-swipe",{staticClass:"guide-group",attrs:{loop:!1}},[e("van-swipe-item",{staticClass:"guide-item"},[e("img",{staticClass:"guide-item-img",attrs:{src:t.guide1}}),t._v(" "),e("p",{staticClass:"guide-desc"},[t._v("沟通")]),t._v(" "),e("p",[t._v("随时随地")])]),t._v(" "),e("van-swipe-item",{staticClass:"guide-item"},[e("img",{staticClass:"guide-item-img",attrs:{src:t.guide2}}),t._v(" "),e("p",{staticClass:"guide-desc"},[t._v("协作")]),t._v(" "),e("p",[t._v("无处不在")])]),t._v(" "),e("van-swipe-item",{staticClass:"guide-item"},[e("img",{staticClass:"guide-item-img",attrs:{src:t.guide3}}),t._v(" "),e("p",{staticClass:"guide-desc"},[t._v("C-me会议 全新体验")]),t._v(" "),e("van-button",{staticClass:"guide-btn",on:{click:t.toIndexPage}},[t._v("开始使用")])],1)],1)],1)},staticRenderFns:[]};var $=e("VU/8")(I,P,!1,function(t){e("AK14")},"data-v-4cbc8588",null);i.default=$.exports},xgl3:function(t,i,e){t.exports=e.p+"static/img/guide1.cd89ec9.png"}});
//# sourceMappingURL=3.aae207ff177f9c28b5fd.js.map