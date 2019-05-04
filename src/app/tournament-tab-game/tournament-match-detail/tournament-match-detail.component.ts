import { Component, OnInit } from '@angular/core';
import { Match, SetResult } from 'src/app/contracts/model/Tournament';

@Component({
  selector: 'app-tournament-match-detail',
  templateUrl: './tournament-match-detail.component.html',
  styleUrls: ['./tournament-match-detail.component.scss']
})
export class TournamentMatchDetailComponent implements OnInit {

  match: Match;

  home: string;
  away: string;

  homeResult = '-';
  awayResult = '-';

  setResult: SetResult[];

  constructor() { }


  ngOnInit() {
    // this.store.select(TournamentState.getSelectedMatch).subscribe(state => this.match = state.selectedMatch);

    this.home = this.match.home;
    this.away = this.match.away;

    this.setResult = this.match.sets;

    this.calculateSetResult();
  }

  calculateSetResult() {
    if (this.setResult.every(result => result as SetResult === SetResult.None)) {
      this.homeResult = '-';
      this.awayResult = '-';
    } else {
      const homeCount = this.setResult.filter(x => x as SetResult === SetResult.Home || x as SetResult === SetResult.Tied).length;
      const awayCount = this.setResult.filter(x => x as SetResult === SetResult.Away || x as SetResult === SetResult.Tied).length;

      this.homeResult = homeCount.toString();
      this.awayResult = awayCount.toString();
    }
  }

  onVoted(result: [number, SetResult]) {
    const index = result[0];
    const r = result[1];

    this.setResult[index] = r;
  }

  test() {
    console.log(this.setResult);
  }
}
