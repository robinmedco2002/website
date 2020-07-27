import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  topics =['Angular', 'React', 'Vue'];
  userModel = new User('', '', 1000000000, '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
