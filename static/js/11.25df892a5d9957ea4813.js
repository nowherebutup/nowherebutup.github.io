webpackJsonp([11],{JsOw:function(t,i){},W0KU:function(t,i){},lvRj:function(t,i){},vNRw:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s,n=e("bOdI"),o=e.n(n),a=(e("nsZj"),e("W0KU"),e("RfZZ")),c=e("o69Z"),h=Object(c.b)("swipe-item"),r=h[0],u=h[1],l=r({data:function(){return{offset:0}},beforeCreate:function(){this.$parent.swipes.push(this)},destroyed:function(){this.$parent.swipes.splice(this.$parent.swipes.indexOf(this),1)},render:function(){var t=arguments[0],i=this.$parent,e=i.vertical,s=i.computedWidth,n=i.computedHeight,o={width:s+"px",height:e?n+"px":"100%",transform:"translate"+(e?"Y":"X")+"("+this.offset+"px)"};return t("div",{class:u(),style:o,on:Object(a.a)({},this.$listeners)},[this.slots()])}}),f=(e("3Lne"),e("SSsa")),d=(e("JsOw"),e("RP/J")),v=e("vwLT"),p=e("5Fm4"),m=e("3X7g"),g=e("joY4"),w=Object(c.b)("swipe"),b=w[0],y=w[1],O=b({mixins:[v.a,Object(p.a)(function(t,i){t(window,"resize",this.onResize,!0),i?this.initialize():this.clear()})],props:{width:Number,height:Number,autoplay:Number,vertical:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:Number,default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:Number,default:0},showIndicators:{type:Boolean,default:!0}},data:function(){return{computedWidth:0,computedHeight:0,offset:0,active:0,deltaX:0,deltaY:0,swipes:[],swiping:!1}},watch:{swipes:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t?this.autoPlay():this.clear()}},computed:{count:function(){return this.swipes.length},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t,i=this.vertical?"height":"width",e=this.vertical?"width":"height";return(t={})[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":"",t.transitionDuration=(this.swiping?0:this.duration)+"ms",t.transform="translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)",t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){var t=this.$el.getBoundingClientRect();return(this.vertical?t.height:t.width)-this.size*this.count}},methods:{initialize:function(t){if(void 0===t&&(t=this.initialSwipe),clearTimeout(this.timer),this.$el){var i=this.$el.getBoundingClientRect();this.computedWidth=this.width||i.width,this.computedHeight=this.height||i.height}this.swiping=!0,this.active=t,this.offset=this.count>1?-this.size*this.active:0,this.swipes.forEach(function(t){t.offset=0}),this.autoPlay()},onResize:function(){this.initialize(this.activeIndicator)},onTouchStart:function(t){this.touchable&&(this.clear(),this.swiping=!0,this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(d.c)(t,!0),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){if(this.delta&&this.isCorrectDirection){var t=this.vertical?this.offsetY:this.offsetX;this.move({pace:t>0?this.delta>0?-1:1:0,emitChange:!0})}this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count;return t?this.loop?Object(g.a)(i+t,-1,e):Object(g.a)(i+t,0,e-1):i},getTargetOffset:function(t,i){var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var s=Math.round(i-e);return this.loop||(s=Object(g.a)(s,this.minOffset,0)),s},move:function(t){var i=t.pace,e=void 0===i?0:i,s=t.offset,n=void 0===s?0:s,o=t.emitChange,a=this.loop,c=this.count,h=this.active,r=this.swipes,u=this.trackSize,l=this.minOffset;if(!(c<=1)){var f=this.getTargetActive(e),d=this.getTargetOffset(f,n);if(a){if(r[0]){var v=d<l;r[0].offset=v?u:0}if(r[c-1]){var p=d>0;r[c-1].offset=p?-u:0}}this.active=f,this.offset=d,o&&f!==h&&this.$emit("change",this.activeIndicator)}},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.swiping=!0,this.resetTouchStatus(),this.correctPosition(),Object(m.b)(function(){var s;s=e.loop&&t===e.count?0===e.active?0:t:t%e.count,e.move({pace:s-e.active,emitChange:!0}),i.immediate?Object(m.b)(function(){e.swiping=!1}):e.swiping=!1})},correctPosition:function(){this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i&&this.count>1&&(this.clear(),this.timer=setTimeout(function(){t.swiping=!0,t.resetTouchStatus(),t.correctPosition(),Object(m.b)(function(){t.swiping=!1,t.move({pace:1,emitChange:!0}),t.autoPlay()})},i))},renderIndicator:function(){var t=this,i=this.$createElement,e=this.count,s=this.activeIndicator,n=this.slots("indicator");return n||(this.showIndicators&&e>1?i("div",{class:y("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map(function(e,n){return i("i",{class:y("indicator",{active:n===s}),style:n===s?t.indicatorStyle:null})})]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:y()},[t("div",{ref:"track",style:this.trackStyle,class:y("track"),on:{touchstart:this.onTouchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[this.slots()]),this.renderIndicator()])}}),C=e("GKmE"),S={components:(s={},o()(s,O.name,O),o()(s,f.a.name,f.a),o()(s,l.name,l),s),methods:{toIndexPage:function(){Object(C.h)("firstInstall","yes"),this.$router.push({path:"/login",query:{}})}},created:function(){}},T={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"guide"},[i("van-swipe",{staticClass:"guide-group",attrs:{"show-indicators":!1,loop:!1}},[i("van-swipe-item",{staticClass:"guide-item"},[i("div",{staticClass:"guide-item-img1"})]),this._v(" "),i("van-swipe-item",{staticClass:"guide-item"},[i("div",{staticClass:"guide-item-img2"})]),this._v(" "),i("van-swipe-item",{staticClass:"guide-item"},[i("div",{staticClass:"guide-item-img3"},[i("van-button",{staticClass:"common-btn guide-btn",attrs:{round:""},on:{click:this.toIndexPage}},[this._v("立即体验")])],1)])],1)],1)},staticRenderFns:[]};var j=e("VU/8")(S,T,!1,function(t){e("lvRj")},"data-v-c8234f1a",null);i.default=j.exports}});