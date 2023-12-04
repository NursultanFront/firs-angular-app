import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'new-feature-users-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-users-list.component.html',
  styleUrls: ['./feature-users-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureUsersListComponent {}
