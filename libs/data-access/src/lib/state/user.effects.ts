import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { userActions } from './user.actions';
import UserService from '../service/user.service';

export const getUser$ = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(
      ofType(userActions.getUser),
      switchMap(() =>
        userService
          .getUsers()
          .pipe(map((users) => userActions.getUserSuccess({ users })))
      )
    );
  },
  { functional: true }
);
