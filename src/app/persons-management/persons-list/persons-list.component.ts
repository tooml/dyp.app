import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Person } from 'src/app/contracts/model/Person';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {
  persons: Observable<Person[]>;

  constructor(private router: Router) {}

  ngOnInit() {
  }
  ionViewWillEnter() {
    // this.store.dispatch(new LoadPersons());
    // this.persons = this.store.pipe(select(getPersons));
  }

  addPerson() {
    this.router.navigateByUrl('/persons/0');
  }
}
