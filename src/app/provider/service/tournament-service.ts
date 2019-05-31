import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { PersonStockQueryResult, Person } from 'src/app/contracts/messages/PersonStockQueryResult';
import { TournamentOptions } from '../store/tournament-prep-store';
import { Competitor } from '../store/person-store';
import { CreateTournamentCommand } from 'src/app/contracts/messages/CreateTournamentCommand';


@Injectable({
  providedIn: 'root'
})

export class TournamentService {

  API_ROOT = environment.apiRoot;

  constructor(private http: HttpClient) { }

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
    .subscribe(x => x);
  }
}
