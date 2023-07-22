"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InstallService = void 0;
var core_1 = require("@angular/core");
var InstallService = /** @class */ (function () {
    function InstallService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8082";
    }
    InstallService.prototype.createInstall = function (install) {
        return this.http.post(this.baseUrl + "/saveinstall", install);
    };
    InstallService.prototype.getInstall = function () {
        return this.http.get(this.baseUrl + "/getall");
    };
    InstallService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], InstallService);
    return InstallService;
}());
exports.InstallService = InstallService;