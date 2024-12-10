import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreatmentsInterface } from '../../../../interfaces/treatments-interface';
import { urlDefault, endpoints } from '../../../../../environments/urls';

@Injectable({
  providedIn: 'root'
})
export class TreatmentUpdateService {
  private baseUrl = 'http://127.0.0.1:8080/system'; // URL do backend

  constructor(private http: HttpClient) { }

  postTreatments(data: TreatmentsInterface) {
    return this.http.post(`${this.baseUrl}/saveTreatments`, data);
  }

  updateTreatments() {
    // Implementar lógica para update
  }
}
