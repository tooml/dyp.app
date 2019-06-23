import { GameStore } from '../store/game-store';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GameState } from '../store/game-store';
import { Game, Round, Match } from 'src/app/contracts/messages/TournamentQueryResult';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GameQuery extends QueryEntity<GameState, Game> {
  constructor(protected store: GameStore) { super(store); }

  selectRounds(): Observable<Round[]> {
    return this.selectFirst(game => game.rounds);
  }

  selectMatch(id: string): Observable<Match> {
    return this.selectFirst(game => game.rounds[0].matches[0]);
  }
}
