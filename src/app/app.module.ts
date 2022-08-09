import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Contact } from './contact/contact.component';
import { AppHeader } from './header/header.component';
import { VideoGamesService } from './services/videoGames.service';
import { Games } from './videoGames/games.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    Games
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: Games},
      {path: 'games', component: Games},
      {path: 'contact', component: Contact }
    ])

  ],
  providers: [ VideoGamesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
