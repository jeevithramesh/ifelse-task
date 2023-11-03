import { Component, OnInit, Input } from '@angular/core';
import { IRecentOrder } from 'src/app/models/dashboard.model';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss'],
})
export class RecentOrderComponent implements OnInit {
  @Input() recentOrders!: IRecentOrder[];
  constructor() {}

  ngOnInit(): void {}
}
