import { Component, OnInit, Input } from '@angular/core';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.css']
})
export class ScreensaverComponent implements OnInit {
  @Input() pillars: Array<Pillar>;
  cards: Card[] = [];
  timeout: any;
  pillarId: string;
  pillarName: string;

  imagePath: string = Constants.IMAGE_PATH;
  constructor(
  ) { }

  ngOnInit() {
    console.log("Passed screen saver pillars");
    console.log(this.pillars);
    if (this.timeout) {
      clearInterval(this.timeout);
    }
    this.showCards();
  }
  async showCards() {
    this.cards = this.pillars[0].cards;
    this.pillarId = this.pillars[0]._id;
    this.pillarName = this.pillars[0].title;
    this.timeout = setInterval(() => {
      console.log("New card is coming ");
      let randomIndex = Math.floor(Math.random() * (this.pillars.length - 1));
      this.cards = this.pillars[randomIndex].cards;
      this.pillarId = this.pillars[randomIndex]._id;
      this.pillarName = this.pillars[randomIndex].title;
    }, 5000);
  }
  getComponentData(templateId: string, cardId: string) {
    let cardDetails = this.cards.find(card => { return card._id == cardId });
    return { params: { name: this.pillarName, pillar: this.pillarId, card: cardId, tmp: templateId }, templateType: cardDetails.buttons[templateId].payload.templateType }

  }
  getTempURL(tmpId: string) {
    const selectedTmp = Constants.APP_TEMPLATES.find(tmp => tmp.tempId == tmpId);
    if (selectedTmp) {
      return selectedTmp.imageURL;
    }
  }
}
