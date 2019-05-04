import { GameOptions } from './../contracts/model/TournamentOptions';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { TournamentOptions } from '../contracts/model/TournamentOptions';
import { Person } from '../contracts/model/Person';

@Injectable({
  providedIn: 'root'
})
export class TournamentManagementService {

  API_ROOT = environment.apiRoot;

  private tournamentOptions: TournamentOptions = {
    name: '',
    gameOptions: {
        tables: 1,
        sets: 2,
        points: 2,
        pointsTied: 1,
        tied: true,
        walkover: true,
        fairLots: false
    },
    competitors: []
  };

  constructor() { }

  getTournamentOptions() {
    return this.tournamentOptions;
  }

  setTournamentName(name: string) {
    this.tournamentOptions.name = name;
  }

  setTournamentGameOptions(gameOptions: GameOptions) {
    this.tournamentOptions.gameOptions = gameOptions;
  }

  setTournamentCompetitors(competitors: Person[]) {
    this.tournamentOptions.competitors = competitors;
  }
}
