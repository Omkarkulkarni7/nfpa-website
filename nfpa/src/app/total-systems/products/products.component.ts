import { Component, OnInit } from '@angular/core';
import { ItemsComponent } from '../items/items.component';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ItemsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  ids: string[] = [];
  type: string = "products";

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    this.fetchProductIds();
  }

  async fetchProductIds() {
    const productsCollectionRef = collection(this.firestore, 'products');
    const querySnapshot = await getDocs(productsCollectionRef);
    this.ids = querySnapshot.docs.map(doc => doc.id);
  }
}
