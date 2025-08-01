import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SobrePage } from './sobre.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SobrePageRoutingModule } from './sobre-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    SobrePageRoutingModule
  ],
  declarations: [SobrePage]
})
export class SobrePageModule {}
