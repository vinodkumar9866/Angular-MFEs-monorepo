(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[1460],{9079:(R,y,l)=>{l.r(y),l.d(y,{outputFromObservable:()=>O,outputToObservable:()=>h,pendingUntilEvent:()=>D,rxResource:()=>j,takeUntilDestroyed:()=>b,toObservable:()=>v,toSignal:()=>g,\u0275toObservableMicrotask:()=>k});var e=l(9516),i=l(4866),d=l(2778);function b(r){r||((0,e.assertInInjectionContext)(b),r=(0,e.inject)(e.DestroyRef));const t=new i.Observable(n=>r.onDestroy(n.next.bind(n)));return n=>n.pipe((0,d.takeUntil)(t))}class p{source;destroyed=!1;destroyRef=(0,e.inject)(e.DestroyRef);constructor(t){this.source=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}subscribe(t){if(this.destroyed)throw new e.\u0275RuntimeError(953,!1);const n=this.source.pipe(b(this.destroyRef)).subscribe({next:o=>t(o)});return{unsubscribe:()=>n.unsubscribe()}}}function O(r,t){return new p(r)}function h(r){const t=(0,e.\u0275getOutputDestroyRef)(r);return new i.Observable(n=>{t?.onDestroy(()=>n.complete());const o=r.subscribe(u=>n.next(u));return()=>o.unsubscribe()})}function v(r,t){!t?.injector&&(0,e.assertInInjectionContext)(v);const n=t?.injector??(0,e.inject)(e.Injector),o=new i.ReplaySubject(1),u=(0,e.effect)(()=>{let s;try{s=r()}catch(c){return void(0,e.untracked)(()=>o.error(c))}(0,e.untracked)(()=>o.next(s))},{injector:n,manualCleanup:!0});return n.get(e.DestroyRef).onDestroy(()=>{u.destroy(),o.complete()}),o.asObservable()}function k(r,t){!t?.injector&&(0,e.assertInInjectionContext)(v);const n=t?.injector??(0,e.inject)(e.Injector),o=new i.ReplaySubject(1),u=(0,e.\u0275microtaskEffect)(()=>{let s;try{s=r()}catch(c){return void(0,e.untracked)(()=>o.error(c))}(0,e.untracked)(()=>o.next(s))},{injector:n,manualCleanup:!0});return n.get(e.DestroyRef).onDestroy(()=>{u.destroy(),o.complete()}),o.asObservable()}function g(r,t){const n=!t?.manualCleanup;n&&!t?.injector&&(0,e.assertInInjectionContext)(g);const o=n?t?.injector?.get(e.DestroyRef)??(0,e.inject)(e.DestroyRef):null,u=function m(r=Object.is){return(t,n)=>1===t.kind&&1===n.kind&&r(t.value,n.value)}(t?.equal);let s;s=(0,e.signal)(t?.requireSync?{kind:0}:{kind:1,value:t?.initialValue},{equal:u});const c=r.subscribe({next:a=>s.set({kind:1,value:a}),error:a=>{if(t?.rejectErrors)throw a;s.set({kind:2,error:a})}});if(t?.requireSync&&0===s().kind)throw new e.\u0275RuntimeError(601,!1);return o?.onDestroy(c.unsubscribe.bind(c)),(0,e.computed)(()=>{const a=s();switch(a.kind){case 1:return a.value;case 2:throw a.error;case 0:throw new e.\u0275RuntimeError(601,!1)}},{equal:t?.equal})}function D(r){void 0===r&&((0,e.assertInInjectionContext)(D),r=(0,e.inject)(e.Injector));const t=r.get(e.PendingTasks);return n=>new i.Observable(o=>{const u=t.add();let s=!1;function c(){s||(u(),s=!0)}const a=n.subscribe({next:f=>{o.next(f),c()},complete:()=>{o.complete(),c()},error:f=>{o.error(f),c()}});return a.add(()=>{o.unsubscribe(),c()}),a})}function j(r){return r?.injector||(0,e.assertInInjectionContext)(j),(0,e.resource)({...r,loader:t=>{const n=new i.Subject;return t.abortSignal.addEventListener("abort",()=>n.next()),new Promise((o,u)=>{r.loader(t).pipe((0,d.take)(1),(0,d.takeUntil)(n)).subscribe({next:o,error:u,complete:()=>u(new Error("Resource completed before producing a value"))})})}})}}}]);