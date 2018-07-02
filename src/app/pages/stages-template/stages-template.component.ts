import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-stages-template',
  templateUrl: './stages-template.component.html',
  styleUrls: ['./stages-template.component.css']
})
export class StagesTemplateComponent implements OnInit {

  stages: Array<Stage>;
  pillarId: string;
  cardId: string;
  templateId: string;
  pillarName: string;
  cardTitle: string;
  constructor(
    private route: ActivatedRoute,
    public serviceHandler: ServiceHandlerProvider
  ) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.pillarId = params.pillar;
      this.cardId = params.card;
      this.templateId = params.tmp;
      this.pillarName = params.name;
      this.getCardDetails(this.pillarId, this.cardId);
    });
    // this.stages =

    //   [{
    //     tempDescribtion: 'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
    //     StagePrice: '120,0000',
    //     percentValue: 40,
    //     color: 'rgb(255, 133, 102)',
    //     stageNumber: '1'
    //   },
    //   {
    //     tempDescribtion: 'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
    //     StagePrice: '120,0000',
    //     percentValue: 50,
    //     color: 'rgb(0, 0, 153)',
    //     stageNumber: '2'
    //   },
    //   {
    //     tempDescribtion: 'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
    //     StagePrice: '120,0000',
    //     percentValue: 60,
    //     color: 'rgb(128, 0, 0)',
    //     stageNumber: '3'
    //   },
    //   {
    //     tempDescribtion: 'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
    //     StagePrice: '120,0000',
    //     percentValue: 40,
    //     color: 'rgb(51, 0, 102)',
    //     stageNumber: '4'
    //   },
    //   {
    //     tempDescribtion: 'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
    //     StagePrice: '120,0000',
    //     percentValue: 80,
    //     color: 'rgb(0, 51, 0)',
    //     stageNumber: '5'
    //   },
    //   {
    //     tempDescribtion: 'Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.',
    //     StagePrice: '120,0000',
    //     percentValue: 20,
    //     color: 'rgb(0, 102, 255)',
    //     stageNumber: '6'
    //   }
    //   ]

  }
  ngOnInit() {

  }
  getCardDetails(pillarId: string, cardId: string) {
    const url = Constants.BASE_URL + "section/" + pillarId + "/" + cardId;
    this.serviceHandler.runService(url, "GET").subscribe((cardDetails) => {
      console.log("Get card details response");
      console.log(cardDetails);
      if (cardDetails && cardDetails.templates && cardDetails.templates[this.templateId] && cardDetails.templates[this.templateId].payload && cardDetails.templates[this.templateId].payload.data) {
        this.stages = cardDetails.templates[this.templateId].payload.data;
        this.cardTitle = cardDetails.title;
      }
    }, err => {
      console.log("Get card details error");
      console.error(err);
      window.alert("OOPS! something went wrong");
    });
  }
}



