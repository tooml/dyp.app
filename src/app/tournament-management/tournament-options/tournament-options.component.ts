import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TableOptions, Option, SetOptions, PointOptions } from '../ui-data/UiOptions';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { TournamentOptionState } from '../../provider/tournament-management-store/tournament.management.state';
import { SetGameOptoins } from '../../provider/tournament-management-store/actions/tournament.management.actions';

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

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store) {
    this.tableOptions = new TableOptions().tables;
    this.setOptions = new SetOptions().sets;
    this.pointOptions = new PointOptions().points;
    this.tiedPointOptions = new PointOptions().points;
  }

  ngOnInit() {
    this.store.select(TournamentOptionState.getTournamentOptions).subscribe(options => {
      this.selectedTableOption = this.tableOptions[options.gameOptions.tables - 1];
      this.selectedSetOption = this.setOptions[options.gameOptions.sets - 1];
      this.selectedPointOption = this.pointOptions[options.gameOptions.points - 1];
      this.selectedTiedPointOption = this.tiedPointOptions[options.gameOptions.pointsTied - 1];
      this.tied = options.gameOptions.tied;
      this.walkover = options.gameOptions.walkover;
      this.fairLots = options.gameOptions.fairLots;
    });

    this.optionsForm = this.formBuilder.group({
    });
  }

  createOptions() {
    this.store.dispatch(new SetGameOptoins({
      tables: this.selectedTableOption.id,
      sets: this.selectedSetOption.id,
      points: this.selectedPointOption.id,
      pointsTied: this.selectedTiedPointOption.id,
      tied: this.tied,
      walkover: this.walkover,
      fairLots: this.fairLots
    }));
    this.router.navigate(['create', 'competitors']);
  }
}
