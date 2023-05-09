import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/Firebase.config';

//! this need to grab in right side nav js           //! AuthProvider is used to index.js files
export const AuthContext = createContext()

    //!-----------(1) Import getAuth as var auth as documentation
const auth = getAuth(app)                          


const AuthProvider = ({children}) => {
    //?------(1) Here important that we use 
    const [user,setUser] = useState(null)
    

    //!-----------(2) Now get the (auth,provider) and return as given in firebase documentation
        const providerLogin = (provider)=>{
            return signInWithPopup(auth,provider);
        }


                                                            //?---(1)Create user with email pass
        const createUser = (email,password)=>{
            return createUserWithEmailAndPassword(auth,email,password)
        }
                                                            //?---(2) User signIN
        const signIn = (email,password)=>{
            return signInWithEmailAndPassword(auth,email,password);
        }



        const logOut = () =>{
            return signOut(auth);
        }



    //?---------(2) outside kew monitor korche so useEffect
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser)
        });

        return () =>{
            unsubscribe();
        }

    },[])



    const authInfo = {user,providerLogin,logOut,createUser,signIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;