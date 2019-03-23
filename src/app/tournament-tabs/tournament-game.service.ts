import { Injectable } from '@angular/core';
import { CreateTournamentRequestDto } from '../contracts/dto/CreateTournamentRequestDto';
import { Observable } from 'rxjs';
import { CreateTournamentResponseDto } from '../contracts/dto/CreateTournamentResponseDto';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tournament } from '../contracts/model/Tournament';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TournamentGameService {
  API_ROOT = environment.apiRoot;

  constructor(private http: HttpClient) { }

  createTournament(request: CreateTournamentRequestDto): Observable<Tournament> {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post<CreateTournamentResponseDto>(this.API_ROOT + '/api/v1/turnier/', request, { headers })
      .pipe(map(response => {
        const tournament: Tournament = {
          id: response.id,
          name: response.name,
          rounds: [{ name: response.name, matches: [{ id: '', name: ''}] }]
        };
        return tournament;
      }));
  }
}
