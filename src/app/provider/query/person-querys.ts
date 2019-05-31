import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PersonsStore, PersonsState, Competitor } from '../store/person-store';
import { Person } from 'src/app/contracts/messages/PersonStockQueryResult';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PersonsQuery extends QueryEntity<PersonsState, Person> {
  constructor(protected store: PersonsStore) { super(store); }

  initCompetitors(): Observable<Competitor[]> {
    return this.selectAll().pipe(map(persons => persons.map(person => {
      const competitor: Competitor = { person: person, selected: false };
      return competitor;
    })));
  }
}
