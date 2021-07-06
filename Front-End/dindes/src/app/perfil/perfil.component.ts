
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  foto = environment.foto
  nome = environment.nome
  dataNasc = environment.dataNascimento
  area = environment.area
  telefone = environment.telefone
  email = environment.email
  sobre = environment.sobre
  usuario = environment.usuario
  

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    if(environment.token == ''){
      this.router.navigate(['/entrar'])

    }

  }

}
