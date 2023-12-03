import { Action } from '@ngrx/store';
import { User } from '../../app/user.interface';

export enum UsersActions {
  GetUsers = '[Users Page] GetUsers',
}

export class GetUsers implements Action {
  readonly type = '[Users Page] GetUsers';

  constructor(public payload: { id: number }) {}
}
