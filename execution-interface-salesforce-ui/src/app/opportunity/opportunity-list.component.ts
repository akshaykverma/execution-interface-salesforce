import { Component, OnInit } from '@angular/core';

import { IOpportunity } from './opportunity';
import { OpportunityService } from './opportunity.service';
import { IBreadCrumb } from '../shared/BreadCrumb';

@Component({
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.css']
})
export class OpportunityListComponent implements OnInit {
  pageTitle = 'Opportunity List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  
  breadCrumbList :IBreadCrumb[] = [
    {"name": "Home", "routerLink": "['/home']"}, 
    {"name": "Opportunity List", "routerLink": "['/opportunityList']"}]
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IOpportunity[] = [];
  products: IOpportunity[] = [];

  constructor(private productService: OpportunityService) {

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Opportunity List: ' + message;
  }

  performFilter(filterBy: string): IOpportunity[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IOpportunity) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getOpportunities().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }
}
