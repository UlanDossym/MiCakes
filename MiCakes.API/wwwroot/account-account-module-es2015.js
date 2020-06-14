(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-center mt-5\">\n  <div class=\"col-3\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n      <div class=\"text-center mb-4\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">Login</h1>\n      </div>\n      <app-text-input formControlName=\"email\" [label]=\"'Email Address'\"></app-text-input>\n      <app-text-input formControlName=\"password\" [label]=\"'Password'\" [type]=\"'password'\"></app-text-input>\n\n      <button [disabled]=\"loginForm.invalid\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n        Sign in\n      </button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-center mt-5\">\n  <div class=\"col-3\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n      <div class=\"text-center mb-4\">\n        <h1 class=\"h3 mb-3 font-weight-normal\">Register</h1>\n      </div>\n      <app-text-input formControlName=\"displayName\" [label]=\"'Display Name'\"></app-text-input>\n      <app-text-input formControlName=\"email\" [label]=\"'Email Address'\"></app-text-input>\n      <app-text-input formControlName=\"password\" [label]=\"'Password'\" [type]=\"'password'\"></app-text-input>\n\n      <ul class=\"text-danger list-unstyled\" *ngIf=\"errors\">\n        <li *ngFor=\"let item of errors\">\n          {{item}}\n        </li>\n      </ul>\n\n      <button [disabled]=\"registerForm.invalid\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">\n        Register\n      </button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/account/register/register.component.ts");






const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] }
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], AccountRoutingModule);



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/account/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/account/register/register.component.ts");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







let AccountModule = class AccountModule {
};
AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
    })
], AccountModule);



/***/ }),

/***/ "./src/app/account/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/account/login/login.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/account/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/account/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(accountService, router, activatedRoute) {
        this.accountService = accountService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.createLoginForm();
        this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/shop';
    }
    createLoginForm() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    onSubmit() {
        console.log(this.loginForm.value);
        this.accountService.login(this.loginForm.value)
            .subscribe(response => {
            this.router.navigateByUrl(this.returnUrl);
        }, error => {
            console.log(error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/account/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/account/register/register.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/account/register/register.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/account/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/account/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account.service */ "./src/app/account/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let RegisterComponent = class RegisterComponent {
    constructor(fb, accountService, router) {
        this.fb = fb;
        this.accountService = accountService;
        this.router = router;
    }
    ngOnInit() {
        this.createRegisterForm();
    }
    onSubmit() {
        this.accountService.register(this.registerForm.value)
            .subscribe(() => {
            this.router.navigateByUrl('/shop');
        }, error => {
            console.log(error);
            this.errors = error.errors;
        });
    }
    validateEmailNotTaken() {
        return control => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(500).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => {
                if (!control.value) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
                }
                return this.accountService.checkEmailExists(control.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
                    return res ? { emailExists: true } : null;
                }));
            }));
        };
    }
    createRegisterForm() {
        this.registerForm = this.fb.group({
            displayName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
                ],
                [
                    this.validateEmailNotTaken()
                ]
            ],
            password: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(`(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$`),
                ],
            ],
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/account/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map