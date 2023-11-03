import { Component, OnInit, Input } from '@angular/core';
import { ITopCard } from 'src/app/models/dashboard.model';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss'],
})
export class TopCardComponent implements OnInit {
  @Input() cardData!: ITopCard;
  constructor() {}

  ngOnInit(): void {}
}
