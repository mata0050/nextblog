import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBeHg6NU_enr5_65mmTCCCHT86ny-p6-pw',
  authDomain: 'nextfire-efc62.firebaseapp.com',
  projectId: 'nextfire-efc62',
  storageBucket: 'nextfire-efc62.appspot.com',
  messagingSenderId: '331061039792',
  appId: '1:331061039792:web:b6c26515af1e1b0605a175',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
