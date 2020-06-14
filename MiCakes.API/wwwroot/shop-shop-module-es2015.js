(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shop-shop-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pager/pager.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pager/pager.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<pagination\n  [boundaryLinks]=\"true\"\n  [totalItems]=\"totalCount\"\n  (pageChanged)=\"onPagerChange($event)\"\n  [itemsPerPage]=\"pageSize\"\n  [ngModel] = \"pageNumber\"\n  previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n  lastText=\"&raquo;\">\n</pagination>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/paging-header/paging-header.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/paging-header/paging-header.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <span *ngIf=\"totalCount && totalCount > 0\"\n    >Showing\n    <strong>\n      {{ (pageNumber - 1) * pageSize + 1 }} -\n      {{\n        pageNumber * pageSize > this.totalCount\n          ? this.totalCount\n          : pageNumber * this.pageSize\n      }}\n    </strong>\n    of <strong>{{ this.totalCount }}</strong> results\n  </span>\n  <span *ngIf=\"totalCount === 0\">\n    There are <strong>0</strong> results for this filter\n  </span>\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-details/product-details.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-details/product-details.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\">\n  <div class=\"row\" *ngIf=\"product\">\n    <div class=\"col-6\">\n      <img\n        src=\"{{ product.pictureUrl }}\"\n        alt=\"{{ product.name }}\"\n        class=\"img-fluid w-100\"\n      />\n    </div>\n    <div class=\"col-6\">\n      <h3>{{ product.name }}</h3>\n      <p style=\"font-size: 2em;\">{{ product.price | currency }}</p>\n      <div class=\"d-flex justify-content-start align-items-center\">\n        <i\n          (click)=\"decrementQty()\"\n          class=\"fa fa-minus-circle text-warning mr-2\"\n          style=\"cursor: pointer; font-size: 2em;\"\n        ></i>\n        <span class=\"font-weight-bold\" style=\"font-size: 1.5em;\">{{quantity}}</span>\n        <i\n          (click)=\"incrementQty()\"\n          class=\"fa fa-plus-circle text-warning mx-2\"\n          style=\"cursor: pointer; font-size: 2em;\"\n        ></i>\n        <button class=\"btn btn-outline-primary btn-lg ml-4\" (click)=\"addItemToBasket()\">\n          Add to Cart\n        </button>\n      </div>\n    </div>\n    <div class=\"row mt-5\">\n      <div class=\"col-12 ml-3\">\n        <h4>Description</h4>\n        <p>{{ product.description }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-item/product-item.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-item/product-item.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card h-100 shadow-sm\">\n  <div class=\"image position-relative\" style=\"cursor: pointer;\">\n    <img\n      src=\"{{ product.pictureUrl }}\"\n      alt=\"{{ product.name }}\"\n      class=\"img-fluid bg-light\"\n    />\n    <div class=\"d-flex align-items-center justify-content-center hover-overlay\">\n      <button\n        type=\"button\"\n        (click)=\"addItemToBasket()\"\n        class=\"btn btn-sm btn-primary fa fa-shopping-cart mr-2\"\n      ></button>\n      <button\n        type=\"button\"\n        class=\"btn btn-sm btn-primary\"\n        routerLink=\"/shop/{{ product.id }}\"\n      >\n        View\n      </button>\n    </div>\n  </div>\n  <div class=\"card-body d-flex flex-column\">\n    <a routerLink=\"/shop/{{ product.id }}\">\n      <h6 class=\"text-uppercase\">{{ product.name }}</h6>\n    </a>\n    <span class=\"mb-2\">{{ product.price | currency }}</span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-3\">\r\n  <div class=\"row\">\r\n\r\n    <section class=\"col-3\">\r\n      <ng-container *ngIf=\"types && brands\">\r\n        <h5 class=\"text-warning ml-3 mt-4 mb-3\">Sort</h5>\r\n        <select\r\n          class=\"custom-select mb-4\"\r\n          (change)=\"onSortSelected($event.target.value)\"\r\n        >\r\n          <option *ngFor=\"let opt of sortOptions\"\r\n            [value]=\"opt.value\"\r\n            [selected]=\"shopParams.sort === opt.value\"\r\n            >{{opt.name}}</option>\r\n        </select>\r\n        <h5 class=\"text-warning ml-3\">Brands</h5>\r\n        <ul class=\"list-group my-3\">\r\n          <li\r\n            class=\"list-group-item\"\r\n            *ngFor=\"let brand of brands\"\r\n            [class.active]=\"brand.id === this.shopParams.brandId\"\r\n            [value]=\"brand.id\"\r\n            (click)=\"onBrandSelected(brand.id)\"\r\n          >\r\n            {{ brand.name }}\r\n          </li>\r\n        </ul>\r\n        <h5 class=\"text-warning ml-3\">Types</h5>\r\n        <ul class=\"list-group my-3\">\r\n          <li\r\n            class=\"list-group-item\"\r\n            *ngFor=\"let type of types\"\r\n            [class.active]=\"type.id === this.shopParams.typeId\"\r\n            [value]=\"type.id\"\r\n            (click)=\"onTypeSelected(type.id)\"\r\n          >\r\n            {{ type.name }}\r\n          </li>\r\n        </ul>\r\n      </ng-container>\r\n    </section>\r\n    <section class=\"col-9\">\r\n      <div class=\"d-flex justify-content-between align-items-center pb-2\">\r\n        <app-paging-header\r\n          [pageNumber]=\"shopParams.pageNumber\"\r\n          [pageSize]=\"shopParams.pageSize\"\r\n          [totalCount]=\"totalCount\"\r\n        ></app-paging-header>\r\n\r\n        <div class=\"form-inline\" *ngIf=\"products\">\r\n          <input\r\n            class=\"form-control mr-2\"\r\n            style=\"width: 300px;\"\r\n            placeholder=\"Search..\"\r\n            (keyup.enter) = \"onSearch()\"\r\n            #search\r\n            type=\"text\"\r\n          />\r\n          <button (click)=\"onSearch()\"  class=\"btn btn-outline-primary my-2\">Search</button>\r\n          <button (click)=\"onReset()\" class=\"btn btn-outline-success my-2 ml-2\">Reset</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-4 mb-4\" *ngFor=\"let item of products\">\r\n          <app-product-item [product]=\"item\"></app-product-item>\r\n        </div>\r\n      </div>\r\n      <div class=\"d-flex justify-content-center\" *ngIf=\"products && totalCount !== 0\">\r\n        <app-pager\r\n          [totalCount]=\"totalCount\"\r\n          [pageSize]=\"shopParams.pageSize\"\r\n          [pageNumber]=\"shopParams.pageNumber\"\r\n          (pageChanged)=\"this.onPageChanged($event)\"\r\n        ></app-pager>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/shared/components/pager/pager.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/pager/pager.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2VyL3BhZ2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/pager/pager.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/pager/pager.component.ts ***!
  \************************************************************/
/*! exports provided: PagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagerComponent = class PagerComponent {
    constructor() {
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onPagerChange(event) {
        this.pageChanged.emit(event.page);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagerComponent.prototype, "totalCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagerComponent.prototype, "pageSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagerComponent.prototype, "pageNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PagerComponent.prototype, "pageChanged", void 0);
PagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pager',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pager/pager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pager.component.scss */ "./src/app/shared/components/pager/pager.component.scss")).default]
    })
], PagerComponent);



/***/ }),

/***/ "./src/app/shared/components/paging-header/paging-header.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/paging-header/paging-header.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2luZy1oZWFkZXIvcGFnaW5nLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/paging-header/paging-header.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/paging-header/paging-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: PagingHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingHeaderComponent", function() { return PagingHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagingHeaderComponent = class PagingHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagingHeaderComponent.prototype, "pageNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagingHeaderComponent.prototype, "pageSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PagingHeaderComponent.prototype, "totalCount", void 0);
PagingHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paging-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paging-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/paging-header/paging-header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paging-header.component.scss */ "./src/app/shared/components/paging-header/paging-header.component.scss")).default]
    })
], PagingHeaderComponent);



/***/ }),

/***/ "./src/app/shared/models/pagination.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/pagination.ts ***!
  \*********************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Pagination {
    constructor() {
        this.data = [];
    }
}


/***/ }),

/***/ "./src/app/shared/models/shop-params.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/shop-params.ts ***!
  \**********************************************/
/*! exports provided: ShopParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopParams", function() { return ShopParams; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ShopParams {
    constructor() {
        this.brandId = 0;
        this.typeId = 0;
        this.sort = 'name';
        this.pageNumber = 1;
        this.pageSize = 6;
    }
}


/***/ }),

/***/ "./src/app/shop/product-details/product-details.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shop/product-details/product-details.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shop/product-details/product-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shop/product-details/product-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shop.service */ "./src/app/shop/shop.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xng-breadcrumb */ "./node_modules/xng-breadcrumb/fesm2015/xng-breadcrumb.js");
/* harmony import */ var src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/basket/basket.service */ "./src/app/basket/basket.service.ts");






let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(shopService, activatedRoute, bcService, basketService) {
        this.shopService = shopService;
        this.activatedRoute = activatedRoute;
        this.bcService = bcService;
        this.basketService = basketService;
        this.quantity = 1;
        this.bcService.set('@productDetails', '');
    }
    ngOnInit() {
        this.loadProduct();
    }
    addItemToBasket() {
        this.basketService.addItemToBasket(this.product, this.quantity);
    }
    incrementQty() {
        this.quantity++;
    }
    decrementQty() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }
    loadProduct() {
        const id = +this.activatedRoute.snapshot.paramMap.get('id');
        this.shopService.getProduct(id).subscribe((response) => {
            this.product = response;
            this.bcService.set('@productDetails', this.product.name);
        }, (error) => {
            console.log(error);
        });
    }
};
ProductDetailsComponent.ctorParameters = () => [
    { type: _shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbService"] },
    { type: src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_5__["BasketService"] }
];
ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-details/product-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-details.component.scss */ "./src/app/shop/product-details/product-details.component.scss")).default]
    })
], ProductDetailsComponent);



/***/ }),

/***/ "./src/app/shop/product-item/product-item.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shop/product-item/product-item.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  width: 30%;\n  height: 40px;\n}\n\n.image :hover {\n  opacity: 1;\n}\n\n.image :hover button {\n  transform: none;\n  opacity: 1;\n}\n\n.hover-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(255, 255, 255, 0.5);\n  opacity: 0;\n  transition: all 0.5s;\n}\n\n.hover-overlay button {\n  z-index: 1000;\n  transition: all 0.5s;\n}\n\n.hover-overlay button:first-of-type {\n  transform: translateX(-20px);\n}\n\n.hover-overlay button:last-of-type {\n  transform: translateX(20px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9wcm9kdWN0LWl0ZW0vQzpcXFVzZXJzXFxVRG9zc3Vtb3ZcXHJlcG9zXFxNaUNha2VzXFxjbGllbnQvc3JjXFxhcHBcXHNob3BcXHByb2R1Y3QtaXRlbVxccHJvZHVjdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaG9wL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtBQ0VGOztBRERFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUNHSjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDRUY7O0FEREU7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7QUNHSjs7QURERTtFQUNFLDRCQUFBO0FDR0o7O0FEREU7RUFDRSwyQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvc2hvcC9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmltYWdlIDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICAmIGJ1dHRvbiB7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmhvdmVyLW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwgMC41KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICYgYnV0dG9uIHtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICB9XHJcbiAgJiBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG4gIH1cclxuICAmIGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gIH1cclxufVxyXG4iLCIuYnRuIHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uaW1hZ2UgOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5pbWFnZSA6aG92ZXIgYnV0dG9uIHtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaG92ZXItb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuLmhvdmVyLW92ZXJsYXkgYnV0dG9uIHtcbiAgei1pbmRleDogMTAwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG4uaG92ZXItb3ZlcmxheSBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG59XG4uaG92ZXItb3ZlcmxheSBidXR0b246bGFzdC1vZi10eXBlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shop/product-item/product-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shop/product-item/product-item.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basket/basket.service */ "./src/app/basket/basket.service.ts");



let ProductItemComponent = class ProductItemComponent {
    constructor(basketService) {
        this.basketService = basketService;
    }
    ngOnInit() {
    }
    addItemToBasket() {
        this.basketService.addItemToBasket(this.product);
    }
};
ProductItemComponent.ctorParameters = () => [
    { type: src_app_basket_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemComponent.prototype, "product", void 0);
ProductItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/product-item/product-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-item.component.scss */ "./src/app/shop/product-item/product-item.component.scss")).default]
    })
], ProductItemComponent);



/***/ }),

/***/ "./src/app/shop/shop-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shop/shop-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/shop/product-details/product-details.component.ts");





const routes = [
    { path: '', component: _shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"] },
    {
        path: ':id',
        component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"],
        data: { breadcrumb: { alias: 'productDetails' } },
    },
];
let ShopRoutingModule = class ShopRoutingModule {
};
ShopRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], ShopRoutingModule);



/***/ }),

/***/ "./src/app/shop/shop.component.scss":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-group-item {\n  cursor: pointer;\n  border: none;\n  padding: 10px 20px;\n  font-size: 1.1em;\n}\n.list-group-item:focus {\n  outline: none;\n}\n.list-group-item.active {\n  border-radius: 10px;\n}\n.list-group-item:not(.active):hover {\n  color: #fff;\n  background-color: #78c2ad6b;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9DOlxcVXNlcnNcXFVEb3NzdW1vdlxccmVwb3NcXE1pQ2FrZXNcXGNsaWVudC9zcmNcXGFwcFxcc2hvcFxcc2hvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBRENFO0VBQ0UsbUJBQUE7QUNDSjtBRENFO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Nob3Avc2hvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcbiAgJjpub3QoLmFjdGl2ZSk6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhjMmFkNmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCIubGlzdC1ncm91cC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbn1cbi5saXN0LWdyb3VwLWl0ZW06Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmxpc3QtZ3JvdXAtaXRlbTpub3QoLmFjdGl2ZSk6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4YzJhZDZiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.service */ "./src/app/shop/shop.service.ts");
/* harmony import */ var _shared_models_shop_params__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/shop-params */ "./src/app/shared/models/shop-params.ts");




let ShopComponent = class ShopComponent {
    constructor(shopService) {
        this.shopService = shopService;
        this.sortOptions = [
            { name: 'Alphabetical', value: 'name' },
            { name: 'Low to high', value: 'priceAsc' },
            { name: 'High to low', value: 'priceDesc' },
        ];
        this.shopParams = this.shopService.getShopParams();
    }
    ngOnInit() {
        this.getProducts(true);
        this.getBrands();
        this.getTypes();
    }
    getProducts(useCache = false) {
        this.shopService.getProducts(useCache).subscribe((response) => {
            this.products = response.data;
            this.totalCount = response.count;
        }, (error) => {
            console.log(error);
        });
    }
    getBrands() {
        this.shopService.getBrands().subscribe((response) => {
            this.brands = [{ id: 0, name: 'All' }, ...response];
        }, (error) => {
            console.log(error);
        });
    }
    getTypes() {
        this.shopService.getTypes().subscribe((response) => {
            this.types = [{ id: 0, name: 'All' }, ...response];
        }, (error) => {
            console.log(error);
        });
    }
    onBrandSelected(brandId) {
        const params = this.shopService.getShopParams();
        params.brandId = brandId;
        params.pageNumber = 1;
        this.shopService.setShopParams(params);
        this.getProducts();
    }
    onTypeSelected(typeId) {
        const params = this.shopService.getShopParams();
        params.typeId = typeId;
        params.pageNumber = 1;
        this.shopService.setShopParams(params);
        this.getProducts();
    }
    onSortSelected(sort) {
        const params = this.shopService.getShopParams();
        params.sort = sort;
        this.shopService.setShopParams(params);
        this.getProducts();
    }
    onPageChanged(event) {
        const params = this.shopService.getShopParams();
        if (params.pageNumber !== event) {
            params.pageNumber = event;
            this.shopService.setShopParams(params);
            this.getProducts(true);
        }
    }
    onSearch() {
        const params = this.shopService.getShopParams();
        params.search = this.searchTerm.nativeElement.value;
        params.pageNumber = 1;
        this.shopService.setShopParams(params);
        this.getProducts();
    }
    onReset() {
        this.searchTerm.nativeElement.value = '';
        this.shopParams = new _shared_models_shop_params__WEBPACK_IMPORTED_MODULE_3__["ShopParams"]();
        this.shopService.setShopParams(this.shopParams);
        this.getProducts();
    }
};
ShopComponent.ctorParameters = () => [
    { type: _shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: false })
], ShopComponent.prototype, "searchTerm", void 0);
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shop.component.scss */ "./src/app/shop/shop.component.scss")).default]
    })
], ShopComponent);



/***/ }),

/***/ "./src/app/shop/shop.module.ts":
/*!*************************************!*\
  !*** ./src/app/shop/shop.module.ts ***!
  \*************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-item/product-item.component */ "./src/app/shop/product-item/product-item.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/pager/pager.component */ "./src/app/shared/components/pager/pager.component.ts");
/* harmony import */ var _shared_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/paging-header/paging-header.component */ "./src/app/shared/components/paging-header/paging-header.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/shop/product-details/product-details.component.ts");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shop-routing.module */ "./src/app/shop/shop-routing.module.ts");










let ShopModule = class ShopModule {
};
ShopModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__["ProductItemComponent"], _shared_components_pager_pager_component__WEBPACK_IMPORTED_MODULE_6__["PagerComponent"], _shared_components_paging_header_paging_header_component__WEBPACK_IMPORTED_MODULE_7__["PagingHeaderComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _shop_routing_module__WEBPACK_IMPORTED_MODULE_9__["ShopRoutingModule"]]
    })
], ShopModule);



/***/ }),

/***/ "./src/app/shop/shop.service.ts":
/*!**************************************!*\
  !*** ./src/app/shop/shop.service.ts ***!
  \**************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_models_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/models/pagination */ "./src/app/shared/models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_models_shop_params__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/models/shop-params */ "./src/app/shared/models/shop-params.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let ShopService = class ShopService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.products = [];
        this.brands = [];
        this.types = [];
        this.pagination = new _shared_models_pagination__WEBPACK_IMPORTED_MODULE_3__["Pagination"]();
        this.shopParams = new _shared_models_shop_params__WEBPACK_IMPORTED_MODULE_5__["ShopParams"]();
    }
    getProducts(useCache) {
        if (!useCache) {
            this.products = [];
        }
        if (this.products.length > 0 && useCache) {
            const pagesReceived = Math.ceil(this.products.length / this.shopParams.pageSize);
            if (this.shopParams.pageNumber <= pagesReceived) {
                this.pagination.data = this.products.slice((this.shopParams.pageNumber - 1) * this.shopParams.pageSize, this.shopParams.pageNumber * this.shopParams.pageSize);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.pagination);
            }
        }
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (this.shopParams.brandId !== 0) {
            params = params.append('brandId', this.shopParams.brandId.toString());
        }
        if (this.shopParams.typeId !== 0) {
            params = params.append('typeId', this.shopParams.typeId.toString());
        }
        if (this.shopParams.search) {
            params = params.append('search', this.shopParams.search);
        }
        params = params.append('sort', this.shopParams.sort);
        params = params.append('pageIndex', this.shopParams.pageNumber.toString());
        params = params.append('pageSize', this.shopParams.pageSize.toString());
        return this.http
            .get(this.baseUrl + 'products', {
            observe: 'response',
            params,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            this.products = [...this.products, ...response.body.data];
            this.pagination = response.body;
            return this.pagination;
        }));
    }
    setShopParams(params) {
        this.shopParams = params;
    }
    getShopParams() {
        return this.shopParams;
    }
    getProduct(id) {
        const product = this.products.find(p => p.id === id);
        if (product) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(product);
        }
        return this.http.get(this.baseUrl + 'products/' + id);
    }
    getBrands() {
        if (this.brands.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.brands);
        }
        return this.http.get(this.baseUrl + 'products/brands')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            this.brands = response;
            return response;
        }));
    }
    getTypes() {
        if (this.types.length > 0) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(this.types);
        }
        return this.http.get(this.baseUrl + 'products/types')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(response => {
            this.types = response;
            return response;
        }));
    }
};
ShopService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShopService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ShopService);



/***/ })

}]);
//# sourceMappingURL=shop-shop-module-es2015.js.map