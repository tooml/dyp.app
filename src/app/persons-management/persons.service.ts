import { Person } from './../contracts/model/Person';
import { PersonResponseDto } from './../contracts/dto/PersonsResponseDto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CreatePersonRequestDto } from '../contracts/dto/CreatePersonRequestDto';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  API_ROOT = environment.apiRoot;

  constructor(private http: HttpClient) {}

  loadPersons(): Observable<Person[]> {
    return this.http
      .get<PersonResponseDto[]>(this.API_ROOT + '/api/v1/persons/')
      .pipe(map(response => response as Person[]));
  }

  createPerson(request: CreatePersonRequestDto): Observable<any> {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.post<string>(this.API_ROOT + '/api/v1/persons/', request, {
      headers
    });
  }

  updatePerson(request: CreatePersonRequestDto): Observable<any> {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.post<string>(this.API_ROOT + '/api/v1/persons/', request, {
      headers
    });
  }
}
