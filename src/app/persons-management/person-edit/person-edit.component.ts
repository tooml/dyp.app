import { Component } from '@angular/core';
import { Person } from 'src/app/contracts/model/Person';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { PersonState } from '../+state/state/person.state';
import { AddPerson, UpdatePerson } from '../+state/actions/persons.actions';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent {

  person: Person;

  constructor(private route: ActivatedRoute, private store: Store) {
    const personId = this.route.snapshot.params.personId;
    this.loadPerson(personId);
  }

  loadPerson(personId: string) {
    if (personId === '0') {
      this.person = { id: '', firstName: '', lastName: ''};
    } else {
      this.store.select(PersonState.person(personId)).subscribe(person => {
        this.person = person;
      });
    }
  }

  savePerson() {
    if (this.person.id === '') {
      this.store.dispatch(new AddPerson(this.person));
    } else {
      console.log('update');
      this.store.dispatch(new UpdatePerson(this.person));
    }
  }
}
