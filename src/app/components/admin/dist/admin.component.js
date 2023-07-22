"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminComponent = void 0;
var core_1 = require("@angular/core");
var admin_1 = require("src/app/Model/admin");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(service, router) {
        this.service = service;
        this.router = router;
        this.submitted = false;
        this.admin = new admin_1.Admin();
    }
    AdminComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.save();
    };
    AdminComponent.prototype.save = function () {
        this.service.createAdmin(this.admin).subscribe();
        this.gotoList();
    };
    AdminComponent.prototype.gotoList = function () {
        this.router.navigate(['list']);
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
