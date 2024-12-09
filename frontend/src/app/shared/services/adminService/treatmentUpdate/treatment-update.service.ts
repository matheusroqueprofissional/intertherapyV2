import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreatmentsInterface } from '../../../../interfaces/treatments-interface';
import { urlDefault, endpoints } from '../../../../../environments/urls';

@Injectable({
  providedIn: 'root'
})
export class TreatmentUpdateService {
  url = urlDefault

  constructor(private http:HttpClient) { }

  postTreatments(treatmentsInterface:TreatmentsInterface){
    this.http.post(urlDefault+endpoints.saveTreatments,treatmentsInterface);
  }

  updateTreatments(){
  }
}
