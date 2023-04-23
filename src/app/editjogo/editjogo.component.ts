import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JogosService } from '../service/jogos.service';

@Component({
  selector: 'app-editjogo',
  templateUrl: './editjogo.component.html',
  styleUrls: ['./editjogo.component.css']
})
export class EditjogoComponent implements OnInit {

  formulario: any;
  jogoEditar$: any;
  id: any;

  constructor(private jogosService: JogosService) {
    this.formulario = new FormGroup({
      nome: new FormControl(['']),
      imagem: new FormControl(['']),
      descricao: new FormControl(['']),
      genero: new FormControl(['']),
      ano_lancamento: new FormControl(['']),
    })
  }

  ngOnInit() {
    this.jogoEditar$ = this.jogosService.jogoEditar$.subscribe((jogo: any) => {// verifica quando troca o valor do observable
      this.id = jogo.id;

      this.formulario.patchValue({
        nome: jogo.nome,
        imagem: jogo.imagem,
        descricao: jogo.descricao,
        genero: jogo.genero,
        ano_lancamento: jogo.ano_lancamento,
      })
    });
  }

  salvar() {
    if (this.id) {
      this.jogosService.atualizar(this.id, this.formulario.value);

    } else {
      this.jogosService.cadastrar(this.formulario.value);
    }

    alert('Salvo com sucesso')
    this.id = 0;
    this.formulario.reset();
  }
}
