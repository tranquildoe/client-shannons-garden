import { useState, useEffect } from "react";
import APIHandler from "./../api/APIHandler";

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const [{ currentUser, isLoggedIn, isLoading }, setAuthState] = useState({
  //   currentUser: null,
  //   isLoggedIn: false,
  //   isLoading: false
  // });

  useEffect(() => {
    APIHandler.get("/is-loggedin")
      .then(res => {
        // IMPORTANT NOTE => ORDERD MATTERS
        setCurrentUser(res.data.currentUser);
        setIsLoggedIn(true);
        setIsLoading(false);
      })
      .catch(() => {
        setCurrentUser(null);
        setIsLoggedIn(false);
        setIsLoading(false);
      });
  }, [setCurrentUser]);

  return { isLoggedIn, isLoading, currentUser, setCurrentUser };
};
