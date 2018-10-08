import { Component, OnInit } from '@angular/core';
import {SignUp} from './signup'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    email: string;
  constructor() { }

  ngOnInit() {
  }

}
