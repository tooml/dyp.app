import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TournamentsInfoStore } from '../store/tournament-info-store';
import { TournamentStockQueryResult } from 'src/app/contracts/messages/TournamentStockQueryResult';

@Injectable({
  providedIn: 'root'
})

export class TournamentsIfnoService {

  API_ROOT = environment.apiRoot;

  constructor(private http: HttpClient, private store: TournamentsInfoStore) { }


  loadTournamentsInfos() {
    this.http
      .get<TournamentStockQueryResult>(this.API_ROOT + '/api/v1/turnier/all/info/')
      .pipe(map(response => response as TournamentStockQueryResult)).subscribe(queryResult => this.store.set(queryResult.tournamentInfos));
  }
}
