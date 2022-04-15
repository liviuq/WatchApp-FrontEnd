import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MainButtonComponent } from './components/main-button/main-button.component';
import { CustomInputFieldComponent } from './components/custom-input-field/custom-input-field.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainButtonComponent,
    CustomInputFieldComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainButtonComponent,
    CustomInputFieldComponent
  ]
})
export class SharedModule { }
