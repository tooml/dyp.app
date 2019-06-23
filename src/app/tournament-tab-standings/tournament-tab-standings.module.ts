import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TournamentRoundListComponent } from '../tournament-tab-game/tournament-round-list/tournament-round-list.component';

const routes: Routes = [
  {
    path: '', component: TournamentRoundListComponent,
  }
];

@NgModule({
  declarations: [TournamentRoundListComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})

export class TournamentTabStandingsModule { }
