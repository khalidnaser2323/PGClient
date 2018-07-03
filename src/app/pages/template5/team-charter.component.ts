import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';
import { Location } from '@angular/common';

interface template5 {
  tempName: string,
  tempDescribtion: string,
  label1: string,
  label2: string,
  xaxisValues: string,
  y1Values: string,
  y2Values: string

}
@Component({
  selector: 'app-team-charter',
  templateUrl: './team-charter.component.html',
  styleUrls: ['./team-charter.component.css']
})
export class TeamCharterComponent implements OnInit {
  ctx: any;
  chart = [];
  temp: template5;
  length: number;
  x: number;
  @ViewChild('myCanvas') canvasRef: ElementRef;
  pillarId: string;
  cardId: string;
  templateId: string;
  pillarName: string;
  cardTitle: string;
  constructor(
    private route: ActivatedRoute,
    public serviceHandler: ServiceHandlerProvider,
    private _location: Location

  ) {

    this.temp = {
      tempName: '',
      tempDescribtion: "",
      label1: "",
      label2: "",
      y1Values: "",
      y2Values: "",
      xaxisValues: ""
    };
    this.route.params.subscribe(params => {
      console.log(params);
      this.pillarId = params.pillar;
      this.cardId = params.card;
      this.templateId = params.tmp;
      this.pillarName = params.name;
      this.getCardDetails(this.pillarId, this.cardId);
    });
  }

  ngOnInit() {

  }
  colorloop(lenght: number, color: string) {
    let colors: string[] = [];
    for (let i = 0; i < lenght; i++) {
      colors.push(color);
    }
    return colors;
  }
  getCardDetails(pillarId: string, cardId: string) {
    const url = Constants.BASE_URL + "section/" + pillarId + "/" + cardId;
    this.serviceHandler.runService(url, "GET").subscribe((cardDetails) => {
      console.log("Get card details response");
      console.log(cardDetails);
      if (cardDetails && cardDetails.templates && cardDetails.templates[this.templateId] && cardDetails.templates[this.templateId].payload && cardDetails.templates[this.templateId].payload.data) {
        this.temp = cardDetails.templates[this.templateId].payload.data;
        this.cardTitle = cardDetails.title;
        this.showChart();
      }
    }, err => {
      console.log("Get card details error");
      console.error(err);
      window.alert("OOPS! something went wrong");
    });
  }
  showChart() {
    this.x = 0;
    const xaxisValues = this.temp.xaxisValues.split(",");
    const y1 = this.temp.y1Values.split(",");
    const y2 = this.temp.y2Values.split(",");
    this.length = this.temp.y1Values.length;
    this.ctx = this.canvasRef.nativeElement.getContext('2d');

    this.chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: xaxisValues,
        datasets: [{
          label: this.temp.label1,
          backgroundColor: this.colorloop(this.length, 'rgb(0, 230, 184,0.2)'),
          borderColor: this.colorloop(this.length, 'rgb(0, 102, 102)'),
          borderWidth: 1,
          data: y1,
        },
        {
          label: this.temp.label2,
          backgroundColor: this.colorloop(this.length, 'rgb(255, 153, 255,0.2)'),
          borderColor: this.colorloop(this.length, 'rgb(255, 51, 153)'),

          borderWidth: 1,
          data: y2
        }
        ]
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
  backClicked() {
    this._location.back();
  }
}
