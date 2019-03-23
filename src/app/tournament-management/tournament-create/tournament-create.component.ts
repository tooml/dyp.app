import { TournamentOptionState } from '../../provider/tournament-management-store/tournament.management.state';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetTournamentName } from '../../provider/tournament-management-store/actions/tournament.management.actions';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.scss']
})
export class TournamentCreateComponent implements OnInit {

  name: string;

  tournamentCreateForm = new FormGroup({
    name: new FormControl('', [ Validators.required, Validators.minLength(5) ])
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store) { }

  ngOnInit() {
    this.getTournamentName();
  }

  getTournamentName() {
    this.store.select(TournamentOptionState.getTournamentOptions).subscribe(options => this.name = options.name);
  }

  setFormValues(name: string) {
    this.tournamentCreateForm = this.formBuilder.group({
      tournamentName: [name, [ Validators.required, Validators.minLength(5) ] ]
    });
  }

  setTournamentName() {
    this.store.dispatch(new SetTournamentName(this.tournamentCreateForm.get('name').value));
    this.getTournamentName();
    this.router.navigate(['create', 'options']);
  }
}
