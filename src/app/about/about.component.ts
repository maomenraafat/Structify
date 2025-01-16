import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-about',
  imports: [StarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  nameOfPage: string = 'about component';
}