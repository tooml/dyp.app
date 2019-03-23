export interface CreateTournamentRequestDto {
    name: string;
    competitors: string[];
    tables: number;
    sets: number;
    points: number;
    pointsTied: number;
    tied: boolean;
    walkover: boolean;
    fairLots: boolean;
}
