import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrl: './siderbar.component.css'
})
export class SiderbarComponent implements OnInit {

  isLogged = false;
  
  constructor(private router:Router, private tokenService: TokenService) {}

  ngOnInit(): void {
      if (this.tokenService.getToken()){
        this.isLogged = true;
      }else {
        this.isLogged = false;
      }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login']);
  }

}
