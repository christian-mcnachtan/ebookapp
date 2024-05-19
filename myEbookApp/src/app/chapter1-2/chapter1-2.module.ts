import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter12PageRoutingModule } from './chapter1-2-routing.module';

import { Chapter12Page } from './chapter1-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter12PageRoutingModule
  ],
  declarations: [Chapter12Page]
})
export class Chapter12PageModule {}
