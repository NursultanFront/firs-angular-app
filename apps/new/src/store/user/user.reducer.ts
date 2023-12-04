import { createReducer, on } from '@ngrx/store';
import { User } from '../../app/user.interface';
import { userActions } from './user.actions';

export const userNode = 'user';

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const userReducer = createReducer(
  initialState,
  on(userActions.getUser, (state) => ({ ...state, users: state.users }))
);
