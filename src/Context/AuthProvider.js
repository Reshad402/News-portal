import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import app from '../Firebase/Firebase.config';

//! this need to grab in right side nav js           //! AuthProvider is used to index.js files
export const AuthContext = createContext()

    //!-----------(1) Import getAuth as var auth as documentation
const auth = getAuth(app)                          


const AuthProvider = ({children}) => {
    const user = {displayName: 'Reshad'}
    //!-----------(2) Now get the (auth,provider) and return as given in firebase documentation
        const providerLogin = (provider)=>{
            return signInWithPopup(auth,provider);
        }




    const authInfo = {user,providerLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;