export interface TournamentStockQueryResult {
    tournamentInfos: TournamentInfo[];
}

export interface TournamentInfo {
    id: string;
    name: string;
    created: Date;
}
