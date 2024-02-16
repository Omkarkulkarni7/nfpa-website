import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { SystemsComponent } from './systems/systems.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-total-systems',
  standalone: true,
  imports: [ProductsComponent, ServicesComponent, SystemsComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './total-systems.component.html',
  styleUrl: './total-systems.component.css'
})
export class TotalSystemsComponent {

}
