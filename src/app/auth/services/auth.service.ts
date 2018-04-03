import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/operator/map';

@Injectable()
export class AuthService {
  constructor(private http: Http) {

  }

  login(credentials) {
    return this.http.post(`/api/authenticate`,
      JSON.stringify(credentials))
      .map(response => {
        const result = response.json();
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return tokenNotExpired();
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    return new JwtHelper().decodeToken(token);
  }
}
