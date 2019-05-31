import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PersonsService } from '../../provider/service/persons.service';
import { Person } from 'src/app/contracts/messages/PersonStockQueryResult';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {

  @Input() person: Person;

  constructor(private router: Router, private service: PersonsService) {}

  editPerson() {
    this.service.setActive(this.person);
    this.router.navigate(['persons', this.person.id]);
  }
}
