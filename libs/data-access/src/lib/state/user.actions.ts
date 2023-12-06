import { createAction } from '@ngrx/store';

export const getUser = createAction('[USERS] getUser');

export const userActions = {
  getUser,
};
