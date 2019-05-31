export interface CreateTournamentCommand {
    name: string;
    tables: number;
    sets: number;
    points: number;
    pointsTied: number;
    tied: boolean;
    walkover: boolean;
    fairLots: boolean;
    competitorsIds: string[];
}
