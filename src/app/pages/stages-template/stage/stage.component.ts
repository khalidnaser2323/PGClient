import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js';


interface Stage
{
 
  tempDescribtion:string;
  StagePrice:string;
  percentValue:number;
  color:string,
  stageNumber:string;
}
@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  ctx:any;
  chart=[];
  stage:Stage;
  @ViewChild('stage') canvasRef: ElementRef;
  constructor() {

    this.stage=
    {
      tempDescribtion:'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
      StagePrice:'120,0000',
      percentValue:40,
      color:'rgb(255, 133, 102)',
      stageNumber:'1',
    }

   }

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: 'doughnut',
      
      cutoutPercentage:0,
      data: {
       
        datasets: [{

          label:'percent',
          data:[this.stage.percentValue,this.rest(this.stage.percentValue)] ,
          backgroundColor:[this.stage.color,'rgb(214, 214, 194)'],
          borderWidth:'15',
         
      }],
      labels: ['STAGE %','REST OF PROJECT'], 
    },
    options: {
      title: {
          display: true,
          text:'Stage'+this.stage.stageNumber,
          position:'bottom',
          fontSize:'30',
          fontFamily:' Courier New',
          fontColor:this.stage.color
      },
      cutoutPercentage:70,
    }
    });
  }
  rest(x:number)
  {
    return 100-x;
  }

}
