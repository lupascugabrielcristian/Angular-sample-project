import { Component } from "@angular/core";
import { VideoGame } from '../model/videoGame';
import { VideoGamesService } from '../services/videoGames.service';
import { Router } from '@angular/router'; 

@Component({
    selector: 'games',
    templateUrl: 'games.component.html',
    styleUrls: ['games.component.scss']
})
export class Games {

  title = 'developer-applicant-app';
  games: VideoGame[] = [];
  filter = "";
  minScore = 0;
  order: string = "Release Date";
  orderOptions = ["Release Date", "Score", "Name"];

  constructor( private videoGamesService: VideoGamesService) {}


  ngOnInit(): void {
    this.games = this.sort(this.videoGamesService.games);

    if ( this.games.length == 0 ) {

      this.videoGamesService.getVideoGames().subscribe( (receivedGames: VideoGame[]) => {
          this.games = this.sort(receivedGames);
          this.videoGamesService.games = receivedGames;
      });

    }
  }

  filterGames(filterText: string): void {
    let games = this.videoGamesService.games.filter( g => 
        g.name.toLowerCase().indexOf(filterText.toLowerCase()) != -1 || 
        g.summary.toLowerCase().indexOf(filterText.toLowerCase()) != -1 );
    this.games = this.sort(games);
  }

  filterByScore(min: number): void {
    console.log(min);
    if ( min == null ) {
      this.minScore = 0;
      return;
    }

    let games = this.videoGamesService.games.filter( g => g.rating >= min);
    this.games = this.sort( games );
  }

  onClear() {
    this.filter = "";
    this.minScore = 0;
    this.order = this.orderOptions[0];
    this.games = this.sort(this.videoGamesService.games);
  }

  onOrderBy(option: string) {
    this.games = this.sort(this.games);
  }

  private sort(games: VideoGame[]): VideoGame[] {
    return games.sort( (g1, g2) => {
      if ( this.order == "Release Date" ) {
        if ( g1.first_release_date > g2.first_release_date ) {
          return -1;
        }

        if ( g1.first_release_date < g2.first_release_date ) {
          return 1;
        }

        return 0;
      }
      else if ( this.order == "Name" ) {
        if ( g1.name[0] > g2.name[0] ) {
          return 1;
        }

        if ( g1.name[0] < g2.name[0] ) {
          return -1;
        }

        return 0;
      }
      else if ( this.order == "Score" ) {
        if ( g1.rating > g2.rating ) {
          return -1;
        }

        if ( g1.rating < g2.rating ) {
          return 1;
        }

        return 0;
      } 
      else {
        return 0;
      }

    });
  }
}