import { Component, OnInit } from '@angular/core';
import { ItemsComponent } from '../items/items.component';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ItemsComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  ids: string[] = [];
  type: string = "services";

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    this.fetchProductIds();
  }

  async fetchProductIds() {
    const productsCollectionRef = collection(this.firestore, 'services');
    const querySnapshot = await getDocs(productsCollectionRef);
    this.ids = querySnapshot.docs.map(doc => doc.id);
  }
}
