(self.webpackChunkhost=self.webpackChunkhost||[]).push([[84],{84:(vs,jt,h)=>{h.r(jt),h.d(jt,{AkitaCartQuery:()=>fs,AkitaCartStore:()=>Rt,CardComponent:()=>ds,CartService:()=>us,CartStoreService:()=>as,CustomButtonComponent:()=>hs,DateOnlyPipe:()=>os,FormatPricePipe:()=>cs,HilighterDirective:()=>ve,ProductService:()=>rs,addToCart:()=>_e,cartReducer:()=>ps,initialCartState:()=>Ce,normalizeImages:()=>ls,removeFromCart:()=>be,selectCartFeature:()=>kt,selectCartItemCount:()=>gs,selectCartItems:()=>ms});var d=h(5650),$=h(4412),yt=h(8141),Vt=h(1626),rt=h(4780),vt=h(8834),u=h(941),at=h(3);const Te=["*"],De=new u.InjectionToken("MAT_CARD_CONFIG");let Nt=(()=>{class i{appearance;constructor(){const e=(0,u.inject)(De,{optional:!0});this.appearance=e?.appearance||"raised"}static \u0275fac=function(s){return new(s||i)};static \u0275cmp=u.\u0275\u0275defineComponent({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(s,n){2&s&&u.\u0275\u0275classProp("mat-mdc-card-outlined","outlined"===n.appearance)("mdc-card--outlined","outlined"===n.appearance)},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Te,decls:1,vars:0,template:function(s,n){1&s&&(u.\u0275\u0275projectionDef(),u.\u0275\u0275projection(0))},styles:['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-sys-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-sys-corner-medium));border-width:var(--mdc-outlined-card-outline-width, 1px);border-color:var(--mdc-outlined-card-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0})}return i})(),Ht=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275dir=u.\u0275\u0275defineDirective({type:i,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return i})(),Bt=(()=>{class i{align="start";static \u0275fac=function(s){return new(s||i)};static \u0275dir=u.\u0275\u0275defineDirective({type:i,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-mdc-card-actions","mdc-card__actions"],hostVars:2,hostBindings:function(s,n){2&s&&u.\u0275\u0275classProp("mat-mdc-card-actions-align-end","end"===n.align)},inputs:{align:"align"},exportAs:["matCardActions"]})}return i})(),$t=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275dir=u.\u0275\u0275defineDirective({type:i,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-mdc-card-image","mdc-card__media"]})}return i})(),Re=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275mod=u.\u0275\u0275defineNgModule({type:i});static \u0275inj=u.\u0275\u0275defineInjector({imports:[at.yE,at.yE]})}return i})();var _t=h(9205),Ue=(h(7459),h(6860),h(2365)),bt=h(7987),je=(h(9969),h(5718));const He={provide:new u.InjectionToken("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{const i=(0,u.inject)(bt.hJ);return()=>i.scrollStrategies.reposition({scrollThrottle:20})}}),deps:[bt.hJ],useFactory:function Ne(i){return()=>i.scrollStrategies.reposition({scrollThrottle:20})}};let $e=(()=>{class i{static \u0275fac=function(s){return new(s||i)};static \u0275mod=u.\u0275\u0275defineNgModule({type:i});static \u0275inj=u.\u0275\u0275defineInjector({providers:[He],imports:[Ue.Pd,bt.z_,at.yE,at.yE,je.Gj]})}return i})();var I=h(1635);const et={type:null,entityIds:null,skip:!1,payload:null};let Ct=!1;function M(i,t,e){E(i,t,e),Ct=!0}function E(i,t,e){!1===Ct&&(et.type=i,et.entityIds=t,et.payload=e)}let ot={resettable:!1,ttl:null,producerFn:void 0};function Pt(){return ot}var V=h(1413),Qe=h(6129);class Kt extends V.B{constructor(t=1/0,e=1/0,s=Qe.U){super(),this._bufferSize=t,this._windowTime=e,this._timestampProvider=s,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,t),this._windowTime=Math.max(1,e)}next(t){const{isStopped:e,_buffer:s,_infiniteTimeWindow:n,_timestampProvider:r,_windowTime:a}=this;e||(s.push(t),!n&&s.push(r.now()+a)),this._trimBuffer(),super.next(t)}_subscribe(t){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(t),{_infiniteTimeWindow:s,_buffer:n}=this,r=n.slice();for(let a=0;a<r.length&&!t.closed;a+=s?1:2)t.next(r[a]);return this._checkFinalizedStatuses(t),e}_trimBuffer(){const{_bufferSize:t,_timestampProvider:e,_buffer:s,_infiniteTimeWindow:n}=this,r=(n?1:2)*t;if(t<1/0&&r<s.length&&s.splice(0,s.length-r),!n){const a=e.now();let o=0;for(let c=1;c<s.length&&s[c]<=a;c+=2)o=c;o&&s.splice(0,o+1)}}}const Xe=new V.B,Yt=new Kt(50,5e3),Ge=new V.B,St=typeof window<"u",N={},Qt={};function v(i){return"function"==typeof i}St&&(window.$$stores=N,window.$$queries=Qt);var Tt=function(i){return i.ASC="asc",i.DESC="desc",i}(Tt||{});function O(i){return null==i}function S(i){return O(i)?[]:Array.isArray(i)?i:[i]}var Q=function(i){return i.Set="Set",i.Add="Add",i.Update="Update",i.Remove="Remove",i}(Q||{});function it(i,t){return i.hasOwnProperty(t)}function Xt(i){const t=typeof i;return null!=i&&("object"==t||"function"==t)}function F(i){return Array.isArray(i)}function ct(i){return!1===O(i)}function H(i){return!!F(i)&&0===i.length}function L(i){return void 0===i}function Gt(i){return i.hasOwnProperty("active")}function Wt(i){return F(i)}function Jt({active:i,ids:t,entities:e}){return Wt(i)?function ri(i,t){const e=i.filter(s=>t.indexOf(s)>-1);return e.length===i.length?i:e}(i,t):!1===it(e,i)?null:i}function Zt(i,t){let e={};for(const s of Object.keys(i))e[s]=t(i[s]);return e}var w=h(6354),z=h(3294);function qt(i){Object.freeze(i);const t="function"==typeof i,e=Object.prototype.hasOwnProperty;return Object.getOwnPropertyNames(i).forEach(function(s){e.call(i,s)&&(!t||"caller"!==s&&"callee"!==s&&"arguments"!==s)&&null!==i[s]&&("object"==typeof i[s]||"function"==typeof i[s])&&!Object.isFrozen(i[s])&&qt(i[s])}),i}function W(i){return null!=i&&"false"!=`${i}`}function It(i){return W(i)&&"Object"===i.constructor.name}Error;const lt="akitaConfig";function ui(i){return function(t){t[lt]={idKey:"id"};for(let e=0,s=Object.keys(i);e<s.length;e++){const n=s[e];"name"===n?t[lt].storeName=i[n]:t[lt][n]=i[n]}}}var te=h(7673);const fi=new V.B,ee=new $.t(!1),K={activeTransactions:0,batchTransaction:null};function ie(){return K.activeTransactions>0}function At(i,t=void 0){!function pi(){ie()||(K.batchTransaction=new V.B),K.activeTransactions++,ee.next(!0)}();try{return i.apply(t)}finally{M("@Transaction"),function mi(){0==--K.activeTransactions&&(K.batchTransaction.next(!0),K.batchTransaction.complete(),ee.next(!1),fi.next(!0))}()}}function se(){return function(i,t,e){const s=e.value;return e.value=function(...n){return At(()=>s.apply(this,n),this)},e}}class yi{constructor(t,e={}){this.options=e,this.inTransaction=!1,this.cache={active:new $.t(!1),ttl:null},this.onInit(t)}setLoading(t=!1){t!==this._value().loading&&(E("Set Loading"),this._setState(e=>({...e,loading:t})))}setHasCache(t,e={restartTTL:!1}){if(t!==this.cache.active.value&&this.cache.active.next(t),e.restartTTL){const s=this.getCacheTTL();s&&(null!==this.cache.ttl&&clearTimeout(this.cache.ttl),this.cache.ttl=setTimeout(()=>this.setHasCache(!1),s))}}getValue(){return this.storeValue}setError(t){t!==this._value().error&&(E("Set Error"),this._setState(e=>({...e,error:t})))}_select(t){return this.store.asObservable().pipe((0,w.T)(e=>t(e.state)),(0,z.F)())}_value(){return this.storeValue}_cache(){return this.cache.active}get config(){return this.constructor[lt]||{}}get storeName(){return this.config.storeName||this.options.storeName||this.options.name}get deepFreeze(){return this.config.deepFreezeFn||this.options.deepFreezeFn||qt}get cacheConfig(){return this.config.cache||this.options.cache}get _producerFn(){return this.config.producerFn||this.options.producerFn||function Ye(){return ot.producerFn}()}get resettable(){return ct(this.config.resettable)?this.config.resettable:this.options.resettable}_setState(t,e=!0){if(v(t)){const s=t(this._value());this.storeValue=this.deepFreeze(s)}else this.storeValue=t;if(!this.store)return this.store=new $.t({state:this.storeValue}),void this.store.subscribe(({action:s})=>{s&&function Ze(i,t){Ge.next({storeName:i,action:t})}(this.storeName,s)});ie()?this.handleTransaction():this.dispatch(this.storeValue,e)}reset(){this.isResettable()&&(E("Reset"),this._setState(()=>Object.assign({},this._initialState)),this.setHasCache(!1))}update(t){let e;E("Update");const s=this._value();e=v(t)?v(this._producerFn)?this._producerFn(s,t):t(s):t;const n=this.akitaPreUpdate(s,{...s,...e}),r=It(s)?n:new s.constructor(n);this._setState(r)}updateStoreConfig(t){this.options={...this.options,...t}}akitaPreUpdate(t,e){return e}destroy(){(!St||!window.hmrEnabled)&&this===N[this.storeName]&&(delete N[this.storeName],function We(i){Xe.next(i)}(this.storeName),this.setHasCache(!1),this.cache.active.complete(),this.store.complete())}onInit(t){N[this.storeName]=this,this._setState(()=>t),function Je(i){Yt.next(i)}(this.storeName),this.isResettable()&&(this._initialState=t),function hi(i,t){i||console.error(`@StoreConfig({ name }) is missing in ${t}`)}(this.storeName,this.constructor.name)}dispatch(t,e=!0){let s;e&&(s=et,function ze(){Ct=!1}()),this.store.next({state:t,action:s})}watchTransaction(){(function gi(){return K.batchTransaction?K.batchTransaction.asObservable():(0,te.of)(!0)})().subscribe(()=>{this.inTransaction=!1,this.dispatch(this._value())})}isResettable(){return!1!==this.resettable&&(this.resettable||Pt().resettable)}handleTransaction(){this.inTransaction||(this.watchTransaction(),this.inTransaction=!0)}getCacheTTL(){return this.cacheConfig&&this.cacheConfig.ttl||Pt().ttl}}var ne;class X extends yi{constructor(t={},e={}){super({entities:{},ids:[],loading:!0,error:null,...t},e),this.options=e,this.entityActions=new V.B,this.entityIdChanges=new V.B}get selectEntityAction$(){return this.entityActions.asObservable()}get selectEntityIdChanges$(){return this.entityIdChanges.asObservable()}get idKey(){return this.config.idKey||this.options.idKey||"id"}set(t,e={}){if(O(t))return;E("Set Entity");const s=this.akitaPreAddEntity===X.prototype.akitaPreAddEntity;this.setHasCache(!0,{restartTTL:!0}),this._setState(n=>{const r=function di({state:i,entities:t,idKey:e,preAddEntity:s,isNativePreAdd:n}){let r,a;if(F(t)){const c=function ci(i,t,e){const s={entities:{},ids:[]};for(const n of i){const r=e(n);s.entities[r[t]]=r,s.ids.push(r[t])}return s}(t,e,s);r=c.entities,a=c.ids}else!function li(i){return i.entities&&i.ids}(t)?(r=n?t:Zt(t,s),a=Object.keys(r).map(c=>isNaN(c)?c:Number(c))):(r=n?t.entities:Zt(t.entities,s),a=t.ids);const o={...i,entities:r,ids:a,loading:!1};return Gt(i)&&(o.active=Jt(o)),o}({state:n,entities:t,idKey:this.idKey,preAddEntity:this.akitaPreAddEntity.bind(this),isNativePreAdd:s});return!1===L(e.activeId)&&(r.active=e.activeId),r}),this.hasInitialUIState()&&this.handleUICreation(),this.entityActions.next({type:Q.Set,ids:this.ids})}add(t,e={loading:!1}){const s=S(t);if(H(s))return;const n=function ei({state:i,entities:t,idKey:e,options:s={},preAddEntity:n}){let r={},a=[],o=!1;for(const c of t)if(!1===it(i.entities,c[e])){const l=n(c),m=l[e];r[m]=l,s.prepend?a.unshift(m):a.push(m),o=!0}return o?{newState:{...i,entities:{...i.entities,...r},ids:s.prepend?[...a,...i.ids]:[...i.ids,...a]},newIds:a}:null}({state:this._value(),preAddEntity:this.akitaPreAddEntity.bind(this),entities:s,idKey:this.idKey,options:e});n&&(E("Add Entity"),n.newState.loading=e.loading,this._setState(()=>n.newState),this.hasInitialUIState()&&this.handleUICreation(!0),this.entityActions.next({type:Q.Add,ids:n.newIds}))}update(t,e){if(L(e))return void super.update(t);let n,s=[];s=v(t)?this.ids.filter(r=>t(this.entities[r])):O(t)?this.ids:S(t),H(s)||(E("Update Entity",s),this._setState(r=>function vi({state:i,ids:t,idKey:e,newStateOrFn:s,preUpdateEntity:n,producerFn:r,onEntityIdChanges:a}){const o={};let l,c=!1;for(const g of t){if(!1===it(i.entities,g))continue;const C=i.entities[g];let _;_=v(s)?v(r)?r(C,s):s(C):s;const k=_.hasOwnProperty(e)&&_[e]!==C[e];let D;l=g,k&&(c=!0,l=_[e]);const U={...C,..._};D=It(C)?U:It(_)?new C.constructor(U):new _.constructor(U),o[l]=n(C,D)}let m=i.ids,f=i.entities;if(c){const[g]=t,{[g]:C,..._}=i.entities;f=_,m=i.ids.map(k=>k===g?l:k),a(g,l)}return{...i,entities:{...f,...o},ids:m}}({idKey:this.idKey,ids:s,preUpdateEntity:this.akitaPreUpdateEntity.bind(this),state:r,newStateOrFn:e,producerFn:this._producerFn,onEntityIdChanges:(a,o)=>{n={oldId:a,newId:o},this.entityIdChanges.next({...n,pending:!0})}})),n&&this.entityIdChanges.next({...n,pending:!1}),this.entityActions.next({type:Q.Update,ids:s}))}upsert(t,e,s,n={}){const r=S(t),a=f=>g=>it(this.entities,g)===f,o=v(s)?n.baseClass:s?s.baseClass:void 0,c=v(o),l=r.filter(a(!0)),m=r.filter(a(!1)).map(f=>{const g="function"==typeof e?e({}):e,_={...v(s)?s(f,g):g,[this.idKey]:f};return c?new o(_):_});this.update(l,e),this.add(m),M("Upsert Entity")}upsertMany(t,e={}){const s=[],n=[],r={};for(const a of t){const o=this.akitaPreCheckEntity(a),c=o[this.idKey];if(it(this.entities,c)){const l=this._value().entities[c],m={...this._value().entities[c],...o},f=e.baseClass?new e.baseClass(m):m,g=this.akitaPreUpdateEntity(l,f),C=g[this.idKey];r[C]=g,n.push(C)}else{const l=e.baseClass?new e.baseClass(o):o,m=this.akitaPreAddEntity(l),f=m[this.idKey];s.push(f),r[f]=m}}M("Upsert Many"),this._setState(a=>({...a,ids:s.length?[...a.ids,...s]:a.ids,entities:{...a.entities,...r},loading:!!e.loading})),n.length&&this.entityActions.next({type:Q.Update,ids:n}),s.length&&this.entityActions.next({type:Q.Add,ids:s}),s.length&&this.hasUIStore()&&this.handleUICreation(!0)}replace(t,e){const s=S(t);if(H(s))return;const n={};for(const r of s)n[r]={...e,[this.idKey]:r};E("Replace Entity",t),this._setState(r=>({...r,entities:{...r.entities,...n}}))}move(t,e){const s=this.ids.slice();s.splice(e<0?s.length+e:e,0,s.splice(t,1)[0]),E("Move Entity"),this._setState(n=>({...n,entities:{...n.entities},ids:s}))}remove(t){if(H(this.ids))return;const e=ct(t);let s=[];s=v(t)?this.ids.filter(n=>t(this.entities[n])):e?S(t):this.ids,!H(s)&&(E("Remove Entity",s),this._setState(n=>function ai({state:i,ids:t}){if(O(t))return function oi(i){return{...i,entities:{},ids:[],active:Wt(i.active)?[]:null}}(i);const e=i.entities;let s={};for(const r of i.ids)!1===t.includes(r)&&(s[r]=e[r]);const n={...i,entities:s,ids:i.ids.filter(r=>!1===t.includes(r))};return Gt(i)&&(n.active=Jt(n)),n}({state:n,ids:s})),e||this.setHasCache(!1),this.handleUIRemove(s),this.entityActions.next({type:Q.Remove,ids:s}))}updateActive(t){const e=S(this.active);E("Update Active",e),this.update(e,t)}setActive(t){const e=function si(i,t,e){let s;if(F(i))s=i;else if(Xt(i)){if(O(e))return;i=Object.assign({wrap:!0},i);const n=t.indexOf(e);if(i.prev){const r=0===n;if(r&&!i.wrap)return;s=r?t[t.length-1]:t[n-1]}else if(i.next){const r=t.length===n+1;if(r&&!i.wrap)return;s=r?t[0]:t[n+1]}}else{if(i===e)return;s=i}return s}(t,this.ids,this.active);void 0!==e&&(E("Set Active",e),this._setActive(e))}addActive(t){const e=S(t);H(e)||e.every(n=>this.active.indexOf(n)>-1)||(E("Add Active",t),this._setState(n=>{const r=Array.from(new Set([...n.active,...e]));return{...n,active:r}}))}removeActive(t){const e=S(t);H(e)||!e.some(n=>this.active.indexOf(n)>-1)||(E("Remove Active",t),this._setState(n=>({...n,active:Array.isArray(n.active)?n.active.filter(r=>-1===e.indexOf(r)):null})))}toggleActive(t){const e=S(t),s=a=>o=>this.active.includes(o)===a,n=e.filter(s(!0)),r=e.filter(s(!1));this.removeActive(n),this.addActive(r),M("Toggle Active")}createUIStore(t={},e={}){return this.ui=new re(t,{name:`UI/${this.storeName}`,idKey:this.idKey,...e}),this.ui}destroy(){super.destroy(),this.ui instanceof X&&this.ui.destroy(),this.entityActions.complete()}akitaPreUpdateEntity(t,e){return e}akitaPreAddEntity(t){return t}akitaPreCheckEntity(t){return t}get ids(){return this._value().ids}get entities(){return this._value().entities}get active(){return this._value().active}_setActive(t){this._setState(e=>({...e,active:t}))}handleUICreation(t=!1){const e=this.ids,s=v(this.ui._akitaCreateEntityFn);let n;const r=a=>{const o=this.entities[a],c=s?this.ui._akitaCreateEntityFn(o):this.ui._akitaCreateEntityFn;return{[this.idKey]:o[this.idKey],...c}};n=t?this.ids.filter(a=>L(this.ui.entities[a])).map(r):e.map(r),t?this.ui.add(n):this.ui.set(n)}hasInitialUIState(){return this.hasUIStore()&&!1===L(this.ui._akitaCreateEntityFn)}handleUIRemove(t){this.hasUIStore()&&this.ui.remove(t)}hasUIStore(){return this.ui instanceof re}}(0,I.__decorate)([se(),(0,I.__metadata)("design:type",Function),(0,I.__metadata)("design:paramtypes",[Object,Object,Object,Object]),(0,I.__metadata)("design:returntype",void 0)],X.prototype,"upsert",null),(0,I.__decorate)([se(),(0,I.__metadata)("design:type",Function),(0,I.__metadata)("design:paramtypes",["function"==typeof(ne=typeof T<"u"&&T)?ne:Object]),(0,I.__metadata)("design:returntype",void 0)],X.prototype,"toggleActive",null);class re extends X{constructor(t={},e={}){super(t,e)}setInitialEntityState(t){this._akitaCreateEntityFn=t}}function dt(i){return"string"==typeof i}class bi{constructor(t){this.store=t,this.__store__=t,Qt[t.storeName]=this}select(t){let e;if(v(t))e=t;else if(dt(t))e=s=>s[t];else{if(Array.isArray(t))return this.store._select(s=>s).pipe((0,z.F)(function _i(i){return function(t,e){const s=v(i[0]);return!1===i.some(n=>s?n(t)!==n(e):t[n]!==e[n])}}(t)),(0,w.T)(s=>v(t[0])?t.map(n=>n(s)):t.reduce((n,r)=>(n[r]=s[r],n),{})));e=s=>s}return this.store._select(e)}selectLoading(){return this.select(t=>t.loading)}selectError(){return this.select(t=>t.error)}getValue(){return this.store._value()}selectHasCache(){return this.store._cache().asObservable()}getHasCache(){return this.store._cache().value}get config(){return this.constructor.akitaQueryConfig}}var ht=h(5558),Dt=h(5964);function oe(i,t){return function(e){const s=e[i];if(!L(s))return t?dt(t)?s[t]:t(s):s}}class xt extends bi{constructor(t,e={}){super(t),this.options=e,this.__store__=t}selectAll(t={asObject:!1}){return this.select(e=>e.entities).pipe((0,w.T)(()=>this.getAll(t)))}getAll(t={asObject:!1,filterBy:void 0,limitTo:void 0}){return t.asObject?function Pi(i,t){const e={},{filterBy:s,limitTo:n}=t,{ids:r,entities:a}=i;if(!s&&!n)return a;const o=!1===O(n);if(s&&o){let c=0;for(let l=0,m=r.length;l<m&&c!==n;l++){const f=r[l],g=a[f];S(s).every(_=>_(g,l))&&(e[f]=g,c++)}}else{const c=Math.min(n||r.length,r.length);for(let l=0;l<c;l++){const m=r[l],f=a[m];s?S(s).every(C=>C(f,l))&&(e[m]=f):e[m]=f}}return e}(this.getValue(),t):(function Ei(i,t){i.sortBy=i.sortBy||t&&t.sortBy,i.sortByOrder=i.sortByOrder||t&&t.sortByOrder}(t,this.config||this.options),function ti(i,t){let e=[];const{ids:s,entities:n}=i,{filterBy:r,limitTo:a,sortBy:o,sortByOrder:c}=t;for(let m=0;m<s.length;m++){const f=n[s[m]];r?S(r).every(_=>_(f,m))&&e.push(f):e.push(f)}if(o){let m=v(o)?o:function qe(i,t=Tt.ASC){return function(e,s){if(!e.hasOwnProperty(i)||!s.hasOwnProperty(i))return 0;const n="string"==typeof e[i]?e[i].toUpperCase():e[i],r="string"==typeof s[i]?s[i].toUpperCase():s[i];let a=0;return n>r?a=1:n<r&&(a=-1),t==Tt.DESC?-1*a:a}}(o,c);e=e.sort((f,g)=>m(f,g,i))}const l=Math.min(a||e.length,e.length);return l===e.length?e:e.slice(0,l)}(this.getValue(),t))}selectMany(t,e){return t&&t.length?this.select(s=>s.entities).pipe((0,w.T)(s=>function Ti(i,t){return i.reduce((e,s,n,r)=>{const a=t(s,n,r);return void 0!==a&&e.push(a),e},[])}(t,n=>oe(n,e)(s))),function ae(){return(0,z.F)((i,t)=>i===t||!(!F(i)||!F(t))&&(!(!H(i)||!H(t))||i.length===t.length&&!1===t.some((s,n)=>i[n]!==s)))}()):(0,te.of)([])}selectEntity(t,e){let s=t;return v(t)&&(s=function Si(i,t){for(const e of Object.keys(t))if(!0===i(t[e]))return e}(t,this.getValue().entities)),this.select(n=>n.entities).pipe((0,w.T)(oe(s,e)),(0,z.F)())}getEntity(t){return this.getValue().entities[t]}selectActiveId(){return this.select(t=>t.active)}getActiveId(){return this.getValue().active}selectActive(t){return F(this.getActive())?this.selectActiveId().pipe((0,ht.n)(e=>this.selectMany(e,t))):this.selectActiveId().pipe((0,ht.n)(e=>this.selectEntity(e,t)))}getActive(){const t=this.getActiveId();return F(t)?t.map(e=>this.getValue().entities[e]):W(t)?this.getEntity(t):void 0}selectCount(t){return this.select(e=>e.entities).pipe((0,w.T)(()=>this.getCount(t)))}getCount(t){return v(t)?this.getAll().filter(t).length:this.getValue().ids.length}selectLast(t){return this.selectAt(e=>e[e.length-1],t)}selectFirst(t){return this.selectAt(e=>e[0],t)}selectEntityAction(t){if(O(t))return this.store.selectEntityAction$;const e=F(t)?n=>n:({ids:n})=>n,s=S(t);return this.store.selectEntityAction$.pipe((0,Dt.p)(({type:n})=>s.includes(n)),(0,w.T)(n=>e(n)))}hasEntity(t){return O(t)?this.getValue().ids.length>0:v(t)?this.getAll().some(t):F(t)?t.every(e=>e in this.getValue().entities):t in this.getValue().entities}hasActive(t){const e=this.getValue().active,s=ct(t);return Array.isArray(e)?s?e.includes(t):e.length>0:s?e===t:ct(e)}createUIQuery(){this.ui=new Ii(this.__store__.ui)}selectAt(t,e){return this.select(s=>s.ids).pipe((0,w.T)(t),(0,z.F)(),(0,ht.n)(s=>this.selectEntity(s,e)))}}class Ii extends xt{constructor(t){super(t)}}let ce=!1;function de(i){ce=i}function Ot(i,t){return 1===t.split(".").length?i:t.split(".").slice(1).join(".").split(".").reduce((s,n)=>s&&s[n],i)}new Kt(1),h(4572),h(5245);class ut{constructor(t,e){this.query=t,e&&e.resetFn&&Pt().resettable&&this.onReset(e.resetFn)}getQuery(){return this.query}getStore(){return this.getQuery().__store__}isEntityBased(t){return W(t)}selectSource(t,e){return this.isEntityBased(t)?this.getQuery().selectEntity(t).pipe(function xi(){return(0,Dt.p)(i=>null!=i)}()):e?this.getQuery().select(s=>Ot(s,this.withStoreName(e))):this.getQuery().select()}getSource(t,e){if(this.isEntityBased(t))return this.getQuery().getEntity(t);const s=this.getQuery().getValue();return e?Ot(s,this.withStoreName(e)):s}withStoreName(t){return`${this.storeName}.${t}`}get storeName(){return this.getStore().storeName}updateStore(t,e,s,n=!1){if(this.isEntityBased(e)){const r=this.getStore();n?r.replace(e,t):r.update(e,t)}else{if(s)return void this.getStore()._setState(a=>function Ft(i,t,e,s=!1){const n=t.split(".");if(1===n.length)return{...i,...e};i={...i};const r=n.length-2;return t.split(".").slice(1).reduce((o,c,l)=>l!==r?(o[c]={...o[c]},o&&o[c]):(o[c]=s||Array.isArray(o[c])||!Xt(o[c])?e:{...o[c],...e},o&&o[c]),i),i}(a,this.withStoreName(s),t,!0));const r=n?t:a=>({...a,...t});this.getStore()._setState(r)}}onReset(t){const e=this.getStore().reset;this.getStore().reset=(...s)=>{setTimeout(()=>{e.apply(this.getStore(),s),t()})}}}h(7786),h(3798);var Li=h(3236),Ri=h(8793),pt=h(6697),fe=h(9974),pe=h(4360),ki=h(5343),Vi=h(1397),Ni=h(8750);function me(i,t){return t?e=>(0,Ri.x)(t.pipe((0,pt.s)(1),function Ui(){return(0,fe.N)((i,t)=>{i.subscribe((0,pe._)(t,ki.l))})}()),e.pipe(me(i))):(0,Vi.Z)((e,s)=>(0,Ni.Tg)(i(e,s)).pipe((0,pt.s)(1),function ji(i){return(0,w.T)(()=>i)}(e)))}var Hi=h(1584),$i=h(4402),zi=h(2806);const Ki={pagesControls:!1,range:!1,startWith:1,cacheTimeout:void 0,clearStoreWithCache:!0};(0,I.__decorate)([function Ke(i,t){return function(e,s,n){const r=n.value;return n.value=function(...a){return M(i,t),r.apply(this,a)},n}}("@Pagination - New Page"),(0,I.__metadata)("design:type",Function),(0,I.__metadata)("design:paramtypes",[Object]),(0,I.__metadata)("design:returntype",void 0)],class Yi extends ut{constructor(t,e={}){super(t,{resetFn:()=>{this.initial=!1,this.destroy({clearCache:!0,currentPage:1})}}),this.query=t,this.config=e,this.metadata=new Map,this.pages=new Map,this.pagination={currentPage:1,perPage:0,total:0,lastPage:0,data:[]},this.initial=!0,this.isLoading$=this.query.selectLoading().pipe(function Bi(i,t=Li.E){const e=(0,Hi.O)(i,t);return me(()=>e)}(0)),this.config={...Ki,...e};const{startWith:s,cacheTimeout:n}=this.config;this.page=new $.t(s),(0,$i.A)(n)&&(this.clearCacheSubscription=n.subscribe(()=>this.clearCache()))}get pageChanges(){return this.page.asObservable()}get currentPage(){return this.pagination.currentPage}get isFirst(){return 1===this.currentPage}get isLast(){return this.currentPage===this.pagination.lastPage}withControls(){return this.config.pagesControls=!0,this}withRange(){return this.config.range=!0,this}setLoading(t=!0){this.getStore().setLoading(t)}update(t){this.pagination=t,this.addPage(t.data)}addPage(t){this.pages.set(this.currentPage,{ids:t.map(e=>e[this.getStore().idKey])}),this.getStore().upsertMany(t)}clearCache(t={}){this.initial||(M("@Pagination - Clear Cache"),!1!==t.clearStore&&(this.config.clearStoreWithCache||t.clearStore)&&this.getStore().remove(),this.pages=new Map,this.metadata=new Map),this.initial=!1}clearPage(t){this.pages.delete(t)}destroy({clearCache:t,currentPage:e}={}){this.clearCacheSubscription&&this.clearCacheSubscription.unsubscribe(),t&&this.clearCache(),L(e)||this.setPage(e),this.initial=!0}isPageActive(t){return this.currentPage===t}setPage(t){(t!==this.currentPage||!this.hasPage(t))&&this.page.next(this.pagination.currentPage=t)}nextPage(){this.currentPage!==this.pagination.lastPage&&this.setPage(this.pagination.currentPage+1)}prevPage(){this.pagination.currentPage>1&&this.setPage(this.pagination.currentPage-1)}setLastPage(){this.setPage(this.pagination.lastPage)}setFirstPage(){this.setPage(1)}hasPage(t){return this.pages.has(t)}getPage(t){let e=this.pagination.currentPage;return this.hasPage(e)?this.selectPage(e):(this.setLoading(!0),(0,zi.H)(t()).pipe((0,ht.n)(s=>(e=s.currentPage,At(()=>{this.setLoading(!1),this.update(s)}),this.selectPage(e)))))}getQuery(){return this.query}refreshCurrentPage(){!1===O(this.currentPage)&&(this.clearPage(this.currentPage),this.setPage(this.currentPage))}getFrom(){return this.isFirst?1:(this.currentPage-1)*this.pagination.perPage+1}getTo(){return this.isLast?this.pagination.total:this.currentPage*this.pagination.perPage}selectPage(t){return this.query.selectAll({asObject:!0}).pipe((0,pt.s)(1),(0,w.T)(e=>{const s={...this.pagination,data:this.pages.get(t).ids.map(a=>e[a])},{range:n,pagesControls:r}=this.config;return isNaN(this.pagination.total)&&(s.total=1===s.lastPage?s.data?s.data.length:0:s.perPage*s.lastPage,this.pagination.total=s.total),n&&(s.from=this.getFrom(),s.to=this.getTo()),r&&(s.pageControls=function Qi(i,t){const e=Math.ceil(i/t),s=[];for(let n=0;n<e;n++)s.push(n+1);return s}(this.pagination.total,this.pagination.perPage)),s}))}}.prototype,"update",null),h(152),new class es{getStoresSnapshot(t=[]){const e={},n=t.length>0?t:Object.keys(N);for(let r=0;r<n.length;r++){const a=n[r];"router"!==a&&(e[a]=N[a]._value())}return e}setStoresSnapshot(t,e){const s={skipStorageUpdate:!1,lazy:!1,...e};s.skipStorageUpdate&&de(!0);let n=t;dt(t)&&(n=JSON.parse(n));const r=Object.keys(n).length;if(s.lazy)Yt.pipe((0,Dt.p)(a=>n.hasOwnProperty(a)),(0,pt.s)(r)).subscribe(a=>N[a]._setState(()=>n[a]));else for(let a=0,o=Object.keys(n);a<o.length;a++){const c=o[a];N[c]&&N[c]._setState(()=>n[c])}s.skipStorageUpdate&&de(!1)}};var R=h(4570);const is=[[["","card-header",""]],[["","card-body",""]],[["","card-actions",""]]],ss=["[card-header]","[card-body]","[card-actions]"];function ns(i,t){if(1&i&&d.\u0275\u0275element(0,"img",2),2&i){const e=d.\u0275\u0275nextContext();d.\u0275\u0275property("src",e.product.images[0],d.\u0275\u0275sanitizeUrl)}}let rs=(()=>{class i{http;apiUrl="https://api.escuelajs.co/api/v1/products";uploadApiUrl="https://api.escuelajs.co/api/v1/files/upload";addProductApiUrl="https://api.escuelajs.co/api/v1/products/";deleteProductApiUrl=e=>`https://api.escuelajs.co/api/v1/products/${e}`;updateProductApiUrl=e=>`https://api.escuelajs.co/api/v1/products/${e}`;productsUpdated=new $.t(void 0);constructor(e){this.http=e}getProducts(){return this.http.get(this.apiUrl)}addProduct(e){return this.http.post(this.addProductApiUrl,e).pipe((0,yt.M)(()=>this.productsUpdated.next()))}deleteProduct(e){return this.http.delete(this.deleteProductApiUrl(e)).pipe((0,yt.M)(()=>this.productsUpdated.next()))}updateProduct(e,s){return this.http.put(this.updateProductApiUrl(e),s).pipe((0,yt.M)(()=>this.productsUpdated.next()))}uploadImage(e){const s=new FormData;s.append("file",e);const n=(new Vt.Lr).set("enctype","multipart/form-data");return this.http.post(this.uploadApiUrl,s,{headers:n})}onProductsUpdated(){return this.productsUpdated.asObservable()}static \u0275fac=function(s){return new(s||i)(d.\u0275\u0275inject(Vt.Qq))};static \u0275prov=d.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),as=(()=>{class i{cart=(0,d.signal)([]);getCartItems=(0,d.computed)(()=>this.cart());getCartItemCount=(0,d.computed)(()=>this.cart().length);addToCart(e){const s=this.cart();this.cart.set([...s,e])}removeFromCart(e){const n=this.cart().filter(r=>r.id!==e.id);this.cart.set(n)}static \u0275fac=function(s){return new(s||i)};static \u0275prov=d.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),os=(()=>{class i{transform(e){return e?new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}):""}static \u0275fac=function(s){return new(s||i)};static \u0275pipe=d.\u0275\u0275definePipe({name:"dateOnly",type:i,pure:!0})}return i})(),cs=(()=>{class i{transform(e,s="\u20b9"){return e?`${s} ${e}`:""}static \u0275fac=function(s){return new(s||i)};static \u0275pipe=d.\u0275\u0275definePipe({name:"formatPrice",type:i,pure:!1})}return i})();const ls=i=>{if(1===i.length&&"string"==typeof i[0]&&i[0].startsWith('["'))try{const t=JSON.parse(i[0]);return Array.isArray(t)?t:[]}catch(t){return console.error("Failed to parse images:",t),[]}return i};let ve=(()=>{class i{el;renderer;constructor(e,s){this.el=e,this.renderer=s}onMouseEnter(){this.setElevation("10px 10px 20px rgba(0, 0, 0, 0.25)","scale(1.05)")}onMouseLeave(){this.setElevation("none","scale(1)")}setElevation(e,s){this.renderer.setStyle(this.el.nativeElement,"boxShadow",e),this.renderer.setStyle(this.el.nativeElement,"transform",s),this.renderer.setStyle(this.el.nativeElement,"transition","0.3s ease-in-out")}static \u0275fac=function(s){return new(s||i)(d.\u0275\u0275directiveInject(d.ElementRef),d.\u0275\u0275directiveInject(d.Renderer2))};static \u0275dir=d.\u0275\u0275defineDirective({type:i,selectors:[["","appHilighter",""]],hostBindings:function(s,n){1&s&&d.\u0275\u0275listener("mouseenter",function(){return n.onMouseEnter()})("mouseleave",function(){return n.onMouseLeave()})}})}return i})(),ds=(()=>{class i{product={};isProductInCart=!1;addToCart=new d.EventEmitter;removeFromCart=new d.EventEmitter;onAddToCart(){this.addToCart.emit(this.product)}onRemoveFromCart(){this.removeFromCart.emit(this.product)}static \u0275fac=function(s){return new(s||i)};static \u0275cmp=d.\u0275\u0275defineComponent({type:i,selectors:[["shared-app-card"]],inputs:{product:"product",isProductInCart:"isProductInCart"},outputs:{addToCart:"addToCart",removeFromCart:"removeFromCart"},ngContentSelectors:ss,decls:7,vars:1,consts:[["appHilighter","","appearance","outlined"],["mat-card-image","",3,"src",4,"ngIf"],["mat-card-image","",3,"src"]],template:function(s,n){1&s&&(d.\u0275\u0275projectionDef(is),d.\u0275\u0275elementStart(0,"mat-card",0),d.\u0275\u0275projection(1),d.\u0275\u0275template(2,ns,1,1,"img",1),d.\u0275\u0275elementStart(3,"mat-card-content"),d.\u0275\u0275projection(4,1),d.\u0275\u0275elementEnd(),d.\u0275\u0275elementStart(5,"mat-card-actions"),d.\u0275\u0275projection(6,2),d.\u0275\u0275elementEnd()()),2&s&&(d.\u0275\u0275advance(2),d.\u0275\u0275property("ngIf",null==n.product||null==n.product.images?null:n.product.images.length))},dependencies:[vt.Hl,Re,Nt,Bt,Ht,$t,rt.CommonModule,rt.NgIf,_t.RouterModule,$e,ve],styles:["mat-card[_ngcontent-%COMP%]{display:flex;align-items:center}img[_ngcontent-%COMP%]{width:250px;height:250px;padding:1rem}"]})}return i})(),hs=(()=>{class i{label="Click Me";disabled=!1;buttonClass="";route="";clicked=new d.EventEmitter;onClick(){this.clicked.emit()}static \u0275fac=function(s){return new(s||i)};static \u0275cmp=d.\u0275\u0275defineComponent({type:i,selectors:[["custom-button"]],inputs:{label:"label",disabled:"disabled",buttonClass:"buttonClass",route:"route"},outputs:{clicked:"clicked"},decls:2,vars:4,consts:[["mat-button","",3,"click","ngClass","disabled","routerLink"]],template:function(s,n){1&s&&(d.\u0275\u0275elementStart(0,"button",0),d.\u0275\u0275listener("click",function(){return n.onClick()}),d.\u0275\u0275text(1),d.\u0275\u0275elementEnd()),2&s&&(d.\u0275\u0275property("ngClass",n.buttonClass)("disabled",n.disabled)("routerLink",n.route),d.\u0275\u0275advance(),d.\u0275\u0275textInterpolate1(" ",n.label,"\n"))},dependencies:[vt.Hl,vt.$z,rt.CommonModule,rt.NgClass,_t.RouterModule,_t.RouterLink],styles:[".primary[_ngcontent-%COMP%]{color:#fff;background-color:#1976d2}.secondary[_ngcontent-%COMP%]{color:#000;background-color:#e0e0e0}.danger[_ngcontent-%COMP%]{color:#fff!important;background-color:#843b3b!important}"]})}return i})(),Rt=(()=>{let i=class gt extends X{constructor(){super()}static \u0275fac=function(s){return new(s||gt)};static \u0275prov=d.\u0275\u0275defineInjectable({token:gt,factory:gt.\u0275fac,providedIn:"root"})};return i=(0,I.__decorate)([ui({name:"Akita-cart"})],i),i})(),us=(()=>{class i{cartStore;constructor(e){this.cartStore=e}addToCart(e){this.cartStore.add(e)}removeFromCart(e){this.cartStore.remove(e)}static \u0275fac=function(s){return new(s||i)(d.\u0275\u0275inject(Rt))};static \u0275prov=d.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),fs=(()=>{class i extends xt{constructor(){super((0,d.inject)(Rt))}getCartItems$=this.selectAll();getCartItemCount$=this.selectCount();static \u0275fac=function(s){return new(s||i)};static \u0275prov=d.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();const _e=(0,R.createAction)("[Cart] Add Item",(0,R.props)()),be=(0,R.createAction)("[Cart] Remove Item",(0,R.props)()),Ce={cartItems:[]},ps=(0,R.createReducer)(Ce,(0,R.on)(_e,(i,{product:t})=>({...i,cartItems:[...i.cartItems,t]})),(0,R.on)(be,(i,{productId:t})=>({...i,cartItems:i.cartItems.filter(e=>e.id!==t)}))),kt=(0,R.createFeatureSelector)("cart"),ms=(0,R.createSelector)(kt,i=>i.cartItems),gs=(0,R.createSelector)(kt,i=>i.cartItems.length)}}]);