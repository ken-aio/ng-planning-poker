import { Injectable } from '@angular/core';

const USER_KEY = 'ng-planning-poker.user';

interface IUser {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public name: string;

  constructor() { }

  fetch(): IUser {
    return JSON.parse(localStorage.getItem(USER_KEY)) || [];
  }

  clear(): void {
    localStorage.removeItem(USER_KEY);
  }

  save(name: string): void {
    const user = {name: name};
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}
