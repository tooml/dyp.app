import { Component, OnInit } from '@angular/core';
import { GameQuery } from 'src/app/provider/query/game-query';
import { Round } from 'src/app/contracts/messages/TournamentQueryResult';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tournament-round-list',
  templateUrl: './tournament-round-list.component.html',
  styleUrls: ['./tournament-round-list.component.scss']
})
export class TournamentRoundListComponent implements OnInit {

  rounds: Observable<Round[]>;

  constructor(private query: GameQuery) { }

  ngOnInit() {
    this.rounds = this.query.selectRounds();
  }
}
