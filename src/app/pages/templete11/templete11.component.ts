import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';


@Component({
  selector: 'app-templete11',
  templateUrl: './templete11.component.html',
  styleUrls: ['./templete11.component.css']
})
export class Templete11Component implements OnInit {
  activePanel: string = "1";
  temp11: Temp11;
  pillarId: string;
  cardId: string;
  templateId: string;
  pillarName: string;
  cardTitle: string;
  constructor(
    private route: ActivatedRoute,
    public serviceHandler: ServiceHandlerProvider
  ) {
    this.temp11 = {
      colEightText: "",
      colElevenText: "",
      colFiveText: "",
      colFourText: "",
      colNineText: "",
      colOneHeader: "",
      colOneText: "",
      colSevenText: "",
      colSixText: "",
      colTenText: "",
      colThreeHeader: "",
      colThreeText: "",
      colTwelveText: "",
      colTwoHeader: "",
      colTwoText: ""
    }
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
  showPanel(id: string) {
    console.log("id to show:  " + id);
    this.activePanel = id;
  }
  getCardDetails(pillarId: string, cardId: string) {
    const url = Constants.BASE_URL + "section/" + pillarId + "/" + cardId;
    this.serviceHandler.runService(url, "GET").subscribe((cardDetails) => {
      console.log("Get card details response");
      console.log(cardDetails);
      if (cardDetails && cardDetails.templates && cardDetails.templates[this.templateId] && cardDetails.templates[this.templateId].payload && cardDetails.templates[this.templateId].payload.data) {
        this.temp11 = cardDetails.templates[this.templateId].payload.data;
        this.cardTitle = cardDetails.title;
      }
    }, err => {
      console.log("Get card details error");
      console.error(err);
      window.alert("OOPS! something went wrong");
    });
  }

}
