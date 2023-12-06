import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../service/user.interface';
import { userActions } from './user.actions';

export const userNode = 'user';

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const userFeature = createFeature({
  name: 'user',
  reducer: createReducer(
    initialState,
    on(userActions.getUser, (state) => ({ ...state, users: state.users }))
  ),
});
