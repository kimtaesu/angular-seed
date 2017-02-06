"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var EmptyObservable_1 = require("rxjs/observable/EmptyObservable");
var token_service_1 = require("./token.service.ts");
var AuthHttp = (function (_super) {
    __extends(AuthHttp, _super);
    function AuthHttp(backend, defaultOptions, tokenService) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.tokenService = tokenService;
        return _this;
    }
    AuthHttp.prototype.get = function (url, options) {
        var request = _super.prototype.get.call(this, url, this.appendAuthHeader(options))
            .map(function (response) {
            response.toString();
        });
        return this.interceptResponse(request);
    };
    AuthHttp.prototype.post = function (url, body, options) {
        var request = _super.prototype.post.call(this, url, body, this.appendAuthHeader(options))
            .map(function (response) {
            response.toString();
        });
        return this.interceptResponse(request);
    };
    AuthHttp.prototype.put = function (url, body, options) {
        var request = _super.prototype.put.call(this, url, body, this.appendAuthHeader(options))
            .map(function (response) {
            response.toString();
        });
        return this.interceptResponse(request);
    };
    AuthHttp.prototype.delete = function (url, options) {
        var request = _super.prototype.delete.call(this, url, this.appendAuthHeader(options))
            .map(function (response) {
            response.toString();
        });
        return this.interceptResponse(request);
    };
    AuthHttp.prototype.appendAuthHeader = function (options) {
        var mergedOptions;
        if (!options) {
            mergedOptions = { headers: new http_1.Headers() };
        }
        else {
            mergedOptions = options;
        }
        // const token = localStorage.getItem(JWT_RESPONSE_HEADER);
        // const isTokenSet = mergedOptions.headers.has('Authorization');
        // if (token && !isTokenSet && this.loginManagingService.isLoggedIn()) {
        //   mergedOptions.headers.append('Authorization', `Bearer ${token}`);
        // }
        return mergedOptions;
    };
    AuthHttp.prototype.interceptResponse = function (observable) {
        return observable.catch(function (err) {
            if (err.status === 401) {
                // this.loginManagingService.performNotAuthorized();
                return new EmptyObservable_1.EmptyObservable();
            }
            else if (err.status !== 422 && err.status !== 403) {
                var message = 'Something went wrong';
                console.error(message);
            }
            return Observable_1.Observable.throw(err);
        });
    };
    return AuthHttp;
}(http_1.Http));
AuthHttp = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.ConnectionBackend, http_1.RequestOptions, token_service_1.TokenService])
], AuthHttp);
exports.AuthHttp = AuthHttp;
//# sourceMappingURL=auth-http.service.js.map
