import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCHqqu7Pjts0jefUOIitH-GisU_UOVblQ0",
    authDomain: "gerenciador-94627.firebaseapp.com",
    projectId: "gerenciador-94627",
    storageBucket: "gerenciador-94627.firebasestorage.app",
    messagingSenderId: "104583462645",
    appId: "1:104583462645:web:b078a974121550ad540fbc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };