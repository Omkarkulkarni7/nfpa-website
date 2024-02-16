import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DocumentData, Firestore, doc, getDoc, collection, query, limit, getDocs } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-individual-items',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive, ItemComponent, CommonModule ],
  templateUrl: './individual-items.component.html',
  styleUrl: './individual-items.component.css'
})
export class IndividualItemsComponent implements OnInit {
  productId: string | null = null;
  type: string | null = null;
  ids: string[] = [];
  product$: Observable<DocumentData> | undefined;

  constructor(private route: ActivatedRoute, private firestore: Firestore) {}

  async ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    this.productId = this.route.snapshot.paramMap.get('id');
    const productDocRef = doc(this.firestore, `${this.type}/${this.productId}`);
    const docSnapshot = await getDoc(productDocRef);
    if (docSnapshot.exists()) {
      let productData = docSnapshot.data();
      this.product$ = of(productData);
      let productsCollectionRef;
      if (this.type === "products") {
        productsCollectionRef = collection(this.firestore, `${this.type}/${this.productId}/subProducts`);
      }
      else if (this.type === "systems") {
        productsCollectionRef = collection(this.firestore, `${this.type}/${this.productId}/subSystems`);
      } 
      else {
        productsCollectionRef = collection(this.firestore, `${this.type}/${this.productId}/subServices`);
      }
      const querySnapshot = await getDocs(productsCollectionRef);
      this.ids = querySnapshot.docs.map(doc => doc.id);
    } else {
      console.log("No such document!");
    }
  }
}
