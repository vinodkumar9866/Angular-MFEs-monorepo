(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[5789],{8170:(c,d,o)=>{o.r(d),o.d(d,{SharedResizeObserver:()=>l});var i=o(9516),b=o(4866),_=o(2778);class a{_box;_destroyed=new b.Subject;_resizeSubject=new b.Subject;_resizeObserver;_elementObservables=new Map;constructor(s){this._box=s,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(s){return this._elementObservables.has(s)||this._elementObservables.set(s,new b.Observable(e=>{const t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(s,{box:this._box}),()=>{this._resizeObserver?.unobserve(s),t.unsubscribe(),this._elementObservables.delete(s)}}).pipe((0,_.filter)(e=>e.some(t=>t.target===s)),(0,_.shareReplay)({bufferSize:1,refCount:!0}),(0,_.takeUntil)(this._destroyed))),this._elementObservables.get(s)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}}let l=(()=>{class r{_cleanupErrorListener;_observers=new Map;_ngZone=(0,i.inject)(i.NgZone);constructor(){}ngOnDestroy(){for(const[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){const n=t?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new a(n)),this._observers.get(n).observe(e)}static \u0275fac=function(t){return new(t||r)};static \u0275prov=i.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);