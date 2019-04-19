import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TournamentGameService } from 'src/app/tournament-tabs/tournament-game.service';
import { TournamentReady, SelectMatch } from './actions/tournament-actions';
import { Tournament, Match } from 'src/app/contracts/model/Tournament';



export class TournamentStateModel {
    tournament: Tournament;
    selectedMatch: Match;
}

@State<TournamentStateModel>({
    name: 'tournament'
})

export class TournamentState {

    @Selector()
    static getTournament(state: TournamentStateModel) {
        return state;
    }

    @Selector()
    static getPersons(state: TournamentStateModel) {
        return state.tournament.rounds;
    }

    @Selector()
    static getSelectedMatch(state: TournamentStateModel) {
        return { selectedMatch: state.selectedMatch };
    }

    constructor(private tournamentService: TournamentGameService) { }

    @Action(TournamentReady)
    setTournament(ctx: StateContext<TournamentStateModel>, { payload }: TournamentReady) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            tournament: payload
        });
    }

    @Action(SelectMatch)
    selectMatch(ctx: StateContext<TournamentStateModel>, { payload }: SelectMatch) {
        const state = ctx.getState();
             ctx.patchState({ ...state, selectedMatch: payload });
    }
}
