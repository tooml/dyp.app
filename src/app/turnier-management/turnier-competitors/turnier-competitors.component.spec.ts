import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnierCompetitorsComponent } from './turnier-competitors.component';

describe('TurnierCompetitorsComponent', () => {
  let component: TurnierCompetitorsComponent;
  let fixture: ComponentFixture<TurnierCompetitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnierCompetitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnierCompetitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
