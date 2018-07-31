import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';
import { Location } from '@angular/common';

interface template12 {

  tempName: string,
  tempDescribtion: string,
  label: string,
  xaxisValues: string,
  yaxisValues: string,
  tableData?: any
}
@Component({
  selector: 'app-templete12',
  templateUrl: './templete12.component.html',
  styleUrls: ['./templete12.component.css']
})
export class Templete12Component implements OnInit {
  ctx: any;
  chart = [];
  temp: template12;
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
    this.temp =
      {
        label: '',
        xaxisValues: '',
        yaxisValues: '',
        tempDescribtion: "",
        tempName: "",
        tableData: [
          {
            rowID: '0', tableHeader1: [''], tableHeader2: [''], tableHeader3: [''], tableHeader4: ['']
            , tableHeader5: [''], tableHeader6: [''], tableHeader7: ['']
          },
          {
            rowId: '1', value1: '', value2: '', value3: ''
            , value4: '', value5: '', value6: ''
            , value7: '', value8: '', value9: ''
          },
          {
            rowId: '2', value1: '', value2: '', value3: ''
            , value4: '', value5: '', value6: ''
            , value7: '', value8: '', value9: ''
          },
          {
            rowId: '3', value1: '', value2: '', value3: ''
            , value4: '', value5: '', value6: ''
            , value7: '', value8: '', value9: ''
          }

        ]
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
  getCardDetails(pillarId: string, cardId: string) {
    const url = Constants.BASE_URL + "section/" + pillarId + "/" + cardId;
    this.serviceHandler.runService(url, "GET").subscribe((cardDetails) => {
      console.log("Get card details response");
      console.log(cardDetails);
      if (cardDetails && cardDetails.templates && cardDetails.templates[this.templateId] && cardDetails.templates[this.templateId].payload && cardDetails.templates[this.templateId].payload.data) {
        this.temp = cardDetails.templates[this.templateId].payload.data;
        this.cardTitle = cardDetails.title;
        this.templateTitle = cardDetails.templates[this.templateId].title;
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
    const xaxis = this.temp.xaxisValues.split(",");
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: xaxis,
        datasets: [{
          label: 'Years',
          backgroundColor: ['rgb(0, 77, 77,0.2)', 'rgb(0, 153, 153,0.2)', 'rgb(0, 230, 230,0.2)',
            'rgb(0, 51, 31,0.2)', 'rgb(0, 26, 15,0.2)', 'rgb(77, 255, 136,0.2)',
            'rgb(0, 204, 68,0.2)', 'rgb(0, 153, 51,0.2)', 'rgb(102, 153, 153,0.2)',
            'rgb(148, 184, 184,0.2)', 'rgb(61, 92, 92,0.2)', 'rgb(41, 61, 61,0.2)'],
          borderColor: 'rgb(41, 61, 61,0.2)',
          borderWidth: 1,
          data: yaxix,
        },

        ]
      },

      options: {
        title: {
          display: true,
          text: 'Years',
          fontSize: 20,
        },
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
