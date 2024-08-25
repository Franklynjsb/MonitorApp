import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../../services/switch.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit {

  modalSwitch:boolean = true;

  constructor(private modalsS: SwitchService) {}

  ngOnInit(): void {

    this.modalsS.$modal.subscribe((valor) => {
      this.modalSwitch = valor;
    })

  }

  openModal(): void {
    this.modalSwitch = true;
  }

}
