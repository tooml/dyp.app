import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../contracts/model/Person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() person: Person;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  editPerson() {
    this.router.navigateByUrl('/persons/' + this.person.id);
  }
}
