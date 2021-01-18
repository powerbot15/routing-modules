import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Tom Smith'
  },
  {
    id: 3,
    name: 'Kate McLean'
  },
  {
    id: 4,
    name: 'Mr. Andersen'
  },
];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return users;
  }

  getUser(id: number): User {
    return users.find(user => user.id === id);
  }
}
