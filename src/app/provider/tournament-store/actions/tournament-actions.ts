import { Tournament } from 'src/app/contracts/model/Tournament';

export class TournamentReady {
    static readonly type = '[TOURNAMENT] TournamentReady';
    constructor(public payload: Tournament) {}
}
