import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
// import { TournamentPrepStore, GameOptions, TournamentOptions } from '../store/tournament-prep-store';

@Injectable({
  providedIn: 'root'
})

export class TournamentPrepService {

  API_ROOT = environment.apiRoot;

  constructor(private http: HttpClient) { }

    // init() {
    //     const initialState: TournamentOptions = {
    //         id: '1',
    //         name: '',
    //         gameOptions: {
    //             tables: 1,
    //             sets: 2,
    //             points: 2,
    //             pointsTied: 1,
    //             tied: true,
    //             walkover: true,
    //             fairLots: false
    //         }
    //     };

    //     this.store.set([initialState]);
    //     this.store.setActive(initialState.id);
    // }

  updateName(name: string) {
      // this.store.updateActive(prep => {
      //     return {
      //     name: name,
      //     ...prep.gameOptions
      //     };
      //   });
  }

  updateOptions() {
    // this.store.updateActive(prep => {
    //     return {
    //     ...prep,
    //     gameOptions: optipns
    //     };
    //   });
  }
}
