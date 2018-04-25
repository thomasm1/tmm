/*!CK:2649353588!*//*1456240212,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["Jez6Y"]); }

__d('MercuryEventShareAttachment.react',['AsyncRequest','CenteredContainer.react','EventRSVPActionStrings','Grid.react','Image.react','Link.react','MercuryAttachment','MercuryFallbackShareAttachment.react','MercuryShareAttachmentReactShape','MercuryShareAttachmentRenderLocations','React','XEventsMercuryRSVPController','XEventsMercurySetWatchStatusController','XUIButton.react','cx','ix','xuiglyph'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){'use strict';if(c.__markCompiled)c.__markCompiled();var y=k.GridItem,z=r.PropTypes,aa=q.CHAT,ba=q.CHAT_PREVIEW,ca=q.MESSENGER,da=q.WEB_INBOX,ea=r.createClass({displayName:'EventActionButton',propTypes:{eventID:z.string.isRequired,guestStatus:z.string.isRequired,watchStatus:z.string,connectedText:z.string.isRequired,unconnectedText:z.string.isRequired,enableRSVP:z.bool,showInterestedAction:z.bool,enableWatch:z.bool,onClick:z.func.isRequired,onInterestedClick:z.func.isRequired},getInitialState:function(){return {guestStatus:this.props.guestStatus,watchStatus:this.props.watchStatus};},componentWillReceiveProps:function(ga){this.setState({guestStatus:ga.guestStatus,watchStatus:ga.watchStatus});},_onClick:function(){var ga=this.state.guestStatus==='going'?'not_going':'going';this.setState({guestStatus:ga});this.props.onClick(ga);},_onInterestedClick:function(){var ga=null;if(this.state.watchStatus==='watched'||this.state.watchStatus==='going'){ga='unwatched';}else ga='watched';this.setState({watchStatus:ga});this.props.onInterestedClick(ga);},render:function(){if(this.props.showInterestedAction){return this.renderInterestedButton();}else return this.renderRSVPButton();},renderRSVPButton:function(){var ga=this.state.guestStatus==='going';if(this.props.enableRSVP){if(ga)return (r.createElement(u,{label:this.props.connectedText,onClick:this._onInterestedClick}));return (r.createElement(u,{image:r.createElement(l,{src:w('/images/icons/ads/inline_event.png')}),label:this.props.unconnectedText,onClick:this._onClick}));}else if(ga)return (r.createElement(u,{className:"_54ap",label:this.props.connectedText,disabled:true}));return null;},renderInterestedButton:function(){if(!this.props.enableWatch)return null;if(this.state.watchStatus==='unwatched'){return (r.createElement(u,{label:j.getInterestedActionText(),onClick:this._onInterestedClick,image:r.createElement(l,{src:w('/images/events/interested-button.png')})}));}else if(this.state.watchStatus==='watched'){return (r.createElement(u,{label:j.getInterestedDecidedText(),onClick:this._onInterestedClick,image:r.createElement(l,{src:x({name:'checkmark',shade:'dark',size:'small'})})}));}else if(this.state.watchStatus==='going')return (r.createElement(u,{label:j.getGoingDecidedText(),onClick:this._onInterestedClick,image:r.createElement(l,{src:x({name:'checkmark',shade:'dark',size:'small'})})}));}}),fa=r.createClass({displayName:'MercuryEventShareAttachment',propTypes:{attachment:p,location:z.oneOf(q.getValues()),rootClassName:z.string},_renderLink:function(ga){if(q.isPreview(this.props.location))return ga;return (r.createElement(m,{className:"_5rw4",href:this.props.attachment.uri,target:'_blank'},ga));},_renderImage:function(ga,ha){if(ga.image){var ia=n.resizeContain({width:ha,height:ha},ga.image_size),ja=ia.width,ka=ia.height;return this._renderLink(r.createElement(l,{src:ga.image,height:ka,width:ja,className:"_1shx"}));}return null;},_onActionButtonClick:function(ga){new h(s.getURIBuilder().setInt('event_id',this.state.eventData.eventID).setEnum('guest_status',ga).setStringToStringMap('acontext',{source:48}).getURI()).setHandler(function(ha){this.setState({eventData:ha.payload});}.bind(this)).send();},_onInterestedActionButtonClick:function(ga){new h(t.getURIBuilder().setInt('event_id',this.state.eventData.eventID).setEnum('watch_status',ga).setStringToStringMap('acontext',{source:48}).getURI()).setHandler(function(ha){this.setState({eventData:ha.payload});}.bind(this)).send();},getInitialState:function(){return {eventData:this.props.attachment.target};},render:function(){if(!this.state.eventData)return r.createElement(o,this.props);var ga=this.props,ha=ga.attachment,ia=ga.maxWidth,ja=this.state.eventData,ka=ja.eventID,la=ja.guestStatus,ma=ja.canViewerJoin,na=ja.timeString,oa=ja.locationString,pa=ja.socialContextString,qa=ja.connectedButtonText,ra=ja.unconnectedButtonText,sa=ja.watchStatus,ta=ja.showInterestedAction,ua=ja.canViewerWatch;if(this.props.location===ca)ma=false;var va=r.createElement('div',null,this._renderLink(ha.title)),wa=na?r.createElement('div',null,na):null,xa=oa?r.createElement('div',null,oa):null,ya=pa?r.createElement('div',null,pa):null,za=r.createElement(ea,{className:"_3-9b",connectedText:qa,unconnectedText:ra,eventID:ka,guestStatus:la,enableRSVP:ma,watchStatus:sa,enableWatch:ua,showInterestedAction:ta,onClick:this._onActionButtonClick,onInterestedClick:this._onInterestedActionButtonClick});if(this.props.location===ba||this.props.location===aa)return (r.createElement('div',{style:{maxWidth:ia}},this._renderImage(ha.media,ia),r.createElement('div',{className:"_2ph_"},va,r.createElement('div',{className:"_54aq"},wa,xa,ya),r.createElement(i,{vertical:true,className:"_2pie"},za))));return (r.createElement('div',{className:(this.props.location===da?"_3-8y":'')+(this.props.location===ca?' '+"_52mr":'')+(this.props.location===ca?' '+"_5i_d":''),style:{maxWidth:ia}},this._renderImage(ha.media,ia),r.createElement('div',{className:(this.props.location===da?"_54as":'')+(' '+"_2ph_")},r.createElement(k,{cols:2,alignv:'middle',style:{width:'100%'}},r.createElement(y,{className:"_2pij"},va,r.createElement('div',{className:"_54aq"},wa,xa,ya)),r.createElement(y,{alignh:'right'},za)))));}});f.exports=fa;},null);