function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/order-detailed/order-detailed.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/order-detailed/order-detailed.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrdersOrderDetailedOrderDetailedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"order && order.orderItems\">\n  <div class=\"container mt-5\">\n    <div class=\"row\">\n      <div class=\"col-8\">\n        <app-basket-summary\n          [isOrder]=\"true\"\n          [isBasket]=\"false\"\n          [items]=\"order.orderItems\"\n        ></app-basket-summary>\n      </div>\n      <div class=\"col-4\">\n        <app-order-totals\n          [subTotal]=\"order.subtotal\"\n          [shipping]=\"order.shippingPrice\"\n          [total]=\"order.total\"\n          [isCheckout]=\"false\">\n        </app-order-totals>\n      </div>\n    </div>\n  </div>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrdersOrdersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container mt-5\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <table class=\"table table-hover\" style=\"cursor: pointer;\">\n          <thead class=\"thead-light\">\n          <tr>\n            <th>Order</th>\n            <th>Date</th>\n            <th>Total</th>\n            <th>Status</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let order of orders\" routerLink=\"/orders/{{order.id}}\">\n            <th># {{order.id}}</th>\n            <td>{{order.orderDate | date: 'medium'}}</td>\n            <td>{{order.total | currency}}</td>\n            <td>{{order.status}}</td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./src/app/orders/order-detailed/order-detailed.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/orders/order-detailed/order-detailed.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrdersOrderDetailedOrderDetailedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlci1kZXRhaWxlZC9vcmRlci1kZXRhaWxlZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/orders/order-detailed/order-detailed.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/orders/order-detailed/order-detailed.component.ts ***!
    \*******************************************************************/

  /*! exports provided: OrderDetailedComponent */

  /***/
  function srcAppOrdersOrderDetailedOrderDetailedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailedComponent", function () {
      return OrderDetailedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! xng-breadcrumb */
    "./node_modules/xng-breadcrumb/fesm2015/xng-breadcrumb.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../orders.service */
    "./src/app/orders/orders.service.ts");

    var OrderDetailedComponent = /*#__PURE__*/function () {
      function OrderDetailedComponent(bcService, activatedRoute, ordersService) {
        _classCallCheck(this, OrderDetailedComponent);

        this.bcService = bcService;
        this.activatedRoute = activatedRoute;
        this.ordersService = ordersService;
        this.bcService.set('@orderDetails', '');
      }

      _createClass(OrderDetailedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadOrder();
        }
      }, {
        key: "loadOrder",
        value: function loadOrder() {
          var _this = this;

          var id = +this.activatedRoute.snapshot.paramMap.get('id');
          this.ordersService.getOrder(id).subscribe(function (response) {
            _this.order = response;

            _this.bcService.set('@orderDetails', 'Order #' + _this.order.id + ' - ' + _this.order.status);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return OrderDetailedComponent;
    }();

    OrderDetailedComponent.ctorParameters = function () {
      return [{
        type: xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"]
      }];
    };

    OrderDetailedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order-detailed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-detailed.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/order-detailed/order-detailed.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-detailed.component.scss */
      "./src/app/orders/order-detailed/order-detailed.component.scss"))["default"]]
    })], OrderDetailedComponent);
    /***/
  },

  /***/
  "./src/app/orders/orders-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/orders/orders-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: OrdersRoutingModule */

  /***/
  function srcAppOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function () {
      return OrdersRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./orders.component */
    "./src/app/orders/orders.component.ts");
    /* harmony import */


    var _order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order-detailed/order-detailed.component */
    "./src/app/orders/order-detailed/order-detailed.component.ts");

    var routes = [{
      path: '',
      component: _orders_component__WEBPACK_IMPORTED_MODULE_4__["OrdersComponent"]
    }, {
      path: ':id',
      component: _order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_5__["OrderDetailedComponent"],
      data: {
        breadcrumb: {
          alias: 'orderDetails'
        }
      }
    }];

    var OrdersRoutingModule = function OrdersRoutingModule() {
      _classCallCheck(this, OrdersRoutingModule);
    };

    OrdersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], OrdersRoutingModule);
    /***/
  },

  /***/
  "./src/app/orders/orders.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/orders/orders.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrdersOrdersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/orders/orders.component.ts":
  /*!********************************************!*\
    !*** ./src/app/orders/orders.component.ts ***!
    \********************************************/

  /*! exports provided: OrdersComponent */

  /***/
  function srcAppOrdersOrdersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
      return OrdersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./orders.service */
    "./src/app/orders/orders.service.ts");

    var OrdersComponent = /*#__PURE__*/function () {
      function OrdersComponent(ordersService) {
        _classCallCheck(this, OrdersComponent);

        this.ordersService = ordersService;
      }

      _createClass(OrdersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getOrders();
        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          var _this2 = this;

          this.ordersService.getOrders().subscribe(function (response) {
            _this2.orders = response;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return OrdersComponent;
    }();

    OrdersComponent.ctorParameters = function () {
      return [{
        type: _orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]
      }];
    };

    OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/orders/orders.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.component.scss */
      "./src/app/orders/orders.component.scss"))["default"]]
    })], OrdersComponent);
    /***/
  },

  /***/
  "./src/app/orders/orders.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/orders/orders.module.ts ***!
    \*****************************************/

  /*! exports provided: OrdersModule */

  /***/
  function srcAppOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersModule", function () {
      return OrdersModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-detailed/order-detailed.component */
    "./src/app/orders/order-detailed/order-detailed.component.ts");
    /* harmony import */


    var _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./orders-routing.module */
    "./src/app/orders/orders-routing.module.ts");
    /* harmony import */


    var _orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./orders.component */
    "./src/app/orders/orders.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var OrdersModule = function OrdersModule() {
      _classCallCheck(this, OrdersModule);
    };

    OrdersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_order_detailed_order_detailed_component__WEBPACK_IMPORTED_MODULE_3__["OrderDetailedComponent"], _orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_4__["OrdersRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
    })], OrdersModule);
    /***/
  },

  /***/
  "./src/app/orders/orders.service.ts":
  /*!******************************************!*\
    !*** ./src/app/orders/orders.service.ts ***!
    \******************************************/

  /*! exports provided: OrdersService */

  /***/
  function srcAppOrdersOrdersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersService", function () {
      return OrdersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var OrdersService = /*#__PURE__*/function () {
      function OrdersService(http) {
        _classCallCheck(this, OrdersService);

        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      _createClass(OrdersService, [{
        key: "getOrders",
        value: function getOrders() {
          return this.http.get(this.baseUrl + 'orders');
        }
      }, {
        key: "getOrder",
        value: function getOrder(id) {
          return this.http.get(this.baseUrl + 'orders/' + id);
        }
      }]);

      return OrdersService;
    }();

    OrdersService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    OrdersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OrdersService);
    /***/
  }
}]);
//# sourceMappingURL=orders-orders-module-es5.js.map