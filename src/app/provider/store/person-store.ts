import { Injectable } from '@angular/core';
import { EntityState, StoreConfig, EntityStore } from '@datorama/akita';
import { Person } from 'src/app/contracts/messages/PersonStockQueryResult';

// https://medium.com/@rmcavin/my-favorite-state-management-technique-in-angular-rxjs-behavior-subjects-49f18daa31a7


export interface Competitor {
  person: Person;
  selected: boolean;
}

export interface PersonsState extends EntityState<Person> { }

@Injectable({ providedIn: 'root' })

@StoreConfig({ name: 'persons' })
export class PersonsStore extends EntityStore<PersonsState, Person> {
  constructor() { super(); }
}
