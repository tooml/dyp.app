import { FixtureResponseDto, SetResponseDto } from './../contracts/dto/FixtureResponseDto';
import { Injectable } from '@angular/core';
import { CreateTournamentRequestDto } from '../contracts/dto/CreateTournamentRequestDto';
import { Observable } from 'rxjs';
import { CreateTournamentResponseDto } from '../contracts/dto/CreateTournamentResponseDto';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tournament, Match, SetResult } from '../contracts/model/Tournament';
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
          rounds: [{ name: response.name, matches: this.mapMatch(response.round.matches) }]
        };
        return tournament;
      }));
  }

  mapMatch(fixtures: FixtureResponseDto[]): Match[] {
    return fixtures.map(fixture => {
      const match: Match = {
        id: fixture.id,
        home: fixture.home,
        away: fixture.away,
        setsToWin:
        fixture.setsToWin,
        sets: this.mapSets(fixture.sets)
      };
      return match;
    });
  }

  mapSets(sets: SetResponseDto[]): SetResult[] {
    return sets.map(set => {
      const result: SetResult = set.result.valueOf();
      return result;
    });
  }
}
