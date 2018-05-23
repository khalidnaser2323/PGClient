import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js';


interface template1
{
 
  tempDescribtion:string;
  StagePrice:string;
  percentValue:number;
}
@Component({
  selector: 'app-stages-template',
  templateUrl: './stages-template.component.html',
  styleUrls: ['./stages-template.component.css']
})
export class StagesTemplateComponent implements OnInit {
  ctx:any;
  chart=[];
  temp1:template1;
  ctx1:any;
  chart1=[];
  temp2:template1;
  ctx2:any;
  chart2=[];
  temp3:template1;
  ctx3:any;
  chart3=[];
  temp4:template1;

  @ViewChild('stage1') canvasRef: ElementRef;
  @ViewChild('stage2') canvasRef2: ElementRef;
  @ViewChild('stage3') canvasRef3: ElementRef;
  @ViewChild('stage4') canvasRef4: ElementRef;
  constructor() { 
    this.temp1=
    {
      tempDescribtion:'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
      StagePrice:'120,0000',
      percentValue:20,
    }
    this.temp2=
    {
      tempDescribtion:'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
      StagePrice:'120,0000',
      percentValue:30,
    }
    this.temp3=
    {
      tempDescribtion:'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
      StagePrice:'120,0000',
      percentValue:10,
    }
    this.temp4=
    {
      tempDescribtion:'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
      StagePrice:'120,0000',
      percentValue:40,
    }

  }

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.ctx1 = this.canvasRef2.nativeElement.getContext('2d');
    this.ctx2 = this.canvasRef3.nativeElement.getContext('2d');
    this.ctx3 = this.canvasRef4.nativeElement.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
       
        datasets: [{

          label:'percent',
          data:[this.temp1.percentValue,this.rest(this.temp1.percentValue)] ,
          backgroundColor:['rgb(255, 209, 26)','rgb(214, 214, 194)'],
          borderWidth:'15',
         
      }],
      labels: ['STAGE %','REST OF PROJECT'], 
    },
    options: {
      title: {
          display: true,
          text: 'Stage I',
          position:'bottom',
          fontSize:'30',
          fontFamily:' Courier New',
          fontColor:'rgb(255, 209, 26)'
      },
      cutoutPercentage:'70',
    }
    });
    this.chart1 = new Chart(this.ctx1, {
      type: 'doughnut',
      
      
      data: {
       
        datasets: [{

          label:'percent',
          data:[this.temp2.percentValue,this.rest(this.temp2.percentValue)] ,
          backgroundColor:['rgb(255, 133, 102)','rgb(214, 214, 194)'],
          borderWidth:'15',
         
      }],
      labels: ['STAGE %','REST OF PROJECT'], 
    },
    options: {
      title: {
          display: true,
          text: 'Stage II',
          position:'bottom',
          fontSize:'30',
          fontFamily:' Courier New',
          fontColor:'rgb(255, 133, 102)'
      },
      cutoutPercentage:'70',
    }
    });
    this.chart = new Chart(this.ctx2, {
      type: 'doughnut',
      
     
      data: {
       
        datasets: [{

          label:'percent',
          data:[this.temp3.percentValue,this.rest(this.temp3.percentValue)] ,
          backgroundColor:['rgb(0, 179, 179)','rgb(214, 214, 194)'],
          borderWidth:'15',
         
      }],
      labels: ['STAGE %','REST OF PROJECT'], 
    },
    options: {
      title: {
          display: true,
          text: 'Stage III',
          position:'bottom',
          fontSize:'30',
          fontFamily:' Courier New',
          fontColor:'rgb(0, 179, 179)'
      },
      cutoutPercentage:'70',
    }
    });
    this.chart = new Chart(this.ctx3, {
      type: 'doughnut',
      
      cutoutPercentage:0,
      data: {
       
        datasets: [{

          label:'percent',
          data:[this.temp4.percentValue,this.rest(this.temp4.percentValue)] ,
          backgroundColor:['rgb(134, 179, 0)','rgb(214, 214, 194)'],
          borderWidth:'15',
         
      }],
      labels: ['STAGE %','REST OF PROJECT'], 
    },
    options: {
      title: {
          display: true,
          text: 'Stage IV',
          position:'bottom',
          fontSize:'30',
          fontFamily:' Courier New',
          fontColor:'rgb(134, 179, 0)'
      },
      cutoutPercentage:'70',
    }
    });
   
   
      }
      rest(x:number)
      {
        return 100-x;
      }
    }
  


