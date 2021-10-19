import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import initializeAuthentication from "../firebase/firebase.init";

//initialize firebase  authentication
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const history = useHistory();

  // Observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  // Sign Up Functionality
  const signUpUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        updateProfile(auth.currentUser, { displayName: name }).then(() => {
          history.push("/");
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  //Google Sign In
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
        history.push("/");
      })
      .catch((err) => console.log(err.message));
  };

  // Facebook Sign In
  const signInWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider)
      .then((res) => {
        setUser(res.user);
        history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Sign In Functionality
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser(res.user);
        history.push("/");
      })
      .catch((err) => console.log(err.message));
  };

  // sign out
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        history.push("/login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return {
    user,
    signInUser,
    signUpUser,
    signInWithGoogle,
    signInWithFacebook,
    signOutUser,
  };
};

export default useFirebase;
