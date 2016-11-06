import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tour-of-heroes',
    template: `
	<div class="container">
    <router-outlet></router-outlet>
	</div>
  `,
})
export class TourOfHeroesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}