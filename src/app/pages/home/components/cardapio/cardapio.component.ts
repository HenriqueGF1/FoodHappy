import { Component, OnInit } from '@angular/core';
import { CardapioService } from './cardapio.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent implements OnInit {
  constructor(private cardapioServices: CardapioService) {}

  imagems: any[] = [];

  ngOnInit(): void {
    AOS.init();
    // Loop para pegar mais de uma img, pois a API (https://foodish-api.herokuapp.com/) so fornece uma imagem por vez
    for (let i = 0; i < 6; i++) {
      this.cardapioServices.getImagens().subscribe(
        (data) => {
          this.imagems.push(data);
        },
        (error) => {
          console.log('Meu Erro ', error);
        }
      );
    }
  }
}
