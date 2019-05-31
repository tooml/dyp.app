
export class Person {
    id: string;
    firstName: string;
    lastName: string;
    turnierParticipations: number;
    games: number;
    wins: number;
    looses: number;
}

export class PersonStockQueryResult {
    persons: Person[];
}
