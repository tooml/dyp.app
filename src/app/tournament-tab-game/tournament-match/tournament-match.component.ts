import { Component, Input } from '@angular/core';
import { Match } from 'src/app/contracts/model/Tournament';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { SelectMatch } from 'src/app/provider/tournament-store/actions/tournament-actions';

@Component({
  selector: 'app-tournament-match',
  templateUrl: './tournament-match.component.html',
  styleUrls: ['./tournament-match.component.scss']
})
export class TournamentMatchComponent {

  @Input() match: Match;

  result_display = 'Ergebnis wählen';

  constructor(private router: Router, private store: Store) { }

  editMatchResult() {
    this.store.dispatch(new SelectMatch(this.match));
    // this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['tournament', 'game', 'edit'], { queryParams: { match: this.match }} );
    this.router.navigate(['tournament', 'game', 'edit']);
  }
}
