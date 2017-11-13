import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { SlotMachineButtonModule } from './slot-machine-button/slot-machine-button.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    SlotMachineButtonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
