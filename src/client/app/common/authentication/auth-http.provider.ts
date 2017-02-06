import {Http, XHRBackend, RequestOptions} from "@angular/http";
import {AuthHttp} from "./auth-http.service";
import {TokenService} from "./token.service";

// no arrow expression --> AOT compiling (https://github.com/angular/angular/issues/11262)
export function authServiceFactory(backend: XHRBackend, defaultOptions: RequestOptions, tokenService: TokenService) {
  return new AuthHttp(backend, defaultOptions, tokenService);
};

export let AuthServiceProvider = {
  provide: Http,
  useFactory: authServiceFactory,
  deps: [XHRBackend, RequestOptions]
};
