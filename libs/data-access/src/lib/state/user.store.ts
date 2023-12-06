import { ActionReducerMap } from '@ngrx/store';
import { UserState, userNode, userReducer } from './user.reducer';

export interface State {
  [userNode]: UserState;
}

export const reducers: ActionReducerMap<State> = {
  [userNode]: userReducer,
};
