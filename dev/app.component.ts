import { Component, OnInit } from '@angular/core';
import {Hero} from '/heroes/hero';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1><h2>{{hero.name}} details!</h2>
    `
})

export class AppComponent implements OnInit {
    
    title = 'Tour of Heroes';
    hero: Hero  = {
        id: 1,
        name: 'Windstorm'
    };
    
    constructor() { }
    ngOnInit() { }

}