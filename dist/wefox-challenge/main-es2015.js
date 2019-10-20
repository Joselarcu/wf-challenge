(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<wf-alert [(visibleMessage)]=\"alertService.alertVisible\" [type]=\"alertService.errorType\" [message]=\"alertService.message\"></wf-alert>\n<wf-navbar logoUrl=\"./assets/images/wefox_logo.png\" ></wf-navbar>\n<div class=\"container-fluid\">  \n  <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-detail/post-detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-detail/post-detail.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"post\">\n  <h1>\n    {{ post.title }}\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"editPost(post.id)\">\n      <i class=\"fa fa-pencil\"></i>Edit\n    </button>\n  </h1>\n\n  <small>{{ post.created_at | date: \"dd/MM/yyyy\" }}</small>\n\n  <p>{{ post.content }}</p>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <img [src]=\"post.image_url\" />\n    </div>\n    <div class=\"col\">\n      <img [src]=\"getMapUrl(post.lat, post.long)\" />\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-list/post-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-list/post-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Posts list</h1>\n\n<wf-table [tableHeader]=\"tableHeader\" [rows]=\"rows\" (action1)= \"deletePost($event)\" (action2)=\"goToDetail($event)\"></wf-table>\n\n<wf-confirmation-modal title=\"Delete post\" message=\"Are you sure you want to delete this post?\" (confirmAction)=\"confirmDeletePost()\" [(isVisible)] =\"confirmationModalService.modalVisible\"></wf-confirmation-modal>\n\n<button type=\"button\" class=\"btn btn-success\" (click)=\"goToCreatePostView(template)\">Add Post</button>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-update/post-update.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-update/post-update.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{(isCreate) ? 'New Post' : 'Edit post'}}</h1>\n\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"title\">Title*</label>\n    <input\n    formControlName=\"title\"\n      type=\"text\"\n      class=\"form-control\"\n      id=\"title\"\n      aria-describedby=\"titleHelp\"\n      placeholder=\"Enter title\"\n    />\n    <small id=\"titleHelp\" class=\"form-text text-muted\" *ngIf=\"registerForm.controls.title.errors\">Required</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"content\">Content</label>\n    <textarea\n    formControlName=\"content\"\n      class=\"form-control\"\n      id=\"content\"\n      rows=\"3\"\n      aria-describedby=\"contentHelp\"\n    ></textarea>\n    <small id=\"titleHelp\" class=\"form-text text-muted\" *ngIf=\"registerForm.controls.content.errors\">Required</small>\n  </div>\n\n  <div class=\"form-grop row\">\n    <div class=\"col-sm-6\">\n      <label for=\"inputLongitude\">Longitude</label>\n      <input\n      formControlName=\"long\"\n        type=\"text\"\n        class=\"form-control\"\n        id=\"inputLongitude\"\n        placeholder=\"Longitude\"\n        aria-describedby=\"longitudetHelp\"\n      />\n      <small id=\"longitudetHelp\" class=\"form-text text-muted\" *ngIf=\"registerForm.controls.long.errors\">Invalid format</small>\n    </div>\n    <div class=\"col-sm-6\">\n      <label for=\"inputLatitude\">Latitude</label>\n      <input\n      formControlName=\"lat\"\n        type=\"text\"\n        class=\"form-control\"\n        id=\"inputLatitude\"\n        placeholder=\"Latitude\"\n        aria-describedby=\"latitudeHelp\"\n      />\n      <small id=\"latitudeHelp\" class=\"form-text text-muted\" *ngIf=\"registerForm.controls.lat.errors\">Invalid format</small>\n    </div>\n  </div>\n  <div class=\"form-group pt-15\">\n    <label for=\"image\">Image url</label>\n    <input\n    formControlName=\"image_url\"\n      type=\"text\"\n      class=\"form-control\"\n      id=\"image\"\n      aria-describedby=\"imageHelp\"\n      placeholder=\"Enter image url\"\n    />\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\" *ngIf=\"registerForm.controls.image_url.value\">\n      <img [src]=\"registerForm.controls.image_url.value\">\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"registerForm.controls.lat.value && registerForm.controls.long.value\">\n     <img [src]=\"getMapUrl(registerForm.controls.lat.value,registerForm.controls.long.value)\" alt=\"\">\n    </div>\n    \n  </div>\n\n  <div class=\"buttons-row\">\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"registerForm.invalid\" [ngClass]=\"{'disabled' : registerForm.invalid}\">{{(isCreate)? 'Create' : 'Update'}}</button>\n    <button type=\"submit\" class=\"btn btn-dark\" *ngIf=\"!isCreate\" (click)=\"back()\">Back</button>\n  </div>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/alert/alert.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/alert/alert.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert-container\" *ngIf=\"visibleMessage\">\n  <div class=\"alert alert-dismissible\" \n  [ngClass]=\"{'alert-success': type === 'success', 'alert-danger': type === 'error'}\">\n    <a (click)=\"close()\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\"\n      >&times;</a\n    >\n    <strong>{{(type === 'success') ? 'Success!' : 'Error!'}}</strong> {{message}}\n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/confirmation-modal/confirmation-modal.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/confirmation-modal/confirmation-modal.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"myModal\" class=\"modal d-block fade-in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" *ngIf=\"isVisible\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h3 id=\"myModalLabel\">{{title}}</h3>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"closeModal()\">×</button>\n            </div>\n            <div class=\"modal-body\">\n                <p>{{message}}</p>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn\" data-dismiss=\"modal\" aria-hidden=\"true\" (click)=\"closeModal()\">Cancel</button>\n                <button class=\"btn btn-primary\" (click)=\"confirm()\">Delete</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"background\" *ngIf=\"isVisible\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <img [src]=\"logoUrl\" width=\"120\" height=\"30\" class=\"d-inline-block align-top\" (click)=\"navigateTo('/')\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" *ngFor=\"let tab of elements\">\n        <a class=\"nav-link\" (click)=\"navigateTo(tab.view)\">{{tab.label}} <span class=\"sr-only\">(current)</span></a>\n      </li>\n      \n    </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/table/table.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/table/table.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table table-bordered\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\" *ngFor=\"let column of tableHeader\">{{column.label}}</th>\n      <th scope=\"col\" *ngIf=\"action1.observers.length > 0\">Delete</th>\n      <th scope=\"col\" *ngIf=\"action2.observers.length > 0\">Detail</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of rows; let i = index\">\n      <td scope=\"row\" *ngFor=\"let column of tableHeader\"> {{row[column.selector]}}</td>\n      <td (click)=\"executeFirstAction(i)\" class=\"action\" *ngIf=\"action1.observers.length > 0\"><i class=\"fa fa-trash\"></i></td>\n      <td class=\"action\" (click)=\"executeSecondAction(row)\" *ngIf=\"action2.observers.length > 0\"><i class=\"fa fa-book\"></i></td>\n    </tr>\n  </tbody>\n</table>\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/post-list/post-list.component */ "./src/app/components/post-list/post-list.component.ts");
/* harmony import */ var _components_post_update_post_updatecomponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/post-update/post-updatecomponent */ "./src/app/components/post-update/post-updatecomponent.ts");
/* harmony import */ var _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/post-detail/post-detail.component */ "./src/app/components/post-detail/post-detail.component.ts");






const routes = [
    {
        path: "",
        component: _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__["PostListComponent"]
    },
    {
        path: "posts",
        component: _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__["PostListComponent"]
    },
    {
        path: "posts/edit/:id",
        component: _components_post_update_post_updatecomponent__WEBPACK_IMPORTED_MODULE_4__["PostUpdateComponent"]
    },
    {
        path: "posts/new",
        component: _components_post_update_post_updatecomponent__WEBPACK_IMPORTED_MODULE_4__["PostUpdateComponent"]
    },
    {
        path: "posts/detail/:id",
        component: _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_5__["PostDetailComponent"]
    },
    {
        path: "**",
        redirectTo: "posts"
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-fluid {\n  margin-top: 30px;\n  max-width: 1600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHdvcmtzcGFjZVxcYW5ndWxhclxcd2Vmb3gtY2hhbGxlbmdlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQgXHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4XHJcbiAgICBtYXgtd2lkdGg6IDE2MDBweFxyXG4iLCIuY29udGFpbmVyLWZsdWlkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");



let AppComponent = class AppComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_shared_table_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shared/table/table.component */ "./src/app/components/shared/table/table.component.ts");
/* harmony import */ var _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/post-list/post-list.component */ "./src/app/components/post-list/post-list.component.ts");
/* harmony import */ var _components_post_update_post_updatecomponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/post-update/post-updatecomponent */ "./src/app/components/post-update/post-updatecomponent.ts");
/* harmony import */ var _components_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shared/confirmation-modal/confirmation-modal.component */ "./src/app/components/shared/confirmation-modal/confirmation-modal.component.ts");
/* harmony import */ var _components_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/shared/alert/alert.component */ "./src/app/components/shared/alert/alert.component.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/post-detail/post-detail.component */ "./src/app/components/post-detail/post-detail.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _components_shared_table_table_component__WEBPACK_IMPORTED_MODULE_10__["TableComponent"],
            _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_11__["PostListComponent"],
            _components_post_update_post_updatecomponent__WEBPACK_IMPORTED_MODULE_12__["PostUpdateComponent"],
            _components_shared_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_13__["ConfirmationModalComponent"],
            _components_shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_14__["AlertComponent"],
            _components_post_detail_post_detail_component__WEBPACK_IMPORTED_MODULE_16__["PostDetailComponent"]
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"]
        ],
        providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_15__["PostService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/post-detail/post-detail.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail.component.sass ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  font-size: 20px;\n}\n\nimg {\n  height: 500px;\n}\n\nbutton {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LWRldGFpbC9EOlxcd29ya3NwYWNlXFxhbmd1bGFyXFx3ZWZveC1jaGFsbGVuZ2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvc3QtZGV0YWlsXFxwb3N0LWRldGFpbC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LWRldGFpbC9wb3N0LWRldGFpbC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QtZGV0YWlsL3Bvc3QtZGV0YWlsLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsicFxyXG4gICAgZm9udC1zaXplOiAyMHB4XHJcblxyXG5pbWdcclxuICAgIGhlaWdodDogNTAwcHhcclxuXHJcbmJ1dHRvblxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHgiLCJwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/post-detail/post-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/post-detail/post-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailComponent", function() { return PostDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let PostDetailComponent = class PostDetailComponent {
    constructor(postService, route, router) {
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.mapUrl = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/";
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params["id"];
            return this.postService
                .getPost(Number(id))
                .subscribe((response) => {
                this.post = response;
            });
        });
    }
    getMapUrl(longitude, latitude) {
        return (this.mapUrl +
            latitude +
            "," +
            longitude +
            ",9.67,0.00,0.00/300x300@2x?access_token=" + src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].mapKey);
    }
    editPost(postId) {
        this.router.navigate(["/posts/edit", postId]);
    }
};
PostDetailComponent.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PostDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "wf-post-detail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-detail/post-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-detail.component.sass */ "./src/app/components/post-detail/post-detail.component.sass")).default]
    })
], PostDetailComponent);



/***/ }),

/***/ "./src/app/components/post-list/post-list.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/components/post-list/post-list.component.sass ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/components/post-list/post-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/post-list/post-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_confirmation_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/confirmation-modal.service */ "./src/app/services/confirmation-modal.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");







let PostListComponent = class PostListComponent {
    constructor(postService, router, datePipe, confirmationModalService, alertService) {
        this.postService = postService;
        this.router = router;
        this.datePipe = datePipe;
        this.confirmationModalService = confirmationModalService;
        this.alertService = alertService;
        this.tableHeader = [
            { label: "#", selector: "id" },
            { label: "title", selector: "title" },
            { label: "content", selector: "content" },
            { label: "geopositon", selector: "geoposition" },
            { label: "Create date", selector: "created_at" },
            { label: "update date", selector: "updated_at" }
        ];
        postService.getPosts().subscribe(response => {
            this.rows = this.transformDataToTable(response);
        });
    }
    ngOnInit() { }
    goToCreatePostView() {
        this.router.navigate(["/posts/new"]);
    }
    transformDate(date) {
        return this.datePipe.transform(date, "dd/MM/yyyy");
    }
    transformDataToTable(posts) {
        let response = [];
        for (const i in posts) {
            const post = posts[i];
            const geoposition = post.long ? post.long + "," + post.lat : "";
            const row = {
                id: post.id,
                title: post.title,
                content: post.content.slice(0, 200) + (post.content.length > 200 ? "..." : ""),
                geoposition: geoposition,
                created_at: this.transformDate(post.created_at),
                updated_at: this.transformDate(post.updated_at)
            };
            response.push(row);
        }
        return response;
    }
    deletePost(postIndex) {
        this.postToDeleteIndex = postIndex;
        this.confirmationModalService.showModal();
    }
    confirmDeletePost() {
        this.postService
            .deletePost(this.rows[this.postToDeleteIndex].id)
            .subscribe(response => {
            this.alertService.showAlert('success', 'Post deleted successfully');
            this.rows.splice(this.postToDeleteIndex, 1);
            this.confirmationModalService.hideModal();
        }, (error) => {
            this.alertService.showAlert('error', 'Error deleting post: ' + error);
        });
    }
    goToDetail(id) {
        this.router.navigate(["/posts/detail", id]);
    }
};
PostListComponent.ctorParameters = () => [
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _services_confirmation_modal_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmationModalService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
];
PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "wf-post-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-list/post-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-list.component.sass */ "./src/app/components/post-list/post-list.component.sass")).default]
    })
], PostListComponent);



/***/ }),

/***/ "./src/app/components/post-update/post-update.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/components/post-update/post-update.component.sass ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".buttons-row {\n  padding-top: 20px;\n}\n\nimg {\n  height: 500px;\n}\n\n.text-muted {\n  color: red !important;\n}\n\n.btn-dark {\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LXVwZGF0ZS9EOlxcd29ya3NwYWNlXFxhbmd1bGFyXFx3ZWZveC1jaGFsbGVuZ2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBvc3QtdXBkYXRlXFxwb3N0LXVwZGF0ZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3N0LXVwZGF0ZS9wb3N0LXVwZGF0ZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtBQ0dKOztBRERBO0VBQ0ksaUJBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdC11cGRhdGUvcG9zdC11cGRhdGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ucy1yb3dcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4XHJcblxyXG5pbWdcclxuICAgIGhlaWdodDogNTAwcHhcclxuXHJcbi50ZXh0LW11dGVkXHJcbiAgICBjb2xvcjogcmVkICFpbXBvcnRhbnRcclxuXHJcbi5idG4tZGFya1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHgiLCIuYnV0dG9ucy1yb3cge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLnRleHQtbXV0ZWQge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZGFyayB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/post-update/post-updatecomponent.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/post-update/post-updatecomponent.ts ***!
  \****************************************************************/
/*! exports provided: PostUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostUpdateComponent", function() { return PostUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







let PostUpdateComponent = class PostUpdateComponent {
    constructor(route, postService, formBuilder, router, alertService) {
        this.route = route;
        this.postService = postService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertService = alertService;
        this.submitted = false;
        this.isCreate = true;
        this.mapUrl = "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/";
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            content: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lat: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^-?[0-9]\d*(\.\d+)?$/)],
            long: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^-?[0-9]\d*(\.\d+)?$/)],
            image_url: [""]
        });
        this.route.params.subscribe(params => {
            const id = params["id"];
            if (id) {
                this.isCreate = false;
                return this.postService.getPost(Number(id)).subscribe((response) => {
                    this.originalPost = Object.assign({}, response);
                    delete response.id;
                    delete response.created_at;
                    delete response.updated_at;
                    this.registerForm.setValue(response);
                }, error => {
                    this.alertService.showAlert("error", "Error getting post data!");
                });
            }
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        else {
            let obs;
            let successMessage = "";
            let errorMessage = "";
            if (!this.isCreate) {
                obs = this.updatePost(this.originalPost.id, this.registerForm.value);
                successMessage = "Post updated successfully!";
                errorMessage = "Error updating post!";
            }
            else {
                obs = this.createPost(this.registerForm.value);
                successMessage = "Post created successfully!";
                errorMessage = "Error creating post!";
            }
            obs.subscribe(response => {
                this.alertService.showAlert("success", successMessage);
                this.router.navigate(["/posts"]);
            }, error => {
                this.alertService.showAlert("error", errorMessage);
            });
        }
    }
    createPost(post) {
        return this.postService.createPost(post);
    }
    updatePost(id, post) {
        post.id = id;
        return this.postService.updatePost(id, post);
    }
    getMapUrl(longitude, latitude) {
        return (this.mapUrl +
            latitude +
            "," +
            longitude +
            ",9.67,0.00,0.00/300x300@2x?access_token=" +
            _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].mapKey);
    }
    back() {
        this.router.navigate(["/posts/detail", this.originalPost.id]);
    }
};
PostUpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
PostUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "wf-post-update",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/post-update/post-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-update.component.sass */ "./src/app/components/post-update/post-update.component.sass")).default]
    })
], PostUpdateComponent);



/***/ }),

/***/ "./src/app/components/shared/alert/alert.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/alert/alert.component.sass ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alert-container {\n  position: absolute;\n  top: 50px;\n  right: 30px;\n}\n\n.close {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvYWxlcnQvRDpcXHdvcmtzcGFjZVxcYW5ndWxhclxcd2Vmb3gtY2hhbGxlbmdlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaGFyZWRcXGFsZXJ0XFxhbGVydC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9hbGVydC9hbGVydC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydC1jb250YWluZXJcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgdG9wOiA1MHB4XHJcbiAgICByaWdodDogMzBweFxyXG5cclxuLmNsb3NlXHJcbiAgICBjdXJzb3I6IHBvaW50ZXIiLCIuYWxlcnQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwcHg7XG4gIHJpZ2h0OiAzMHB4O1xufVxuXG4uY2xvc2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/shared/alert/alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/shared/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlertComponent = class AlertComponent {
    constructor() {
        this.visibleMessageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        setTimeout(() => {
            this.close();
        }, 3000);
    }
    close() {
        this.visibleMessage = false;
        this.visibleMessageChange.emit(this.visibleMessage);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "visibleMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AlertComponent.prototype, "visibleMessageChange", void 0);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "wf-alert",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/alert/alert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.component.sass */ "./src/app/components/shared/alert/alert.component.sass")).default]
    })
], AlertComponent);



/***/ }),

/***/ "./src/app/components/shared/confirmation-modal/confirmation-modal.component.sass":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shared/confirmation-modal/confirmation-modal.component.sass ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".action-row {\n  margin-top: 30px;\n  text-align: center;\n}\n\n.modal {\n  z-index: 99;\n}\n\n.background {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  opacity: 0.9;\n  z-index: 90;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29uZmlybWF0aW9uLW1vZGFsL0Q6XFx3b3Jrc3BhY2VcXGFuZ3VsYXJcXHdlZm94LWNoYWxsZW5nZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hhcmVkXFxjb25maXJtYXRpb24tbW9kYWxcXGNvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29uZmlybWF0aW9uLW1vZGFsL2NvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2NvbmZpcm1hdGlvbi1tb2RhbC9jb25maXJtYXRpb24tbW9kYWwuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uLXJvd1xyXG4gICAgbWFyZ2luLXRvcDogMzBweFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcblxyXG4ubW9kYWxcclxuICAgIHotaW5kZXg6IDk5XHJcblxyXG4uYmFja2dyb3VuZFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICB0b3A6IDBweFxyXG4gICAgcmlnaHQ6IDBweFxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGhlaWdodDogMTAwJVxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxuICAgIG9wYWNpdHk6IDAuOVxyXG4gICAgei1pbmRleDogOTAiLCIuYWN0aW9uLXJvdyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1vZGFsIHtcbiAgei1pbmRleDogOTk7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuOTtcbiAgei1pbmRleDogOTA7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/shared/confirmation-modal/confirmation-modal.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/confirmation-modal/confirmation-modal.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ConfirmationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModalComponent", function() { return ConfirmationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfirmationModalComponent = class ConfirmationModalComponent {
    constructor() {
        this.confirmAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isVisible = false;
        this.isVisibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    closeModal() {
        this.isVisible = false;
        this.isVisibleChange.emit(false);
    }
    confirm() {
        this.confirmAction.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ConfirmationModalComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ConfirmationModalComponent.prototype, "message", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ConfirmationModalComponent.prototype, "confirmAction", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ConfirmationModalComponent.prototype, "isVisible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ConfirmationModalComponent.prototype, "isVisibleChange", void 0);
ConfirmationModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "wf-confirmation-modal",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmation-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/confirmation-modal/confirmation-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirmation-modal.component.sass */ "./src/app/components/shared/confirmation-modal/confirmation-modal.component.sass")).default]
    })
], ConfirmationModalComponent);



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.sass ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".d-inline-block {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL0Q6XFx3b3Jrc3BhY2VcXGFuZ3VsYXJcXHdlZm94LWNoYWxsZW5nZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hhcmVkXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1pbmxpbmUtYmxvY2tcclxuICAgIGN1cnNvcjogcG9pbnRlciIsIi5kLWlubGluZS1ibG9jayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavbarComponent = class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateTo(url) {
        this.router.navigate([url]);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "elements", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavbarComponent.prototype, "logoUrl", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'wf-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.sass */ "./src/app/components/shared/navbar/navbar.component.sass")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/shared/table/table.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/table/table.component.sass ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("td, th {\n  text-align: center;\n}\n\n.action {\n  cursor: pointer;\n}\n\n.fa-trash {\n  color: red;\n}\n\n.fa-book {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvdGFibGUvRDpcXHdvcmtzcGFjZVxcYW5ndWxhclxcd2Vmb3gtY2hhbGxlbmdlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaGFyZWRcXHRhYmxlXFx0YWJsZS5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvdGFibGUvdGFibGUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksVUFBQTtBQ0dKOztBRERBO0VBQ0ksWUFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvdGFibGUvdGFibGUuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZCwgdGhcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG5cclxuLmFjdGlvbiBcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG5cclxuLmZhLXRyYXNoXHJcbiAgICBjb2xvcjogcmVkXHJcblxyXG4uZmEtYm9va1xyXG4gICAgY29sb3I6IGdyZWVuIiwidGQsIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWN0aW9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmEtdHJhc2gge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZmEtYm9vayB7XG4gIGNvbG9yOiBncmVlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/shared/table/table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/shared/table/table.component.ts ***!
  \************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TableComponent = class TableComponent {
    constructor() {
        this.action1 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.action2 = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes['rows']) {
            this.rows = changes.rows.currentValue;
        }
    }
    deleteElement(index) {
    }
    executeFirstAction(index) {
        this.action1.emit(index);
    }
    executeSecondAction(row) {
        this.action2.emit(row.id);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "tableHeader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "rows", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableComponent.prototype, "action1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableComponent.prototype, "action2", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "wf-table",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/table/table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.sass */ "./src/app/components/shared/table/table.component.sass")).default]
    })
], TableComponent);



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlertService = class AlertService {
    constructor() {
        this.alertVisible = false;
        this.errorType = 'success';
        this.message = '';
    }
    isAlertVisible() {
        return this.alertVisible;
    }
    showAlert(type, message) {
        this.errorType = type;
        this.message = message;
        this.alertVisible = true;
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "./src/app/services/confirmation-modal.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/confirmation-modal.service.ts ***!
  \********************************************************/
/*! exports provided: ConfirmationModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModalService", function() { return ConfirmationModalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ConfirmationModalService = class ConfirmationModalService {
    constructor() {
        this.modalVisible = false;
    }
    showModal() {
        this.modalVisible = true;
    }
    hideModal() {
        this.modalVisible = false;
    }
};
ConfirmationModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ConfirmationModalService);



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let PostService = class PostService {
    constructor(http) {
        this.http = http;
        this.postUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "posts";
    }
    getPosts() {
        return this.http.get(this.postUrl);
    }
    getPost(postId) {
        return this.http.get(this.postUrl + '/' + postId);
    }
    createPost(post) {
        return this.http.post(this.postUrl, post);
    }
    updatePost(postId, newValue) {
        return this.http.put(this.postUrl + '/' + postId, newValue);
    }
    deletePost(postId) {
        return this.http.delete(this.postUrl + '/' + postId);
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], PostService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: "https://wf-challenge-yn8dgzymk9.herokuapp.com/api/v1/",
    mapKey: "pk.eyJ1Ijoiam9zZWxhcmN1IiwiYSI6ImNqdzBwbzcxcTA0N2YzenBoejZ6MjJmdnoifQ.3yHQ6zI5pUkpZ92H3Y4sAg"
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\workspace\angular\wefox-challenge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map