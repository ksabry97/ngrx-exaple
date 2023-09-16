import { createAction, props } from '@ngrx/store';
import { UserData } from '../data-model';

export const viewData = createAction('view', props<{ user: UserData }>());
