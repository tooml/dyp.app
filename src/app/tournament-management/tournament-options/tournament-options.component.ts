import { GameOptions } from './../../provider/store/tournament-prep-store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TableOptions, Option, SetOptions, PointOptions } from '../ui-data/UiOptions';
import { Router, ActivatedRoute } from '@angular/router';
import { TournamentPrepQuery } from 'src/app/provider/query/tournament-prep-query';
import { TournamentOptions } from 'src/app/provider/store/tournament-prep-store';
import { TournamentPrepService } from 'src/app/provider/service/tournament-prep.service';

@Component({
  selector: 'app-tournament-options',
  templateUrl: './tournament-options.component.html',
  styleUrls: ['./tournament-options.component.scss']
})

export class TournamentOptionsComponent implements OnInit {

  tableOptions: Option[];
  selectedTableOption: Option;

  setOptions: Option[];
  selectedSetOption: Option;

  pointOptions: Option[];
  selectedPointOption: Option;

  tiedPointOptions: Option[];
  selectedTiedPointOption: Option;

  tied: boolean;
  walkover: boolean;
  fairLots: boolean;

  optionsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,
              private query: TournamentPrepQuery,  private service: TournamentPrepService) {
    this.tableOptions = new TableOptions().tables;
    this.setOptions = new SetOptions().sets;
    this.pointOptions = new PointOptions().points;
    this.tiedPointOptions = new PointOptions().points;
  }

  ngOnInit() {
    const options = this.query.getActive() as TournamentOptions;

    console.log(options);

    this.selectedTableOption = this.tableOptions[options.gameOptions.tables - 1];
    this.selectedSetOption = this.setOptions[options.gameOptions.sets - 1];
    this.selectedPointOption = this.pointOptions[options.gameOptions.points - 1];
    this.selectedTiedPointOption = this.tiedPointOptions[options.gameOptions.pointsTied - 1];
    this.tied = options.gameOptions.tied;
    this.walkover = options.gameOptions.walkover;
    this.fairLots = options.gameOptions.fairLots;

    this.optionsForm = this.formBuilder.group({
    });
  }

  createOptions() {

    const gameOptions: GameOptions = {
      tables: this.selectedTableOption.id,
      sets: this.selectedSetOption.id,
      points: this.selectedPointOption.id,
      pointsTied: this.selectedTiedPointOption.id,
      tied: this.tied,
      walkover: this.walkover,
      fairLots: this.fairLots
    };

    this.service.updateOptions(gameOptions);
    this.router.navigate(['../competitors'], { relativeTo: this.route });
  }
}
