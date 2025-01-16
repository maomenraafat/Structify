import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { log } from 'node:console';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isScrolled = true; // Initially true
  lastScrollTop = 0; // Keep track of the last scroll position

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollTop > this.lastScrollTop) {
      this.isScrolled = false;
    } else if (scrollTop === 0) {
      this.isScrolled = true;
    }
    this.lastScrollTop = scrollTop;
  }
}
