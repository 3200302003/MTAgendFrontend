import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LugaresAtencionService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenerlugaresAtencion(): Observable<any>{
    const uri = `${this.apiUrl}lugares/obtenerLugares`;
    return this.http.get<any>(uri);
  }

  registrarLugar(data: object): Observable<any> {
    const uri = `${this.apiUrl}lugares/agregarLugar`;
    return this.http.post<any>(uri, data);
  }

  eliminarLugar(id_lugar: string) {
    const url = `${this.apiUrl}lugares/eliminarLugares/${id_lugar}`;
    return this.http.delete<any>(url);
  }
}
