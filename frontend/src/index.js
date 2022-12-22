import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "./store";
//baseurl
axios.defaults.baseURL = "http://localhost:5000";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename='/'>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
