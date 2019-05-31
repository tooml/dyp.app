import { GameOptions } from './tournament-prep-store';
import { Injectable } from '@angular/core';
import { EntityState, StoreConfig, EntityStore } from '@datorama/akita';

export interface TournamentOptions {
    id: string;
    name: string;
    gameOptions: GameOptions;
}

export interface GameOptions {
    tables: number;
    sets: number;
    points: number;
    pointsTied: number;
    tied: boolean;
    walkover: boolean;
    fairLots: boolean;
}

export interface TournamentPrepState extends EntityState<TournamentOptions> { }

@Injectable({ providedIn: 'root' })

@StoreConfig({ name: 'tournamentOptions', idKey: 'id' })
export class TournamentPrepStore extends EntityStore<TournamentPrepState, TournamentOptions> {
    constructor() { super(); }
}
