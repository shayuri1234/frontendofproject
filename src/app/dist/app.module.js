"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var home_component_1 = require("./components/home/home.component");
var services_component_1 = require("./components/services/services.component");
var installation_component_1 = require("./components/installation/installation.component");
var admin_component_1 = require("./components/admin/admin.component");
var payment_component_1 = require("./components/payment/payment.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var user_login_component_1 = require("./components/user-login/user-login.component");
var user_signin_component_1 = require("./components/user-signin/user-signin.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                home_component_1.HomeComponent,
                services_component_1.ServicesComponent,
                installation_component_1.InstallationComponent,
                admin_component_1.AdminComponent,
                payment_component_1.PaymentComponent,
                user_login_component_1.UserLoginComponent,
                user_signin_component_1.UserSigninComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
