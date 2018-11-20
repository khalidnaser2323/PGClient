import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-general-pop-up',
  templateUrl: './general-pop-up.component.html',
  styleUrls: ['./general-pop-up.component.css']
})
export class GeneralPopUpComponent implements OnInit {

  params: { name: string, pillar: string, card: string, tmp: string };
  constructor(
    public dialogRef: MatDialogRef<GeneralPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { templateType: string, clickedCardTitle: string, params: { name: string, pillar: string, card: string, tmp: string } }
  ) {
    console.log("Data passed to popup");
    console.log(this.data);
    this.params = this.data.params;
    console.log("Params");
    console.log(this.params);

  }

  ngOnInit() {
    console.log("Data passed to popup ng on init");
    console.log(this.data);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
