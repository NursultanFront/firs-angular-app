import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'new-feature-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-user-list.component.html',
  styleUrls: ['./feature-user-list.component.scss'],
})
export class FeatureUserListComponent {}
