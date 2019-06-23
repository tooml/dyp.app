import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Match } from 'src/app/contracts/messages/TournamentQueryResult';

@Component({
  selector: 'app-tournament-match',
  templateUrl: './tournament-match.component.html',
  styleUrls: ['./tournament-match.component.scss']
})
export class TournamentMatchComponent {

  @Input() match: Match;

  result_display = 'Ergebnis wählen';

  constructor(private router: Router, private route: ActivatedRoute) { }

  editMatchResult() {
    this.router.navigate(['../edit'], { relativeTo: this.route,  queryParams: { id: this.match.id } });
  }
}
