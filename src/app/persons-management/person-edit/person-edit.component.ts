import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/contracts/model/Person';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  person: Person = { id: '', firstName: '', lastName: ''};

  constructor(private route: ActivatedRoute) {
    const personId = this.route.snapshot.params.personId;
    this.loadPerson(personId);
  }

  ngOnInit() {
  }

  loadPerson(personId: string) {
    console.log(personId);
  }

  savePerson() { }
}
