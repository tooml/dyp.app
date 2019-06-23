import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentTabsComponent } from './tournament-tabs.component';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TournamentTabsComponent,
    children: [
      {
        path: 'game',
        loadChildren: '../tournament-tab-game/tournament-tab-game.module#TournamentTabGameModule'
      },
      {
        path: 'standings',
        loadChildren: '../tournament-tab-standings/tournament-tab-standings.module#TournamentTabStandingsModule'
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  declarations: [TournamentTabsComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ]
})

export class TournamentTabsModule { }
