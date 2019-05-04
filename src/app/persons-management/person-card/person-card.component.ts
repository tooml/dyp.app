import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../contracts/model/Person';
import { PersonsService } from '../../provider/service/persons.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {

  @Input() person: Person;

  constructor(private router: Router, private service: PersonsService) {}

  editPerson() {
    this.service.setActive(this.person.id);
    this.router.navigate(['persons', this.person.id]);
  }
}
