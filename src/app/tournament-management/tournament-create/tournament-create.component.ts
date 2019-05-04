import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TournamentManagementService } from '../tournament-management.service';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.scss']
})
export class TournamentCreateComponent implements OnInit {

  name = '';

  tournamentCreateForm = new FormGroup({
    name: new FormControl('', [ Validators.required, Validators.minLength(5) ])
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private service: TournamentManagementService) { }

  ngOnInit() {
    // this.getTournamentName();
  }

  getTournamentName() {
    // this.store.select(TournamentOptionState.getTournamentOptions).subscribe(options => this.name = options.name);
    this.name = this.service.getTournamentOptions().name;
  }

  setFormValues(name: string) {
    this.tournamentCreateForm = this.formBuilder.group({
      tournamentName: [name, [ Validators.required, Validators.minLength(5) ] ]
    });
  }

  setTournamentName() {
    this.service.setTournamentName(this.tournamentCreateForm.get('name').value);
    // Todo evtl name nochmal setzen, wegen formular
    this.router.navigate(['create', 'options']);
  }
}
