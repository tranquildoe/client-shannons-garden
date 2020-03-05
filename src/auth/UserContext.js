import React from "react";
import { useAuth } from "../hooks/useAuth";

export const UserContext = React.createContext();

export default ({ children }) => {
  const { currentUser, setCurrentUser, isLoading, isLoggedIn } = useAuth();

  const UserContextValue = {
    currentUser,
    isLoggedIn,
    isLoading,
    setCurrentUser
  };

  return (
    <UserContext.Provider value={UserContextValue}>
      {children}
    </UserContext.Provider>
  );
};
