import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token= {
      headers: new HttpHeaders().set('Authorization', environment.token) 
    }
  }


  // buscar todos os temas
  getAllPostagem(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://dindes.herokuapp.com/postagens', this.token)
  }

  // postar um novo tema
  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://dindes.herokuapp.com/postagens', postagem, this.token)
  }


}
