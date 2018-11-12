import { Component, OnInit } from '@angular/core';
import { Constants } from '../../Constants';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';

declare var jquery: any;
declare var $: any;

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
  screeSaverPillars: Array<Pillar>;
  mousetimeout: any;
  screensaver_active = false;
  idletime = 10;
  showedPillar: Pillar;
  constructor(
    public serviceHandler: ServiceHandlerProvider,
  ) {
    this.getPillars();
  }

  ngOnInit() {
    $(document).unbind('mousemove');

    $(document).mousemove(() => {
      console.log("Mouse move detected!");
      clearInterval(this.mousetimeout);

      if (this.screensaver_active) {
        this.stop_screensaver();
      }

      this.mousetimeout = setInterval(() => {
        console.log("Set interval is called");
        this.show_screensaver();
      }, 10000); // 5 secs			
    });
  }
  getPillars() {
    this.serviceHandler.runService(Constants.BASE_URL + "section/list", "GET").subscribe((res: Array<Pillar>) => {
      console.log("Get pillars response");
      console.log(res);
      this.screeSaverPillars = res;
      this.pillars = res.filter(section => { return section.type == undefined || section.type == null || section.type == "undefined" || section.type == "pillar" });
      this.showedPillar = this.pillars[0];
      // this.screensaver_active = true;
      this.departments = res.filter(section => { return (section.type && section.type == "department") });
      this.getCards();
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
  show_screensaver() {
    console.log("Show screen saver is called");
    $('#screensaver').fadeIn();
    this.screensaver_active = true;

  }

  stop_screensaver() {
    console.log("stop screen saver is called");
    $('#screensaver').fadeOut();
    this.screensaver_active = false;
  }

  getRandomIMG() {
    var images = ['1.png', '2.jpeg', '3.png', '4.jpg'];
    var index = Math.floor(Math.random() * 3);

    return images[index];
  }
  screensaver_animation() {
    if (this.screensaver_active) {

      $('#screensaver').animate({
        //   backgroundColor: getRandomColor()

      },
        400,
        function () {
          $(this).css({ 'background-image': 'url(' + this.getRandomIMG() + ')' });

        });

    }
  }
  async getPillarDetails(pillar: Pillar) {
    this.serviceHandler.runService(Constants.BASE_URL + "section/" + pillar._id, "GET").subscribe(response => {
      console.log("Get pillar details response");
      console.log(response);
      pillar.cards = response.cards;
      console.log("Cards after update");
      console.log(this.screeSaverPillars);

    }, error => {
      console.log(error);
      window.alert("Failed to load cards")

    })
  }
  async getCards() {
    for (let pillar of this.screeSaverPillars) {
      await this.getPillarDetails(pillar);
    }

  }
}
