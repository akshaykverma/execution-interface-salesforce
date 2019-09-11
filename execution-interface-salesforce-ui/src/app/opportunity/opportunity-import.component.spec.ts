import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityImportComponent } from './opportunity-import.component';

describe('OpportunityImportComponent', () => {
  let component: OpportunityImportComponent;
  let fixture: ComponentFixture<OpportunityImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
