(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{PTPi:function(t,e,o){"use strict";o.r(e),o.d(e,"AuthLayoutModule",(function(){return p}));var r=o("tyNb"),b=o("ofXK"),n=o("3Pt+"),i=o("qfBg"),a=o("fXoL");function c(t,e){1&t&&(a.Qb(0,"div",34),a.Hc(1," Username & password not registered. "),a.Pb())}var s=[{path:"login",component:function(){function t(t,e,o,r){this.userService=t,this.activatedRoute=e,this.formBuilder=o,this.router=r,this.formError=!1,this.loginForm=this.formBuilder.group({username:["",[n.n.required,n.n.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]],password:[null,n.n.required]})}return t.prototype.ngOnInit=function(){},t.prototype.login=function(t){var e=this;console.log(t),this.userService.login(t).subscribe((function(t){e.router.navigate(["dashboard"],{replaceUrl:!0})}),(function(t){e.formError=!0}))},t.prototype.ngOnDestroy=function(){},t.\u0275fac=function(e){return new(e||t)(a.Kb(i.a),a.Kb(r.a),a.Kb(n.b),a.Kb(r.b))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-login"]],decls:44,vars:3,consts:[[1,"header","bg-gradient-default","py-5","py-xxl-8"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-6"],[1,"text-white"],[1,"text-lead","text-white"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-dark"],[1,"container","mt--8","pb-5"],[1,"col-lg-5","col-md-7"],[1,"card","bg-dark","shadow","border-0"],[1,"card-header","bg-transparent","mx-auto","py-5"],["src","./assets/img/brand/logo.png","alt","...",1,"navbar-brand-img"],[1,"card-body","px-lg-5","py-lg-5"],[3,"formGroup","submit"],[1,"form-group","mb-3"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-email-83"],["formControlName","username","placeholder","Email","type","email",1,"form-control"],[1,"form-group"],[1,"ni","ni-lock-circle-open"],["formControlName","password","placeholder","Password","type","password",1,"form-control"],[1,"input-group-append"],[1,"fas","fa-low-vision"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"text-center","mt-5"],["type","submit",1,"btn","btn-primary","w-100",3,"disabled"],[1,"row","mt-3"],[1,"col-6"],["href","javascript:void(0)",1,"text-light"],["role","alert",1,"alert","alert-danger"]],template:function(t,e){1&t&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"div",2),a.Qb(3,"div",3),a.Qb(4,"div",4),a.Qb(5,"h1",5),a.Hc(6,"Welcome!"),a.Pb(),a.Qb(7,"p",6),a.Hc(8,"Login to your Powerfully Fit account to manage, track & assign workouts."),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(9,"div",7),a.ec(),a.Qb(10,"svg",8),a.Lb(11,"polygon",9),a.Pb(),a.Pb(),a.Pb(),a.dc(),a.Qb(12,"div",10),a.Qb(13,"div",3),a.Qb(14,"div",11),a.Qb(15,"div",12),a.Qb(16,"div",13),a.Lb(17,"img",14),a.Pb(),a.Qb(18,"div",15),a.Qb(19,"form",16),a.bc("submit",(function(){return e.login(e.loginForm.value)})),a.Qb(20,"div",17),a.Qb(21,"div",18),a.Qb(22,"div",19),a.Qb(23,"span",20),a.Lb(24,"i",21),a.Pb(),a.Pb(),a.Lb(25,"input",22),a.Pb(),a.Pb(),a.Qb(26,"div",23),a.Qb(27,"div",18),a.Qb(28,"div",19),a.Qb(29,"span",20),a.Lb(30,"i",24),a.Pb(),a.Pb(),a.Lb(31,"input",25),a.Qb(32,"div",26),a.Qb(33,"span",20),a.Lb(34,"i",27),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Fc(35,c,2,0,"div",28),a.Qb(36,"div",29),a.Qb(37,"button",30),a.Hc(38,"LOG IN"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(39,"div",31),a.Qb(40,"div",32),a.Qb(41,"a",33),a.Qb(42,"small"),a.Hc(43,"Forgot password?"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&t&&(a.xb(19),a.lc("formGroup",e.loginForm),a.xb(16),a.lc("ngIf",e.formError),a.xb(2),a.lc("disabled",!e.loginForm.valid))},directives:[n.p,n.i,n.d,n.a,n.h,n.c,b.n],styles:[""]}),t}()},{path:"register",component:function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-register"]],decls:71,vars:0,consts:[[1,"header","bg-gradient-danger","py-7","py-lg-8"],[1,"container"],[1,"header-body","text-center","mb-7"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-6"],[1,"text-white"],[1,"text-lead","text-light"],[1,"separator","separator-bottom","separator-skew","zindex-100"],["x","0","y","0","viewBox","0 0 2560 100","preserveAspectRatio","none","version","1.1","xmlns","http://www.w3.org/2000/svg"],["points","2560 0 2560 100 0 100",1,"fill-default"],[1,"container","mt--8","pb-5"],[1,"col-lg-6","col-md-8"],[1,"card","bg-secondary","shadow","border-0"],[1,"card-header","bg-transparent","pb-5"],[1,"text-muted","text-center","mt-2","mb-4"],[1,"text-center"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon","mr-4"],[1,"btn-inner--icon"],["src","assets/img/icons/common/github.svg"],[1,"btn-inner--text"],["href","javascript:void(0)",1,"btn","btn-neutral","btn-icon"],["src","assets/img/icons/common/google.svg"],[1,"card-body","px-lg-5","py-lg-5"],[1,"text-center","text-muted","mb-4"],["role","form"],[1,"form-group"],[1,"input-group","input-group-alternative","mb-3"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"ni","ni-hat-3"],["placeholder","Name","type","text",1,"form-control"],[1,"ni","ni-email-83"],["placeholder","Email","type","email",1,"form-control"],[1,"input-group","input-group-alternative"],[1,"ni","ni-lock-circle-open"],["placeholder","Password","type","password",1,"form-control"],[1,"text-muted","font-italic"],[1,"text-success","font-weight-700"],[1,"row","my-4"],[1,"col-12"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckRegister","type","checkbox",1,"custom-control-input"],["for","customCheckRegister",1,"custom-control-label"],[1,"text-muted"],["href","#!"],["type","button",1,"btn","btn-primary","mt-4"]],template:function(t,e){1&t&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"div",2),a.Qb(3,"div",3),a.Qb(4,"div",4),a.Qb(5,"h1",5),a.Hc(6,"Welcome!"),a.Pb(),a.Qb(7,"p",6),a.Hc(8,"Use these awesome forms to login or create new account in your project for free."),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(9,"div",7),a.ec(),a.Qb(10,"svg",8),a.Lb(11,"polygon",9),a.Pb(),a.Pb(),a.Pb(),a.dc(),a.Qb(12,"div",10),a.Qb(13,"div",3),a.Qb(14,"div",11),a.Qb(15,"div",12),a.Qb(16,"div",13),a.Qb(17,"div",14),a.Qb(18,"small"),a.Hc(19,"Sign up with"),a.Pb(),a.Pb(),a.Qb(20,"div",15),a.Qb(21,"a",16),a.Qb(22,"span",17),a.Lb(23,"img",18),a.Pb(),a.Qb(24,"span",19),a.Hc(25,"Github"),a.Pb(),a.Pb(),a.Qb(26,"a",20),a.Qb(27,"span",17),a.Lb(28,"img",21),a.Pb(),a.Qb(29,"span",19),a.Hc(30,"Google"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(31,"div",22),a.Qb(32,"div",23),a.Qb(33,"small"),a.Hc(34,"Or sign up with credentials"),a.Pb(),a.Pb(),a.Qb(35,"form",24),a.Qb(36,"div",25),a.Qb(37,"div",26),a.Qb(38,"div",27),a.Qb(39,"span",28),a.Lb(40,"i",29),a.Pb(),a.Pb(),a.Lb(41,"input",30),a.Pb(),a.Pb(),a.Qb(42,"div",25),a.Qb(43,"div",26),a.Qb(44,"div",27),a.Qb(45,"span",28),a.Lb(46,"i",31),a.Pb(),a.Pb(),a.Lb(47,"input",32),a.Pb(),a.Pb(),a.Qb(48,"div",25),a.Qb(49,"div",33),a.Qb(50,"div",27),a.Qb(51,"span",28),a.Lb(52,"i",34),a.Pb(),a.Pb(),a.Lb(53,"input",35),a.Pb(),a.Pb(),a.Qb(54,"div",36),a.Qb(55,"small"),a.Hc(56,"password strength: "),a.Qb(57,"span",37),a.Hc(58,"strong"),a.Pb(),a.Pb(),a.Pb(),a.Qb(59,"div",38),a.Qb(60,"div",39),a.Qb(61,"div",40),a.Lb(62,"input",41),a.Qb(63,"label",42),a.Qb(64,"span",43),a.Hc(65,"I agree with the "),a.Qb(66,"a",44),a.Hc(67,"Privacy Policy"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(68,"div",15),a.Qb(69,"button",45),a.Hc(70,"Create account"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb())},directives:[n.p,n.i,n.j],styles:[""]}),t}()}],p=function(){function t(){}return t.\u0275mod=a.Ib({type:t}),t.\u0275inj=a.Hb({factory:function(e){return new(e||t)},imports:[[b.b,r.e.forChild(s),n.e,n.m]]}),t}()}}]);