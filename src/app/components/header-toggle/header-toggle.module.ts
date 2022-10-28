import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderToggleComponent } from "./header-toggle.component";

@NgModule({
  declarations: [
    HeaderToggleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderToggleComponent
  ]
})
export class HeaderToggleModule { }
