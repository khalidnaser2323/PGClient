import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {StagesTemplateComponent} from './pages/stages-template/stages-template.component';
import { TeamTemplateComponent } from './pages/team-template/team-template.component';
import {LicenceTableComponent  } from './pages/licence-table/licence-table.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'Licence', component: LicenceTableComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'team', component: TeamTemplateComponent },
  { path: 'stages', component: StagesTemplateComponent }
 
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
