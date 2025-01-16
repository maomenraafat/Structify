import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StarComponent } from '../star/star.component';
@Component({
  selector: 'app-contact',
  imports: [FormsModule, StarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  nameOfPage: string = 'contact section';
  colorOfText: string = '#2c3e50';
  userName: string = '';
  userAge!: number;
  // userAge: null|number = null;
  userEmail: string = '';
  userPassword: string = '';
}
