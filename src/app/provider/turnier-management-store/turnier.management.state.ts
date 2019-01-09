import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TurnierOptions } from 'src/app/contracts/model/TurnierOptions';
import { SetTurnierName, SetGameOptoins, SetCompetitors } from './actions/turnier.management.actions';


export class OptionStateModel {
    options: TurnierOptions;
}

@State<OptionStateModel>({
    name: 'opitions',
    defaults: {
        options: {
            name: '',
            gameOptions: {
                tables: 1,
                sets: 2,
                points: 2,
                pointsDraw: 1,
                draw: true,
                walkover: true,
                fairLots: false
            },
            competitors: []
        }
    }
})

export class TurnierOptionState {

    @Selector()
    static getTurnierOptions(state: OptionStateModel) {
        return state.options;
    }

    @Action(SetTurnierName)
    setTurnierName(ctx: StateContext<OptionStateModel>, { payload }: SetTurnierName) {
        const state = ctx.getState();
        state.options.name = payload;
        ctx.patchState(state);
    }

    @Action(SetGameOptoins)
    setGameOptoins(ctx: StateContext<OptionStateModel>, { payload }: SetGameOptoins) {
        const state = ctx.getState();
        state.options.gameOptions = payload;
        ctx.patchState(state);
    }

    @Action(SetCompetitors)
    setCompetitors(ctx: StateContext<OptionStateModel>, { payload }: SetCompetitors) {
        const state = ctx.getState();
        state.options.competitors = payload;
        ctx.patchState(state);
    }
}
