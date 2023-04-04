import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDqAlM63UpuSbf8fHZaMytzULpWiVPmA4E",
  authDomain: "tiktok---jornada-b08ca.firebaseapp.com",
  projectId: "tiktok---jornada-b08ca",
  storageBucket: "tiktok---jornada-b08ca.appspot.com",
  messagingSenderId: "472989927197",
  appId: "1:472989927197:web:e30b2ff8ba28ec38e883f4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db