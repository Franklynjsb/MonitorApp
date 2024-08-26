import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../../services/switch.service';
import { SPlantaService } from '../../../services/s-planta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Planta } from '../../../model/planta';

@Component({
  selector: 'app-edit-planta',
  templateUrl: './edit-planta.component.html',
  styleUrl: './edit-planta.component.css'
})
export class EditPlantaComponent implements OnInit{

  planta : Planta = null;

  constructor(private modalsS: SwitchService, private sPlanta: SPlantaService, private activatedRouter: ActivatedRoute,private router: Router) {};

  modalSwitch:boolean = false;

  ngOnInit(): void {

    this.modalsS.$modal.subscribe((valor) => {
      this.modalSwitch = valor;
    })

    const id = this.activatedRouter.snapshot.params['id'];
    this.sPlanta.detail(id).subscribe(
      data => {
        this.planta = data;
      }, err => {
        alert("Error al editar planta");
        this.closeModal();
      }
    )
  }


  openModalEdit(): void {
    this.modalSwitch = true;
  };

  closeModal() {
    this.modalsS.$modal.emit(false);
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.sPlanta.update(id, this.planta).subscribe(data => {
      alert("Planta editada correctamente!");
      this.closeModal();
    }, err => {
      alert("Error al editar planta");
      this.closeModal();
    });
  };
}
