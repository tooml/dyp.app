import { Person } from 'src/app/contracts/model/Person';

export class LoadPersons {
    static readonly type = '[PERSON] Load';
    constructor() {}
}

export class AddPerson {
    static readonly type = '[PERSON] Add';
    constructor(public payload: Person) {}
}

export class UpdatePerson {
    static readonly type = '[PERSON] Update';
    constructor(public payload: Person) {}
}
