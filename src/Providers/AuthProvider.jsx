import React, { createContext, useEffect, useState } from 'react';
import app from '../Utilites/Firebase.init';
import {GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth"
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true)


    const googleProvider = new GoogleAuthProvider()


    //login with google
    const loginWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            setLoader(false)
            if(currentUser && currentUser?.email){
                const loggedUser = {
                    email:currentUser.email,
                };
                fetch("http://localhost:5000/jwt",{
                    method:"POST",
                    headers:{
                        "content-type" : "application/json"
                    },
                    body:JSON.stringify(loggedUser)

                })
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("volunteer-access-token",data.token)
                });
            }
            else{
                localStorage.removeItem("volunteer-access-token")
            }
        })
        return () => {
            return unSubscribe()
        }
    },[])


    //logOUt
    const logOut = () => {
        return signOut(auth);
    }

    

    const authInfo ={
        user,
        loader,
        loginWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;