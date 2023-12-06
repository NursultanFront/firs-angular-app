import { Observable } from 'rxjs';
import { User } from './user.interface';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export default class UserService {
  private readonly http = inject(HttpClient);

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  constructor() {
    this.getUsers().subscribe();
  }
}
