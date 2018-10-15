import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
    name = 'Doe';
    firstName = 'John';
    age = 25;
    photo = 'https://randomuser.me/api/portraits/lego/2.jpg';
    phrase = 'two beer or not to beer';
    show = true;
  constructor() { }

  ngOnInit() {
  }

}
