
export class Person {
    constructor(public id: string, public firstName: string, public lastName: string) { }
}

export class PersonState {
    persons: Person[] = [];
}
