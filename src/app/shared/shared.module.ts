import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { MainButtonComponent } from './components/main-button/main-button.component';
import { CustomInputFieldComponent } from './components/custom-input-field/custom-input-field.component';
import { FormsModule } from '@angular/forms';
import { LoginButtonComponent } from './components/header/components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/header/components/logout-button/logout-button.component';
import { PagesModule } from '../pages/pages.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainButtonComponent,
    CustomInputFieldComponent,
    LoginButtonComponent,
    LogoutButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    PagesModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainButtonComponent,
    CustomInputFieldComponent
  ]
})
export class SharedModule { }
