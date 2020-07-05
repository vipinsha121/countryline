import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackALoadComponent } from './track-a-load.component';

describe('TrackALoadComponent', () => {
  let component: TrackALoadComponent;
  let fixture: ComponentFixture<TrackALoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackALoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackALoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
