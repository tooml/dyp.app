import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TournamentOptions } from '../store/tournament-prep-store';
import { CreateTournamentCommand } from 'src/app/contracts/messages/CreateTournamentCommand';
import { TournamentQueryResult, Game } from 'src/app/contracts/messages/TournamentQueryResult';
import { GameStore } from '../store/game-store';


@Injectable({
  providedIn: 'root'
})

export class TournamentService {

  API_ROOT = environment.apiRoot;

  private game: Game;

  getActive(): Game {
    return this.game;
  }

  constructor(private http: HttpClient, private store: GameStore) { }

  createTournament(options: TournamentOptions, competitorsIds: string[]) {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    const command: CreateTournamentCommand = {
        name: options.name,
        tables: options.gameOptions.tables,
        sets: options.gameOptions.sets,
        points: options.gameOptions.points,
        pointsTied: options.gameOptions.pointsTied,
        tied: options.gameOptions.tied,
        walkover: options.gameOptions.walkover,
        fairLots: options.gameOptions.fairLots,
        competitorsIds: competitorsIds
    };

    return this.http.post<CreateTournamentCommand>(this.API_ROOT + '/api/v1/turnier/', command, { headers })
    .subscribe(result => console.log(result));
  }

  loadTournament(id: string) {
    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams().set('id', id);

    this.http
      .get<TournamentQueryResult>(this.API_ROOT + '/api/v1/turnier/', { headers: headers, params: params })
      .pipe(map(response => response as TournamentQueryResult)).subscribe(queryResult => {
        const game = this.map(queryResult);
        this.store.set([game]);
      });
  }

  map(queryResult: TournamentQueryResult): Game {
    const game: Game = {
      id: queryResult.id,
      name: queryResult.name,
      rounds: queryResult.rounds
    };

    return game;
  }
}
