import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/contracts/model/Tournament';

@Component({
  selector: 'app-tournament-match-detail',
  templateUrl: './tournament-match-detail.component.html',
  styleUrls: ['./tournament-match-detail.component.scss']
})
export class TournamentMatchDetailComponent implements OnInit {

  match: Match;

  constructor() { }

  ngOnInit() {
  }

}
