import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";

import "./index.css";
import App from "./App";
import allReducers from "./reducers/index.js";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// store.subscribe(() => console.log(store.getState()));

// //despatcher:
// store.dispatch(increment());

// const store = createStore(
//   reducer, /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
