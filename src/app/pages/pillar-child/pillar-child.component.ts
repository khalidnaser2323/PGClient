import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';


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
    public serviceHandler: ServiceHandlerProvider
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

}
