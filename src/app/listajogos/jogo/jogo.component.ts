import { Component, Input } from '@angular/core';
import { JogosService } from 'src/app/service/jogos.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent {
  @Input('jogo') jogoRecebido: any; //componente recebe informação

  constructor(private jogosService: JogosService) {}

  deletar(id: any) {
    this.jogosService.deletar(id)
    alert('excluido com sucesso')
  }
  
  editar(jogo: any) {
    this.jogosService.editar(jogo)
  }

}
