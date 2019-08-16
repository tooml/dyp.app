// import { Competitor } from 'src/app/provider/store/person-store';
import { Component, Input } from '@angular/core';
import { PersonsService } from 'src/app/provider/service/persons.service';

@Component({
  selector: 'app-tournament-person-card',
  templateUrl: './tournament-person-card.component.html',
  styleUrls: ['./tournament-person-card.component.scss']
})
export class TournamentPersonCardComponent  {

  // @Input() competitor: Competitor;

  constructor() { }
}
