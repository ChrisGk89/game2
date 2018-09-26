webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro_intro__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                title: "Welcome to DesCra(i)b!",
                description: "<b>DesCra(i)b</b> showcases a number of photos you need to classify and describe. That's the reason of the name DesCra(i)b. Smart? You decide.",
                image: "assets/imgs/giant-crab.png",
            },
            {
                title: "What is DesCra(i)b?",
                description: "<b>Photo Description</b> The eye-catching detail crab want to know what you see in your smartphone screen. You can additionally upload your own photos and describe them. As a matter of fact you could gain points and earn beatiful rewards.",
                image: "assets/imgs/phone.png",
            },
            {
                title: "DesCra(i)b cloud will reward you",
                description: "<b>DesCra(i)b Cloud.</b> After submiting your answers our system will review your photos and reward your points. So the more you play the more you win.",
                image: "assets/imgs/ica-slidebox-img-3.png",
            }
        ];
    }
    WelcomePage.prototype.iNtroPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__intro_intro__["a" /* IntroPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chris_skart/game2/src/pages/welcome/welcome.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Welcome</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar>\n        <!-- <ion-buttons end>\n          <button ion-button color="primary">Skip</button>\n        </ion-buttons> -->\n      </ion-toolbar>\n      <img [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n    </ion-slide>\n    <ion-slide>\n      <ion-toolbar>\n      </ion-toolbar>\n      <img src="assets/imgs/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button large outline round icon-end color="primary" (click)="iNtroPage()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/chris_skart/game2/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IntroPage = /** @class */ (function () {
    function IntroPage(platform, navCtrl, iab) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.options = {
            location: 'yes',
            hidden: 'no',
            clearcache: 'yes',
            clearsessioncache: 'yes',
            zoom: 'yes',
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'no',
            shouldPauseOnSuspend: 'no',
            closebuttoncaption: 'Close',
            disallowoverscroll: 'no',
            toolbar: 'yes',
            enableViewportScale: 'no',
            allowInlineMediaPlayback: 'no',
            presentationstyle: 'pagesheet',
            fullscreen: 'yes',
        };
    }
    IntroPage.prototype.cAtegoriesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__categories_categories__["a" /* CategoriesPage */]);
    };
    IntroPage.prototype.openWithSystemBrowser = function (url) {
        var target = "_system";
        this.iab.create(url, target, this.options);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chris_skart/game2/src/pages/intro/intro.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>DesCra(i)b</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-card-content>\n\n    <ion-col col-1 no-padding class="padding-top-20">\n    </ion-col>\n\n    <ion-col col-3 text-center>\n          <div class="center" style="padding-top: 80px">\n          <button class="play" ion-button round large color="default" (click)="cAtegoriesPage()">Play</button>\n          </div>\n\n      <div class="center" style="padding-top: 50px">\n  <button class="leaderboard" ion-button round large color="light">LeaderBoard</button>\n      </div>\n\n      <div class="center" style="padding-top: 50px">\n  <button class="info" ion-button round large color="secondary" (click)="openWithSystemBrowser(\'https://www.chrisgkalfas.com\')">Developer Info</button>\n      </div>\n    </ion-col>\n\n\n  </ion-card-content>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/chris_skart/game2/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _c || Object])
    ], IntroPage);
    return IntroPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_images__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CategoriesPage.prototype.iMagesPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__images_images__["a" /* ImagesPage */]);
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chris_skart/game2/src/pages/categories/categories.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Choose Level</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n\n  <ion-card class="cards">\n    <ion-card-content class="card-content">\n      <ion-card-title style="text-align: center">\n        Level One\n      </ion-card-title>\n      <p style="text-align: center">\n        Describe the only instance in the image to gain points.\n      </p>\n    </ion-card-content>\n    <img class="img" src="assets/imgs/crab.png"/>\n      <ion-col col-3 text-center>\n        <div class="center">\n        <button class="play" ion-button round large color="default" (click)="iMagesPage()">Go to Level 1</button>\n        </div>\n      </ion-col>\n  </ion-card>\n\n\n  <ion-card class="cards">\n    <ion-card-content class="card-content">\n      <ion-card-title style="text-align: center">\n        Level Two\n      </ion-card-title>\n      <p style="text-align: center">\n        Describe the multiple instances in the image to gain 2x points.\n      </p>\n    </ion-card-content>\n    <div>\n      <img class="img" src="assets/imgs/crabs.png"/>\n    </div>\n    <ion-col col-3 text-center>\n      <div class="center">\n        <button class="play" ion-button round large color="secondary" (click)="iMagesPage()">Go to Level 2</button>\n      </div>\n    </ion-col>\n  </ion-card>\n\n\n  <ion-card class="cards">\n    <ion-card-content class="card-content">\n      <ion-card-title style="text-align: center">\n        Level Three\n      </ion-card-title>\n      <p style="text-align: center">\n        Annotate the image to gain 3x points.\n      </p>\n    </ion-card-content>\n    <div>\n      <img class="img" src="assets/imgs/annotate.png"/>\n    </div>\n    <ion-col col-3 text-center>\n      <div class="center">\n        <button class="play" ion-button round large color="danger" (click)="iMagesPage()">Go to Level 3</button>\n      </div>\n    </ion-col>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chris_skart/game2/src/pages/categories/categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImagesPage = /** @class */ (function () {
    function ImagesPage(modalCtrl, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
    }
    ImagesPage.prototype.onSubmit = function (form) {
        var submit = {
            title: form.value.title,
            body: form.value.body,
        };
    };
    ImagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chris_skart/game2/src/pages/images/images.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Image Gallery\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="background-color">\n\n  <ion-grid>\n    <ion-row>\n\n      <ion-col col-12 col-sm text-center>\n        <ion-card class="image">\n          <img src="assets/imgs/1.jpg"/>\n          <form #f="ngForm" (ngSubmit)="onSubmit(f)">\n          <ion-item >\n            <ion-label color="primary">What do you see?</ion-label>\n            <ion-input type="text" placeholder="Word Input" name="description" ngModel required></ion-input>\n          </ion-item>\n          </form>\n          <div class="center" style="padding-bottom: 10px">\n            <button ion-button round medium color="secondary" type="submit" [disabled]="!f.valid">Submit</button>\n          </div>\n        </ion-card>\n      </ion-col>\n\n      <ion-col col-12 col-sm text-center>\n        <ion-card class="image">\n          <img src="assets/imgs/2.jpg"/>\n          <ion-item >\n            <ion-label color="primary">What do you see?</ion-label>\n            <ion-input placeholder="Word Input"></ion-input>\n          </ion-item>\n          <div class="center" style="padding-bottom: 10px">\n            <button ion-button round medium color="secondary" type="submit" [disabled]="!f.valid">Submit</button>\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-sm text-center>\n        <ion-card class="image">\n          <img src="assets/imgs/3.jpg"/>\n          <ion-item >\n            <ion-label color="primary">What do you see?</ion-label>\n            <ion-input placeholder="Word Input"></ion-input>\n          </ion-item>\n          <div class="center" style="padding-bottom: 10px">\n            <button ion-button round medium color="secondary" type="submit" [disabled]="!f.valid">Submit</button>\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-sm text-center>\n        <ion-card class="image">\n          <img src="assets/imgs/4.jpg"/>\n          <ion-item >\n            <ion-label color="primary">What do you see?</ion-label>\n            <ion-input placeholder="Word Input"></ion-input>\n          </ion-item>\n          <div class="center" style="padding-bottom: 10px">\n            <button ion-button round medium color="secondary" type="submit" [disabled]="!f.valid">Submit</button>\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-sm text-center>\n        <ion-card class="image">\n          <img src="assets/imgs/5.jpg"/>\n          <ion-item >\n            <ion-label color="primary">What do you see?</ion-label>\n            <ion-input placeholder="Word Input"></ion-input>\n          </ion-item>\n          <div class="center" style="padding-bottom: 10px">\n            <button ion-button round medium color="secondary" type="submit" [disabled]="!f.valid">Submit</button>\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-sm text-center>\n        <ion-card>\n          <img src="assets/imgs/6.jpg"/>\n          <ion-item >\n            <ion-label color="primary">What do you see?</ion-label>\n            <ion-input placeholder="Word Input"></ion-input>\n          </ion-item>\n          <div class="center" style="padding-bottom: 10px">\n            <button ion-button round medium color="secondary" type="submit" [disabled]="!f.valid">Submit</button>\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-sm text-center>\n        <ion-card class="image">\n          <img src="assets/imgs/7.jpg"/>\n          <ion-item >\n            <ion-label color="primary">What do you see?</ion-label>\n            <ion-input placeholder="Word Input"></ion-input>\n          </ion-item>\n          <div class="center" style="padding-bottom: 10px">\n            <button ion-button round medium color="secondary" type="submit" [disabled]="!f.valid">Submit</button>\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-sm text-center>\n        <ion-card class="image">\n          <img src="assets/imgs/8.jpg"/>\n          <ion-item >\n            <ion-label color="primary">What do you see?</ion-label>\n            <ion-input placeholder="Word Input"></ion-input>\n          </ion-item>\n          <div class="center" style="padding-bottom: 10px">\n            <button ion-button round medium color="secondary" type="submit" [disabled]="!f.valid">Submit</button>\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-sm text-center>\n        <ion-card class="image">\n          <img src="assets/imgs/9.jpg"/>\n          <ion-item >\n            <ion-label color="primary">What do you see?</ion-label>\n            <ion-input placeholder="Word Input"></ion-input>\n          </ion-item>\n          <div class="center" style="padding-bottom: 10px">\n            <button ion-button round medium color="secondary" type="submit" [disabled]="!f.valid">Submit</button>\n          </div>\n        </ion-card>\n      </ion-col><ion-col col-12 col-sm text-center>\n      <ion-card class="image">\n        <img src="assets/imgs/10.jpg"/>\n        <ion-item >\n          <ion-label color="primary">What do you see?</ion-label>\n          <ion-input placeholder="Word Input"></ion-input>\n        </ion-item>\n        <div class="center" style="padding-bottom: 10px">\n          <button ion-button round medium color="secondary" type="submit" [disabled]="!f.valid">Submit</button>\n        </div>\n      </ion-card>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chris_skart/game2/src/pages/images/images.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ImagesPage);
    return ImagesPage;
}());

//# sourceMappingURL=images.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_images_images__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_categories_categories__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_images_images__["a" /* ImagesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_categories_categories__["a" /* CategoriesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_images_images__["a" /* ImagesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_categories_categories__["a" /* CategoriesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chris_skart/game2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/chris_skart/game2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/chris_skart/game2/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Describe the image</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <img src="assets/img/\' + image + \'.jpg"/>\n\n    <ion-card-content>\n      <ion-card-title>\n        Björk\n      </ion-card-title>\n      <p>\n        Björk first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the Sugarcubes, but when...\n      </p>\n    </ion-card-content>\n\n    <ion-item>\n      <ion-icon name=\'musical-notes\' item-start style="color: #d03e84"></ion-icon>\n      Albums\n      <ion-badge item-end>9</ion-badge>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'logo-twitter\' item-start style="color: #55acee"></ion-icon>\n      Followers\n      <ion-badge item-end>260k</ion-badge>\n    </ion-item>\n\n  </ion-card>\n\n  <button class="submit" ion-button round outline large color="secondary">Submit</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/chris_skart/game2/src/pages/home/home.html"*/
        })
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map