import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TEstService {
  constructor(private http: HttpClient) {}

  getALlData() {
    return this.http.get<any>(
      environment.baseUrl + 'WeatherForecast');
  }
  
}
