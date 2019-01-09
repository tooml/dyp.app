import { Person } from './Person';

export interface TurnierOptions {
    name: string;
    gameOptions: GameOptions;
    competitors: Person[];
}

export interface GameOptions {
    tables: number;
    sets: number;
    points: number;
    pointsDraw: number;
    draw: boolean;
    walkover: boolean;
    fairLots: boolean;
}
