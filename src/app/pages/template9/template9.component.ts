import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

interface template9 {
  percentageData: string[];
  color: string[];
  labels: string[];
  title: string;
}
@Component({
  selector: 'app-template9',
  templateUrl: './template9.component.html',
  styleUrls: ['./template9.component.css']
})
export class Template9Component implements OnInit {
  ctx: any;
  chart = [];
  chartTemp: template9;
  @ViewChild('canvas') canvasRef: ElementRef;
  constructor() {
    this.chartTemp =
      {
        percentageData: ['40', '20', '30'],
        color: null,
        labels: ['leaderShip', 'PSRH', 'HSE'],
        title: 'Custom Chart Title',

      }
  }

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: 'pie',
      data: {

        datasets: [{
          data: this.chartTemp.percentageData,
          backgroundColor: this.chartTemp.color ? this.chartTemp.color : ['red', 'blue', 'yellow', 'orange', 'grey', 'pink', 'chocolate', 'lime', 'khaki', 'purple'],
          borderWidth: '7',
        }],

        labels: this.chartTemp.labels,

      },
      options: {
        title: {
          display: true,
          text: this.chartTemp.title,
          fontSize: 20,
        },

        responsive: true,
        responsiveAnimationDuration: 5,

        legend: {
          display: 'true',
          position: 'bottom',

          labels: {
            boxWidth: 70,
            fontSize: 20,
            fontColor: "rgb(0, 0, 0)",
            tooltips: {
              callbacks: {
                labelColor: ' rgb(71, 90, 255)',

              },

            },
          },

        }
      },


    });
  }
}


