import * as firebaseApp from 'firebase';

// let firebase: any;
export const firebase = firebaseApp.initializeApp({
  apiKey: "AIzaSyAsc29VwA-EYG9BUmftyLxmfEBq_4dqyBY",
  authDomain: "globalsolicitors-12de8.firebaseapp.com",
  databaseURL: "https://globalsolicitors-12de8.firebaseio.com",
  projectId: "globalsolicitors-12de8",
  storageBucket: "globalsolicitors-12de8.appspot.com",
  messagingSenderId: "1092783574758",
  appId: "1:1092783574758:web:8a21ff76505c9ad7"
}).firestore();