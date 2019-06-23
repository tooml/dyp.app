import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TournamentsInfoState, TournamentsInfoStore } from '../store/tournament-info-store';
import { TournamentInfo } from 'src/app/contracts/messages/TournamentStockQueryResult';

@Injectable({
  providedIn: 'root'
})

export class TournamentsInfoQuery extends QueryEntity<TournamentsInfoState, TournamentInfo> {
  constructor(protected store: TournamentsInfoStore) { super(store); }
}
