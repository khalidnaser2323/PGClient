import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';
@Component({
  selector: 'app-team-template',
  templateUrl: './team-template.component.html',
  styleUrls: ['./team-template.component.css']
})
export class TeamTemplateComponent implements OnInit {
  pillarId: string;
  cardId: string;
  templateId: string;
  TeamMembers: TeamModel[];
  imagePath: string = Constants.IMAGE_PATH;
  constructor(
    private route: ActivatedRoute,
    public serviceHandler: ServiceHandlerProvider
  ) {
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
        this.TeamMembers = cardDetails.templates[this.templateId].payload.data;
      }
    }, err => {
      console.log("Get card details error");
      console.error(err);
      window.alert("OOPS! something went wrong");
    });
  }

}
