import { Component, OnInit, Input } from '@angular/core';
import { IBreadCrumb } from './BreadCrumb';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  showBreadCrumb : boolean = true;

  @Input()
  breadCrumbList : IBreadCrumb[];

  constructor() { }

  ngOnInit() {
  }

}
