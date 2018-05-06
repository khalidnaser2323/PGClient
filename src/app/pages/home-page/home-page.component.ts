import { Component, OnInit } from '@angular/core';
import {ProductModel} from '../../Models/ProductModel'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  Products:ProductModel[]=
  [
  new ProductModel('pillarDetails','img/img1.png','Leadership Pillar','Et suscipit menandri est, ut mea iriure imperdiet, at his docendi.'),
  new ProductModel('pillarDetails','img/img2.png','Leadership Pillar','Et suscipit menandri est, ut mea iriure imperdiet, at his docendi.'),
  new ProductModel('pillarDetails','img/img3.png','Leadership Pillar','Et suscipit menandri est, ut mea iriure imperdiet, at his docendi.'),
  new ProductModel('pillarDetails','img/img1.png','Leadership Pillar','Et suscipit menandri est, ut mea iriure imperdiet, at his docendi.'),
  new ProductModel('pillarDetails','img/img2.png','Leadership Pillar','Et suscipit menandri est, ut mea iriure imperdiet, at his docendi.'),
  new ProductModel('pillarDetails','img/img3.png','Leadership Pillar','Et suscipit menandri est, ut mea iriure imperdiet, at his docendi.'),
  new ProductModel('pillarDetails','img/img1.png','Leadership Pillar','Et suscipit menandri est, ut mea iriure imperdiet, at his docendi.'),
  new ProductModel('pillarDetails','img/img2.png','Leadership Pillar','Et suscipit menandri est, ut mea iriure imperdiet, at his docendi.'),
  new ProductModel('pillarDetails','img/img3.png','Leadership Pillar','Et suscipit menandri est, ut mea iriure imperdiet, at his docendi.'),
  new ProductModel('pillarDetails','img/img1.png','Leadership Pillar','Et suscipit menandri est, ut mea iriure imperdiet, at his docendi.')
];
  constructor() { }

  ngOnInit() {

  }

}
