import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentCreateComponent } from './tournament-create/tournament-create.component';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TournamentOptionsComponent } from './tournament-options/tournament-options.component';
import { TournamentCompetitorsComponent } from './tournament-competitors/tournament-competitors.component';
import { TournamentPersonCardComponent } from './tournament-person-card/tournament-person-card.component';
import { TournamentLoadComponent } from './tournament-load/tournament-load.component';

const routes: Routes = [
  {
    path: 'create',
    component: TournamentCreateComponent
  },
  {
    path: 'options',
    component: TournamentOptionsComponent
  },
  {
    path: 'competitors',
    component: TournamentCompetitorsComponent
  },
  {
    path: 'load',
    component: TournamentLoadComponent
  }
];

@NgModule({
  declarations: [
    TournamentCreateComponent,
    TournamentOptionsComponent,
    TournamentCompetitorsComponent,
    TournamentPersonCardComponent,
    TournamentLoadComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})

export class TournamentManagementModule { }
