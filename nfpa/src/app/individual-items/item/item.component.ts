import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentData, Firestore, doc, getDoc, collection, query, limit, getDocs } from '@angular/fire/firestore';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DialogComponent ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {
  @Input() id!: string | null;
  @Input() productId!: string | null;
  @Input() type!: string | null;
  product$: Observable<DocumentData> | undefined;
  detail$: Observable<DocumentData> | undefined;
  showDialog: boolean = false;

  constructor(private firestore: Firestore, private storage: Storage) {}

  async ngOnInit() {
    let productDocRef;
    if (this.type === "products") {
      productDocRef = doc(this.firestore, `${this.type}/${this.productId}/subProducts/${this.id}`);
    }
    else if (this.type === "systems") {
      productDocRef = doc(this.firestore, `${this.type}/${this.productId}/subSystems/${this.id}`);
    } 
    else {
      productDocRef = doc(this.firestore, `${this.type}/${this.productId}/subServices/${this.id}`);
    }
    const docSnapshot = await getDoc(productDocRef);
    if (docSnapshot.exists()) {
      let productData = docSnapshot.data();
      if (productData['images'] && Array.isArray(productData['images'])) {
        const imageRefs = productData['images'].map(imagePath => ref(this.storage, imagePath));
        const imageUrls = await Promise.all(imageRefs.map(imageRef => getDownloadURL(imageRef)));
        productData['imageUrls'] = imageUrls;
      }      
      this.product$ = of(productData);
    } else {
      console.log("No such document!");
    }
  }
}


