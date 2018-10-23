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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _team_team_component__WEBPACK_IMPORTED_MODULE_2__["TeamComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n\n    <div class=\"logo\" >\n        <h2>\n            Welcome to {{ title }}!\n        </h2>\n        <img width=\"200\" alt=\"Angular Logo\"\n             src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n    </div>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 0 15px;\n  margin: 0 auto;\n  max-width: 1200px; }\n\n.logo {\n  text-align: center; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sync-forms';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _constructor_constructor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constructor/constructor.component */ "./src/app/constructor/constructor.component.ts");
/* harmony import */ var _services_dropzones_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/dropzones.service */ "./src/app/services/dropzones.service.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./options/options.component */ "./src/app/options/options.component.ts");
/* harmony import */ var _services_broadcastElem_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/broadcastElem.service */ "./src/app/services/broadcastElem.service.ts");
/* harmony import */ var _services_broadcastChanges_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/broadcastChanges.service */ "./src/app/services/broadcastChanges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _team_team_component__WEBPACK_IMPORTED_MODULE_9__["TeamComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_11__["ConstructorComponent"],
                _constructor_constructor_component__WEBPACK_IMPORTED_MODULE_12__["FormComponent"],
                _options_options_component__WEBPACK_IMPORTED_MODULE_14__["OptionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                _material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_services_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"], _services_dropzones_service__WEBPACK_IMPORTED_MODULE_13__["DropzonesService"], _services_broadcastElem_service__WEBPACK_IMPORTED_MODULE_15__["BroadcastElemService"], _services_broadcastChanges_service__WEBPACK_IMPORTED_MODULE_16__["BroadcastChangesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constructor/constructor.component.html":
/*!********************************************************!*\
  !*** ./src/app/constructor/constructor.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form class=\"example-form palette\" cdkDropList\n     id=\"paletteRef\"\n     [cdkDropListData]=\"paletteItems\"\n     [cdkDropListConnectedTo]=\"['canvasRef']\"\n     (cdkDropListDropped)=\"drop($event)\">\n\n\n    <div class=\"drag-item-container\" *ngFor=\"let elem of paletteItems; let i = index\"\n         cdkDrag\n         [cdkDragData]=\"elem\"\n         [cdkDropListData]=\"[elem]\"\n         cdkDropList\n         [cdkDropListConnectedTo]=\"['canvasRef']\">\n\n        <!--if element is input TEXT-->\n        <mat-form-field *ngIf=\"elem.type==='text'\" class=\"example-full-width\">\n            <input matInput type=\"text\" placeholder=\"Text\" [disabled]=true required>\n        </mat-form-field>\n\n        <!--if element is SLIDER-->\n        <section *ngIf=\"elem.type==='slider'\" class=\"example-section\">\n            <mat-slider\n                    class=\"example-margin\"\n                    [disabled]=true\n                    [invert]=\"invert\"\n                    [max]=\"max\"\n                    [min]=\"min\"\n                    [step]=\"step\"\n                    [thumbLabel]=\"thumbLabel\"\n                    [tickInterval]=\"tickInterval\"\n                    [vertical]=\"vertical\">\n            </mat-slider>\n        </section>\n\n        <!--if element is TOGGLE-->\n        <section *ngIf=\"elem.type==='toggle'\" class=\"example-section\">\n            <mat-slide-toggle\n                    class=\"example-margin\"\n                    [color]=\"color\"\n                    [checked]=\"checked\"\n                    [disabled]=true>\n                Slide me!\n            </mat-slide-toggle>\n        </section>\n\n        <!--if element is SELECT-->\n        <mat-form-field *ngIf=\"elem.type==='select'\">\n            <mat-select placeholder=\"Choose...\">\n                <mat-option *ngFor=\"let option of elem.options\" [value]=\"option\">\n                    {{option}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <!--if element is input CHECKBOX-->\n        <section class=\"example-section\" *ngIf=\"elem.type==='checkbox'\">\n            <mat-checkbox *ngFor=\"let option of elem.options\" class=\"example-margin\" [disabled]=true>{{option}}</mat-checkbox>\n        </section>\n\n        <!--if element is input RADIO-->\n        <mat-radio-group *ngIf=\"elem.type==='radio'\">\n            <mat-radio-button value=\"{{i}}\" *ngFor=\"let option of elem.options; let i = index\" [disabled]=true>{{option}}</mat-radio-button>\n        </mat-radio-group>\n\n        <!--if element is TEXTAREA-->\n        <mat-form-field *ngIf=\"elem.type==='textarea'\" class=\"example-full-width\">\n            <textarea matInput placeholder=\"Leave a comment\" [disabled]=true></textarea>\n        </mat-form-field>\n\n        <!--if element is BUTTON-->\n        <div *ngIf=\"elem.type==='button'\" class=\"example-button-row\">\n            <button mat-raised-button *ngFor=\"let option of elem.options\" color=\"{{option}}\">{{option}}</button>\n        </div>\n    </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/constructor/constructor.component.scss":
/*!********************************************************!*\
  !*** ./src/app/constructor/constructor.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  background: #add8e6;\n  margin: 6px;\n  min-width: 90px; }\n\n.palette {\n  width: 20%;\n  float: left;\n  padding: 5px;\n  border-radius: 5px;\n  float: left;\n  margin: 20px 2px;\n  box-shadow: 1px 1px 10px .1px black;\n  min-height: 400px;\n  background: lightblue; }\n\n.drag-item {\n  display: inline-flex;\n  padding: 20px;\n  background: lightcoral;\n  border-radius: 50%; }\n\n.drag-item-container {\n  padding: 2px; }\n\n.drag-item-container:hover {\n    cursor: move; }\n\n.drag-item-container input, .drag-item-container mat-checkbox, .drag-item-container mat-radio-button, .drag-item-container button {\n    margin: 2px 5px; }\n"

/***/ }),

/***/ "./src/app/constructor/constructor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/constructor/constructor.component.ts ***!
  \******************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dropzones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dropzones.service */ "./src/app/services/dropzones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(dropZones) {
        this.dropZones = dropZones;
        this.paletteItems = [
            { type: 'text', label: 'text', config: {}, options: [] },
            {
                type: 'slider',
                label: 'slider',
                config: {
                    disabled: false,
                    invert: false,
                    min: 0,
                    max: 1000,
                    showTicks: false,
                    step: 1,
                    thumbLabel: true,
                    value: 0,
                    vertical: true
                },
                options: []
            },
            { type: 'toggle', label: 'toggle', config: {}, options: [] },
            { type: 'textarea', label: 'textarea', config: {}, options: [] },
            { type: 'select', label: 'select', config: {}, options: ['Option 1', 'Option 2', 'Option 3'] },
            { type: 'checkbox', label: 'checkbox', config: {}, options: ['Option 1', 'Option 2'] },
            { type: 'radio', label: 'radio', config: {}, options: ['Option 1', 'Option 2'] },
            { type: 'button', label: 'button', config: {}, options: ['primary', 'warn'] }
        ];
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.drop = function (event) {
        this.dropZones.moveInList(event);
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-constructor',
            template: __webpack_require__(/*! ./constructor.component.html */ "./src/app/constructor/constructor.component.html"),
            styles: [__webpack_require__(/*! ./constructor.component.scss */ "./src/app/constructor/constructor.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_dropzones_service__WEBPACK_IMPORTED_MODULE_1__["DropzonesService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div cdkDropList\n    id=\"canvasRef\"\n    class=\"canvas\"\n    #todoList=\"cdkDropList\"\n    [cdkDropListData]=\"canvasItems\"\n    (cdkDropListDropped)=\"drop($event)\">\n\n    <div *ngFor=\"let elem of canvasItems; let i = index\" class=\"drag-item-container\" cdkDrag>\n\n        <!--if element is input TEXT-->\n        <mat-form-field *ngIf=\"elem.type==='text'\" class=\"example-full-width\">\n            <input matInput type=\"text\" placeholder=\"Text\" required>\n        </mat-form-field>\n\n        <!--if element is SLIDER-->\n        <section *ngIf=\"elem.type==='slider'\" class=\"example-section\">\n            <mat-slider (change)=\"focus(elem)\"\n                    class=\"example-margin\"\n                    [disabled]=\"elem.config.disabled\"\n                    [invert]=\"elem.config.invert\"\n                    [max]=\"elem.config.max\"\n                    [min]=\"elem.config.min\"\n                    [step]=\"elem.config.step\"\n                    [thumbLabel]=\"elem.config.thumbLabel\"\n                    [tickInterval]=\"elem.config.tickInterval\"\n                    [(ngModel)]=\"elem.config.value\"\n                    [vertical]=\"elem.config.vertical\">\n            </mat-slider>\n        </section>\n\n        <!--if element is TOGGLE-->\n        <section *ngIf=\"elem.type==='toggle'\" class=\"example-section\">\n            <mat-slide-toggle\n                    class=\"example-margin\"\n                    [color]=\"color\"\n                    [checked]=\"checked\"\n                    [disabled]=\"disabled\">\n                Slide me!\n            </mat-slide-toggle>\n        </section>\n\n        <!--if element is SELECT-->\n        <mat-form-field *ngIf=\"elem.type==='select'\">\n            <mat-select placeholder=\"Choose...\">\n                <mat-option *ngFor=\"let option of elem.options\" [value]=\"option\">\n                    {{option}}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n\n        <!--if element is input CHECKBOX-->\n        <section class=\"example-section\" *ngIf=\"elem.type==='checkbox'\">\n            <mat-checkbox *ngFor=\"let option of elem.options\" class=\"example-margin\">{{option}}</mat-checkbox>\n        </section>\n\n        <!--if element is input RADIO-->\n        <mat-radio-group *ngIf=\"elem.type==='radio'\">\n            <mat-radio-button value=\"{{i}}\" *ngFor=\"let option of elem.options; let i = index\">{{option}}</mat-radio-button>\n        </mat-radio-group>\n\n        <!--if element is TEXTAREA-->\n        <mat-form-field *ngIf=\"elem.type==='textarea'\" class=\"example-full-width\">\n            <textarea matInput placeholder=\"Leave a comment\"></textarea>\n        </mat-form-field>\n\n        <!--if element is BUTTON-->\n        <div *ngIf=\"elem.type==='button'\" class=\"example-button-row\">\n            <button mat-raised-button *ngFor=\"let option of elem.options\" color=\"{{option}}\">{{option}}</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/form/form.component.scss":
/*!******************************************!*\
  !*** ./src/app/form/form.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".canvas {\n  width: 39%;\n  padding: 5px;\n  border-radius: 5px;\n  float: left;\n  margin: 20px 2px;\n  box-shadow: 1px 1px 10px .1px black;\n  min-height: 432px;\n  background: mediumaquamarine;\n  float: left;\n  position: relative; }\n\nmat-card {\n  display: inline-block;\n  background: lightcoral;\n  margin: 5px; }\n\n.drag-item-container {\n  padding: 5px; }\n\n.drag-item-container input {\n    float: left; }\n\n.drag-item-container input:hover {\n      cursor: move; }\n\n.drag-item-container mat-checkbox, .drag-item-container mat-radio-button, .drag-item-container button {\n    margin: 5px; }\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: ConstructorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstructorComponent", function() { return ConstructorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dropzones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dropzones.service */ "./src/app/services/dropzones.service.ts");
/* harmony import */ var _services_broadcastElem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/broadcastElem.service */ "./src/app/services/broadcastElem.service.ts");
/* harmony import */ var _services_broadcastChanges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/broadcastChanges.service */ "./src/app/services/broadcastChanges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConstructorComponent = /** @class */ (function () {
    function ConstructorComponent(dropZones, broadcastElem, broadcastChanges) {
        var _this = this;
        this.dropZones = dropZones;
        this.broadcastElem = broadcastElem;
        this.broadcastChanges = broadcastChanges;
        this.canvasItems = [];
        this.broadcastChanges.subscriber()
            .subscribe(function (res) {
            var getElems = _this.canvasItems.filter(function (elem) { return elem.type === 'slider'; });
            var getElem = getElems[0];
            getElem.config.disabled = res.disabled;
            getElem.config.invert = res.invert;
            getElem.config.min = res.min;
            getElem.config.max = res.max;
            getElem.config.showTicks = res.showTicks;
            getElem.config.step = res.getElem;
            getElem.config.thumbLabel = res.thumbLabel;
            getElem.config.value = res.value;
            getElem.config.vertical = res.vertical;
        });
    }
    // TODO: stronger checking could be done here. Confirm against actual container instances
    ConstructorComponent.prototype.drop = function (event) {
        console.log(event);
        // if drop event is from an item that was already on canvas
        if (event.container === event.previousContainer) {
            // sort it based on where it was dropped
            this.dropZones.moveInList(event);
        }
        else {
            // else the event was from a dropped palette item so add it to the list
            this.dropZones.addToList(event);
        }
    };
    ConstructorComponent.prototype.ngOnInit = function () {
        // this.dropZones.canvasRef = this.canvasDropZone;
    };
    ConstructorComponent.prototype.focus = function (elem) {
        this.broadcastElem.setElem(elem);
    };
    ConstructorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_dropzones_service__WEBPACK_IMPORTED_MODULE_1__["DropzonesService"], _services_broadcastElem_service__WEBPACK_IMPORTED_MODULE_2__["BroadcastElemService"], _services_broadcastChanges_service__WEBPACK_IMPORTED_MODULE_3__["BroadcastChangesService"]])
    ], ConstructorComponent);
    return ConstructorComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/options/options.component.html":
/*!************************************************!*\
  !*** ./src/app/options/options.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"canvas\">\n    <h2 class=\"example-h2\">{{type}}</h2>\n\n    <section class=\"example-section\">\n        <mat-form-field class=\"example-margin\">\n            <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\" [disabled]=\"formActivation\" (change)=\"change()\">\n        </mat-form-field>\n        <mat-form-field class=\"example-margin\">\n            <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\" [disabled]=\"formActivation\" (change)=\"change()\">\n        </mat-form-field>\n        <mat-form-field class=\"example-margin\">\n            <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\" [disabled]=\"formActivation\" (change)=\"change()\">\n        </mat-form-field>\n        <mat-form-field class=\"example-margin\">\n            <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\" [disabled]=\"formActivation\" (change)=\"change()\">\n        </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\" [disabled]=\"formActivation\" (change)=\"change()\">Show ticks</mat-checkbox>\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\" [disabled]=\"formActivation\" (change)=\"change()\">\n            Auto ticks\n        </mat-checkbox>\n        <mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\n            <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\" [disabled]=\"formActivation\" (change)=\"change()\">\n        </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\" [disabled]=\"formActivation\" (change)=\"change()\">Show thumb label</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\" [disabled]=\"formActivation\" (change)=\"change()\">Vertical</mat-checkbox>\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\" [disabled]=\"formActivation\" (change)=\"change()\">Inverted</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\" [disabled]=\"formActivation\" (change)=\"change()\">Disabled</mat-checkbox>\n    </section>\n</div>"

/***/ }),

/***/ "./src/app/options/options.component.scss":
/*!************************************************!*\
  !*** ./src/app/options/options.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".canvas {\n  width: 15%;\n  padding: 5px;\n  border-radius: 5px;\n  float: left;\n  margin: 20px 2px;\n  box-shadow: 1px 1px 10px .1px black;\n  min-height: 432px;\n  background: #cd95b4;\n  float: left;\n  position: relative; }\n  .canvas h2 {\n    text-align: center; }\n  .canvas h2:first-letter {\n      text-transform: uppercase; }\n  .drag-item-container {\n  padding: 5px; }\n  .drag-item-container input {\n    float: left; }\n  .drag-item-container input:hover {\n      cursor: move; }\n  .drag-item-container mat-checkbox, .drag-item-container mat-radio-button, .drag-item-container button {\n    margin: 5px; }\n"

/***/ }),

/***/ "./src/app/options/options.component.ts":
/*!**********************************************!*\
  !*** ./src/app/options/options.component.ts ***!
  \**********************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _services_broadcastElem_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/broadcastElem.service */ "./src/app/services/broadcastElem.service.ts");
/* harmony import */ var _services_broadcastChanges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/broadcastChanges.service */ "./src/app/services/broadcastChanges.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OptionsComponent = /** @class */ (function () {
    function OptionsComponent(broadcastElem, broadcastChanges) {
        var _this = this;
        this.broadcastElem = broadcastElem;
        this.broadcastChanges = broadcastChanges;
        this.formActivation = true;
        this._tickInterval = 1;
        this.broadcastElem.subscriber()
            .subscribe(function (res) {
            if (res.type) {
                _this.type = res.type;
                _this.autoTicks = res.config.autoTicks;
                _this.disabled = res.config.disabled;
                _this.invert = res.config.invert;
                _this.max = res.config.max;
                _this.min = res.config.min;
                _this.showTicks = res.config.showTicks;
                _this.step = res.config.step;
                _this.thumbLabel = res.config.thumbLabel;
                _this.value = res.config.value;
                _this.vertical = res.config.vertical;
                _this.formActivation = false;
            }
            else {
                _this.formActivation = true;
            }
        });
    }
    OptionsComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(OptionsComponent.prototype, "tickInterval", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        set: function (value) {
            this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    OptionsComponent.prototype.change = function () {
        var elem = {
            autoTicks: this.autoTicks,
            disabled: this.disabled,
            invert: this.invert,
            max: this.max,
            min: this.min,
            showTicks: this.showTicks,
            step: this.step,
            thumbLabel: this.thumbLabel,
            value: this.value,
            vertical: this.vertical
        };
        this.broadcastChanges.setChanges(elem);
    };
    OptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-options',
            template: __webpack_require__(/*! ./options.component.html */ "./src/app/options/options.component.html"),
            styles: [__webpack_require__(/*! ./options.component.scss */ "./src/app/options/options.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_broadcastElem_service__WEBPACK_IMPORTED_MODULE_2__["BroadcastElemService"], _services_broadcastChanges_service__WEBPACK_IMPORTED_MODULE_3__["BroadcastChangesService"]])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/app/services/broadcastChanges.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/broadcastChanges.service.ts ***!
  \******************************************************/
/*! exports provided: BroadcastChangesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastChangesService", function() { return BroadcastChangesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BroadcastChangesService = /** @class */ (function () {
    function BroadcastChangesService() {
        this.elem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BroadcastChangesService.prototype.setChanges = function (elem) {
        this.elem.emit(elem);
    };
    BroadcastChangesService.prototype.subscriber = function () {
        return this.elem;
    };
    BroadcastChangesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], BroadcastChangesService);
    return BroadcastChangesService;
}());



/***/ }),

/***/ "./src/app/services/broadcastElem.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/broadcastElem.service.ts ***!
  \***************************************************/
/*! exports provided: BroadcastElemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastElemService", function() { return BroadcastElemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BroadcastElemService = /** @class */ (function () {
    function BroadcastElemService() {
        this.elem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BroadcastElemService.prototype.setElem = function (elem) {
        this.elem.emit(elem);
    };
    BroadcastElemService.prototype.subscriber = function () {
        return this.elem;
    };
    BroadcastElemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], BroadcastElemService);
    return BroadcastElemService;
}());



/***/ }),

/***/ "./src/app/services/dropzones.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/dropzones.service.ts ***!
  \***********************************************/
/*! exports provided: DropzonesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropzonesService", function() { return DropzonesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropzonesService = /** @class */ (function () {
    function DropzonesService() {
    }
    DropzonesService.prototype.moveInList = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
    };
    DropzonesService.prototype.addToList = function (event) {
        this.cloneToList(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    };
    /**
     * Clones item from one array to another. Modifying transferArrayItem from cdk utils found here
     *
     * https://github.com/angular/material2/blob/master/src/cdk/drag-drop/drag-utils.ts
     *
     * @param currentArray Array from which to transfer the item.
     * @param targetArray Array into which is put the item.
     * @param currentIndex Index of the item in its current array.
     * @param targetIndex Index at which to insert the item.
     */
    DropzonesService.prototype.cloneToList = function (currentArray, targetArray, currentIndex, targetIndex) {
        var to = this.clamp(targetIndex, targetArray.length);
        if (currentArray.length) {
            targetArray.splice(to, 0, currentArray[currentIndex]);
        }
    };
    /** Clamps a number between zero and a maximum. */
    DropzonesService.prototype.clamp = function (value, max) {
        return Math.max(0, Math.min(max, value));
    };
    DropzonesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DropzonesService);
    return DropzonesService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    // http get any pet
    HttpService.prototype.getTeam = function () {
        return this.http.get('/team')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (team) { return console.log(team); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getTeam', [])));
    };
    HttpService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log(operation + " failed: " + error.message); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/team/team.component.html":
/*!******************************************!*\
  !*** ./src/app/team/team.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\n    <h3>Our team</h3>\n    <mat-nav-list>\n        <mat-list-item *ngFor=\"let player of team\">\n            <a matLine (click)=\"showLink(player.github)\">{{ player.name }}</a>\n        </mat-list-item>\n    </mat-nav-list>\n</div>\n\n<app-constructor></app-constructor>\n<app-form></app-form>\n<app-options></app-options>"

/***/ }),

/***/ "./src/app/team/team.component.scss":
/*!******************************************!*\
  !*** ./src/app/team/team.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list {\n  width: 20%;\n  padding: 5px;\n  border-radius: 5px;\n  float: left;\n  margin: 20px 2px;\n  box-shadow: 1px 1px 10px .1px black;\n  background-color: #ffffa0; }\n  .list h3 {\n    text-align: center;\n    font-size: 25px;\n    margin: 20px 5px 26px 5px;\n    padding: 5px;\n    color: black; }\n  .list .mat-nav-list {\n    padding: 0;\n    border-radius: 5px; }\n  .list .mat-nav-list .mat-list-item {\n      border-bottom: 1px solid #dcdcdc; }\n"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamComponent = /** @class */ (function () {
    function TeamComponent(service) {
        this.service = service;
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.getTeam();
    };
    // get array of pets with HTTP from JSON
    TeamComponent.prototype.getTeam = function () {
        var _this = this;
        this.service.getTeam()
            .subscribe(function (data) {
            if (data.length) {
                _this.team = data;
            }
        });
    };
    TeamComponent.prototype.showLink = function (link) {
        console.log(link);
    };
    TeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(/*! ./team.component.html */ "./src/app/team/team.component.html"),
            styles: [__webpack_require__(/*! ./team.component.scss */ "./src/app/team/team.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], TeamComponent);
    return TeamComponent;
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

module.exports = __webpack_require__(/*! D:\Web\SoftServe\SyncForms\app-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map