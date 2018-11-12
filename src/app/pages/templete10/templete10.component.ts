import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';
import { Location } from '@angular/common';

@Component({
  selector: 'app-templete10',
  templateUrl: './templete10.component.html',
  styleUrls: ['./templete10.component.css']
})
export class Templete10Component implements OnInit {
  @Input() params: { name: string, pillar: string, card: string, tmp: string };
  @Input() zoomContent: boolean;

  temp: Temp10;
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
      overViewTitle: "",
      stages: [
      ]
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
  getCardDetails(pillarId: string, cardId: string) {
    const url = Constants.BASE_URL + "section/" + pillarId + "/" + cardId;
    this.serviceHandler.runService(url, "GET").subscribe((cardDetails) => {
      console.log("Get card details response");
      console.log(cardDetails);
      if (cardDetails && cardDetails.templates && cardDetails.templates[this.templateId] && cardDetails.templates[this.templateId].payload && cardDetails.templates[this.templateId].payload.data) {
        this.temp = cardDetails.templates[this.templateId].payload.data;
        this.templateTitle = cardDetails.templates[this.templateId].title;
        this.cardTitle = cardDetails.title;
        // this.showChart();
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
