import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../services/switch.service';
import { SPlantaService } from '../../services/s-planta.service';
import { TokenService } from '../../services/token.service';
import { Planta } from '../../model/planta';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit {

  planta : Planta[] = [];


  modalSwitch:boolean = false;

  constructor(private modalsS: SwitchService, private splanta: SPlantaService, private tokenService: TokenService) {

  }

  isLogged = false;

  ngOnInit(): void {

    this. cargarPlanta();

    this.modalsS.$modal.subscribe((valor) => {
      this.modalSwitch = valor;
    })

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  openModalEdit(): void {
    this.modalSwitch = true;
  };

  openModal(): void {
    this.modalSwitch = true;
  };

  cargarPlanta() : void {
    this.splanta.lista().subscribe( data => {this.planta = data;})
  };

  deletePlanta(id?: number) : void {
    if(id != undefined) {
      this.splanta.delete(id).subscribe(
        data => {
          this.cargarPlanta();
        }, err => {
          alert ("No se pudo borrar la planta")
        }
      )
    }
  }
  


}

