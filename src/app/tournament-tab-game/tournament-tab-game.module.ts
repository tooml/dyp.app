import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentRoundListComponent } from './tournament-round-list/tournament-round-list.component';
import { RouterModule } from '@angular/router';
import { TournamentRoundComponent } from './tournament-round/tournament-round.component';
import { TournamentMatchComponent } from './tournament-match/tournament-match.component';
import { TournamentMatchDetailComponent } from './tournament-match-detail/tournament-match-detail.component';

@NgModule({
  declarations: [TournamentRoundListComponent, TournamentRoundComponent, TournamentMatchComponent, TournamentMatchDetailComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: TournamentRoundListComponent }])
  ]
})
export class TournamentTabGameModule { }
