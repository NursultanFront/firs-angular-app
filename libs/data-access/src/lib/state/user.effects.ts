import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { getUser, getUserSuccess } from './user.actions';
import UserService from '../service/user.service';

export const getUser$ = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(
      ofType(getUser),
      switchMap(() =>
        userService.getUsers().pipe(map((users) => getUserSuccess({ users })))
      )
    );
  },
  { functional: true }
);
