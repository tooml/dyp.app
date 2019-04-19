
export interface Tournament {
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
}
