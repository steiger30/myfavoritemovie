// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyDuyIjBk3H5Tu4HNVM7Ukcb1vERPXoWS_I",
  authDomain: "myfavoritemovie-ddb04.firebaseapp.com",
  projectId: "myfavoritemovie-ddb04",
  storageBucket: "myfavoritemovie-ddb04.appspot.com",
  messagingSenderId: "191266660967",
  appId: "1:191266660967:web:90b6a8bc4b0df96ee4aac2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
