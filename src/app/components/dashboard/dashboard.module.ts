import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TopCardComponent } from './components/top-card/top-card.component';
import { RecentOrderComponent } from './components/recent-order/recent-order.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { GraphDisplayComponent } from './components/graph-display/graph-display.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TopCardComponent,
    RecentOrderComponent,
    NewUserComponent,
    GraphDisplayComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
