import { Component, OnInit } from '@angular/core';
import { JogosService } from '../service/jogos.service';

@Component({
  selector: 'app-listajogos',
  templateUrl: './listajogos.component.html',
  styleUrls: ['./listajogos.component.css']
})
export class ListajogosComponent implements OnInit {
  jogos: any;

  constructor(private jogosService: JogosService) {}

  ngOnInit(): void {
    this.jogos = this.jogosService.jogos
    console.log(this.jogos);
  }

}
