/*!CK:890180980!*//*1456327950,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["TxIcT"]); }

__d('P2PMessageSellerConfirmationDialog.react',['Image.react','P2PButton.react','P2PDialog.react','P2PDialogBody.react','P2PDialogFooter.react','P2PListRow.react','P2PText.react','React','XUICloseButton.react','cx','fbt','ix'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){'use strict';if(c.__markCompiled)c.__markCompiled();var t=o.PropTypes,u=o.createClass({displayName:'P2PMessageSellerConfirmationDialog',propTypes:{onCancel:t.func.isRequired,onPay:t.func.isRequired},render:function(){return (o.createElement(j,{width:480},o.createElement(k,{className:"_4-ft"},o.createElement(p,{className:"_4-fu",onClick:this.props.onCancel}),o.createElement(m,{offsetRight:16,offsetBottom:0},o.createElement(h,{height:100,src:s('/images/p2p/owl.png'),width:105}),o.createElement('div',null,o.createElement(n,{className:"_3-94",size:'large',type:'primary',weight:'bold'},r._("Connect with the seller before you pay")),o.createElement(n,{size:'medium',type:'primary'},r._("Make sure to discuss price and logistics with the seller before you send payment for this item."))))),o.createElement(l,null,o.createElement(i,{label:r._("Start Conversation"),onClick:this.props.onCancel}),o.createElement(i,{label:r._("Continue to Pay"),onClick:this.props.onPay,use:'confirm'}))));}});f.exports=u;},null);