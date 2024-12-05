import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // register
    const signUpWithEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const loginWithEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google 
    const googleProvider = new GoogleAuthProvider()
    const handleGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setLoading(result.user)
        })
        .catch(error=>{
            alert(error.massage)
        })
    }

    // update profile 
    const updatedProfileInfo = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

    // logout 
    const logout = ()=>{
        setLoading(true)
        signOut(auth)
        .then(res=>{})
    }

    // auth on change 
    useEffect(() => {
        const unsubscribe =   onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        }) 
        return()=>{
            unsubscribe()
        }
    }, [user, setUser])
    const authInfo = {
        user,
        loading,
        setUser,
        setLoading,
        signUpWithEmailPassword,
        loginWithEmailPassword,
        handleGoogle,
        logout,
        updatedProfileInfo
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;