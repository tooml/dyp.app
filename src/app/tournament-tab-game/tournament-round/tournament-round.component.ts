import { Component, Input } from '@angular/core';
import { Round } from 'src/app/contracts/model/Tournament';

@Component({
  selector: 'app-tournament-round',
  templateUrl: './tournament-round.component.html',
  styleUrls: ['./tournament-round.component.scss']
})
export class TournamentRoundComponent {

  @Input() round: Round;

  constructor() { }
}
