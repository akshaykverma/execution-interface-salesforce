import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityListComponent } from './opportunity-list.component';
import { OpportunityDetailComponent } from './opportunity-detail.component';
import { OpportunityImportComponent } from './opportunity-import.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [OpportunityListComponent, OpportunityDetailComponent, OpportunityImportComponent]
})
export class OpportunityModule { }
