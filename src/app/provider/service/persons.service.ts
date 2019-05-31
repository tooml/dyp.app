import { PersonsStore } from '../store/person-store';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PersonStockQueryResult, Person } from 'src/app/contracts/messages/PersonStockQueryResult';
import { NewPersonQueryResult } from 'src/app/contracts/messages/NewPersonQueryResult';
import { Observable } from 'rxjs';
import { StorePersonCommand } from 'src/app/contracts/messages/StorePersonCommand';
import { TournamentPrepStore } from '../store/tournament-prep-store';

@Injectable({
  providedIn: 'root'
})

export class PersonsService {

  API_ROOT = environment.apiRoot;
  private activePerson: Person;

  constructor(private http: HttpClient, private store: PersonsStore) { }

  setActive(person: Person) {
    this.activePerson = person;
  }

  getActive(): Person {
    return this.activePerson;
  }

  hasActive(): boolean {
    return this.activePerson !== undefined;
  }

  loadPersons() {
    this.http
      .get<PersonStockQueryResult>(this.API_ROOT + '/api/v1/persons/')
      .pipe(map(response => response as PersonStockQueryResult)).subscribe(queryResult => this.store.set(queryResult.persons));
  }

  newPerson(): Observable<Person> {
    return this.http
    .get<NewPersonQueryResult>(this.API_ROOT + '/api/v1/person/')
    .pipe(map(response => {

      const person = new Person();
      person.id = response.id;
      person.firstName = response.firstName;
      person.lastName = response.lastName;

      return person;
    }));
  }

  storePerson(person: Person) {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    const command = new StorePersonCommand();
    command.id = person.id;
    command.firstName = person.firstName;
    command.lastName = person.lastName;

    return this.http.post<Person>(this.API_ROOT + '/api/v1/person/', command, { headers })
    .subscribe(x => this.store.upsert(person.id, person));
  }
}
