webpackJsonp([7],{CDnw:function(t,e){},CnNl:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("bOdI"),c=n.n(i),o=(n("k3b4"),n("+2ln")),r=(n("nsZj"),n("nOtf"),n("px3J"),n("n/tq"),n("AA6R")),s=n.n(r),a=n("RfZZ"),l=n("o69Z"),h=n("rhik"),d=n("RP/J"),u=n("0zAV"),f=Object(l.b)("search"),v=f[0],p=f[1],b=f[2];function g(t,e,n,i){var c={attrs:i.data.attrs,on:Object(a.a)({},i.listeners,{keypress:function(t){13===t.keyCode&&(Object(d.c)(t),Object(h.a)(i,"search",e.value)),Object(h.a)(i,"keypress",t)}})},o=Object(h.b)(i);return delete o.attrs,t("div",s()([{class:p({"show-action":e.showAction}),style:{background:e.background}},o]),[t("div",{class:p("content",e.shape)},[function(){if(n.label||e.label)return t("div",{class:p("label")},[n.label?n.label():e.label])}(),t(u.a,s()([{attrs:{type:"search",border:!1,value:e.value,leftIcon:e.leftIcon,rightIcon:e.rightIcon,clearable:e.clearable},scopedSlots:{"left-icon":n["left-icon"],"right-icon":n["right-icon"]}},c]))]),function(){if(e.showAction)return t("div",{class:p("action"),attrs:{role:"button",tabindex:"0"},on:{click:function(){n.action||(Object(h.a)(i,"input",""),Object(h.a)(i,"cancel"))}}},[n.action?n.action():e.actionText||b("cancel")])}()])}g.props={value:String,label:String,rightIcon:String,actionText:String,showAction:Boolean,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},background:{type:String,default:"#fff"},leftIcon:{type:String,default:"search"}};var x,y=v(g),m=(n("FO5P"),n("woHG")),I=(n("gJIh"),n("1SJR")),k=n("V+2B"),O=Object(l.b)("index-anchor"),S=O[0],A=O[1],j=S({mixins:[Object(I.a)("vanIndexBar",{indexKey:"childrenIndex"})],props:{index:[Number,String]},data:function(){return{top:0,active:!1,position:"static"}},computed:{sticky:function(){return this.active&&this.parent.sticky},anchorStyle:function(){if(this.sticky)return{position:this.position,zIndex:""+this.parent.zIndex,transform:"translate3d(0, "+this.top+"px, 0)",color:this.parent.highlightColor}}},mounted:function(){this.height=this.$el.offsetHeight},methods:{scrollIntoView:function(){this.$el.scrollIntoView()}},render:function(){var t,e=arguments[0],n=this.sticky;return e("div",{style:{height:n?this.height+"px":null}},[e("div",{style:this.anchorStyle,class:[A({sticky:n}),(t={},t[k.a]=n,t)]},[this.slots("default")||this.index])])}}),T=(n("tAII"),n("vwLT")),C=n("5Fm4"),w=n("JOBW"),_=Object(l.b)("index-bar"),E=_[0],B=_[1],R=E({mixins:[T.a,Object(I.b)("vanIndexBar"),Object(C.a)(function(t){this.scroller||(this.scroller=Object(w.c)(this.$el)),t(this.scroller,"scroll",this.onScroll)})],props:{sticky:{type:Boolean,default:!0},zIndex:{type:Number,default:1},highlightColor:{type:String,default:k.f},stickyOffsetTop:{type:Number,default:0},indexList:{type:Array,default:function(){for(var t=[],e="A".charCodeAt(0),n=0;n<26;n++)t.push(String.fromCharCode(e+n));return t}}},data:function(){return{activeAnchorIndex:null}},computed:{highlightStyle:function(){var t=this.highlightColor;if(t)return{color:t}}},watch:{indexList:function(){this.$nextTick(this.onScroll)}},methods:{onScroll:function(){var t=this,e=Object(w.d)(this.scroller),n=this.getScrollerRect(),i=this.children.map(function(e){return{height:e.height,top:t.getElementTop(e.$el,n)}}),c=this.getActiveAnchorIndex(e,i);if(this.activeAnchorIndex=this.indexList[c],this.sticky){var o=0,r=!1;-1!==c&&(o=i[c].top-e,r=o<=0),this.children.forEach(function(e,i){i===c?(e.active=!0,e.position=r?"fixed":"relative",e.top=r?t.stickyOffsetTop+n.top:0):i===c-1?(e.active=!r,e.position="relative",e.top=e.$el.parentElement.offsetHeight-e.height):(e.active=!1,e.position="static")})}},getScrollerRect:function(){var t=this.scroller,e={top:0,left:0};return t.getBoundingClientRect&&(e=t.getBoundingClientRect()),e},getElementTop:function(t,e){var n=this.scroller;return n===window||n===document.body?Object(w.a)(t):t.getBoundingClientRect().top-e.top+Object(w.d)(n)},getActiveAnchorIndex:function(t,e){for(var n=this.children.length-1;n>=0;n--){if(t+(n>0?e[n-1].height:0)+this.stickyOffsetTop>=e[n].top)return n}return-1},onClick:function(t){this.scrollToElement(t.target)},onTouchMove:function(t){if(this.touchMove(t),"vertical"===this.direction){Object(d.c)(t);var e=t.touches[0],n=e.clientX,i=e.clientY,c=document.elementFromPoint(n,i);if(c){var o=c.dataset.index;this.touchActiveIndex!==o&&(this.touchActiveIndex=o,this.scrollToElement(c))}}},scrollToElement:function(t){var e=t.dataset.index;if(e){var n=this.children.filter(function(t){return String(t.index)===e});n[0]&&(n[0].scrollIntoView(),this.stickyOffsetTop&&Object(w.e)(Object(w.b)()-this.stickyOffsetTop),this.$emit("select",n[0].index))}},onTouchEnd:function(){this.active=null}},render:function(){var t=this,e=arguments[0],n=this.indexList.map(function(n){var i=n===t.activeAnchorIndex;return e("span",{class:B("index",{active:i}),style:i?t.highlightStyle:null,attrs:{"data-index":n}},[n])});return e("div",{class:B()},[e("div",{class:B("sidebar"),style:{zIndex:this.zIndex+1},on:{click:this.onClick,touchstart:this.touchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[n]),this.slots("default")])}}),$=n("SIH0"),J=n.n($),z={components:(x={},c()(x,R.name,R),c()(x,j.name,j),c()(x,m.a.name,m.a),c()(x,y.name,y),c()(x,o.a.name,o.a),x),data:function(){return{defaultAvatar:J.a,list:[{index:"A",children:["阿伟1","阿伟2","阿伟3","阿伟4","阿伟5"]},{index:"D",children:["大圣1","大圣2","大圣3","大圣4","大圣5","大圣6"]},{index:"T",children:["汤姆1","汤姆2","汤姆3","汤姆4","汤姆5","汤姆6","汤姆7","汤姆8","汤姆9"]},{index:"W",children:["王安石1","王安石2","王安石3","王安石4","王安石5","王安石6","王安石7"]}],search:""}},methods:{onSearch:function(){console.log(this.search)}}},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"address container"},[n("van-nav-bar",{attrs:{fixed:"",title:"通讯录"}}),t._v(" "),n("van-search",{staticClass:"address-search border",attrs:{placeholder:"请输入姓名","show-action":"",shape:"round",clearable:""},on:{clear:t.onSearch,search:t.onSearch},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[n("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])]),t._v(" "),n("div",{staticClass:"address-list"},[n("van-index-bar",{attrs:{sticky:!1}},t._l(t.list,function(e){return n("div",{key:e.index},[n("van-index-anchor",{attrs:{index:e.index}}),t._v(" "),t._l(e.children,function(i,c){return n("div",{key:e.index+c,staticClass:"address-item border"},[n("img",{attrs:{src:t.defaultAvatar}}),t._v(" "),n("span",[t._v(t._s(i))])])})],2)}),0)],1)],1)},staticRenderFns:[]};var L=n("VU/8")(z,V,!1,function(t){n("CDnw")},"data-v-2397d470",null);e.default=L.exports},gJIh:function(t,e){},"n/tq":function(t,e){},tAII:function(t,e){}});
//# sourceMappingURL=7.de3cf52d168d01be454c.js.map