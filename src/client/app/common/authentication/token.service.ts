import {Injectable} from "@angular/core";
import {JwtTokenProvider} from "./jwt.token.provider";
export const KEY_JWT_TOKEN = "X-Auth-Token";

@Injectable
export class TokenService {
  constructor() {

  }

  setToken(token) {
    if (token) {
      localStorage.setItem(KEY_JWT_TOKEN, token);
    }
  }

  getToken(): JwtTokenProvider {
    return localStorage.getItem(KEY_JWT_TOKEN);
  }
}
