import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponentComponent implements OnInit {

  @Input() data: { templateType: string, params: { name: string, pillar: string, card: string, tmp: string } };
  params: { name: string, pillar: string, card: string, tmp: string };

  constructor() { }

  ngOnInit() {
    console.log("passed data");
    console.log(this.data);
    this.params = this.data.params;
  }

}
