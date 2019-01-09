import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnierPersonCardComponent } from './turnier-person-card.component';

describe('TurnierPersonCardComponent', () => {
  let component: TurnierPersonCardComponent;
  let fixture: ComponentFixture<TurnierPersonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnierPersonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnierPersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
