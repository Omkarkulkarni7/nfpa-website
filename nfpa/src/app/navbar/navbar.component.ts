
import { NgIf, NgStyle, NgClass, CommonModule } from '@angular/common';
import { Component, HostListener, Input} from '@angular/core';
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
  imports: [NgStyle, NgClass, RouterOutlet, NgIf, AboutpageComponent, CommonModule, RouterLink, RouterLinkActive],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '4.5rem',
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px 0 #0000001a',
        color: 'black',
      })),
      state('closed', style({
        height: '4.5rem',
        width: '98%',
        position: 'fixed',
        top: '15px',
        left: '10px',
        backgroundColor: '#0a5983',
        color: 'white',
        borderRadius: '20px',
      })),

      transition('open => closed', [
        animate('2s',keyframes([
          style({offset: '0.1'}),
          style({offset: '0.9'}),
          // style({transform: 'translateY(0)'}),
        ]))

      ]),

      transition('closed => open', [
        animate('0.5s')
      ]),

      transition('* => open', [
        animate('0.5s')
      ]),

      transition ('* => closed', [
        animate('2s',keyframes([
          style({offset: '0.1'}),
          style({offset: '0.9'}),
          // style({transform: 'translateY(0)'}),
        ]))
      ]),
    ]),
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {


  isOpen = true;

  private previousScrollPosition: number = 0;



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
    }

    this.previousScrollPosition = scrollPosition;

    if (scrollPosition < 30) {
      
      this.isOpen = true;
    }
  }
}
