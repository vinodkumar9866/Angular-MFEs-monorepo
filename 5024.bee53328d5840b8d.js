(self.webpackChunkcart=self.webpackChunkcart||[]).push([[2643,5024],{5024:(A,m,E)=>{E.r(m),E.d(m,{ArrayDataSource:()=>p,DataSource:()=>g,SelectionModel:()=>y,UniqueSelectionDispatcher:()=>w,_DisposeViewRepeaterStrategy:()=>D,_RecycleViewRepeaterStrategy:()=>V,_VIEW_REPEATER_STRATEGY:()=>C,_ViewRepeaterOperation:()=>l,getMultipleValuesInSingleSelectionError:()=>T,isDataSource:()=>S});var u=E(4866),f=E(9516);class g{}function S(i){return i&&"function"==typeof i.connect&&!(i instanceof u.ConnectableObservable)}class p extends g{_data;constructor(e){super(),this._data=e}connect(){return(0,u.isObservable)(this._data)?this._data:(0,u.of)(this._data)}disconnect(){}}var l=function(i){return i[i.REPLACED=0]="REPLACED",i[i.INSERTED=1]="INSERTED",i[i.MOVED=2]="MOVED",i[i.REMOVED=3]="REMOVED",i}(l||{});const C=new f.InjectionToken("_ViewRepeater");class D{applyChanges(e,t,s,h,n){e.forEachOperation((c,_,a)=>{let o,r;if(null==c.previousIndex){const d=s(c,_,a);o=t.createEmbeddedView(d.templateRef,d.context,d.index),r=l.INSERTED}else null==a?(t.remove(_),r=l.REMOVED):(o=t.get(_),t.move(o,a),r=l.MOVED);n&&n({context:o?.context,operation:r,record:c})})}detach(){}}class V{viewCacheSize=20;_viewCache=[];applyChanges(e,t,s,h,n){e.forEachOperation((c,_,a)=>{let o,r;null==c.previousIndex?(o=this._insertView(()=>s(c,_,a),a,t,h(c)),r=o?l.INSERTED:l.REPLACED):null==a?(this._detachAndCacheView(_,t),r=l.REMOVED):(o=this._moveView(_,a,t,h(c)),r=l.MOVED),n&&n({context:o?.context,operation:r,record:c})})}detach(){for(const e of this._viewCache)e.destroy();this._viewCache=[]}_insertView(e,t,s,h){const n=this._insertViewFromCache(t,s);if(n)return void(n.context.$implicit=h);const c=e();return s.createEmbeddedView(c.templateRef,c.context,c.index)}_detachAndCacheView(e,t){const s=t.detach(e);this._maybeCacheView(s,t)}_moveView(e,t,s,h){const n=s.get(e);return s.move(n,t),n.context.$implicit=h,n}_maybeCacheView(e,t){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(e);else{const s=t.indexOf(e);-1===s?e.destroy():t.remove(s)}}_insertViewFromCache(e,t){const s=this._viewCache.pop();return s&&t.insert(s,e),s||null}}class y{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new u.Subject;constructor(e=!1,t,s=!0,h){this._multiple=e,this._emitChanges=s,this.compareWith=h,t&&t.length&&(e?t.forEach(n=>this._markSelected(n)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...e){this._verifyValueAssignment(e),e.forEach(s=>this._markSelected(s));const t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...e){this._verifyValueAssignment(e),e.forEach(s=>this._unmarkSelected(s));const t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...e){this._verifyValueAssignment(e);const t=this.selected,s=new Set(e);e.forEach(n=>this._markSelected(n)),t.filter(n=>!s.has(this._getConcreteValue(n,s))).forEach(n=>this._unmarkSelected(n));const h=this._hasQueuedChanges();return this._emitChangeEvent(),h}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=!0){this._unmarkAll();const t=this._hasQueuedChanges();return e&&this._emitChangeEvent(),t}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}_getConcreteValue(e,t){if(this.compareWith){t=t??this._selection;for(let s of t)if(this.compareWith(e,s))return s;return e}return e}}function T(){return Error("Cannot pass multiple values into SelectionModel with single-value mode.")}let w=(()=>{class i{_listeners=[];notify(t,s){for(let h of this._listeners)h(t,s)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(s=>t!==s)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(s){return new(s||i)};static \u0275prov=f.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()}}]);