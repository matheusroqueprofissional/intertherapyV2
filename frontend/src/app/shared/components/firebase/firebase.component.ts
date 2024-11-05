import { Component, OnInit } from '@angular/core';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from "firebase/firestore";

@Component({
  selector: 'app-firebase',
  standalone: true,
  imports: [],
  templateUrl: './firebase.component.html',
  styleUrl: './firebase.component.scss'
})
export class FirebaseComponent implements OnInit {
  async ngOnInit(): Promise<void> {

    try {
      const docRef = await addDoc(collection(this.db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    throw new Error('Method not implemented.');
  }



  firebaseConfig = {
    apiKey: "AIzaSyC1TRAFbbTHNkuRJZavNiOh0YcyARslorg",
    authDomain: "intertherapy-f5e69.firebaseapp.com",
    projectId: "intertherapy-f5e69",
    storageBucket: "intertherapy-f5e69.appspot.com",
    messagingSenderId: "1080674504020",
    appId: "1:1080674504020:web:3cb76dc240e704c8354cc1",
    measurementId: "G-GEDKC2T711"
  };
  // Initialize Firebase

  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
  db = getFirestore(this.app);


}
