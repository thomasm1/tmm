/*!CK:3994151987!*//*1456258548,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["13446"]); }

__d('P2PSendMoneyDialogActionHeader.react',['React','cx','fbt'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'P2PSendMoneyDialogActionHeader',propTypes:{onPayClick:k.func.isRequired,onRequestClick:k.func.isRequired,isPaying:k.bool,isRequesting:k.bool},render:function(){var m=this.props.isPaying,n=this.props.isRequesting;return (h.createElement('div',{className:"_50cr"+(m?' '+"_50cv":'')+(n?' '+"_50cw":'')},h.createElement('div',{className:"_50cx"+(m?' '+"_50cy":''),onClick:function(){this.props.onPayClick();}.bind(this)},j._("Pay")),h.createElement('div',{className:"_50cx"+(n?' '+"_50cy":''),onClick:function(){this.props.onRequestClick();}.bind(this)},j._("Request")),h.createElement('div',{className:"_50c_"})));}});f.exports=l;},null);