import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TournamentPrepService } from 'src/app/provider/service/tournament-prep.service';
import { TournamentPrepQuery } from 'src/app/provider/query/tournament-prep-query';
import { TournamentOptions } from 'src/app/provider/store/tournament-prep-store';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.scss']
})
export class TournamentCreateComponent implements OnInit {

  tournamentOptions: TournamentOptions;

  tournamentCreateForm = new FormGroup({
    tournamentName: new FormControl('', [ Validators.required, Validators.minLength(5) ])
  });

  constructor(private formBuilder: FormBuilder, private router: Router,
              private service: TournamentPrepService, private query: TournamentPrepQuery) { }

  ngOnInit() {
    this.service.init();
    this.tournamentOptions = this.query.getActive() as TournamentOptions;
    this.setFormValues(this.tournamentOptions.name);
  }

  setFormValues(name: string) {
    this.tournamentCreateForm = this.formBuilder.group({
      tournamentName: [name, [ Validators.required, Validators.minLength(5) ] ]
    });
  }

  setTournamentName() {
    this.service.updateName(this.tournamentCreateForm.get('tournamentName').value);
    this.router.navigate(['create', 'options']);
  }
}
