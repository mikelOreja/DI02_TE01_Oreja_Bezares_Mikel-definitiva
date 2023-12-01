import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../../shared/componentes.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { headerTabModule } from 'src/app/shared/componentes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    headerTabModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
