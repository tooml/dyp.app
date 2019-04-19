import { Component, Input, OnInit } from '@angular/core';
import { Match } from 'src/app/contracts/model/Tournament';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { TournamentState } from 'src/app/provider/tournament-store/tournament.state';

@Component({
  selector: 'app-tournament-match-detail',
  templateUrl: './tournament-match-detail.component.html',
  styleUrls: ['./tournament-match-detail.component.scss']
})
export class TournamentMatchDetailComponent implements OnInit {

  @Input() match: Match;

  constructor(private store: Store) { }


  ngOnInit() {
    this.store.select(TournamentState.getSelectedMatch).subscribe(state => this.match = state.selectedMatch);
    console.log(this.match);
  }

}
