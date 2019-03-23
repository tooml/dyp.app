import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TournamentGameService } from 'src/app/tournament-tabs/tournament-game.service';
import { TournamentReady } from './actions/tournament-actions';
import { Tournament } from 'src/app/contracts/model/Tournament';



export class TournamentStateModel {
    tournament: Tournament;
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

    constructor(private tournamentService: TournamentGameService) { }

    @Action(TournamentReady)
    setTournament(ctx: StateContext<TournamentStateModel>, { payload }: TournamentReady) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            tournament: payload
        });
    }
}
