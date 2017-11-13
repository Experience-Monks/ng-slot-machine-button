import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlotMachineWheelComponent } from './slot-machine-wheel.component';
import { SlotMachineButtonComponent } from './slot-machine-button.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [
    SlotMachineWheelComponent,
    SlotMachineButtonComponent
  ],
  declarations: [
    SlotMachineWheelComponent,
    SlotMachineButtonComponent
  ]
})
export class SlotMachineButtonModule { }
