import { PersonsService } from '../../provider/service/persons.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Person } from 'src/app/contracts/messages/PersonStockQueryResult';

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

  constructor(public toastController: ToastController, private service: PersonsService) { }

  ngOnInit(): void {
    this.initPerson();
  }

  initPerson() {
    if (this.service.hasActive()) {
      this.person = this.service.getActive();

      this.personEidtForm.setValue({
        id: this.person.id,
        firstName: this.person.firstName,
        lastName: this.person.lastName
      });
    } else {
      this.personEidtForm.setValue({
        id: null,
        firstName: '',
        lastName: ''
      });
    }
  }

  savePersonIntegration() {
    this.savePerson();
    this.showMessage('Saved');
  }

  savePerson() {
    console.log(this.personEidtForm.value);
    this.service.storePerson(this.personEidtForm.value);
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
