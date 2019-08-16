import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/provider/stores/persons/person-state';
import { PersonStore } from 'src/app/provider/stores/persons/person-store';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {

  @Input() person: Person;

  constructor(private router: Router, private store: PersonStore) {}

  editPerson() {
    this.store.setSelected(this.person);
    this.router.navigate(['persons', this.person.id]);
  }
}
