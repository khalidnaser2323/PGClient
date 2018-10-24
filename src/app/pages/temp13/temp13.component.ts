import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';
import { Location } from '@angular/common';


interface template9 {
  percentageData: string[];
  color: string[];
  labels: string[];
  title: string;
}

@Component({
  selector: 'app-temp13',
  templateUrl: './temp13.component.html',
  styleUrls: ['./temp13.component.css']
})
export class Temp13Component implements OnInit {
  chartTemp: Array<template9>;
  @ViewChild('firstCanvas') canvasRef1: ElementRef;
  @ViewChild('secondCanvas') canvasRef2: ElementRef;
  @ViewChild('thirdCanvas') canvasRe3: ElementRef;
  pillarId: string;
  cardId: string;
  templateId: string;
  pillarName: string;
  cardTitle: string;
  templateTitle: string;
  ctx1: any;
  ctx2: any;
  ctx3: any;
  firstChart = [];
  secondChart = [];
  thirdChart = [];

  constructor(
    private route: ActivatedRoute,
    public serviceHandler: ServiceHandlerProvider,
    private _location: Location

  ) {
    this.chartTemp = [];
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
        this.chartTemp = cardDetails.templates[this.templateId].payload.data;
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
    this.ctx1 = this.canvasRef1.nativeElement.getContext('2d');
    this.firstChart = new Chart(this.ctx1, {
      type: 'pie',
      data: {

        datasets: [{
          data: this.chartTemp[0].percentageData,
          backgroundColor: this.chartTemp[0].color ? this.chartTemp[0].color : ['rgb(0, 143, 179)',
            'rgb(0, 102, 0)',
            'rgb(51, 51, 0)',
            'rgb(77, 19, 0)',
            'rgb(31, 31, 122)',
            'rgb(51, 0, 102)',
            'rgb(102, 102, 0)',
            'rgb(102, 0, 51)',
            'rgb(51, 51, 153)',
            'rgb(102, 153, 153)'],
          borderWidth: '7',
        }],

        labels: this.chartTemp[0].labels,

      },
      options: {
        title: {
          display: true,
          text: this.chartTemp[0].title,
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
    this.ctx2 = this.canvasRef2.nativeElement.getContext('2d');
    this.secondChart = new Chart(this.ctx2, {
      type: 'pie',
      data: {

        datasets: [{
          data: this.chartTemp[1].percentageData,
          backgroundColor: this.chartTemp[1].color ? this.chartTemp[1].color : ['rgb(0, 143, 179)',
            'rgb(0, 102, 0)',
            'rgb(51, 51, 0)',
            'rgb(77, 19, 0)',
            'rgb(31, 31, 122)',
            'rgb(51, 0, 102)',
            'rgb(102, 102, 0)',
            'rgb(102, 0, 51)',
            'rgb(51, 51, 153)',
            'rgb(102, 153, 153)'],
          borderWidth: '7',
        }],

        labels: this.chartTemp[1].labels,

      },
      options: {
        title: {
          display: true,
          text: this.chartTemp[1].title,
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
    this.ctx3 = this.canvasRe3.nativeElement.getContext('2d');
    this.thirdChart = new Chart(this.ctx3, {
      type: 'pie',
      data: {

        datasets: [{
          data: this.chartTemp[2].percentageData,
          backgroundColor: this.chartTemp[2].color ? this.chartTemp[2].color : ['rgb(0, 143, 179)',
            'rgb(0, 102, 0)',
            'rgb(51, 51, 0)',
            'rgb(77, 19, 0)',
            'rgb(31, 31, 122)',
            'rgb(51, 0, 102)',
            'rgb(102, 102, 0)',
            'rgb(102, 0, 51)',
            'rgb(51, 51, 153)',
            'rgb(102, 153, 153)'],
          borderWidth: '7',
        }],

        labels: this.chartTemp[2].labels,

      },
      options: {
        title: {
          display: true,
          text: this.chartTemp[2].title,
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
  backClicked() {
    this._location.back();
  }

}
