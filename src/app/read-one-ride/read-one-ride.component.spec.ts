import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOneRideComponent } from './read-one-ride.component';

describe('ReadOneRideComponent', () => {
  let component: ReadOneRideComponent;
  let fixture: ComponentFixture<ReadOneRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOneRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOneRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
