// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHIS9WKLxMfWGmyvOWL4oSbGNYPp4NhzQ",
  authDomain: "pfaapp-1390b.firebaseapp.com",
  projectId: "pfaapp-1390b",
  storageBucket: "pfaapp-1390b.appspot.com",
  messagingSenderId: "351165932457",
  appId: "1:351165932457:web:851f4b11a23ec36a249ab8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);