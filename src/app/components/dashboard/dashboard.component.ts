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
  chartDataArray: any[] = [
    {
      chartType: 'line',
      chartData: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            label: 'Sales (INR)',
            data: [350, 420, 280, 550, 480, 620],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            tension: 0.4
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
      chartTitle: 'Sales Statistics',
    },
    {
      chartType: 'bar',
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Income (INR)',
            data: [1500, 1800, 2100, 1750, 2000, 2200],
            backgroundColor: '#1d56ab',
          },
          {
            label: 'Borrowed (INR)',
            data: [200, 500, 800, 600, 900, 100],
            backgroundColor: '#64b2e6',
          },
        ],
      },
      chartOptions: {
        maxBarThickness: 10,
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
      chartTitle: 'Balance Overview',
    },
    {
      chartType: 'doughnut',
      chartData: {
        labels: ['Women', 'Electonics', 'Men'],
        datasets: [
          {
            data: [120, 75, 110],
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(0, 0, 255, 0.4)',
            ],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        cutout: '80%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 12,
            },
          },
        },
      },
      chartTitle: 'Top Products',
    },
  ];

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
