import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientHttp2Session } from 'http2';
import { Employers } from '../../../interfaces/employers.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

post(employers:Employers){
  this.http.post("",employers);
}
}
