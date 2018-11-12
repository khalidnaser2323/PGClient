import { Component, OnInit, Input } from '@angular/core';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-screensaver',
  templateUrl: './screensaver.component.html',
  styleUrls: ['./screensaver.component.css']
})
export class ScreensaverComponent implements OnInit {
  @Input() pillars: Array<Pillar>;
  buttons: any;
  cards: Card[] = [];
  params: { name: string, pillar: string, card: string, tmp: string };
  data: any = {};
  templateType: string;
  timeout: any;

  constructor(
    public serviceHandler: ServiceHandlerProvider,
  ) { }

  ngOnInit() {
    console.log("Passed screen saver pillars");
    console.log(this.pillars);
    this.showCards();
  }
  async showCards() {
    this.timeout = setInterval(() => {
      console.log("New card is coming !!");
      for (let pillar of this.pillars) {
        for (let card of pillar.cards) {
          for (let buttonKey in card.buttons) {
            debugger;
            this.templateType = card.buttons[buttonKey].payload.templateType;
            this.params = {
              name: pillar.title,
              pillar: pillar._id,
              card: card._id,
              tmp: buttonKey
            }
          }
        }
      }

    }, 3000);
  }
}
