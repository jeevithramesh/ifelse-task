import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDashboardData } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboardData() {
    return this.http.get<IDashboardData>(
      'https://1.api.fy23ey05.careers.ifelsecloud.com'
    );
  }
}
