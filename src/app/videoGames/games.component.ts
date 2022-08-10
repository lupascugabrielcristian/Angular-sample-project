import { Component, ElementRef, ViewChild } from "@angular/core";
import { VideoGame } from '../model/videoGame';
import { VideoGamesService } from '../services/videoGames.service';
import { Router } from '@angular/router'; 

@Component({
    selector: 'games',
    templateUrl: 'games.component.html',
    styleUrls: ['games.component.scss']
})
export class Games {

  isLoading = false;
  title = 'developer-applicant-app';
  games: VideoGame[] = [];
  filter = "";
  minScore = "";
  order: string = "Release Date";
  orderOptions = ["Release Date", "Score", "Name"];

  constructor( private videoGamesService: VideoGamesService) {}


  ngOnInit(): void {
    this.games = this.sort(this.videoGamesService.games);

    if ( this.games.length == 0 && !this.isLoading ) {

      this.isLoading = true;

      this.videoGamesService.getVideoGames().subscribe( (receivedGames: VideoGame[]) => {
          this.games = this.sort(receivedGames);
          this.videoGamesService.games = receivedGames;

          this.isLoading = false;
      });

    }
  }

  filterGames(filterText: string): void {
    let games = this.videoGamesService.games.filter( g => 
        g.name.toLowerCase().indexOf(filterText.toLowerCase()) != -1 || 
        g.summary.toLowerCase().indexOf(filterText.toLowerCase()) != -1 );
    this.games = this.sort(games);
  }

  filterByScore(min: string): void {
    if ( !parseInt(min) ) {
      this.minScore = "";
    }
    else {
      this.minScore = min;
    }
    console.log(this.minScore);

    let val = parseInt(this.minScore);
    if ( this.minScore == "" || !this.minScore) {
      val = 0;
    }

    let games = this.videoGamesService.games.filter( g => g.rating >= val);
    this.games = this.sort( games );
  }

  onMinScoreKeyPress(event: KeyboardEvent) {
    if ( this.isLoading ) {
      event.preventDefault();
      return;
    }

    const regexpNumber = /[0-9\+\-\ ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }

    if ( parseInt(this.minScore + event.key) > 99 ) {
      event.preventDefault();
      return
    }

    console.log( this.minScore );
  }

  onClear() {
    this.filter = "";
    this.minScore = "";
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