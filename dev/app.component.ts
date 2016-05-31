import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Mi primera aplicación Angular 2</h1>
        <h2>{{ nombre }}</h2>
    `
})
export class AppComponent implements OnInit {
    private nombre: string;
    constructor() { }
        nombre = 'Ppe';
    ngOnInit() { }

}