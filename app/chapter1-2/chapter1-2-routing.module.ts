import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Chapter12Page } from './chapter1-2.page';

const routes: Routes = [
  {
    path: '',
    component: Chapter12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Chapter12PageRoutingModule {}
