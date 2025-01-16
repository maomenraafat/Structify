import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';

@Component({
  selector: 'app-portfolio',
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  nameOfPage: string = 'portfolio component';
  colorOfText: string = '#2c3e50';
  images: Array<string> = [
    '/images/portfolio/poert1.png',
    '/images/portfolio/port2.png',
    '/images/portfolio/port3.png',
    '/images/portfolio/poert1.png',
    '/images/portfolio/port2.png',
    '/images/portfolio/port3.png',
  ];

  isModalOpen = false;
  modalImageSrc: string = '';

  openModal(imageSrc: string) {
    this.modalImageSrc = imageSrc;
    this.isModalOpen = true;
  }

  closeModal(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal')) {
      this.isModalOpen = false;
    }
  }
}
