import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [CommonModule,
    AppRoutingModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent,
    CommonModule,
    FormsModule]
})
export class SharedModule { }
