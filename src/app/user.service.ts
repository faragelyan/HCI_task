import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Private array to store user objects with 'username' and 'password'
  private users: { username: string; password: string }[] = [];

  // Method to add a new user
  addUser(user: { username: string; password: string }): boolean {
    // Check if the user already exists by comparing the username
    const userExists = this.users.find(u => u.username === user.username);

    // If the user exists, return false indicating failure to add the user
    if (userExists) {
      return false;
    }

    // If user does not exist, add the new user to the users array
    this.users.push(user);
    return true;  // Successfully added the user
  }

  // Method to retrieve all users
  getUsers() {
    // Return a copy of the users array to avoid direct manipulation of the original array
    return [...this.users];
  }

  // Method to delete a user by their username
  deleteUser(username: string) {
    // Filter out the user with the specified username from the users array
    this.users = this.users.filter(user => user.username !== username);
  }
}
