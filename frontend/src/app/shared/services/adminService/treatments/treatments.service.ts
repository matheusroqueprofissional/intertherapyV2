import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Treatments } from '../../../../interfaces/treatments';

@Injectable({
  providedIn: 'root'
})
export class TreatmentsService {

  constructor(private http:HttpClient) { }

  url = "http://127.0.0.1:8080/admin/"
  baseget = this.url+"GetTreatments"
  basepost = this.url+"RegisterTreatment"

  getTreatments(): Observable<Treatments[]>{
    return this.http.get<Treatments[]>(this.baseget)
  }

  postTreatments(treatments:Treatments):Observable<Treatments[]>{
    return this.http.post<Treatments[]>(this.basepost, treatments)
  }
}
