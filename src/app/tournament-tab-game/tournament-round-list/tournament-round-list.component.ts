import { Round, Tournament } from '../../contracts/model/Tournament';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tournament-round-list',
  templateUrl: './tournament-round-list.component.html',
  styleUrls: ['./tournament-round-list.component.scss']
})
export class TournamentRoundListComponent {

  // @Select(TournamentState.getPersons) rounds: Observable<Round[]>;

  tournament: Observable<Tournament>;

  constructor() {
  }
}
