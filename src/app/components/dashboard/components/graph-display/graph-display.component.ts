import {
  Component,
  Input,
  OnInit,
  ElementRef,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.scss'],
})
export class GraphDisplayComponent implements OnInit, AfterViewInit {
  @Input() chartType: any;
  @Input() chartData: any;
  @Input() chartOptions: any;
  @Input() chartTitle = '';
  @ViewChild('canvasEl') canvasEl!: ElementRef;
  constructor() {}

  ngOnInit(): void {
    Chart.register(...registerables);
  }
  ngAfterViewInit() {
    this.renderChart();
  }

  private renderChart() {
    const ctx = this.canvasEl.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: this.chartType,
      data: this.chartData,
      options: this.chartOptions,
    });
  }
}
