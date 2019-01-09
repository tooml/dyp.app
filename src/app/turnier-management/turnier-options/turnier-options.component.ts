import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { TableOptions, Option, SetOptions, PointOptions } from '../ui-data/UiOptions';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { TurnierOptionState } from '../../provider/turnier-management-store/turnier.management.state';
import { SetGameOptoins } from '../../provider/turnier-management-store/actions/turnier.management.actions';

@Component({
  selector: 'app-turnier-options',
  templateUrl: './turnier-options.component.html',
  styleUrls: ['./turnier-options.component.scss']
})
export class TurnierOptionsComponent implements OnInit {

  tableOptions: Option[];
  selectedTableOption: Option;

  setOptions: Option[];
  selectedSetOption: Option;

  pointOptions: Option[];
  selectedPointOption: Option;

  drawPointOptions: Option[];
  selectedDrawPointOption: Option;

  draw: boolean;
  walkover: boolean;
  fairLots: boolean;

  optionsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store) {
    this.tableOptions = new TableOptions().tables;
    this.setOptions = new SetOptions().sets;
    this.pointOptions = new PointOptions().points;
    this.drawPointOptions = new PointOptions().points;

  }

  ngOnInit() {
    this.store.select(TurnierOptionState.getTurnierOptions).subscribe(options => {
      this.selectedTableOption = this.tableOptions[options.gameOptions.tables - 1];
      this.selectedSetOption = this.setOptions[options.gameOptions.sets - 1];
      this.selectedPointOption = this.pointOptions[options.gameOptions.points - 1];
      this.selectedDrawPointOption = this.drawPointOptions[options.gameOptions.pointsDraw - 1];
      this.draw = options.gameOptions.draw;
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
      pointsDraw: this.selectedDrawPointOption.id,
      draw: this.draw,
      walkover: this.walkover,
      fairLots: this.fairLots
    }));
    this.router.navigate(['turnier', 'competitors']);
  }
}
