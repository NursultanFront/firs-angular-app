import { createAction } from '@ngrx/store';

export const increase = createAction('[COUNT] increase');
export const decrease = createAction('[COUNT] decrease');
export const clear = createAction('[COUNT] clear');

export const countActions = {
  increase,
  decrease,
  clear,
};
