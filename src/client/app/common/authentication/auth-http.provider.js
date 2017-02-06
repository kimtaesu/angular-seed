"use strict";
var http_1 = require("@angular/http");
var auth_http_service_1 = require("./auth-http.service.ts");
// no arrow expression --> AOT compiling (https://github.com/angular/angular/issues/11262)
function authServiceFactory(backend, defaultOptions, tokenService) {
    return new auth_http_service_1.AuthHttp(backend, defaultOptions, tokenService);
}
exports.authServiceFactory = authServiceFactory;
;
exports.AuthServiceProvider = {
    provide: http_1.Http,
    useFactory: authServiceFactory,
    deps: [http_1.XHRBackend, http_1.RequestOptions]
};
//# sourceMappingURL=auth-http.provider.js.map
