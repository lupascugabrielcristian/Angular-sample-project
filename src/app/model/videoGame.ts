export class VideoGame {
    name: string = "";
    first_release_date: string = "";
    summary: string = "";
    rating: number = 0;

    constructor(name: string, first_release_date: string, summary: string, rating: number) {
        this.name = name;
        this.first_release_date = first_release_date;
        this.summary = summary;
        this.rating = rating - 400;
    }
}