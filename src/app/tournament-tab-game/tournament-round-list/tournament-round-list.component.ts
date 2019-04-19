import { Round, Tournament } from '../../contracts/model/Tournament';
import { Component } from '@angular/core';
import { TournamentState } from 'src/app/provider/tournament-store/tournament.state';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-tournament-round-list',
  templateUrl: './tournament-round-list.component.html',
  styleUrls: ['./tournament-round-list.component.scss']
})
export class TournamentRoundListComponent {

  @Select(TournamentState.getPersons) rounds: Observable<Round[]>;

  tournament: Observable<Tournament>;

  constructor(private store: Store) {
  }
}
