import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">Portfolio</mat-toolbar>
    <mat-drawer-container class="app-container">
      <mat-drawer mode="side" opened>
        <mat-nav-list class="nav">
          <h3 matSubHeader>About</h3>
          <a mat-list-item>Resume</a>

          <h3 matSubHeader>Apps</h3>
          <a mat-list-item>Amiibos</a>
          <a mat-list-item>Amiibos API</a>
          <a mat-list-item>Docker Explorer</a>

          <h3 matSubHeader>Games</h3>
          <a mat-list-item [routerLink]="['stf']" routerLinkActive="nav-link-active">STF</a>
          <a mat-list-item>The End</a>
          <a mat-list-item>Zenbox</a>

          <h3 matSubHeader>Slides</h3>
          <a mat-list-item>Javascript / Not Javascript</a>
          <a mat-list-item>Managing state with React</a>
          <a mat-list-item>Getting started with Firebase</a>
          <a mat-list-item>angular-cucumber-e2e</a>
          <a mat-list-item>Developing with Docker</a>
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
    `.nav { padding-left: 16px; }`
  ]
})
export class AppComponent {
  title = 'dkellycollins';
}
