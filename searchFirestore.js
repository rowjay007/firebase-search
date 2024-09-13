const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} = require("firebase/firestore");  

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function searchExactTitle() {
  const collectionName = "ActionsTemplates"; 
  const searchTerm = "Purchase and play game for 2 hours"; 
  const q = query(
    collection(db, collectionName),
    where("title", "==", searchTerm) 
  );

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    console.log("No matching documents found.");
  } else {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  }
}

searchExactTitle();