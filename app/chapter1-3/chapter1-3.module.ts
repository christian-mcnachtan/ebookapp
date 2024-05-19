import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Chapter13PageRoutingModule } from './chapter1-3-routing.module';

import { Chapter13Page } from './chapter1-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chapter13PageRoutingModule
  ],
  declarations: [Chapter13Page]
})
export class Chapter13PageModule {}
