"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserLoginComponent = void 0;
var core_1 = require("@angular/core");
var user_login_1 = require("src/app/Model/user-login");
var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(service, router) {
        this.service = service;
        this.router = router;
        this.submitted = false;
        this.userlogin = new user_login_1.UserLogin();
    }
    UserLoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.save();
    };
    UserLoginComponent.prototype.save = function () {
        console.log(this.userlogin);
        this.service.createUser(this.userlogin).subscribe();
        //this.gotoList();
    };
    UserLoginComponent.prototype.gotoList = function () {
        this.router.navigate(['installation']);
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-user-login',
            templateUrl: './user-login.component.html',
            styleUrls: ['./user-login.component.css']
        })
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;
