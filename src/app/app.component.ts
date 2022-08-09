import { Component } from '@angular/core';
import { VideoGame } from './model/videoGame';
import { VideoGamesService } from './services/videoGames.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'developer-applicant-app';

  constructor( private videoGamesService: VideoGamesService) {}


  games = this.videoGamesService.getVideoGames();
}
