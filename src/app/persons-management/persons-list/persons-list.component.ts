import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Person } from 'src/app/contracts/model/Person';
import { Select, Store } from '@ngxs/store';
import { PersonState } from '../../provider/person-management-store/person.state';
import { SelectPerson } from '../../provider/person-management-store/actions/persons.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent {

  @Select(PersonState.getPersons) persons: Observable<Person[]>;

  constructor(private router: Router, private store: Store) {}

  addPerson() {
    const person = this.createNewPerson();
    this.store.dispatch(new SelectPerson({ person: person, isNewPerson: true }));
    this.router.navigate(['persons', person.id]);
  }

  createNewPerson(): Person {
    return { id: uuid(), firstName: '', lastName: '', turnierParticipations: 0, games: 0, wins: 0, looses: 0, competitor: false };
  }
}
