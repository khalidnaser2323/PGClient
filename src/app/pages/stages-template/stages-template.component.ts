import { Component, OnInit } from '@angular/core';
import { StageModel} from '../../Models/StagesModel'
@Component({
  selector: 'app-stages-template',
  templateUrl: './stages-template.component.html',
  styleUrls: ['./stages-template.component.css']
})
export class StagesTemplateComponent implements OnInit {

  Stages:StageModel[]=
  [
   new StageModel('120,0000 ','EGP','img/stage1.png',' Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.'),
   new StageModel(' 328,0000 ','EGP','img/stage2.png',' Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.'), 
   new StageModel('510,0000','EGP','img/stage3.png',' Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.'),
   new StageModel('964,0000','EGP','img/stage4.png',' Make. Be. They are. Is abundantly earth. Replenish place appear so evening day seas set.') 
  ]


  constructor() { }

  ngOnInit() {
  }

}
