import { useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase.config";

export const useGetUsersInfo = () => {
  const [userInfo, setUserInfo] = useState({
    displayName: null,
    photoURL: null,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        setUserInfo({
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
        //   dispatch(setCurrentUser(user));
      } else {
        // User is logged out, reset user info
        setUserInfo({
          displayName: null,
          photoURL: null,
        });
      }
      return unsubscribe;
    });
  }, []);
  return userInfo;
};
