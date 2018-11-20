import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
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
  y2Values: string,
  label3?: string,
  y3Values?: string,
  linearVariableLabel?: string,
  linearVariableData?: string,
  color1?: string,
  color2?: string,
  color3?: string,
  linearColor?: string

}
@Component({
  selector: 'app-team-charter',
  templateUrl: './team-charter.component.html',
  styleUrls: ['./team-charter.component.css']
})
export class TeamCharterComponent implements OnInit {
  @Input() params: { name: string, pillar: string, card: string, tmp: string };
  @Input() zoomContent: boolean;

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
  templateTitle: string;
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
      xaxisValues: "",
      label3: "",
      y3Values: "",
      linearVariableData: "",
      linearVariableLabel: "",
      color1: "red",
      color2: "red",
      color3: "red",
      linearColor: "red"
    };
    // this.route.params.subscribe(params => {
    //   console.log(params);
    //   this.pillarId = params.pillar;
    //   this.cardId = params.card;
    //   this.templateId = params.tmp;
    //   this.pillarName = params.name;
    //   this.getCardDetails(this.pillarId, this.cardId);
    // });
  }

  ngOnInit() {
    this.pillarId = this.params.pillar;
    this.cardId = this.params.card;
    this.templateId = this.params.tmp;
    this.pillarName = this.params.name;
    this.getCardDetails(this.pillarId, this.cardId);
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
        this.templateTitle = cardDetails.templates[this.templateId].title;
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
    const y3 = this.temp.y3Values.split(",");
    this.length = this.temp.y1Values.length;
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    let datasetsForChart = [];
    if (this.temp.label1 != "" && this.temp.y1Values != "") {
      datasetsForChart.push({
        label: this.temp.label1,
        backgroundColor: this.temp.color1,
        borderColor: this.temp.color1,
        borderWidth: 1,
        data: y1,
      });

    }
    if (this.temp.label2 != "" && this.temp.y2Values != "") {
      datasetsForChart.push({
        label: this.temp.label2,
        backgroundColor: this.temp.color2,
        borderColor: this.temp.color2,

        borderWidth: 1,
        data: y2
      });
    }
    if (this.temp.label3 != "" && this.temp.y3Values != "") {
      datasetsForChart.push({
        label: this.temp.label3,
        backgroundColor: this.temp.color3,
        borderColor: this.temp.color3,
        borderWidth: 1,
        data: y3
      });
    }
    if (this.temp.linearVariableLabel != "" && this.temp.linearVariableData != null) {
      const y4 = this.temp.linearVariableData.split(",");
      datasetsForChart.push({
        label: this.temp.linearVariableLabel,
        borderColor: this.temp.linearColor,
        backgroundColor: this.temp.linearColor,
        data: y4,
        fill: false,
        type: 'line'
      });
    }
    this.chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: xaxisValues,
        datasets: datasetsForChart
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
