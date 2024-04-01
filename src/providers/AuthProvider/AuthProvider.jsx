import PropTypes from 'prop-types';
import { createContext } from 'react';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const authInfo = {
        name:'nodi sogorooooooooo',
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