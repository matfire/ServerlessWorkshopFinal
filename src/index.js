import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import "./styles.css";
import Firebase, { FirebaseContext } from "./components/Firebase";
import Layout from "./components/Layout";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase'
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
}

function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Layout />
    </FirebaseContext.Provider>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);