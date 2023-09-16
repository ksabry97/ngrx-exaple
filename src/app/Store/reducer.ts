import { createReducer, on } from '@ngrx/store';
import { AppState, intialState } from './State';
import { viewData } from './actions';
import { state } from '@angular/animations';

export const viewReducer = createReducer(
  intialState,
  on(viewData, (state: AppState, action) => {
    return {
      ...state,
      user: action.user,
    };
  })
);
