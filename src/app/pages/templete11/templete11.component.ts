import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-templete11',
  templateUrl: './templete11.component.html',
  styleUrls: ['./templete11.component.css']
})
export class Templete11Component implements OnInit {
  activePanel: string = "1";
  temp11: Temp11;
  constructor() {
    this.temp11 = {
      colEightText: "text8",
      colElevenText: "text11",
      colFiveText: "tex5",
      colFourText: "text4",
      colNineText: "text9",
      colOneHeader: "header",
      colOneText: "text 1",
      colSevenText: "text7",
      colSixText: "text6",
      colTenText: "text10",
      colThreeHeader: "header3",
      colThreeText: "text3",
      colTwelveText: "text12",
      colTwoHeader: "header 2",
      colTwoText: "text 2"
    }
  }

  ngOnInit() {
  }
  showPanel(id: string) {
    console.log("id to show:  " + id);
    this.activePanel = id;
  }

}
