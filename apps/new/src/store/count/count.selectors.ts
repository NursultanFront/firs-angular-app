import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountState, countNode } from './count.reducer';

export const selectCountFeature = createFeatureSelector<CountState>(countNode);

export const selectCount = createSelector(
  selectCountFeature,
  (state: CountState) => state.count
);

export const selectUpdateAt = createSelector(
  selectCountFeature,
  (state: CountState) => state.updateAt
);
