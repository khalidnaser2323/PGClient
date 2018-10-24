import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StagesTemplateComponent } from './pages/stages-template/stages-template.component';
import { TeamTemplateComponent } from './pages/team-template/team-template.component';
import { PillarChildComponent } from './pages/pillar-child/pillar-child.component';
import { LicenceTableComponent } from './pages/licence-table/licence-table.component';
import { TeamCharterComponent } from './pages/template5/team-charter.component';
import { Template6Component } from './pages/template6/template6.component';
import { Template4Component } from './pages/template4/template4.component';
import { Template9Component } from './pages/template9/template9.component';
import { Templete12Component } from './pages/templete12/templete12.component';
import { Templete11Component } from './pages/templete11/templete11.component';
import { Templete10Component } from './pages/templete10/templete10.component';
import { Templete7Component } from './pages/templete7/templete7.component';
import { Temp13Component } from './pages/temp13/temp13.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'temp11', component: Templete11Component },
  { path: 'temp12', component: Templete12Component },
  { path: 'temp4', component: Template4Component },
  { path: 'temp9', component: Template9Component },
  { path: 'temp7', component: Templete7Component },
  { path: 'temp5', component: TeamCharterComponent },
  { path: 'Licence', component: LicenceTableComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'team', component: TeamTemplateComponent },
  { path: 'stages', component: StagesTemplateComponent },
  { path: 'temp6', component: Template6Component },
  { path: 'pillarDetails/:pillarId', component: PillarChildComponent },
  { path: 'temp10', component: Templete10Component },
  { path: 'temp13', component: Temp13Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
