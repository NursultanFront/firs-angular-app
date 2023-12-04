import { ActionReducerMap } from '@ngrx/store';
import { CountState, countNode, countReducer } from './count/count.reducer';

export interface State {
  [countNode]: CountState;
}

export const reducers: ActionReducerMap<State> = {
  [countNode]: countReducer,
};
