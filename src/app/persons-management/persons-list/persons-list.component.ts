import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Person } from 'src/app/contracts/model/Person';
import { Store, Select } from '@ngxs/store';
import { PersonState } from '../+state/state/person.state';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent {

  @Select(PersonState.getPersons) persons: Observable<Person[]>;

  constructor(private router: Router, private store: Store) {}

  addPerson() {
   this.router.navigateByUrl('/persons/0');
  }
}
