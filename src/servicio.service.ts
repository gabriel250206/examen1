import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiUrl = 'https://zenquotes.io/api/random';
  constructor(private http:HttpClient) { }
}
