import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stages-template',
  templateUrl: './stages-template.component.html',
  styleUrls: ['./stages-template.component.css']
})
export class StagesTemplateComponent implements OnInit {

  stages: Array<Stage>;
  constructor() {
    this.stages =

      [{
        tempDescribtion: 'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
        StagePrice: '120,0000',
        percentValue: 40,
        color: 'rgb(255, 133, 102)',
        stageNumber: '1'
      },
      {
        tempDescribtion: 'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
        StagePrice: '120,0000',
        percentValue: 50,
        color: 'rgb(0, 0, 153)',
        stageNumber: '2'
      },
      {
        tempDescribtion: 'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
        StagePrice: '120,0000',
        percentValue: 60,
        color: 'rgb(128, 0, 0)',
        stageNumber: '3'
      },
      {
        tempDescribtion: 'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
        StagePrice: '120,0000',
        percentValue: 40,
        color: 'rgb(51, 0, 102)',
        stageNumber: '4'
      },
      {
        tempDescribtion: 'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
        StagePrice: '120,0000',
        percentValue: 80,
        color: 'rgb(0, 51, 0)',
        stageNumber: '5'
      },
      {
        tempDescribtion: 'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
        StagePrice: '120,0000',
        percentValue: 20,
        color: 'rgb(0, 102, 255)',
        stageNumber: '6'
      }
      ]

  }
  ngOnInit() {

  }
}



