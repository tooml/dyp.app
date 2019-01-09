import { PersonsService } from '../../persons-management/persons.service';
import { State, Action, StateContext, Selector, NgxsOnInit, createSelector } from '@ngxs/store';
import { NewPerson, LoadPersons, UpdatePerson, NewPersonSuccess, UpdatePersonSuccess, SelectPerson } from './actions/persons.actions';
import { Person } from '../../contracts/model/Person';
import { tap } from 'rxjs/operators';

export class PersonStateModel {
    persons: Person[];
    selected: Person;
    selectedIsNewPerson: boolean;
}

@State<PersonStateModel>({
    name: 'persons',
    defaults: {
        persons: [],
        selected: null,
        selectedIsNewPerson: false
    }
})

export class PersonState implements NgxsOnInit {

    constructor(private personService: PersonsService) {}

    @Selector()
    static getPersons(state: PersonStateModel) {
        return state.persons;
    }

    @Selector()
    static getSelectedPersons(state: PersonStateModel) {
        return { selectedPerson: state.selected, newPerson: state.selectedIsNewPerson };
    }

    ngxsOnInit(ctx?: StateContext<PersonStateModel>) {
        ctx.dispatch(new LoadPersons());
    }

    @Action(LoadPersons)
    load(ctx: StateContext<PersonStateModel>) {
       return this.personService.loadPersons().pipe(
           tap(persons => {
            const state = ctx.getState();
            ctx.setState({ ...state.persons, persons: persons, selected: null, selectedIsNewPerson: false });
           })
       );
    }

    @Action(NewPerson)
    newPerson(ctx: StateContext<PersonStateModel>, { payload }: NewPerson) {
        return this.personService.createPerson(payload).pipe(tap((res) => ctx.dispatch(new NewPersonSuccess(res))));
    }

    @Action(NewPersonSuccess)
    newPersonSuccess(ctx: StateContext<PersonStateModel>, { payload }: NewPersonSuccess) {
        const state = ctx.getState();
        ctx.patchState({ persons: [ ...state.persons, payload ] });
    }

    @Action(UpdatePerson)
    updatePerson(ctx: StateContext<PersonStateModel>, { payload }: UpdatePerson) {
        return this.personService.updatePerson( { id: payload.id, firstName: payload.firstName, lastName: payload.lastName} ).pipe(
            tap((res) => ctx.dispatch(new UpdatePersonSuccess(res))));
    }

    @Action(UpdatePersonSuccess)
    updatePersonSuccess(ctx: StateContext<PersonStateModel>, { payload }: UpdatePersonSuccess) {
        const state = ctx.getState();
            const idx = state.persons.findIndex(f => f.id === payload.id);
            const personsUpdated = [ ...state.persons.slice(0, idx),
                                     payload,
                                    ...state.persons.slice(idx + 1),
            ];
             ctx.patchState({ ...state, persons: personsUpdated });
    }

    @Action(SelectPerson)
    selectPerson(ctx: StateContext<PersonStateModel>, { payload }: SelectPerson) {
        const state = ctx.getState();
             ctx.patchState({ ...state, selected: payload.person, selectedIsNewPerson: payload.isNewPerson });
    }
}
