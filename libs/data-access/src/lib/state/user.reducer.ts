import { createReducer, on } from '@ngrx/store';

import { userActions } from './user.actions';
import { User } from '../service/user.interface';

export interface UserState {
  users: User[];
}

export const userNode = 'user';
const initialState: UserState = {
  users: [],
};

export const userReducer = createReducer(
  initialState,
  on(userActions.getUser, (state) => ({ ...state })),
  on(userActions.getUserSuccess, (state, { users }) => ({ ...state, users }))
);
