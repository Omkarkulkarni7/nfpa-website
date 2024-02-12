import { Component } from '@angular/core';
import { IndividualItemsComponent } from '../individual-items/individual-items.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-systems',
  standalone: true,
  imports: [IndividualItemsComponent, RouterLink, RouterOutlet, CommonModule, RouterLinkActive],
  templateUrl: './total-systems.component.html',
  styleUrl: './total-systems.component.css'
})
export class TotalSystemsComponent {

}
