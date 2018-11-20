import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PhotoTmpComponent } from '../photo-tmp/photo-tmp.component';
import { GeneralPopUpComponent } from '../general-pop-up/general-pop-up.component';


declare var jquery: any;
declare var $: any;
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
  tableRows: any;
  rowColumns: any;
  selectedTmpURL: string;
  mousetimeout: any;
  screensaver_active = false;
  screeSaverPillars: Array<Pillar>;
  constructor(
    private route: ActivatedRoute,
    public serviceHandler: ServiceHandlerProvider,
    public router: Router,
    public dialog: MatDialog,
  ) {
    this.pillarId = this.route.snapshot.paramMap.get('pillarId');
    console.log("Passed pillar id");
    console.log(this.pillarId);
    this.getPillarDetails(this.pillarId);

  }
  getTempURL(tmpId: string) {
    const selectedTmp = Constants.APP_TEMPLATES.find(tmp => tmp.tempId == tmpId);
    if (selectedTmp) {
      return selectedTmp.imageURL;
    }
  }
  ngOnInit() {
    this.getPillars();
    $(document).unbind('mousemove');

    $(document).mousemove(() => {
      console.log("Mouse move detected!");
      clearInterval(this.mousetimeout);

      if (this.screensaver_active) {
        this.stop_screensaver();
      }

      this.mousetimeout = setInterval(() => {
        console.log("Set interval is called");
        this.show_screensaver();
      }, 60000); // 5 secs			
    });
  }
  async getPillarDetails(pillarId: string) {
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
  goToTemplate(pillarId: string, cardId: string, templateId: string, clickedCardTitle: string) {
    const url = Constants.BASE_URL + "section/" + pillarId + "/" + cardId;
    this.serviceHandler.runService(url, "GET").subscribe((cardDetails) => {
      console.log("Get card details response");
      console.log(cardDetails);
      if (cardDetails && cardDetails.templates && cardDetails.templates[templateId] && cardDetails.templates[templateId].payload && cardDetails.templates[templateId].payload.templateType) {
        if (cardDetails.templates[templateId].payload.templateType == "14") {

          let dialogRef = this.dialog.open(PhotoTmpComponent, {
            width: "95%",
            height: "95%",
            maxHeight: "100%",
            maxWidth: "100%",
            data: { imageString: cardDetails.templates[templateId].payload.data }
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog is closed');
          });
        }
        else {
          // const path = Constants.APP_TEMPLATES.find(tmp => { return tmp.tempId == cardDetails.templates[templateId].payload.templateType }).path;
          // this.router.navigate([path, { name: this.pillarName, pillar: this.pillarId, card: cardId, tmp: templateId }]);
          let dialogRef = this.dialog.open(GeneralPopUpComponent, {
            width: "95%",
            height: "95%",
            maxHeight: "100%",
            maxWidth: "100%",
            data: { params: { name: this.pillarName, pillar: this.pillarId, card: cardId, tmp: templateId }, templateType: cardDetails.templates[templateId].payload.templateType, clickedCardTitle: clickedCardTitle }
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog is closed');
          });
        }
      }
    }, err => {
      console.log("Get card details error");
      console.error(err);
      window.alert("OOPS! something went wrong");
    });
  }
  onButtonClicked(clickedButtonId: string, clickedCardId: string, clickedCardTitle: string) {
    this.goToTemplate(this.pillarId, clickedCardId, clickedButtonId, clickedCardTitle);
  }
  getComponentData(templateId: string, cardId: string) {
    let cardDetails = this.cards.find(card => { return card._id == cardId });
    return { params: { name: this.pillarName, pillar: this.pillarId, card: cardId, tmp: templateId }, templateType: cardDetails.buttons[templateId].payload.templateType }

  }
  async show_screensaver() {
    console.log("Show screen saver is called");
    await this.getPillarDetails(this.pillarId);
    $('#screensaver').fadeIn();
    this.screensaver_active = true;

  }

  stop_screensaver() {
    console.log("stop screen saver is called");
    $('#screensaver').fadeOut();
    this.screensaver_active = false;
  }

  getPillars() {
    this.serviceHandler.runService(Constants.BASE_URL + "section/list", "GET").subscribe((res: Array<Pillar>) => {
      console.log("Get pillars response");
      console.log(res);
      this.screeSaverPillars = res;
      this.getCards();
    }, err => {
      console.log("Upload image string error");
      console.error(err);
      window.alert("Error in getting pillars");
    })
  }
  async getCards() {
    for (let pillar of this.screeSaverPillars) {
      await this.getScreeSaverPillarDetails(pillar);
    }

  }
  async getScreeSaverPillarDetails(pillar: Pillar) {
    this.serviceHandler.runService(Constants.BASE_URL + "section/" + pillar._id, "GET").subscribe(response => {
      console.log("Get pillar details response");
      console.log(response);
      pillar.cards = response.cards;
      console.log("Cards after update");
      console.log(this.screeSaverPillars);

    }, error => {
      console.log(error);
      window.alert("Failed to load cards")

    })
  }
}
