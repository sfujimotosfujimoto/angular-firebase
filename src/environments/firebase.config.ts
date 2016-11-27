
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyBaIJ1WsVTcm0rRwwYocZbUIZ0CvnUk6uo",
  authDomain: "angular-firebase-91a20.firebaseapp.com",
  databaseURL: "https://angular-firebase-91a20.firebaseio.com",
  storageBucket: "angular-firebase-91a20.appspot.com",
  messagingSenderId: "698647074814"
};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
