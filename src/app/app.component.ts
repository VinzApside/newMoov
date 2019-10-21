import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    // templateUrl: "./app.component.html",
    template: `
        <div class="full-height">
            <h1>{{ title }}</h1>
            <div class="container">
                <div class="row">
                    <div class="col-10">
                        <app-link></app-link>
                    </div>
                    <div class="col-2">
                        <app-login></app-login>
                    </div>
                </div>
            </div>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
    title = 'My new project';
}
