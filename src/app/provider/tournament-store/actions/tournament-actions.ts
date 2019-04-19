import { Tournament, Match } from 'src/app/contracts/model/Tournament';

export class TournamentReady {
    static readonly type = '[TOURNAMENT] TournamentReady';
    constructor(public payload: Tournament) {}
}

export class SelectMatch {
    static readonly type = '[TOURNAMENT] SelectMatch';
    constructor(public payload: Match) {}
}
