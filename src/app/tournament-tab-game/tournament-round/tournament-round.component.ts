import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/contracts/model/Tournament';

@Component({
  selector: 'app-tournament-round',
  templateUrl: './tournament-round.component.html',
  styleUrls: ['./tournament-round.component.scss']
})
export class TournamentRoundComponent implements OnInit {

  matches: Match[] = [ { id: 'test', name: 'Runde 1' }, { id: 'test', name: 'Runde 2' }  ];

  constructor() {
  }

  ngOnInit() {
  }

}
