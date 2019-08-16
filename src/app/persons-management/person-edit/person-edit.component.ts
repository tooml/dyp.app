import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Person } from 'src/app/provider/stores/persons/person-state';
import { PersonStore } from 'src/app/provider/stores/persons/person-store';
import { Failure } from 'src/app/contracts/messages/CommandStatus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {

  person: Person;

  personEidtForm = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    lastName: new FormControl('')
  });

  constructor(private router: Router, public toastController: ToastController, private store: PersonStore) { }

  ngOnInit(): void {
    this.initPerson();
  }

  initPerson() {
    if (this.store.hasSelected()) {
      this.person = this.store.getSelected();
        this.personEidtForm.setValue({
          id: this.person.id,
          firstName: this.person.firstName,
          lastName: this.person.lastName
        });
    } else {
      this.router.navigate(['persons']);
    }
  }

  savePersonIntegration() {
    this.store.storePerson(this.personEidtForm.value).subscribe(result => {
      if (result instanceof Failure) {
        const error = result as Failure;
        this.showMessage(error.errorMessage, 'danger');
      } else {
        this.showMessage('gespeichert', 'success');
      }});
  }

  async showMessage(text: string, color: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1500,
      position: 'top',
      animated: true,
      color: color,
      translucent: true
    });
    toast.present();
  }
}
