import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './State';

const viewData = createFeatureSelector<AppState>('view');
export const getData = createSelector(viewData, (state: AppState) => {
  return state.user;
});
