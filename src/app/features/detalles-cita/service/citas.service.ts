import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenerdetalleCita(id_lugar: number, id_horario:string): Observable<any>{
    const uri = `${this.apiUrl}detalleAgenda/detalleCita/${id_lugar}/${id_horario}`;
    return this.http.get<any>(uri);
  }

  actualizarCita(id_horario:string, status:object): Observable<any> {
    const uri = `${this.apiUrl}horarios/actualizar/${id_horario}`;
    return this.http.put<any>(uri, status);
  }  

}
