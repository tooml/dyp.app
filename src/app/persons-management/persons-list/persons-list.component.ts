import { PersonsService } from '../../provider/service/persons.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PersonStore } from 'src/app/provider/stores/persons/person-store';
import { Person } from 'src/app/provider/stores/persons/person-state';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

  persons: Observable<Person[]>;

  constructor(private router: Router, private store: PersonStore) { }

  ngOnInit(): void {
    this.store.loadPersons();
  }

  addPerson() {
    this.store.getPersonTemplate().subscribe(person => {
        this.store.setSelected(person);
        this.router.navigate(['persons', person.id]);
      });
  }
}
