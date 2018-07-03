import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  ctx: any;
  chart = [];
  // stage:Stage;
  @Input() stage: Stage;
  colors: Array<string> = ['rgb(0, 143, 179)',
    'rgb(0, 102, 0)',
    'rgb(51, 51, 0)',
    'rgb(77, 19, 0)',
    'rgb(31, 31, 122)',
    'rgb(51, 0, 102)',
    'rgb(102, 102, 0)',
    'rgb(102, 0, 51)',
    'rgb(51, 51, 153)',
    'rgb(102, 153, 153)'];

  @ViewChild('canvas') canvasRef: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log("Passed stage from parent ");
    console.log(this.stage);
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    const thisStageColor = this.stage.color && this.stage.color != "" ? this.stage.color : this.colors[Math.floor(Math.random() * this.colors.length)];
    this.chart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          label: 'percent',
          data: [this.stage.percentValue, this.rest(this.stage.percentValue)],
          backgroundColor: [thisStageColor, 'rgb(214, 214, 194)'],
          borderWidth: '15',

        }],
        labels: ['STAGE %', 'REST OF PROJECT'],
      },
      options: {
        title: {
          display: true,
          text: this.stage.stageNumber,
          position: 'bottom',
          fontSize: '30',
          fontFamily: ' Courier New',
          fontColor: thisStageColor
        },
        cutoutPercentage: 70,
      }
    });
  }
  rest(x: number) {
    return 100 - x;
  }


}
