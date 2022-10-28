import { NgModule } from '@angular/core';
import { HeaderToggleModule } from "./header-toggle/header-toggle.module";

const componentsModules = [
  HeaderToggleModule
]

@NgModule({
  imports: [
    ...componentsModules
  ],
  exports: componentsModules
})
export class ComponentsModule
{ }
