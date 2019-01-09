import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnierOptionsComponent } from './turnier-options.component';

describe('TurnierOptionsComponent', () => {
  let component: TurnierOptionsComponent;
  let fixture: ComponentFixture<TurnierOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnierOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnierOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
