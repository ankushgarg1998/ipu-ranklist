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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: 'Muli';\n}\n\n.container {\n    padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiAnTXVsaSc7XG59XG5cbi5jb250YWluZXIge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<main class=\"container\">\n    <!-- <app-header></app-header> -->\n    <router-outlet></router-outlet>\n    <!-- <h2>Sorry, IPU Ranklist is down for maintainance! Will be back in a couple of hours.</h2> -->\n</main>\n<app-footer></app-footer>\n"

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
        this.title = 'ipu-ranklist';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _ranklist_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ranklist/table/table.component */ "./src/app/ranklist/table/table.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _shared_model_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/model.service */ "./src/app/shared/model.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ranklist_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ranklist/modal/modal.component */ "./src/app/ranklist/modal/modal.component.ts");
/* harmony import */ var _ranklist_list_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ranklist/list.service */ "./src/app/ranklist/list.service.ts");
/* harmony import */ var _ranklist_ranklist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ranklist/ranklist.component */ "./src/app/ranklist/ranklist.component.ts");
/* harmony import */ var _ranklist_listform_listform_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ranklist/listform/listform.component */ "./src/app/ranklist/listform/listform.component.ts");
/* harmony import */ var _student_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./student/profile/profile.component */ "./src/app/student/profile/profile.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ng_lottie__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-lottie */ "./node_modules/ng-lottie/dist/esm/src/index.js");





















var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"] },
    { path: 'ranklist', component: _ranklist_ranklist_component__WEBPACK_IMPORTED_MODULE_14__["RanklistComponent"] },
    { path: 'student', component: _student_student_component__WEBPACK_IMPORTED_MODULE_17__["StudentComponent"] },
    { path: 'student/:enroll', component: _student_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _ranklist_table_table_component__WEBPACK_IMPORTED_MODULE_7__["TableComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _ranklist_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"],
                _ranklist_ranklist_component__WEBPACK_IMPORTED_MODULE_14__["RanklistComponent"],
                _ranklist_listform_listform_component__WEBPACK_IMPORTED_MODULE_15__["ListformComponent"],
                _student_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_17__["StudentComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_18__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerModule"],
                ng_lottie__WEBPACK_IMPORTED_MODULE_20__["LottieAnimationViewModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _ranklist_list_service__WEBPACK_IMPORTED_MODULE_13__["ListService"],
                _shared_model_service__WEBPACK_IMPORTED_MODULE_9__["ModelService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    margin-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer mt-auto\">\n    <div class=\"container\">\n        <hr>\n        <p align=\"center\">Made with ❤️ and ☕️ by <a href=\"https://ankushgarg.me\" target=\"_blank\">Ankush Garg</a> | <a href=\"https://github.com/ankushgarg1998/ipu-ranklist\" target=\"_blank\">GitHub Repo</a></p>\n    </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>IPU Ranklist v1.6 <span class=\"badge badge-sm badge-dark\" style=\"font-size: 0.3em;\"> BETA</span></h1>\n<hr>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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

module.exports = "<div class=\"jumbotron\">\n    <h1 class=\"display-4\">IPU Ranklist</h1>\n    <p class=\"lead\">A minimalist Ranklist and Result application for IP University.</p>\n    <hr class=\"my-4\">\n    <p>\n        The application currently covers all the 18 Engineering Colleges affiliated with GGSIPU, 13 branches of engineering and all batches including & after 2015. Other college and courses like BBA, BCA, B.Com. will be added soon. This project is public and you can track progress on <a href=\"https://github.com/ankushgarg1998/ipu-ranklist\" target=\"_blank\">the GitHub Repo</a>. Please feel free to suggest features, report bugs or ask any questions by <a href=\"https://github.com/ankushgarg1998/ipu-ranklist/issues\" target=\"_blank\">raising an issue</a>.\n    </p>\n    <p class=\"lead\">\n        <a class=\"btn btn-primary btn-lg mr-2\" [routerLink]=\"['/ranklist']\" role=\"button\">View Ranklist</a>\n        <a class=\"btn btn-primary btn-lg mr-2\" [routerLink]=\"['/student']\" role=\"button\">Student Profile</a>\n    </p>\n</div>"

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

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\" (click)=\"navClose.click()\" routerLinkActive=\"active\">IPU Ranklist v1.6 <span style=\"font-size: 0.6em; font-weight: bold;\"> BETA</span></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" #navClose>\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\n                <a class=\"nav-link\" (click)=\"navClose.click()\" [routerLink]=\"['/']\">Home</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" (click)=\"navClose.click()\" routerLink=\"/ranklist\">College Ranklist</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" (click)=\"navClose.click()\" routerLink=\"/student\">Student Profile</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link disabled\">University Ranklist</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/ranklist/list.service.ts":
/*!******************************************!*\
  !*** ./src/app/ranklist/list.service.ts ***!
  \******************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var ListService = /** @class */ (function () {
    function ListService() {
        this.rowSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ListService.prototype.rowSelected = function (banda) {
        this.rowSelectedEvent.emit(banda);
    };
    return ListService;
}());



/***/ }),

/***/ "./src/app/ranklist/listform/listform.component.css":
/*!**********************************************************!*\
  !*** ./src/app/ranklist/listform/listform.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group {\n    min-width: auto;\n    /* width: 15%; */\n    margin-right: 2%;\n    margin-bottom: 0;\n}\n\n.header-form {\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n.btn {\n    width: 150px;\n}\n\n@media(max-width: 786px) {\n    .form-group {\n        width: 30%;\n        margin-right: 3%;\n        margin-top: 3%;\n    }\n    .header-form {\n        justify-content: space-around;\n    }\n    .form-control {\n        font-size: 0.9rem;\n    }\n    .btn {\n        width: 100%;\n        margin-top: 1rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFua2xpc3QvbGlzdGZvcm0vbGlzdGZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUdBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGNBQWM7SUFDbEI7SUFDQTtRQUNJLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yYW5rbGlzdC9saXN0Zm9ybS9saXN0Zm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAvKiB3aWR0aDogMTUlOyAqL1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmhlYWRlci1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmJ0biB7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6IDc4NnB4KSB7XG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xuICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICB9XG4gICAgLmhlYWRlci1mb3JtIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG4gICAgLmJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/ranklist/listform/listform.component.html":
/*!***********************************************************!*\
  !*** ./src/app/ranklist/listform/listform.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"flexbox\" class=\"header-form\" #f=\"ngForm\">\n    <div class=\"form-group\">\n        <select name=\"college\" id=\"college\" class=\"form-control\" [(ngModel)]=\"selections.college\" required>    \n            <option *ngFor=\"let insti of instis\" [title]=\"insti.name\" [value]=\"insti.abbrev\">{{ insti.abbrev }}</option>\n            <option title=\"All Colleges\" value=\"0\" disabled>All Colleges</option>\n        </select>\n    </div>\n    <div class=\"form-group\">\n        <select name=\"shift\" id=\"shift\" class=\"form-control\" [(ngModel)]=\"selections.shift\" required>\n            <option value=\"M\">Morning</option>\n            <option value=\"E\">Evening</option>\n            <option value=\"0\">Both</option>\n        </select>\n    </div>\n    <div class=\"form-group\">\n        <select name=\"batch\" id=\"batch\" class=\"form-control\" [(ngModel)]=\"selections.batch\" required>\n            <option value=15>2015 - 2019</option>\n            <option value=16>2016 - 2020</option>\n            <option value=17>2017 - 2021</option>\n            <option value=18>2018 - 2022</option>\n            <option value=19 disabled>2019 - 2023</option>\n        </select>\n    </div>\n    <div class=\"form-group\">\n        <select name=\"branch\" id=\"branch\" class=\"form-control\" [(ngModel)]=\"selections.branch\" required>\n            <option *ngFor=\"let course of courses\" [value]=\"course.branch\">{{ course.branch }}</option>\n        </select>\n    </div>\n    <div class=\"form-group\">\n        <select name=\"sem\" id=\"sem\" class=\"form-control\" [(ngModel)]=\"selections.sem\" required>\n            <option value=\"0\">Overall</option>\n            <option value=\"1\">Sem 1</option>\n            <option value=\"2\">Sem 2</option>\n            <option value=\"3\">Sem 3</option>\n            <option value=\"4\">Sem 4</option>\n            <option value=\"5\">Sem 5</option>\n            <option value=\"6\">Sem 6</option>\n            <option value=\"7\">Sem 7</option>\n            <option value=\"8\">Sem 8</option>\n        </select>\n    </div>\n    <button class=\"btn btn-dark\" style=\"color: white;\" (click)=\"onSearch()\">Search</button>\n</form>\n<hr>"

/***/ }),

/***/ "./src/app/ranklist/listform/listform.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ranklist/listform/listform.component.ts ***!
  \*********************************************************/
/*! exports provided: ListformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListformComponent", function() { return ListformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_courses_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/courses.json */ "./src/app/shared/courses.json");
var _shared_courses_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../shared/courses.json */ "./src/app/shared/courses.json", 1);
/* harmony import */ var _shared_institutes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/institutes.json */ "./src/app/shared/institutes.json");
var _shared_institutes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../shared/institutes.json */ "./src/app/shared/institutes.json", 1);





var ListformComponent = /** @class */ (function () {
    function ListformComponent() {
        this.courses = [];
        this.instis = [];
        this.selectionsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ListformComponent.prototype.ngOnInit = function () {
        this.courses = _shared_courses_json__WEBPACK_IMPORTED_MODULE_3__;
        this.instis = _shared_institutes_json__WEBPACK_IMPORTED_MODULE_4__;
        // this.ngForm.form.valueChanges.subscribe(x => {
        //     console.log('a', x);
        //     console.log('b', this.ngForm.value);
        //     this.selectionsChanged.emit(x);
        // });
    };
    ListformComponent.prototype.onSearch = function () {
        // console.log('clicked');
        // console.log(this.ngForm.value);
        this.selectionsChanged.emit(this.ngForm.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListformComponent.prototype, "selections", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ListformComponent.prototype, "ngForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ListformComponent.prototype, "selectionsChanged", void 0);
    ListformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listform',
            template: __webpack_require__(/*! ./listform.component.html */ "./src/app/ranklist/listform/listform.component.html"),
            styles: [__webpack_require__(/*! ./listform.component.css */ "./src/app/ranklist/listform/listform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListformComponent);
    return ListformComponent;
}());



/***/ }),

/***/ "./src/app/ranklist/modal/modal.component.css":
/*!****************************************************!*\
  !*** ./src/app/ranklist/modal/modal.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    margin-bottom: 0;\n}\n.table-responsive {\n    overflow: visible;\n}\n.tbody {\n    overflow: visible;\n}\n.tbody > tr {\n    -webkit-transition: all 0.2s linear;\n    transition: all 0.2s linear;\n    -o-transition: all .2s linear;\n    -moz-transition: all .2s linear;\n    -webkit-transition: all .2s linear;\n}\n.tbody tr:nth-of-type(even) {\n    background-color: white;\n}\n.tbody tr:nth-of-type(odd) {\n    background-color: rgb(240, 240, 240);\n}\n.tbody > tr:hover {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    -webkit-transition-duration: .2s;\n            transition-duration: .2s;\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #a9a9a9;\n    font-weight: bold;\n}\n.modal-data tr td {\n    padding-right: 10px;\n}\ntbody > tr > td {\n    width: auto;\n    white-space: nowrap;\n}\ntbody > tr > td:first-child {\n    white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFua2xpc3QvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1DQUEyQjtJQUEzQiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcmFua2xpc3QvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4udGJvZHkge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLnRib2R5ID4gdHIge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG59XG4udGJvZHkgdHI6bnRoLW9mLXR5cGUoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbn1cbi50Ym9keSA+IHRyOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCAjYTlhOWE5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubW9kYWwtZGF0YSB0ciB0ZCB7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxudGJvZHkgPiB0ciA+IHRkIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG50Ym9keSA+IHRyID4gdGQ6Zmlyc3QtY2hpbGQge1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/ranklist/modal/modal.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ranklist/modal/modal.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button id=\"modal-button\" type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\" #modalButton hidden>Open Modal</button>\n\n<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        \n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Student Marksheet</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeButton>&times;</button>\n            </div>\n            <div class=\"modal-body\" *ngIf=\"banda['semester']\">\n                <p><b>Enrollment Number: </b>&nbsp; {{banda.enroll_no}}</p>\n                <p><b>Name: </b>&nbsp; <a (click)=\"closeButton.click()\" [routerLink]=\"['/student', banda.enroll_no]\" title=\"View {{banda.name}}'s Full Profile\">{{banda.name}}</a></p>\n                <table class=\"modal-data\">\n                    <tr>\n                        <td>\n                            <p><b>Marks: </b>&nbsp; {{banda['semester'].total_marks}}/{{banda['semester'].max_marks}}</p>\n                        </td>\n                        <td>\n                            <p><b>Percentage: </b>&nbsp; {{banda['semester'].percentage.toFixed(3)}}%</p>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <p><b>Total Credit Marks: </b>&nbsp; {{banda['semester'].total_credit_marks}}/{{banda['semester'].max_credit_marks}}</p>\n                        </td>\n                        <td>\n                            <p><b>Credit Percentage: </b>&nbsp; {{banda['semester'].credit_percentage.toFixed(3)}}%</p>\n                        </td>\n                    </tr>\n                    <p><b>CGPA: </b>&nbsp; {{(banda['semester'].total_grade_points / (banda['semester'].max_credits)).toFixed(3)}}</p>\n                </table>\n                <p><b>Rank: </b>&nbsp; #{{banda.rank}}</p>\n                <hr>\n                \n                <div *ngIf=\"!overall\">\n                    <div class=\"form-check\">\n                        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" [(ngModel)]=\"showMinorMajor\">\n                        <label class=\"form-check-label\" for=\"exampleCheck1\">&nbsp; Show Internal/External Marks</label>\n                    </div>\n                    <br>\n                    <table class=\"table table-striped table-sm\">\n                        <thead class=\"thead-dark\">\n                            <th>Subject</th>\n                            <th *ngIf=\"showMinorMajor\" style=\"white-space: nowrap;\">Int. | Ext.</th>\n                            <th>Marks</th>\n                        </thead>\n                        <tbody class=\"tbody\">\n                            <tr *ngFor=\"let subject of banda['semester']['subjects']\" >\n                                <td>{{subject.name}}</td>\n                                <td *ngIf=\"showMinorMajor\">{{subject.minor}} | {{subject.major}}</td>\n                                <td>{{subject.marks}} ({{subject.grade}})</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                \n                <div *ngIf=\"overall\">\n                    <div class=\"form-check\">\n                        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" [(ngModel)]=\"showCreditMarks\">\n                        <label class=\"form-check-label\" for=\"exampleCheck1\">&nbsp; Show Credit Marks and Percentage</label>\n                    </div>\n                    <br>\n                    <table class=\"table table-striped table-sm\">\n                        <thead class=\"thead-dark\">\n                            <th>Semester</th>\n                            <th>Marks</th>\n                            <th>Percentage</th>\n                            <th>CGPA</th>\n                        </thead>\n                        <tbody class=\"tbody\">\n                            <tr *ngFor=\"let sem of banda['semesters']; let i = index\" >\n                                <td>Sem {{ (i+1) }}</td>\n                                <td *ngIf=\"!showCreditMarks\">{{sem.total_marks}} / {{sem.max_marks}}</td>\n                                <td *ngIf=\"!showCreditMarks\">{{sem.percentage.toFixed(3)}}</td>\n                                <td *ngIf=\"showCreditMarks\">{{sem.total_credit_marks}} / {{sem.max_credit_marks}}</td>\n                                <td *ngIf=\"showCreditMarks\">{{sem.credit_percentage.toFixed(3)}}</td>\n                                <td>{{((sem.total_grade_points / sem.max_credits) || 0).toFixed(3)}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                \n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ranklist/modal/modal.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ranklist/modal/modal.component.ts ***!
  \***************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list.service */ "./src/app/ranklist/list.service.ts");
/* harmony import */ var _shared_subjects_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/subjects.json */ "./src/app/shared/subjects.json");
var _shared_subjects_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../shared/subjects.json */ "./src/app/shared/subjects.json", 1);




var ModalComponent = /** @class */ (function () {
    function ModalComponent(listService) {
        this.listService = listService;
        this.banda = {};
        this.showMinorMajor = false;
        this.showCreditMarks = false;
        this.allTheSubjects = _shared_subjects_json__WEBPACK_IMPORTED_MODULE_3___namespace;
        this.overall = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listService.rowSelectedEvent
            .subscribe(function (banda) {
            _this.modalButton.nativeElement.click();
            if (banda.semester.subjects) {
                _this.overall = false;
                banda.semester.subjects = banda.semester.subjects.map(function (subj) {
                    subj.name = _this.allTheSubjects['default'][subj.paper_id] || "paper_id(" + subj.paper_id + ")";
                    return subj;
                });
            }
            else {
                _this.overall = true;
            }
            // console.log(banda);
            _this.banda = banda;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalButton'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ModalComponent.prototype, "modalButton", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/ranklist/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/ranklist/modal/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_list_service__WEBPACK_IMPORTED_MODULE_2__["ListService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/ranklist/ranklist.component.css":
/*!*************************************************!*\
  !*** ./src/app/ranklist/ranklist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhbmtsaXN0L3JhbmtsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/ranklist/ranklist.component.html":
/*!**************************************************!*\
  !*** ./src/app/ranklist/ranklist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-modal></app-modal>    \n<div class=\"row\">\n    <div class=\"col-12\">\n        <app-listform [selections]=\"selection\" (selectionsChanged)=\"newSelection = $event\"></app-listform>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-12\">\n        <app-table [selections]=\"newSelection\"></app-table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ranklist/ranklist.component.ts":
/*!************************************************!*\
  !*** ./src/app/ranklist/ranklist.component.ts ***!
  \************************************************/
/*! exports provided: RanklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RanklistComponent", function() { return RanklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RanklistComponent = /** @class */ (function () {
    function RanklistComponent() {
        this.selection = {
            college: 'MSIT',
            shift: 'M',
            batch: '16',
            branch: 'CSE',
            sem: '6'
        };
        this.newSelection = {};
    }
    RanklistComponent.prototype.ngOnInit = function () {
    };
    RanklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ranklist',
            template: __webpack_require__(/*! ./ranklist.component.html */ "./src/app/ranklist/ranklist.component.html"),
            styles: [__webpack_require__(/*! ./ranklist.component.css */ "./src/app/ranklist/ranklist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RanklistComponent);
    return RanklistComponent;
}());



/***/ }),

/***/ "./src/app/ranklist/table/table.component.css":
/*!****************************************************!*\
  !*** ./src/app/ranklist/table/table.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tbody > tr {\n    -webkit-transition: all 0.2s linear;\n    transition: all 0.2s linear;\n    -o-transition: all .2s linear;\n    -moz-transition: all .2s linear;\n    -webkit-transition: all .2s linear;\n}\n\ntbody tr:nth-of-type(even) {\n    background-color: white;\n}\n\ntbody tr:nth-of-type(odd) {\n    background-color: rgb(240, 240, 240);\n}\n\ntbody > tr:hover {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    -webkit-transition-duration: .2s;\n            transition-duration: .2s;\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #a9a9a9;\n    font-weight: bold;\n}\n\ntbody {\n    overflow: visible;\n}\n\n.table-responsive {\n    overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFua2xpc3QvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUEyQjtJQUEzQiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBR0E7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9yYW5rbGlzdC90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGJvZHkgPiB0ciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcbn1cblxudGJvZHkgdHI6bnRoLW9mLXR5cGUoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxudGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xufVxuXG5cbnRib2R5ID4gdHI6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4ICNhOWE5YTk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRib2R5IHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ranklist/table/table.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ranklist/table/table.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDataPresent\">\n    <!-- <p>*Click on your name to see subject-wise marks.</p> -->\n    <div class=\"row form-group\">\n        <div class=\"col-xs-6 col-md-4\">\n            <input type=\"text\" id=\"search\" name=\"search\" class=\"form-control\" placeholder=\"Search\" (keyup)=\"onSearch($event)\">\n        </div>\n    </div>\n    <div class=\"table-responsive\">\n        <table class=\"table table-striped\">\n            <thead class=\"thead-dark\">\n                <tr>\n                    <th>Enroll No.</th>\n                    <th>Name</th>\n                    <th>Marks</th>\n                    <th>Percentage</th>\n                    <th>Rank</th>\n                </tr>\n            </thead>\n            <tbody id=\"idhar\">\n                <tr *ngIf=\"list.length === 0\">\n                    <td colspan=\"5\" align=\"center\"><h5>Sorry. No relevant data found! 😧</h5></td>\n                </tr>\n                <tr *ngFor=\"let item of list; let i = index\" (click)=\"rowClicked(i)\">\n                    <td>{{ item.enroll_no }}</td>\n                    <td>{{ item.name }}</td>\n                    <td>{{ item.semester.total_marks }}/{{ item.semester.max_marks }}</td>\n                    <td>{{ item.semester.percentage.toFixed(2) }}%</td>\n                    <td>{{ item.rank }}</td>\n                </tr>\n            </tbody>\n        </table>\n        \n    </div>\n</div>\n<div class=\"row\" style=\"padding: 50px 0px;\">\n    <ngx-spinner bdOpacity = 0 bdColor = \"#ffffff\" size = \"medium\" color = \"#000000\" type = \"ball-atom\" [fullScreen] = \"false\">\n        <p style=\"color: black; margin-top: 10rem;\" > Fetching Data... </p>\n    </ngx-spinner>\n</div>\n<h5 *ngIf=\"!isDataPresent\" align=\"center\">Make your selections and click on Search to load the Ranklist.</h5>"

/***/ }),

/***/ "./src/app/ranklist/table/table.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ranklist/table/table.component.ts ***!
  \***************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/model.service */ "./src/app/shared/model.service.ts");
/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list.service */ "./src/app/ranklist/list.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





// import { element } from '@angular/core/src/render3';
var TableComponent = /** @class */ (function () {
    function TableComponent(modelService, listService, spinner) {
        this.modelService = modelService;
        this.listService = listService;
        this.spinner = spinner;
        this.fullList = [];
        this.list = [];
        this.isDataPresent = false;
    }
    TableComponent.prototype.ngOnInit = function () {
        // console.log(this.selections);
    };
    TableComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['selections']) {
            var keys = Object.keys(this.selections);
            if (keys.includes('college') && keys.includes('shift') && keys.includes('batch') && keys.includes('branch') && keys.includes('sem')) {
                this.list = [];
                this.spinner.show();
                this.modelService.getList(this.selections['college'], this.selections['shift'], this.selections['batch'], this.selections['branch'], this.selections['sem'])
                    .subscribe(function (res) {
                    // console.log(res);
                    if (_this.selections['sem'] === '0') {
                        _this.setListWithRanking(res, true);
                    }
                    else {
                        _this.setListWithRanking(res, false);
                    }
                    _this.spinner.hide();
                    _this.isDataPresent = true;
                });
            }
        }
    };
    TableComponent.prototype.setListWithRanking = function (res, overall) {
        // console.log(res);
        if (overall) {
            res.forEach(function (element) {
                element.semester = {
                    total_marks: 0,
                    max_marks: 0,
                    total_credit_marks: 0,
                    max_credit_marks: 0,
                    total_grade_points: 0,
                    max_credits: 0
                };
                element.semesters.forEach(function (sem) {
                    element.semester.total_marks += sem.total_marks;
                    element.semester.max_marks += sem.max_marks;
                    element.semester.total_credit_marks += sem.total_credit_marks;
                    element.semester.max_credit_marks += sem.max_credit_marks;
                    element.semester.total_grade_points += (sem.total_grade_points || 0);
                    element.semester.max_credits += sem.max_credits;
                });
                element.semester.percentage = (element.semester.total_marks * 100) / element.semester.max_marks;
                element.semester.credit_percentage = (element.semester.total_credit_marks * 100) / element.semester.max_credit_marks;
            });
        }
        this.fullList = res.sort(function (a, b) {
            var aMarks = a.semester.percentage;
            var bMarks = b.semester.percentage;
            return (aMarks < bMarks ? 1 : (aMarks > bMarks ? -1 : 0));
        });
        var rank = 1, lag = 0;
        for (var i = 0; i < this.fullList.length; i++) {
            if (i == 0)
                this.fullList[i].rank = 1;
            else if (this.fullList[i - 1].semester.percentage === this.fullList[i].semester.percentage) {
                this.fullList[i].rank = rank;
                ++lag;
            }
            else {
                rank += lag;
                this.fullList[i].rank = ++rank;
                lag = 0;
            }
        }
        if (this.fullList.length > 0 && this.fullList[0].semester.max_marks === 0) {
            this.list = [];
        }
        else {
            this.list = this.fullList.slice();
        }
    };
    TableComponent.prototype.rowClicked = function (index) {
        this.listService.rowSelected(this.list[index]);
    };
    TableComponent.prototype.onSearch = function (e) {
        var str = e.srcElement.value.toUpperCase();
        this.list = this.fullList.filter(function (banda) { return (banda.name.includes(str) || banda.enroll_no.includes(str)); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TableComponent.prototype, "selections", void 0);
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/ranklist/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/ranklist/table/table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"], _list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/shared/courses.json":
/*!*************************************!*\
  !*** ./src/app/shared/courses.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = [{"branch":"CSE","name":"Computer Science and Engineering","code":"027","codeLE":"072"},{"branch":"CIV","name":"Civil Engineering","code":"034","codeLE":"079"},{"branch":"ECE","name":"Electronics and Communications Engineering","code":"028","codeLE":"073"},{"branch":"EE","name":"Electrical Engineering","code":"110","codeLE":"083"},{"branch":"EEE","name":"Electrical and Electronics Engineering","code":"049","codeLE":"078"},{"branch":"ICE","name":"Instrumentation and Control Engineering","code":"030","codeLE":"076"},{"branch":"IT","name":"Information Technology","code":"031","codeLE":"077"},{"branch":"MAE","name":"Mechanical and Automation Engineering","code":"036","codeLE":"074"},{"branch":"ME","name":"Mechanical Engineering","code":"111","codeLE":"082"},{"branch":"MET","name":"Mechatronics","code":"112","codeLE":"084"},{"branch":"PE","name":"Power Engineering","code":"037","codeLE":"075"},{"branch":"TE","name":"Tools Engineering","code":"086","codeLE":"081"}];

/***/ }),

/***/ "./src/app/shared/institutes.json":
/*!****************************************!*\
  !*** ./src/app/shared/institutes.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, default */
/***/ (function(module) {

module.exports = [{"name":"AMBEDKAR INSTITUTE OF ADVANCED COMMUNICATION TECHNOLOGIES & RESEARCH","abbrev":"AIACTR","code":"101","codeEve":""},{"name":"AMITY SCHOOL OF ENGINEERING & TECHNOLOGY","abbrev":"AMITY","code":"104","codeEve":""},{"name":"BHAGWAN MAHAVEER COLLEGE OF ENGINEERING & MANAGEMENT","abbrev":"BMCEM","code":"552","codeEve":""},{"name":"BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY","abbrev":"BPIT","code":"208","codeEve":""},{"name":"BHARATI VIDYAPEETH COLLEGE OF ENGINEERING","abbrev":"BVCOE","code":"115","codeEve":"512"},{"name":"BM INSTITUTE OF ENGINEERING & TECHNOLOGY","abbrev":"BMIET","code":"553","codeEve":""},{"name":"CH. BRAHAM PRAKASH GOVERNMENT ENGINEERING COLLEGE","abbrev":"CBPGEC","code":"207","codeEve":""},{"name":"DELHI INSTITUTE OF TOOL ENGINEERING","abbrev":"DITE","code":"702","codeEve":""},{"name":"DELHI TECHNICAL CAMPUS","abbrev":"DTC","code":"180","codeEve":"256"},{"name":"G B PANT GOVT. ENGINEERING COLLEGE","abbrev":"GBPGEC","code":"209","codeEve":""},{"name":"GURU TEGH BAHADUR INSTITUTE OF TECHNOLOGY","abbrev":"GTBIT","code":"132","codeEve":"768"},{"name":"HMR INSTITUTE OF TECHNOLOGY & MANAGEMENT","abbrev":"HMR","code":"133","codeEve":"965"},{"name":"JIMS ENGINEERING MANAGEMENT TECHNICAL CAMPUS","abbrev":"JIMS","code":"255","codeEve":""},{"name":"MAHARAJA AGRASEN INSTITUTE OF TECHNOLOGY","abbrev":"MAIT","code":"148","codeEve":"964"},{"name":"MAHARAJA SURAJMAL INSTITUTE OF TECHNOLOGY","abbrev":"MSIT","code":"150","codeEve":"963"},{"name":"MAHAVIR SWAMI INSTITUTE OF TECHNOLOGY","abbrev":"MSWAMI","code":"551","codeEve":""},{"name":"NATIONAL POWER TRAINING INSTITUTE","abbrev":"NPTI","code":"153","codeEve":""},{"name":"NORTHERN INDIA ENGINEERING COLLEGE","abbrev":"NIEC","code":"156","codeEve":"962"}];

/***/ }),

/***/ "./src/app/shared/model.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/model.service.ts ***!
  \*****************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ModelService = /** @class */ (function () {
    function ModelService(http) {
        this.http = http;
        // baseUrl = 'https://ec2-13-126-183-106.ap-south-1.compute.amazonaws.com/api';
        this.baseUrl = 'http://localhost:3000/api';
    }
    ModelService.prototype.getList = function (college, shift, batch, branch, sem) {
        return this.http.get(this.baseUrl + "/list", {
            params: {
                insti: college,
                shift: shift,
                batch: batch,
                branch: branch,
                sem: sem
            }
        });
    };
    ModelService.prototype.getStudent = function (enroll) {
        return this.http.get(this.baseUrl + "/student", {
            params: {
                enroll: enroll
            }
        });
    };
    ModelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/shared/subjects.json":
/*!**************************************!*\
  !*** ./src/app/shared/subjects.json ***!
  \**************************************/
/*! exports provided: 27108, 27111, 27154, 27157, 27159, 27203, 27204, 27206, 27208, 27209, 27210, 27211, 27254, 27255, 27256, 27257, 27258, 27260, 27301, 27302, 27303, 27304, 27306, 27307, 27308, 27310, 27351, 27352, 27353, 27354, 27356, 27357, 27359, 27401, 27402, 27403, 27404, 27407, 27408, 27409, 27410, 27411, 27412, 27413, 27414, 27415, 27416, 27418, 27420, 27421, 27422, 27423, 27424, 27425, 27426, 27427, 27428, 27429, 27430, 27451, 27453, 27454, 27455, 27456, 27457, 27458, 27459, 27460, 27461, 28106, 28156, 28202, 28203, 28204, 28205, 28206, 28207, 28211, 28212, 28251, 28252, 28253, 28254, 28256, 28257, 28258, 28259, 28302, 28303, 28304, 28305, 28306, 28308, 28309, 28310, 28314, 28351, 28352, 28353, 28354, 28355, 28356, 28357, 28358, 28359, 28360, 28401, 28403, 28404, 28405, 28406, 28407, 28408, 28409, 28411, 28412, 28416, 28417, 28419, 28420, 28421, 28424, 28427, 28428, 28429, 28430, 28432, 28434, 28451, 28452, 28453, 28454, 28455, 28456, 28457, 28458, 28459, 28461, 28463, 30203, 30204, 30206, 30208, 30210, 30211, 30251, 30252, 30254, 30258, 30302, 30303, 30304, 30308, 30309, 30310, 30352, 30353, 30354, 30357, 30358, 30359, 30401, 30403, 30404, 30405, 30406, 30407, 30408, 30410, 30411, 30413, 30414, 30417, 30418, 30419, 30421, 30423, 30425, 30427, 30428, 30430, 30451, 30452, 30453, 30454, 30455, 30456, 30457, 30458, 30459, 30461, 31302, 31309, 31357, 31359, 31401, 31402, 31403, 31406, 31407, 31408, 31409, 31410, 31411, 31412, 31413, 31414, 31415, 31416, 31418, 31419, 31420, 31421, 31422, 31423, 31425, 31427, 31428, 31429, 31430, 31432, 31452, 31453, 31455, 31456, 31458, 31459, 31460, 31461, 31463, 34202, 34203, 34204, 34205, 34206, 34207, 34208, 34209, 34210, 34211, 34212, 34252, 34253, 34254, 34255, 34256, 34257, 34258, 34259, 34260, 34302, 34303, 34304, 34305, 34306, 34307, 34308, 34309, 34310, 34311, 34312, 34352, 34353, 34354, 34355, 34356, 34357, 34358, 34359, 34360, 34401, 34403, 34404, 34405, 34406, 34410, 34411, 34412, 34413, 34415, 34416, 34417, 34418, 34419, 34422, 34424, 34451, 34452, 34453, 34454, 34455, 34457, 34459, 34460, 36105, 36110, 36155, 36157, 36158, 36201, 36202, 36203, 36204, 36205, 36206, 36207, 36208, 36209, 36210, 36212, 36251, 36252, 36253, 36254, 36255, 36256, 36257, 36258, 36260, 36301, 36302, 36303, 36304, 36305, 36306, 36307, 36308, 36312, 36351, 36352, 36353, 36354, 36355, 36356, 36357, 36358, 36360, 36361, 36362, 36401, 36402, 36403, 36404, 36405, 36407, 36408, 36409, 36411, 36412, 36413, 36414, 36415, 36416, 36417, 36421, 36422, 36423, 36424, 36426, 36427, 36430, 36432, 36451, 36452, 36453, 36454, 36455, 36456, 36457, 36458, 36459, 36461, 37201, 37202, 37204, 37205, 37206, 37207, 37251, 37252, 37253, 37255, 37302, 37303, 37304, 37305, 37306, 37307, 37308, 37309, 37310, 37312, 37313, 37316, 37350, 37353, 37354, 37356, 37357, 37358, 37359, 37360, 37361, 37362, 37401, 37403, 37404, 37405, 37406, 37407, 37409, 37410, 37412, 37413, 37414, 37415, 37421, 37423, 37425, 37426, 37428, 37430, 37451, 37452, 37453, 37454, 37455, 37456, 37457, 37458, 37459, 37461, 37463, 37465, 39310, 49107, 49153, 49202, 49205, 49206, 49207, 49208, 49210, 49211, 49212, 49252, 49253, 49256, 49257, 49258, 49259, 49260, 49302, 49303, 49304, 49305, 49307, 49309, 49310, 49312, 49351, 49352, 49354, 49355, 49357, 49358, 49359, 49401, 49403, 49404, 49405, 49406, 49408, 49409, 49411, 49412, 49413, 49414, 49415, 49416, 49417, 49418, 49419, 49421, 49426, 49428, 49429, 49431, 49432, 49451, 49452, 49453, 49454, 49455, 49456, 49457, 49459, 49461, 56114, 56160, 56302, 56418, 56419, 86204, 86206, 86208, 86210, 86211, 86212, 86252, 86256, 86257, 86258, 86259, 86301, 86302, 86303, 86305, 86306, 86308, 86309, 86310, 86312, 86351, 86352, 86353, 86356, 86358, 86360, 86401, 86402, 86403, 86404, 86405, 86407, 86409, 86410, 86414, 86415, 86417, 86418, 86422, 86423, 86424, 86425, 86427, 86428, 86429, 86451, 86452, 86453, 86454, 86455, 86457, 86459, 86461, 98109, 98112, 98301, 98351, 98402, 98419, 99101, 99102, 99103, 99104, 99113, 99151, 99152, 99161, 99201, 99202, 99203, 99250, 99251, 99252, 99253, 99311, 99419, 99421, 99423, 110203, 110204, 110208, 110251, 110258, 110305, 110306, 110307, 110351, 110355, 110356, 110359, 110402, 110404, 110405, 110421, 110452, 110454, 110455, 110456, 110457, 110459, 110461, 111202, 111203, 111204, 111211, 111252, 111254, 111257, 111302, 111304, 111305, 111306, 111307, 111351, 111352, 111353, 111354, 111355, 111357, 111362, 111401, 111403, 111407, 111432, 111442, 111451, 111453, 111455, 111456, 111457, 111458, 111459, 112202, 112204, 112205, 112206, 112212, 112252, 112254, 112255, 112258, 112302, 112303, 112304, 112305, 112306, 112307, 112308, 112309, 112310, 112311, 112312, 112352, 112353, 112354, 112355, 112356, 112357, 112358, 112359, 112360, 112361, 112402, 112403, 112404, 112405, 112407, 112409, 112410, 112411, 112414, 112415, 112416, 112421, 112424, 112425, 112426, 112427, 112428, 112429, 112430, 112434, 112452, 112453, 112454, 112456, 112457, 112458, 112459, 112461, default */
/***/ (function(module) {

module.exports = {"27108":"INTRODUCTION TO PROGRAMMING","27111":"FUNDAMENTALS OF COMPUTING","27154":"PROGRAMMING LAB","27157":"FUNDAMENTALS OF COMPUTING LAB","27159":"FUNDAMENTALS OF COMPUTING LAB","27203":"FOUNDATION OF COMPUTER SCIENCE","27204":"COMPUTER ORGANIZATION AND ARCHITECTURE","27206":"THEORY OF COMPUTATION","27208":"DATABASE MANAGEMENT SYSTEMS","27209":"DATA STRUCTURE","27210":"OBJECT ORIENTED PROGRAMMING","27211":"COMPUTER GRAPHICS AND MULTIMEDIA","27254":"COMPUTER ORGANIZATION AND ARCHITECTURE LAB","27255":"DATA STRUCTURE LAB","27256":"DATABASE MANAGEMENT SYSTEMS LAB","27257":"COMPUTER GRAPHICS AND MULTIMEDIA LAB","27258":"OBJECT ORIENTED PROGRAMMING  LAB","27260":"COMPUTER ORGANIZATION AND ARCHITECTURE LAB","27301":"ALGORITHMS DESIGN AND ANALYSIS","27302":"COMPILER DESIGN","27303":"SOFTWARE ENGINEERING","27304":"OPERATING SYSTEMS","27306":"COMPUTER NETWORKS","27307":"JAVA PROGRAMMING","27308":"WEB TECHNOLOGY","27310":"ARTIFICIAL INTELLIGENCE","27351":"ALGORITHMS DESIGN AND ANALYSIS LAB","27352":"OPERATING SYSTEMS (LINUX PROGRAMMING AND ADMINISTRATION) LAB","27353":"SOFTWARE ENGINEERING LAB","27354":"COMPUTER NETWORKS LAB","27356":"WEB TECHNOLOGY LAB","27357":"JAVA PROGRAMMING LAB","27359":"VIVA INDUSTRIAL TRAINING / IN - HOUSE WORKSHOP","27401":"INFORMATION SECURITY","27402":"MACHINE LEARNING","27403":"SOFTWARE TESTING AND QUALITY ASSURANCE","27404":"HUMAN COMPUTER INTERACTION","27407":"COMPLEXITY THEORY","27408":"MICRO ELECTRONICS","27409":"INTELLECTUAL PROPERTY RIGHTS","27410":"NATURAL LANGUAGE PROCESSING","27411":"INTRODUCTION TO DATA SCIENCE","27412":"OBJECT ORIENTED SOFTWARE ENGINEERING","27413":"DATA MINING AND BUSINESS INTELLIGENCE","27414":"COMPUTER VISION","27415":"ADVANCED COMPUTER ARCHITECTURE","27416":"SOFTWARE PROJECT MANAGEMENT","27418":"WEB INTELLIGENCE AND BIG DATA","27420":"SERVICE ORIENTED ARCHITECTURE","27421":"SIMULATION AND MODELLING","27422":"MULTIAGENT SYSTEMS","27423":"ADVANCED DBMS","27424":"PRINCIPLES OF PROGRAMMING LANGUAGES","27425":"DATABASE MANAGENT SYSTEMS","27426":"TELECOMMUNICATION NETWORKS","27427":"PARALLEL COMPUTING","27428":"SELECTED TOPICS OF RECENT TRENDS IN COMPUTER SCIENCE AND ENGINEERING","27429":"ARTIFICIAL INTELLIGENCE","27430":"OBJECT ORIENTED PROGRAMMING USING C++","27451":"INFORMATION SECURITY LAB","27453":"SOFTWARE TESTING AND QA LAB","27454":"MACHINE LEARNING LAB","27455":"WIRELESS COMMUNICATION LAB","27456":"LAB BASED ON ELECTIVE - I","27457":"LAB BASED ON ELECTIVE I AND II","27458":"LAB BASED ON ELECTIVE - II","27459":"SUMMER TRAINING / INDUSTRIAL WORKSHOP / CERTIFICATION\\","27460":"MAJOR PROJECT","27461":"MINOR PROJECT","28106":"ELECTRONIC DEVICES","28156":"ELECTRONIC DEVICES LAB.","28202":"SWITCHING THEORY AND LOGIC DESIGN","28203":"ANALOG ELECTRONICS - I","28204":"ANALOG ELECTRONICS-II","28205":"SWITCHING THEORY AND LOGIC DESIGN","28206":"NETWORK ANALYSIS AND SYNTHESIS","28207":"ELECTRONIC INSTRUMENTS AND MEASUREMENTS","28211":"SIGNALS AND SYSTEMS","28212":"COMMUNICATION SYSTEMS","28251":"ANALOG ELECTRONICS -I LAB","28252":"SWITCHING THEORY AND LOGIC DESIGN LAB","28253":"SWITCHING THEORY AND LOGIC DESIGN LAB","28254":"ANALOG ELECTRONICS-II LAB","28256":"COMMUNICATION SYSTEMS LAB","28257":"ELECTRONIC INSTRUMENTS AND MEASUREMENTS LAB","28258":"NETWORK ANALYSIS AND SYNTHESIS LAB","28259":"SIGNALS AND SYSTEMS LAB","28302":"MICROWAVE ENGINEERING","28303":"DIGITAL COMMUNICATION","28304":"INFORMATION THEORY AND CODING","28305":"MICROPROCESSORS AND MICROCONTROLLERS","28306":"DIGITAL SIGNAL PROCESSING","28308":"VLSI DESIGN","28309":"DIGITAL SYSTEM DESIGN","28310":"DATA COMMUNICATIONS AND NETWORKS","28314":"ANTENNA AND WAVE PROPAGATION","28351":"DIGITAL SYSTEM DESIGN LAB","28352":"MICROWAVE ENGINEERING LAB","28353":"POWER ELECTRONICS LAB","28354":"VLSI DESIGN LAB","28355":"MICROPROCESSORS AND MICROCONTROLLERS LAB","28356":"DIGITAL SIGNAL PROCESSING LAB","28357":"DIGITAL COMMUNICATION LAB","28358":"DATA COMMUNICATIONS AND NETWORKS LAB","28359":"INDUSTRIAL TRAINING/IN- HOUSE ELECTRONIC WORKSHOP","28360":"INDUSTRIAL/IN-HOUSE TRAINING#","28401":"EMBEDDED SYSTEMS","28403":"OPTOELECTRONICS AND OPTICAL COMMUNICATION","28404":"SATELLITE COMMUNICATION","28405":"WIRELESS COMMUNICATION","28406":"AD HOC AND SENSOR NETWORKS","28407":"ADVANCED DSP","28408":"CONSUMER ELECTRONICS","28409":"INTRODUCTION TO MEMS","28411":"ADVANCED VLSI DESIGN","28412":"ASIC DESIGN","28416":"INTRODUCTION TO NANOTECHNOLOGY","28417":"RF DEVICES AND CIRCUITS","28419":"RADAR AND NAVIGATION","28420":"DATA COMMUNICATION AND NETWORKS","28421":"DATA COMMUNICATION AND NETWORKS","28424":"ADAPTIVE SIGNAL PROCESSING","28427":"DIGITAL SYSTEM DESIGN","28428":"NEXT GENERATION NETWORKS","28429":"SELECTED TOPICS IN ECE","28430":"DIGITAL COMMUNICATION","28432":"IMAGE PROCESSING AND MACHINE VISION","28434":"MICROPROCESSOR SYSTEM BASED PROCESS DESIGN","28451":"OPTICAL AND WIRELESS COMMUNICATION LAB","28452":"SATELLITE AND ANTENNA LAB","28453":"EMBEDDED SYSTEM LAB","28454":"PRACTICAL BASED ON ELECTIVE OR COMPULSORY SUBJECT","28455":"LAB BASED ON ELECTIVE  - I AND/OR  II","28456":"MAJOR PROJECT","28457":"SEMINAR","28458":"AD HOC AND SENSOR NETWORKS LAB","28459":"MINOR PROJECT","28461":"INDUSTRIAL TRAINING","28463":"WIRELESS COMMUNICATION LAB","30203":"SENSOR AND TRANSDUCERS","30204":"MEASUREMENTS AND INSTRUMENTATION","30206":"POWER ELECTRONICS","30208":"THEORY AND APPLICATION OF INTEGRATED CIRCUITS","30210":"ELECTRICAL MACHINES","30211":"BASICS OF MEASUREMENTS","30251":"SENSOR AND TRANSDUCERS LAB","30252":"MEASUREMENTS AND INSTRUMENTATION LAB","30254":"ELECTRICAL MACHINES LAB","30258":"THEORY AND APPLICATION OF INTEGRATED CIRCUITS LAB","30302":"PNEUMATIC AND HYDRAULIC INSTRUMENTATION","30303":"INDUSTRIAL INSTRUMENTATION","30304":"PROCESS CONTROL","30308":"ANALYTICAL INSTRUMENTATION","30309":"OBJECT ORIENTED PROGRAMMING USING JAVA","30310":"MODERN CONTROL SYSTEMS","30352":"PNEUMATIC AND HYDRAULIC INSTRUMENTATION LAB","30353":"INDUSTRIAL INSTRUMENTATION LAB","30354":"PROCESS CONTROL LAB","30357":"OBJECT ORIENTED PROGRAMMING USING JAVA LAB","30358":"MODERN CONTROL SYSTEMS LAB","30359":"INDUSTRIAL TRAING/IN-HOUSE INSTRUMENTATION WORKSHOP","30401":"DIGITAL CONTROL SYSTEMS","30403":"BIOMEDICAL INSTRUMENTATION","30404":"INTELLIGENT SYSTEMS AND CONTROL","30405":"ARTIFICIAL NEURAL NETWORKS","30406":"VIRTUAL INSTRUMENTATION","30407":"INDUSTRIAL AUTOMATION AND CONTROL","30408":"SYSTEM MODELING AND SIMULATION","30410":"EMBEDDED SYSTEMS","30411":"ELECTRIC DRIVS AND CONTROL","30413":"INSTRUMENTATION DIAGNOSTICS","30414":"VLSI DESIGN","30417":"SELECTED TOPICS IN ICE","30418":"MOBILE COMMUNICATION","30419":"ENGINEERING MATERIALS","30421":"COMPUTER ARCHITECTURE","30423":"SOFTWARE ENGINEERING","30425":"DATA COMMUNICATION NETWORKS","30427":"OPERATING SYSTEMS","30428":"COMPUTER GRAPHICS AND MULTIMEDIA","30430":"ELECTROMAGNETIC FIELD THEORY","30451":"DIGITAL CONTROL SYSTEMS LAB","30452":"INTELLIGENT SYSTEMS AND CONTROL LAB","30453":"BIOMEDICAL INSTRUMENTATION LAB","30454":"VIRTUAL INSTRUMENTATION LAB","30455":"SEMINAR (TOPIC SHOULD BE LINKED TO INDUSTRIAL TRAINING/SOFT SKILLS LEARNT)","30456":"MAJOR PROJECT","30457":"MINOR PROJECT","30458":"LAB BASED ON ELECTIVE GROUP A AND B","30459":"INDUSTRIAL TRAINING","30461":"LAB BASED ON ELECTIVES GROUP A AND B","31302":"DECISION SCIENCE","31309":"COMMUNICATION SYSTEMS","31357":"COMMUNICATION SYSTEMS LAB","31359":"VIVA INDUSTRIAL TRAINING / IN - HOUSE  WORKSHOP","31401":"ADVANCED COMPUTER NETWORKS","31402":"MOBILE COMPUTING","31403":"CRYPTOGRAPHY AND NETWORK SECURITY","31406":"BIG DATA ANALYTICS","31407":"CLOUD COMPUTING","31408":"SOCIAL NETWORK ANALYSIS","31409":"DISTRIBUTED DATABASES","31410":"SOFT COMPUTING","31411":"SEMANTIC WEB TECHNOLOGIES","31412":"BIO INFORMATICS","31413":"SOFTWARE TESTING","31414":"WEB APPLICATION DEVELOPMENT USING .NET","31415":"DIGITAL SIGNAL PROCESSING","31416":"INFORMATION THEORY AND CODING","31418":"DIGITAL IMAGE PROCESSING","31419":".NET AND C# PROGRAMMING","31420":"NEXT GENERATION NETWORKS","31421":"ENTERPRISE COMPUTING IN JAVA","31422":"GPS AND GIS","31423":"SYSTEM AND NETWORK ADMINISTRATION","31425":"GRID COMPUTING","31427":"ADVANCED DATABASE ADMINISTRATION","31428":"E - COMMERCE AND M - COMMERCE","31429":"PROBABILISTIC GRAPHICAL MODELS","31430":"DISTRIBUTED SYSTEMS","31432":"SELECTED TOPICS OF RECENT TRENDS IN INFORMATION TECHNOLOGY**","31452":"MOBILE COMPUTING LAB","31453":"ADVANCED COMPUTER NETWORKS LAB","31455":"CRYTOGRAPHY AND NETWORK SECURITY LAB","31456":"LAB BASED ON ELECTIVE - I","31458":"LAB BASED ON ELECTIVE - II","31459":"LAB BASED ON ELECTIVE GROUP A OR B","31460":"MAJOR PROJECT","31461":"SUMMER TRAINING / INDUSTRIAL WORKSHOP / CERTIFICATION","31463":"MINOR PROJECT +","34202":"WATER ENGINEERING","34203":"STRENGTH OF MATERIAL","34204":"STRUCTURAL ANALYSIS","34205":"FLUID MECHANICS","34206":"HYDRAULICS AND HYDRAULICS MACHINES","34207":"BUILDING MATERIALS AND CONTRUCTIONS","34208":"ADVANCED SURVEYING","34209":"SURVEYING","34210":"SOIL MECHANICS","34211":"ENGINEERING GEOLOGY","34212":"DESIGN OF CONCRETE STRUCTURE","34252":"CEMENT AND CONCRETE TESTING LAB","34253":"FLUID MECHANICS LAB","34254":"STRUCTURE LAB","34255":"CIVIL ENGINEERING DRAWING USING CAD LAB","34256":"HYDRAULICS LAB","34257":"SURVEYING LAB","34258":"ADVANCED SURVEYING LAB","34259":"GEOLOGY AND BUILDING MATERIAL LAB","34260":"SEMINAR","34302":"OPERATION RESEARCH AND MANAGEMENT","34303":"ADVANCED STRUCTURAL ANALYSIS","34304":"APPLICATION OF REMOTE SENSING AND GIS","34305":"DESIGN OF STEEL STRUCTURE","34306":"QUATITY SURVEYING AND COST ESTIMATION","34307":"ENGINEERING HYDROLOGY","34308":"OPEN CHANNEL FLOW AND NUMERICAL HYDRAULICS","34309":"GEOTECHNICAL & FOUNDATION ENGG.","34310":"ADVANCE STRUCTURAL DESIGN","34311":"WASTEWATER ENGINEERING & REUSE","34312":"TRANSPORTATION ENGINEERING-I","34352":"TRANSPORTATION ENGINEERING LAB","34353":"GEOTECHNICAL ENGINEERING LAB","34354":"APPLICATION OF REMOTE SENSING LAB","34355":"WATER AND WASTEWATER ANALYSIS LAB","34356":"STRUCTURES DESIGN LAB","34357":"SEMINAR ON CIVIL ENGINEERING PROJECTS/VISITS/CASE STUDIES","34358":"SEMINAR","34359":"SOFTWARE TRAINING","34360":"SURVEYING CAMP","34401":"ECONOMICS FOR ENGINEERS","34403":"IRRIGATION ENGINEERING","34404":"PLANNING AND MANAGEMENT OF CONTRUCTION PROJECTS","34405":"TRANSPORTATION ENGINEERING-II","34406":"ANALYSIS AND DESIGN OF BRIDGES","34410":"TRANSPORTATION, PLANNING AND MANAGEMENT","34411":"WATER RESOURCE SYSTEM PLANNING","34412":"GROUND WATER ASSESSMENT, DEVELOPMENT & MANAGEMENT","34413":"EARTHQUAKE TECHNOLOGY","34415":"GEO-SYNTHETICS AND REINFORCED SOIL","34416":"ADVANCED GEOTECHNICAL ENGINEERING","34417":"STRUCTURE REPAIR AND REHABILITATION","34418":"FEM IN STRUCTURAL ENGINEERING","34419":"DATA ANALYTICS","34422":"ENVIRONMENT ENGINEERING","34424":"OFFSHORE STRUCTURAL ENGINEERING","34451":"IRRIGATION ENGINEERING DESIGN","34452":"ESTIMATION OF PROJECTS USING APPLICABLE SOFTWARE","34453":"ECONOMICS OF INFRASTRUCTURE PROJECTS: CASE STUDIES","34454":"LAB BASED ON ELECTIVE 1 OR 2","34455":"MINOR PROJECT","34457":"INDUSTRIAL TRAINING RELATED TO CIVIL ENGINEERING","34459":"LAB BASED ON CORE AND GENERAL ELECTIVE","34460":"MAJOR PROJECTS","36105":"MANUFACTURING PROCESSES","36110":"ENGINEERING MECHANICS","36155":"WORKSHOP PRACTICE","36157":"ENGINEERING GRAPHICS LAB","36158":"ENGINEERING MECHANICS LAB","36201":"FLUIDS MECHANICS","36202":"KINEMATICS OF MACHINES","36203":"THERMAL SCIENCE","36204":"STRENGTH OF MATERIALS-II","36205":"MANUFACTURING TECHNOLOGY","36206":"MANUFACTURING MACHINES","36207":"MATERIAL SCIENCE AND METALLURGY","36208":"MEASUREMENTS AND INSTRUMENTATION","36209":"ELECTRICAL MACHINES","36210":"I.C. ENGINES AND GAS TURBINE","36212":"FLUID MECHANICS","36251":"FLUID MECHANICS LAB","36252":"KINEMATICS OF MACHINES LAB","36253":"NUMERICAL ANALYSIS AND STATISTICAL TECHNIQUES LAB","36254":"STRENGTH OF MATERIALS LAB-II","36255":"PRODUCTION TECHNOLOGY LAB","36256":"MANUFACTURING MACHINES LAB","36257":"STRENGTH OF MATERIALS - I LAB","36258":"I.C. ENGINES AND GAS TURBINE LAB","36260":"FLUID MECHANICS  LAB","36301":"MANAGEMENT OF MANUFACTURING SYSTEMS","36302":"MACHINE DESIGN -II","36303":"HEAT TRANSFER","36304":"METAL CUTTING AND TOOL DESIGN","36305":"DYNAMICS OF MACHINES","36306":"FLUID SYSTEMS","36307":"MACHINE DESIGN-I","36308":"REFRIGERATION AND AIR CONDITIONING","36312":"METROLOGY","36351":"HEAT TRANSFER LAB","36352":"MACHINE DESIGN -II LAB","36353":"DYNAMICS OF MACHINES LAB","36354":"METAL CUTTING AND TOOL DESIGN LAB","36355":"MACHINE DESIGN-I LAB","36356":"FLUID SYSTEMS LAB","36357":"INDUSTRIAL TRAINING","36358":"REFRIGERATION AND AIR CONDITIONING LAB","36360":"METROLOGY LAB","36361":"INDUSTRIAL TRAINING/IN-HOUSE","36362":"IN-HOUSE TRAINING","36401":"AUTOMOBILE ENGINEERING","36402":"ENGINEERING SYSTEM MODELING AND SIMULATION","36403":"COMPUTER INTEGRATED MANUFACTURING","36404":"STATISTICAL QUALITY CONTROL AND RELIABILITY","36405":"POWER PLANT ENGINEERING","36407":"OPTIMIZATION TECHNIQUES","36408":"NUCLEAR POWER GENERATION AND SUPPLY","36409":"PREVENTIVE MAINTENANCE AND CONDITION MONITORING","36411":"COMPUTATIONAL FLUID DYNAMICS","36412":"RAPID PROTOTYPING","36413":"NON - CONVENTIONAL MANUFACTURING PROCESSES","36414":"APPLIED PLASTICITY","36415":"GEOMETRIC MODELLING AND PRODUCT DESIGN","36416":"MECHANICAL VIBRATIONS","36417":"ADVANCED MATERIAL SCIENCE AND METALLURGY","36421":"MANAGEMENT INFORMATION SYSTEMS AND ERP","36422":"GAS DYNAMICS","36423":"FINITE ELEMENT METHODS","36424":"CRYOGENIC ENGINEERING","36426":"TOTAL QUALITY MANAGEMENT","36427":"ROTOR DYNAMICS","36430":"COMPUTER AIDED GRAPHICS AND PRODUCT DESIGN","36432":"TURBO MACHINERY","36451":"AUTOMOBILE ENGINEERING LAB","36452":"ENGINEERING SYSTEM MODELLING AND SIMULATION LAB","36453":"COMPUTER INTEGRATED MANUFACTURING LAB","36454":"STATISTICAL QUALITY CONTROL AND RELIABILITY LAB","36455":"LAB BASED ON ELECTIVE-I AND II","36456":"LAB BASED ON ELECTIVE III OR IV","36457":"MINOR PROJECT +","36458":"MAJOR PROJECT","36459":"SEMINAR","36461":"INDUSTRIAL TRAINING","37201":"ELECTRICAL MACHINES","37202":"POWER GENERATION ENGINEERING","37204":"ENERGY CONVERSION","37205":"THERMODYNAMICS FOR POWER ENGINEERS","37206":"HEAT AND MASS TRANSFER","37207":"STRENGTH OF MATERIALS AND THEORY OF MACHINES","37251":"THERMODYNAMICS FOR POWER ENGINEERS LAB","37252":"HEAT AND MASS TRANSFER LAB","37253":"STRENGTH OF MATERIAL AND THEORY OF MACHINES LAB","37255":"ELECTRICAL MACHINES LAB","37302":"LOAD DISPATCH AND ELECTRICITY REGULATIONS","37303":"STEAM GENERATOR AND ITS AUXILIARIES","37304":"POWER PLANT COMMISSIONING (THERMAL AND HYDRO)","37305":"STEAM TURBINE AND ITS AUXILIARIES","37306":"POWER PLANT CONTROL AND INSTRUMENTATION","37307":"ELECTRICAL GENERATOR AND AUXILIARIES","37308":"POWER SYSTEM, TRANSMISSION AND DISTRIBUTION","37309":"REFRIGERATION AND AIR CONDITIONING","37310":"I.C. ENGINES AND GAS DYNAMICS","37312":"POWER ELECTRONICS AND ELECTRIC DRIVES","37313":"ELECTRICAL AND ELECTRONIC MEASUREMENTS AND INSTRUMENTATION","37316":"ELECTROMAGNETIC FIELD THEORY","37350":"PRACTICAL/IN HOUSE TRAINING","37353":"THERMAL POWER PLANT SCHEME TRACING LAB","37354":"ROTATIONAL ON - JOB TRAINING (OPERATION - STEAM GENERATOR AND ITS AUXILIARIES)","37356":"ROTATIONAL ON - JOB TRAINING (OPERATION - STEAM TURBINE AND ITS AUXILIARIES)","37357":"REFRIGERATION AND AIR CONDITIONING LAB","37358":"ROTATIONAL ON - JOB TRAINING (OPERATION - POWER PLANT ELECTRICAL MACHINES AND SYSTEMS)","37359":"ELECTRICAL AND ELECTRONIC MEASUREMENT AND INSTRUMENTATION LAB","37360":"I.C. ENGINES & GAS DYNAMICS LAB","37361":"PRACTICAL TRAINING/IN HOUSE TRAINING","37362":"POWER ELECTRONICS AND ELECTRIC DRIVES LAB","37401":"POWER PLANT OPERATION","37403":"POWER SYSTEM PROTECTION AND SWITCHGEAR","37404":"ENVIRONMENTAL MANAGEMENT","37405":"POWER PLANT PERFORMANCE AND EFFICIENCY","37406":"MICROPROCESSOR AND MICROCONTROLLER","37407":"POWER PLANT MAINTENANCE (PLANT MAINTENANCE PLANNING AND COST CONTROL)","37409":"THEORY OF MACHINE","37410":"DESIGN OF ELECTRICAL MACHINE","37412":"PROJECT MANAGEMENT","37413":"BALANCE OF POWER PLANT","37414":"SMART GRID","37415":"PREVENTIVE MAINTENANCE & CONDITION MONITORING","37421":"MANUFACTURING AND INDUSTRIAL ENGINEERING","37423":"COMMUNICATION ENGINEERING","37425":"INFORMATION TECHNOLOGY AND ITS APPLICATIONS","37426":"ENERGY MANAGEMENT","37428":"HIGH VOLTAGE AC AND DC TECHNOLOGY","37430":"RESIDUAL LIFE ASSESSMENT AND EXTENSION OF TPP","37451":"ROTATIONAL ON JOB - TRAINING (MAINTENANCE - STEAM GENERATOR AND ITS AUXILIARIES)","37452":"ENVIRONMENTAL AND ENERGY AUDIT LAB","37453":"ROTATIONAL ON JOB - TRAINING (MAINTENANCE - STEAM TURBINE AND ITS AUXILIARIES)","37454":"MICROPROCESSOR AND MICROCONTROLLER LAB","37455":"ROTATIONAL ON - JOB TRAINING (MAINTENANCE - POWER PLANT ELECTRICAL MACHINES & SYSTEMS)","37456":"MAJOR PROJECT","37457":"POWER SYSTEM PROTECTION AND SWITCHGEAR LAB","37458":"LAB BASED ON ELECTIVE GROUP A OR B","37459":"LAB BASED ON ELECTIVE GROUP A AND B","37461":"SEMINAR","37463":"INDUSTRIAL TRAINING","37465":"MINOR PROJECTS","39310":"ORGANIZATIONAL BEHAVIOUR","49107":"ELECTRICAL TECHNOLOGY","49153":"ELECTRICAL TECHNOLOGY LAB","49202":"ELECTRICAL MACHINES-II","49205":"MATERIALS IN ELECTRICAL SYSTEMS","49206":"POWER SYSTEM-I","49207":"CIRCUITS AND SYSTEMS","49208":"ELECTICAL & ELECTRONICS MEASURING INSTRUMENTS","49210":"ELECTROMAGNETIC FIELD THEORY","49211":"ELECTRICAL MACHINES - I","49212":"CONTROL SYSTEMS","49252":"ELECTICAL MACHINES-II LAB","49253":"ELECTICAL MACHINES -I LAB","49256":"POWER ELECTRONICS LAB","49257":"CIRCUITS AND SYSTEMS LAB","49258":"ELECTRICAL & ELECTRONICS MEASURING INSTRUMENTS LAB","49259":"SCIENTIFIC COMPUTING LAB","49260":"CONTROL SYSTEMS LAB","49302":"POWER SYSTEM - II","49303":"POWER ELECTRONICS","49304":"UTILIZATION OF ELECTRICAL ENERGY & ELECTRIC TRACTION","49305":"SENSORS AND TRANSDUCERS","49307":"SWITCHING THEORY AND LOGIC DESIGN","49309":"COMMUNICATION SYSTEMS","49310":"MICROPROCESSORS AND MICROCONTROLLERS","49312":"POWER STATION PRACTICE","49351":"SENSORS AND TRANSDUCERS LAB","49352":"POWER SYSTEM-II LAB","49354":"UTILIZATION OF ELECTRICAL ENERGY LAB","49355":"SWITCHING THEORY AND LOGIC DESIGN LAB","49357":"COMMUNICATION SYSTEMS LAB","49358":"MICROPROCESSORS AND MICROCONTROLLERS LAB","49359":"ELECTRICAL & ELECTRONIC WORKSHOP","49401":"ELECTRICAL DRIVES","49403":"ADVANCED CONTROL SYSTEM","49404":"NEURO-FUZZY SYSTEMS","49405":"EHV AC AND HVDC TRANSMISSIONS","49406":"POWER SYSTEM OPERATION & CONTROL","49408":"APPLICATION OF POWER ELECTRONICS TO POWER SYSTEMS","49409":"POWER DISTRIBUTION SYSTEM","49411":"TELEMETRY & DATA ACQUISITION SYSTEMS","49412":"RELIABILITY ENGINEERING & APPLICATION TO POWER SYSTEM","49413":"PLC AND SCADA SYSTEMS","49414":"ELECTRICAL MACHINE - III","49415":"POWER ELECTRONICS","49416":"ELECTRICAL ENERGY CONSERVATION","49417":"HIGH VOLTAGE ENGINEERING","49418":"ELECTRICAL SYSTEM DESIGN","49419":"RENEWABLE ENERGY RESOURCES","49421":"SELECTED TOPICS IN EEE","49426":"POWER PLANT INSTRUMENTATION","49428":"INTELLIGENT AND SMART INSTRUMENTATION","49429":"CONTROL SYSTEM","49431":"POWER LINE CARRIER COMMUNICATION","49432":"ELECTRICAL POWER QUALITY","49451":"ELECTRICAL DRIVES LAB","49452":"NEURO & FUZZY SYSTEMS LAB","49453":"ADVANCED CONTROL SYSTEMS LAB","49454":"PRACTICAL BASED ON ELECTIVE","49455":"PRACTICAL BASED ON ELECTIVES GROUP A AND B","49456":"MAJOR PROJECT","49457":"SEMINAR","49459":"MINOR PROJECT","49461":"INDUSTRIAL TRAINING","56114":"ENVIRONMENTAL STUDIES","56160":"ENVIRONMENTAL STUDIES LAB","56302":"ENVIRONMENT SYSTEM OPTIMIZATION","56418":"GROUND WATER CONTAMINATION AND MITIGATION MEASURES","56419":"PLANNING AND DESIGN OF GREEN BUILDINGS","86204":"METAL FORMING","86206":"MACHINE TOOLS","86208":"MACHINE ELEMENTS DESIGN","86210":"THERMAL SCIENCE","86211":"MECHANICS OF SOLIDS","86212":"METROLOGY AND QUALITY ASSURANCE","86252":"MACHINE TOOLS LAB","86256":"MACHINE ELEMENTS DESIGN LAB","86257":"MECHANICS OF SOLIDS AND FLUIDS LAB","86258":"METROLOGY AND QUALITY ASSURANCE LAB","86259":"MECHANICAL ENGINEERING DRAWING LAB","86301":"PRODUCTION PLANNING AND CONTROL","86302":"PRESS TOOL DESIGN - I","86303":"CNC MACHINING AND PROGRAMMING","86305":"JIGS, FIXTURES AND GAUGE DESIGN","86306":"MOULD DESIGN - I","86308":"LAYERED MANUFACTURING","86309":"PLASTIC TECHNOLOGY","86310":"FINITE ELEMENT METHOD","86312":"TOTAL QUALITY MANAGEMENT","86351":"CNC MACHINING AND PROGRAMMING LAB","86352":"PRESS TOOL DESIGN - I LAB","86353":"JIGS, FIXTURES AND GAUGE DESIGN LAB","86356":"MOULD DESIGN - I LAB","86358":"FINITE ELEMENT METHOD LAB","86360":"IN - HOUSE TRAINING (TWO WEEKS)","86401":"PRESS TOOL DESIGN - II","86402":"ADVANCED DIE CASTING AND DIE DESIGN","86403":"MOULD DESIGN - II","86404":"MODERN MANUFACTURING METHODS","86405":"COMPUTER AIDED GRAPHICS AND PRODUCT DESIGN","86407":"VIBRATIONS ENGINEERING DESIGN","86409":"CREATIVITY IN ENGINEERING","86410":"THEORY OF DESIGN OPTIMIZATION","86414":"APPLIED PLASTICITY","86415":"ADVANCED WELDING TECHNOLOGY","86417":"LOW COST AUTOMATION","86418":"PROJECT MANAGEMENT","86422":"INDUSTRIAL MANAGEMENT","86423":"VALUE ENGINEERING","86424":"SUPPLY CHAIN MANAGEMENT - PLANNING","86425":"MATERIAL MANAGEMENT","86427":"CONCURRENT ENGINEERING","86428":"SAFETY ENGINEERING","86429":"ERGONOMICS","86451":"PRESS TOOL DESIGN - II LAB","86452":"LAB BASED ON ELECTIVE III AND IV","86453":"MOULD DESIGN - II LAB","86454":"MAJOR PROJECT","86455":"COMPUTER AIDED GRAPHICS AND PRODUCT DESIGN LAB","86457":"LAB BASED ON (ELECTIVE I AND II)","86459":"MINOR PROJECT+","86461":"INDUSTRIAL TRAINING","98109":"HUMAN VALUE & PROFESSIONAL ETHICS-I","98112":"COMMUNICATIONS SKILLS","98301":"COMMUNICATION SKILLS FOR PROFESSIONALS","98351":"COMMUNICATION SKILLS FOR PROFESSIONALS LAB","98402":"HUMAN VALUES AND PROFESSIONAL ETHICS - II","98419":"SOCIOLOGY AND ELEMENTS OF INDIAN HISTORY FOR ENGINEERS","99101":"APPLIED MATHEMATICS-I","99102":"APPLIED MATHEMATICS-II","99103":"APPLIED PHYSICS-I","99104":"APPLIED PHYSICS-II","99113":"APPLIED CHEMISTRY","99151":"APPLIED PHYSICS LAB-I","99152":"APPLIED PHYSICS LAB-II","99161":"APPLIED CHEMISTRY LAB","99201":"APPLIED MATHEMATICS - III","99202":"NUMERICAL ANALYSIS AND STATISTICAL TECHNIQUES","99203":"NUMERICAL ANALYSIS AND STATISTICAL TECHNIQUES","99250":"NCC/NSS","99251":"NUMERICAL ANALYSIS AND STATISTICAL TECHNIQUES LAB","99252":"NUMERICAL ANALYSIS AND STATISTICAL TECHNIQUES LAB","99253":"ELECTRICAL MACHINES LAB","99311":"INDUSTRIAL MANAGEMENT","99419":"SOCIOLOGY AND ELEMENTS OF INDIAN HISTORY FOR ENGINEERS","99421":"PROJECT MANAGEMENT","99423":"ECONOMICS FOR ENGINEERS","110203":"ANALOG ELECTRONICS","110204":"THERMODYNAMICS","110208":"ELECTRIAL MEASURING INSTRUMENTS AND TRANSDUCERS","110251":"ANALOG ELECTRONICS  LAB","110258":"ELECTRIAL MEASURING INSTRUMENTS AND TRANSDUCERS LAB","110305":"SIGNAL AND SYSTEMS","110306":"EHV AC AND HVDC TRANSMISSIONS","110307":"CONTROL SYSTEMS","110351":"SIGNALS AND SYSTEMS LAB","110355":"CONTROL SYSTEMS LAB","110356":"ELECTRICAL MACHINE - III LAB","110359":"ELECTRICAL WORKSHOP","110402":"POWER SYSTEM ANALYSIS & STABILITY","110404":"POWER SYSTEM ANALYSIS AND STABILITY","110405":"ELECTRICAL MACHINES DESIGN","110421":"SELECTED TOPICS IN EE","110452":"POWER SYSTEM ANALYSIS AND STABILITY LAB","110454":"DIGITAL SIGNAL PROCESSING LAB","110455":"ELECTRICAL MACHINES DESIGN LAB","110456":"MAJOR PROJECT","110457":"SEMINAR","110459":"MINOR PROJECT","110461":"INDUSTRIAL TRAINING","111202":"THEORY OF MACHINES","111203":"STRENGTH OF MATERIAL","111204":"FLUID SYSTEMS","111211":"STRENGTH OF MATERIALS-I","111252":"THEORY OF MACHINES LAB","111254":"FLUID SYSTEMS LAB","111257":"STRENGTH OF MATERIAL  LAB","111302":"MACHINE DESIGN","111304":"AUTOMOBILE ENGINEERING","111305":"HEAT TRANSFER AND I.C. ENGINES","111306":"OPERATIONS RESEARCH","111307":"METROLOGY","111351":"METAL CUTTING AND TOOL DESIGN LAB","111352":"MACHINE DESIGN LAB","111353":"HEAT TRANSFER AND I.C. ENGINE LAB","111354":"AUTOMOBILE ENGINEERING LAB","111355":"METROLOGY LAB","111357":"INDUSTRIAL TRAINING","111362":"IN HOUSE TRAINING","111401":"COMPUTER AIDED DESIGN","111403":"MECHATRONICS","111407":"ADVANCED MANUFACTURING METHODS","111432":"GAS TURBINES AND COMPRESSORS","111442":"PROCESS PLANNING AND COST ESTIMATION","111451":"CAD  LAB","111453":"MECHATRONICS LAB","111455":"LAB BASED ON ELECTIVE I AND II","111456":"LAB BASED ON ELECTIVE III OR IV","111457":"MINOR PROJECT","111458":"MAJOR PROJECT","111459":"SUMMER TRAINING","112202":"ORGANIZATIONAL BEHAVIOUR","112204":"KINEMATICS AND DYNAMICS OF MACHINERY","112205":"MEASUREMENTS AND INSTRUMENTATION","112206":"SIGNALS AND SYSTEMS","112212":"HYDRAULICS AND PNEUMATICS","112252":"KINEMATICS AND DYNAMICS OF MACHINERY LAB","112254":"SIGNALS AND SYSTEMS LAB","112255":"MEASUREMENTS AND INSTRUMENTATION LAB","112258":"HYDRAULICS AND PNEUMATICS LAB","112302":"MANAGEMENT OF MANUFACTURING SYSTEM","112303":"MACHINE ELEMENT DESIGN","112304":"MANUFACTURING TECHNOLOGY","112305":"METROLOGY AND QUALITY CONTROL","112306":"PROGRAMMABLE LOGIC CONTROLLER AND SCADA","112307":"DIGITAL SIGNAL PROCESSING","112308":"COMPUTER INTEGRATED MANUFACTURING","112309":"SENSOR AND TRANSDUCERS","112310":"AUTOMOTIVE ELECTRONICS","112311":"POWER ELECTRONICS AND DRIVES","112312":"MICROPROCESSORS AND MICROCONTROLLERS","112352":"PROGRAMMABLE LOGIC CONTROLLER AND SCADA LAB","112353":"METROLOGY AND QUALITY CONTROL LAB","112354":"COMPUTER INTEGRATED MANUFACTURING LAB","112355":"DIGITAL SIGNAL PROCESSING LAB","112356":"AUTOMOTIVE ELECTRONICS LAB","112357":"SENSOR AND TRANSDUCERS LAB","112358":"MICROPROCESSORS AND MICROCONTROLLERS LAB","112359":"POWER ELECTRONICS AND DRIVES LAB","112360":"IN HOUSE TRAINING/ INDUSTRIAL TRAINING","112361":"INDUSTRIAL TRAINING","112402":"ROBOTICS","112403":"MICRO ELECTRO MECHANICAL SYSTEM AND NANO TECHNOLOGY","112404":"EMBEDDED SYSTEMS","112405":"MECHATRONICS SYSTEM DESIGN","112407":"IC ENGINES","112409":"DIGITAL IMAGE PROCESSING","112410":"FACILITY AND LAYOUT PLANNING","112411":"PRODUCT DESIGN AND COSTING","112414":"FACTORY AUTOMATION","112415":"PROCESS MODELLING AND OPTIMIZATION TECHNIQUE","112416":"REFRIGERATION AND AIR CONDITIONING","112421":"WASTE AND HEAT RECOVERY SYSTEMS","112424":"INTELLIGENT AND SMART INSTRUMENTATION","112425":"FUZZY LOGIC AND NEURAL NETWORKS","112426":"RELIABILITY AND MAINTENANCE MANAGEMENT","112427":"OPERATIONS RESEARCH","112428":"FLEXIBLE MANUFACTURING SYSTEM","112429":"DECISION SCIENCE","112430":"ENGINEERING ECONOMICS AND COST ANALYSIS","112434":"SELECTED TOPICS OF RECENT TRENDS IN MECHATRONICS","112452":"ROBOTICS LAB","112453":"LAB BASED ON ELECTIVE - I AND II","112454":"EMBEDDED SYSTEMS LAB","112456":"LAB BASED ON ELECTIVE - III OR IV","112457":"SEMINAR (TOPIC SHOULD BE LINKED TO INDUSTRIAL TRAINING/ SOFT SKILLS LEARNT)","112458":"MAJOR PROJECT","112459":"INDUSTRIAL TRAINING","112461":"MINOR PROJECT"};

/***/ }),

/***/ "./src/app/student/profile/profile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/student/profile/profile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\n    padding: 2rem 2rem;\n}\n\n.table-responsive {\n    overflow: visible;\n}\n\n.tbody {\n    overflow: visible;\n}\n\n.tbody > tr {\n    -webkit-transition: all 0.2s linear;\n    transition: all 0.2s linear;\n    -o-transition: all .2s linear;\n    -moz-transition: all .2s linear;\n    -webkit-transition: all .2s linear;\n}\n\n.tbody tr:nth-of-type(even) {\n    background-color: white;\n}\n\n.tbody tr:nth-of-type(odd) {\n    background-color: rgb(240, 240, 240);\n}\n\n.tbody > tr:hover {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    -webkit-transition-duration: .2s;\n            transition-duration: .2s;\n    cursor: pointer;\n    box-shadow: 0px 0px 10px 0px #a9a9a9;\n    font-weight: bold;\n}\n\n.modal-data tr td {\n    padding-right: 10px;\n}\n\n.active {\n    background-color: #e9ecef;\n}\n\n.nav-item {\n    cursor: pointer;\n}\n\ntbody > tr > td {\n    width: auto;\n    white-space: nowrap;\n}\n\ntbody > tr > td:first-child {\n    white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLG1DQUEyQjtJQUEzQiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7O0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBQ0E7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHtcbiAgICBwYWRkaW5nOiAycmVtIDJyZW07XG59XG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi50Ym9keSB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4udGJvZHkgPiB0ciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcbn1cbi50Ym9keSB0cjpudGgtb2YtdHlwZShldmVuKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4udGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xufVxuLnRib2R5ID4gdHI6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4ICNhOWE5YTk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tb2RhbC1kYXRhIHRyIHRkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xufVxuXG4ubmF2LWl0ZW0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG50Ym9keSA+IHRyID4gdGQge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbnRib2R5ID4gdHIgPiB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/student/profile/profile.component.html":
/*!********************************************************!*\
  !*** ./src/app/student/profile/profile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 *ngIf=\"validStudent === -1\" align=\"center\">Sorry. No data for this enrollment number was found! 😧</h5>\n<div *ngIf=\"validStudent == 1\">\n    <h4 class=\"display-5\" align=\"right\">{{student.name}} ({{student.enroll_no}})</h4>\n    <p align=\"right\">{{findCollegeName(student.insti_code)}}</p>\n    \n    <ul class=\"nav nav-tabs\">\n        <!-- <li class=\"nav-item\" [ngClass]=\"{active: selectedSem===0}\" (click)=\"tabChange(0)\">\n            <a class=\"nav-link\">Overall</a>\n        </li> -->\n        <li class=\"nav-item\" [ngClass]=\"{active: selectedSem===sem}\" *ngFor=\"let sem of sems\" (click)=\"tabChange(sem)\">\n            <a class=\"nav-link\">{{ sem === 0? 'Overall': ('Sem ' + sem) }}</a>\n        </li>\n    </ul>\n    <div class=\"row\">\n        <div class=\"col-12 jumbotron\">\n            <table class=\"modal-data\">\n                <tr>\n                    <td>\n                        <p><b>Marks: </b>&nbsp; {{student['semesters'][selectedSem].total_marks}}/{{student['semesters'][selectedSem].max_marks}}</p>\n                    </td>\n                    <td>\n                        <p><b>Percentage: </b>&nbsp; {{student['semesters'][selectedSem].percentage.toFixed(3)}}%</p>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <p><b>Total Credit Marks: </b>&nbsp; {{student['semesters'][selectedSem].total_credit_marks}}/{{student['semesters'][selectedSem].max_credit_marks}}</p>\n                    </td>\n                    <td>\n                        <p><b>Credit Percentage: </b>&nbsp; {{student['semesters'][selectedSem].credit_percentage.toFixed(3)}}%</p>\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        <p><b>CGPA: </b>&nbsp; {{(student['semesters'][selectedSem].total_grade_points / (student['semesters'][selectedSem].max_credits)).toFixed(3)}}</p>\n                    </td>\n                </tr>\n            </table>\n            <!-- <p><b>Rank: </b>&nbsp; #{{student.rank}}</p> -->\n            <hr>\n            <div class=\"form-check\" *ngIf=\"selectedSem !== 0\">\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\" [(ngModel)]=\"showMinorMajor\">\n                <label class=\"form-check-label\" for=\"exampleCheck1\">&nbsp; Show Internal/External Marks</label>\n            </div>\n            <div class=\"form-check\" *ngIf=\"selectedSem === 0\">\n                <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck2\" [(ngModel)]=\"showCreditMarks\">\n                <label class=\"form-check-label\" for=\"exampleCheck2\">&nbsp; Show Credit Marks and Percentage</label>\n            </div>\n            <br>\n            <table class=\"table table-striped table-sm\" *ngIf=\"selectedSem !== 0\">\n                <thead class=\"thead-dark\">\n                    <th>Subject</th>\n                    <th *ngIf=\"showMinorMajor\" style=\"white-space: nowrap;\">Int. | Ext.</th>\n                    <th>Marks</th>\n                </thead>\n                <tbody class=\"tbody\">\n                    <tr *ngFor=\"let subject of student['semesters'][selectedSem]['subjects']\" >\n                        <td>{{subject.name}}</td>\n                        <td *ngIf=\"showMinorMajor\">{{subject.minor}} | {{subject.major}}</td>\n                        <td>{{subject.marks}} ({{subject.grade}})</td>\n                    </tr>\n                </tbody>\n            </table>\n            <table class=\"table table-striped table-sm\" *ngIf=\"selectedSem === 0\">\n                    <thead class=\"thead-dark\">\n                        <th>Sem</th>\n                        <th>Marks</th>\n                        <th>Percentage</th>\n                        <th>CGPA</th>\n                    </thead>\n                    <tbody class=\"tbody\">\n                        <tr *ngFor=\"let semester of student['semesters'] | slice: 1; let i=index\">\n                            <td>Semester {{i+1}}</td>\n                            <td *ngIf=\"!showCreditMarks\">{{semester.total_marks}}/{{semester.max_marks}}</td>\n                            <td *ngIf=\"!showCreditMarks\">{{semester.percentage.toFixed(3)}}</td>\n                            <td *ngIf=\"showCreditMarks\">{{semester.total_credit_marks}}/{{semester.max_credit_marks}}</td>\n                            <td *ngIf=\"showCreditMarks\">{{semester.credit_percentage.toFixed(3)}}</td>\n                            <td>{{((semester.total_grade_points / semester.max_credits) || 0).toFixed(3)}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\" style=\"padding: 50px 0px;\">\n    <ngx-spinner bdOpacity = 0 bdColor = \"#ffffff\" size = \"medium\" color = \"#000000\" type = \"ball-atom\" [fullScreen] = \"false\">\n        <p style=\"color: black; margin-top: 10rem;\" > Fetching Data... </p>\n    </ngx-spinner>\n</div>"

/***/ }),

/***/ "./src/app/student/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/student/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_shared_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/model.service */ "./src/app/shared/model.service.ts");
/* harmony import */ var _shared_institutes_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/institutes.json */ "./src/app/shared/institutes.json");
var _shared_institutes_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../shared/institutes.json */ "./src/app/shared/institutes.json", 1);
/* harmony import */ var _shared_subjects_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/subjects.json */ "./src/app/shared/subjects.json");
var _shared_subjects_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../shared/subjects.json */ "./src/app/shared/subjects.json", 1);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, modelService, spinner) {
        this.route = route;
        this.modelService = modelService;
        this.spinner = spinner;
        this.validStudent = -1;
        this.selectedSem = 0;
        this.showMinorMajor = true;
        this.showCreditMarks = false;
        this.sems = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.validStudent = 0;
            _this.spinner.show();
            _this.enroll = params['enroll'];
            _this.modelService.getStudent(_this.enroll)
                .subscribe(function (data) {
                _this.spinner.hide();
                if (data.length === 0) {
                    _this.validStudent = -1;
                    _this.student = {};
                }
                else {
                    _this.validStudent = 1;
                    _this.student = data[0];
                    // console.log(this.student);
                    // Defining the limit on semesters
                    _this.sems = [0];
                    _this.student['semesters'].unshift({
                        total_marks: 0,
                        max_marks: 0,
                        percentage: 0,
                        total_credit_marks: 0,
                        max_credit_marks: 0,
                        credit_percentage: 0,
                        total_grade_points: 0,
                        max_credits: 0,
                        subjects: []
                    });
                    for (var i = 1; i <= 8; i++) {
                        if (_this.student['semesters'][i].total_marks !== 0) {
                            _this.sems.push(i);
                            _this.student['semesters'][i]['subjects'] = _this.student['semesters'][i]['subjects'].map(function (subj) {
                                subj.name = _shared_subjects_json__WEBPACK_IMPORTED_MODULE_5__[subj.paper_id] || "paper_id(" + subj.paper_id + ")";
                                return subj;
                            });
                            _this.student['semesters'][0].total_marks += _this.student['semesters'][i].total_marks;
                            _this.student['semesters'][0].max_marks += _this.student['semesters'][i].max_marks;
                            _this.student['semesters'][0].total_credit_marks += _this.student['semesters'][i].total_credit_marks;
                            _this.student['semesters'][0].max_credit_marks += _this.student['semesters'][i].max_credit_marks;
                            _this.student['semesters'][0].total_grade_points += _this.student['semesters'][i].total_grade_points;
                            _this.student['semesters'][0].max_credits += _this.student['semesters'][i].max_credits;
                        }
                    }
                    _this.student['semesters'][0].percentage = _this.student['semesters'][0].total_marks * 100 / _this.student['semesters'][0].max_marks;
                    _this.student['semesters'][0].credit_percentage = _this.student['semesters'][0].total_credit_marks * 100 / _this.student['semesters'][0].max_credit_marks;
                    if (_this.sems.length === 0)
                        _this.validStudent = -1;
                    // console.log(this.student);
                }
            });
        });
    };
    ProfileComponent.prototype.findCollegeName = function (code) {
        var institute = _shared_institutes_json__WEBPACK_IMPORTED_MODULE_4__["filter"](function (insti) { return (insti.code === code || insti.codeEve === code); });
        return institute[0]['name'];
    };
    ProfileComponent.prototype.tabChange = function (sem) {
        this.selectedSem = sem;
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/student/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/student/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], app_shared_model_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid {\n    border-color: rgba(255, 123, 0, .25);\n    box-shadow: 0 0 0 0.2rem rgba(255, 123, 0, .25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsK0NBQStDO0FBQ25EIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZCB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMTIzLCAwLCAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI1NSwgMTIzLCAwLCAuMjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"height: 80vh\">\n    <div class=\"col-lg-4 offset-lg-4 d-flex flex-column m-auto\">\n        <div class=\"d-flex flex-column m-auto text-center\">\n            <lottie-animation-view [options]=\"lottieConfig\" [width]=\"200\" [height]=\"200\" style=\"margin: 10% 0%\">\n            </lottie-animation-view>\n            <h4>Please Enter Your University Roll Number</h4>\n            <form>\n                <div class=\"form-group\">\n                    <input id=\"enroll\" type=\"text\" class=\"form-control\" placeholder=\"01415002716\" #roll>\n                </div>\n                <button type=\"submit\" (click)=\"clicked(roll.value)\"\n                    class=\"mb-2 btn btn-sm btn-dark bg-dark mr-1 px-5\">SUBMIT</button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var StudentComponent = /** @class */ (function () {
    function StudentComponent(router, route) {
        this.router = router;
        this.route = route;
        this.animJsons = [
            'batman',
            'flying-cat',
        ];
        this.animIndex = Math.floor((Math.random() * (this.animJsons.length)));
        this.lottieConfig = {
            path: "assets/anims/" + this.animJsons[this.animIndex] + ".json",
            renderer: 'svg',
            autoplay: true,
            loop: true
        };
    }
    StudentComponent.prototype.ngOnInit = function () {
    };
    StudentComponent.prototype.clicked = function (roll) {
        if (roll.length === 11) {
            this.router.navigate([roll], { relativeTo: this.route });
        }
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StudentComponent);
    return StudentComponent;
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

module.exports = __webpack_require__(/*! /media/ankush/Hard Drive (Unportable)/AAAAAAA/IPU Ranklist (WORKING)/ipu-ranklist/ipu-ranklist-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map