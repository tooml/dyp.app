import { Person } from 'src/app/contracts/model/Person';

export class LoadPersons {
    static readonly type = '[PERSON] Load';
    constructor() {}
}

export class NewPerson {
    static readonly type = '[PERSON] New';
    constructor(public payload: Person) {}
}

export class NewPersonSuccess {
    static readonly type = '[PERSON] New Success';
    constructor(public payload: Person) {}
}

export class UpdatePerson {
    static readonly type = '[PERSON] Update';
    constructor(public payload: Person) {}
}

export class UpdatePersonSuccess {
    static readonly type = '[PERSON] Update Success';
    constructor(public payload: Person) {}
}

export class SelectPerson {
    static readonly type = '[PERSON] Select';
    constructor(public payload: { person: Person, isNewPerson: boolean }) {}
}
