import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/contracts/model/Person';
import { Store } from '@ngxs/store';
import { PersonState } from '../../provider/person-management-store/person.state';
import { NewPerson, UpdatePerson, SelectPerson } from '../../provider/person-management-store/actions/persons.actions';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
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

  private person: Person;
  personEidtForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store, public toastController: ToastController) {}

  ngOnInit(): void {
    this.store.select(PersonState.getSelectedPersons).subscribe(state => {
      this.person = state.selectedPerson;
      if (state.newPerson) {
        this.editMode = PersonEditMode.NewPerson;
      } else {
        this.editMode = PersonEditMode.UpdatePerson;
      }
    });

    this.personEidtForm = this.formBuilder.group({
        firstName: ['', [ Validators.required, Validators.minLength(3) ] ],
        lastName: [''],
      });
  }

  savePersonIntegration() {
    this.savePerson();
    this.showMessage('Saved');
    this.store.dispatch(new SelectPerson({ person: this.person, isNewPerson: false }));
  }

  savePerson() {
    switch (this.editMode) {
      case PersonEditMode.NewPerson: {
        this.store.dispatch(new NewPerson(this.person));
        break;
      }
      case PersonEditMode.UpdatePerson: {
        this.store.dispatch(new UpdatePerson(this.person));
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
