import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../../services/switch.service';
import { SPlantaService } from '../../../services/s-planta.service';
import { Router } from '@angular/router';
import { Planta } from '../../../model/planta';

@Component({
  selector: 'app-crear-planta',
  templateUrl: './crear-planta.component.html',
  styleUrl: './crear-planta.component.css'
})
export class CrearPlantaComponent implements OnInit{

  pais: string = '';
  nombrePlanta : string = '';
  lecturas : number = 0;
  alertasMedias : number = 0;
  alertasRojas : number = 0;

  constructor(private modalsS: SwitchService,private sPlanta: SPlantaService, private router: Router) {};

  ngOnInit(): void {
  }

  closeModal() {
    this.modalsS.$modal.emit(false);
  }

  onCreate(): void {
    const planta = new Planta(this.pais,this.nombrePlanta,this.lecturas,this.alertasMedias,this.alertasRojas);
    this.sPlanta.save(planta).subscribe(data => {
      alert("Planta creada correctamente!");
      this.closeModal();
    }, err => {
      alert("Error al crear planta");
      this.closeModal();
    });
  } 

}
