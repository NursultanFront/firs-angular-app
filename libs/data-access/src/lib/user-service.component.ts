import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'new-user-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.scss'],
})
export class UserServiceComponent {}
