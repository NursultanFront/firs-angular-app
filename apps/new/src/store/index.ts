import { ActionReducerMap } from '@ngrx/store';
import { CountState, countNode, countReducer } from './count/count.reducer';

export interface State {
  [countNode]: CountState;
}

export const reducers: ActionReducerMap<State> = {
  [countNode]: countReducer,
};

// export const selectAdminState = createFeatureSelector<State>('admin');
// export const selectCarsState = createSelector(
//   selectAdminState,
//   (state: State) => state.count
// );

// export const selectAllCars = createSelector(
//   selectCarsState,
//   cars.selectAllCars
// );

// export const selectCarsPending = createSelector(
//   selectCarsState,
//   (state: cars.State) => state.pending
// );
