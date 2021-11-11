import './App.css';
import { HeadcountUI } from "./components/HeadcountUI";

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

  //If user is logged in, user is an object w an id, email address, other info, etc.
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        Headcount with Authentication
      </header>

      <section >
        {user ? <SignedIn /> : <SignedOut />}
        {/* if user != null, display the UI. if user == null, they haven't signed in*/}
      </section>

    </div>
  );
}

function SignedIn(){

  const countsReference = firestore.collection('counts');

  const query = countsReference;
  const [roomCounts] = useCollectionData(query, {idField: 'id'});

  return(
    <div>
      
    <HeadcountUI />
    <header>Signed in!</header>

    <div>
      {roomCounts && roomCounts.map(room => <roomCount key={room.id} text={room} />)}
    </div>
    <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  )
}

function SignedOut(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function roomCount(props){
  const {text} = props.text;

  return <p>{text}</p>
}

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;
