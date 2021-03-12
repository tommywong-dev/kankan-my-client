import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBh5yV2Vi6KEWnzh2OrchqeXrbCWGIvwv8",
  authDomain: "kankan-server.firebaseapp.com",
  projectId: "kankan-server",
  storageBucket: "kankan-server.appspot.com",
  messagingSenderId: "652317025949",
  appId: "1:652317025949:web:ea8c055e6bed6b4fdd1674",
  measurementId: "G-EVVXETJ2XV"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.database().ref("users");

const getAll = () => {
  return db;
};

const create = (data) => {
  return db.push(data);
};

const update = (key, data) => {
  return db.child(key).update(data);
};

const remove = (key) => {
  return db.child(key).remove();
};

export default {
  getAll,
  create,
  update,
  remove,
};