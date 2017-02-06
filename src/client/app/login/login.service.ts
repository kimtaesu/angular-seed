import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {GrantType} from "../common/authentication/enum.grant.type";
import any = jasmine.any;


@Injectable()
export class LoginService {


  constructor(private http: Http) {

  }

  requestLogin(grantType: GrantType, name: string, password: string): Observable<string> {

    let mergedOptions: RequestOptionsArgs;
    mergedOptions = {headers: new Headers()};
    mergedOptions.headers.append('Authorization', `Basic YWFhOmFhYQ==`)
    mergedOptions.headers.append('Content-Type', `application/x-www-form-urlencoded`)
    return this.http
      .post(
        "http://localhost:8180/test",
        mergedOptions
      )
      .catch(reason => {
        console.error('reason ' + reason.toString())
      })
  }
}
