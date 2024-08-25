import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../../services/switch.service';

@Component({
  selector: 'app-crear-planta',
  templateUrl: './crear-planta.component.html',
  styleUrl: './crear-planta.component.css'
})
export class CrearPlantaComponent implements OnInit{

  constructor(private modalsS: SwitchService) {};

  ngOnInit(): void {
  }

  closeModal() {
    this.modalsS.$modal.emit(false);
  }

}
