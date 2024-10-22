// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiFV04ewSnwYivETEQztVbMGiYWbPR0fY",
  authDomain: "dailytracker-e03cf.firebaseapp.com",
  projectId: "dailytracker-e03cf",
  storageBucket: "dailytracker-e03cf.appspot.com",
  messagingSenderId: "496322451038",
  appId: "1:496322451038:web:d20941e63c6b2d13d786cf",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userDocRef;
};

export const createAUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const updateUserProfile = async (profileData) => {
  const user = auth.currentUser;

  if (user) {
    try {
      await updateProfile(user, profileData);
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating user profile", error);
    }
  } else {
    console.log("No user is currently signed in");
  }
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
  // field = "title"
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};


export const getDocuments = async ({
  collectionName,
  sortBy = "title",
  sortOrder = "asc",
}) => {
  try {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, orderBy(sortBy, sortOrder));

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error(`Error fetching documents from ${collectionName}: `, error);
    return []; 
  }
};


export const getCategoriesAndDocuments = async () => {
  return await getDocuments({
    collectionName: "categories",
    sortBy: "title",
    sortOrder: "desc",
  });
};


export const getMensCategories = async () => {
  return await getDocuments({
    collectionName: "mens",
    sortBy: "title",
    sortOrder: "asc",
    filters: [
      { field: "category", operator: "==", value: "sports" }, 
    ],
  });
};
