import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../welcome/welcome.service';
import { IWelcome } from '../welcome/welcome';
import { IMenu } from './menu';

/**
 * Used as a nested component handling the menu buttons layout
 */
@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {

  /**
   * holds the data fetched from the service 
   */
  welcomeData: IWelcome;
  /**
   * holds any error message recieved while fetching data
   */
  errorMessage: string;
  /**
   * formatted array of rows 
   */
  menuRowItems: any[] = [];
  /**
   * Menu row classes
   */
  menuRowClass: string[] = ["col-md-12 col-xs-12", "col-md-12 col-xs-12 btn-menu-row"];
  /**
   * Array of classes for dynamic styling of a row containing buttons
   */
  // rowItemClass: string[] = ["col-md-10 col-md-offset-1  col-xs-10 col-xs-offset-1", "col-md-4 col-md-offset-1 col-xs-5 col-xs-offset-1"];
  rowItemClass: string[] = ["col-md-10 col-xs-12", "col-md-5 col-xs-6"];
  /**
   * Array of classes for dynamic styling of a button
   */
  btnItemClass: string[] = ["btn btn-primary btn-extend text-center", "btn btn-sq btn-primary text-center"]

  /**
   * Contructor dependency injection
   * @param welcomeDataServie service for welcome data
   */
  constructor(private welcomeDataServie: WelcomeDataService) { }
 
  /**
   * Initialization life cycle hook to fetch welcome page data
   */
  ngOnInit() {
    // fetching the welcome data from the service
    this.welcomeDataServie.getWelcomePageData().subscribe(
      data => {
        this.welcomeData = data;
        this.createMenuItemsRow(this.welcomeData.menu);
      },
      error => this.errorMessage = <any>error
    );
  }

  /**
   * Wraps the menu items in a row 
   * @param menuItems items fetched from the backend
   */
  createMenuItemsRow(menuItems: IMenu[]): void {
    let rowItems = [];
    
    menuItems.forEach((item, index) => {
      rowItems.push(item);
      if ((index+1) % 2 == 0) {
        this.menuRowItems.push(rowItems);
        rowItems = [];
      }
    });

    if(rowItems.length > 0) {
      this.menuRowItems.push(rowItems);
    }

    console.log(this.menuRowItems);
  }

}
