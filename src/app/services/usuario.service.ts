import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../model/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //URL = 'http://localhost:8080/usuarios/';
  URL = 'https://monitorappbackend.onrender.com';
  constructor(private http: HttpClient) { }

  //Trae el primer perfil
  public getUsuario(): Observable<usuario> {
    return this.http.get<usuario>(this.URL + 'get/perfil/5');
  }
}
