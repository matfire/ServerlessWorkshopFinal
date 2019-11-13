import * as firebase from "firebase";

// this is the config file you should replace with you own
const config = {
  apiKey: "AIzaSyAB1Vd67G6Q0jIwWKMZgPJJuSxbdJZTD7A",
  authDomain: "workshopserverless.firebaseapp.com",
  databaseURL: "https://workshopserverless.firebaseio.com",
  projectId: "workshopserverless",
  storageBucket: "workshopserverless.appspot.com",
  messagingSenderId: "14090916557",
  appId: "1:14090916557:web:62e0930789af183eb1cf84",
  measurementId: "G-B0HGBHNCET"
};

// this class contains all you need to access Firestore, do authentication
// you could also add more stuff like analytics or push notifications
class Firebase {
  constructor() {
    if (!firebase.apps.length && config.apiKey) {
      firebase.initializeApp(config);
      this.db = firebase.firestore();
      this.auth = firebase.auth();
    }
  }
  polls = () => this.db.collection("polls"); // decide if you want to gei an instance, or a stream for the polls;;
  poll = pollId => this.db.collection("polls").doc(pollId); // decide if you want to gei an instance, or a stream for the poll;
}

export default Firebase;
