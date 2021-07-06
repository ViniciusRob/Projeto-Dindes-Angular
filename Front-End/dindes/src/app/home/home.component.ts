import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]


  foto = environment.foto
  nome = environment.nome
  area = environment.area
  //dinde = environment.dinde

  constructor(
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    if(environment.token == ''){
      this.router.navigate(['/entrar'])

    }

    this.temaService.refreshToken()
    this.postagemService.refreshToken()

    this.findAllTemas()
    this.findAllPostagem()
    console.log(environment)
  }

  // metodos de tema

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTemas = resp
    })
  }

  cadastrarTema(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema) =>{ 
      this.tema = resp
      alert('Tema cadastrado com sucesso')
      this.findAllTemas()
      this.tema = new Tema()
    })
  }

  // metodos de postagem

  temaPostagem(event: any){
    this.postagem.tema = event.target.value;
  }

  tipoPostagem(event: any){
    if(event.target.value=="postagem"){
      let vaga = false;
      this.postagem.vaga = vaga;
    } else if(event.target.value=="vaga"){
      let vaga = true;
      this.postagem.vaga = vaga;
    }

    
  }

  midia(event: any){
    this.postagem.midia = event.target.value

  }

  findAllPostagem(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[]) =>{
      this.listaPostagem = resp
    })
  }

  cadastrarPostagem(){
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp
      alert('Postagem feita com sucesso!')
      this.findAllPostagem()
      this.postagem = new  Postagem()
    })
  }


}
