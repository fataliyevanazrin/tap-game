import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LosingTabComponent } from './modal/losing-tab/losing-tab.component';
import { GamePageComponent } from './game-page/game-page.component';
import { DotComponent } from './dot/dot.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeBarComponent } from './time-bar/time-bar.component';
import { StatsComponent } from './stats/stats.component';
import { WinningTabComponent } from './modal/winning-tab/winning-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LosingTabComponent,
    GamePageComponent,
    DotComponent,
    TimeBarComponent,
    StatsComponent,
    WinningTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
