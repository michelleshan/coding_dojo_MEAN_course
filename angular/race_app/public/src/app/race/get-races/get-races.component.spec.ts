import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRacesComponent } from './get-races.component';

describe('GetRacesComponent', () => {
  let component: GetRacesComponent;
  let fixture: ComponentFixture<GetRacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
