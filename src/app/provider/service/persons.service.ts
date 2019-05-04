import { PersonsStore } from '../store/person-store';
import { Person, createPerson } from '../../contracts/model/Person';
import { PersonResponseDto } from '../../contracts/dto/PersonsResponseDto';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CreatePersonRequestDto } from '../../contracts/dto/CreatePersonRequestDto';
import { UpdatePersonRequestDto } from '../../contracts/dto/UpdatePersonRequestDto';
import { ID } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})

export class PersonsService {

  API_ROOT = environment.apiRoot;

  constructor(private http: HttpClient, private store: PersonsStore) { }

  setActive(id: ID) {
    this.store.setActive(id);
  }

  loadPersons() {
    this.http
      .get<PersonResponseDto[]>(this.API_ROOT + '/api/v1/persons/')
      .pipe(map(response => response as Person[])).subscribe(persons => this.store.set(persons));
  }

  createPerson(request: CreatePersonRequestDto) {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.post<Person>(this.API_ROOT + '/api/v1/persons/', request, { headers })
    .pipe(map(response => response as Person)).subscribe(person => this.store.add(person));
  }

  updatePerson(request: UpdatePersonRequestDto) {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.put<Person>(this.API_ROOT + '/api/v1/persons/', request, { headers })
    .pipe(map(response => response as Person)).subscribe(person =>
      this.store.update(person.id, {...person}));
  }

  createNewPerson() {
    return createPerson();
  }
}
