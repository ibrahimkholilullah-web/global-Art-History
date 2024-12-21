import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
      }
    
      const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
    
      const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }
    
      const logOut = async () => {
        setLoading(true)
        return signOut(auth)
      }
      const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }
      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
      },[])
    const dataInfo = {
        createUser,
        user,
        setUser,
        setLoading,
        loading,
        logOut,
        signInWithGoogle,
        signIn,
        updateUserProfile

    }
    return (
        <AuthContext.Provider value={dataInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;