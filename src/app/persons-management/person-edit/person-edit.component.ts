import { PersonsService } from '../../provider/service/persons.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { PersonsQuery } from 'src/app/provider/query/person-querys';
import { Person } from 'src/app/contracts/model/Person';

export enum PersonEditMode {
  NewPerson = 1,
  UpdatePerson = 2,
}

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  person: Person;

  private editMode: PersonEditMode;

  personEidtForm = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    lastName: new FormControl('')
  });

  personStatistic = { turnierParticipations: 0,
                      games: 0,
                      wins: 0,
                      looses: 0 };

  constructor(public toastController: ToastController, private personsQuery: PersonsQuery,
              private service: PersonsService) { }

  ngOnInit(): void {
    this.initPerson();
    this.setFormValues(this.person);
    this.setStatisticValues(this.person);
  }

  initPerson() {
    this.person  = this.personsQuery.getActive() as Person;
    this.editMode = PersonEditMode.UpdatePerson;

    if (this.person == null) {
      this.person = this.service.createNewPerson();
      this.service.setActive(this.person.id);
      this.editMode = PersonEditMode.NewPerson;
    }
  }

  setFormValues(person: Person) {
    this.personEidtForm.setValue({
      id: person.id,
      firstName: person.firstName,
      lastName: person.lastName
    });
  }

  setStatisticValues(person: Person) {
    this.personStatistic = { turnierParticipations: person.turnierParticipations,
                             games: person.games,
                             wins: person.wins,
                             looses: person.looses };
  }

  savePersonIntegration() {
    this.savePerson();
    this.showMessage('Saved');
    // TODO
    // this.store.dispatch(new SelectPerson({ person: this.personEidtForm.value, isNewPerson: false }));
  }

  savePerson() {
    switch (this.editMode) {
      case PersonEditMode.NewPerson: {
        this.service.createPerson(this.personEidtForm.value);
        break;
      }
      case PersonEditMode.UpdatePerson: {
        console.log(this.personEidtForm.value);
        this.service.updatePerson(this.personEidtForm.value);
        break;
      }
    }
  }

  async showMessage(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1500,
      position: 'top',
      animated: true,
      color: 'success',
      translucent: true
    });
    toast.present();
  }
}
