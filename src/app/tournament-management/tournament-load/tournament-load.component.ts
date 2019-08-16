import { Component, OnInit } from '@angular/core';
import { TournamentsIfnoService } from 'src/app/provider/service/tournament-info.service';
import { TournamentInfo } from 'src/app/contracts/messages/TournamentStockQueryResult';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TournamentService } from 'src/app/provider/service/tournament.service';

@Component({
  selector: 'app-tournament-load',
  templateUrl: './tournament-load.component.html',
  styleUrls: ['./tournament-load.component.css']
})
export class TournamentLoadComponent implements OnInit {

  tournamentsInfos: Observable<TournamentInfo[]>;

  constructor(private router: Router,
              private tournamentInfoService: TournamentsIfnoService, private tournamentService: TournamentService) { }

  ngOnInit() {
    this.tournamentInfoService.loadTournamentsInfos();
    // this.tournamentsInfos = this.tournamentsInfoQuery.selectAll();
  }

  deleteTournament(tournamentInfo: TournamentInfo) {

  }

  loadTournament(tournamentInfo: TournamentInfo) {
    this.tournamentService.loadTournament(tournamentInfo.id);
    this.router.navigate(['tournament', 'game', 'rounds']);
  }
}
