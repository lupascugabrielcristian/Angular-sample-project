import { Injectable } from "@angular/core";
import { VideoGame } from "../model/videoGame";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class VideoGamesService {

    public games: VideoGame[] = [];


    constructor(private httpClient: HttpClient ) {}


    getVideoGames(): Observable<VideoGame[]> {

        let applicantTestURL = "https://public.connectnow.org.uk/applicant-test/";

        return this.httpClient.get<VideoGame[]>(applicantTestURL);
    }

}