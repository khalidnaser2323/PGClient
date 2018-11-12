import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';
import { Location } from '@angular/common';


@Component({
  selector: 'app-templete11',
  templateUrl: './templete11.component.html',
  styleUrls: ['./templete11.component.css']
})
export class Templete11Component implements OnInit {
  @Input() params: { name: string, pillar: string, card: string, tmp: string };
  @Input() zoomContent: boolean;

  temp11: Temp11;
  pillarId: string;
  cardId: string;
  templateId: string;
  pillarName: string;
  cardTitle: string;
  slideIndex = 1;
  el: HTMLElement;
  mySlides: any;
  templateTitle: string;
  @ViewChild('demo') demo: ElementRef;
  constructor(
    private route: ActivatedRoute,
    public serviceHandler: ServiceHandlerProvider,
    private _location: Location,
    el: ElementRef
  ) {
    this.temp11 = {
      colEightText: "",
      colElevenText: "",
      colFiveText: "",
      colFourText: "",
      colNineText: "",
      colOneHeader: "",
      colOneText: "",
      colSevenText: "",
      colSixText: "",
      colTenText: "",
      colThreeHeader: "",
      colThreeText: "",
      colTwelveText: "",
      colTwoHeader: "",
      colTwoText: ""
    }
    this.el = el.nativeElement;
    // this.route.params.subscribe(params => {
    //   console.log(params);
    //   this.pillarId = params.pillar;
    //   this.cardId = params.card;
    //   this.templateId = params.tmp;
    //   this.pillarName = params.name;
    //   this.getCardDetails(this.pillarId, this.cardId);
    // });
  }

  ngOnInit() {
    this.pillarId = this.params.pillar;
    this.cardId = this.params.card;
    this.templateId = this.params.tmp;
    this.pillarName = this.params.name;
    this.getCardDetails(this.pillarId, this.cardId);

    this.mySlides = this.el.getElementsByClassName("mySlides");
    this.showDivs(this.slideIndex);

  }
  getCardDetails(pillarId: string, cardId: string) {
    const url = Constants.BASE_URL + "section/" + pillarId + "/" + cardId;
    this.serviceHandler.runService(url, "GET").subscribe((cardDetails) => {
      console.log("Get card details response");
      console.log(cardDetails);
      if (cardDetails && cardDetails.templates && cardDetails.templates[this.templateId] && cardDetails.templates[this.templateId].payload && cardDetails.templates[this.templateId].payload.data) {
        this.temp11 = cardDetails.templates[this.templateId].payload.data;
        this.templateTitle = cardDetails.templates[this.templateId].title;
        this.cardTitle = cardDetails.title;
      }
    }, err => {
      console.log("Get card details error");
      console.error(err);
      window.alert("OOPS! something went wrong");
    });
  }
  backClicked() {
    this._location.back();
  }

  plusDivs(n) {
    this.showDivs(this.slideIndex += n);
  }

  showDivs(n) {
    var i;
    // var x = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("demo");
    if (n > this.mySlides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = this.mySlides.length }
    for (i = 0; i < this.mySlides.length; i++) {
      this.mySlides[i].style.display = "none";
    }

    this.mySlides[this.slideIndex - 1].style.display = "block";

  }
  currentDiv(index: number) {
    this.showDivs(this.slideIndex = index);
  }
}
