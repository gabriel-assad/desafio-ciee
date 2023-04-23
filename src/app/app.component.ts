import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `h3 { color: green}`
  ]
})
export class AppComponent {

  jogoEditar: any;

  editar(jogo: any) {
    this.jogoEditar = jogo;
  }
}
