import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  numeroAdivinar: number = 0; 
  numeroUsuario: number | undefined;
  resultado: string | undefined;

  constructor() { }

  ngOnInit() {
    this.numeroAdivinar = Math.floor(Math.random() * 101);
  }

 

  Comprobar(): void {
    if (this.numeroUsuario === undefined || this.numeroUsuario < 0 || this.numeroUsuario>100) {
      this.resultado = ("Introduce un número válido.");
      return;
    }

    if (this.numeroUsuario === this.numeroAdivinar) {
      this.resultado =("¡Felicidades! ¡Has adivinado el número!");
    } else if (this.numeroUsuario > this.numeroAdivinar) {
      this.resultado =("Introduce un número menor.");
    } else {
      this.resultado =("Introduce un número mayor.");
    }
  }

}
