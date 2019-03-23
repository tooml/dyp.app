import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentTabsComponent } from './tournament-tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TournamentTabsComponent,
    children: [
      {
        path: 'game',
        children: [
          {
            path: '',
            loadChildren: '../tournament-tab-game/tournament-tab-game.module#TournamentTabGameModule'
          }
        ]
      },
      {
        path: 'standings',
        children: [
          {
            path: '',
            loadChildren: '../tournament-tab-standings/tournament-tab-standings.module#TournamentTabStandingsModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tournament/game',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/game',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TournamentTabsRoutingModule { }
