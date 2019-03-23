import { Person } from './Person';

export interface TournamentOptions {
    name: string;
    gameOptions: GameOptions;
    competitors: Person[];
}

export interface GameOptions {
    tables: number;
    sets: number;
    points: number;
    pointsTied: number;
    tied: boolean;
    walkover: boolean;
    fairLots: boolean;
}
