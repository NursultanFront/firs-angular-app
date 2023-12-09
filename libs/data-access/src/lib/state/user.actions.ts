import { createAction, props } from '@ngrx/store';
import { User } from '../service/user.interface';

export const getUser = createAction('[USERS] Get User');
export const getUserSuccess = createAction(
  '[USERS] Get User Success',
  props<{ users: User[] }>()
);

export const userActions = {
  getUser,
  getUserSuccess,
};
