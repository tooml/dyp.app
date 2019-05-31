import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TournamentPrepStore, TournamentPrepState, TournamentOptions } from '../store/tournament-prep-store';

@Injectable({
  providedIn: 'root'
})

export class TournamentPrepQuery extends QueryEntity<TournamentPrepState, TournamentOptions> {
  constructor(protected store: TournamentPrepStore) { super(store); }
}
