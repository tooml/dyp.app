import { CreateTournamentResponseDto } from './../../contracts/dto/CreateTournamentResponseDto';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { TournamentOptions } from 'src/app/contracts/model/TournamentOptions';
import { SetTournamentName, SetGameOptoins, SetCompetitors, CreateTournament } from './actions/tournament.management.actions';
import { TournamentGameService } from 'src/app/tournament-tabs/tournament-game.service';
import { TournamentReady } from '../tournament-store/actions/tournament-actions';
import { CreatePersonRequestDto } from 'src/app/contracts/dto/CreatePersonRequestDto';
import { CreateTournamentRequestDto } from 'src/app/contracts/dto/CreateTournamentRequestDto';

export class OptionStateModel {
    options: TournamentOptions;
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
                pointsTied: 1,
                tied: true,
                walkover: true,
                fairLots: false
            },
            competitors: []
        }
    }
})

export class TournamentOptionState {

    @Selector()
    static getTournamentOptions(state: OptionStateModel) {
        return state.options;
    }

    constructor(private tournamentService: TournamentGameService) { }

    @Action(SetTournamentName)
    setTournamentName(ctx: StateContext<OptionStateModel>, { payload }: SetTournamentName) {
        const state = ctx.getState();
        ctx.patchState({
            options: {
                ...state.options,
                name: payload
            }
        });
    }

    @Action(SetGameOptoins)
    setGameOptoins(ctx: StateContext<OptionStateModel>, { payload }: SetGameOptoins) {
        const state = ctx.getState();
        ctx.patchState({
            options: {
                ...state.options,
                gameOptions: payload
            }
        });
    }

    @Action(SetCompetitors)
    setCompetitors(ctx: StateContext<OptionStateModel>, { payload }: SetCompetitors) {
        const state = ctx.getState();
        ctx.patchState({
            options: {
                ...state.options,
                competitors: payload
            }
        });

        ctx.dispatch(new CreateTournament());
    }

    @Action(CreateTournament)
    createTournament(ctx: StateContext<OptionStateModel>) {
        const state = ctx.getState();

        const request: CreateTournamentRequestDto = {
            name: state.options.name,
            competitors: state.options.competitors.map(person => person.id),
            tables: state.options.gameOptions.tables,
            sets: state.options.gameOptions.sets,
            points: state.options.gameOptions.points,
            pointsTied: state.options.gameOptions.pointsTied,
            tied: state.options.gameOptions.tied,
            walkover: state.options.gameOptions.tied,
            fairLots: state.options.gameOptions.fairLots
        };

        this.tournamentService.createTournament(request).subscribe(tournament => ctx.dispatch(new TournamentReady(tournament)));
    }
}
