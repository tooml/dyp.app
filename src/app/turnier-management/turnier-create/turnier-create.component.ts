import { OptionStateModel, TurnierOptionState } from '../../provider/turnier-management-store/turnier.management.state';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetTurnierName } from '../../provider/turnier-management-store/actions/turnier.management.actions';

@Component({
  selector: 'app-turnier-create',
  templateUrl: './turnier-create.component.html',
  styleUrls: ['./turnier-create.component.scss']
})
export class TurnierCreateComponent implements OnInit {

  turnierName: string;
  turnierCreateForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store) { }

  ngOnInit() {
    this.store.select(TurnierOptionState.getTurnierOptions).subscribe(options => this.turnierName = options.name);

    this.turnierCreateForm = this.formBuilder.group({
      turnierName: ['', [ Validators.required, Validators.minLength(5) ] ]
    });
  }

  create() {
    this.store.dispatch(new SetTurnierName(this.turnierName));
    this.router.navigate(['turnier', 'options']);
  }
}
