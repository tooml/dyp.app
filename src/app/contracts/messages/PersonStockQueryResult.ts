
export class PersonQueryResult {
    id: string;
    firstName: string;
    lastName: string;
}

export class PersonStockQueryResult {
    persons: PersonQueryResult[];
}
