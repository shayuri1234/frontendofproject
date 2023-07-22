"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InstallationComponent = void 0;
var core_1 = require("@angular/core");
var install_1 = require("src/app/Model/install");
var InstallationComponent = /** @class */ (function () {
    function InstallationComponent(service, router) {
        this.service = service;
        this.router = router;
        this.submitted = false;
        this.install = new install_1.Installation();
    }
    InstallationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.save();
    };
    InstallationComponent.prototype.save = function () {
        this.service.createInstall(this.install).subscribe();
        this.gotoList();
        this.getAll();
    };
    InstallationComponent.prototype.getAll = function () {
        this.service.getInstall().subscribe(function (data) {
            console.log(data);
        });
    };
    InstallationComponent.prototype.gotoList = function () {
        this.router.navigate(['main']);
    };
    InstallationComponent = __decorate([
        core_1.Component({
            selector: 'app-installation',
            templateUrl: './installation.component.html',
            styleUrls: ['./installation.component.css']
        })
    ], InstallationComponent);
    return InstallationComponent;
}());
exports.InstallationComponent = InstallationComponent;
