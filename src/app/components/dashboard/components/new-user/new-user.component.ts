import { Component, Input, OnInit } from '@angular/core';
import { INewUser } from 'src/app/models/dashboard.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  @Input() newUsers: INewUser[] = [];

  constructor() {}

  ngOnInit(): void {}
  getProgressBarClass(progress: number): string {
    if (progress >= 80) {
      return 'progress-bar-high';
    } else if (progress >= 30) {
      return 'progress-bar-medium';
    } else {
      return 'progress-bar-low';
    }
  }

  getProgressTextClass(progress: number): string {
    if (progress >= 80) {
      return 'progress-text-high';
    } else if (progress >= 30) {
      return 'progress-text-medium';
    } else {
      return 'progress-text-low';
    }
  }


}
