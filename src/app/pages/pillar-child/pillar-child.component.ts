import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pillar-child',
  templateUrl: './pillar-child.component.html',
  styleUrls: ['./pillar-child.component.css']
})
export class PillarChildComponent implements OnInit {
  pillarId: string;
  cards: Card[];
  pillarName: string;
  imagePath: string = Constants.IMAGE_PATH;

  constructor(
    private route: ActivatedRoute,
    public serviceHandler: ServiceHandlerProvider,
    public router: Router
  ) {
    this.pillarId = this.route.snapshot.paramMap.get('pillarId');
    console.log("Passed pillar id");
    console.log(this.pillarId);
    this.getPillarDetails(this.pillarId);

  }

  ngOnInit() {
  }
  getPillarDetails(pillarId: string) {
    this.serviceHandler.runService(Constants.BASE_URL + "section/" + pillarId, "GET").subscribe(response => {
      console.log("Get pillar details response");
      console.log(response);
      this.pillarName = response.title;
      if (response.cards) {
        this.cards = response.cards;
      }
    }, error => {
      console.log(error);
      window.alert("Failed to load cards")

    })
  }
  goToTemplate(pillarId: string, cardId: string, templateId: string) {
    const url = Constants.BASE_URL + "section/" + pillarId + "/" + cardId;
    this.serviceHandler.runService(url, "GET").subscribe((cardDetails) => {
      console.log("Get card details response");
      console.log(cardDetails);
      if (cardDetails && cardDetails.templates && cardDetails.templates[templateId] && cardDetails.templates[templateId].payload && cardDetails.templates[templateId].payload.templateType) {
        const path = Constants.APP_TEMPLATES.find(tmp => { return tmp.tempId == cardDetails.templates[templateId].payload.templateType }).path;
        this.router.navigate([path, { pillar: this.pillarId, card: cardId, tmp: templateId }]);
      }
    }, err => {
      console.log("Get card details error");
      console.error(err);
      window.alert("OOPS! something went wrong");
    });
  }
  onButtonClicked(clickedButtonId: string, clickedCardId: string) {
    this.goToTemplate(this.pillarId, clickedCardId, clickedButtonId);
  }

}
