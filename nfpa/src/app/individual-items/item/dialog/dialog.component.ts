import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentData, Firestore, doc, getDoc, collection, query, limit, getDocs } from '@angular/fire/firestore';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { Observable, of } from 'rxjs';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, RouterLink, RouterLinkActive ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {
  @Input() id!: string | null;
  @Input() productId!: string | null;
  @Input() type!: string | null;
  detail$: Observable<DocumentData> | undefined;

  constructor(private firestore: Firestore, private storage: Storage) {}

  async ngOnInit() {
    let detailsDocRef;
    if (this.type === "products") {
      detailsDocRef = doc(this.firestore, `${this.type}/${this.productId}/subProducts/${this.id}/details/1`);
    }
    else if (this.type === "systems") {
      detailsDocRef = doc(this.firestore, `${this.type}/${this.productId}/subSystems/${this.id}/details/1`);
    } 
    else {
      detailsDocRef = doc(this.firestore, `${this.type}/${this.productId}/subServices/${this.id}/details/1`);
    }
    const detSnapshot = await getDoc(detailsDocRef);
    if (detSnapshot.exists()) {
      let detailsData = detSnapshot.data();
      this.detail$ = of(detailsData);
    } else {
      console.log("No such document!");
    }
  }
}
