import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'intersection-observer';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'our-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-customers.component.html',
  styleUrls: ['./our-customers.component.css']
})

export class OurCustomersComponent implements AfterViewInit{
  
  // imagePaths: string[] = []; // Array to hold image paths
  list1Images: string[] = ["assets/clients-images/MRF-Tyre-Logo-bg.png", "../../assets/clients-images/Barbeque_Nation_New_Logo-bg.png", 
  "../../assets/clients-images/Aditya-Birla-Group-Logo-bg.png", "assets/clients-images/Ambuja-Cement-Logo-bg.png",
  "../../assets/clients-images/Ultratech_Cement_Logo.svg-bg.png", "../../assets/clients-images/starbucks-coffee-logo.png",
  "../../assets/clients-images/Mahindra-logo-bg.png"]; // Array to hold first half of images

  list2Images: string[] = ["../../assets/clients-images/Big-Basket-Logo-bg.png", "../../assets/clients-images/Sayaji-Logo-bg.png", 
  "../../assets/clients-images/Power-Grid-Logo.png", "assets/clients-images/Amanora-Logo-bg.png",
  "../../assets/clients-images/Mahavitran-Logo-bg.png", "../../assets/clients-images/Jcb-Logo.png"]; // Array to hold second half of images

  @ViewChildren('clientLogos') clientLogos!: QueryList<ElementRef>;
  @ViewChildren('title') titleElement!: QueryList<ElementRef>;

  constructor() {

  }

  ngAfterViewInit() {

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('img-visible');
          observer.unobserve(entry.target);
          console.log('Element is intersecting!');
        }
      });
    }, { threshold: 0.1 });

    this.clientLogos.forEach((logo) => {
      if (logo) {
        observer.observe(logo.nativeElement);
      }
    });

    const observer2 = new IntersectionObserver((entries, observer2) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('title-visible');
          observer2.unobserve(entry.target);
          console.log('Element is intersecting!');
        }
      });
    }, { threshold: 0.1 });

    this.titleElement.forEach((titleElement) => {
      if (titleElement) {
        observer.observe(titleElement.nativeElement);
      }
    });

  }
}
