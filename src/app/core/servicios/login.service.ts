import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  iniciarSesion(body: any) {
    const url = `${this.url}auth/login`;
    return this.http.post(url, body);
  }

  registrarusuario(body: any) {
    const url = `${this.url}auth/signup`;
    return this.http.post(url, body);
  }
}
