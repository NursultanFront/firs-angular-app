import { createReducer, on } from '@ngrx/store';
import { countActions } from './count.actions';

export const countNode = 'count';

export interface CountState {
  count: number;
  updateAt: number;
}

const initialState: CountState = {
  count: 0,
  updateAt: Date.now(),
};

export const countReducer = createReducer(
  initialState,
  on(countActions.increase, (state) => ({ ...state, count: state.count + 1 })),
  on(countActions.decrease, (state) => ({ ...state, count: state.count - 1 })),
  on(countActions.clear, (state) => ({ ...state, count: 0 }))
);
