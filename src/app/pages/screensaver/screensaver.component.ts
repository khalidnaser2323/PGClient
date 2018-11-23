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
  buttons: Array<{ templateType: string, cardTitle?: string, params: { name: string, pillar: string, card: string, tmp: string } }> = [];
  cards: Card[] = [];
  params: { name: string, pillar: string, card: string, tmp: string };
  templateType: string;
  timeout: any;
  showedButton: { templateType: string, cardTitle?: string, params: { name: string, pillar: string, card: string, tmp: string } };

  constructor(
    public serviceHandler: ServiceHandlerProvider,
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
    for (let pillar of this.pillars) {
      for (let card of pillar.cards) {
        for (let buttonKey in card.buttons) {
          if (card.buttons[buttonKey].payload.data) {
            this.buttons.push(
              {
                templateType: card.buttons[buttonKey].payload.templateType,
                cardTitle: card.title,
                params: {
                  name: pillar.title,
                  pillar: pillar._id,
                  card: card._id,
                  tmp: buttonKey
                }
              }
            );
          }

        }

      }
    }
    this.showedButton = this.buttons[0];
    this.timeout = setInterval(() => {
      console.log("New card is coming ");
      let randomIndex = Math.floor(Math.random() * (this.buttons.length - 1));
      this.showedButton = this.buttons[randomIndex];
    }, 5000);
  }
}
