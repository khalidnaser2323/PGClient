import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templete10',
  templateUrl: './templete10.component.html',
  styleUrls: ['./templete10.component.css']
})
export class Templete10Component implements OnInit {

  temp: Temp10;
  constructor() {
    this.temp = {
      overViewTitle: "Replenish place appear",
      stages: [
        {
          color: "red",
          title: "Make Be They're.",
          details: "Is abundantly earth. Replenish place appear so evening day",
          percentage: 12
        },
        {
          color: "blue",
          title: "Make Be They're.",
          details: "Is abundantly earth. Replenish place appear so evening day",
          percentage: 40
        },
        {
          color: "yellow",
          title: "Make Be They're.",
          details: "Is abundantly earth. Replenish place appear so evening day",
          percentage: 85
        }
      ]
    }
  }

  ngOnInit() {
  }

}
