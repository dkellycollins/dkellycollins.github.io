import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { PageActionModel } from './models/page-action.model';
import { FrameModule } from './pages/frame/frame.module';
import { FramePage } from './pages/frame/frame.page';

function frameRoute(path: string, externalUrl: string): Route {
  return {
    path: path,
    component: FramePage,
    data: { 
      src: externalUrl,
      actions: [
        new PageActionModel('launch', () => window.open(externalUrl, '_blank'))
      ] 
    }
  };
}

const routes: Routes = [
  frameRoute('about/resume',                     'https://resume.dkellycollins.info'),
  frameRoute('projects/holiday-card',            'https://holiday-card.dkellycollins.info'),
  frameRoute('games/stf',                        'https://github.dkellycollins.info/STF'),
  frameRoute('slides/javascript-not-javascript', 'https://github.dkellycollins.info/managing-state-in-react/#/'),
  frameRoute('slides/managing-state-in-react',   'https://github.dkellycollins.info/javascript-not-javascript/index.html#/'),
  frameRoute('slides/angular-cucumber-e2e',      'https://github.dkellycollins.info/angular-cucumber-e2e/#/'),
  frameRoute('slides/developing-with-docker',    'https://github.dkellycollins.info/talk-developing-with-docker/#/'),
  { path: '**', redirectTo: 'about/resume' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FrameModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
