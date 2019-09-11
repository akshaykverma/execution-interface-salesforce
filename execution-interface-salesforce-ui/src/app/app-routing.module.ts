import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { OpportunityListComponent } from './opportunity/opportunity-list.component';
import { OpportunityDetailComponent } from './opportunity/opportunity-detail.component';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'opportunityList', component: OpportunityListComponent },
  { path: 'opportunityDetail', component: OpportunityDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
