import { PersonsService } from '../../provider/service/persons.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PersonsQuery } from 'src/app/provider/query/person-querys';
import { Person } from 'src/app/contracts/messages/PersonStockQueryResult';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

  persons: Observable<Person[]>;

  constructor(private router: Router, private personsQuery: PersonsQuery, private service: PersonsService) { }

  ngOnInit(): void {
    this.service.loadPersons();
    this.persons = this.personsQuery.selectAll();
  }

  addPerson() {
    this.service.newPerson().subscribe(person => {
      this.service.setActive(person);
      this.router.navigate(['persons', person.id]);
    });
  }
}
