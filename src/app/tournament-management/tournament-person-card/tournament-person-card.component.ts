import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PersonSelection } from '../ui-data/PersonSelection';

@Component({
  selector: 'app-tournament-person-card',
  templateUrl: './tournament-person-card.component.html',
  styleUrls: ['./tournament-person-card.component.scss']
})
export class TournamentPersonCardComponent  {

  @Input() personSelection: PersonSelection;

  constructor() { }
}
