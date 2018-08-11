import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';
import { Location } from '@angular/common';


declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-templete7',
  templateUrl: './templete7.component.html',
  styleUrls: ['./templete7.component.css']
})
export class Templete7Component implements OnInit {
  temp: any;
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
        $('#mytable').jexcel({ data: this.temp, defaultColWidth: "300" });
        this.templateTitle = cardDetails.templates[this.templateId].title;
        this.cardTitle = cardDetails.title;
      }
    }, err => {
      console.log("Get card details error");
      console.error(err);
      window.alert("OOPS! something went wrong");
    });
  }
  backClicked() {
    this._location.back();
  }

}
