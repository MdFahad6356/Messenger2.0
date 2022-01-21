import firebase from "firebase/app";
import "firebase/auth";

//const firebase

export const auth = firebase.initializeApp({
    
    apiKey: "AIzaSyAXE6OhttAYGQzCmT1KmutwQZuklj2l0Tg",
    authDomain: "messenger-f4978.firebaseapp.com",
    projectId: "messenger-f4978",
    storageBucket: "messenger-f4978.appspot.com",
    messagingSenderId: "1028416730826",
    appId: "1:1028416730826:web:715b30ffd6498beb662633",
    measurementId: "G-79H6RK0BCW"


}).auth();