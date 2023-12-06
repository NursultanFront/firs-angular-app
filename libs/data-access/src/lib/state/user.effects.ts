import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
import { userActions } from './user.actions';
import { Store } from '@ngrx/store';
import UserService from '../service/user.service';

export const getUser$ = createEffect(
  (actions$ = inject(Actions), userService = inject(UserService)) => {
    return actions$.pipe(ofType(userActions.getUser));
  },
  { functional: true, dispatch: false }
);

// export const getUser$ = createEffect(
//   (actions$ = inject(Actions), authService = inject(AuthService)) => {
//     return actions$.pipe(
//       ofType(authActions.getUser),
//       switchMap(() =>
//         authService.user().pipe(
//           map((data) => authActions.getUserSuccess({ user: data.user })),
//           catchError((error) => of(authActions.getUserFailure({ error }))),
//         ),
//       ),
//     );
//   },
//   { functional: true },
// );
