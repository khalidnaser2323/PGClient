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
  colors: Array<string> = ['red', 'blue', 'yellow', 'orange', 'grey', 'pink', 'chocolate', 'lime', 'khaki', 'purple'];

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
