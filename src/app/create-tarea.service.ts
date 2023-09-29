import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CreateTareaService {
  private apitcreateUrl = "http://localhost:8001/api/v1/tarea";

  constructor(private http: HttpClient) { }

  sendTarea(credentials: any){
    const body = {
      titulo:credentials.titulo,
      contenido: credentials.contenido,
      estado: credentials.estado,
      autor:credentials.autor
    }

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.apitcreateUrl, body, httpOptions);
  }
}
