import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';

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
  pillarId: string;
  cardId: string;
  templateId: string;
  constructor(
    private route: ActivatedRoute,
    public serviceHandler: ServiceHandlerProvider
  ) {
    this.chartTemp =
      {
        percentageData: [],
        color: null,
        labels: [],
        title: '',

      }
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
        this.chartTemp = cardDetails.templates[this.templateId].payload.data;
        this.showChart();
      }
    }, err => {
      console.log("Get card details error");
      console.error(err);
      window.alert("OOPS! something went wrong");
    });
  }
  showChart() {
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


