import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../../Firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

 
export const AuthContext=createContext(null)


const AuthProviders = ({children}) => {
     const [users,setUsers]=useState(null)
     const[loading,setLoading]=useState(true)

     const providers=new GoogleAuthProvider()


     const createUsers=(email,password)=>{
         return createUserWithEmailAndPassword(auth, email, password)
     }

     const singInUsers=(email,password)=>{
          return signInWithEmailAndPassword(auth,email,password)
     }

     const handleGoogle=()=>{
          return  signInWithPopup(auth,providers)
        }
     const singOuts=()=>{
          return signOut(auth)
     }

     const updateProfileess =(name,image)=>{
          return updateProfile(auth.currentUser,{
               displayName:name,photoURL:image
          })

     }

     useEffect(()=>{
          const unsubscrbe= onAuthStateChanged(auth,currentUser=>{
           
            setUsers(currentUser)
            setLoading(false)
          })
           
            return ()=>{
                 unsubscrbe();
            }
       },[])

  
     const authInfo={
    
          createUsers,
          singInUsers,
          singOuts,
          handleGoogle,
          updateProfileess,
          users,
          loading

     }

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProviders;