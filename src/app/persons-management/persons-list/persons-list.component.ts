import { PersonsService } from '../../provider/service/persons.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Person } from 'src/app/contracts/model/Person';
import { PersonsQuery } from 'src/app/provider/query/person-querys';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

  persons: Observable<Person[]>;

  constructor(private router: Router, private personsQuery: PersonsQuery, private service: PersonsService) {}

  ngOnInit(): void {
    this.service.loadPersons();
    this.persons = this.personsQuery.selectAll();
  }

  addPerson() {
    this.service.setActive(null);
    this.router.navigate(['persons', 'new']);
  }
}
