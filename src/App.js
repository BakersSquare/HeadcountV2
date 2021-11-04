import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


//https://www.bing.com/videos/search?q=using+electron+app+with+firebase&&view=detail&mid=88FF603427AC99FA7FDF88FF603427AC99FA7FDF&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3Dusing%2Belectron%2Bapp%2Bwith%2Bfirebase%26FORM%3DHDRSC3

firebase.initializeApp({
apiKey: "AIzaSyBWNGgEWcXl8Hoy9gq2yh4iONBtVOQ5LVE",
  authDomain: "headcount-epics.firebaseapp.com",
  projectId: "headcount-epics",
  storageBucket: "headcount-epics.appspot.com",
  messagingSenderId: "1012274012291",
  appId: "1:1012274012291:web:0d7ffcd1c17a28b3b6bbb6",
  measurementId: "G-FBJD25855D"
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        Dude no way
      </header>

      <section >
        {user ? <HeadcountUI /> : <SignIn />}
        {/* if user != null, display the UI. if user == null, they haven't signed in*/}
      </section>

    </div>
  );
}

function HeadcountUI(){

  return(
    <header>Signed in!</header>
  )
}

function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.SignOut()}>Sign Out</button>
  )
}

export default App;
