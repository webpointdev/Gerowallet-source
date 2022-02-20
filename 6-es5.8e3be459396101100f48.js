!function(){function e(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function t(e){var r="function"==typeof Map?new Map:void 0;return(t=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,o)}function o(){return n(e,arguments,a(this).constructor)}return o.prototype=Object.create(e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),i(o,e)})(e)}function n(e,t,a){return(n=r()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&i(a,n.prototype),a}).apply(null,arguments)}function r(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9STA":function(e,t,n){"use strict";n.r(t),n.d(t,"SwapModule",function(){return G});var r=n("ofXK"),i=n("tyNb"),a=n("quSY"),c=n("nl9H"),l=n("fXoL"),d=n("3Pt+"),f=n("sYmb");function b(e,t){1&e&&(l.Wb(0,"li",20),l.Ic(1),l.lc(2,"translate"),l.Vb()),2&e&&(l.Eb(1),l.Jc(l.mc(2,1,"wrong-password")))}var v,p,h=((v=function(){function e(t,n){s(this,e),this.loginService=t,this.element=n,this.subscriptions=new a.a,this.password="",this.wrongPassword=!1,this.showPassword=!1}return u(e,[{key:"ngOnInit",value:function(){this.element.nativeElement.querySelector("#wallet-password").focus()}},{key:"handleNext",value:function(){var e=this;this.subscriptions.add(this.loginService.loginWithPassword(this.password).subscribe(function(t){t?chrome.runtime.sendMessage({message:"swap-confirmation",password:e.password}):e.wrongPassword=!0}))}},{key:"ngOnDestroy",value:function(){this.subscriptions.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||v)(l.Rb(c.c),l.Rb(l.m))},v.\u0275cmp=l.Lb({type:v,selectors:[["app-confirm-swap"]],hostAttrs:[1,"modal-content"],decls:25,vars:14,consts:[[1,"modal","full","d-block"],[1,"modal-dialog","modal-dialog-centered","modal-dialog-scrollable","send-modal"],[1,"modal-content"],[1,"modal-header"],["type","button","aria-label","Close","routerLink","..","queryParamsHandling","merge",1,"btn-close"],["id","enter-password-label",1,"modal-title"],[1,"modal-body"],[1,"flex-col","full","jc-center"],[1,"flex-row"],[1,"form-group"],[3,"ngSubmit"],["loginForm","ngForm"],["required","","autocomplete","new-password","name","password","id","wallet-password",1,"form-control","main__input",3,"ngModel","type","placeholder","ngModelChange"],["passwordModel","ngModel"],["id","wallet-password-show",1,"input-group-append","eye",3,"ngClass","click"],[1,"list-unstyled","password-requirements"],["class","fail","id","password-help",4,"ngIf"],[1,"modal-footer"],[1,"flex-row","w-100"],["type","button",1,"btn","green","wide","submit",3,"disabled","click"],["id","password-help",1,"fail"]],template:function(e,t){if(1&e&&(l.Wb(0,"div",0),l.Wb(1,"div",1),l.Wb(2,"div",2),l.Wb(3,"div",3),l.Sb(4,"button",4),l.Wb(5,"h5",5),l.Ic(6),l.lc(7,"translate"),l.Vb(),l.Vb(),l.Wb(8,"div",6),l.Wb(9,"div",7),l.Wb(10,"div",8),l.Wb(11,"div",9),l.Wb(12,"form",10,11),l.gc("ngSubmit",function(){return t.handleNext()}),l.Wb(14,"input",12,13),l.gc("ngModelChange",function(e){return t.password=e}),l.lc(16,"translate"),l.Vb(),l.Vb(),l.Wb(17,"span",14),l.gc("click",function(){return t.showPassword=!t.showPassword}),l.Vb(),l.Vb(),l.Vb(),l.Wb(18,"ul",15),l.Gc(19,b,3,3,"li",16),l.Vb(),l.Vb(),l.Vb(),l.Wb(20,"div",17),l.Wb(21,"div",18),l.Wb(22,"button",19),l.gc("click",function(){return t.handleNext()}),l.Ic(23),l.lc(24,"translate"),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb()),2&e){var n=l.zc(15);l.Eb(6),l.Jc(l.mc(7,8,"security")),l.Eb(8),l.rc("ngModel",t.password)("type",t.showPassword?"text":"password")("placeholder",l.mc(16,10,"password")),l.Eb(3),l.rc("ngClass",t.showPassword?"show-password":""),l.Eb(2),l.rc("ngIf",t.wrongPassword),l.Eb(3),l.rc("disabled",!n.dirty),l.Eb(1),l.Kc("",l.mc(24,12,"next")," ")}},directives:[i.e,d.s,d.k,d.l,d.b,d.r,d.j,d.m,r.m,r.o],pipes:[f.c],styles:[".form-group[_ngcontent-%COMP%]   .input-group-append.eye.show-password[_ngcontent-%COMP%]{background-image:url(\"data:image/svg+xml,%3Csvg viewBox='0 0 22 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 0C6 0 1.73 3.11 0 7.5C1.73 11.89 6 15 11 15C16 15 20.27 11.89 22 7.5C20.27 3.11 16 0 11 0ZM11 12.5C8.24 12.5 6 10.26 6 7.5C6 4.74 8.24 2.5 11 2.5C13.76 2.5 16 4.74 16 7.5C16 10.26 13.76 12.5 11 12.5ZM11 4.5C9.34 4.5 8 5.84 8 7.5C8 9.16 9.34 10.5 11 10.5C12.66 10.5 14 9.16 14 7.5C14 5.84 12.66 4.5 11 4.5Z' fill='%2300c77a' fill-opacity='1'/%3E%3C/svg%3E%0A\")}.form-group[_ngcontent-%COMP%]{margin-bottom:0}"]}),v),g=n("5+tZ"),m=n("aMH+"),w=n("CuFO"),S=n("24Wg"),W=n("Zi2k"),y=n("IzEk"),k=n("lJxs"),C=n("GbXi"),I=n("tk/3"),O=((p=function(){function e(t,n,r,i){s(this,e),this.http=t,this.accountSettingsService=n,this.ada=r,this.currencyPipe=i}return u(e,[{key:"getData",value:function(e){var t=this,n=e.payTokens&&e.payTokens.length>0?e.payTokens.split(","):[""],r=e.receiveTokens&&e.receiveTokens.length>0?e.receiveTokens.split(","):[""],i=e.payAmounts.split(","),a=e.receiveAmounts.split(","),c=Array.from(new Set(["cardano"].concat(o(n.map(function(e){return e.toLowerCase()})),o(r.map(function(e){return e.toLowerCase()}))))).join(",");return this.http.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(this.accountSettingsService.baseCurrencySnapshot.id,"&price_change_percentage=24h&ids=").concat(c)).pipe(Object(y.a)(1),Object(k.a)(function(o){for(var c=t.ada.transform(+e.fee),s=t.findDetails("cardano",o),l=t.currencyPipe.transform(+c*+s.current_price),u=n.map(function(e){return t.findDetails(e,o)}),d=r.map(function(e){return t.findDetails(e,o)}),f=[],b=0;b<i.length;b++)n[b]&&f.push("cardano"===n[b]?t.ada.transform(+i[b]):+i[b]);for(var v=[],p=0;p<a.length;p++)r[p]&&v.push("cardano"===r[p]?t.ada.transform(+a[p]):+a[p]);return{payTokens:n.map(function(e){return t.normalizeTokenName(e)}),payAmounts:f,payAmountsInCurrency:f.map(function(e,n){var r;return t.currencyPipe.transform(+e*+(null===(r=u[n])||void 0===r?void 0:r.current_price))}),payTokenImages:u.map(function(e){return null==e?void 0:e.image}),receiveTokens:r.map(function(e){return t.normalizeTokenName(e)}),receiveAmounts:v,receiveTo:e.receiveTo,receiveAmountsInCurrency:v.map(function(e,n){var r;return t.currencyPipe.transform(+e*+(null===(r=d[n])||void 0===r?void 0:r.current_price))}),receiveTokenImages:null==d?void 0:d.map(function(e){return null==e?void 0:e.image}),fee:c,feeInCurrency:l}}))}},{key:"findDetails",value:function(e,t){return t.find(function(t){return t.name.toLowerCase()===e.toLowerCase()})}},{key:"normalizeTokenName",value:function(e){return"cardano"===e.toLowerCase()?"ADA":e}}]),e}()).\u0275fac=function(e){return new(e||p)(l.dc(I.b),l.dc(c.a),l.dc(C.a),l.dc(r.d))},p.\u0275prov=l.Nb({token:p,factory:p.\u0275fac,providedIn:"root"}),p);function j(e,t){if(1&e&&(l.Ub(0),l.Wb(1,"div",15),l.Wb(2,"div",22),l.Sb(3,"app-logo",23),l.Wb(4,"span"),l.Ic(5),l.Vb(),l.Vb(),l.Wb(6,"span",24),l.Ic(7),l.Vb(),l.Vb(),l.Wb(8,"div",25),l.Sb(9,"span"),l.Wb(10,"span",9),l.Ic(11),l.Vb(),l.Vb(),l.Tb()),2&e){var n=t.$implicit,r=t.index,i=l.kc(3).ngIf;l.Eb(3),l.rc("autogenerate",!0)("alt",i.payTokens[r])("logo",i.payTokenImages[r]),l.Eb(2),l.Kc(" ",""!==i.payTokens[r]?i.payTokens[r]:"Asset",""),l.Eb(2),l.Jc(n),l.Eb(4),l.Jc(i.payAmountsInCurrency[r])}}function L(e,t){if(1&e&&(l.Wb(0,"div",8),l.Wb(1,"h5",9),l.Ic(2),l.lc(3,"translate"),l.Vb(),l.Gc(4,j,12,6,"ng-container",21),l.Vb()),2&e){var n=l.kc(2).ngIf;l.Eb(2),l.Jc(l.mc(3,2,"you-pay")),l.Eb(2),l.rc("ngForOf",n.payAmounts)}}function x(e,t){if(1&e&&(l.Ub(0),l.Wb(1,"div",15),l.Wb(2,"div",22),l.Sb(3,"app-logo",23),l.Wb(4,"span"),l.Ic(5),l.Vb(),l.Vb(),l.Wb(6,"span",24),l.Ic(7),l.Vb(),l.Vb(),l.Wb(8,"div",25),l.Sb(9,"span"),l.Wb(10,"span",9),l.Ic(11),l.Vb(),l.Vb(),l.Tb()),2&e){var n=t.$implicit,r=t.index,i=l.kc(3).ngIf;l.Eb(3),l.rc("autogenerate",!0)("alt",i.receiveTokens[r])("logo",i.receiveTokenImages[r]),l.Eb(2),l.Kc(" ",""!==i.receiveTokens[r]?i.receiveTokens[r]:"Asset",""),l.Eb(2),l.Jc(n),l.Eb(4),l.Jc(i.receiveAmountsInCurrency[r])}}function A(e,t){if(1&e&&(l.Wb(0,"div",8),l.Wb(1,"h5",9),l.Ic(2),l.lc(3,"translate"),l.Vb(),l.Gc(4,x,12,6,"ng-container",21),l.Vb()),2&e){var n=l.kc(2).ngIf;l.Eb(2),l.Jc(l.mc(3,2,"you-receive")),l.Eb(2),l.rc("ngForOf",n.receiveAmounts)}}function E(e,t){if(1&e){var n=l.Xb();l.Wb(0,"div",4),l.Wb(1,"div",5),l.Wb(2,"h5",6),l.Ic(3),l.lc(4,"translate"),l.Vb(),l.Vb(),l.Wb(5,"div",7),l.Wb(6,"div",8),l.Wb(7,"h5",9),l.Ic(8),l.lc(9,"translate"),l.Vb(),l.Wb(10,"p",10),l.Wb(11,"span",11),l.lc(12,"async"),l.Vb(),l.Ic(13),l.Vb(),l.Vb(),l.Wb(14,"div",8),l.Wb(15,"h5",9),l.Ic(16),l.lc(17,"translate"),l.Vb(),l.Wb(18,"p",12),l.Ic(19),l.Vb(),l.Vb(),l.Gc(20,L,5,4,"div",13),l.Gc(21,A,5,4,"div",13),l.Wb(22,"div",14),l.Wb(23,"h5",9),l.Ic(24),l.lc(25,"translate"),l.Vb(),l.Wb(26,"div",15),l.Wb(27,"span"),l.Ic(28),l.Vb(),l.Wb(29,"span",16),l.Ic(30),l.Vb(),l.Vb(),l.Sb(31,"p",17),l.Vb(),l.Vb(),l.Wb(32,"div",18),l.Wb(33,"button",19),l.gc("click",function(){return l.Bc(n),l.kc(2).decline()}),l.Ic(34),l.lc(35,"translate"),l.Vb(),l.Wb(36,"button",20),l.Ic(37),l.lc(38,"translate"),l.Vb(),l.Vb(),l.Vb()}if(2&e){var r=t.ngIf,i=l.kc().ngIf;l.Eb(3),l.Jc(l.mc(4,14,"confirm-swap")),l.Eb(5),l.Jc(l.mc(9,16,"from")),l.Eb(3),l.Gb(l.mc(12,18,null==r?null:r.color$)),l.Eb(2),l.Jc(null==r?null:r.name),l.Eb(3),l.Jc(l.mc(17,20,"to")),l.Eb(3),l.Jc(i.receiveTo),l.Eb(1),l.rc("ngIf",i.payAmounts&&i.payAmounts.length>0),l.Eb(1),l.rc("ngIf",i.receiveAmounts&&i.receiveAmounts.length>0),l.Eb(3),l.Jc(l.mc(25,22,"estimated-fee")),l.Eb(4),l.Kc("",i.fee," ADA"),l.Eb(2),l.Jc(i.feeInCurrency),l.Eb(4),l.Jc(l.mc(35,24,"decline")),l.Eb(3),l.Jc(l.mc(38,26,"confirm"))}}function V(e,t){if(1&e&&(l.Wb(0,"div",2),l.Gc(1,E,39,28,"div",3),l.lc(2,"async"),l.Vb()),2&e){var n=l.kc();l.Eb(1),l.rc("ngIf",l.mc(2,1,n.walletStateService.wallet$))}}var P,T,F,M=[{path:"",component:(P=function(){function e(t,n,r,i,a,o){var c=this;s(this,e),this.swapDetailsService=t,this.route=n,this.messageFactoryService=r,this.walletListService=i,this.walletStateService=a,this.ngZone=o,this.logoSize=m.b.Small;var l=this.messageFactoryService.getTransactions();this.setupWallet(),chrome.runtime.sendMessage(l,function(e){c.ngZone.run(function(){e&&c.walletListService.fetchWallets().subscribe()})}),this.swapDetails$=this.route.queryParams.pipe(Object(g.a)(function(e){return c.swapDetailsService.getData(e)}))}return u(e,[{key:"decline",value:function(){window.close()}},{key:"setupWallet",value:function(){var e=this;this.ngZone.runOutsideAngular(function(){var t=e.messageFactoryService.getWalletDetails();chrome.runtime.sendMessage(t,function(t){e.ngZone.run(function(){if(t&&t.name&&t.address){var n=new S.g(t.name,t.address,t.rewardAddress);e.walletStateService.setWallet(n)}})})})}}]),e}(),P.\u0275fac=function(e){return new(e||P)(l.Rb(O),l.Rb(i.a),l.Rb(w.a),l.Rb(W.a),l.Rb(c.i),l.Rb(l.E))},P.\u0275cmp=l.Lb({type:P,selectors:[["app-review-swap"]],decls:3,vars:3,consts:[[1,"modal","full","d-block"],["class","modal-dialog modal-dialog-centered modal-dialog-scrollable send-modal",4,"ngIf"],[1,"modal-dialog","modal-dialog-centered","modal-dialog-scrollable","send-modal"],["class","modal-content",4,"ngIf"],[1,"modal-content"],[1,"modal-header"],["id","send-review-label",1,"modal-title"],[1,"modal-body"],[1,"modal-row","bordered"],[1,"muted"],[1,"vert-center"],[1,"wallet-cover","small","gero-card"],[1,"larger"],["class","modal-row bordered",4,"ngIf"],[1,"modal-row"],[1,"cols"],[1,"right"],[1,"smaller","muted"],[1,"modal-footer","nowrap"],[1,"btn-outline","green","wide",3,"click"],["id","confirm-swap","routerLink","./confirm","queryParamsHandling","merge",1,"btn","green","wide"],[4,"ngFor","ngForOf"],[1,"align-items-center","d-flex","pb-1","pt-1"],[1,"logo",3,"autogenerate","alt","logo"],[1,"right","value"],[1,"cols","smaller","thin"]],template:function(e,t){1&e&&(l.Wb(0,"div",0),l.Gc(1,V,3,3,"div",1),l.lc(2,"async"),l.Vb()),2&e&&(l.Eb(1),l.rc("ngIf",l.mc(2,1,t.swapDetails$)))},directives:[r.o,i.e,r.n,m.a],pipes:[r.b,f.c],styles:["[_nghost-%COMP%]{font-size:14px;height:100%;display:flex;flex-direction:column;width:360px}[_nghost-%COMP%]   .logo[_ngcontent-%COMP%]{margin-right:10px}[_nghost-%COMP%]   .wallet-cover[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-size:14px!important;font-weight:500!important;color:#fff!important}[_nghost-%COMP%]   .modal-body[_ngcontent-%COMP%]{padding-top:0}"]}),P)},{path:"confirm",component:h}],D=((T=function e(){s(this,e)}).\u0275fac=function(e){return new(e||T)},T.\u0275mod=l.Pb({type:T}),T.\u0275inj=l.Ob({imports:[[i.h.forChild(M)],i.h]}),T),_=n("Dt5x"),R=n("hG4v"),J=n("BM/6"),$=n("lw0W"),G=((F=function e(){s(this,e)}).\u0275fac=function(e){return new(e||F)},F.\u0275mod=l.Pb({type:F}),F.\u0275inj=l.Ob({providers:[c.c,c.a,O,C.a,r.d,R.a,w.a,W.a,c.h,c.f,c.i,J.a,c.b,J.b,$.a],imports:[[r.c,D,f.b,d.e,_.a]]}),F)},GbXi:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("fXoL"),i=function(){var e=function(){function e(){s(this,e)}return u(e,[{key:"transform",value:function(e){if(null===e)return"";var t=e.toString();return t.length<=6?this.addZeros(e):(e/1e6).toFixed(6)}},{key:"addZeros",value:function(e){for(var t=e.toString(),n=t,r=0;r<=6-t.length;r++)n=6===n.length?"0."+n:"0"+n;return n}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r.Qb({name:"ada",type:e,pure:!0}),e}()},WNH8:function(n,o,c){"use strict";c.d(o,"a",function(){return l}),c.d(o,"b",function(){return u});var l=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(l,t);var n,o,c=(n=l,o=r(),function(){var t,r=a(n);if(o){var i=a(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return e(this,t)});function l(e){var t;return s(this,l),(t=c.call(this,e.message)).name=e.name,t}return l}(t(Error));function u(e){return null==e?void 0:e.error}},Wgly:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("HDdC"),i=n("WNH8");function a(e){return new r.a(function(t){chrome.runtime.sendMessage(e,function(e){Object(i.b)(e)&&t.error(),t.next(e),t.complete()})})}},Zi2k:function(e,t,n){"use strict";n.d(t,"b",function(){return y}),n.d(t,"a",function(){return k});var r=n("mrSG"),i=n("vkgz"),a=n("eIep"),o=n("IzEk"),c=n("JIr8"),l=n("lJxs"),d=n("Cfvw"),f=n("EY2u"),b=n("24Wg"),v=n("CuFO"),p=n("hG4v"),h=n("gD3I"),g=n("Wgly"),m=n("XiNR"),w=n("EOyA"),S=n("lw0W"),W=n("fXoL"),y=function(e){return e[e.next=0]="next",e[e.previous=1]="previous",e}({}),k=function(){var e=function(){function e(t,n,r,i,a,o){s(this,e),this.messageFactoryService=t,this.walletListStateService=n,this.priceConverterService=r,this.transactionFetcherService=i,this.walletStateService=a,this.connectionService=o}return u(e,[{key:"fetchWallets",value:function(){var e=this,t=this.messageFactoryService.getWalletsList();return Object(g.a)(t).pipe(Object(i.a)(function(){return e.walletListStateService.setLoading(!0)}),Object(a.a)(function(t){return Object(d.a)(Promise.all(t.map(function(t){return Object(r.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Object,e.t1=Object.assign({},t),e.next=4,this.priceConverterService.convertPrice(b.a.Cardano,t.balance).pipe(Object(o.a)(1)).toPromise();case 4:return e.t2=e.sent,e.t3=this.transactionFetcherService.getTransactionsModels(t.history),e.t4={fiat:e.t2,history:e.t3},e.abrupt("return",e.t0.assign.call(e.t0,e.t1,e.t4));case 8:case"end":return e.stop()}},e,this)}))})))}),Object(i.a)(function(t){e.walletListStateService.setWallets(t);var n=e.walletListStateService.getSelectedWallet();if(n){var r=t.find(function(e){return e.id===n.id});e.walletListStateService.selectWallet(r),e.setActiveWalletProps(r),e.connectionService.loadWalletConnectedWebsites(r.id)}else{var i=t[0];e.walletListStateService.selectWallet(t[0]),e.walletStateService.setWallet(new b.g(i.name,i.address,i.rewardAddress)),e.setActiveWalletProps(i),e.connectionService.loadWalletConnectedWebsites(i.id)}}),Object(i.a)(function(){return e.walletListStateService.setLoading(!1)}),Object(c.a)(function(){return e.walletListStateService.setLoading(!1),f.a}))}},{key:"updateWallet",value:function(e,t){var n=this,r=this.messageFactoryService.updateWallet(e,t);return Object(g.a)(r).pipe(Object(i.a)(function(){n.walletListStateService.updateWallet(e,t),n.walletStateService.setWallet(new b.g(t.name,t.address,t.rewardAddress)),n.setActiveWalletProps(t)}))}},{key:"removeWallet",value:function(e){var t=this,n=this.messageFactoryService.removeWallet(e);return Object(g.a)(n).pipe(Object(l.a)(function(n){if(void 0===n.conceptualWalletId)return t.walletListStateService.removeWallet(e),e;if(-1!==n.conceptualWalletId){t.walletListStateService.removeWallet(e);var r=t.walletListStateService.getWalletList().find(function(e){return e.id===n.conceptualWalletId});return t.walletListStateService.selectWallet(r),t.walletStateService.setWallet(new b.g(r.name,r.address,r.rewardAddress)),t.setActiveWalletProps(r),r.id}t.walletStateService.setWallet(void 0)}))}},{key:"slideWallet",value:function(e){var t=this.walletListStateService.getWalletList(),n=this.walletListStateService.getSelectedWallet(),r=t.findIndex(function(e){return e.id===n.id});if(r>-1){var i=t[e===y.next?r+1:r-1];this.walletListStateService.selectWallet(i),this.walletStateService.setWallet(new b.g(i.name,i.address,i.rewardAddress)),this.setActiveWalletProps(i),this.connectionService.loadWalletConnectedWebsites(i.id)}}},{key:"setActiveWalletProps",value:function(e){this.walletStateService.setWalletAssets(null==e?void 0:e.assets),this.walletStateService.setBalance(e.balance),this.walletStateService.setHistory(e.history),this.walletStateService.setFiat(e.fiat),this.walletStateService.setName(e.name),this.walletStateService.setColor(e.color)}},{key:"updateFiat",value:function(){var e=this,t=this.walletListStateService.getWalletList();Promise.all(t.map(function(t){return Object(r.a)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Object,e.t1=Object.assign({},t),e.next=4,this.priceConverterService.convertPrice(b.a.Cardano,t.balance).pipe(Object(o.a)(1)).toPromise();case 4:return e.t2=e.sent,e.t3={fiat:e.t2},e.abrupt("return",e.t0.assign.call(e.t0,e.t1,e.t3));case 7:case"end":return e.stop()}},e,this)}))})).then(function(t){e.walletListStateService.setWallets(t);var n=e.walletListStateService.getSelectedWallet();e.walletStateService.setFiat(n.fiat)})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(W.dc(v.a),W.dc(p.a),W.dc(h.a),W.dc(m.a),W.dc(w.a),W.dc(S.a))},e.\u0275prov=W.Nb({token:e,factory:e.\u0275fac}),e}()},"aMH+":function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return d});var r=n("fXoL"),i=n("ofXK");function a(e,t){if(1&e){var n=r.Xb();r.Ub(0),r.Wb(1,"img",2),r.gc("error",function(){return r.Bc(n),r.kc().hideImage()}),r.Vb(),r.Tb()}if(2&e){var i=r.kc();r.Eb(1),r.rc("src",i.logo,r.Dc)("width",i.width)("height",i.height)}}function o(e,t){if(1&e&&(r.Ub(0),r.Wb(1,"div",4),r.Ic(2),r.lc(3,"uppercase"),r.Vb(),r.Tb()),2&e){var n=r.kc(2);r.Eb(1),r.Fc("background",n.color)("width",n.width+"px")("height",n.height+"px")("line-height",n.height+"px"),r.Eb(1),r.Jc(r.mc(3,9,n.alt[0]))}}function c(e,t){if(1&e&&r.Gc(0,o,4,11,"ng-container",3),2&e){var n=r.kc();r.rc("ngIf",n.autogenerate&&n.alt)}}var l=function(e){return e.Small="Small",e.Medium="Medium",e.Large="Large",e}({}),d=function(){var e=function(){function e(t){s(this,e),this.changeDetector=t,this.colorCodes=["#4F4789","#A30258","#830A48","#81667A","#6A1B9A","#303F9F","#AD5D4E","#F06543","#6200EA","#2962FF","#689F38","#00796B","#4527A0","#01579B","#2E7D32","#006064","#757575","#CE6A85","#A06CD5","#D19C1D","#0097A7","#065A82","#246EB9","#827717"],this.logo="",this.alt="",this.autogenerate=!1,this.showImage=!0,this.width=24,this.height=24,this.color=""}return u(e,[{key:"size",set:function(e){e||this.setDimensions(e),this.setDimensions(e)}},{key:"ngOnChanges",value:function(){if(this.alt&&this.autogenerate){var e=this.encode(this.alt);this.color=this.colorCodes[e%this.colorCodes.length],this.changeDetector.detectChanges()}}},{key:"hideImage",value:function(){this.showImage=!1,this.changeDetector.detectChanges()}},{key:"setDimensions",value:function(e){e===l.Medium?(this.width=24,this.height=24):e===l.Large?(this.width=36,this.height=36):e===l.Small&&(this.width=16,this.height=16)}},{key:"encode",value:function(e){for(var t=0,n=e.length,r=0;r<n;r++)t+=e.charCodeAt(r);return t}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Rb(r.h))},e.\u0275cmp=r.Lb({type:e,selectors:[["app-logo"]],inputs:{logo:"logo",alt:"alt",size:"size",autogenerate:"autogenerate"},features:[r.Cb],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["fallback",""],[3,"src","width","height","error"],[4,"ngIf"],[1,"image-fallback"]],template:function(e,t){if(1&e&&(r.Gc(0,a,2,3,"ng-container",0),r.Gc(1,c,1,1,"ng-template",null,1,r.Hc)),2&e){var n=r.zc(2);r.rc("ngIf",t.logo&&t.showImage)("ngIfElse",n)}},directives:[i.o],pipes:[i.x],styles:[".image-fallback[_ngcontent-%COMP%]{color:#fff;border-radius:50%;text-align:center;font-size:80%}"],changeDetection:0}),e}()},hG4v:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n("2Vo4"),i=n("lJxs"),a=n("fXoL"),c=function(){var e=function(){function e(){var t=this;s(this,e),this.loadingSubject=new r.a(!0),this.loading$=this.loadingSubject.asObservable(),this.walletListSubject=new r.a([]),this.walletList$=this.walletListSubject.asObservable(),this.selectedWalletSubject=new r.a(void 0),this.selectedWallet$=this.selectedWalletSubject.asObservable(),this.selectedWalletIndex$=this.selectedWallet$.pipe(Object(i.a)(function(e){return e?t.walletListSubject.value.findIndex(function(t){return t.id===e.id}):0})),this.walletSliderNextBtnVisible$=this.selectedWalletIndex$.pipe(Object(i.a)(function(e){return e<t.walletListSubject.value.length-1&&void 0!==t.selectedWalletSubject.value})),this.walletSliderPreviousBtnVisible$=this.selectedWalletIndex$.pipe(Object(i.a)(function(e){return e>0&&void 0!==t.selectedWalletSubject.value}))}return u(e,[{key:"getSelectedWallet",value:function(){var e;return null!==(e=this.getWalletList().find(function(e){return e.id===+localStorage.getItem("conceptualWalletId")}))&&void 0!==e?e:void 0}},{key:"getWalletList",value:function(){return o(this.walletListSubject.value)}},{key:"setWallets",value:function(e){this.walletListSubject.next(e)}},{key:"updateWallet",value:function(e,t){var n=this.getWalletList(),r=n.findIndex(function(t){return t.id===e});n[r]=t,this.setWallets(n)}},{key:"selectWallet",value:function(e){this.selectedWalletSubject.next(e),localStorage.setItem("conceptualWalletId",e.id.toString())}},{key:"removeWallet",value:function(e){var t=this.walletListSubject.value.filter(function(t){return t.id!==e});t.length>=0&&(this.setWallets(t),this.selectWallet(t[0]))}},{key:"setLoading",value:function(e){this.loadingSubject.next(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Nb({token:e,factory:e.\u0275fac}),e}()},lw0W:function(e,t,n){"use strict";n.d(t,"b",function(){return h}),n.d(t,"a",function(){return g});var r,i=n("2Vo4"),a=n("XNiG"),o=n("Cfvw"),c=n("vkgz"),l=n("mrSG"),d=n("vHav"),f=function(){function e(){s(this,e)}return u(e,[{key:"getAll",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.a.conceptualWallet.toArray());case 1:case"end":return e.stop()}},e)}))}},{key:"getInitial",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.a.conceptualWallet.toCollection().first());case 1:case"end":return e.stop()}},e)}))}}]),e}(),b=n("CuFO"),v=n("Wgly"),p=n("fXoL"),h=function(e){return e.connected="connected",e.notConnected="not-connected",e.connectionError="connection-error",e}({}),g=((r=function(){function e(t){s(this,e),this.messageFactoryService=t,this.conceptualWalletRepository=new f,this.connectedWalletListSubject=new i.a([]),this.connectedWalletList$=this.connectedWalletListSubject.asObservable(),this.walletConnectionState=new a.a,this.walletConnectionState$=this.walletConnectionState.asObservable(),this.currentWebsiteSubject=new i.a(void 0),this.currentWebsite$=this.currentWebsiteSubject.asObservable(),this.walletConnectedWebsitesSubject=new i.a([]),this.walletConnectedWebsites$=this.walletConnectedWebsitesSubject.asObservable(),this.loadConnectionWalletList(),this.loadCurrentOpenedWebsite()}return u(e,[{key:"loadWalletConnectedWebsites",value:function(e){var t=this,n=this.messageFactoryService.getConnectedSites(e);Object(v.a)(n).subscribe(function(e){t.walletConnectedWebsitesSubject.next(e);var n=e.some(function(e){var n;return e===(null===(n=t.currentWebsiteSubject.value)||void 0===n?void 0:n.origin)});t.walletConnectionState.next(n?h.connected:h.notConnected)})}},{key:"connectWebsiteToWallets",value:function(e,t){var n=this.messageFactoryService.connectSite(t,e);return Object(v.a)(n)}},{key:"disconnectWebsiteFromWallet",value:function(e,t){var n;t===(null===(n=this.currentWebsiteSubject.value)||void 0===n?void 0:n.origin)&&this.setWalletDisconnectState();var r=this.walletConnectedWebsitesSubject.value.filter(function(e){return e!==t});this.walletConnectedWebsitesSubject.next(r);var i=this.messageFactoryService.removeConnectedSite(e,t);return Object(v.a)(i)}},{key:"setWalletDisconnectState",value:function(){this.currentWebsiteSubject.next(void 0),this.walletConnectionState.next(h.notConnected)}},{key:"mapToConnectionWallet",value:function(e){return e.map(function(e){return{id:e.conceptualWalletId,name:e.name,color:e.color}})}},{key:"loadCurrentOpenedWebsite",value:function(){var e=this,t=this.messageFactoryService.websiteConnected();Object(v.a)(t).pipe(Object(c.a)(function(t){if(t){var n=new URL(t);e.currentWebsiteSubject.next(n)}else e.setWalletDisconnectState()})).subscribe(function(){e.loadInitialWalletConnectedWebsites()})}},{key:"loadConnectionWalletList",value:function(){var e=this;Object(o.a)(this.conceptualWalletRepository.getAll()).subscribe(function(t){e.connectedWalletListSubject.next(e.mapToConnectionWallet(t))})}},{key:"loadInitialWalletConnectedWebsites",value:function(){var e=localStorage.getItem("conceptualWalletId");void 0!==e&&this.loadWalletConnectedWebsites(+e)}}]),e}()).\u0275fac=function(e){return new(e||r)(p.dc(b.a))},r.\u0275prov=p.Nb({token:r,factory:r.\u0275fac}),r)}}])}();