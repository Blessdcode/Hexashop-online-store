import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation";
import Home from "./routes/home/home.component";
import Shop from "./shop/shop.component";
import Authentication from "./routes/auth/auth.component";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase.config";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  },[]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
      </Route>
      <Route path="auth" element={<Authentication />} />
    </Routes>
  );
};

export default App;