import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StagesTemplateComponent } from './pages/stages-template/stages-template.component';
import { TeamTemplateComponent } from './pages/team-template/team-template.component';
import { PillarChildComponent } from './pages/pillar-child/pillar-child.component';
import { LicenceTableComponent } from './pages/licence-table/licence-table.component';
import { TeamCharterComponent } from './pages/template5/team-charter.component';
import { Template6Component } from './pages/template6/template6.component';
import { Template9Component } from './pages/template9/template9.component';
import { Templete7Component } from './pages/templete7/templete7.component';
import { Templete8Component } from './pages/templete8/templete8.component';
import { Templete10Component } from './pages/templete10/templete10.component';
import { Templete11Component } from './pages/templete11/templete11.component';
import { Templete12Component } from './pages/templete12/templete12.component';
import { Template4Component } from './pages/template4/template4.component';
import { StageComponent } from './pages/stages-template/stage/stage.component';
import { ChartComponent } from './pages/templete10/chart/chart.component';
import { ServiceHandlerProvider } from './services/service-handler/service-handler';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { KeysPipe } from './keys.pipe';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StagesTemplateComponent,
    TeamTemplateComponent,
    PillarChildComponent,
    LicenceTableComponent,
    TeamCharterComponent,
    Template6Component,
    Template9Component,
    Templete7Component,
    Templete8Component,
    Templete10Component,
    Templete11Component,
    Templete12Component,
    Template4Component,
    StageComponent,
    ChartComponent,
    KeysPipe,
    FeedbackComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServiceHandlerProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
