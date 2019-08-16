import { Injectable } from '@angular/core';
import { PersonsService } from '../../service/persons.service';
import { tap, take } from 'rxjs/operators';
import { Store } from '../store';
import { PersonState, Person } from './person-state';
import { Observable } from 'rxjs';
import { CommandStatus, Success, Failure } from 'src/app/contracts/messages/CommandStatus';


@Injectable({ providedIn: 'root' })
export class PersonStore extends Store<PersonState> {

  private selectedPerson: Person = undefined;

  constructor(private service: PersonsService) {
    super(new PersonState());
  }

  setSelected(person: Person) {
    this.selectedPerson = person;
  }

  getSelected(): Person {
    return this.selectedPerson;
  }

  hasSelected(): boolean {
    return this.selectedPerson !== undefined;
  }

  loadPersons() {
    this.service.loadPersons().pipe(
      tap(persons => this.setState({
        ...this.getState(),
        persons: persons
      }))
    ).subscribe();
  }

  getPersonTemplate(): Observable<Person> {
    return this.service.loadPersonTemplate().pipe(take(1));
  }

  storePerson(person: Person): Observable<CommandStatus> {
    return this.service.storePerson(person).pipe(
      tap(result => {
        if (result instanceof Success) {
          this.storePersonIntegration(person);
        }
        return result;
      }));
  }

  private storePersonIntegration(person: Person) {
      const state = this.getState();
      const index = state.persons.findIndex(p => p.id === person.id);
      if (index === -1) {
        this.insertPerson(person);
      } else {
        this.updatePerson(person, index, state);
      }
  }

  private insertPerson(person: Person): void {
    this.setState({
      ...this.getState(),
      persons: [...this.getState().persons, person]
    });
  }

  private updatePerson(person: Person, index: number, state: PersonState): void {
    state.persons[index] = person;
    this.setState(state);
  }
}
