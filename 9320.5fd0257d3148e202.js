(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[6939,9320],{6939:(E,f,i)=>{i.r(f),i.d(f,{BasePortalHost:()=>_,BasePortalOutlet:()=>d,CdkPortal:()=>h,CdkPortalOutlet:()=>l,ComponentPortal:()=>p,DomPortal:()=>m,DomPortalHost:()=>D,DomPortalOutlet:()=>P,Portal:()=>s,PortalHostDirective:()=>R,PortalInjector:()=>C,PortalModule:()=>g,TemplatePortal:()=>c,TemplatePortalDirective:()=>w});var r=i(9516),v=i(7313);class s{_attachedHost;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;null!=e&&(this._attachedHost=null,e.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(e){this._attachedHost=e}}class p extends s{component;viewContainerRef;injector;componentFactoryResolver;projectableNodes;constructor(e,t,o,a,u){super(),this.component=e,this.viewContainerRef=t,this.injector=o,this.projectableNodes=u}}class c extends s{templateRef;viewContainerRef;context;injector;constructor(e,t,o,a){super(),this.templateRef=e,this.viewContainerRef=t,this.context=o,this.injector=a}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}}class m extends s{element;constructor(e){super(),this.element=e instanceof r.ElementRef?e.nativeElement:e}}class d{_attachedPortal;_disposeFn;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){return e instanceof p?(this._attachedPortal=e,this.attachComponentPortal(e)):e instanceof c?(this._attachedPortal=e,this.attachTemplatePortal(e)):this.attachDomPortal&&e instanceof m?(this._attachedPortal=e,this.attachDomPortal(e)):void 0}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}class _ extends d{}class P extends d{outletElement;_appRef;_defaultInjector;_document;constructor(e,t,o,a,u){super(),this.outletElement=e,this._appRef=o,this._defaultInjector=a,this._document=u}attachComponentPortal(e){let t;if(e.viewContainerRef){const o=e.injector||e.viewContainerRef.injector,a=o.get(r.NgModuleRef,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:o,ngModuleRef:a,projectableNodes:e.projectableNodes||void 0}),this.setDisposeFn(()=>t.destroy())}else t=(0,r.createComponent)(e.component,{elementInjector:e.injector||this._defaultInjector||r.Injector.NULL,environmentInjector:this._appRef.injector,projectableNodes:e.projectableNodes||void 0}),this._appRef.attachView(t.hostView),this.setDisposeFn(()=>{this._appRef.viewCount>0&&this._appRef.detachView(t.hostView),t.destroy()});return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,o=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return o.rootNodes.forEach(a=>this.outletElement.appendChild(a)),o.detectChanges(),this.setDisposeFn(()=>{let a=t.indexOf(o);-1!==a&&t.remove(a)}),this._attachedPortal=e,o}attachDomPortal=e=>{const t=e.element,o=this._document.createComment("dom-portal");t.parentNode.insertBefore(o,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(t,o)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}}class D extends P{}let h=(()=>{class n extends c{constructor(){super((0,r.inject)(r.TemplateRef),(0,r.inject)(r.ViewContainerRef))}static \u0275fac=function(o){return new(o||n)};static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[r.\u0275\u0275InheritDefinitionFeature]})}return n})(),w=(()=>{class n extends h{static \u0275fac=(()=>{let t;return function(a){return(t||(t=r.\u0275\u0275getInheritedFactory(n)))(a||n)}})();static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","cdk-portal",""],["","portal",""]],exportAs:["cdkPortal"],features:[r.\u0275\u0275ProvidersFeature([{provide:h,useExisting:n}]),r.\u0275\u0275InheritDefinitionFeature]})}return n})(),l=(()=>{class n extends d{_moduleRef=(0,r.inject)(r.NgModuleRef,{optional:!0});_document=(0,r.inject)(v.DOCUMENT);_viewContainerRef=(0,r.inject)(r.ViewContainerRef);_isInitialized=!1;_attachedRef;constructor(){super()}get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new r.EventEmitter;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);const o=null!=t.viewContainerRef?t.viewContainerRef:this._viewContainerRef,a=o.createComponent(t.component,{index:o.length,injector:t.injector||o.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0});return o!==this._viewContainerRef&&this._getRootNode().appendChild(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=t,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(t){t.setAttachedHost(this);const o=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachDomPortal=t=>{const o=t.element,a=this._document.createComment("dom-portal");t.setAttachedHost(this),o.parentNode.insertBefore(a,o),this._getRootNode().appendChild(o),this._attachedPortal=t,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(o,a)})};_getRootNode(){const t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static \u0275fac=function(o){return new(o||n)};static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[r.\u0275\u0275InheritDefinitionFeature]})}return n})(),R=(()=>{class n extends l{static \u0275fac=(()=>{let t;return function(a){return(t||(t=r.\u0275\u0275getInheritedFactory(n)))(a||n)}})();static \u0275dir=r.\u0275\u0275defineDirective({type:n,selectors:[["","cdkPortalHost",""],["","portalHost",""]],inputs:{portal:[0,"cdkPortalHost","portal"]},exportAs:["cdkPortalHost"],features:[r.\u0275\u0275ProvidersFeature([{provide:l,useExisting:n}]),r.\u0275\u0275InheritDefinitionFeature]})}return n})(),g=(()=>{class n{static \u0275fac=function(o){return new(o||n)};static \u0275mod=r.\u0275\u0275defineNgModule({type:n});static \u0275inj=r.\u0275\u0275defineInjector({})}return n})();class C{_parentInjector;_customTokens;constructor(e,t){this._parentInjector=e,this._customTokens=t}get(e,t){const o=this._customTokens.get(e);return typeof o<"u"?o:this._parentInjector.get(e,t)}}}}]);