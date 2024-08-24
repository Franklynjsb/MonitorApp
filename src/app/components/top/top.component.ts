import { Component, OnInit } from '@angular/core';
import { usuario } from '../../model/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent implements OnInit {

  //Vacio para que no cree cierto dato desde la inicialización
  usuario: usuario = new usuario("", "");

  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(data => { this.usuario = data });
  }


}
