import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentData, Firestore, doc, getDoc, collection, query, limit, getDocs } from '@angular/fire/firestore';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  @Input() id!: string;
  @Input() type!: string;
  ids: DocumentData[] = [];
  product$: Observable<DocumentData> | undefined;

  constructor(private firestore: Firestore, private storage: Storage) {}

  async ngOnInit() {
    const productDocRef = doc(this.firestore, `${this.type}/${this.id}`);
    const docSnapshot = await getDoc(productDocRef);
    if (docSnapshot.exists()) {
      let productData = docSnapshot.data();
      if (productData['image']) {
        // Convert the gs:// URL to an HTTPS URL
        const imageRef = ref(this.storage, productData['image']);
        productData['imageUrl'] = await getDownloadURL(imageRef);
      }
      let subProductsColRef;
      if (this.type === "products") {
        subProductsColRef = collection(this.firestore, `${this.type}/${this.id}/subProducts`);
      }
      else if (this.type === "systems") {
        subProductsColRef = collection(this.firestore, `${this.type}/${this.id}/subSystems`);
      } 
      else {
        subProductsColRef = collection(this.firestore, `${this.type}/${this.id}/subServices`);
      }
      
      const q = query(subProductsColRef, limit(3)); // Limit to 3 documents
      const subProductSnapshots = await getDocs(q);
      productData['subProductNames'] = subProductSnapshots.docs.map(doc => doc.data()['name']);
      this.product$ = of(productData);
    } else {
      console.log("No such document!");
    }
  }
}