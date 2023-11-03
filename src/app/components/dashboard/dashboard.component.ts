import { Component, OnInit } from '@angular/core';
import { IDashboardData } from 'src/app/models/dashboard.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashBoardData!: IDashboardData;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashboardData().subscribe({
      next: (data: IDashboardData) => {
        this.dashBoardData = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
