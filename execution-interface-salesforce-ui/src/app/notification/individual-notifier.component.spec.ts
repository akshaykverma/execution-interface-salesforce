import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualNotifierComponent } from './individual-notifier.component';

describe('IndividualNotifierComponent', () => {
  let component: IndividualNotifierComponent;
  let fixture: ComponentFixture<IndividualNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualNotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
