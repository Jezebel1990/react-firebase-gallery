import { 
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
 } from 'firebase/auth';
 import React from 'react'
 import { useState } from 'react';
 import { useEffect } from 'react';
 import { useContext } from 'react';
 import { createContext } from 'react';
import { auth } from '../firebase/config';

const authContext = createContext();

export const useAuth = () => {
    return useContext(authContext);
};

const AuthContext = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [modal, setModal] = useState({ isOpen: false, title: '', content: '' });
    const [alert, setAlert] = useState({
      isAlert: false,
      severity: 'info',
      message: '',
      timeout: null,
      location: '',
    });
    const [loading, setLoading] = useState(false);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };
      const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
      };

    const logout = () => {
        return signOut(auth);
    };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          console.log('user status changed: ', user);
        });
        return unsubscribe;
      }, []);


    const value = {
        currentUser,
        signUp,
        login,
        logout,
        modal,
        setModal,
        loginWithGoogle,
        alert,
        setAlert,
        loading,
        setLoading,
    };
  return <authContext.Provider {...{ value }}>{children}</authContext.Provider>;
   
};

export default AuthContext;
