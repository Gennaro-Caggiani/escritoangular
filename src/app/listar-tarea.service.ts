import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConnectService } from './api-connect.service';
@Injectable({
  providedIn: 'root'
})
export class ListarTareaService {
  private apiUrl = "http://127.0.0.1:8001/api/v1";

  constructor(private http: HttpClient) { }
 
  
  getTarea(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' 
      })
    };
    return this.http.get(this.apiUrl, httpOptions);

  } 
}
