export interface TournamentQueryResult {
    id: string;
    name: string;
    rounds: Round[];
}

export interface Round {
    name: string;
    matches: Match[];
}

export interface Match {
    id: string;
    home: string;
    away: string;
    setsToWin: number;
    sets: SetResult[];
}

export enum SetResult {
    None = 0,
    Home = 1,
    Tied = 2,
    Away = 3
}

export interface Game {
    id: string;
    name: string;
    rounds: Round[];
}
