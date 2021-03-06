import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SetResult } from 'src/app/contracts/model/Tournament';
import { Store } from '@ngxs/store';
import { ChooseResult } from 'src/app/provider/tournament-store/actions/tournament-actions';

@Component({
  selector: 'app-tournament-match-set',
  templateUrl: './tournament-match-set.component.html',
  styleUrls: ['./tournament-match-set.component.scss']
})
export class TournamentMatchSetComponent implements OnInit {

  @Input() result: [number, SetResult];
  @Output() voted = new EventEmitter<[number, SetResult]>();

  constructor(private store: Store) { }

  ngOnInit() {
    console.log(this.result);
  }

  segmentChanged(ev: any) {
    this.store.dispatch(new ChooseResult({ index: this.result[0], result: ev.detail.value }));
    console.log(this.result);
  }
}
