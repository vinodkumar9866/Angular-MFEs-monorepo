(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[584,8203],{8203:(v,d,r)=>{r.r(d),r.d(d,{BidiModule:()=>D,DIR_DOCUMENT:()=>a,Dir:()=>h,Directionality:()=>c});var i=r(9516),l=r(7313);const a=new i.InjectionToken("cdk-dir-doc",{providedIn:"root",factory:function f(){return(0,i.inject)(l.DOCUMENT)}}),g=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function s(t){const u=t?.toLowerCase()||"";return"auto"===u&&typeof navigator<"u"&&navigator?.language?g.test(navigator.language)?"rtl":"ltr":"rtl"===u?"rtl":"ltr"}let c=(()=>{class t{value="ltr";change=new i.EventEmitter;constructor(){const e=(0,i.inject)(a,{optional:!0});e&&(this.value=s((e.body?e.body.dir:null)||(e.documentElement?e.documentElement.dir:null)||"ltr"))}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=i.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),h=(()=>{class t{_dir="ltr";_isInitialized=!1;_rawDir;change=new i.EventEmitter;get dir(){return this._dir}set dir(e){const n=this._dir;this._dir=s(e),this._rawDir=e,n!==this._dir&&this._isInitialized&&this.change.emit(this._dir)}get value(){return this.dir}ngAfterContentInit(){this._isInitialized=!0}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=i.\u0275\u0275defineDirective({type:t,selectors:[["","dir",""]],hostVars:1,hostBindings:function(n,o){2&n&&i.\u0275\u0275attribute("dir",o._rawDir)},inputs:{dir:"dir"},outputs:{change:"dirChange"},exportAs:["dir"],features:[i.\u0275\u0275ProvidersFeature([{provide:c,useExisting:t}])]})}return t})(),D=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=i.\u0275\u0275defineNgModule({type:t});static \u0275inj=i.\u0275\u0275defineInjector({})}return t})()}}]);