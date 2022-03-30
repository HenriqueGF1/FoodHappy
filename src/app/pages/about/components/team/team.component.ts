import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  pessoas: any[] = [];
  
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    AOS.init();
    this.teamService.getPessoa().subscribe(
      (data) => {
        this.pessoas.push(data);
        this.pessoas = this.pessoas[0].results
        console.log("Minha Pessoa ",this.pessoas)
      },
      (error) => {
        console.log('Meu Erro ', error);
      }
    );
  }

}
