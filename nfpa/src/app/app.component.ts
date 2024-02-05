import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgStyle, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { TotalSystemsComponent } from './total-systems/total-systems.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomepageComponent, TotalSystemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'nfpa';
}
