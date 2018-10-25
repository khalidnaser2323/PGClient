import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-photo-tmp',
  templateUrl: './photo-tmp.component.html',
  styleUrls: ['./photo-tmp.component.css']
})
export class PhotoTmpComponent implements OnInit {
  imagePath: string = Constants.IMAGE_PATH;
  imageString: string;
  constructor(
    public dialogRef: MatDialogRef<PhotoTmpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.data.imageString);
    this.imageString = this.data.imageString;
  }

  ngOnInit() {
  }
  getImageUrl(imageString: string): string {
    if (imageString.startsWith("data:")) {
      return imageString;
    }
    else {
      return this.imagePath + imageString;
    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
