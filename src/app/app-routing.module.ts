import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameModule } from './pages/frame/frame.module';
import { FramePage } from './pages/frame/frame.page';
import { ResumeModule } from './pages/resume/resume.module';
import { ResumePage } from './pages/resume/resume.page';

const routes: Routes = [
  {
    path: 'about/resume',
    component: ResumePage
  },
  {
    path: 'games/stf', 
    component: FramePage, 
    data: { src: 'https://dkellycollins.github.io/STF' }
  },
  {
    path: 'slides/javascript-not-javascript',
    component: FramePage,
    data: { src: 'http://github.dkellycollins.info/managing-state-in-react/#/' }
  },
  {
    path: 'slides/managing-state-in-react',
    component: FramePage,
    data: { src: 'http://github.dkellycollins.info/javascript-not-javascript/index.html#/' }
  },
  {
    path: 'slides/angular-cucumber-e2e',
    component: FramePage,
    data: { src: 'http://github.dkellycollins.info/angular-cucumber-e2e/#/' }
  },
  { 
    path: 'slides/developing-with-docker',
    component: FramePage,
    data: { src: 'http://github.dkellycollins.info/talk-developing-with-docker/#/' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FrameModule,
    ResumeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
