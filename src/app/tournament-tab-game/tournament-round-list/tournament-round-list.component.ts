import { Component, OnInit } from '@angular/core';
import { Round } from 'src/app/contracts/messages/TournamentQueryResult';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tournament-round-list',
  templateUrl: './tournament-round-list.component.html',
  styleUrls: ['./tournament-round-list.component.scss']
})
export class TournamentRoundListComponent implements OnInit {

  rounds: Observable<Round[]>;

  constructor() { }

  ngOnInit() {
    // this.rounds = this.query.selectRounds();
  }
}
