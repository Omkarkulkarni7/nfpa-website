import { NgIf, NgStyle, NgClass, CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { AboutpageComponent } from '../aboutpage/aboutpage.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    RouterOutlet,
    NgIf,
    AboutpageComponent,
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          height: '4.5rem',
          width: '100%',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px 0 #0000001a',
          color: 'black',
        })
      ),

      state(
        'closed',
        style({
          height: '4.5rem',
          width: '98%',
          position: 'fixed',
          top: '15px',
          left: '10px',
          backgroundColor: '#0a5983',
          color: 'white',
          borderRadius: '20px',
        })
      ),

      transition('open => closed', [animate('0.4s')]),

      transition('closed => open', [
        animate(
          '0.7s ease',
          keyframes([
            style({ transform: 'translateY(0px)', offset: 0 }),
            style({ transform: 'translateY(-10px)', offset: 0.1 }),
            style({ transform: 'translateY(-20px)', offset: 0.2 }),
            style({ transform: 'translateY(-30px)', offset: 0.3 }),
            style({ transform: 'translateY(-40px)', offset: 0.4 }),
            style({ transform: 'translateY(-50px)', offset: 0.5 }),
            style({ transform: 'translateY(-60px)', offset: 0.6 }),
            style({ transform: 'translateY(-70px)', offset: 0.7 }),
            style({ transform: 'translateY(-80px)', offset: 0.8 }),
            style({ transform: 'translateY(-90px)', offset: 0.9 }),
            style({ transform: 'translateY(-100px)', offset: 1 }),
          ])
        ),
      ]),

      transition('void => open', [animate('0s')]),
    ]),
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isOpen = true;
  isPresent = false;
  private previousScrollPosition: number = 0;

  dropdownOpen: boolean = false;
  toggledOnce: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollPosition < this.previousScrollPosition) {
      // Scrolling up, show navbar
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }

    this.previousScrollPosition = scrollPosition;

    if (scrollPosition < 30) {
      this.isOpen = true;
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (!this.toggledOnce) {
      this.toggledOnce = true;
    }
  }
}
