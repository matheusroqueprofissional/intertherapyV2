import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../../../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

    constructor(private http:HttpClient) { }

    url = "http://127.0.0.1:8080/admin/"
    baseget = this.url+"GetTreatments"
    basepost = this.url+"RegisterTreatment"

    postSendEmail(email: Email): Observable<any> {
      return this.http.post<Email[]>('http://127.0.0.1:8080/email/sendemail', email)
    }
}
