import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { TournamentInfo } from 'src/app/contracts/messages/TournamentStockQueryResult';





export interface TournamentsInfoState extends EntityState<TournamentInfo> { }

@Injectable({ providedIn: 'root' })

@StoreConfig({ name: 'tournamentsInfos', idKey: 'id' })
export class TournamentsInfoStore extends EntityStore<TournamentsInfoState, TournamentInfo> {
    constructor() { super(); }
}
