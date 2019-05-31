import { PersonsService } from './../../provider/service/persons.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competitor } from 'src/app/provider/store/person-store';
import { PersonsQuery } from 'src/app/provider/query/person-querys';
import { TournamentService } from 'src/app/provider/service/tournament-service';
import { TournamentPrepQuery } from 'src/app/provider/query/tournament-prep-query';
import { TournamentOptions } from 'src/app/provider/store/tournament-prep-store';

@Component({
  selector: 'app-tournament-competitors',
  templateUrl: './tournament-competitors.component.html',
  styleUrls: ['./tournament-competitors.component.scss']
})
export class TournamentCompetitorsComponent implements OnInit {

  competitors: Competitor[];

  constructor(private router: Router, private personsQuery: PersonsQuery,
              private personService: PersonsService, private tournamentService: TournamentService,
              private tournamentQuery: TournamentPrepQuery) { }

  ngOnInit() {
    if (this.personsQuery.getCount() === 0) {
      this.personService.loadPersons();
    }

    this.personsQuery.initCompetitors().subscribe(competitors => this.competitors = competitors);
  }

  competitorsCountValidation(): boolean {
    return this.competitors.filter(competitor => competitor.selected).length >= 2;
  }

  createTournament() {
    const competitorIds = this.competitors.filter(competitor => competitor.selected)
                                          .map(competitor => competitor.person.id);

    const options = this.tournamentQuery.getActive() as TournamentOptions;

    this.tournamentService.createTournament(options, competitorIds);
    this.router.navigate(['tournament']);
  }
}
