import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { UserState, getUser } from '@new/user-service';

@Component({
  selector: 'new-feature-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-user-list.component.html',
  styleUrls: ['./feature-user-list.component.scss'],
})
export class FeatureUserListComponent implements OnInit {
  private store = inject(Store<{ user: UserState }>);

  users$ = this.store.select((state) => state.user.users);

  hiddenUsers: { [key: string]: boolean } = {};

  ngOnInit(): void {
    this.store.dispatch(getUser());
  }

  toggleVisibility(userId: string): void {
    this.hiddenUsers[userId] = !this.hiddenUsers[userId];
  }

  isHidden(userId: string): boolean {
    // Проверяем, скрыт ли пользователь
    return this.hiddenUsers[userId];
  }
}
