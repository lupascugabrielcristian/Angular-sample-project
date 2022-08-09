import { Injectable } from "@angular/core";
import { VideoGame } from "../model/videoGame";

@Injectable({
    providedIn: 'root'
})
export class VideoGamesService {


    getVideoGames(): VideoGame[] {

        const games = [ new VideoGame("SEGA AGES Phantasy Star", "DD/MM/YYYY", "The classic galactical adventure arrives on Nintendo Switch! \n \nThe tyrant Lassic rules the cosmos, and it is up to you to defeat his evil reign. Witness the revival of this defining RPG in SEGA AGES Phantasy Star. \n \nTake advantage of the new dungeon map display and the acclaimed “Ages Mode” as you traverse tricky dungeon mazes and battle ferocious 8-bit beasts. Phantasy Star has claimed its place as a pioneer RPG and its retro-spirit is sure to find a home in the hearts of old and new fans alike.", 90),
            new VideoGame("SEGA AGES Phantasy Star", "DD/MM/YYYY", "The classic galactical adventure arrives on Nintendo Switch! \n \nThe tyrant Lassic rules the cosmos, and it is up to you to defeat his evil reign. Witness the revival of this defining RPG in SEGA AGES Phantasy Star. \n \nTake advantage of the new dungeon map display and the acclaimed “Ages Mode” as you traverse tricky dungeon mazes and battle ferocious 8-bit beasts. Phantasy Star has claimed its place as a pioneer RPG and its retro-spirit is sure to find a home in the hearts of old and new fans alike.", 90)
          ]

          return games;

    }

}