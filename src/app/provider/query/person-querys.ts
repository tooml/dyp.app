import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../../contracts/model/Person';
import { PersonsStore, PersonsState } from '../store/person-store';

@Injectable({
  providedIn: 'root'
})

export class PersonsQuery extends QueryEntity<PersonsState, Person> {
  constructor(protected store: PersonsStore) {
    super(store);
  }
}
