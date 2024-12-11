import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentsAdminService {

  constructor(private http:HttpClient) { }
  private baseUrl = 'http://127.0.0.1:8080/system'; // URL do backend
  getTreatments():Observable<any> {
    return this.http.get(`${this.baseUrl}/getTreatments`);
  }
}
