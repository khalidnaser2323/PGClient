import { Component, OnInit } from '@angular/core';
import { Card } from '../../Models/PillarDetailsCardModel';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pillar-child',
  templateUrl: './pillar-child.component.html',
  styleUrls: ['./pillar-child.component.css']
})
export class PillarChildComponent implements OnInit {
  pillarName: string;
  cards: Card[];

  constructor(private route: ActivatedRoute) {
    this.pillarName = this.route.snapshot.paramMap.get('pillarName');;
    this.cards = [
      new Card("Card1", "Description of card 1", "img/img1.png", [{ buttonName: "Button1", buttonTemplate: "temp" }]),
      new Card("Card2", "Description of card 2", "img/img2.png", [{ buttonName: "Button1", buttonTemplate: "temp" }, { buttonName: "Button2", buttonTemplate: "temp" }]),
      new Card("Card3", "Description of card 3", "img/img3.png", [{ buttonName: "Button1", buttonTemplate: "temp" }, { buttonName: "Button2", buttonTemplate: "temp" }, { buttonName: "Button3", buttonTemplate: "temp" }]),
      new Card("Card4", "Description of card 4", "img/img1.png", [{ buttonName: "Button1", buttonTemplate: "temp" }, { buttonName: "Button2", buttonTemplate: "temp" }, { buttonName: "Button3", buttonTemplate: "temp" }]),
      new Card("Card5", "Description of card 5", "img/img2.png", [{ buttonName: "Button1", buttonTemplate: "temp" }, { buttonName: "Button2", buttonTemplate: "temp" }])
    ];
  }

  ngOnInit() {
  }

}
