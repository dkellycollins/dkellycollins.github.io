import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumePage } from './resume.page';



@NgModule({
  declarations: [ResumePage],
  imports: [
    CommonModule
  ],
  exports: [
    ResumePage
  ]
})
export class ResumeModule { }
