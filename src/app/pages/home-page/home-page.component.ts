import { Component, OnInit } from '@angular/core';
import { Constants } from '../../Constants';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  imagePath: string = Constants.IMAGE_PATH;
  hoveredPillarId: string;
  pillars: Array<Pillar>;
  departments: Array<Pillar>;
  constructor(
    public serviceHandler: ServiceHandlerProvider,
  ) {
    this.getPillars();
  }

  ngOnInit() {

  }
  getPillars() {
    this.serviceHandler.runService(Constants.BASE_URL + "section/list", "GET").subscribe((res: Array<Pillar>) => {
      console.log("Get pillars response");
      console.log(res);
      this.pillars = res.filter(section => { return section.type == undefined || section.type == null || section.type == "undefined" || section.type == "pillar" });
      this.departments = res.filter(section => { return (section.type && section.type == "department") });
    }, err => {
      console.log("Upload image string error");
      console.error(err);
      window.alert("Error in getting pillars");
    })
  }
  mouseEnter(SelectedPillar: Pillar) {
    console.log("mouse enter");
    if (SelectedPillar.subtitle.length > 152) {
      this.hoveredPillarId = SelectedPillar._id;
    }

  }

  mouseLeave() {
    console.log('mouse leave');
    this.hoveredPillarId = null;
  }

}
