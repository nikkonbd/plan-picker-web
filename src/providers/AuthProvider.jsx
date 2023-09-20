import React, { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [monthName, setMonthName] = useState(" ");

  const googleProvider = new GoogleAuthProvider();
  // get month
  useEffect(() => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const d = new Date();
    setMonthName(month[d.getMonth()]);
  }, []);
  // let monthName = month[d.getMonth()];

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // LogOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // UpdateUser
  const updateUserProfile = (user, name, photoURL) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // Manage User
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log("Current User", currentUser);

      //set and get token
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", {
            email: currentUser?.email,
          })
          .then((data) => {
            // console.log("tokenfrom auth", data.data.token);
            const token = data.data.token;
            localStorage.setItem("access-token", token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      return unSubscribe;
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    logOut,
    updateUserProfile,
    googleLogin,
    monthName,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
