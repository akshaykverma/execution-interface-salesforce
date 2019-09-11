import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupNotifierComponent } from './group-notifier.component';

describe('GroupNotifierComponent', () => {
  let component: GroupNotifierComponent;
  let fixture: ComponentFixture<GroupNotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupNotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupNotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
