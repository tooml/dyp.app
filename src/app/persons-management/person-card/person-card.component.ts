import { Store } from '@ngxs/store';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../contracts/model/Person';
import { SelectPerson } from '../../provider/person-management-store/actions/persons.actions';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {
  @Input() person: Person;

  constructor(private router: Router, private store: Store) {}

  editPerson() {
    this.store.dispatch(new SelectPerson({ person: this.person, isNewPerson: false }));
    this.router.navigate(['persons', this.person.id]);
  }
}
