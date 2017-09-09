/*!CK:2240137450!*//*1456271677,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["DCIsd"]); }

__d('ChatSearchSource',['requireWeak','AbstractSearchSource','AsyncRequest','CurrentUser','MercuryConfig','MercuryParticipantTypes','SearchableEntry','SearchSourceCallbackManager','ShortProfiles','TokenizeUtil','emptyFunction','isValidUniqueID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){'use strict';var t,u;if(c.__markCompiled)c.__markCompiled();var v=null;h('OrderedFriendsList',function(x){v=x;});t=babelHelpers.inherits(w,i);u=t&&t.prototype;function w(x){u.constructor.call(this);this.$ChatSearchSource1=new o({parseFn:q.parse,matchFn:q.isQueryMatch,indexFn:x.indexFn});this.$ChatSearchSource2=x.queryRequests||[];this.$ChatSearchSource3=false;}w.prototype.bootstrapImpl=function(x){p.fetchAll().done(function(){this.$ChatSearchSource3=true;this.$ChatSearchSource4();x();}.bind(this));};w.prototype.searchImpl=function(x,y,z){var aa=null,ba={},ca=z&&z.onQueryFinished,da=z&&z.onQueryStarted;da&&da(x);var ea=this.$ChatSearchSource1.search(x,function(ha){if(!aa){aa=ha;aa.forEach(function(ia){return ba[ia.getUniqueID()]=true;});}else ha.forEach(function(ia){var ja=ia.getUniqueID();if(!ba[ja]){aa.push(ia);ba[ja]=true;}});y(aa,x);if(x.length===1&&this.$ChatSearchSource3)ca&&ca(x);}.bind(this),z);if(!ea||!this.$ChatSearchSource2||!this.$ChatSearchSource2.length||x.length===0){ca&&ca(x);return;}if(x.length===1){if(this.$ChatSearchSource3)ca&&ca(x);return;}var fa={value:x,existing_ids:aa&&aa.map(function(ha){return ha.getUniqueID();}).join(','),limit:z&&z.threadLimit},ga=this.$ChatSearchSource2.length;this.$ChatSearchSource2.forEach(function(ha){this.$ChatSearchSource5(fa,ha,function(ia){this.$ChatSearchSource6(this.$ChatSearchSource7(this.$ChatSearchSource8(ia)).filter(function(ja){return !!ja;}),x);ga--;if(ga===0){this.$ChatSearchSource1.setQueryStringAsExhausted(x);ca&&ca(x);}}.bind(this));}.bind(this),this);};w.prototype.getAllEntriesMap=function(){return this.$ChatSearchSource1.getAllEntries();};w.prototype.$ChatSearchSource4=function(){var x=p.getCachedProfileIDs(),y=x.filter(function(aa){var ba=p.getNow(aa);return (aa==k.getID()||ba.type===m.FRIEND||ba.type===m.PAGE&&l.LinkedAgents&&l.LinkedAgents.indexOf(aa.toString())>-1);}),z=y.map(this.$ChatSearchSource9);if(z.length)this.$ChatSearchSource1.addLocalEntries(z);};w.prototype.$ChatSearchSource7=function(x){return x.map(this.$ChatSearchSource10,this);};w.prototype.$ChatSearchSource10=function(x,y){if(x.mercury_thread){if(!v)return null;return v.normalizeThreadEntry(x,y);}var z=x.text,aa=x.uid;if(!z||!s(aa))return null;return new n({uniqueID:aa,title:z,order:v?v.getActiveRank(aa):0,subtitle:x.subtext,type:x.render_type||x.type,photo:x.photo,uri:x.path,auxiliaryData:{isMessengerUser:x.is_messenger_user,alias:x.alias}});};w.prototype.$ChatSearchSource8=function(x){var y=x.getPayload();if(Array.isArray(y)){return y;}else if(y&&y.entries){return y.entries;}else return [];};w.prototype.$ChatSearchSource9=function(x){var y=p.getNow(x),z=x==k.getID()?m.FRIEND:y.type,aa=[y.additionalName,y.alternateName].concat(y.searchTokens||[]).join(' '),ba=y.name,ca=y.additionalName;if(y.threadNickname){ba=y.threadNickname;ca=y.name;}return new n({uniqueID:x,title:ba,order:v?v.getActiveRank(x):0,subtitle:ca,keywordString:aa,type:z,photo:y.thumbSrc,uri:y.uri,auxiliaryData:{isMessengerUser:y.is_messenger_user,alias:y.alias}});};w.prototype.$ChatSearchSource5=function(x,y,z,aa){new j(y.uri).setData(babelHelpers['extends']({},x,y.data)).setMethod('GET').setReadOnly(true).setHandler(z).setErrorHandler(aa||r).setAllowCrossPageTransition(true).send();};w.prototype.$ChatSearchSource6=function(x,y){if(x.length)this.$ChatSearchSource1.addQueryEntries(x,y);};w.prototype.addLocalEntries=function(x){this.$ChatSearchSource1.addLocalEntries(x);};w.prototype.refreshData=function(){p.fetchAll();};f.exports=w;},null);
__d('MessagingRecipientTypeaheadItem.react',['BackgroundImage.react','ChatTypeaheadConstants','ImageBlock.react','LeftRight.react','React','SplitImage.react','MercuryThreadMetadataRawRenderer','TypeaheadViewItem','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=l.PropTypes,s=l.createClass({displayName:'MessagingRecipientTypeaheadItem',propTypes:babelHelpers['extends']({},o.propTypes,{imageSize:r.number.isRequired}),mixins:[o.Mixin],isThreadRecipient:function(){return this.props.entry.getType()===i.THREAD_TYPE;},_getImage:function(){var t=this.props.entry;if(t.getType()===i.THREAD_TYPE&&!t.getPhoto()){var u=t.getAuxiliaryData();return (l.createElement(m,{size:this.props.imageSize,srcs:u.participantsToRender.map(function(v){return v.image_src;})}));}if(t.getPhoto())return (l.createElement(h,{width:this.props.imageSize,height:this.props.imageSize,backgroundSize:'cover',src:t.getPhoto()}));return l.createElement('span',null);},_getThreadParticipantList:function(){if(!this.isThreadRecipient())return null;var t=this.props.entry;return n.renderRawParticipantList(t.getUniqueID(),t.getAuxiliaryData().participantsToRender,t.getAuxiliaryData().thread.participants.length-1,{names_renderer:n.renderShortNames});},_getTitle:function(){var t=this.props.entry;if(this.isThreadRecipient()&&!t.getTitle())return this._getThreadParticipantList();return t.getTitle();},_getSubtitle:function(){var t=this.props.entry;if(this.isThreadRecipient()&&!t.getTitle())return this._getThreadParticipantList();return t.getSubtitle()?t.getSubtitle().split(' \u00b7 ')[0]:null;},render:function(){var t=this._getSubtitle(),u=q("_599m"+(' '+"_55xn")+(!t?' '+"_5mne":'')+(this.props.highlighted?' '+"_599n":''),this.props.className);return (l.createElement('li',{'aria-selected':this.props.selected,className:u,onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role},l.createElement(j,{spacing:'medium'},this._getImage(),l.createElement(k,null,l.createElement('div',null,l.createElement('div',{className:"_55xt _599p"},this._getTitle()),l.createElement('div',{className:"_55z3 _599q"},t)),this.props.children))));}});f.exports=s;},null);
__d('MessagingRecipientSelectedList.react',['Image.react','LeftRight.react','Map','MessagingRecipientTypeaheadItem.react','React','cx','fbt','xuiglyph'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p=l.PropTypes,q=l.createClass({displayName:'MessagingRecipientSelectedList',propTypes:{entries:p.instanceOf(j),onSelect:p.func.isRequired},_renderSelectedEntry:function(r){var s=o({name:'cross',shade:'dark',size:'small'});return (l.createElement(k,{key:r.getUniqueID(),entry:r,imageSize:24,onSelect:this.props.onSelect},l.createElement(h,{className:"_1jm4",src:s})));},render:function(){var r=n._("Send to:"),s=[];this.props.entries.forEach(function(t){return s.push(this._renderSelectedEntry(t));}.bind(this));return (l.createElement('div',{className:"_1jm5"},l.createElement(i,{className:"_1jm6 _2ph-"},l.createElement('span',null,r),l.createElement('span',null,this.props.entries.size)),l.createElement('ul',null,s)));}});f.exports=q;},null);
__d('MessagingRecipientTypeaheadView.react',['CenteredContainer.react','Link.react','Map','MessagingRecipientTypeaheadItem.react','React','TypeaheadViewPropTypes','XUISpinner.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=l.PropTypes,r=32,s=l.createClass({displayName:'MessagingRecipientTypeaheadView',propTypes:babelHelpers['extends']({},m,{selectedEntries:q.instanceOf(j),loading:q.bool}),getDefaultProps:function(){return {role:'listbox'};},_renderItem:function(t){var u=t===this.props.highlightedEntry,v=this.props.selectedEntries.has(t.getUniqueID());return (l.createElement(k,{key:t.getUniqueID(),entry:t,highlighted:u,imageSize:r,selected:v,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight},l.createElement(i,{'aria-checked':v,className:"_2i83"+(v?' '+"_2i85":'')+(!v?' '+"_2i86":''),href:'#',role:'checkbox',tabIndex:'0'})));},render:function(){if(this.props.entries.length===0&&!this.props.loading)return (l.createElement(h,{className:"_2pi1"},p._("No results")));return (l.createElement('ul',{id:this.props.ariaOwneeID,className:"_51do",role:this.props.role},this.props.entries.map(this._renderItem),l.createElement('div',{className:"_51dq"},this.props.loading?l.createElement(n,null):null)));}});f.exports=s;},null);
__d("XMessagingForwardAttachmentController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/mercury\/attachments\/forward\/",{});},null);
__d('MessagingForwardAttachmentDialog.react',['ix','AsyncRequest','ChatSearchSource','Image.react','LayerFadeOnHide','Layout.react','Map','MessagingRecipientSelectedList.react','MessagingRecipientTypeaheadView.react','OrderedFriendsList','React','SearchableTextInput.react','ScrollableArea.react','XMessagingForwardAttachmentController','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogCancelButton.react','XUIDialogFooter.react','XUIDialogTitle.react','XUISpinner.react','cx','fbglyph','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea){if(c.__markCompiled)c.__markCompiled();var fa=m.Column,ga=m.FillColumn,ha=r.PropTypes,ia=r.createClass({displayName:'MessagingForwardAttachmentDialog',propTypes:{attachmentID:ha.string.isRequired,onClose:ha.func,shown:ha.bool.isRequired,title:ha.string.isRequired},getInitialState:function(){return {bootstrappedEntries:[],entries:[],loading:true,selectedEntries:new n(),sendError:null,sending:false,startingThreadingID:Date.now(),query:''};},componentWillMount:function(){this._dataSource=new j({queryRequests:[{uri:'/ajax/mercury/composer_query.php'}]});},componentDidMount:function(){q.getSearchableEntries(20,function(ja){this.setState({bootstrappedEntries:ja,loading:false});}.bind(this));},_onSelectEntry:function(ja){var ka=ja.getUniqueID(),la=new n(this.state.selectedEntries);if(la.has(ka)){la['delete'](ka);}else la.set(ka,ja);this.setState({selectedEntries:la});},_onSearchChange:function(ja){var ka=ja.target.value;this.setState({loading:true,query:ka});},_onSearchEntriesFound:function(ja){this.setState({entries:ja});},_onSearchFinished:function(ja){ja===this.state.query&&this.setState({loading:false});},_onSubmit:function(){var ja={},ka=this.state.startingThreadingID;this.state.selectedEntries.forEach(function(ma){ja[ka++]=ma.getUniqueID();});var la=u.getURIBuilder().getURI();new i(la).setMethod('POST').setHandler(this._onSubmitResponse).setData({attachment_id:this.props.attachmentID,recipient_map:ja}).send();this.setState({sending:true,sendError:null});},_onSubmitResponse:function(ja){if(ja.payload.success){this.props.onClose&&this.props.onClose();this.setState({bootstrappedEntries:[],selectedEntries:new n(),sending:false,startingThreadID:Date.now(),query:''});return;}this.setState({sending:false,sendError:ja.payload.error});},_onToggle:function(ja){if(!ja)this.props.onClose();},render:function(){var ja=ea._("Send"),ka=null;if(this.state.sending){ka=r.createElement('div',null,r.createElement(ba,null),r.createElement('span',{className:"_5s0d _3-99"},ea._("Sending")));}else if(this.state.sendError){var la=h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/caution-solid_16_bluegray-40.png");ka=r.createElement('div',{className:"_5s0d"},r.createElement(k,{src:la}),r.createElement('span',{className:"_3-99"},this.state.sendError));}var ma=ea._("Search for people and groups");return (r.createElement(v,{shown:this.props.shown,behaviors:{LayerFadeOnHide:l},onToggle:this._onToggle,width:560},r.createElement(aa,null,this.props.title),r.createElement(w,{useCustomPadding:true},r.createElement(m,null,r.createElement(fa,{className:"_5s0e"},r.createElement('div',{className:"_2ph_"},r.createElement(s,{className:"_5s0f autofocus",onChange:this._onSearchChange,onEntriesFound:this._onSearchEntriesFound,placeholder:ma,queryString:this.state.query,searchSource:this._dataSource,searchSourceOptions:{onQueryFinished:this._onSearchFinished}})),r.createElement(t,{className:"_5s0g",height:400,width:360},r.createElement(p,{entries:this.state.query?this.state.entries:this.state.bootstrappedEntries,loading:this.state.loading,selectedEntries:this.state.selectedEntries,onSelect:this._onSelectEntry}))),r.createElement(ga,{className:"_5s0h"},r.createElement(t,{height:457,shadow:false},r.createElement(o,{entries:this.state.selectedEntries,onSelect:this._onSelectEntry}))))),r.createElement(z,{leftContent:ka},r.createElement(y,{onClick:this.props.onClose}),r.createElement(x,{use:'confirm',disabled:!this.state.selectedEntries.size||this.state.sending,label:ja,onClick:this._onSubmit}))));}});f.exports=ia;},null);