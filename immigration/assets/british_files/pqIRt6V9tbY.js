/*!CK:2182678677!*//*1456254048,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["susd9"]); }

__d('InsightsInfoTip.react',['Image.react','React','ReactDOM','Tooltip','cx','ix','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=i.PropTypes,p=i.createClass({displayName:'InsightsInfoTip',propTypes:{alignH:o.oneOf(['center','left','right']),position:o.oneOf(['above','below','left','right'])},getDefaultProps:function(){return {alignH:'right',position:'above'};},_setTooltip:function(){k.set(j.findDOMNode(this.refs.root),j.findDOMNode(this.refs.tooltip).cloneNode(true),this.props.position,this.props.alignH);},componentDidMount:function(){this._setTooltip();},componentDidUpdate:function(q){this._setTooltip();},componentWillUnmount:function(){if(this.refs.icon)k.remove(j.findDOMNode(this.refs.icon));},render:function(){var q=m('/images/hubble/info/info-flat_s.png'),r=null;if(!this.props.noImage)r=i.createElement(h,{className:"_5j1g",src:q,ref:'icon'});var s=n("_5j1f",this.props.className);return (i.createElement('span',{className:s,ref:'root'},this.props.children,r,i.createElement('div',{className:"_5j1h"},i.createElement('div',{className:"_5j1i",ref:'tooltip'},this.props.tip))));}});f.exports=p;},null);
__d('LineClamp.react',['React','Locale','cx','getVendorPrefixedName','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=h.PropTypes,n=k('lineClamp'),o=h.createClass({displayName:'LineClamp',propTypes:{customEllipsis:m.node,disableNative:m.bool,lineHeight:m.number,lines:m.number.isRequired},_renderEllipsis:function(){var p;if(this.props.lineHeight)p={bottom:this.props.lineHeight+'px'};var q=i.isRTL()?"_4ik3 _2k5c":"_4ik3 _2k5d";return (h.createElement('div',{style:p,className:q,key:'ellipsis'},this.props.customEllipsis?this.props.customEllipsis:'\u2026'));},render:function(){var p=!!n&&!this.props.disableNative,q=l(this.props.className,"_4ik4"+(p?' '+"_4ik5":'')),r=this.props.children,s={};if(this.props.lineHeight)s={height:this.props.lineHeight*this.props.lines,lineHeight:this.props.lineHeight+'px'};if(p){s[n]=this.props.lines;}else{q=l(q,'clearfix');r=[h.createElement('div',{className:"_4ik6",key:'inner'},r),this._renderEllipsis()];}return (h.createElement('div',{className:q,style:s},r));}});f.exports=o;},null);
__d("art/dom/shadow",["art/core/class","art/dom/dummy","art/dom/native"],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();f.exports=h(i,j,{dummy_inject:i.prototype.inject,dummy_injectBefore:i.prototype.injectBefore,dummy_eject:i.prototype.eject,native_inject:j.prototype.inject,native_injectBefore:j.prototype.injectBefore,native_eject:j.prototype.eject,inject:function(k){this.dummy_inject(k);this.native_inject(k);return this;},injectBefore:function(k){this.dummy_injectBefore(k);this.native_injectBefore(k);return this;},eject:function(){this.dummy_eject();this.native_eject();return this;}});},null);
__d("d3/time/format-en_US",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h="%a %b %e %X %Y",i="%m/%d/%Y",j="%H:%M:%S",k=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],m=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];g._formatDateTime=h;g._formatDate=i;g._formatTime=j;g._days=k;g._dayAbbreviations=l;g._months=m;g._monthAbbreviations=n;},null);
__d('PrettyNum',['InsightsNumUtils'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k,l,m){'use strict';this.radix=k||10;if(typeof j==='number'){this.value=j;}else this.value=parseFloat(j,this.radix);this.effective=m||2;if(l||l===0){this.precision=l;}else this.precision=this.$PrettyNum1();}i.prototype.$PrettyNum1=function(){'use strict';if(this.value%1===0)return 0;var j=parseInt(this.value,this.radix);if(j!==0)return 2;var k=Math.abs(this.value%1);return this.effective-Math.ceil(Math.log(k)/Math.log(this.radix));};i.prototype.toPretty=function(){'use strict';if(this.precision===0){var j=parseInt(this.value,10);return this.longForm?h.prettyInt(j):h.prettyShortInt(j);}else return h.prettyFloat(parseFloat(this.value.toFixed(this.precision),this.radix));};i.prototype.toPrettyPercentage=function(){'use strict';var j=this.value*100;return h.prettyFloat(parseFloat(j.toFixed(this.precision),this.radix))+'%';};i.prototype.toPrettyCurrency=function(j){'use strict';if(this.precision===0){return h.prettyShortCurrency(j,this.value);}else return h.prettyCurrency(j,this.value);};i.prototype.enableLongForm=function(){'use strict';this.longForm=true;return this;};f.exports=i;},null);
__d('ReactTransitionEvents',['ExecutionEnvironment'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i={transitionend:{transition:'transitionend',WebkitTransition:'webkitTransitionEnd',MozTransition:'mozTransitionEnd',OTransition:'oTransitionEnd',msTransition:'MSTransitionEnd'},animationend:{animation:'animationend',WebkitAnimation:'webkitAnimationEnd',MozAnimation:'mozAnimationEnd',OAnimation:'oAnimationEnd',msAnimation:'MSAnimationEnd'}},j=[];function k(){var o=document.createElement('div'),p=o.style;if(!('AnimationEvent' in window))delete i.animationend.animation;if(!('TransitionEvent' in window))delete i.transitionend.transition;for(var q in i){var r=i[q];for(var s in r)if(s in p){j.push(r[s]);break;}}}if(h.canUseDOM)k();function l(o,p,q){o.addEventListener(p,q,false);}function m(o,p,q){o.removeEventListener(p,q,false);}var n={addEndEventListener:function(o,p){if(j.length===0){window.setTimeout(p,0);return;}j.forEach(function(q){l(o,q,p);});},removeEndEventListener:function(o,p){if(j.length===0)return;j.forEach(function(q){m(o,q,p);});}};f.exports=n;},null);
__d('ReactCSSTransitionGroupChild',['React','ReactDOM','CSSCore','ReactTransitionEvents','onlyChild'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=17,n=h.createClass({displayName:'ReactCSSTransitionGroupChild',propTypes:{name:h.PropTypes.oneOfType([h.PropTypes.string,h.PropTypes.shape({enter:h.PropTypes.string,leave:h.PropTypes.string,active:h.PropTypes.string}),h.PropTypes.shape({enter:h.PropTypes.string,enterActive:h.PropTypes.string,leave:h.PropTypes.string,leaveActive:h.PropTypes.string,appear:h.PropTypes.string,appearActive:h.PropTypes.string})]).isRequired,appear:h.PropTypes.bool,enter:h.PropTypes.bool,leave:h.PropTypes.bool,appearTimeout:h.PropTypes.number,enterTimeout:h.PropTypes.number,leaveTimeout:h.PropTypes.number},transition:function(o,p,q){var r=i.findDOMNode(this);if(!r){if(p)p();return;}var s=this.props.name[o]||this.props.name+'-'+o,t=this.props.name[o+'Active']||s+'-active',u=null,v=function(w){if(w&&w.target!==r)return;clearTimeout(u);j.removeClass(r,s);j.removeClass(r,t);k.removeEndEventListener(r,v);if(p)p();};j.addClass(r,s);this.queueClass(t);if(q){u=setTimeout(v,q);this.transitionTimeouts.push(u);}else k.addEndEventListener(r,v);},queueClass:function(o){this.classNameQueue.push(o);if(!this.timeout)this.timeout=setTimeout(this.flushClassNameQueue,m);},flushClassNameQueue:function(){if(this.isMounted())this.classNameQueue.forEach(j.addClass.bind(j,i.findDOMNode(this)));this.classNameQueue.length=0;this.timeout=null;},componentWillMount:function(){this.classNameQueue=[];this.transitionTimeouts=[];},componentWillUnmount:function(){if(this.timeout)clearTimeout(this.timeout);this.transitionTimeouts.forEach(function(o){clearTimeout(o);});},componentWillAppear:function(o){if(this.props.appear){this.transition('appear',o,this.props.appearTimeout);}else o();},componentWillEnter:function(o){if(this.props.enter){this.transition('enter',o,this.props.enterTimeout);}else o();},componentWillLeave:function(o){if(this.props.leave){this.transition('leave',o,this.props.leaveTimeout);}else o();},render:function(){return l(this.props.children);}});f.exports=n;},null);
__d('ReactTransitionChildMapping',['flattenChildren'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i={getChildMapping:function(j){if(!j)return j;return h(j);},mergeChildMappings:function(j,k){j=j||{};k=k||{};function l(t){if(k.hasOwnProperty(t)){return k[t];}else return j[t];}var m={},n=[];for(var o in j)if(k.hasOwnProperty(o)){if(n.length){m[o]=n;n=[];}}else n.push(o);var p,q={};for(var r in k){if(m.hasOwnProperty(r))for(p=0;p<m[r].length;p++){var s=m[r][p];q[m[r][p]]=l(s);}q[r]=l(r);}for(p=0;p<n.length;p++)q[n[p]]=l(n[p]);return q;}};f.exports=i;},null);
__d('ReactTransitionGroup',['React','ReactTransitionChildMapping','Object.assign','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=h.createClass({displayName:'ReactTransitionGroup',propTypes:{component:h.PropTypes.any,childFactory:h.PropTypes.func},getDefaultProps:function(){return {component:'span',childFactory:k.thatReturnsArgument};},getInitialState:function(){return {children:i.getChildMapping(this.props.children)};},componentWillMount:function(){this.currentlyTransitioningKeys={};this.keysToEnter=[];this.keysToLeave=[];},componentDidMount:function(){var m=this.state.children;for(var n in m)if(m[n])this.performAppear(n);},componentWillReceiveProps:function(m){var n=i.getChildMapping(m.children),o=this.state.children;this.setState({children:i.mergeChildMappings(o,n)});var p;for(p in n){var q=o&&o.hasOwnProperty(p);if(n[p]&&!q&&!this.currentlyTransitioningKeys[p])this.keysToEnter.push(p);}for(p in o){var r=n&&n.hasOwnProperty(p);if(o[p]&&!r&&!this.currentlyTransitioningKeys[p])this.keysToLeave.push(p);}},componentDidUpdate:function(){var m=this.keysToEnter;this.keysToEnter=[];m.forEach(this.performEnter);var n=this.keysToLeave;this.keysToLeave=[];n.forEach(this.performLeave);},performAppear:function(m){this.currentlyTransitioningKeys[m]=true;var n=this.refs[m];if(n.componentWillAppear){n.componentWillAppear(this._handleDoneAppearing.bind(this,m));}else this._handleDoneAppearing(m);},_handleDoneAppearing:function(m){var n=this.refs[m];if(n.componentDidAppear)n.componentDidAppear();delete this.currentlyTransitioningKeys[m];var o=i.getChildMapping(this.props.children);if(!o||!o.hasOwnProperty(m))this.performLeave(m);},performEnter:function(m){this.currentlyTransitioningKeys[m]=true;var n=this.refs[m];if(n.componentWillEnter){n.componentWillEnter(this._handleDoneEntering.bind(this,m));}else this._handleDoneEntering(m);},_handleDoneEntering:function(m){var n=this.refs[m];if(n.componentDidEnter)n.componentDidEnter();delete this.currentlyTransitioningKeys[m];var o=i.getChildMapping(this.props.children);if(!o||!o.hasOwnProperty(m))this.performLeave(m);},performLeave:function(m){this.currentlyTransitioningKeys[m]=true;var n=this.refs[m];if(n.componentWillLeave){n.componentWillLeave(this._handleDoneLeaving.bind(this,m));}else this._handleDoneLeaving(m);},_handleDoneLeaving:function(m){var n=this.refs[m];if(n.componentDidLeave)n.componentDidLeave();delete this.currentlyTransitioningKeys[m];var o=i.getChildMapping(this.props.children);if(o&&o.hasOwnProperty(m)){this.performEnter(m);}else this.setState(function(p){var q=j({},p.children);delete q[m];return {children:q};});},render:function(){var m=[];for(var n in this.state.children){var o=this.state.children[n];if(o)m.push(h.cloneElement(this.props.childFactory(o),{ref:n,key:n}));}return h.createElement(this.props.component,this.props,m);}});f.exports=l;},null);
__d('ReactCSSTransitionGroup',['React','Object.assign','ReactTransitionGroup','ReactCSSTransitionGroupChild'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();function l(n){var o='transition'+n+'Timeout',p='transition'+n;return function(q){if(q[p])if(q[o]==null){return new Error(o+' wasn\'t supplied to ReactCSSTransitionGroup: '+'this can cause unreliable animations and won\'t be supported in '+'a future version of React. See '+'https://fb.me/react-animation-transition-group-timeout for more '+'information.');}else if(typeof q[o]!=='number')return new Error(o+' must be a number (in milliseconds)');};}var m=h.createClass({displayName:'ReactCSSTransitionGroup',propTypes:{transitionName:k.propTypes.name,transitionAppear:h.PropTypes.bool,transitionEnter:h.PropTypes.bool,transitionLeave:h.PropTypes.bool,transitionAppearTimeout:l('Appear'),transitionEnterTimeout:l('Enter'),transitionLeaveTimeout:l('Leave')},getDefaultProps:function(){return {transitionAppear:false,transitionEnter:true,transitionLeave:true};},_wrapChild:function(n){return h.createElement(k,{name:this.props.transitionName,appear:this.props.transitionAppear,enter:this.props.transitionEnter,leave:this.props.transitionLeave,appearTimeout:this.props.transitionAppearTimeout,enterTimeout:this.props.transitionEnterTimeout,leaveTimeout:this.props.transitionLeaveTimeout},n);},render:function(){return h.createElement(j,i({},this.props,{childFactory:this._wrapChild}));}});f.exports=m;},null);
__d('Sprite.art',['getStyleProperty'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i={},j=null,k=/url\(([^)]*)\)/;function l(o){var p=o.match(k);return p?p[1]:null;}function m(o){return parseFloat(o)||null;}function n(o){var p=o?o.split(' '):[];if(p.length!=2)return [null,null];return [m(p[0]),m(p[1])];}f.exports={get:function(o){if(o in i)return i[o];if(!j)j=document.createElement('i');j.className=o;document.body.appendChild(j);var p=h(j,'backgroundImage'),q=h(j,'backgroundSize'),r=h(j,'backgroundPosition'),s=h(j,'width'),t=h(j,'height');document.body.removeChild(j);return i[o]={boxSize:[m(s),m(t)],imageSize:n(q),offset:n(r),uri:l(p)};}};},null);
__d('FeedPlaceHolderStory.react',['Locale','React','XUICard.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=i.createClass({displayName:'FeedPlaceHolderStory',render:function(){return (i.createElement(j,{className:l("_2iwp",this.props.className)},i.createElement('div',{className:(h.isRTL()?"direction_rtl":'')+(' '+"_2iwo")},i.createElement('div',{className:"_2iwq"},i.createElement('div',{className:"_2iwr"}),i.createElement('div',{className:"_2iws"}),i.createElement('div',{className:"_2iwt"}),i.createElement('div',{className:"_2iwu"}),i.createElement('div',{className:"_2iwv"}),i.createElement('div',{className:"_2iww"}),i.createElement('div',{className:"_2iwx"}),i.createElement('div',{className:"_2iwy"}),i.createElement('div',{className:"_2iwz"}),i.createElement('div',{className:"_2iw-"}),i.createElement('div',{className:"_2iw_"}),i.createElement('div',{className:"_2ix0"})))));}});f.exports=m;},null);
__d('DialogExpansion',['Animation','DialogPosition','LoadingDialogDimensions','Style'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=400,m=100;function n(o){'use strict';this._dialog=o;this._fixedTopMargin=o.getFixedTopPosition();this._ignoreFixedTopInShortViewport=o.shouldIgnoreFixedTopInShortViewport();}n.prototype.enable=function(){'use strict';this._subscription=this._dialog.subscribe('aftershow',this._onAfterShow.bind(this));};n.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};n.prototype.setTargetWidth=function(o){'use strict';this._targetWidth=o;};n.prototype._onAfterShow=function(){'use strict';this._outer=this._dialog.getContentRoot();this._inner=this._dialog.getInnerContent();if(isNaN(parseInt(k.get(this._inner,'height'),10)))return;var o=this._getWidth(),p=j.HEIGHT,q=i.calculateTopMargin(o,p);k.apply(this._inner,{opacity:'0',width:this._dialog.getWidth()+'px'});k.apply(this._outer,{width:o+'px',height:p+'px',marginTop:q+'px',overflow:'hidden'});setTimeout(function(){var r=parseInt(this._dialog.getWidth(),10);if(this._targetWidth)r=this._targetWidth;var s=parseInt(k.get(this._inner,'height'),10),t=i.calculateTopMargin(r,s,this._fixedTopMargin,this._ignoreFixedTopInShortViewport);this._growThenFade(r,s,t);}.bind(this),100);};n.prototype._growThenFade=function(o,p,q){'use strict';new h(this._outer).to('width',o).to('height',p).to('marginTop',q).duration(l).ease(h.ease.both).ondone(this._fadeIn.bind(this)).go();};n.prototype._fadeIn=function(){'use strict';k.set(this._outer,'overflow','');k.set(this._outer,'height','');new h(this._inner).from('opacity',0).to('opacity',1).ondone(function(){this._dialog.inform('afterexpand');}.bind(this)).duration(m).go();};n.prototype._getWidth=function(){'use strict';return j.WIDTH;};f.exports=n;},null);
__d('VideoAssetInsightsReachCard.react',['React','VideoAssetInsightsBar.react','VideoAssetInsightsMetricsNavigationBar.react','cx','fbt','intlNumUtils'],function a(b,c,d,e,f,g,h,i,j,k,l,m){var n,o;if(c.__markCompiled)c.__markCompiled();n=babelHelpers.inherits(p,h.Component);o=n&&n.prototype;p.prototype.$VideoAssetInsightsReachCard1=function(){'use strict';return ([{rawValue:this.props.data.reachOrganic.value,formattedValue:this.props.data.reachOrganic.text,label:l._("Organic")},{rawValue:this.props.data.reachPaid.value,formattedValue:this.props.data.reachPaid.text,label:l._("Paid")}]);};p.prototype.render=function(){'use strict';var q=this.props.data.reachOrganic.value+this.props.data.reachPaid.value;return (h.createElement('div',{className:"_2qos"},h.createElement(j,{metric:p.LABEL,value:m.formatNumberWithThousandDelimiters(this.props.data.reach.value),onBackClick:this.props.onBackClick,siblings:this.props.siblings,onSiblingClick:this.props.onSiblingClick,currentCardKey:this.props.currentCardKey}),h.createElement('div',{className:"_2qot _2qou"},h.createElement(i,{data:this.$VideoAssetInsightsReachCard1(),totalValue:q}))));};function p(){'use strict';n.apply(this,arguments);}p.LABEL=l._("People Reached");f.exports=p;},null);
__d('VideoPublishingStateIndicator.react',['React','cx','joinClasses','Tooltip.react'],function a(b,c,d,e,f,g,h,i,j,k){var l,m;if(c.__markCompiled)c.__markCompiled();l=babelHelpers.inherits(n,h.Component);m=l&&l.prototype;n.prototype.$VideoPublishingStateIndicator1=function(){'use strict';var o=j(this.props.className,"_5yje"+(this.props.state==='expiring'?' '+"_5yjf":'')+(this.props.state==='expired'?' '+"_5yju":'')+(this.props.state==='published'?' '+"_5yjz":'')+(this.props.state==='scheduled'?' '+"_5yj_":'')+(this.props.state==='draft'?' '+"_5yk6":'')+(this.props.state==='mixed'?' '+"_5yk7":''));return o;};n.prototype.render=function(){'use strict';var o=this.$VideoPublishingStateIndicator1();return (h.createElement(k,{tooltip:this.props.toolTip,position:'left',alignH:'left'},h.createElement('span',{className:o,onMouseEnter:this.props.onHover})));};function n(){'use strict';l.apply(this,arguments);}f.exports=n;},null);