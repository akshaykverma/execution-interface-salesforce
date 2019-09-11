import { Component, OnInit } from '@angular/core';
import { IBreadCrumb } from '../shared/BreadCrumb';

@Component({
  selector: 'app-opportunity-detail',
  templateUrl: './opportunity-detail.component.html',
  styleUrls: ['./opportunity-detail.component.css']
})
export class OpportunityDetailComponent implements OnInit {

  breadCrumbList :IBreadCrumb[] = [
    {"name": "Home", "routerLink": "['/home']"}, 
    {"name": "Opportunity List", "routerLink": "['/opportunityList']"},
    {"name": "Opportunity Detail", "routerLink": "['/opportunityDetail']"}]; 
    constructor() { }

  ngOnInit() {
  }

}
