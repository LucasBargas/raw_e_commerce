import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [idRef, setIdRef] = useState(undefined);

  return (
    <UserContext.Provider 
      value={{ 
        idRef,
        setIdRef,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}