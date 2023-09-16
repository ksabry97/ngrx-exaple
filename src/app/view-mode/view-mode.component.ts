import { UserData } from './../data-model';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../Store/State';
import { Observable, map } from 'rxjs';
import { getData } from '../Store/selector';

@Component({
  selector: 'app-view-mode',
  templateUrl: './view-mode.component.html',
  styleUrls: ['./view-mode.component.css'],
})
export class ViewModeComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  user!: Observable<UserData>;
  ngOnInit(): void {
    this.user = this.store.select(getData);
  }
}
