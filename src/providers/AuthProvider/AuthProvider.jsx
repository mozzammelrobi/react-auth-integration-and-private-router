import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loding,setLoding] = useState(true)


    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // useEffect(() => {
    //     const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
    //      setUser(currentUser)
    //      console.log('observing currnt user inside useeffect auth provider', currentUser)
    //     })

    //     return () => {
    //         unSubscribe
    //     }
    // },[])

    const logOut = () => {
        setLoding(true)
        return signOut(auth)
    }


    // obserbe auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currnet value of the current user', currentUser)
            setUser(currentUser)
            setLoding(false)
        })
        return () => {
            unSubscribe
        }
    }, [])

    const authInfo = { 
        user,
        loding,
         createUser,
          singInUser,
          logOut
         }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}

/**
 * 1. create context and export it
 * 2. set provider with value
 * 3. use the AuthProvider in the main.jsx file
 * 4. access children in the AuthProvider component as childeren and use it in the middle of the Provider
 */