import { Component, OnInit } from '@angular/core';
import { TeamModel } from '../../Models/TeamModel'
@Component({
  selector: 'app-team-template',
  templateUrl: './team-template.component.html',
  styleUrls: ['./team-template.component.css']
})
export class TeamTemplateComponent implements OnInit {


  TeamMembers: TeamModel[] =
    [
      new TeamModel('img/a1.jfif', 'Karim Hussein', 'Pillar Leader'),
      new TeamModel('img/a2.jfif', 'Mohamed Hamed', 'AM Coordinator Skill matrix Scorecard RCO owner Operations'),
      new TeamModel('img/a3.jfif', 'May Elshouraky', 'Pillar Co leader  Master plan Operation'),
      new TeamModel('img/a4.jfif', 'Shady Barrage', 'CIL DMS Owner R&R Operations'),
      new TeamModel('img/a5.jfif', 'Sarah Othman', 'DH DMS owner Operations'),
      new TeamModel('img/a6.jfif', 'Sarah Othman', 'DH DMS owner Operations'),
      new TeamModel('img/a1.jfif', 'Karim Hussein', 'Pillar Leader'),
      new TeamModel('img/a2.jfif', 'Mohamed Hamed', 'AM Coordinator Skill matrix Scorecard RCO owner Operations'),
      new TeamModel('img/a3.jfif', 'May Elshouraky', 'Pillar Co leader  Master plan Operation'),
      new TeamModel('img/a4.jfif', 'Shady Barrage', 'CIL DMS Owner R&R Operations'),
      new TeamModel('img/a5.jfif', 'Sarah Othman', 'DH DMS owner Operations'),
      new TeamModel('img/a6.jfif', 'Sarah Othman', 'DH DMS owner Operations'),
      new TeamModel('img/a2.jfif', 'Mohamed Hamed', 'AM Coordinator Skill matrix Scorecard RCO owner Operations'),
      new TeamModel('img/a3.jfif', 'May Elshouraky', 'Pillar Co leader  Master plan Operation'),
      new TeamModel('img/a4.jfif', 'Shady Barrage', 'CIL DMS Owner R&R Operations'),
      new TeamModel('img/a5.jfif', 'Sarah Othman', 'DH DMS owner Operations'),
      new TeamModel('img/a6.jfif', 'Sarah Othman', 'DH DMS owner Operations'),
      new TeamModel('img/a2.jfif', 'Mohamed Hamed', 'AM Coordinator Skill matrix Scorecard RCO owner Operations'),
      new TeamModel('img/a3.jfif', 'May Elshouraky', 'Pillar Co leader  Master plan Operation'),
      new TeamModel('img/a4.jfif', 'Shady Barrage', 'CIL DMS Owner R&R Operations'),
      new TeamModel('img/a5.jfif', 'Sarah Othman', 'DH DMS owner Operations'),
      new TeamModel('img/a6.jfif', 'Sarah Othman', 'DH DMS owner Operations')
    ]

  constructor() { }

  ngOnInit() {
  }

}
