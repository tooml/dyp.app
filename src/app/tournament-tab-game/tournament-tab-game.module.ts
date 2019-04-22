import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentRoundListComponent } from './tournament-round-list/tournament-round-list.component';
import { RouterModule, Routes } from '@angular/router';
import { TournamentRoundComponent } from './tournament-round/tournament-round.component';
import { TournamentMatchComponent } from './tournament-match/tournament-match.component';
import { TournamentMatchDetailComponent } from './tournament-match-detail/tournament-match-detail.component';
import { TournamentMatchSetComponent } from './tournament-match-set/tournament-match-set.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: TournamentRoundListComponent,
      },
      {
        path: 'edit', component: TournamentMatchDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [TournamentRoundListComponent, TournamentRoundComponent, TournamentMatchComponent, TournamentMatchDetailComponent, TournamentMatchSetComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})
export class TournamentTabGameModule { }
