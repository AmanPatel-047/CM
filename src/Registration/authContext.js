// authContext.js
import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // You can implement your actual authentication logic here
  const signup = async (email, password) => {
    // Simulate a signup process with a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Replace this with actual authentication logic
    console.log('Signup successful!', email);
  };

  const auth = {
    signup,
    // Other authentication methods and states can be added here
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
