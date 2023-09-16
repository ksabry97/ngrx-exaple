import { UserData } from '../data-model';

export interface AppState {
  user: UserData;
}
export const intialState: AppState = {
  user: {
    name: '',
    color: '',
    pet: '',
  },
};
