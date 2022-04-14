import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { CustomInputFieldComponent } from './components/custom-input-field/custom-input-field.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainButtonComponent,
    CustomInputFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
      MainButtonComponent,
      CustomInputFieldComponent
  ]
})
export class SharedModule { }
