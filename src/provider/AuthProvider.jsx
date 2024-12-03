import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // register
    const signUpWithEmailPassword = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // auth on change 
    useEffect(() => {
     const unsubscribe =   onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        }) 
        return()=>{
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        setUser,
        setLoading,
        signUpWithEmailPassword,
        loginWithEmailPassword,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;