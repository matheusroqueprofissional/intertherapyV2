import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../../../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private http = inject(HttpClient); // Use inject() para HttpClient

  private url = 'http://127.0.0.1:8080/admin/';
  private baseget = this.url + 'GetTreatments';
  private basepost = this.url + 'RegisterTreatment';
  private emailUrl = 'http://127.0.0.1:8080/email/sendemail'; // URL para enviar email

  /**
   * Envia um email através da API.
   * @param email Os dados do email a serem enviados.
   * @returns Um Observable contendo a resposta da API.
   */
  sendEmail(email: Email): Observable<any> { // Corrigido o nome do método e o tipo de retorno
    return this.http.post(this.emailUrl, email); // Use this.emailUrl, não uma string literal
  }
}
