import { CountState } from './../store/count/count.reducer';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectCount, selectUpdateAt } from '../store/count/count.selectors';
import { countActions } from '../store/count/count.actions';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule],
  selector: 'new-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'new';
  private store$ = inject(Store<CountState>);

  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public upadtedAt$: Observable<number> = this.store$.pipe(
    select(selectUpdateAt)
  );

  increase() {
    this.store$.dispatch(countActions.increase());
  }

  decrease() {
    this.store$.dispatch(countActions.decrease());
  }

  clear() {
    this.store$.dispatch(countActions.clear());
  }
}
