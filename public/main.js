(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'detalles', component: _details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
    { path: 'info', component: _info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'microproyecto2';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/components/banner/banner.component.ts");
/* harmony import */ var _components_thumbs_thumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/thumbs/thumbs.component */ "./src/app/components/thumbs/thumbs.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./info/info.component */ "./src/app/info/info.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
                _components_thumbs_thumbs_component__WEBPACK_IMPORTED_MODULE_7__["ThumbsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_9__["DetailsComponent"],
                _info_info_component__WEBPACK_IMPORTED_MODULE_10__["InfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/banner/banner.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/banner/banner.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link{\n    color:rgb(167, 209, 41);\n    border-top-width:initial;\n    border-right-width:initial;\n    border-bottom-width:initial;\n    border-left-width:initial;\n    border-top-style:solid;\n    border-right-style:solid;\n    border-bottom-style:solid;\n    border-left-style:solid;\n    border-top-color:rgb(167, 209, 41);\n    border-right-color:rgb(167, 209, 41);\n    border-bottom-color:rgb(167, 209, 41);\n    border-left-color:rgb(167, 209, 41);\n    border-image-source:initial;\n    border-image-slice:initial;\n    border-image-width:initial;\n    border-image-outset:initial;\n    border-image-repeat:initial;\n  }\n  .btn.btn-outline-success.my-2.my-sm-0{\n    color:rgb(167, 209, 41);\n    background-color:rgb(27, 25, 25);\n    border-top-width:1px;\n    border-right-width:1px;\n    border-bottom-width:1px;\n    border-left-width:1px;\n    border-top-style:solid;\n    border-right-style:solid;\n    border-bottom-style:solid;\n    border-left-style:solid;\n    border-top-color:rgb(27, 25, 25);\n    border-right-color:rgb(27, 25, 25);\n    border-bottom-color:rgb(27, 25, 25);\n    border-left-color:rgb(27, 25, 25);\n    border-image-source:initial;\n    border-image-slice:initial;\n    border-image-width:initial;\n    border-image-outset:initial;\n    border-image-repeat:initial;\n  }\n  .navbar.navbar-expand-lg.navbar-light.bg-light{\n    text-align:center;\n    background-color:rgb(27, 25, 25);\n    color:rgb(167, 209, 41);\n  }\n  .c4553{\n    display:inline !important;\n  }\n  .c4536{\n    background-color:rgb(27, 25, 25);\n    font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    font-size:1rem;\n    display:inline !important;\n  }\n  .navbar{\n    background-color:rgb(27, 25, 25);\n  }\n  .c2463{\n    color:black;\n  }\n  .sidebar-sticky{\n    position:relative;\n    top:0px;\n    height:calc(100vh - 40px);\n    padding-top:0.5rem;\n    overflow-x:hidden;\n    overflow-y:auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsb0xBQW9MO0lBQ3BMLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGlua3tcbiAgICBjb2xvcjpyZ2IoMTY3LCAyMDksIDQxKTtcbiAgICBib3JkZXItdG9wLXdpZHRoOmluaXRpYWw7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOmluaXRpYWw7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDppbml0aWFsO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOmluaXRpYWw7XG4gICAgYm9yZGVyLXRvcC1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6c29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItbGVmdC1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItdG9wLWNvbG9yOnJnYigxNjcsIDIwOSwgNDEpO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjpyZ2IoMTY3LCAyMDksIDQxKTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOnJnYigxNjcsIDIwOSwgNDEpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOnJnYigxNjcsIDIwOSwgNDEpO1xuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6aW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6aW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2Utd2lkdGg6aW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2Utb3V0c2V0OmluaXRpYWw7XG4gICAgYm9yZGVyLWltYWdlLXJlcGVhdDppbml0aWFsO1xuICB9XG4gIC5idG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5teS0yLm15LXNtLTB7XG4gICAgY29sb3I6cmdiKDE2NywgMjA5LCA0MSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjcsIDI1LCAyNSk7XG4gICAgYm9yZGVyLXRvcC13aWR0aDoxcHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOjFweDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOjFweDtcbiAgICBib3JkZXItbGVmdC13aWR0aDoxcHg7XG4gICAgYm9yZGVyLXRvcC1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6c29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItbGVmdC1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItdG9wLWNvbG9yOnJnYigyNywgMjUsIDI1KTtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6cmdiKDI3LCAyNSwgMjUpO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6cmdiKDI3LCAyNSwgMjUpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOnJnYigyNywgMjUsIDI1KTtcbiAgICBib3JkZXItaW1hZ2Utc291cmNlOmluaXRpYWw7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOmluaXRpYWw7XG4gICAgYm9yZGVyLWltYWdlLXdpZHRoOmluaXRpYWw7XG4gICAgYm9yZGVyLWltYWdlLW91dHNldDppbml0aWFsO1xuICAgIGJvcmRlci1pbWFnZS1yZXBlYXQ6aW5pdGlhbDtcbiAgfVxuICAubmF2YmFyLm5hdmJhci1leHBhbmQtbGcubmF2YmFyLWxpZ2h0LmJnLWxpZ2h0e1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI3LCAyNSwgMjUpO1xuICAgIGNvbG9yOnJnYigxNjcsIDIwOSwgNDEpO1xuICB9XG4gIC5jNDU1M3tcbiAgICBkaXNwbGF5OmlubGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5jNDUzNntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNywgMjUsIDI1KTtcbiAgICBmb250LWZhbWlseTotYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gICAgZm9udC1zaXplOjFyZW07XG4gICAgZGlzcGxheTppbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI3LCAyNSwgMjUpO1xuICB9XG4gIC5jMjQ2M3tcbiAgICBjb2xvcjpibGFjaztcbiAgfVxuICAuc2lkZWJhci1zdGlja3l7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdG9wOjBweDtcbiAgICBoZWlnaHQ6Y2FsYygxMDB2aCAtIDQwcHgpO1xuICAgIHBhZGRpbmctdG9wOjAuNXJlbTtcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcbiAgICBvdmVyZmxvdy15OmF1dG87XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/banner/banner.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/banner/banner.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  </div>\n  <div class=\"container-fluid\">\n  </div>\n  <div class=\"card bg-dark text-white\">\n    <img data-type=\"image\" src=\"https://mir-s3-cdn-cf.behance.net/project_modules/fs/eef88066498933.5b180331306e7.png\" alt=\"Imagen chef del banner\" class=\"card-img\"/>\n    <div class=\"card-img-overlay\">\n    <h1 data-type=\"header\" class=\"card-title\">BIENVENIDOS\n    </h1>\n   \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/banner/banner.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/components/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/components/banner/banner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link{\n    color:rgb(167, 209, 41);\n    border-top-width:initial;\n    border-right-width:initial;\n    border-bottom-width:initial;\n    border-left-width:initial;\n    border-top-style:solid;\n    border-right-style:solid;\n    border-bottom-style:solid;\n    border-left-style:solid;\n    border-top-color:rgb(167, 209, 41);\n    border-right-color:rgb(167, 209, 41);\n    border-bottom-color:rgb(167, 209, 41);\n    border-left-color:rgb(167, 209, 41);\n    border-image-source:initial;\n    border-image-slice:initial;\n    border-image-width:initial;\n    border-image-outset:initial;\n    border-image-repeat:initial;\n  }\n  .btn.btn-outline-success.my-2.my-sm-0{\n    color:rgb(167, 209, 41);\n    background-color:rgb(27, 25, 25);\n    border-top-width:1px;\n    border-right-width:1px;\n    border-bottom-width:1px;\n    border-left-width:1px;\n    border-top-style:solid;\n    border-right-style:solid;\n    border-bottom-style:solid;\n    border-left-style:solid;\n    border-top-color:rgb(27, 25, 25);\n    border-right-color:rgb(27, 25, 25);\n    border-bottom-color:rgb(27, 25, 25);\n    border-left-color:rgb(27, 25, 25);\n    border-image-source:initial;\n    border-image-slice:initial;\n    border-image-width:initial;\n    border-image-outset:initial;\n    border-image-repeat:initial;\n  }\n  .navbar.navbar-expand-lg.navbar-light.bg-light{\n    text-align:center;\n    background-color:rgb(27, 25, 25);\n    color:rgb(167, 209, 41);\n  }\n  .c4553{\n    display:inline !important;\n  }\n  .c4536{\n    background-color:rgb(27, 25, 25);\n    font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    font-size:1rem;\n    display:inline !important;\n  }\n  .navbar{\n    background-color:rgb(27, 25, 25);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsb0xBQW9MO0lBQ3BMLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGdDQUFnQztFQUNsQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5re1xuICAgIGNvbG9yOnJnYigxNjcsIDIwOSwgNDEpO1xuICAgIGJvcmRlci10b3Atd2lkdGg6aW5pdGlhbDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6aW5pdGlhbDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOmluaXRpYWw7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6aW5pdGlhbDtcbiAgICBib3JkZXItdG9wLXN0eWxlOnNvbGlkO1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOnNvbGlkO1xuICAgIGJvcmRlci10b3AtY29sb3I6cmdiKDE2NywgMjA5LCA0MSk7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOnJnYigxNjcsIDIwOSwgNDEpO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6cmdiKDE2NywgMjA5LCA0MSk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6cmdiKDE2NywgMjA5LCA0MSk7XG4gICAgYm9yZGVyLWltYWdlLXNvdXJjZTppbml0aWFsO1xuICAgIGJvcmRlci1pbWFnZS1zbGljZTppbml0aWFsO1xuICAgIGJvcmRlci1pbWFnZS13aWR0aDppbml0aWFsO1xuICAgIGJvcmRlci1pbWFnZS1vdXRzZXQ6aW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2UtcmVwZWF0OmluaXRpYWw7XG4gIH1cbiAgLmJ0bi5idG4tb3V0bGluZS1zdWNjZXNzLm15LTIubXktc20tMHtcbiAgICBjb2xvcjpyZ2IoMTY3LCAyMDksIDQxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNywgMjUsIDI1KTtcbiAgICBib3JkZXItdG9wLXdpZHRoOjFweDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6MXB4O1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6MXB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOjFweDtcbiAgICBib3JkZXItdG9wLXN0eWxlOnNvbGlkO1xuICAgIGJvcmRlci1yaWdodC1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO1xuICAgIGJvcmRlci1sZWZ0LXN0eWxlOnNvbGlkO1xuICAgIGJvcmRlci10b3AtY29sb3I6cmdiKDI3LCAyNSwgMjUpO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjpyZ2IoMjcsIDI1LCAyNSk7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjpyZ2IoMjcsIDI1LCAyNSk7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6cmdiKDI3LCAyNSwgMjUpO1xuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6aW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6aW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2Utd2lkdGg6aW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2Utb3V0c2V0OmluaXRpYWw7XG4gICAgYm9yZGVyLWltYWdlLXJlcGVhdDppbml0aWFsO1xuICB9XG4gIC5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZy5uYXZiYXItbGlnaHQuYmctbGlnaHR7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjcsIDI1LCAyNSk7XG4gICAgY29sb3I6cmdiKDE2NywgMjA5LCA0MSk7XG4gIH1cbiAgLmM0NTUze1xuICAgIGRpc3BsYXk6aW5saW5lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmM0NTM2e1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI3LCAyNSwgMjUpO1xuICAgIGZvbnQtZmFtaWx5Oi1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbiAgICBmb250LXNpemU6MXJlbTtcbiAgICBkaXNwbGF5OmlubGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXZiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjcsIDI1LCAyNSk7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a href=\"#\" class=\"navbar-brand\">Recetas Chef Masters </a>\n  <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" class=\"navbar-toggler\"><span class=\"navbar-toggler-icon\"></span></button>\n  <div id=\"navbarSupportedContent\" class=\"collapse navbar-collapse\">\n\t<ul class=\"navbar-nav mr-auto\">\n\t  <input placeholder=\"Receta\" aria-label=\"Receta\" type=\"search\" class=\"form-control mr-sm-2\"/>\n\t  <button type=\"submit\" class=\"btn btn-outline-success my-2 my-sm-0\">Buscar</button>\n\t  <li class=\"nav-item active\">\n\t  </li>\n\t  <li class=\"nav-item\">\n\t  </li>\n\t  <li class=\"nav-item\">\n\t  </li>\n\t</ul>\n\t<a href=\"info\" class=\"nav-link\">Chef<div>\n\t  <div>\n\t\t<div>\n\t\t  <span class=\"sr-only\">(current)</span>\n\t\t</div>\n\t  </div>\n\t  </div></a>\n\t<form class=\"form-inline my-2 my-lg-0\">\n\t</form>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/thumbs/thumbs.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/thumbs/thumbs.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link{\n    color:rgb(167, 209, 41);\n    border-top-width:initial;\n    border-right-width:initial;\n    border-bottom-width:initial;\n    border-left-width:initial;\n    border-top-style:solid;\n    border-right-style:solid;\n    border-bottom-style:solid;\n    border-left-style:solid;\n    border-top-color:rgb(167, 209, 41);\n    border-right-color:rgb(167, 209, 41);\n    border-bottom-color:rgb(167, 209, 41);\n    border-left-color:rgb(167, 209, 41);\n    border-image-source:initial;\n    border-image-slice:initial;\n    border-image-width:initial;\n    border-image-outset:initial;\n    border-image-repeat:initial;\n  }\n  .btn.btn-outline-success.my-2.my-sm-0{\n    color:rgb(167, 209, 41);\n    background-color:rgb(27, 25, 25);\n    border-top-width:1px;\n    border-right-width:1px;\n    border-bottom-width:1px;\n    border-left-width:1px;\n    border-top-style:solid;\n    border-right-style:solid;\n    border-bottom-style:solid;\n    border-left-style:solid;\n    border-top-color:rgb(27, 25, 25);\n    border-right-color:rgb(27, 25, 25);\n    border-bottom-color:rgb(27, 25, 25);\n    border-left-color:rgb(27, 25, 25);\n    border-image-source:initial;\n    border-image-slice:initial;\n    border-image-width:initial;\n    border-image-outset:initial;\n    border-image-repeat:initial;\n  }\n  .navbar.navbar-expand-lg.navbar-light.bg-light{\n    text-align:center;\n    background-color:rgb(27, 25, 25);\n    color:rgb(167, 209, 41);\n  }\n  .c4553{\n    display:inline !important;\n  }\n  .c4536{\n    background-color:rgb(27, 25, 25);\n    font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n    font-size:1rem;\n    display:inline !important;\n  }\n  .navbar{\n    background-color:rgb(27, 25, 25);\n  }\n  .c2463{\n    color:black;\n  }\n  .sidebar-sticky{\n    position:relative;\n    top:0px;\n    height:calc(100vh - 40px);\n    padding-top:0.5rem;\n    overflow-x:hidden;\n    overflow-y:auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aHVtYnMvdGh1bWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsb0xBQW9MO0lBQ3BMLGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RodW1icy90aHVtYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGlua3tcbiAgICBjb2xvcjpyZ2IoMTY3LCAyMDksIDQxKTtcbiAgICBib3JkZXItdG9wLXdpZHRoOmluaXRpYWw7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOmluaXRpYWw7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDppbml0aWFsO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOmluaXRpYWw7XG4gICAgYm9yZGVyLXRvcC1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6c29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItbGVmdC1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItdG9wLWNvbG9yOnJnYigxNjcsIDIwOSwgNDEpO1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjpyZ2IoMTY3LCAyMDksIDQxKTtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOnJnYigxNjcsIDIwOSwgNDEpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOnJnYigxNjcsIDIwOSwgNDEpO1xuICAgIGJvcmRlci1pbWFnZS1zb3VyY2U6aW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6aW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2Utd2lkdGg6aW5pdGlhbDtcbiAgICBib3JkZXItaW1hZ2Utb3V0c2V0OmluaXRpYWw7XG4gICAgYm9yZGVyLWltYWdlLXJlcGVhdDppbml0aWFsO1xuICB9XG4gIC5idG4uYnRuLW91dGxpbmUtc3VjY2Vzcy5teS0yLm15LXNtLTB7XG4gICAgY29sb3I6cmdiKDE2NywgMjA5LCA0MSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjcsIDI1LCAyNSk7XG4gICAgYm9yZGVyLXRvcC13aWR0aDoxcHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOjFweDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOjFweDtcbiAgICBib3JkZXItbGVmdC13aWR0aDoxcHg7XG4gICAgYm9yZGVyLXRvcC1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6c29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItbGVmdC1zdHlsZTpzb2xpZDtcbiAgICBib3JkZXItdG9wLWNvbG9yOnJnYigyNywgMjUsIDI1KTtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6cmdiKDI3LCAyNSwgMjUpO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6cmdiKDI3LCAyNSwgMjUpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOnJnYigyNywgMjUsIDI1KTtcbiAgICBib3JkZXItaW1hZ2Utc291cmNlOmluaXRpYWw7XG4gICAgYm9yZGVyLWltYWdlLXNsaWNlOmluaXRpYWw7XG4gICAgYm9yZGVyLWltYWdlLXdpZHRoOmluaXRpYWw7XG4gICAgYm9yZGVyLWltYWdlLW91dHNldDppbml0aWFsO1xuICAgIGJvcmRlci1pbWFnZS1yZXBlYXQ6aW5pdGlhbDtcbiAgfVxuICAubmF2YmFyLm5hdmJhci1leHBhbmQtbGcubmF2YmFyLWxpZ2h0LmJnLWxpZ2h0e1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI3LCAyNSwgMjUpO1xuICAgIGNvbG9yOnJnYigxNjcsIDIwOSwgNDEpO1xuICB9XG4gIC5jNDU1M3tcbiAgICBkaXNwbGF5OmlubGluZSAhaW1wb3J0YW50O1xuICB9XG4gIC5jNDUzNntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNywgMjUsIDI1KTtcbiAgICBmb250LWZhbWlseTotYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gICAgZm9udC1zaXplOjFyZW07XG4gICAgZGlzcGxheTppbmxpbmUgIWltcG9ydGFudDtcbiAgfVxuICAubmF2YmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI3LCAyNSwgMjUpO1xuICB9XG4gIC5jMjQ2M3tcbiAgICBjb2xvcjpibGFjaztcbiAgfVxuICAuc2lkZWJhci1zdGlja3l7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgdG9wOjBweDtcbiAgICBoZWlnaHQ6Y2FsYygxMDB2aCAtIDQwcHgpO1xuICAgIHBhZGRpbmctdG9wOjAuNXJlbTtcbiAgICBvdmVyZmxvdy14OmhpZGRlbjtcbiAgICBvdmVyZmxvdy15OmF1dG87XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/thumbs/thumbs.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/thumbs/thumbs.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr>\n<h1> PLATOS </h1>\n<div class=\"card\">\n  </div>\n  <div class=\"container-fluid\">\n  </div>\n  <div class=\"card bg-dark text-white\">\n  </div>\n  <div class=\"card-group\">\n    <div class=\"card\">\n    <img data-type=\"image\" src=\"https://source.unsplash.com/collection/190727/300x300\" alt=\"...\" class=\"card-img-top\"/>\n    <div class=\"card-body\">\n      <h5 data-type=\"header\" class=\"card-title\">Card title\n      </h5>\n      <p data-type=\"paragraph\" class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.\n      </p>\n    </div>\n    </div>\n    <div class=\"card\">\n    <img data-type=\"image\" src=\"https://source.unsplash.com/collection/190727/300x300\" alt=\"...\" class=\"card-img-top\"/>\n    <div class=\"card-body\">\n      <h5 data-type=\"header\" class=\"card-title\">Card title\n      </h5>\n      <p data-type=\"paragraph\" class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.\n      </p>\n    </div>\n    </div>\n    <div class=\"card\">\n    <img data-type=\"image\" src=\"https://source.unsplash.com/collection/190727/300x300\" alt=\"...\" class=\"card-img-top\"/>\n    <div class=\"card-body\">\n      <h5 data-type=\"header\" class=\"card-title\">Card title\n      </h5>\n      <p data-type=\"paragraph\" class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.\n      </p>\n    </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/thumbs/thumbs.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/thumbs/thumbs.component.ts ***!
  \*******************************************************/
/*! exports provided: ThumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbsComponent", function() { return ThumbsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThumbsComponent = /** @class */ (function () {
    function ThumbsComponent() {
    }
    ThumbsComponent.prototype.ngOnInit = function () {
    };
    ThumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thumbs',
            template: __webpack_require__(/*! ./thumbs.component.html */ "./src/app/components/thumbs/thumbs.component.html"),
            styles: [__webpack_require__(/*! ./thumbs.component.css */ "./src/app/components/thumbs/thumbs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThumbsComponent);
    return ThumbsComponent;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"media\">\n    <img data-type=\"image\" src=\"http://via.placeholder.com/200x200\" alt=\"Generic placeholder image\" class=\"mr-3\"/>\n    <div class=\"media-body\">\n    <h5 data-type=\"header\" class=\"mt-0\">Media heading\n    </h5>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar> </app-navbar>\n<app-banner> </app-banner>\n<app-thumbs> </app-thumbs>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/info/info.component.css":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    height:100%;\n    width:100%;\n  }\n  .gb-col-xl-5{\n    padding-top:50px;\n    padding-right:50px;\n    padding-bottom:50px;\n    padding-left:50px;\n  }\n  .gb-section{\n    height:100vh;\n    width:100%;\n    position:static;\n  }\n  .gb-row{\n    margin-left:0px;\n    margin-right:0px;\n  }\n  .gb-fit{\n    background-size:cover;\n    height:100vh;\n    width:100%;\n    background-position-x:50%;\n    background-position-y:100%;\n    background-image:url(\"https://www.gridbox.io/projects/5517f5ac-5d56-4abc-b456-99c08a517042/assets/img/pexels-photo-845434_1.jpeg\");\n  }\n  .gb-fit-1{\n    height:100vh;\n  }\n  .gb-display-1{\n    text-transform:uppercase;\n    font-family:Oswald, sans-serif;\n    font-size:42px;\n    letter-spacing:18px;\n    font-weight:700;\n  }\n  .gb-heading-one{\n    text-transform:uppercase;\n    font-family:\"Open Sans\", sans-serif;\n    font-weight:300;\n    font-size:23px;\n    letter-spacing:3px;\n  }\n  .gb-lead{\n    font-family:\"Open Sans\", sans-serif;\n    font-size:20px;\n    padding-top:20px;\n    padding-bottom:20px;\n  }\n  .gb-green{\n    color:rgb(4, 142, 148);\n    font-family:\"Open Sans\", sans-serif;\n  }\n  .gb-btn{\n    background-color:rgb(9, 8, 8);\n    border-top-left-radius:0px;\n    border-top-right-radius:0px;\n    border-bottom-right-radius:0px;\n    border-bottom-left-radius:0px;\n    text-transform:uppercase;\n    letter-spacing:1px;\n  }\n  .gb-btn:hover{\n    background-color:rgb(26, 21, 21);\n  }\n  .gb-btn-rounded{\n    border-top-left-radius:50%;\n    border-top-right-radius:50%;\n    border-bottom-right-radius:50%;\n    border-bottom-left-radius:50%;\n    height:50px;\n    width:50px;\n  }\n  .gb-gb-green{\n    text-transform:uppercase;\n  }\n  .gb-gb-green-1{\n    letter-spacing:1px;\n  }\n  .gb-gb-green-2{\n    letter-spacing:2px;\n  }\n  @media only screen and (max-width: 768px){\n    .gb-fit{\n      background-size:cover;\n      width:100%;\n      background-position-x:50%;\n      background-position-y:100%;\n      height:100vh !important;\n    }\n    .gb-display-1{\n      font-size:32px;\n      letter-spacing:4px;\n    }\n    .gb-heading-one{\n      font-size:1.8rem !important;\n    }\n    .gb-heading-two{\n      font-size:1.8rem !important;\n    }\n    .gb-lead{\n      font-size:16px;\n    }\n  }\n  @media only screen and (max-width: 500px){\n    .gb-fit{\n      background-size:cover;\n      height:60vh;\n      width:100%;\n      background-position-x:0%;\n      background-position-y:50%;\n    }\n    .gb-display-1{\n      font-size:32px;\n      letter-spacing:4px;\n    }\n    .gb-heading-one{\n      font-size:20px;\n    }\n    .gb-heading-two{\n      font-size:20px;\n    }\n    .gb-lead{\n      font-size:16px;\n    }\n    .gb-btn-rounded{\n      height:40px;\n      width:40px;\n      padding-top:3px;\n      padding-right:3px;\n      padding-bottom:3px;\n      padding-left:3px;\n    }\n    .gb-col-xl-5{\n      padding-top:30px;\n      padding-right:10px;\n      padding-bottom:30px;\n      padding-left:10px;\n      margin-left:auto;\n      margin-right:auto;\n      text-align:center;\n    }\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixrSUFBa0k7RUFDcEk7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7RUFDakI7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG1DQUFtQztJQUNuQyxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRTtNQUNFLHFCQUFxQjtNQUNyQixVQUFVO01BQ1YseUJBQXlCO01BQ3pCLDBCQUEwQjtNQUMxQix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGNBQWM7TUFDZCxrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLDJCQUEyQjtJQUM3QjtJQUNBO01BQ0UsMkJBQTJCO0lBQzdCO0lBQ0E7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7RUFDQTtJQUNFO01BQ0UscUJBQXFCO01BQ3JCLFdBQVc7TUFDWCxVQUFVO01BQ1Ysd0JBQXdCO01BQ3hCLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0UsY0FBYztNQUNkLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsY0FBYztJQUNoQjtJQUNBO01BQ0UsV0FBVztNQUNYLFVBQVU7TUFDVixlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGlCQUFpQjtJQUNuQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvaW5mby9pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIGhlaWdodDoxMDAlO1xuICAgIHdpZHRoOjEwMCU7XG4gIH1cbiAgLmdiLWNvbC14bC01e1xuICAgIHBhZGRpbmctdG9wOjUwcHg7XG4gICAgcGFkZGluZy1yaWdodDo1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOjUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OjUwcHg7XG4gIH1cbiAgLmdiLXNlY3Rpb257XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgcG9zaXRpb246c3RhdGljO1xuICB9XG4gIC5nYi1yb3d7XG4gICAgbWFyZ2luLWxlZnQ6MHB4O1xuICAgIG1hcmdpbi1yaWdodDowcHg7XG4gIH1cbiAgLmdiLWZpdHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OjUwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcImh0dHBzOi8vd3d3LmdyaWRib3guaW8vcHJvamVjdHMvNTUxN2Y1YWMtNWQ1Ni00YWJjLWI0NTYtOTljMDhhNTE3MDQyL2Fzc2V0cy9pbWcvcGV4ZWxzLXBob3RvLTg0NTQzNF8xLmpwZWdcIik7XG4gIH1cbiAgLmdiLWZpdC0xe1xuICAgIGhlaWdodDoxMDB2aDtcbiAgfVxuICAuZ2ItZGlzcGxheS0xe1xuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTpPc3dhbGQsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOjQycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6MThweDtcbiAgICBmb250LXdlaWdodDo3MDA7XG4gIH1cbiAgLmdiLWhlYWRpbmctb25le1xuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTpcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OjMwMDtcbiAgICBmb250LXNpemU6MjNweDtcbiAgICBsZXR0ZXItc3BhY2luZzozcHg7XG4gIH1cbiAgLmdiLWxlYWR7XG4gICAgZm9udC1mYW1pbHk6XCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBwYWRkaW5nLXRvcDoyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XG4gIH1cbiAgLmdiLWdyZWVue1xuICAgIGNvbG9yOnJnYig0LCAxNDIsIDE0OCk7XG4gICAgZm9udC1mYW1pbHk6XCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgfVxuICAuZ2ItYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDksIDgsIDgpO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOjFweDtcbiAgfVxuICAuZ2ItYnRuOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI2LCAyMSwgMjEpO1xuICB9XG4gIC5nYi1idG4tcm91bmRlZHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjUwJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo1MCU7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NTAlO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NTAlO1xuICAgIGhlaWdodDo1MHB4O1xuICAgIHdpZHRoOjUwcHg7XG4gIH1cbiAgLmdiLWdiLWdyZWVue1xuICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcbiAgfVxuICAuZ2ItZ2ItZ3JlZW4tMXtcbiAgICBsZXR0ZXItc3BhY2luZzoxcHg7XG4gIH1cbiAgLmdiLWdiLWdyZWVuLTJ7XG4gICAgbGV0dGVyLXNwYWNpbmc6MnB4O1xuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xuICAgIC5nYi1maXR7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OjUwJTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teToxMDAlO1xuICAgICAgaGVpZ2h0OjEwMHZoICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5nYi1kaXNwbGF5LTF7XG4gICAgICBmb250LXNpemU6MzJweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOjRweDtcbiAgICB9XG4gICAgLmdiLWhlYWRpbmctb25le1xuICAgICAgZm9udC1zaXplOjEuOHJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZ2ItaGVhZGluZy10d297XG4gICAgICBmb250LXNpemU6MS44cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5nYi1sZWFke1xuICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xuICAgIC5nYi1maXR7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgICBoZWlnaHQ6NjB2aDtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6MCU7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6NTAlO1xuICAgIH1cbiAgICAuZ2ItZGlzcGxheS0xe1xuICAgICAgZm9udC1zaXplOjMycHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzo0cHg7XG4gICAgfVxuICAgIC5nYi1oZWFkaW5nLW9uZXtcbiAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIH1cbiAgICAuZ2ItaGVhZGluZy10d297XG4gICAgICBmb250LXNpemU6MjBweDtcbiAgICB9XG4gICAgLmdiLWxlYWR7XG4gICAgICBmb250LXNpemU6MTZweDtcbiAgICB9XG4gICAgLmdiLWJ0bi1yb3VuZGVke1xuICAgICAgaGVpZ2h0OjQwcHg7XG4gICAgICB3aWR0aDo0MHB4O1xuICAgICAgcGFkZGluZy10b3A6M3B4O1xuICAgICAgcGFkZGluZy1yaWdodDozcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTozcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6M3B4O1xuICAgIH1cbiAgICAuZ2ItY29sLXhsLTV7XG4gICAgICBwYWRkaW5nLXRvcDozMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDoxMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206MzBweDtcbiAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgfVxuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/info/info.component.html":
/*!******************************************!*\
  !*** ./src/app/info/info.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar>  </app-navbar>\n\n<section class=\"gb-section\">\n    <div class=\"row gb-row\">\n    <div class=\"col-xl-5 col-lg-5 col-md-6 col-sm-6 col-12 gb-fit\"> \n    </div>\n    <div class=\"col-xl-7 col-lg-7 col-md-6 col-sm-6 col-12 gb-col-xl-5\">\n      <h1 data-type=\"header\" class=\"display-1 gb-display-1\">I'M \n      <span class=\"gb-green\">ETHAN</span>\n      </h1>\n      <h1 data-type=\"header\" class=\"gb-heading-one\">Graphic \n      <span class=\"gb-green\">&</span> Web Designer\n      </h1>\n      <p data-type=\"paragraph\" class=\"lead gb-lead\">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \n      </p>\n      <h2 data-type=\"header\" class=\"gb-green gb-heading-two gb-gb-green gb-gb-green-1 gb-gb-green-2\">Objective\n      </h2>\n      <p data-type=\"paragraph\" class=\"lead gb-lead\">Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \n      </p> \n      <a href=\"#\" class=\"btn btn-lg btn-dark gb-btn\">Download Resume</a>\n      <hr/> \n      <a href=\"#\" class=\"gb-btn-rounded btn-inverse btn btn-dark btn-lg gb-btn\"><i class=\"fa fa-facebook\">\n      </i></a> \n      <a href=\"#\" class=\"gb-btn-rounded btn-inverse btn btn-dark btn-lg gb-btn\"><i class=\"fa fa-twitter\">\n      </i></a>\n      <a href=\"#\" class=\"gb-btn-rounded btn-inverse btn btn-dark btn-lg gb-btn\"><i class=\"fa fa-linkedin-square\">\n      </i></a> \n      <a href=\"#\" class=\"gb-btn-rounded btn-inverse btn btn-dark btn-lg gb-btn\"><i class=\"fa fa-instagram\">\n      </i></a>\n      <a href=\"#\" class=\"gb-btn-rounded btn-inverse btn btn-dark btn-lg gb-btn\"><i class=\"fa fa-google-plus\">\n      </i></a>\n    </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/info/info.component.ts":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! ./info.component.html */ "./src/app/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/info/info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danielasanchez/Desktop/microproyecto2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map