import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'persons',
    loadChildren: './persons-management/persons-management.module#PersonsManagementModule'
  },
  {
    path: 'create',
    loadChildren: './tournament-management/tournament-management.module#TournamentManagementModule'
  },
  {
    path: 'tournament',
    loadChildren: './tournament-tabs/tournament-tabs.module#TournamentTabsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
