import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/State';
import { viewData } from '../Store/actions';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class FormGroupComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.form = this.fb.group({
      name: [''],
      color: [''],
      pet: [''],
    });
  }

  addData() {
    const val = this.form.value;
    console.log(val);
    this.store.dispatch(viewData({ user: val }));
  }
}
