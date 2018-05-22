import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

interface template5
{
  tempName:string;
  tempDescribtion:string;
  label1:string;
  label2:string;
  labe1Names:string[];
  y1Values:string[];
  y2Values:string[];

}
@Component({
  selector: 'app-team-charter',
  templateUrl: './team-charter.component.html',
  styleUrls: ['./team-charter.component.css']
})
export class TeamCharterComponent implements OnInit {
  ctx:any;
  chart=[];
  temp:template5;
  color=["rgb(0, 102, 102)","rgb(0, 102, 102)"
  ,"rgb(0, 102, 102)","rgb(0, 102, 102)","rgb(0, 102, 102)"
  ,"rgb(0, 102, 102)","rgb(0, 102, 102)"];
 
  x:number;
  @ViewChild('myCanvas') canvasRef: ElementRef;
  constructor() {

    this.temp={
      tempName:'Replenish place appear',
    tempDescribtion:'Make. Be. Theyre. Is abundantly earth Replenish place appear so evening day seas set cattle created whales form  underTheyre youre fly appear there grass seasons day gathering let given it hath.',
    label1:'team direction',
    label2:'Established boundaries',
    labe1Names:['2006','2007','2008','2009','2010','2011','2012'],
    y1Values:['40','50','30','40','70','60','50'],
    y2Values:['30','60','40','50','80','70','60']
    };
   }

  ngOnInit() {
    this.x=0;
    
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: 'bar',
    data: {
      labels:this.temp.labe1Names,
        datasets: [{
        label:this.temp.label1 , 
         backgroundColor:["rgb(0, 230, 184,0.2)","rgb(0, 230, 184,0.2)","rgb(0, 230, 184,0.2)","rgb(0, 230, 184,0.2)",
         "rgb(0, 230, 184,0.2)","rgb(0, 230, 184,0.2)","rgb(0, 230, 184,0.2)"],
         borderColor:this.color,
         borderWidth:1, 
         data:this.temp.y1Values,
        },
        {
          label:this.temp.label2 , 
          backgroundColor:["rgb(255, 153, 255,0.2)","rgb(255, 153, 255,0.2)"
          ,"rgb(255, 153, 255,0.2)","rgb(255, 153, 255,0.2)","rgb(255, 153, 255,0.2)"
          ,"rgb(255, 153, 255,0.2)","rgb(255, 153, 255,0.2)"
        ],
          borderColor:["rgb(255, 51, 153)","rgb(255, 51, 153)"
          ,"rgb(255, 51, 153)","rgb(255, 51, 153)","rgb(255, 51, 153)"
          ,"rgb(255, 51, 153)","rgb(255, 51, 153)"
        ],
          borderWidth:1, 
          data:this.temp.y2Values
          }
      ]
    },
 
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

  }
  

}
