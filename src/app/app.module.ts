import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StagesTemplateComponent } from './pages/stages-template/stages-template.component';
import { TeamTemplateComponent } from './pages/team-template/team-template.component';
import { PillarChildComponent } from './pages/pillar-child/pillar-child.component';
import { LicenceTableComponent } from './pages/licence-table/licence-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StagesTemplateComponent,
    TeamTemplateComponent,
    PillarChildComponent,
    LicenceTableComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
