(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9STA":function(e,t,n){"use strict";n.r(t),n.d(t,"SwapModule",function(){return F});var s=n("ofXK"),i=n("tyNb"),a=n("quSY"),c=n("nl9H"),l=n("fXoL"),o=n("3Pt+"),r=n("sYmb");function d(e,t){1&e&&(l.Wb(0,"li",20),l.Ic(1),l.lc(2,"translate"),l.Vb()),2&e&&(l.Eb(1),l.Jc(l.mc(2,1,"wrong-password")))}let b=(()=>{class e{constructor(e,t){this.loginService=e,this.element=t,this.subscriptions=new a.a,this.password="",this.wrongPassword=!1,this.showPassword=!1}ngOnInit(){this.element.nativeElement.querySelector("#wallet-password").focus()}handleNext(){this.subscriptions.add(this.loginService.loginWithPassword(this.password).subscribe(e=>{e?chrome.runtime.sendMessage({message:"swap-confirmation",password:this.password}):this.wrongPassword=!0}))}ngOnDestroy(){this.subscriptions.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(l.Rb(c.c),l.Rb(l.m))},e.\u0275cmp=l.Lb({type:e,selectors:[["app-confirm-swap"]],hostAttrs:[1,"modal-content"],decls:25,vars:14,consts:[[1,"modal","full","d-block"],[1,"modal-dialog","modal-dialog-centered","modal-dialog-scrollable","send-modal"],[1,"modal-content"],[1,"modal-header"],["type","button","aria-label","Close","routerLink","..","queryParamsHandling","merge",1,"btn-close"],["id","enter-password-label",1,"modal-title"],[1,"modal-body"],[1,"flex-col","full","jc-center"],[1,"flex-row"],[1,"form-group"],[3,"ngSubmit"],["loginForm","ngForm"],["required","","autocomplete","new-password","name","password","id","wallet-password",1,"form-control","main__input",3,"ngModel","type","placeholder","ngModelChange"],["passwordModel","ngModel"],["id","wallet-password-show",1,"input-group-append","eye",3,"ngClass","click"],[1,"list-unstyled","password-requirements"],["class","fail","id","password-help",4,"ngIf"],[1,"modal-footer"],[1,"flex-row","w-100"],["type","button",1,"btn","green","wide","submit",3,"disabled","click"],["id","password-help",1,"fail"]],template:function(e,t){if(1&e&&(l.Wb(0,"div",0),l.Wb(1,"div",1),l.Wb(2,"div",2),l.Wb(3,"div",3),l.Sb(4,"button",4),l.Wb(5,"h5",5),l.Ic(6),l.lc(7,"translate"),l.Vb(),l.Vb(),l.Wb(8,"div",6),l.Wb(9,"div",7),l.Wb(10,"div",8),l.Wb(11,"div",9),l.Wb(12,"form",10,11),l.gc("ngSubmit",function(){return t.handleNext()}),l.Wb(14,"input",12,13),l.gc("ngModelChange",function(e){return t.password=e}),l.lc(16,"translate"),l.Vb(),l.Vb(),l.Wb(17,"span",14),l.gc("click",function(){return t.showPassword=!t.showPassword}),l.Vb(),l.Vb(),l.Vb(),l.Wb(18,"ul",15),l.Gc(19,d,3,3,"li",16),l.Vb(),l.Vb(),l.Vb(),l.Wb(20,"div",17),l.Wb(21,"div",18),l.Wb(22,"button",19),l.gc("click",function(){return t.handleNext()}),l.Ic(23),l.lc(24,"translate"),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb()),2&e){const e=l.zc(15);l.Eb(6),l.Jc(l.mc(7,8,"security")),l.Eb(8),l.rc("ngModel",t.password)("type",t.showPassword?"text":"password")("placeholder",l.mc(16,10,"password")),l.Eb(3),l.rc("ngClass",t.showPassword?"show-password":""),l.Eb(2),l.rc("ngIf",t.wrongPassword),l.Eb(3),l.rc("disabled",!e.dirty),l.Eb(1),l.Kc("",l.mc(24,12,"next")," ")}},directives:[i.e,o.s,o.k,o.l,o.b,o.r,o.j,o.m,s.m,s.o],pipes:[r.c],styles:[".form-group[_ngcontent-%COMP%]   .input-group-append.eye.show-password[_ngcontent-%COMP%]{background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 22 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z' fill='%2300c77a' fill-opacity='1'/%3E%3C/svg%3E%0A\")}.form-group[_ngcontent-%COMP%]{margin-bottom:0}"]}),e})();var u=n("5+tZ"),h=n("aMH+"),g=n("CuFO"),p=n("24Wg"),v=n("Zi2k"),m=n("IzEk"),f=n("lJxs"),w=n("GbXi"),W=n("tk/3");let S=(()=>{class e{constructor(e,t,n,s){this.http=e,this.accountSettingsService=t,this.ada=n,this.currencyPipe=s}getData(e){const t=e.payTokens&&e.payTokens.length>0?e.payTokens.split(","):[""],n=e.receiveTokens&&e.receiveTokens.length>0?e.receiveTokens.split(","):[""],s=e.payAmounts.split(","),i=e.receiveAmounts.split(","),a=Array.from(new Set(["cardano",...t.map(e=>e.toLowerCase()),...n.map(e=>e.toLowerCase())])).join(",");return this.http.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.accountSettingsService.baseCurrencySnapshot.id}&price_change_percentage=24h&ids=${a}`).pipe(Object(m.a)(1),Object(f.a)(a=>{const c=this.ada.transform(+e.fee),l=this.findDetails("cardano",a),o=this.currencyPipe.transform(+c*+l.current_price),r=t.map(e=>this.findDetails(e,a)),d=n.map(e=>this.findDetails(e,a)),b=[];for(let e=0;e<s.length;e++)t[e]&&b.push("cardano"===t[e]?this.ada.transform(+s[e]):+s[e]);const u=[];for(let e=0;e<i.length;e++)n[e]&&u.push("cardano"===n[e]?this.ada.transform(+i[e]):+i[e]);return{payTokens:t.map(e=>this.normalizeTokenName(e)),payAmounts:b,payAmountsInCurrency:b.map((e,t)=>{var n;return this.currencyPipe.transform(+e*+(null===(n=r[t])||void 0===n?void 0:n.current_price))}),payTokenImages:r.map(e=>null==e?void 0:e.image),receiveTokens:n.map(e=>this.normalizeTokenName(e)),receiveAmounts:u,receiveTo:e.receiveTo,receiveAmountsInCurrency:u.map((e,t)=>{var n;return this.currencyPipe.transform(+e*+(null===(n=d[t])||void 0===n?void 0:n.current_price))}),receiveTokenImages:null==d?void 0:d.map(e=>null==e?void 0:e.image),fee:c,feeInCurrency:o}}))}findDetails(e,t){return t.find(t=>t.name.toLowerCase()===e.toLowerCase())}normalizeTokenName(e){return"cardano"===e.toLowerCase()?"ADA":e}}return e.\u0275fac=function(t){return new(t||e)(l.dc(W.b),l.dc(c.a),l.dc(w.a),l.dc(s.d))},e.\u0275prov=l.Nb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function C(e,t){if(1&e&&(l.Ub(0),l.Wb(1,"div",15),l.Wb(2,"div",22),l.Sb(3,"app-logo",23),l.Wb(4,"span"),l.Ic(5),l.Vb(),l.Vb(),l.Wb(6,"span",24),l.Ic(7),l.Vb(),l.Vb(),l.Wb(8,"div",25),l.Sb(9,"span"),l.Wb(10,"span",9),l.Ic(11),l.Vb(),l.Vb(),l.Tb()),2&e){const e=t.$implicit,n=t.index,s=l.kc(3).ngIf;l.Eb(3),l.rc("autogenerate",!0)("alt",s.payTokens[n])("logo",s.payTokenImages[n]),l.Eb(2),l.Kc(" ",""!==s.payTokens[n]?s.payTokens[n]:"Asset",""),l.Eb(2),l.Jc(e),l.Eb(4),l.Jc(s.payAmountsInCurrency[n])}}function y(e,t){if(1&e&&(l.Wb(0,"div",8),l.Wb(1,"h5",9),l.Ic(2),l.lc(3,"translate"),l.Vb(),l.Gc(4,C,12,6,"ng-container",21),l.Vb()),2&e){const e=l.kc(2).ngIf;l.Eb(2),l.Jc(l.mc(3,2,"you-pay")),l.Eb(2),l.rc("ngForOf",e.payAmounts)}}function I(e,t){if(1&e&&(l.Ub(0),l.Wb(1,"div",15),l.Wb(2,"div",22),l.Sb(3,"app-logo",23),l.Wb(4,"span"),l.Ic(5),l.Vb(),l.Vb(),l.Wb(6,"span",24),l.Ic(7),l.Vb(),l.Vb(),l.Wb(8,"div",25),l.Sb(9,"span"),l.Wb(10,"span",9),l.Ic(11),l.Vb(),l.Vb(),l.Tb()),2&e){const e=t.$implicit,n=t.index,s=l.kc(3).ngIf;l.Eb(3),l.rc("autogenerate",!0)("alt",s.receiveTokens[n])("logo",s.receiveTokenImages[n]),l.Eb(2),l.Kc(" ",""!==s.receiveTokens[n]?s.receiveTokens[n]:"Asset",""),l.Eb(2),l.Jc(e),l.Eb(4),l.Jc(s.receiveAmountsInCurrency[n])}}function O(e,t){if(1&e&&(l.Wb(0,"div",8),l.Wb(1,"h5",9),l.Ic(2),l.lc(3,"translate"),l.Vb(),l.Gc(4,I,12,6,"ng-container",21),l.Vb()),2&e){const e=l.kc(2).ngIf;l.Eb(2),l.Jc(l.mc(3,2,"you-receive")),l.Eb(2),l.rc("ngForOf",e.receiveAmounts)}}function j(e,t){if(1&e){const e=l.Xb();l.Wb(0,"div",4),l.Wb(1,"div",5),l.Wb(2,"h5",6),l.Ic(3),l.lc(4,"translate"),l.Vb(),l.Vb(),l.Wb(5,"div",7),l.Wb(6,"div",8),l.Wb(7,"h5",9),l.Ic(8),l.lc(9,"translate"),l.Vb(),l.Wb(10,"p",10),l.Wb(11,"span",11),l.lc(12,"async"),l.Vb(),l.Ic(13),l.Vb(),l.Vb(),l.Wb(14,"div",8),l.Wb(15,"h5",9),l.Ic(16),l.lc(17,"translate"),l.Vb(),l.Wb(18,"p",12),l.Ic(19),l.Vb(),l.Vb(),l.Gc(20,y,5,4,"div",13),l.Gc(21,O,5,4,"div",13),l.Wb(22,"div",14),l.Wb(23,"h5",9),l.Ic(24),l.lc(25,"translate"),l.Vb(),l.Wb(26,"div",15),l.Wb(27,"span"),l.Ic(28),l.Vb(),l.Wb(29,"span",16),l.Ic(30),l.Vb(),l.Vb(),l.Sb(31,"p",17),l.Vb(),l.Vb(),l.Wb(32,"div",18),l.Wb(33,"button",19),l.gc("click",function(){return l.Bc(e),l.kc(2).decline()}),l.Ic(34),l.lc(35,"translate"),l.Vb(),l.Wb(36,"button",20),l.Ic(37),l.lc(38,"translate"),l.Vb(),l.Vb(),l.Vb()}if(2&e){const e=t.ngIf,n=l.kc().ngIf;l.Eb(3),l.Jc(l.mc(4,14,"confirm-swap")),l.Eb(5),l.Jc(l.mc(9,16,"from")),l.Eb(3),l.Gb(l.mc(12,18,null==e?null:e.color$)),l.Eb(2),l.Jc(null==e?null:e.name),l.Eb(3),l.Jc(l.mc(17,20,"to")),l.Eb(3),l.Jc(n.receiveTo),l.Eb(1),l.rc("ngIf",n.payAmounts&&n.payAmounts.length>0),l.Eb(1),l.rc("ngIf",n.receiveAmounts&&n.receiveAmounts.length>0),l.Eb(3),l.Jc(l.mc(25,22,"estimated-fee")),l.Eb(4),l.Kc("",n.fee," ADA"),l.Eb(2),l.Jc(n.feeInCurrency),l.Eb(4),l.Jc(l.mc(35,24,"decline")),l.Eb(3),l.Jc(l.mc(38,26,"confirm"))}}function L(e,t){if(1&e&&(l.Wb(0,"div",2),l.Gc(1,j,39,28,"div",3),l.lc(2,"async"),l.Vb()),2&e){const e=l.kc();l.Eb(1),l.rc("ngIf",l.mc(2,1,e.walletStateService.wallet$))}}const k=[{path:"",component:(()=>{class e{constructor(e,t,n,s,i,a){this.swapDetailsService=e,this.route=t,this.messageFactoryService=n,this.walletListService=s,this.walletStateService=i,this.ngZone=a,this.logoSize=h.b.Small;const c=this.messageFactoryService.getTransactions();this.setupWallet(),chrome.runtime.sendMessage(c,e=>{this.ngZone.run(()=>{e&&this.walletListService.fetchWallets().subscribe()})}),this.swapDetails$=this.route.queryParams.pipe(Object(u.a)(e=>this.swapDetailsService.getData(e)))}decline(){window.close()}setupWallet(){this.ngZone.runOutsideAngular(()=>{const e=this.messageFactoryService.getWalletDetails();chrome.runtime.sendMessage(e,e=>{this.ngZone.run(()=>{if(e&&e.name&&e.address){const t=new p.g(e.name,e.address,e.rewardAddress);this.walletStateService.setWallet(t)}})})})}}return e.\u0275fac=function(t){return new(t||e)(l.Rb(S),l.Rb(i.a),l.Rb(g.a),l.Rb(v.a),l.Rb(c.i),l.Rb(l.E))},e.\u0275cmp=l.Lb({type:e,selectors:[["app-review-swap"]],decls:3,vars:3,consts:[[1,"modal","full","d-block"],["class","modal-dialog modal-dialog-centered modal-dialog-scrollable send-modal",4,"ngIf"],[1,"modal-dialog","modal-dialog-centered","modal-dialog-scrollable","send-modal"],["class","modal-content",4,"ngIf"],[1,"modal-content"],[1,"modal-header"],["id","send-review-label",1,"modal-title"],[1,"modal-body"],[1,"modal-row","bordered"],[1,"muted"],[1,"vert-center"],[1,"wallet-cover","small","gero-card"],[1,"larger"],["class","modal-row bordered",4,"ngIf"],[1,"modal-row"],[1,"cols"],[1,"right"],[1,"smaller","muted"],[1,"modal-footer","nowrap"],[1,"btn-outline","green","wide",3,"click"],["id","confirm-swap","routerLink","./confirm","queryParamsHandling","merge",1,"btn","green","wide"],[4,"ngFor","ngForOf"],[1,"align-items-center","d-flex","pb-1","pt-1"],[1,"logo",3,"autogenerate","alt","logo"],[1,"right","value"],[1,"cols","smaller","thin"]],template:function(e,t){1&e&&(l.Wb(0,"div",0),l.Gc(1,L,3,3,"div",1),l.lc(2,"async"),l.Vb()),2&e&&(l.Eb(1),l.rc("ngIf",l.mc(2,1,t.swapDetails$)))},directives:[s.o,i.e,s.n,h.a],pipes:[s.b,r.c],styles:["[_nghost-%COMP%]{font-size:14px;height:100%;display:flex;flex-direction:column;width:360px}[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]{margin-right:10px}[_nghost-%COMP%]   .wallet-cover[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-size:14px!important;font-weight:500!important;color:#fff!important}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{padding-top:0}"]}),e})()},{path:"confirm",component:b}];let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Pb({type:e}),e.\u0275inj=l.Ob({imports:[[i.h.forChild(k)],i.h]}),e})();var E=n("Dt5x"),A=n("hG4v"),x=n("BM/6"),P=n("lw0W");let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.Pb({type:e}),e.\u0275inj=l.Ob({providers:[c.c,c.a,S,w.a,s.d,A.a,g.a,v.a,c.h,c.f,c.i,x.a,c.b,x.b,P.a],imports:[[s.c,V,r.b,o.e,E.a]]}),e})()},GbXi:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var s=n("fXoL");let i=(()=>{class e{transform(e){if(null===e)return"";let t=e.toString(),n=t;return n=t.length<=6?this.addZeros(e):(e/1e6).toFixed(6),n}addZeros(e){let t=e.toString(),n=t;for(let s=0;s<=6-t.length;s++)n=6===n.length?"0."+n:"0"+n;return n}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=s.Qb({name:"ada",type:e,pure:!0}),e})()},WNH8:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i});class s extends Error{constructor(e){super(e.message),this.name=e.name}}function i(e){return null==e?void 0:e.error}},Wgly:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var s=n("HDdC"),i=n("WNH8");function a(e){return new s.a(t=>{chrome.runtime.sendMessage(e,e=>{Object(i.b)(e)&&t.error(),t.next(e),t.complete()})})}},Zi2k:function(e,t,n){"use strict";n.d(t,"b",function(){return W}),n.d(t,"a",function(){return S});var s=n("mrSG"),i=n("vkgz"),a=n("eIep"),c=n("IzEk"),l=n("JIr8"),o=n("lJxs"),r=n("Cfvw"),d=n("EY2u"),b=n("24Wg"),u=n("CuFO"),h=n("hG4v"),g=n("gD3I"),p=n("Wgly"),v=n("XiNR"),m=n("EOyA"),f=n("lw0W"),w=n("fXoL"),W=function(e){return e[e.next=0]="next",e[e.previous=1]="previous",e}({});let S=(()=>{class e{constructor(e,t,n,s,i,a){this.messageFactoryService=e,this.walletListStateService=t,this.priceConverterService=n,this.transactionFetcherService=s,this.walletStateService=i,this.connectionService=a}fetchWallets(){const e=this.messageFactoryService.getWalletsList();return Object(p.a)(e).pipe(Object(i.a)(()=>this.walletListStateService.setLoading(!0)),Object(a.a)(e=>Object(r.a)(Promise.all(e.map(e=>Object(s.a)(this,void 0,void 0,function*(){return Object.assign(Object.assign({},e),{fiat:yield this.priceConverterService.convertPrice(b.a.Cardano,e.balance).pipe(Object(c.a)(1)).toPromise(),history:this.transactionFetcherService.getTransactionsModels(e.history)})}))))),Object(i.a)(e=>{this.walletListStateService.setWallets(e);const t=this.walletListStateService.getSelectedWallet();if(t){const n=e.find(e=>e.id===t.id);this.walletListStateService.selectWallet(n),this.setActiveWalletProps(n),this.connectionService.loadWalletConnectedWebsites(n.id)}else{const t=e[0];this.walletListStateService.selectWallet(e[0]),this.walletStateService.setWallet(new b.g(t.name,t.address,t.rewardAddress)),this.setActiveWalletProps(t),this.connectionService.loadWalletConnectedWebsites(t.id)}}),Object(i.a)(()=>this.walletListStateService.setLoading(!1)),Object(l.a)(()=>(this.walletListStateService.setLoading(!1),d.a)))}updateWallet(e,t){const n=this.messageFactoryService.updateWallet(e,t);return Object(p.a)(n).pipe(Object(i.a)(()=>{this.walletListStateService.updateWallet(e,t),this.walletStateService.setWallet(new b.g(t.name,t.address,t.rewardAddress)),this.setActiveWalletProps(t)}))}removeWallet(e){const t=this.messageFactoryService.removeWallet(e);return Object(p.a)(t).pipe(Object(o.a)(t=>{if(void 0===t.conceptualWalletId)return this.walletListStateService.removeWallet(e),e;if(-1!==t.conceptualWalletId){this.walletListStateService.removeWallet(e);const n=this.walletListStateService.getWalletList().find(e=>e.id===t.conceptualWalletId);return this.walletListStateService.selectWallet(n),this.walletStateService.setWallet(new b.g(n.name,n.address,n.rewardAddress)),this.setActiveWalletProps(n),n.id}this.walletStateService.setWallet(void 0)}))}slideWallet(e){const t=this.walletListStateService.getWalletList(),n=this.walletListStateService.getSelectedWallet(),s=t.findIndex(e=>e.id===n.id);if(s>-1){const n=t[e===W.next?s+1:s-1];this.walletListStateService.selectWallet(n),this.walletStateService.setWallet(new b.g(n.name,n.address,n.rewardAddress)),this.setActiveWalletProps(n),this.connectionService.loadWalletConnectedWebsites(n.id)}}setActiveWalletProps(e){this.walletStateService.setWalletAssets(null==e?void 0:e.assets),this.walletStateService.setBalance(e.balance),this.walletStateService.setHistory(e.history),this.walletStateService.setFiat(e.fiat),this.walletStateService.setName(e.name),this.walletStateService.setColor(e.color)}updateFiat(){const e=this.walletListStateService.getWalletList();Promise.all(e.map(e=>Object(s.a)(this,void 0,void 0,function*(){return Object.assign(Object.assign({},e),{fiat:yield this.priceConverterService.convertPrice(b.a.Cardano,e.balance).pipe(Object(c.a)(1)).toPromise()})}))).then(e=>{this.walletListStateService.setWallets(e);const t=this.walletListStateService.getSelectedWallet();this.walletStateService.setFiat(t.fiat)})}}return e.\u0275fac=function(t){return new(t||e)(w.dc(u.a),w.dc(h.a),w.dc(g.a),w.dc(v.a),w.dc(m.a),w.dc(f.a))},e.\u0275prov=w.Nb({token:e,factory:e.\u0275fac}),e})()},"aMH+":function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return r});var s=n("fXoL"),i=n("ofXK");function a(e,t){if(1&e){const e=s.Xb();s.Ub(0),s.Wb(1,"img",2),s.gc("error",function(){return s.Bc(e),s.kc().hideImage()}),s.Vb(),s.Tb()}if(2&e){const e=s.kc();s.Eb(1),s.rc("src",e.logo,s.Dc)("width",e.width)("height",e.height)}}function c(e,t){if(1&e&&(s.Ub(0),s.Wb(1,"div",4),s.Ic(2),s.lc(3,"uppercase"),s.Vb(),s.Tb()),2&e){const e=s.kc(2);s.Eb(1),s.Fc("background",e.color)("width",e.width+"px")("height",e.height+"px")("line-height",e.height+"px"),s.Eb(1),s.Jc(s.mc(3,9,e.alt[0]))}}function l(e,t){if(1&e&&s.Gc(0,c,4,11,"ng-container",3),2&e){const e=s.kc();s.rc("ngIf",e.autogenerate&&e.alt)}}var o=function(e){return e.Small="Small",e.Medium="Medium",e.Large="Large",e}({});let r=(()=>{class e{constructor(e){this.changeDetector=e,this.colorCodes=["#4F4789","#A30258","#830A48","#81667A","#6A1B9A","#303F9F","#AD5D4E","#F06543","#6200EA","#2962FF","#689F38","#00796B","#4527A0","#01579B","#2E7D32","#006064","#757575","#CE6A85","#A06CD5","#D19C1D","#0097A7","#065A82","#246EB9","#827717"],this.logo="",this.alt="",this.autogenerate=!1,this.showImage=!0,this.width=24,this.height=24,this.color=""}set size(e){e||this.setDimensions(e),this.setDimensions(e)}ngOnChanges(){if(this.alt&&this.autogenerate){const e=this.encode(this.alt);this.color=this.colorCodes[e%this.colorCodes.length],this.changeDetector.detectChanges()}}hideImage(){this.showImage=!1,this.changeDetector.detectChanges()}setDimensions(e){e===o.Medium?(this.width=24,this.height=24):e===o.Large?(this.width=36,this.height=36):e===o.Small&&(this.width=16,this.height=16)}encode(e){let t=0;const n=e.length;for(var s=0;s<n;s++)t+=e.charCodeAt(s);return t}}return e.\u0275fac=function(t){return new(t||e)(s.Rb(s.h))},e.\u0275cmp=s.Lb({type:e,selectors:[["app-logo"]],inputs:{logo:"logo",alt:"alt",size:"size",autogenerate:"autogenerate"},features:[s.Cb],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["fallback",""],[3,"src","width","height","error"],[4,"ngIf"],[1,"image-fallback"]],template:function(e,t){if(1&e&&(s.Gc(0,a,2,3,"ng-container",0),s.Gc(1,l,1,1,"ng-template",null,1,s.Hc)),2&e){const e=s.zc(2);s.rc("ngIf",t.logo&&t.showImage)("ngIfElse",e)}},directives:[i.o],pipes:[i.x],styles:[".image-fallback[_ngcontent-%COMP%]{color:#fff;border-radius:50%;text-align:center;font-size:80%}"],changeDetection:0}),e})()},hG4v:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var s=n("2Vo4"),i=n("lJxs"),a=n("fXoL");let c=(()=>{class e{constructor(){this.loadingSubject=new s.a(!0),this.loading$=this.loadingSubject.asObservable(),this.walletListSubject=new s.a([]),this.walletList$=this.walletListSubject.asObservable(),this.selectedWalletSubject=new s.a(void 0),this.selectedWallet$=this.selectedWalletSubject.asObservable(),this.selectedWalletIndex$=this.selectedWallet$.pipe(Object(i.a)(e=>e?this.walletListSubject.value.findIndex(t=>t.id===e.id):0)),this.walletSliderNextBtnVisible$=this.selectedWalletIndex$.pipe(Object(i.a)(e=>e<this.walletListSubject.value.length-1&&void 0!==this.selectedWalletSubject.value)),this.walletSliderPreviousBtnVisible$=this.selectedWalletIndex$.pipe(Object(i.a)(e=>e>0&&void 0!==this.selectedWalletSubject.value))}getSelectedWallet(){var e;return null!==(e=this.getWalletList().find(e=>e.id===+localStorage.getItem("conceptualWalletId")))&&void 0!==e?e:void 0}getWalletList(){return[...this.walletListSubject.value]}setWallets(e){this.walletListSubject.next(e)}updateWallet(e,t){const n=this.getWalletList(),s=n.findIndex(t=>t.id===e);n[s]=t,this.setWallets(n)}selectWallet(e){this.selectedWalletSubject.next(e),localStorage.setItem("conceptualWalletId",e.id.toString())}removeWallet(e){const t=this.walletListSubject.value.filter(t=>t.id!==e);t.length>=0&&(this.setWallets(t),this.selectWallet(t[0]))}setLoading(e){this.loadingSubject.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Nb({token:e,factory:e.\u0275fac}),e})()},lw0W:function(e,t,n){"use strict";n.d(t,"b",function(){return h}),n.d(t,"a",function(){return g});var s=n("2Vo4"),i=n("XNiG"),a=n("Cfvw"),c=n("vkgz"),l=n("mrSG"),o=n("vHav");class r{getAll(){return Object(l.a)(this,void 0,void 0,function*(){return o.a.conceptualWallet.toArray()})}getInitial(){return Object(l.a)(this,void 0,void 0,function*(){return o.a.conceptualWallet.toCollection().first()})}}var d=n("CuFO"),b=n("Wgly"),u=n("fXoL"),h=function(e){return e.connected="connected",e.notConnected="not-connected",e.connectionError="connection-error",e}({});let g=(()=>{class e{constructor(e){this.messageFactoryService=e,this.conceptualWalletRepository=new r,this.connectedWalletListSubject=new s.a([]),this.connectedWalletList$=this.connectedWalletListSubject.asObservable(),this.walletConnectionState=new i.a,this.walletConnectionState$=this.walletConnectionState.asObservable(),this.currentWebsiteSubject=new s.a(void 0),this.currentWebsite$=this.currentWebsiteSubject.asObservable(),this.walletConnectedWebsitesSubject=new s.a([]),this.walletConnectedWebsites$=this.walletConnectedWebsitesSubject.asObservable(),this.loadConnectionWalletList(),this.loadCurrentOpenedWebsite()}loadWalletConnectedWebsites(e){const t=this.messageFactoryService.getConnectedSites(e);Object(b.a)(t).subscribe(e=>{this.walletConnectedWebsitesSubject.next(e);const t=e.some(e=>{var t;return e===(null===(t=this.currentWebsiteSubject.value)||void 0===t?void 0:t.origin)});this.walletConnectionState.next(t?h.connected:h.notConnected)})}connectWebsiteToWallets(e,t){const n=this.messageFactoryService.connectSite(t,e);return Object(b.a)(n)}disconnectWebsiteFromWallet(e,t){var n;t===(null===(n=this.currentWebsiteSubject.value)||void 0===n?void 0:n.origin)&&this.setWalletDisconnectState();const s=this.walletConnectedWebsitesSubject.value.filter(e=>e!==t);this.walletConnectedWebsitesSubject.next(s);const i=this.messageFactoryService.removeConnectedSite(e,t);return Object(b.a)(i)}setWalletDisconnectState(){this.currentWebsiteSubject.next(void 0),this.walletConnectionState.next(h.notConnected)}mapToConnectionWallet(e){return e.map(e=>({id:e.conceptualWalletId,name:e.name,color:e.color}))}loadCurrentOpenedWebsite(){const e=this.messageFactoryService.websiteConnected();Object(b.a)(e).pipe(Object(c.a)(e=>{if(e){const t=new URL(e);this.currentWebsiteSubject.next(t)}else this.setWalletDisconnectState()})).subscribe(()=>{this.loadInitialWalletConnectedWebsites()})}loadConnectionWalletList(){Object(a.a)(this.conceptualWalletRepository.getAll()).subscribe(e=>{this.connectedWalletListSubject.next(this.mapToConnectionWallet(e))})}loadInitialWalletConnectedWebsites(){const e=localStorage.getItem("conceptualWalletId");void 0!==e&&this.loadWalletConnectedWebsites(+e)}}return e.\u0275fac=function(t){return new(t||e)(u.dc(d.a))},e.\u0275prov=u.Nb({token:e,factory:e.\u0275fac}),e})()}}]);