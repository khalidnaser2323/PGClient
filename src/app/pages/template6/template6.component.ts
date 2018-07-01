import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';
interface template6 {
  tempName: string,
  tempDescribtion: string,
  label: string,
  xaxisValues: string,
  yaxisValues: string
}
@Component({
  selector: 'app-template6',
  templateUrl: './template6.component.html',
  styleUrls: ['./template6.component.css']
})
export class Template6Component implements OnInit {
  ctx: any;
  chart = [];
  temp: template6;
  pillarId: string;
  cardId: string;
  templateId: string;
  @ViewChild('myCanvas') canvasRef: ElementRef;
  constructor(
    private route: ActivatedRoute,
    public serviceHandler: ServiceHandlerProvider
  ) {

    this.temp = {
      tempName: '',
      tempDescribtion: '',
      label: '',
      xaxisValues: "",
      yaxisValues: ""
    };
    this.route.params.subscribe(params => {
      console.log(params);
      this.pillarId = params.pillar;
      this.cardId = params.card;
      this.templateId = params.tmp;
      this.getCardDetails(this.pillarId, this.cardId);
    });
  }

  ngOnInit() {
  }
  getCardDetails(pillarId: string, cardId: string) {
    const url = Constants.BASE_URL + "section/" + pillarId + "/" + cardId;
    this.serviceHandler.runService(url, "GET").subscribe((cardDetails) => {
      console.log("Get card details response");
      console.log(cardDetails);
      if (cardDetails && cardDetails.templates && cardDetails.templates[this.templateId] && cardDetails.templates[this.templateId].payload && cardDetails.templates[this.templateId].payload.data) {
        this.temp = cardDetails.templates[this.templateId].payload.data;
        this.showChart();
      }
    }, err => {
      console.log("Get card details error");
      console.error(err);
      window.alert("OOPS! something went wrong");
    });
  }
  showChart() {
    const yaxix = this.temp.yaxisValues.split(",");
    const xaxis= this.temp.xaxisValues.split(",");
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.ctx.lineJoin = 'miter';
    this.chart = new Chart(this.ctx, {
      type: 'line',

      data: {
        labels: xaxis,
        datasets: [{
          label: this.temp.label,
          lineTension: '0',
          data: yaxix,
          backgroundColor: 'rgb(51, 204, 255)',
          borderColor: 'rgb(204, 204, 204)',
          borderWidth: 5
        }],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }

}
