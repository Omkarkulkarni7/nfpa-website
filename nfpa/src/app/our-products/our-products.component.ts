import { Component, QueryList, ElementRef, ViewChildren, AfterViewInit } from '@angular/core';
import 'intersection-observer';

@Component({
  selector: 'app-our-products',
  standalone: true,
  imports: [],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.css'
})

export class OurProductsComponent implements AfterViewInit{
  
    @ViewChildren('title') titleElement!: QueryList<ElementRef>;
    @ViewChildren('product') products!: QueryList<ElementRef>;

    constructor() { }
  
    ngAfterViewInit() {
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('title-animation');
            observer.unobserve(entry.target);
            console.log('Ttile of products Element is intersecting!');
          }
        });
      }, { threshold: 0.1 });

      this.titleElement.forEach((title) => {
        if (title) {
          observer.observe(title.nativeElement);
        }
      });

      const observer1 = new IntersectionObserver((entries, observer1) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-animation');
            observer.unobserve(entry.target);
            console.log('Element is intersecting!');
          }
        });
      }, { threshold: 0.1 });

      this.products.forEach((prod) => {
        if (prod) {
          observer1.observe(prod.nativeElement);
        }
      });

    }
}
