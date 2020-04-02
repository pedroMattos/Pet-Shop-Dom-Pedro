import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
// import firebaseConfig from './firebaseConfig';

export const firebaseApp = firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
});
// exporta o metodo de autenticação e o banco de dados
// export default firebaseApp.auth() && firebaseApp.firestore();
export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get() {
      return firebaseApp
    }
  })
}

console.log('teste')
