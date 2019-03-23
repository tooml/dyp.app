import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { SetCompetitors } from '../../provider/tournament-management-store/actions/tournament.management.actions';
import { PersonSelection } from '../ui-data/PersonSelection';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournament-competitors',
  templateUrl: './tournament-competitors.component.html',
  styleUrls: ['./tournament-competitors.component.scss']
})
export class TournamentCompetitorsComponent implements OnInit {

  persons: PersonSelection[];

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {
    this.store.select(state => state.persons.persons).subscribe(persons => {
        this.persons = persons.map(person => ({ person: person, selected: false }));
      });
  }

  competitorsCountValidation() {
    return this.getCompetitors().length >= 2;
  }

  createTournament() {
    const competitors = this.getCompetitors().map(p => p.person);
    this.store.dispatch(new SetCompetitors(competitors));
    this.router.navigate(['tournament']);
  }

  private getCompetitors() {
    return this.persons.filter(person => person.selected);
  }
}
