import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class AppHeader  implements OnInit {

    routeLabel = "VIDEO";

    constructor( private route: ActivatedRoute, 
        private router: Router) {}

    ngOnInit(): void {
        console.log(this.route.snapshot.params);
        this.routeLabel = "VIDEO"; 

        this.router.events.subscribe( route => {
            if ( route instanceof NavigationEnd ) {
                if ( route.url.indexOf("contact") != -1 ) {
                    this.routeLabel = "CONTACT";
                }
                else {
                    this.routeLabel = "VIDEO";
                }
            }
        });
    }


    

}