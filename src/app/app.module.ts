import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StagesTemplateComponent } from './pages/stages-template/stages-template.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StagesTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
