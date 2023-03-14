import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCDZHTL5MbETeM274o1vCxHXyU0eRftGFU",
    authDomain: "weatherly-45570.firebaseapp.com",
    projectId: "weatherly-45570",
    storageBucket: "weatherly-45570.appspot.com",
    messagingSenderId: "861537767401",
    appId: "1:861537767401:web:620f898c001b1c93df0578"
};

const app = initializeApp(firebaseConfig);

export default app;