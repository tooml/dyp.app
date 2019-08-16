import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PersonStockQueryResult } from 'src/app/contracts/messages/PersonStockQueryResult';
import { Observable } from 'rxjs';
import { StorePersonCommand } from 'src/app/contracts/messages/StorePersonCommand';
import { PersonTemplateQueryResult } from 'src/app/contracts/messages/PersonTemplateQueryResult';
import { Person } from '../stores/persons/person-state';
import { CommandStatus, Success, Failure } from 'src/app/contracts/messages/CommandStatus';

@Injectable({
  providedIn: 'root'
})

export class PersonsService {

  API_ROOT = environment.apiRoot;

  constructor(private http: HttpClient) { }

  loadPersons(): Observable<Person[]> {
    return this.http.get<PersonStockQueryResult>(this.API_ROOT + '/api/v1/person/all')
      .pipe(map(response => {
        return this.mappingPersonStock(response);
      }));
  }

  loadPersonTemplate(): Observable<Person> {
    return this.http.get<PersonTemplateQueryResult>(this.API_ROOT + '/api/v1/person/template')
      .pipe(map(response => {
        return this.mappingPersonTemplate(response);
      }));
  }

  storePerson(person: Person): Observable<CommandStatus> {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const command = this.mappingStoreCommand(person);

    return this.http.post(this.API_ROOT + '/api/v1/person/', command, { headers })
    .pipe(map(response => {
      if (response === 200) {
        return new Success();
      } else {
        const error = new Failure();
        error.errorMessage = 'Fehler beim speichern';
        return error;
      }
    }));
  }

  private mappingPersonStock(message: PersonStockQueryResult): Person[] {
    return message.persons.map(p => new Person(p.id, p.firstName, p.lastName));
  }

  private mappingPersonTemplate(message: PersonTemplateQueryResult): Person {
    return new Person(message.id, message.firstName, message.lastName);
  }

  private mappingStoreCommand(person: Person): StorePersonCommand {
    const command = new StorePersonCommand();
    command.id = person.id;
    command.firstName = person.firstName;
    command.lastName = person.lastName;

    return command;
  }
}
