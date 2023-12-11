import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'pb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public authService: AuthService) { 
    // Constructor should be kept simple
  }

  ngOnInit(): void {
    // Initialization logic goes here
  }

  // Define the submitMessage method outside of the constructor
  public submitButton(): void {
    alert('Your message has been submitted!');
  }
}
