import { createReducer, on } from '@ngrx/store';

import { getUser, getUserSuccess } from './user.actions';
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
  on(getUser, (state) => ({ ...state })),
  on(getUserSuccess, (state, { users }) => ({ ...state, users }))
);
