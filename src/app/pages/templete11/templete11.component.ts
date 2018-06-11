import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-templete11',
  templateUrl: './templete11.component.html',
  styleUrls: ['./templete11.component.css']
})
export class Templete11Component implements OnInit {
  activePanel: string = "1";
  constructor() { }

  ngOnInit() {
  }
  showPanel(id: string) {
    console.log("id to show:  " + id);
    this.activePanel = id;
  }

}
