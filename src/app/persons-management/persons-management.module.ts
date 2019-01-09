import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { PersonState } from '../provider/person-management-store/person.state';

const routes: Routes = [
  {
    path: '',
    component: PersonsListComponent
  },
  {
    path: ':personId',
    component: PersonEditComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [PersonsListComponent, PersonCardComponent, PersonEditComponent]
})
export class PersonsManagementModule { }
