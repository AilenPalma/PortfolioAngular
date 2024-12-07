import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../interface/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
private apiUrl = 'http://localhost:3000'; // Reemplaza con tu endpoint

  constructor(private http: HttpClient) {}


  sendEmail(data:Contacto): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
