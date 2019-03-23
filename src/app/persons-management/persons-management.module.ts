import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

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
  declarations: [
    PersonsListComponent,
    PersonCardComponent,
    PersonEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class PersonsManagementModule { }
