import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAbfgHZdevkhK_AcmguhzMX0RWevFuLs9k",
  authDomain: "paintings-site.firebaseapp.com",
  projectId: "paintings-site",
  storageBucket: "paintings-site.appspot.com",
  messagingSenderId: "969743493327",
  appId: "1:969743493327:web:547e075a792d17683e6fba",
  measurementId: "G-KMLSPB08YB"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const auth = app.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, auth, timestamp };
export default app;
