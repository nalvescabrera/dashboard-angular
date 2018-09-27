import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesInProgressComponent } from './rides-in-progress.component';

describe('RidesInProgressComponent', () => {
  let component: RidesInProgressComponent;
  let fixture: ComponentFixture<RidesInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidesInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
