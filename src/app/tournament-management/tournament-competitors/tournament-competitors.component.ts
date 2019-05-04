import { Component, OnInit } from '@angular/core';
import { PersonSelection } from '../ui-data/PersonSelection';
import { Router } from '@angular/router';
import { TournamentManagementService } from '../tournament-management.service';
import { PersonsService } from 'src/app/provider/service/persons.service';

@Component({
  selector: 'app-tournament-competitors',
  templateUrl: './tournament-competitors.component.html',
  styleUrls: ['./tournament-competitors.component.scss']
})
export class TournamentCompetitorsComponent implements OnInit {

  persons: PersonSelection[];

  constructor(private router: Router, private managementService: TournamentManagementService, private personsService: PersonsService) { }

  ngOnInit() {
    // this.store.select(state => state.persons.persons).subscribe(persons => {
    //    this.persons = persons.map(person => ({ person: person, selected: false }));
    //  });

    // this.personsService.getPersons().subscribe(persons => {
    //   this.persons = persons.map(person => ({ person: person, selected: false }));
    // });
  }

  competitorsCountValidation() {
    return this.getCompetitors().length >= 2;
  }

  createTournament() {
    const competitors = this.getCompetitors().map(p => p.person);
    // this.store.dispatch(new SetCompetitors(competitors));
    this.managementService.setTournamentCompetitors(competitors);
    this.router.navigate(['tournament']);
  }

  private getCompetitors() {
    return this.persons.filter(person => person.selected);
  }
}
