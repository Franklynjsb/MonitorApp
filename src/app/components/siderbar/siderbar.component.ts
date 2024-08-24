import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrl: './siderbar.component.css'
})
export class SiderbarComponent implements OnInit {
  
  constructor(private router:Router) {}

  ngOnInit(): void {
      
  }

  login() {
    this.router.navigate(['/login']);
  }

}
