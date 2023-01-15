import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBfFoUsDOInC7Q4YrMe9lgx11_S4stsT_w",
  authDomain: "movix-app-2240c.firebaseapp.com",
  projectId: "movix-app-2240c",
  storageBucket: "movix-app-2240c.appspot.com",
  messagingSenderId: "207267063070",
  appId: "1:207267063070:web:2706a575311a47e288950f",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };
