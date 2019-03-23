import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/contracts/model/Person';
import { Store } from '@ngxs/store';
import { PersonState } from '../../provider/person-management-store/person.state';
import { NewPerson, UpdatePerson, SelectPerson } from '../../provider/person-management-store/actions/persons.actions';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

enum PersonEditMode {
  NewPerson = 1,
  UpdatePerson = 2,
}

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

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

  constructor(private store: Store, public toastController: ToastController) {}

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson() {
    this.store.select(PersonState.getSelectedPersons).subscribe(state => {
      this.setFormValues(state.selectedPerson);
      this.setStatisticValues(state.selectedPerson);
      this.setEditMode(state.newPerson);
    });
  }

  setEditMode(newPerson: boolean) {
    if (newPerson) {
      this.editMode = PersonEditMode.NewPerson;
    } else {
      this.editMode = PersonEditMode.UpdatePerson;
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
    this.store.dispatch(new SelectPerson({ person: this.personEidtForm.value, isNewPerson: false }));
    this.getPerson();
  }

  savePerson() {
    switch (this.editMode) {
      case PersonEditMode.NewPerson: {
        this.store.dispatch(new NewPerson(this.personEidtForm.value));
        break;
      }
      case PersonEditMode.UpdatePerson: {
        this.store.dispatch(new UpdatePerson(this.personEidtForm.value));
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
