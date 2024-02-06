import { Component } from '@angular/core';
import { AboutpageComponent } from '../aboutpage/aboutpage.component';
import { OurProductsComponent } from '../our-products/our-products.component';
import { OurCustomersComponent } from '../our-customers/our-customers.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { CertificationComponent } from '../certification/certification.component';
import { OurVisionComponent } from '../our-vision/our-vision.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [AboutpageComponent, OurProductsComponent, OurCustomersComponent, OurServicesComponent, CertificationComponent, OurVisionComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  statecount: number = 0;
  productcount: number = 0;
  clientcount: number = 0;
  installcount: number = 0;

  statecountstop: any = setInterval(() => {
    this.statecount++;

    if (this.statecount == 8) {
      clearInterval(this.statecountstop);
    }
  }, 10);

  productcountstop: any = setInterval(() => {
    this.productcount++;

    if (this.productcount == 50) {
      clearInterval(this.productcountstop);
    }
  }, 10);

  clientcountstop: any = setInterval(() => {
    this.clientcount++;

    if (this.clientcount == 100) {
      clearInterval(this.clientcountstop);
    }
  }, 10);

  installcountstop: any = setInterval(() => {
    this.installcount++;

    if (this.installcount == 200) {
      clearInterval(this.installcountstop);
    }
  }, 10);
}
