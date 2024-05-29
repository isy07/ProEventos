import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

public eventos: any;

  constructor() { }

  ngOnInit(): void {
  }

  public getEventos(): void {
    this.eventos = [
      {
        Tema: 'Angular 11',
        Local: 'Belo Horizonte'
      },
      {
        Tema: '.NET 5',
        Local: 'São Paulo'
      },
      {
        Tema: 'Angular e Suas Novidades',
        Local: 'Rio de Janeiro'
      }
    ]
  }

}
