import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { ServiceHandlerProvider } from '../services/service-handler/service-handler';
import { Constants } from '../Constants';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, OnChanges {

  @Input('pillar') pillar: string = "";
  @Input('card') card: string = "";
  @Input('template') template: string = "";
  feedback: string = "";
  constructor(
    public serviceHandler: ServiceHandlerProvider,

  ) { }

  ngOnInit() {
    console.log("Passed data to feedback view");
    console.log(this.pillar);
    console.log(this.card);
    console.log(this.template);
  }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    console.log("On change called");
    console.log(changes);
    if (changes.pillar) {
      this.pillar = changes.pillar.currentValue;
    }
    if (changes.card) {
      this.card = changes.card.currentValue;
    }
    if (changes.template) {
      this.template = changes.template.currentValue;
    }
    console.log("Passed data to feedback view after updates");
    console.log(this.pillar);
    console.log(this.card);
    console.log(this.template);

  }
  sendFeedback() {
    console.log("Send feedback");
    if (this.feedback != undefined && this.feedback != "") {
      console.log(this.feedback);
      const requestBody = {
        feedback: this.feedback
      };
      console.log(requestBody);
      this.serviceHandler.runService(Constants.BASE_URL + "section/" + this.pillar + "/feedback", "POST", undefined, requestBody).subscribe((response) => {
        console.log("Post feedback response");
        console.log(response);
        $('#myModal').modal('hide');


      }, (err) => {
        console.log("Post feedback error");
        console.error(err);
        window.alert("OOPS! something went wrong");
      });

    }
    else {
      window.alert("Please fill feedback field");
    }
  }
  showModal() {
    $('#myModal').modal('show');
    $('.modal-backdrop').removeClass("modal-backdrop");
  }

}
