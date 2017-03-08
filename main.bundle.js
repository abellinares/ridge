webpackJsonp([1,4],{

/***/ 329:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 329;


/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(454);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(513),
            styles: [__webpack_require__(508)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_landing_landing_component__ = __webpack_require__(452);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_8__components_landing_landing_component__["a" /* LandingComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_landing_landing_component__["a" /* LandingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(514),
            styles: [__webpack_require__(509)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__(515),
            styles: [__webpack_require__(510)]
        }), 
        __metadata('design:paramtypes', [])
    ], LandingComponent);
    return LandingComponent;
}());
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(516),
            styles: [__webpack_require__(511)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, ".cinzel{\r\n    font-family: 'Cinzel';\r\n}\r\n.cinzel-decorative{\r\n    font-family: 'Cinzel Decorative';\r\n}\r\n\r\n#section1 > div.uk-section{\r\n    box-shadow:inset 0 0 0 2000px rgba(3, 12, 32, 0.4);\r\n}\r\n\r\n#skills-hr{\r\n    width: 10%; \r\n    margin-left: auto; \r\n    margin-right: auto;\r\n}\r\n\r\n#section3 > div.uk-section{\r\n    background-color: #030C20;\r\n    border-top: 2px #E2E9F1 solid;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, ".calligraffitti{\r\n    font-family: 'Calligraffitti';\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, ".cinzel{\r\n    font-family: 'Cinzel';\r\n}\r\n\r\n.cinzel-decorative{\r\n    font-family: 'Cinzel Decorative';\r\n}\r\n\r\nnav.uk-navbar-container {\r\n    background-color: #030C20;\r\n    border-bottom: 2px #E2E9F1 solid;\r\n}\r\n\r\ndiv.uk-logo{\r\n    color: white;\r\n}\r\n\r\nnav li a{\r\n    color: white;\r\n    font-family: 'Cinzel';\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 513:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 514:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div id=\"section1\">\n  <div class=\"uk-section uk-section-media uk-section-xlarge uk-light uk-background-cover uk-background-bottom-center\" style=\"background-image: url(http://puu.sh/uxBa1.jpg);\">\n      <div class=\"box-shadow\">\n        <div class=\"uk-container uk-text-center\">\n\n            <h3 class=\"cinzel-decorative\">Front-End Development</h3>\n\n            <div class=\"uk-grid-match uk-child-width-1-1@m cinzel uk-margin-remove\" uk-grid>\n                <div>\n                    <p>Taking control</p>\n                </div>\n            </div>\n        </div>\n  </div>\n</div>\n\n<div id=\"section2\">\n  <div class=\"uk-section uk-section-default uk-section-small uk-light\">\n      <div class=\"uk-container uk-text-center\">\n\n          <div class=\"uk-grid-match uk-child-width-expand@s uk-text-center\" uk-grid>\n            <div>\n                <div class=\"uk-card uk-card-default uk-card-body uk-background-cover uk-light\" style=\"background-image: url(http://puu.sh/uyLD9.png); box-shadow:inset 0 0 0 2000px rgba(0,0,0,0.9);\">\n                    <h3 class=\"cinzel-decorative\">Landing Page</h3>\n                    <p class=\"cinzel\">Built with UIkit 3, Angular 2, &amp; Jquery</p>\n                    <a [routerLink]=\"['/landing']\" class=\"uk-button uk-button-default\">View</a>\n                </div>\n            </div>\n            <div>\n                <div class=\"uk-card uk-card-default uk-card-body\">Item</div>\n            </div>\n            <div>\n                <div class=\"uk-card uk-card-default uk-card-body\">Item</div>\n            </div>\n        </div>\n\n      </div>\n  </div>\n</div>\n\n<div id=\"section3\">\n  <div class=\"uk-section uk-section-default uk-section-small uk-light\">\n      <div class=\"uk-container uk-text-center\">\n\n          <h3 class=\"cinzel-decorative\">Tools/Languages/Frameworks</h3>\n          <hr id=\"skills-hr\">\n\n          <div class=\"uk-grid-match uk-child-width-1-3@m cinzel uk-margin-remove\" uk-grid>\n              <div>\n                  <ul class=\"uk-list\">\n                    <li>Angular 2</li>\n                    <li>Jquery</li>\n                    <li>Sass</li>\n                  </ul>\n              </div>\n              <div>\n                  <ul class=\"uk-list\">\n                    <li>HTML5</li>\n                    <li>CSS3</li>\n                    <li>Javascript</li>\n                    <li>MYSQL</li>\n                    <li>PHP</li>\n                    <li>C#</li>\n                  </ul>\n              </div>\n              <div>\n                  <ul class=\"uk-list\">\n                    <li>UIkit 3</li>\n                    <li>Bootstrap</li>\n                  </ul>\n              </div>\n          </div>\n\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "<div class=\"uk-section uk-section-media uk-height-viewport uk-light uk-background-cover uk-background-center-center\" style=\"background-image: url(http://puu.sh/uyubB.jpg);\">\n    <div class=\"uk-overlay uk-position-cover uk-text-center\" style=\"display: flex; flex-direction: column; justify-content: center;\">\n      \n\n      <h1 class=\"uk-heading-primary uk-flex uk-flex-center uk-flex-middle uk-margin-remove calligraffitti\">\n          <!-- Website Header -->\n          Fotos\n      </h1>\n\n      <h3 id=\"subheader\" class=\"uk-h3 uk-flex uk-flex-center uk-flex-middle calligraffitti\">\n          <!-- Website Subheader -->\n          Be ready, we are launching soon!\n      </h3>\n\n      <div class=\"uk-flex uk-flex-center uk-flex-middle uk-margin-small-top\">\n\n        <!-- Website Form -->\n        <form ngNoForm action=\"https://twitter.us15.list-manage.com/subscribe/post?u=4101683c42ffe72dcc0605f9f&amp;id=ecb61920ad\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_top\">\n            <input type=\"email\" value=\"\" name=\"EMAIL\" id=\"mc-EMAIL\" class=\"uk-input uk-width-medium\" placeholder=\"Enter your email...\">\n            \n            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n            <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\">\n              <input type=\"text\" name=\"b_4101683c42ffe72dcc0605f9f_ecb61920ad\" tabindex=\"-1\" value=\"\">\n            </div>\n\n            <input id=\"mc-embedded-subscribe\" type=\"submit\" value=\"Subscribe\" name=\"subscribe\" class=\"uk-button uk-button-secondary uk-text-capitalize\">\n        </form>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = "<nav class=\"uk-navbar-container\" uk-navbar>\n  <div class=\"uk-navbar-left\">\n    <div class=\"uk-navbar-item uk-logo cinzel-decorative uk-margin-medium-left\">A.Linares</div>\n  </div>\n    <div class=\"uk-navbar-right\">\n\n        <ul class=\"uk-navbar-nav\">\n            <li class=\"uk-active\"><a href=\"#\">Home</a></li>\n            <li><a href=\"#\">About Me</a></li>\n            <li><a href=\"#\">Resume</a></li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(330);


/***/ })

},[534]);
//# sourceMappingURL=main.bundle.js.map