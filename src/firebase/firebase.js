import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
const API_KEY = import.meta.env.VITE_API_KEY;

export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'nannies-c386f.firebaseapp.com',
  databaseURL:
    'https://nannies-c386f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'nannies-c386f',
  storageBucket: 'nannies-c386f.appspot.com',
  messagingSenderId: '48334285090',
  appId: '1:48334285090:web:7998aec1541a9a97485d7b',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase();
