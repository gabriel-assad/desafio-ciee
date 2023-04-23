import { Injectable } from '@angular/core';
import { Jogos } from './jogos';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class JogosService {
    jogos: any = Jogos;
    // jogoEditar: any;
    private jogoEditar = new BehaviorSubject({});
    public jogoEditar$ = this.jogoEditar.asObservable(); //criando um observable

    deletar(id: any) {
        var indice = this.jogos.findIndex((el: any) => el.id == id)

        this.jogos.splice(indice, 1);
    }

    editar(jogo:any) {
        this.jogoEditar.next(jogo);// atualiza o valor do observable
    }

    atualizar(id: any, jogo: any) {
        var indice = this.jogos.findIndex((el: any) => el.id == id)

        this.jogos[indice] = jogo;
    }

    cadastrar(jogo: any) {
        var idNovo = this.jogos[this.jogos.length - 1].id + 1;
        jogo.id = idNovo;
        this.jogos.push(jogo)
    }
}