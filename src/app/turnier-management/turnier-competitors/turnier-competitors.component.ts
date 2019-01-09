import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Person } from 'src/app/contracts/model/Person';
import { SetCompetitors } from '../../provider/turnier-management-store/actions/turnier.management.actions';

@Component({
  selector: 'app-turnier-competitors',
  templateUrl: './turnier-competitors.component.html',
  styleUrls: ['./turnier-competitors.component.scss']
})
export class TurnierCompetitorsComponent implements OnInit {

  persons: Person[];
  valid = false;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select(state => state.persons.persons).subscribe(persons => this.persons = persons);
  }

  competitorsCountValid() {
    const competitors = this.getSelectedPersons();
    return (competitors.length >= 2);
  }

  getSelectedPersons() {
    return this.persons.filter((person: Person) => person.competitor === true);
  }

  createTurnier() {
    const competitors = this.getSelectedPersons();
    this.store.dispatch(new SetCompetitors(competitors));
  }
}
