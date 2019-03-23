import { TournamentTabsRoutingModule } from './tournament-tabs-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentTabsComponent } from './tournament-tabs.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [TournamentTabsComponent],
  imports: [
    CommonModule,
    IonicModule,
    TournamentTabsRoutingModule
  ]
})
export class TournamentTabsModule { }
