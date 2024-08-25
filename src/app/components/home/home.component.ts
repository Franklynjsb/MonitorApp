import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  isLogged = false;
  
  constructor(private router:Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
}

}
