import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

interface template9
{
 chartData:object[]
}
@Component({
  selector: 'app-template9',
  templateUrl: './template9.component.html',
  styleUrls: ['./template9.component.css']
})
export class Template9Component implements OnInit {
  ctx:any;
  chart=[];
 
  @ViewChild('canvas') canvasRef: ElementRef;
  constructor() {
    
    
   }

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: 'pie',
      data: {
       
     datasets: [{
          data:['40','20','30'] ,
          backgroundColor:['rgb(51, 153, 255)','rgb(214, 214, 194)','rgb(124, 124, 80)'],
          borderWidth:'7',     
      }],

      labels: ['leaderShip','PSRH','HSE'], 
      
  },
  options: {
    title: {
      display: true,
      text: 'Custom Chart Title',
      fontSize:20,
  },
  
    responsive:true,
    responsiveAnimationDuration:5,
    
    legend : {
      display:'true',
          position:'bottom',
          
          labels: {
            boxWidth:70,
            fontSize:20,
            fontColor:"rgb(0, 0, 0)",
            tooltips :{
              callbacks: {
                labelColor:' rgb(71, 90, 255)',
                
              },
             
                },
                },
               
              }
              },
           
     
  });
}
}


