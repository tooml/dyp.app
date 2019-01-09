import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnierCreateComponent } from './turnier-create/turnier-create.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TurnierOptionsComponent } from './turnier-options/turnier-options.component';
import { TurnierCompetitorsComponent } from './turnier-competitors/turnier-competitors.component';
import { TurnierPersonCardComponent } from './turnier-person-card/turnier-person-card.component';

const routes: Routes = [
  {
    path: '',
    component: TurnierCreateComponent
  },
  {
    path: 'options',
    component: TurnierOptionsComponent
  },
  {
    path: 'competitors',
    component: TurnierCompetitorsComponent
  }
];

@NgModule({
  declarations: [
    TurnierCreateComponent,
    TurnierOptionsComponent,
    TurnierCompetitorsComponent,
    TurnierPersonCardComponent
   ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})

export class TurnierManagementModule { }
