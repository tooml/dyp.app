import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/contracts/model/Tournament';

@Component({
  selector: 'app-tournament-match',
  templateUrl: './tournament-match.component.html',
  styleUrls: ['./tournament-match.component.scss']
})
export class TournamentMatchComponent implements OnInit {

  match: Match;

  home: string;
  away: string;

  result_display = 'Ergebnis wählen';

  constructor() { }

  ngOnInit() {
  }

}
