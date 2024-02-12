import { AfterViewInit, Component, ElementRef } from '@angular/core';
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

export class HomepageComponent implements AfterViewInit {
  statecount: number = 0;
  productcount: number = 0;
  clientcount: number = 0;
  installcount: number = 0;
  maxCount: number = 200; // Maximum value among all counters
  maxDuration: number = 3000; // Maximum duration in milliseconds for all counters to reach their destination
  intervalDuration: number = 0; // Interval duration for counters

  constructor(private elementRef: ElementRef) {
    this.intervalDuration = 0; // Assign a default value to intervalDuration
  }

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Change this value as needed, e.g., 0.5 for 50% visibility
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.startCounters();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this.elementRef.nativeElement.querySelector('.counterContainer'));

    // Calculate interval duration based on max duration and max count
    this.intervalDuration = this.maxDuration / this.maxCount;
  }

  startCounters() {
    const statecountstop = setInterval(() => {
      this.statecount++;
      if (this.statecount >= 8) {
        clearInterval(statecountstop);
      }
    }, this.intervalDuration);

    const productcountstop = setInterval(() => {
      this.productcount++;
      if (this.productcount >= 50) {
        clearInterval(productcountstop);
      }
    }, this.intervalDuration);

    const clientcountstop = setInterval(() => {
      this.clientcount++;
      if (this.clientcount >= 100) {
        clearInterval(clientcountstop);
      }
    }, this.intervalDuration);

    const installcountstop = setInterval(() => {
      this.installcount++;
      if (this.installcount >= 200) {
        clearInterval(installcountstop);
      }
    }, this.intervalDuration);
  }
}
