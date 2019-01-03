import { PersonsService } from '../../persons.service';
import { State, Action, StateContext, Selector, NgxsOnInit, createSelector } from '@ngxs/store';
import { AddPerson, LoadPersons, UpdatePerson } from '../actions/persons.actions';
import { Person } from '../../../contracts/model/Person';
import { tap } from 'rxjs/operators';
import { stateNameErrorMessage } from '@ngxs/store/src/decorators/state';

export class PersonStateModel {
    persons: Person[];
}

@State<PersonStateModel>({
    name: 'persons',
    defaults: {
        persons: []
    }
})

export class PersonState implements NgxsOnInit {

    constructor(private personService: PersonsService) {}

    @Selector()
    static getPersons(state: PersonStateModel) {
        return state.persons;
    }

    static person(id: string) {
        return createSelector([PersonState], (state: PersonStateModel) => {
            return state.persons.find(person => person.id === id);
        });
    }

    ngxsOnInit(ctx?: StateContext<PersonStateModel>) {
        ctx.dispatch(new LoadPersons());
    }

    @Action(LoadPersons)
    load(ctx: StateContext<PersonStateModel>) {
       return this.personService.loadPersons().pipe(
           tap(persons => {
            const state = ctx.getState();
            ctx.setState({ ...state.persons, persons: persons });
           })
       );
    }

    @Action(AddPerson)
    add(ctx: StateContext<PersonStateModel>, { payload }: AddPerson) {
        return this.personService.createPerson( { firstName: payload.firstName, lastName: payload.lastName} ).pipe(
            tap(person => {
             const state = ctx.getState();
             ctx.patchState({ ...state.persons, persons: [ ...state.persons, person ] });
            })
        );
    }

    @Action(UpdatePerson)
    update(ctx: StateContext<PersonStateModel>, { payload }: UpdatePerson) {
        return this.personService.updatePerson( { id: payload.id, firstName: payload.firstName, lastName: payload.lastName} ).pipe(
            tap(person => {
             const state = ctx.getState();
             ctx.patchState({ ...state.persons, persons: [ ...state.persons ] });
            })
        );
    }
}
