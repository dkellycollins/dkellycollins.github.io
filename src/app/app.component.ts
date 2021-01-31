import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

declare function gtag(...args: Array<any>): void;

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">Portfolio</mat-toolbar>
    <mat-drawer-container class="app-container">
      <mat-drawer mode="side" opened>
        <mat-nav-list class="nav">
          <h3 matSubHeader>About</h3>
          <a mat-list-item [routerLink]="['about/resume']" routerLinkActive="nav-link-active">Resume</a>

          <h3 matSubHeader>Projects</h3>
          <a mat-list-item href="https://amiibos.dkellycollins.info" target="_blank">
            <mat-icon>launch</mat-icon>
            <span>Amiibos Collector</span>
          </a>
          <!--<a mat-list-item>Amiibos Collector</a>-->
          <!--<a mat-list-item>Amiibos API</a>-->
          <!--<a mat-list-item>Docker Explorer</a>-->
          <a mat-list-item [routerLink]="['projects/holiday-card']" routerLinkActive="nav-link-active">Holiday Card</a>

          <h3 matSubHeader>Games</h3>
          <a mat-list-item [routerLink]="['games/stf']" routerLinkActive="nav-link-active">STF</a>
          <!--<a mat-list-item>Castle Crossing</a>-->
          <!--<a mat-list-item>The End</a>-->
          <!--<a mat-list-item>Zenbox</a>-->

          <h3 matSubHeader>Slides</h3>
          <a mat-list-item [routerLink]="['slides/javascript-not-javascript']" routerLinkActive="nav-link-active">Javascript / Not Javascript</a>
          <a mat-list-item [routerLink]="['slides/managing-state-in-react']" routerLinkActive="nav-link-active">Managing state with React</a>
          <a mat-list-item [routerLink]="['slides/developing-with-docker']" routerLinkActive="nav-link-active">Developing with Docker</a>
          <a mat-list-item [routerLink]="['slides/angular-cucumber-e2e']" routerLinkActive="nav-link-active">E2E Testing with Angular and Cucumber</a>
        </mat-nav-list>
      </mat-drawer>
      <mat-drawer-content>
        <router-outlet></router-outlet>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styles: [
    `:host { display: flex; flex-direction: column; height: 100% }`,
    `.app-container { flex: 1 1 auto; }`,
    `.nav { padding-left: 16px; }`,
    `.mat-icon { padding-right: 8px; }`,
    `.mat-drawer-content { overflow-y: hidden; }`
  ]
})
export class AppComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  public ngOnInit(): void {
    if (!!environment.analytics.code) {
      this.router.events
        .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe(event => {
          gtag('config', environment.analytics.code, { 'page_path': event.urlAfterRedirects })
        });
    }
  }
}
