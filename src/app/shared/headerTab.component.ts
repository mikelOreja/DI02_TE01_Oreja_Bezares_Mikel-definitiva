import { Component, Input } from '@angular/core';

@Component({
  selector: 'headerTab',
  templateUrl: 'headerTab.component.html',
  styleUrls: ['headerTab.component.scss'],
})
export class headerTabComponent {

  @Input() tituloTab = "";
  constructor() {}
}
