/*!CK:1153713777!*//*1456275920,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["fG198"]); }

__d('MessengerContextBanner.react',['ImageBlock.react','immutable','MercuryParticipantsConstants','MercuryParticipantsImage.react','MercuryThreadImage.react','ReactComponentWithPureRenderMixin','React','MercuryShareAttachmentRenderLocations','cx','requireWeak'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){'use strict';if(c.__markCompiled)c.__markCompiled();var r=n.PropTypes,s;q('MessengerThreadImage.react',function(u){s=u;});var t=n.createClass({displayName:'MessengerContextBanner',mixins:[m],propTypes:{contactName:r.string,connectionContext:r.string,contextItems:r.arrayOf(r.string).isRequired,location:r.string.isRequired,participantIDs:r.arrayOf(r.string),participants:r.instanceOf(i.Map),thread:r.object,viewer:r.string.isRequired},render:function(){return (n.createElement(h,{className:"_llj"+(this.props.location===o.MESSENGER?' '+"_2eu-":'')+(this.props.location===o.CHAT?' '+"_2eu_":'')+(this.props.location===o.WEB_INBOX?' '+"_2ev0":''),spacing:'medium',style:this.props.style},this._renderImage(),n.createElement('div',{className:"_lll"},this._renderName(),this._renderConnectionContext(),this._renderContextItems())));},_renderImage:function(){var u=this.props.location===o.MESSENGER,v=null;if(this.props.thread){var w=s&&u?s:l;v=n.createElement(w,{showBadge:false,participants:this.props.participants,size:u?60:null,thread:this.props.thread,viewer:this.props.viewer});}else if(this.props.participantIDs)v=n.createElement(k,{participants:this.props.participantIDs,size:j.BIG_IMAGE_SIZE});return (n.createElement('div',{className:"_llk"},v));},_renderName:function(){if(this.props.location!==o.MESSENGER)return null;return (n.createElement('div',{className:"_llq"},n.createElement('span',{className:"_3oh-"},this.props.contactName)));},_renderConnectionContext:function(){return (n.createElement('div',{className:"_1n-e _36zg"},this.props.connectionContext));},_renderContextItems:function(){if(!this.props.contextItems.length)return null;return (n.createElement('div',null,this.props.contextItems.map(function(u,v){return (n.createElement('div',{className:"_1n-e",key:'item:'+v},u));})));}});f.exports=t;},null);