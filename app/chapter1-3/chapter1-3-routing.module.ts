import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter13Page } from './chapter1-3.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter13PageRoutingModule {}
