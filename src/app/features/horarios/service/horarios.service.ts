import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenerhorarios(id_lugar: number): Observable<any>{
    const uri = `${this.apiUrl}horarios/obtenerHorarios/${id_lugar}`;
    return this.http.get<any>(uri);
  }

  registrarLugar(data: object): Observable<any> {
    const uri = `${this.apiUrl}horarios/agregarHorarios`;
    return this.http.post<any>(uri, data);
  }

  eliminarHorario(id_horario: string): Observable<any> {
    const uri = `${this.apiUrl}horarios/eliminarHorarios/${id_horario}`;
    return this.http.delete<any>(uri);
  }

}
