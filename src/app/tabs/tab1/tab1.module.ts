import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../../shared/componentes.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { headerTabModule } from 'src/app/shared/componentes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    headerTabModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
