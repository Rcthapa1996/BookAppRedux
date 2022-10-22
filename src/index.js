import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
// import store from "./app/store";

import { createStore } from "redux";
// import { Provider } from 'react-redux'
// import App from './components/App'
import rootReducer from "./reducers";
const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
console.log("store", store);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
