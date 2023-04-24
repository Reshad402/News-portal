// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEXKNWIPHY5IRNGDrMdzxycudYVY5vlJg",
  authDomain: "drahon-news.firebaseapp.com",
  projectId: "drahon-news",
  storageBucket: "drahon-news.appspot.com",
  messagingSenderId: "104149721776",
  appId: "1:104149721776:web:29005abaac7050764f5175"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;