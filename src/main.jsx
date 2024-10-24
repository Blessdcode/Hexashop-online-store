import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";

import "./index.scss";
import App from "./App";
import { store } from "./store/store";
import { CategoriesProvider } from "./context/products.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
