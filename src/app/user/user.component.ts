import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomNumber = Math.floor(DUMMY_USERS.length * Math.random());

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  selectedUser = DUMMY_USERS[randomNumber];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    // console.log("Clicked! the user button :)");
    const randomNumber = Math.floor(DUMMY_USERS.length * Math.random());
    this.selectedUser = DUMMY_USERS[randomNumber];
  }
}
