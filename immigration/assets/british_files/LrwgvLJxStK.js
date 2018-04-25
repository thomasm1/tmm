/*!CK:3676453128!*//*1456275913,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Hm9wh"]); }

__d('ChatCloseButton.react',['Link.react','ReactComponentWithPureRenderMixin','React','TrackingNodes','fbt','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=j.PropTypes,o=j.createClass({displayName:'ChatCloseButton',mixins:[i],propTypes:{onClick:n.func,onKeyUp:n.func,onMouseDown:n.func,active:n.bool},getDefaultProps:function(){return {active:false};},render:function(){var p=k.getTrackingInfo(k.types.CLOSE_BUTTON),q=l._("Press Esc to close"),r=l._("Close tab");return (j.createElement(h,{'aria-label':this.props.active?q:r,className:m(this.props.className,'close','button'),'data-ft':p,'data-hover':'tooltip','data-tooltip-content':this.props.active?q:r,'data-tooltip-position':'above',onClick:this.props.onClick,onKeyUp:this.props.onKeyUp,onMouseDown:this.props.onMouseDown}));}});f.exports=o;},null);
__d('ChatTabPlaceholder.react',['ChatCloseButton.react','ImmutableObject','Keys','MercuryThreadInfo','MercuryThreadTitle.react','ReactComponentWithPureRenderMixin','React','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p=n.PropTypes,q=n.createClass({displayName:'ChatTabPlaceholder',mixins:[m],propTypes:{isRaised:p.bool.isRequired,onClose:p.func.isRequired,onLower:p.func.isRequired,onRaise:p.func.isRequired,thread:p.instanceOf(i),viewer:p.string.isRequired},render:function(){var r=this.props,s=r.isRaised,t=r.thread,u=r.viewer,v=t&&k.isNewEmptyLocalThread(t);return (n.createElement('div',null,n.createElement('span',{className:"fbNubButton",onClick:this._handleNubClick}),s?n.createElement('div',{className:"fbNubFlyout fbDockChatTabFlyout _16bz"},n.createElement('div',{className:"fbNubFlyoutTitlebar titlebar",onMouseDown:this._handleTitlebarMouseDown},n.createElement(h,{className:"_2koq",onClick:this._handleCloseClick,onKeyUp:this._handleCloseKeyUp,onMouseDown:function(w){return w.stopPropagation();}}),t?n.createElement('div',{className:'titlebarLabel'},n.createElement('h4',{className:'titlebarTextWrapper'},n.createElement(l,{className:'titlebarText',isNewThread:v,thread:t,useAndSeparator:true,useShortName:!t.is_canonical,viewer:u}))):null),n.createElement('div',{className:"fbNubFlyoutBody"})):null));},_handleCloseClick:function(r){r.preventDefault();r.stopPropagation();this.props.onClose();},_handleCloseKeyUp:function(r){r.keyCode===j.RETURN&&this._handleCloseClick(r);},_handleNubClick:function(r){r.stopPropagation();this.props.onRaise();},_handleTitlebarMouseDown:function(r){r.stopPropagation();this.props.onLower();}});f.exports=q;},null);
__d('ChatTabPlaceholderContainer.react',['ChatTabActions','ChatTabPlaceholder.react','ChatTabViewEvents','MercuryThreads','ReactComponentWithPureRenderMixin','React','StoreAndPropBasedStateMixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){'use strict';if(c.__markCompiled)c.__markCompiled();var o=m.PropTypes,p=m.createClass({displayName:'ChatTabPlaceholderContainer',mixins:[l,n(k)],propTypes:{isRaised:o.bool.isRequired,threadID:o.string.isRequired,viewer:o.string.isRequired},statics:{calculateState:function(q){var r=k.getForFBID(q.viewer);return {thread:r.getOrFetch(q.threadID)};}},render:function(){return (m.createElement(i,{isRaised:this.props.isRaised,onClose:this._handleClose,onLower:this._handleLower,onRaise:this._handleRaise,thread:this.state.thread,viewer:this.props.viewer}));},_handleClose:function(){h.closeTab(this.props.threadID);},_handleLower:function(){h.lowerTab(this.props.threadID);},_handleRaise:function(){j.inform('nub-activated',this.props.threadID);}});f.exports=p;},null);