export class VideoGame {
    name: string = "";
    releaseDate: string = "";
    summary: string = "";
    rating: number = 0;

    constructor(name: string, release: string, summary: string, rating: number) {
        this.name = name;
        this.releaseDate = release;
        this.summary = summary;
        this.rating = rating;
    }
}