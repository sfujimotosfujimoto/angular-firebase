import { Component } from '@angular/core';

import { initializeApp, database } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBaIJ1WsVTcm0rRwwYocZbUIZ0CvnUk6uo",
      authDomain: "angular-firebase-91a20.firebaseapp.com",
      databaseURL: "https://angular-firebase-91a20.firebaseio.com",
      storageBucket: "angular-firebase-91a20.appspot.com",
      messagingSenderId: "698647074814"
    };

    initializeApp(config);

    const root = database().ref();

    root.on('value', function(snap){
      console.log(snap.val());
    });
  }

}
