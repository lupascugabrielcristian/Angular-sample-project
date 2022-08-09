import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideoGamesService } from './services/videoGames.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ VideoGamesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
