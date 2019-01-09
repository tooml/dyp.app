import { Component, Input } from '@angular/core';
import { Person } from 'src/app/contracts/model/Person';

@Component({
  selector: 'app-turnier-person-card',
  templateUrl: './turnier-person-card.component.html',
  styleUrls: ['./turnier-person-card.component.scss']
})
export class TurnierPersonCardComponent {
  @Input() person: Person;

  constructor() {}
}

