import { Component, OnInit } from '@angular/core';
import { ItemsComponent } from '../items/items.component';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-systems',
  standalone: true,
  imports: [ItemsComponent],
  templateUrl: './systems.component.html',
  styleUrl: './systems.component.css'
})
export class SystemsComponent implements OnInit {
  ids: string[] = [];
  type: string = "systems";

  constructor(private firestore: Firestore) {}

  ngOnInit() {
    this.fetchProductIds();
  }

  async fetchProductIds() {
    const productsCollectionRef = collection(this.firestore, 'systems');
    const querySnapshot = await getDocs(productsCollectionRef);
    this.ids = querySnapshot.docs.map(doc => doc.id);
  }
}
