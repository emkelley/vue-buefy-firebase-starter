import firebase from "firebase";

const config = {
  // Firebase config here
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection("users");

export const getUser = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const logout = () => {
  firebase.auth().signOut();
};
