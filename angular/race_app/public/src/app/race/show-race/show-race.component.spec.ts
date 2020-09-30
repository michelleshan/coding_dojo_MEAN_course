import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRaceComponent } from './show-race.component';

describe('ShowRaceComponent', () => {
  let component: ShowRaceComponent;
  let fixture: ComponentFixture<ShowRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
