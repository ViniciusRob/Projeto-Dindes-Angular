import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  user: User = new User();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  dinde(){
    this.user.tipo = "dinde"
    this.router.navigate(['/cadastrar'])
  }

  apadrinhade(){
    this.user.tipo = "apadrinhade"
    this.router.navigate(['/cadastrar'])
  }




}
