import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, userNode } from './user.reducer';

export const selectUserFeature = createFeatureSelector<UserState>(userNode);

export const selectUser = createSelector(
  selectUserFeature,
  (state: UserState) => state.users
);
