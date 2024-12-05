import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  // Input to receive the list of users from the parent component
  @Input() users: { firstname: string; lastname: string; username: string; password: string }[] = [];

  // Output event to send the username for deletion to the parent component
  @Output() userDeleted = new EventEmitter<string>();

  // Method to handle user deletion
  deleteUser(username: string) {
    // Emit the username to the parent component for deletion
    this.userDeleted.emit(username);
  }
}
