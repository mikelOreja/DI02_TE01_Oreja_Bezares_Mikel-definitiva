import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from '../app-routing.module';
import { headerTabComponent } from './headerTab.component';
import { ExploreContainerComponent } from './explore-container.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [headerTabComponent], 
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [headerTabComponent]
})
export class headerTabModule {}


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
