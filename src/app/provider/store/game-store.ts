import { Injectable } from '@angular/core';
import { EntityState, StoreConfig, EntityStore } from '@datorama/akita';
import { Game } from 'src/app/contracts/messages/TournamentQueryResult';

// https://medium.com/@rmcavin/my-favorite-state-management-technique-in-angular-rxjs-behavior-subjects-49f18daa31a7


export interface GameState extends EntityState<Game> { }

@Injectable({ providedIn: 'root' })

@StoreConfig({ name: 'game', idKey: 'id' })
export class GameStore extends EntityStore<GameState, Game> {
  constructor() { super(); }
}
