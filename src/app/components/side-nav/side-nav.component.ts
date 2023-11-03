import { Component, OnInit, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IRoute {
  icon: IconProp;
  url: string;
  name: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Input() sideNavOpened = false;
  availableRoutes: IRoute[] = [
    { icon: 'cube', url: '/', name: 'Home' },
    { icon: 'chart-bar', url: '/', name: 'Analytics' },
    { icon: 'plus-square', url: '/', name: 'Users' },
    { icon: 'check', url: '/', name: 'Profile' },
    { icon: 'cog', url: '/', name: 'Settings' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
