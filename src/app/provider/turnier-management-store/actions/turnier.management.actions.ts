import { GameOptions } from 'src/app/contracts/model/TurnierOptions';
import { Person } from 'src/app/contracts/model/Person';

export class SetTurnierName {
    static readonly type = '[OPTIONS] SetName';
    constructor(public payload: string) {}
}

export class SetGameOptoins {
    static readonly type = '[OPTIONS] SetGameOptoins';
    constructor(public payload: GameOptions) {}
}

export class SetCompetitors {
    static readonly type = '[OPTIONS] SetCompetitors';
    constructor(public payload: Person[]) {}
}

export class CreateTurnier {
    static readonly type = '[OPTIONS] CreateTurnier';
    constructor() {}
}
