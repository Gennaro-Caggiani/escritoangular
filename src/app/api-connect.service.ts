import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {
  private apiUrl = "http://127.0.0.1:8001/api/v1";

  constructor(private http: HttpClient) { } 

  public data: any = [] = [];

      getTarea() {
        return this.http.get(this.apiUrl + "/");
      }

      sendTarea(data: any){
        return this.http.post(this.apiUrl + "/tarea", data);
      }


}
