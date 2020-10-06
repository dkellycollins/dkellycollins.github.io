import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrameModule } from './pages/frame/frame.module';
import { FramePage } from './pages/frame/frame.page';

const routes: Routes = [
  { 
    path: 'stf', 
    component: FramePage, 
    data: { src: 'https://dkellycollins.github.io/STF' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FrameModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
