import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameModule } from './pages/frame/frame.module';
import { FramePage } from './pages/frame/frame.page';

const routes: Routes = [
  {
    path: 'about/resume',
    component: FramePage,
    data: { src: 'https://resume.dkellycollins.info' }
  },
  {
    path: 'projects/holiday-card',
    component: FramePage,
    data: { src: 'https://holiday-card.dkellycollins.info'}
  },
  {
    path: 'games/stf', 
    component: FramePage, 
    data: { src: 'https://github.dkellycollins.info/STF' }
  },
  {
    path: 'slides/javascript-not-javascript',
    component: FramePage,
    data: { src: 'https://github.dkellycollins.info/managing-state-in-react/#/' }
  },
  {
    path: 'slides/managing-state-in-react',
    component: FramePage,
    data: { src: 'https://github.dkellycollins.info/javascript-not-javascript/index.html#/' }
  },
  {
    path: 'slides/angular-cucumber-e2e',
    component: FramePage,
    data: { src: 'https://github.dkellycollins.info/angular-cucumber-e2e/#/' }
  },
  { 
    path: 'slides/developing-with-docker',
    component: FramePage,
    data: { src: 'https://github.dkellycollins.info/talk-developing-with-docker/#/' }
  },
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
