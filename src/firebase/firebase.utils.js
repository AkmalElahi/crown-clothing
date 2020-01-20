import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyACyU_SxasgwEsJJdsSNysi0DFRrt9ZuvE",
    authDomain: "crown-clothing-92887.firebaseapp.com",
    databaseURL: "https://crown-clothing-92887.firebaseio.com",
    projectId: "crown-clothing-92887",
    storageBucket: "crown-clothing-92887.appspot.com",
    messagingSenderId: "394412871201",
    appId: "1:394412871201:web:92a978b035c73c6d1e9d60"
}
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(error.mesage);
        }

    }

    return userRef;

}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase